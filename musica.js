let musica1 ={
    nome:'tipo minato',
    cantor:'mhrap',
    lançamento:'28/12/2020',
    estilo:'rap geek'
}

function musiquinha(nome, cantor, lançamento, estilo){
    this.nome = nome;
    this.cantor = cantor;
    this.lançamento = lançamento;
    this.estilo = estilo;
}
 const music = new musiquinha('akuma no mi', '7mz', '19/12/2023', 'rap geek')
 const music2 = new musiquinha('death note', '7mz', '02/07/2023', 'rap geek')
 const music3 = new musiquinha('tipo minato', 'mhrap', '23/12/2020', 'rap geek')
 const music4 = new musiquinha('vibe zabuza', 'mhrap', '13/02/2020', 'rap geek')
 const music5 = new musiquinha('o iluminado', 'takr', '19/10/2023', 'rap geek')
 const music6 = new musiquinha('antes de tudo acabar', 'mhrap', '12/10/2022', 'rap geek')
 const music7 = new musiquinha('alem do purgatorio', 'flash beats', '09/09/2021', 'rap geek')
 const music8 = new musiquinha('o rei das maldiçoes', 'takr', '09/07/2023', 'rap geek')
 const music9 = new musiquinha('te falta odio', '7mz', '19/04/2020', 'rap geek')
 const music10 = new musiquinha('dragon ball gang', 'mhrap', '28/08/2023', 'rap geek')

 console.log(music9);

 for(let propriedade in music9){
    console.log(`${propriedade}:${music9[propriedade]}`);
 }
