const STORE_ZIP = "24736-085";
const STORE_COORDINATES = {
  latitude: -22.83357,
  longitude: -42.97897,
};
const FREIGHT_PRICE_PER_KM = 3;
const coupons = window.GV_COUPONS || {};
const WHATSAPP_NUMBER = "5521992194784";

const categories = ["Todos", "Bolos", "Morangos", "Brownie", "Copos", "Salgados", "Combos"];

const products = [
  {
    id: "morango-nutella",
    name: "Morango com Nutella",
    price: 12,
    category: "Morangos",
    bestSeller: true,
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1502414040897421343/486407127_18475206142064119_4931185641420393779_n.jpg?ex=69ff9f9c&is=69fe4e1c&hm=c0db728217d0f45c4a736bb7d20b621577221264b24c99868c05b854727e389a&=&format=webp",
  },
  {
    id: "coxinha-morango",
    name: "Morango do Amor",
    price: 12,
    category: "Morangos",
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1502414579374755840/image.jpg?ex=6a0048dd&is=69fef75d&hm=1eb631f2cf33c1d7ea35207ca842984e6a8efe1b373e5fcdc062b4121786a765&=&format=webp&width=414&height=552",
  },
  {
    id: "copo-morango",
    name: "Copo da felicidade de Morango",
    price: 17,
    category: "Copos",
    bestSeller: true,
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1502701655114907809/IMG_1243.png?ex=6a00ab79&is=69ff59f9&hm=ca7ff7753aed4b63a3183ff643ffd5d1f440b244a684fec3a59497afaab08a9f&=&format=webp&quality=lossless&width=340&height=551",
  },
  {
    id: "copo-ferreiro",
    name: "Copo da felicidade de Ferreiro",
    price: 17,
    category: "Copos",
    image:
      "https://cdn.discordapp.com/attachments/1415518658960031836/1503887806743973908/Copo-da-felicidade-de-Ferrero-Rocher-10.png?ex=6a04fc2a&is=6a03aaaa&hm=2005532a27e1b45cab0d2861351786038a4805ac7f338125ad9f4e400ffc6266&",
  },
  {
    id: "copo-uva",
    name: "Copo da felicidade de Uva",
    price: 17,
    category: "Copos",
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1502701654678442205/IMG_1244.png?ex=6a00ab79&is=69ff59f9&hm=7b5ca0e76b807de1fbf737ec44846bbb22b4be8dccf69d9b7af68044c78d7bda&=&format=webp&quality=lossless&width=343&height=552",
  },
  {
    id: "bolo-ninho-nutella",
    name: "Bolo de pote Ninho com Nutella",
    price: 12,
    category: "Bolos",
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1503885002205696170/IMG_1237.jpg?ex=6a04f98d&is=6a03a80d&hm=45f03a2fed8cfe87e6b72b545f7a4c1e88f11f0cb4567d853be7e366e0c877ef&=&format=webp&width=648&height=864",
  },
  {
    id: "bolo-ninho-geleia",
    name: "Bolo de pote Ninho com Geleia de Morango",
    price: 12,
    category: "Bolos",
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1503885002591567882/IMG_1236.jpg?ex=6a04f98d&is=6a03a80d&hm=c1dedd530826969a2cb4d03497ad4b9144b6b8587a6bf3b747a08b20efa77cc7&=&format=webp&width=648&height=864",
  },
  {
    id: "bolo-ninho-kinder",
    name: "Bolo de pote Ninho com kinder bueno",
    price: 12,
    category: "Bolos",
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1503885001870147584/IMG_1239.jpg?ex=6a04f98d&is=6a03a80d&hm=d123b2d23a9710660b564b62314ddd830f2d2fec5fafcb86143b6a81df7663fa&=&format=webp&width=648&height=864",
  },
  {
    id: "bolo-ninho-coco",
    name: "Bolo de pote Ninho com Coco",
    price: 12,
    category: "Bolos",
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1503885002952282112/IMG_1235.jpg?ex=6a04f98d&is=6a03a80d&hm=b79ba313da6828aa2f2ecfece4f0489a160a450680463925ac1505472ed3b9a5&=&format=webp&width=648&height=864",
  },
  {
    id: "banoffe",
    name: "Banoffe",
    price: 17,
    category: "Copos",
    bestSeller: true,
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1502414579601510461/image.jpg?ex=6a0048dd&is=69fef75d&hm=f5e3a4c07592ffe496ae13323b0ad6d0e196c511f12cbb899c2cccbe3161ff30&=&format=webp&width=368&height=552",
  },
  {
    id: "torta-limao",
    name: "Torta de Limao",
    price: 10,
    category: "Bolos",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "salada-fruta",
    name: "Salada de Fruta",
    price: 10,
    category: "Copos",
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1502414579915952168/image.jpg?ex=6a0048dd&is=69fef75d&hm=3605a1d0d818f6caec9f04d625e85bf276ce6837b157509fb9e45d1a3d75ad67&=&format=webp&width=414&height=552",
  },
  {
    id: "copo-kinde",
    name: "Copo da felicidade de kinder bueno",
    price: 10,
    category: "Copos",
    image:
      "https://media.discordapp.net/attachments/1415518658960031836/1503885000733626368/IMG_1247.jpg?ex=6a04f98d&is=6a03a80d&hm=839c5231b7b9e90593506ff9368b6b0f516db755a153ae37a08b52e117bdfc1a&=&format=webp&width=648&height=864",
  },
  {
    id: "combo-casal",
    name: "Combo casal",
    price: 25,
    category: "Combos",
    bestSeller: true,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80",
  },
];

