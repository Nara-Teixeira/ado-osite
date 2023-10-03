var teste = JSON.parse(localStorage.getItem('listaDogs'));

function showValues(){
    let listaDogs = JSON.parse(localStorage.getItem('listaDogs')|| '[]')
    const product = document.getElementById('div')
    const list = document.getElementById('product-list')

    for(let i = 0; i < listaDogs.length; i++){

        list.innerHTML += `<div class="card"><img class="bixo" src="${listaDogs[i]['foto']}"><div id="intro"><h1>${listaDogs[i]['Nome']} </h1>
        <h3>${listaDogs[i]['Cidade']}, ${listaDogs[i]['Estado']}</h3>
        <p>Esse é <span>${listaDogs[i]['Nome']}</span> o ${listaDogs[i]['Espécie']} mais lindo e fofo de toda a região de ${listaDogs[i]['Cidade']} </p></div></div>`;
  
        }
       
    }



showValues()




































//function adicionar(){
   // var paragrafo = document.querySelector("#sessionstorage");
    // var cidadest = document.querySelector("#Cidadestado")
    // var teste = JSON.parse(localStorage.getItem('listaDogs'));
    // console.log(teste)

    
    // teste.map((item)=>{
     //    console.log(item.Nome)
     //    paragrafo.innerHTML = item.Nome += ' ';
      //   cidadest.textContent = item.Cidade += ' ';
       

     //})
    
    // };



// var cad2 = document.querySelector("#inputButton2");

// cad2.addEventListener("click", function(){
//     var paragrafo = document.querySelector("#sessionstorage");
//     var teste = JSON.parse(localStorage.getItem('listaDogs'));
//     console.log(teste)

    
//     teste.map((item)=>{
//         console.log(item.Nome)
//         paragrafo.textContent += item.Nome + ' ';

//     })
    
//     });


