import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth(app);

/* ELEMENTOS */

const loginBox = document.querySelector(".login-wrapper");
const panel = document.querySelector(".panel");

const ordersArea = document.querySelector(".orders");

const totalEl = document.querySelectorAll(".card h3")[0];
const pedidosEl = document.querySelectorAll(".card h3")[1];
const clientesEl = document.querySelectorAll(".card h3")[2];

const tabButtons = document.querySelectorAll(".tabs button");

const dashboard = document.querySelector(".dashboard");
const orders = document.querySelector(".orders");

/* LOGIN */

document.querySelector(".login-box button").onclick = async () => {

  const email = document.querySelectorAll(".login-box input")[0].value;

  const password = document.querySelectorAll(".login-box input")[1].value;

  try {

    await signInWithEmailAndPassword(auth, email, password);

  } catch (e) {

    alert("Erro no login");

    console.log(e);
  }
};

/* AUTH */

onAuthStateChanged(auth, (user) => {

  if (user) {

    loginBox.style.display = "none";

    panel.style.display = "block";

    loadOrders();

  } else {

    loginBox.style.display = "flex";

    panel.style.display = "none";
  }
});

/* TABS */

tabButtons[0].onclick = () => {

  orders.style.display = "block";

  dashboard.style.display = "none";

  tabButtons[0].classList.add("active");
  tabButtons[1].classList.remove("active");
};

tabButtons[1].onclick = () => {

  orders.style.display = "block";

  dashboard.style.display = "block";

  tabButtons[1].classList.add("active");
  tabButtons[0].classList.remove("active");
};

/* CHART */

let chart;

function renderChart(vendas) {

  const labels = Object.keys(vendas);

  const data = Object.values(vendas);

  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("chart"), {

    type: "line",

    data: {

      labels,

      datasets: [{
        label: "Vendas por dia",
        data,
        borderColor: "#ff3f68",
        borderWidth: 4,
        tension: 0.4,
        pointRadius: 5
      }]
    },

    options: {

      responsive: true,

      plugins: {
        legend: {
          labels: {
            color: "white"
          }
        }
      },

      scales: {

        x: {
          ticks: {
            color: "white"
          },

          grid: {
            color: "#2a2a2a"
          }
        },

        y: {
          ticks: {
            color: "white"
          },

          grid: {
            color: "#2a2a2a"
          }
        }
      }
    }
  });
}

/* STATUS */

window.changeStatus = async (id, status) => {

  await updateDoc(doc(db, "pedidos", id), {
    status
  });
};

/* LOAD PEDIDOS */

function loadOrders() {

  onSnapshot(collection(db, "pedidos"), (snap) => {

    ordersArea.innerHTML = "";

    let total = 0;

    let pedidos = 0;

    let clientes = new Set();

    let vendas = {};

    snap.forEach((docItem) => {

      const p = docItem.data();

      pedidos++;

      total += Number(p.subtotal || 0);

      clientes.add(p.nome);

      const data = p.data
        ? new Date(p.data).toLocaleDateString("pt-BR")
        : "Hoje";

      if (!vendas[data]) {

        vendas[data] = 0;
      }

      vendas[data] += Number(p.subtotal || 0);

      ordersArea.innerHTML += `

        <div class="pedido">

          <div class="pedido-info">

            <strong>${p.nome || "Cliente"}</strong>

            <p class="price">
              R$ ${p.subtotal || 0}
            </p>

            <p>
              Status:
              <span>${p.status || "Novo"}</span>
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

    totalEl.innerText = "R$ " + total.toFixed(2);

    pedidosEl.innerText = pedidos;

    clientesEl.innerText = clientes.size;

    renderChart(vendas);
  });
}