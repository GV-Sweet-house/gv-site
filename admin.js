// admin.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKaxhWjB_8DFpVSXwDkz2SOa-fOCVDLaU",
  authDomain: "gv-sweet-house.firebaseapp.com",
  projectId: "gv-sweet-house",
  storageBucket: "gv-sweet-house.firebasestorage.app",
  messagingSenderId: "693251459124",
  appId: "1:693251459124:web:1732e0138d5167b41d6261"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const orders = document.getElementById("orders");

const totalEl = document.getElementById("total");

const pedidosCount = document.getElementById("pedidosCount");

const clientesCount = document.getElementById("clientesCount");

const searchInput = document.getElementById("searchInput");

const tabPedidos = document.getElementById("tabPedidos");

const tabDashboard = document.getElementById("tabDashboard");

const tabCupons = document.getElementById("tabCupons");

const dashboard = document.querySelector(".dashboard");

const ordersArea = document.querySelector(".orders-area");

const cuponsPage = document.querySelector(".cupons-page");

/* TABS */

tabPedidos.onclick = () => {

  ordersArea.style.display = "grid";

  dashboard.style.display = "none";

  cuponsPage.style.display = "none";

  tabPedidos.classList.add("active");

  tabDashboard.classList.remove("active");

  tabCupons.classList.remove("active");
};

tabDashboard.onclick = () => {

  ordersArea.style.display = "none";

  dashboard.style.display = "flex";

  cuponsPage.style.display = "none";

  tabDashboard.classList.add("active");

  tabPedidos.classList.remove("active");

  tabCupons.classList.remove("active");
};

tabCupons.onclick = () => {

  ordersArea.style.display = "none";

  dashboard.style.display = "none";

  cuponsPage.style.display = "flex";

  tabCupons.classList.add("active");

  tabPedidos.classList.remove("active");

  tabDashboard.classList.remove("active");
};

/* STATUS */

window.changeStatus = async (id, status) => {

  await updateDoc(doc(db, "pedidos", id), {
    status
  });
};

/* CHART */

let chart;

function renderChart(vendas){

  const labels = Object.keys(vendas);

  const data = Object.values(vendas);

  if(chart){
    chart.destroy();
  }

  chart = new Chart(document.getElementById("chart"), {

    type:"line",

    data:{
      labels,

      datasets:[{
        label:"Vendas por dia",
        data,
        borderColor:"#ff3f68",
        backgroundColor:"rgba(255,63,104,0.12)",
        fill:true,
        borderWidth:4,
        tension:0.45
      }]
    },

    options:{
      responsive:true,
      maintainAspectRatio:false
    }
  });
}

/* LOAD PEDIDOS */

function loadOrders(){

  onSnapshot(collection(db, "pedidos"), (snap)=>{

    orders.innerHTML = "";

    let total = 0;

    let pedidos = 0;

    let clientes = new Set();

    let vendas = {};

    let entregues = 0;

    let preparando = 0;

    const search =
      searchInput.value.toLowerCase();

    snap.forEach((docItem)=>{

      const p = docItem.data();

      if(
        search &&
        !p.nome?.toLowerCase().includes(search)
      ){
        return;
      }

      pedidos++;

      total += Number(p.subtotal || 0);

      clientes.add(p.nome);

      if(p.status === "Entregue"){
        entregues++;
      }

      if(p.status === "Preparando"){
        preparando++;
      }

      const data = p.data
      ? new Date(p.data).toLocaleDateString("pt-BR")
      : "Hoje";

      if(!vendas[data]){
        vendas[data] = 0;
      }

      vendas[data] += Number(p.subtotal || 0);

      orders.innerHTML += `

      <div class="pedido">

        <div>

          <strong>${p.nome || "Cliente"}</strong>

          <p class="price">
            R$ ${p.subtotal || 0}
          </p>

          <p>
            Status: ${p.status || "Novo"}
          </p>

        </div>

        <div class="status-buttons">

          <button
            class="novo"
            onclick="changeStatus('${docItem.id}','Novo')">
            Novo
          </button>

          <button
            class="prep"
            onclick="changeStatus('${docItem.id}','Preparando')">
            Preparando
          </button>

          <button
            class="entrega"
            onclick="changeStatus('${docItem.id}','Saiu')">
            Entrega
          </button>

          <button
            class="ok"
            onclick="changeStatus('${docItem.id}','Entregue')">
            Entregue
          </button>

        </div>

      </div>
      `;
    });

    totalEl.innerText =
      "R$ " + total.toFixed(2);

    pedidosCount.innerText = pedidos;

    clientesCount.innerText = clientes.size;

    document.getElementById("todayOrders").innerText =
      pedidos;

    document.getElementById("doneOrders").innerText =
      entregues;

    document.getElementById("prepOrders").innerText =
      preparando;

    document.getElementById("faturamento").innerText =
      "R$ " + total.toFixed(2);

    renderChart(vendas);
  });
}

/* SEARCH */

searchInput.addEventListener("input", () => {
  loadOrders();
});

/* CUPONS */

const criarCupom =
  document.getElementById("criarCupom");

criarCupom.onclick = async () => {

  const codigo =
    document.getElementById("cupomCodigo")
    .value
    .toUpperCase();

  const tipo =
    document.getElementById("cupomTipo")
    .value;

  const desconto =
    Number(
      document.getElementById("cupomDesconto")
      .value
    );

  const valorMinimo =
    Number(
      document.getElementById("cupomMinimo")
      .value || 0
    );

  const validade =
    document.getElementById("cupomValidade")
    .value;

  if(!codigo || !desconto){

    alert("Preencha os campos");

    return;
  }

  await setDoc(doc(db, "cupons", codigo), {

    codigo,
    tipo,
    desconto,
    valorMinimo,
    validade,
    ativo:true,
    usos:0,
    maxUsos:9999

  });

  alert("Cupom criado");

  loadCupons();
};

/* LISTAR CUPONS */

async function loadCupons(){

  const area =
    document.getElementById("listaCupons");

  area.innerHTML = "";

  const snap =
    await getDocs(collection(db, "cupons"));

  snap.forEach((docItem)=>{

    const c = docItem.data();

    area.innerHTML += `

      <div class="cupom">

        <div>

          <h2>${c.codigo}</h2>

          <p>
            Tipo:
            ${c.tipo || "porcentagem"}
          </p>

          <p>
            Desconto:
            ${c.desconto || 0}
            ${
              c.tipo === "fixo"
              ? "R$"
              : "%"
            }
          </p>

          <p>
            ${
              c.ativo
              ? "🟢 Ativo"
              : "🔴 Inativo"
            }
          </p>

          ${
            c.valorMinimo
            ? `
              <p>
                Pedido mínimo:
                R$ ${c.valorMinimo}
              </p>
            `
            : ""
          }

          ${
            c.validade
            ? `
              <p>
                Validade:
                ${c.validade}
              </p>
            `
            : ""
          }

        </div>

        <div class="cupom-buttons">

          <button
            class="toggleCupom"
            onclick="
              toggleCupom(
                '${docItem.id}',
                ${c.ativo}
              )
            "
          >
            ${
              c.ativo
              ? "Desativar"
              : "Ativar"
            }
          </button>

        </div>

      </div>

    `;
  });
}

/* ATIVAR/DESATIVAR */

window.toggleCupom = async (id, ativo) => {

  await updateDoc(doc(db, "cupons", id), {

    ativo: !ativo

  });

  loadCupons();
};

loadOrders();

loadCupons();