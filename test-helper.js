// test-helper.js
const { chromium } = require('playwright');

// Inicializa o navegador antes de executar os testes
let browser;

before(async () => {
  browser = await chromium.launch({ headless: true });  // `headless: true` para rodar sem abrir a interface do navegador
});

// Fecha o navegador após os testes
after(async () => {
  await browser.close();
});

// Função para obter uma nova página
global.page = async () => {
  return await browser.newPage();
};
