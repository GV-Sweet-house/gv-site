// Edite apenas este arquivo para criar, remover ou alterar cupons.
// Tipos aceitos:
// percent: desconto em porcentagem sobre os produtos. Ex: value: 10 = 10% off.
// fixed: desconto fixo em reais. Ex: value: 5 = R$5 off.
// freeShipping: remove o valor do frete.
// minSubtotal: valor minimo em produtos para o cupom funcionar.
window.GV_COUPONS = {
  DESCONTO10: {
    label: "R$10 de desconto",
    type: "fixed",
    value: 10,
  },
  FRETEGRATIS: {
    label: "Frete gratis",
    type: "freeShipping",
    value: 100,
  },
  BEMVINDO10: {
    label: "10% de desconto",
    type: "percent",
    value: 10,
  },
  DOCE10: {
    label: "10% de desconto em compras acima de R$30",
    type: "percent",
    value: 10,
    minSubtotal: 30,
  },
};
