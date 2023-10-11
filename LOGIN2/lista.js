
var tabela = document.getElementById('tabela')
var tbody  = document.getElementById('tbody')
var users = JSON.parse(localStorage.getItem('users'));


tbody.innerHTML = '';

users.forEach((item, index) => { //criando uma linha pra cada pessoa 

    var tr = document.createElement('tr');

    
    tr.innerHTML = `<td>${item.name}</td>
                    <td>${item.email}</td>
                        <td>${item.tel}</td>
                        
                        <td>
                        <button id="removeBtn" onclick="removerUsuario(${index})">Remover</button>
                    </td>`;

    
    tbody.appendChild(tr); //appendChild pra adicionar a linha
});


//remover um usuário
function removerUsuario(index) {
    var confirmar = confirm('Tem certeza de que deseja remover este usuário?');


    if (confirmar) {
        users.splice(index, 1); // remove da lista
        localStorage.setItem('users', JSON.stringify(users)); // muda o localStorage
        location.reload(); // recarrega
    }
}

// função para editar um usuário
function editarUsuario(index) {

}


// tbody.innerHTML = '';

// users.map((item)=>{ // isso aq é mt melhor
    
//     tbody.innerHTML +=`<tr><td>${item.name}</td><td>${item.email}</td><td>${item.password}</td><td>${item.tel}</td></tr>`
// })



// for (let i = 0 ; i < users.length; i++) {
//     var user = users[i]
//     var row = tbody.insertRow()
//     var cell1 = row.insertCell(i)
//     var cell2 = row.insertCell(i)

//     cell1.innerHTML = user.email
//     cell2.innerHTML = user.password
//     tbody.innerHTML = user.email + user.password

//     console.log(user)
// }