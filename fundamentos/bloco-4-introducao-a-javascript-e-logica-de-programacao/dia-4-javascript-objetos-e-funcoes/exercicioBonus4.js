let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let index = moradores.blocoDois.length-1;

console.log("O morador do bloco 2 de nome",moradores.blocoDois[index].nome,
moradores.blocoDois[index].sobrenome,"mora no",moradores.blocoDois[index].andar+
"º andar, apartamento", moradores.blocoDois[index].apartamento);