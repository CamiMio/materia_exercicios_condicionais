const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (
    (idade < 12 && idade > 65 ) || 
    (possuiPatologia)|| 
    (altura < 150) 
){
    console.log("ACESSO NEGADO");

} else if ( idade < 18 || ehEstudante) {

    console.log("Pode brincar, pague R$ 10,00");

} else {
    console.log("Pode brincar, pague R$ 20,00");
}