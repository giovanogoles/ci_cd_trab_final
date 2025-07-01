//CRIANDO AS FUNÇÕES
import readline from 'readline'

function geradorDeTagsDeIdentificacao(nomeDog){
    
    if (nomeDog) {
        return nomeDog.toUpperCase();
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question ('Digite o nome do Cão: ', (nomeDog) => {
        let nomeDogFormatado = nomeDog.toUpperCase();
        console.log(`Tag de identificação: ${nomeDogFormatado}`);
        rl.close();

        return nomeDogFormatado;
    });
}

//--------------------------------------------------------------
 
function verificarSePodeSerAdotado(idadeDog, porteDog){

    if  (idadeDog !== undefined && porteDog !== undefined){
        return parseInt(idadeDog) === 1 && porteDog.trim().toUpperCase() === 'M';
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question ('Digite a idade do Cão: ', (idadeDog) => {
        rl.question ('Digite o porte do Cão: ', (porteDog) => { 
            console.log (`A idade do Cão é: ${idadeDog}`);
            console.log (`O porte do Cão é: ${porteDog}`);
            
            let idadeDogFormatado = parseInt(idadeDog);
            let porteDogFormatado = porteDog.trim().toUpperCase();            

        (idadeDogFormatado === 1) && (porteDogFormatado === 'M')
            ? console.log(`O Cão pode ser adotado pois tem ${idadeDogFormatado} anos de idade e porte ${porteDogFormatado}`)
            : console.log(`O Cão não pode ser adotado pois tem ${idadeDogFormatado} anos de idade e porte ${porteDogFormatado}`)
    
                rl.close();
    
        });
    });
}

//--------------------------------------------------------------

function calcularConsumoDeRacao(nomeDog, idadeDog, pesoDog){
    if (nomeDog !== undefined && idadeDog !== undefined && pesoDog !== undefined) {
        return parseFloat((pesoDog * 0.3) * 1000);
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question ('Digite o nome do Cão: ', (nomeDog) => {
        rl.question ('Digite a idade do Cão: ', (idadeDog) => {
            rl.question ('Digite o peso do Cão: ', (pesoDog) => {
                
                let consumoDiario = parseFloat((parseFloat(pesoDog) * 0.3) * 1000);

                console.log (`O nome do Cão é: ${nomeDog}`);
                console.log (`A idade do Cão é: ${idadeDog}`);
                console.log (`O peso do Cão é:  ${pesoDog}`);

                console.log (`Consumo diário de ração: ${consumoDiario} gramas`);
                rl.close();
            });
        });
    });
}

//--------------------------------------------------------------

function decidirTipoDeAtividadePorPorte(porteDog){

    let atividade = "";
    let porteValido = true;

    if (porteDog !== undefined) {
        switch(porteDog.toLowerCase().trim()){
            case "pequeno": {
                atividade = "brincar dentro de casa"
                break
            }
            case "médio":
            case "medio": {
                atividade = "caminhada no quarteirão"
                break
            }
            case "grande": {
                atividade = "correr no parque"
                break
            }
            default: 
                porteValido = false;
            }

        return porteValido ? atividade : 'sem atividade sugerida pois o porte é invalido!';
    } 
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

    rl.question ('Digite o porte do Cão: ', (porteDog) => {
            atividade = decidirTipoDeAtividadePorPorte(porteDog);
            atividade ? console.log(`Atividade sugerida: ${atividade}`) : console.log('Porte inválido');

        rl.close(); 
    });
}

//--------------------------------------------------------------

async function buscarDadoAsync(dado) {
  const DADOBUSCADO = (dado !== undefined && String(dado).trim().length > 0)
    ? String(dado).trim()
    : 'Pipoca';

  return Promise.resolve(DADOBUSCADO);
}

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}

//--------------------------------------------------------------

//TESTANDO AS FUNÇÕES SEPARADAS
console.log('\n--- TESTES MANUAIS ---\n');

// geradorDeTagsDeIdentificacao();
console.log(geradorDeTagsDeIdentificacao('PanTERA'));
console.log(geradorDeTagsDeIdentificacao('margot'));
console.log(geradorDeTagsDeIdentificacao('MINGAU')); 


//verificarSePodeSerAdotado();
console.log(verificarSePodeSerAdotado('1','G'));
console.log(verificarSePodeSerAdotado('2','g'));
console.log(verificarSePodeSerAdotado('1','M'));
console.log(verificarSePodeSerAdotado('1', 'm'));
console.log(verificarSePodeSerAdotado('2','m'));
console.log(verificarSePodeSerAdotado('2','M'));
console.log(verificarSePodeSerAdotado('1','P'));
console.log(verificarSePodeSerAdotado('1','p'));
console.log(verificarSePodeSerAdotado('2','P'));
console.log(verificarSePodeSerAdotado('2','p'));

//calcularConsumoDeRacao();
console.log(calcularConsumoDeRacao('Pitoco', 1, 14.5));
console.log(calcularConsumoDeRacao('Benoit', 3, 9.9));
console.log(calcularConsumoDeRacao('Margot', 11, 8));


//decidirTipoDeAtividadePorPorte();
console.log(decidirTipoDeAtividadePorPorte('grande'));
console.log(decidirTipoDeAtividadePorPorte('Grande'));
console.log(decidirTipoDeAtividadePorPorte('GRANDE'));
console.log(decidirTipoDeAtividadePorPorte('pequeno'));
console.log(decidirTipoDeAtividadePorPorte('médio'));
console.log(decidirTipoDeAtividadePorPorte('medio'));
console.log(decidirTipoDeAtividadePorPorte('gigante'));
console.log(decidirTipoDeAtividadePorPorte('GIGANTE'));
console.log(decidirTipoDeAtividadePorPorte('qualquerum'));

//buscarDadoAsync();
await buscarDadoAsync();
await buscarDadoAsync('Pipoca');
await buscarDadoAsync('Margot');
