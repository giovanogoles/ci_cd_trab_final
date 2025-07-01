const { chromium } = require('playwright');

// Essas funções são carregadas globalmente pelo Mocha
before(async () => {
  global.browser = await chromium.launch({ headless: true });
});

after(async () => {
  await global.browser.close();
});

// Função global para criar uma nova página
global.page = async () => {
  return await global.browser.newPage();
};
