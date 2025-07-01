import { test, expect } from '@playwright/test';
import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from '../trabalho.js';

test.describe('Testes da disciplina - fundamentos JS', () => {

  test('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    expect(geradorDeTagsDeIdentificacao('Pantera')).toBe('PANTERA');
  });

  test('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    expect(verificarSePodeSerAdotado(1, 'M')).toBe(true);
  });

  test('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    expect(calcularConsumoDeRacao('Pitoco', 1, 14.5)).toBe(4350);
  });

  test('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    expect(decidirTipoDeAtividadePorPorte('pequeno')).toBe('brincar dentro de casa');
  });

  test('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync();
    expect(resultado).toBe('Pipoca');
  });

});
