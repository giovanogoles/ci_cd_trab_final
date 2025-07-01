const { before, after, beforeEach, afterEach } = require('mocha');  // Importando explicitamente as funções do Mocha
const { chromium } = require('playwright');

let browser;

before(async () => {
  browser = await chromium.launch({ headless: true });
});

after(async () => {
  await browser.close();
});

// Função global para criar uma nova página
global.page = async () => {
  return await browser.newPage();
};
