// test-helper.js

// Requerendo o Mocha e garantindo que as funções estejam disponíveis
require('mocha');
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
