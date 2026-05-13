// admin.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* FIREBASE */

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

/* ELEMENTOS */

const orders =
  document.getElementById("orders");

const totalEl =
  document.getElementById("total");

const pedidosCount =
  document.getElementById("pedidosCount");

const clientesCount =
  document.getElementById("clientesCount");

const searchInput =
  document.getElementById("searchInput");

/* TABS */

const tabPedidos =
  document.getElementById("tabPedidos");

const tabDashboard =
  document.getElementById("tabDashboard");

const dashboard =
  document.querySelector(".dashboard");

const ordersArea =
  document.querySelector(".orders-area");

/* BOTÕES */

tabPedidos.onclick = () => {

  ordersArea.style.display = "grid";

  dashboard.style.display = "none";

  tabPedidos.classList.add("active");

  tabDashboard.classList.remove("active");
};

tabDashboard.onclick = () => {

  ordersArea.style.display = "none";

  dashboard.style.display = "flex";

  tabDashboard.classList.add("active");

  tabPedidos.classList.remove("active");
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

        tension:0.45,

        pointRadius:6,

        pointHoverRadius:8,

        pointBackgroundColor:"#ff3f68",

        pointBorderColor:"#fff",

        pointBorderWidth:2
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

        <div class="pedido-info">

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

    document.getElementById("activity").innerHTML = `
      <li>${pedidos} pedidos registrados</li>
      <li>${entregues} pedidos entregues</li>
      <li>${preparando} pedidos preparando</li>
      <li>Faturamento atualizado</li>
    `;

    renderChart(vendas);
  });
}

/* SEARCH */

searchInput.addEventListener("input", () => {
  loadOrders();
});

/* START */

loadOrders();