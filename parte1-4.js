const usuarios = [
    { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
    { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
    { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
    { nome: "Diana", idade: 25, ativo: true, compras: [] },
    { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
  ];


  const imprime_valor = (usuarios) => {
    
   
    for(let i = 0; i < usuarios.length; i++){

        let valor_total = 0;

        for(let j = 0; j < usuarios[i].compras.length; j++){
             valor_total = usuarios[i].compras[j] + valor_total;
            
             
        }

        console.log(usuarios[i].nome + ": total = " + valor_total);
      
    }
}

const retorna_compras = (usuarios) => {
  
    let valor_total = 0;

    for(let i = 0; i < usuarios.compras.length; i++){
        valor_total = valor_total + usuarios.compras[i]
    }

return valor_total

}


const filtra_usuarios = (usuarios) => {

    for(let i  = 0; i < usuarios.length; i++){
        if(usuarios[i].ativo == true){
            console.log(usuarios[i].nome)
        }
    }

}

const filtra_idade = (usuarios) => {
 
   for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].idade >= 18){
        console.log(usuarios[i].nome)
    }  
   }

}

const calcula_maior_compras = (usuarios) => {

    let maior = usuarios[0];

    for(let i = 0; i < usuarios.length; i++){
       if(retorna_compras(usuarios[i]) > retorna_compras(maior)){
         maior = usuarios[i]
       }
    }


    console.log(maior.nome + " valor: " + retorna_compras(maior))

}




const gerarRelatorio = (usuarios) => {
     let ativos = 0;
     let inativos = 0;
     let soma_total = 0
    console.log(usuarios.length)

    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].ativo == true){
            ativos++
        }
        else{
            inativos++
        }
    }

     console.log(ativos)
        console.log(inativos)

    for(let i = 0; i < usuarios.length; i++){
      soma_total = soma_total + usuarios[i].idade
    }
    
    console.log(soma_total / usuarios.length)

    calcula_maior_compras(usuarios)



}


gerarRelatorio(usuarios)