const state = {
  activeCategory: "Todos",
  cart: {},
  activeCoupon: null,
  deliveryFee: 0,
  deliveryDistanceKm: 0,
  deliveryCalculated: false,
  freightTimer: null,
  lastCalculatedDestination: "",
  deferredInstallPrompt: null,
};

const elements = {
  categoryTabs: document.querySelector("#categoryTabs"),
  productGrid: document.querySelector("#productGrid"),
  cartItems: document.querySelector("#cartItems"),
  cartCount: document.querySelector("#cartCount"),
  subtotalValue: document.querySelector("#subtotalValue"),
  deliveryFeeValue: document.querySelector("#deliveryFeeValue"),
  discountRow: document.querySelector("#discountRow"),
  discountValue: document.querySelector("#discountValue"),
  totalValue: document.querySelector("#totalValue"),
  couponInput: document.querySelector("#couponInput"),
  couponFeedback: document.querySelector("#couponFeedback"),
  applyCouponButton: document.querySelector("#applyCouponButton"),
  customerZip: document.querySelector("#customerZip"),
  freightFeedback: document.querySelector("#freightFeedback"),
  calculateFreightButton: document.querySelector("#calculateFreightButton"),
  searchZipButton: document.querySelector("#searchZipButton"),
  checkoutForm: document.querySelector("#checkoutForm"),
  customerName: document.querySelector("#customerName"),
  customerStreet: document.querySelector("#customerStreet"),
  customerNumber: document.querySelector("#customerNumber"),
  customerComplement: document.querySelector("#customerComplement"),
  customerNeighborhood: document.querySelector("#customerNeighborhood"),
  customerCity: document.querySelector("#customerCity"),
  customerState: document.querySelector("#customerState"),
  installButton: document.querySelector("#installButton"),
  splashScreen: document.querySelector("#splashScreen"),
  toast: document.querySelector("#toast"),
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function getCartEntries() {
  return Object.entries(state.cart)
    .map(([productId, quantity]) => ({
      product: getProductById(productId),
      quantity,
    }))
    .filter((entry) => entry.product && entry.quantity > 0);
}

function calculateSubtotal() {
  return getCartEntries().reduce(
    (subtotal, entry) => subtotal + entry.product.price * entry.quantity,
    0,
  );
}

function normalizeZip(zip) {
  const digits = zip.replace(/\D/g, "").slice(0, 8);

  if (digits.length <= 5) {
    return digits;
  }

  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function calculateDistanceKm(from, to) {
  const earthRadiusKm = 6371;
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const latitudeDistance = toRadians(to.latitude - from.latitude);
  const longitudeDistance = toRadians(to.longitude - from.longitude);
  const firstPointLatitude = toRadians(from.latitude);
  const secondPointLatitude = toRadians(to.latitude);

  const haversine =
    Math.sin(latitudeDistance / 2) ** 2 +
    Math.cos(firstPointLatitude) *
      Math.cos(secondPointLatitude) *
      Math.sin(longitudeDistance / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

async function fetchAddressCoordinates(address) {
  const normalizedAddress = address
    .trim()
    .replace(/\s+/g, " ")
    .replace(/,?\s*Brasil$/i, "");
  const searchAddress = `${normalizedAddress}, Brasil`;
  const params = new URLSearchParams({
    q: searchAddress,
    format: "json",
    limit: "1",
    countrycodes: "br",
  });
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Endereco nao encontrado.");
  }

  const results = await response.json();
  const bestMatch = results[0];

  if (!bestMatch?.lat || !bestMatch?.lon) {
    throw new Error("Endereco sem coordenadas disponiveis.");
  }

  return {
    latitude: Number(bestMatch.lat),
    longitude: Number(bestMatch.lon),
    label: bestMatch.display_name,
  };
}

async function fetchZipAddress(zip) {
  const cleanZip = zip.replace(/\D/g, "");

  try {
    const viaCepResponse = await fetch(`https://viacep.com.br/ws/${cleanZip}/json/`);

    if (viaCepResponse.ok) {
      const viaCepData = await viaCepResponse.json();

      if (!viaCepData.erro) {
        return {
          street: viaCepData.logradouro || "",
          neighborhood: viaCepData.bairro || "",
          city: viaCepData.localidade || "",
          state: viaCepData.uf || "",
        };
      }
    }
  } catch (error) {
    console.warn("ViaCEP indisponivel, tentando BrasilAPI.", error);
  }

  const brasilApiResponse = await fetch(`https://brasilapi.com.br/api/cep/v1/${cleanZip}`);

  if (!brasilApiResponse.ok) {
    throw new Error("CEP nao encontrado.");
  }

  const brasilApiData = await brasilApiResponse.json();

  return {
    street: brasilApiData.street || "",
    neighborhood: brasilApiData.neighborhood || "",
    city: brasilApiData.city || "",
    state: brasilApiData.state || "",
  };
}

function getCustomerAddress() {
  const street = elements.customerStreet.value.trim();
  const number = elements.customerNumber.value.trim();
  const complement = elements.customerComplement.value.trim();
  const neighborhood = elements.customerNeighborhood.value.trim();
  const city = elements.customerCity.value.trim();
  const state = elements.customerState.value.trim().toUpperCase();

  return {
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    full: [
      `${street}${number ? `, ${number}` : ""}`,
      complement,
      neighborhood,
      city && state ? `${city} - ${state}` : city || state,
    ]
      .filter(Boolean)
      .join(", "),
    geocode: [street, number, neighborhood, city, state, "Brasil"].filter(Boolean).join(", "),
  };
}

function hasAddressForFreight() {
  const address = getCustomerAddress();

  return Boolean(
    address.street && address.number && address.neighborhood && address.city && address.state,
  );
}

function resetFreight() {
  state.deliveryFee = 0;
  state.deliveryDistanceKm = 0;
  state.deliveryCalculated = false;
  state.lastCalculatedDestination = "";
  renderTotals();
}

function queueFreightCalculation() {
  window.clearTimeout(state.freightTimer);
  state.freightTimer = window.setTimeout(calculateFreight, 700);
}

function calculateCouponDiscount(subtotal, deliveryFee) {
  const coupon = coupons[state.activeCoupon];

  if (!state.activeCoupon || !coupon) {
    return 0;
  }

  if (coupon.minSubtotal && subtotal < coupon.minSubtotal) {
    return 0;
  }

  if (coupon.type === "percent") {
    return subtotal * (coupon.value / 100);
  }

  if (coupon.type === "fixed") {
    return coupon.value;
  }

  if (coupon.type === "freeShipping") {
    return deliveryFee;
  }

  return 0;
}

function calculateDiscount(subtotal, deliveryFee = state.deliveryFee) {
  return Math.min(subtotal + deliveryFee, calculateCouponDiscount(subtotal, deliveryFee));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2300);
}

function renderCategories() {
  elements.categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-tab ${category === state.activeCategory ? "active" : ""}"
          type="button"
          role="tab"
          aria-selected="${category === state.activeCategory}"
          data-category="${category}"
        >
          ${category}
        </button>
      `,
    )
    .join("");
}

function renderProducts() {
  const filteredProducts =
    state.activeCategory === "Todos"
      ? products
      : products.filter((product) => product.category === state.activeCategory);

  elements.productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            ${product.bestSeller ? '<span class="best-seller">Mais vendido</span>' : ""}
          </div>
          <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="product-footer">
              <strong class="price">${formatCurrency(product.price)}</strong>
              <button class="add-button" type="button" data-add-product="${product.id}">
                Adicionar
              </button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCart() {
  const cartEntries = getCartEntries();
  const itemCount = cartEntries.reduce((total, entry) => total + entry.quantity, 0);

  elements.cartCount.textContent = `${itemCount} ${itemCount === 1 ? "item" : "itens"}`;

  if (!cartEntries.length) {
    elements.cartItems.innerHTML = '<div class="empty-cart">Seu carrinho esta vazio.</div>';
  } else {
    elements.cartItems.innerHTML = cartEntries
      .map(
        ({ product, quantity }) => `
          <div class="cart-item">
            <div>
              <strong>${product.name}</strong>
              <span>${quantity} x ${formatCurrency(product.price)}</span>
            </div>
            <div class="quantity-control" aria-label="Quantidade de ${product.name}">
              <button class="quantity-button" type="button" data-decrease-product="${product.id}" aria-label="Diminuir">
                -
              </button>
              <output>${quantity}</output>
              <button class="quantity-button" type="button" data-add-product="${product.id}" aria-label="Aumentar">
                +
              </button>
            </div>
          </div>
        `,
      )
      .join("");
  }

  renderTotals();
}

function renderTotals() {
  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal, state.deliveryFee);
  const total = Math.max(0, subtotal + state.deliveryFee - discount);

  elements.subtotalValue.textContent = formatCurrency(subtotal);
  elements.deliveryFeeValue.textContent = state.deliveryCalculated
    ? formatCurrency(state.deliveryFee)
    : "Calcule pelo endereco";
  elements.discountValue.textContent = `-${formatCurrency(discount)}`;
  elements.totalValue.textContent = formatCurrency(total);
  elements.discountRow.hidden = discount <= 0;
}

function updateCart(productId, change) {
  const nextQuantity = (state.cart[productId] || 0) + change;

  if (nextQuantity <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = nextQuantity;
  }

  renderCart();
}

function applyCoupon() {
  const code = elements.couponInput.value.trim().toUpperCase();
  const subtotal = calculateSubtotal();

  if (!code) {
    state.activeCoupon = null;
    elements.couponFeedback.textContent = "";
    elements.couponFeedback.className = "coupon-feedback";
    renderTotals();
    return;
  }

  if (!coupons[code]) {
    state.activeCoupon = null;
    elements.couponFeedback.textContent = "Cupom invalido.";
    elements.couponFeedback.className = "coupon-feedback error";
    renderTotals();
    return;
  }

  if (coupons[code].minSubtotal && subtotal < coupons[code].minSubtotal) {
    state.activeCoupon = null;
    elements.couponFeedback.textContent = `Esse cupom vale para compras acima de ${formatCurrency(
      coupons[code].minSubtotal,
    )}.`;
    elements.couponFeedback.className = "coupon-feedback error";
    renderTotals();
    return;
  }

  state.activeCoupon = code;
  elements.couponInput.value = code;
  elements.couponFeedback.textContent = `${coupons[code].label} aplicado.`;
  elements.couponFeedback.className = "coupon-feedback success";
  renderTotals();
}

async function calculateFreight() {
  const address = getCustomerAddress();
  const destination = address.geocode;

  if (!address.street || !address.number || !address.neighborhood || !address.city || !address.state) {
    resetFreight();
    elements.freightFeedback.textContent = "Informe CEP, numero e confirme cidade/bairro para calcular.";
    elements.freightFeedback.className = "coupon-feedback error";
    return;
  }

  if (state.deliveryCalculated && state.lastCalculatedDestination === destination) {
    return;
  }

  elements.calculateFreightButton.disabled = true;
  elements.searchZipButton.disabled = true;
  elements.calculateFreightButton.textContent = "...";
  elements.freightFeedback.textContent = "Calculando frete...";
  elements.freightFeedback.className = "coupon-feedback";

  try {
    const customerCoordinates = await fetchAddressCoordinates(destination);
    const distanceKm = calculateDistanceKm(STORE_COORDINATES, customerCoordinates);

    state.deliveryDistanceKm = distanceKm;
    state.deliveryFee = Math.ceil(distanceKm * FREIGHT_PRICE_PER_KM);
    state.deliveryCalculated = true;
    state.lastCalculatedDestination = destination;
    elements.freightFeedback.textContent = `${distanceKm.toFixed(1)} km da loja. Frete: ${formatCurrency(
      state.deliveryFee,
    )}.`;
    elements.freightFeedback.className = "coupon-feedback success";
  } catch (error) {
    resetFreight();
    elements.freightFeedback.textContent =
      "Nao consegui achar esse endereco. Tente colocar rua, numero, bairro e cidade.";
    elements.freightFeedback.className = "coupon-feedback error";
  } finally {
    elements.calculateFreightButton.disabled = false;
    elements.searchZipButton.disabled = false;
    elements.calculateFreightButton.textContent = "Calcular frete";
    renderTotals();
  }
}

async function searchZipAddress() {
  const cleanZip = elements.customerZip.value.replace(/\D/g, "");

  if (cleanZip.length !== 8) {
    resetFreight();
    elements.freightFeedback.textContent = "Digite um CEP valido com 8 numeros.";
    elements.freightFeedback.className = "coupon-feedback error";
    return;
  }

  elements.searchZipButton.disabled = true;
  elements.calculateFreightButton.disabled = true;
  elements.searchZipButton.textContent = "...";
  elements.freightFeedback.textContent = "Buscando endereco...";
  elements.freightFeedback.className = "coupon-feedback";

  try {
    const address = await fetchZipAddress(cleanZip);

    elements.customerStreet.value = address.street;
    elements.customerNeighborhood.value = address.neighborhood;
    elements.customerCity.value = address.city;
    elements.customerState.value = address.state;
    elements.customerZip.value = normalizeZip(cleanZip);
    resetFreight();
    elements.freightFeedback.textContent = "Endereco encontrado. Agora informe o numero.";
    elements.freightFeedback.className = "coupon-feedback success";
    elements.customerNumber.focus();
  } catch (error) {
    resetFreight();
    elements.freightFeedback.textContent = "Nao encontrei esse CEP. Confira e tente novamente.";
    elements.freightFeedback.className = "coupon-feedback error";
  } finally {
    elements.searchZipButton.disabled = false;
    elements.calculateFreightButton.disabled = false;
    elements.searchZipButton.textContent = "Buscar";
  }
}

function buildWhatsAppMessage() {
  const cartEntries = getCartEntries();
  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal, state.deliveryFee);
  const total = Math.max(0, subtotal + state.deliveryFee - discount);
  const address = getCustomerAddress();
  const orderLines = cartEntries
    .map(
      ({ product, quantity }) =>
        `- ${quantity}x ${product.name} | ${formatCurrency(product.price)} cada | ${formatCurrency(
          product.price * quantity,
        )}`,
    )
    .join("\n");

  return [
    "Novo pedido - G&V Sweet House",
    "",
    "Itens:",
    orderLines,
    "",
    `Subtotal: ${formatCurrency(subtotal)}`,
    `Taxa de entrega: ${formatCurrency(state.deliveryFee)}`,
    discount ? `Desconto (${state.activeCoupon}): -${formatCurrency(discount)}` : "",
    `Total: ${formatCurrency(total)}`,
    "",
    "Cliente:",
    `Nome: ${elements.customerName.value.trim()}`,
    elements.customerZip.value.trim() ? `CEP: ${elements.customerZip.value.trim()}` : "",
    `Endereco: ${address.full}`,
    state.deliveryCalculated
      ? `Distancia aproximada: ${state.deliveryDistanceKm.toFixed(1)} km`
      : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function finishOrder(event) {
  event.preventDefault();

  if (!getCartEntries().length) {
    showToast("Adicione pelo menos um doce ao carrinho.");
    return;
  }

  if (!elements.checkoutForm.reportValidity()) {
    return;
  }

  if (!state.deliveryCalculated) {
    showToast("Calcule o frete antes de finalizar.");
    elements.customerNumber.focus();
    return;
  }

  const message = encodeURIComponent(buildWhatsAppMessage());
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
}

function setupEvents() {
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-product]");
    const decreaseButton = event.target.closest("[data-decrease-product]");
    const categoryButton = event.target.closest("[data-category]");

    if (addButton) {
      updateCart(addButton.dataset.addProduct, 1);
      showToast("Item adicionado ao carrinho.");
    }

    if (decreaseButton) {
      updateCart(decreaseButton.dataset.decreaseProduct, -1);
    }

    if (categoryButton) {
      state.activeCategory = categoryButton.dataset.category;
      renderCategories();
      renderProducts();
    }
  });

  elements.customerZip.addEventListener("input", () => {
    elements.customerZip.value = normalizeZip(elements.customerZip.value);
    elements.freightFeedback.textContent = "";
    elements.freightFeedback.className = "coupon-feedback";
    resetFreight();

    window.clearTimeout(state.freightTimer);

    if (elements.customerZip.value.replace(/\D/g, "").length === 8) {
      state.freightTimer = window.setTimeout(searchZipAddress, 500);
    }
  });

  [
    elements.customerStreet,
    elements.customerNumber,
    elements.customerComplement,
    elements.customerNeighborhood,
    elements.customerCity,
    elements.customerState,
  ].forEach((field) => {
    field.addEventListener("input", () => {
      elements.freightFeedback.textContent = "";
      elements.freightFeedback.className = "coupon-feedback";
      resetFreight();

      if (field === elements.customerState) {
        elements.customerState.value = elements.customerState.value.toUpperCase();
      }

      if (hasAddressForFreight()) {
        queueFreightCalculation();
      }
    });
  });

  elements.customerNumber.addEventListener("blur", () => {
    if (elements.customerNumber.value.trim()) {
      calculateFreight();
    }
  });

  elements.customerZip.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchZipAddress();
    }
  });
  elements.searchZipButton.addEventListener("click", searchZipAddress);
  elements.calculateFreightButton.addEventListener("click", calculateFreight);
  elements.applyCouponButton.addEventListener("click", applyCoupon);
  elements.couponInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      applyCoupon();
    }
  });
  elements.checkoutForm.addEventListener("submit", finishOrder);
}

function setupPwaInstall() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredInstallPrompt = event;
    elements.installButton.hidden = false;
  });

  elements.installButton.addEventListener("click", async () => {
    if (!state.deferredInstallPrompt) {
      return;
    }

    state.deferredInstallPrompt.prompt();
    await state.deferredInstallPrompt.userChoice;
    state.deferredInstallPrompt = null;
    elements.installButton.hidden = true;
  });
}

function showSplashScreen() {
  elements.splashScreen.classList.add("is-visible");
  window.setTimeout(() => {
    elements.splashScreen.classList.remove("is-visible");
  }, 850);
}

async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("sw.js");
    } catch (error) {
      console.warn("Service worker nao registrado.", error);
    }
  }
}

function init() {
  renderCategories();
  renderProducts();
  renderCart();
  setupEvents();
  setupPwaInstall();
  showSplashScreen();
  registerServiceWorker();
}

init();
