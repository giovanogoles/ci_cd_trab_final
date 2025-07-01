// playwright.config.cjs
module.exports = {
  testDir: './prog-trabalho-final/testes',  // Caminho para a pasta de testes
  testMatch: '**/trabalho-final.js',  // Nome do seu arquivo de teste
  timeout: 30000,  // Timeout de 30 segundos por teste
  use: {
    headless: true,  // Executar os testes no modo headless (sem interface gráfica)
  },
};
