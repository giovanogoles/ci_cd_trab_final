// test-helper.js
const { chromium } = require('playwright');
const { before, after } = require('mocha'); // Importar as funções do mocha explicitamente

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
