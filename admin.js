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

// 🔥 FIREBASE CONFIG
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

let chart;
let vendas = {};
let clientes = new Set();

// 🔐 LOGIN
document.getElementById("loginBtn").onclick = async () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try {
await signInWithEmailAndPassword(auth, email, password);
} catch (e) {
alert("Erro no login");
}
};

// 🔒 VERIFICA LOGIN
onAuthStateChanged(auth, (user) => {
if (user) {
document.getElementById("loginBox").style.display = "none";
document.getElementById("panel").classList.remove("hidden");
loadOrders();
} else {
document.getElementById("loginBox").style.display = "block";
document.getElementById("panel").classList.add("hidden");
}
});

// 📦 STATUS
window.changeStatus = async (id, status) => {
await updateDoc(doc(db, "pedidos", id), { status });
};

// 📦 PEDIDOS
function loadOrders() {

onSnapshot(collection(db, "pedidos"), (snap) => {

const area = document.getElementById("pedidos");
area.innerHTML = "";

vendas = {};
clientes.clear();

let total = 0;
let count = 0;

const today = new Date().toLocaleDateString("pt-BR");

snap.forEach((d) => {
const p = d.data();

const date = p.data
? new Date(p.data).toLocaleDateString("pt-BR")
: today;

clientes.add(p.nome);
total += Number(p.subtotal || 0);
count++;

if (!vendas[date]) vendas[date] = 0;
vendas[date] += Number(p.subtotal || 0);

area.innerHTML += `
<div class="pedido">
<strong>${p.nome}</strong><br>
R$ ${p.subtotal}<br>
Status: ${p.status}<br>

<button class="statusBtn" onclick="changeStatus('${d.id}','Novo')">Novo</button>
<button class="statusBtn" onclick="changeStatus('${d.id}','Preparando')">Preparando</button>
<button class="statusBtn" onclick="changeStatus('${d.id}','Saiu')">Entrega</button>
<button class="statusBtn" onclick="changeStatus('${d.id}','Entregue')">Entregue</button>
</div>
`;
});

document.getElementById("total").innerText = "R$ " + total;
document.getElementById("count").innerText = count;
document.getElementById("clientes").innerText = clientes.size;

renderChart();

});
}

// 📊 CHART
function renderChart() {

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
borderColor: "#ff4d6d",
tension: 0.3
}]
}
});
}

// 🔁 TABS
document.getElementById("tab1").onclick = () => {
document.getElementById("pedidos").classList.remove("hidden");
document.getElementById("dash").classList.add("hidden");
};

document.getElementById("tab2").onclick = () => {
document.getElementById("dash").classList.remove("hidden");
document.getElementById("pedidos").classList.add("hidden");
};