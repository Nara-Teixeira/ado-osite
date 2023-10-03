var users = JSON.parse(localStorage.getItem('users'))
// pegando os usuarios
var tabela = document.getElementById('tabela')
var tbody  = document.getElementById('tbody')

tbody.innerHTML = '';



users.map((item)=>{ // isso aq é mt melhor
    console.log(item)
    console.log(tbody)
    tbody.innerHTML +=`<tr><td>${item.name}</td><td>${item.email}</td><td>${item.password}</td><td>${item.tel}</td></tr>`
})




// for (let i = 0 ; i < users.length; i++) {
//     var user = users[i]
//     // var row = tbody.insertRow()
//     // var cell1 = row.insertCell(i)
//     // var cell2 = row.insertCell(i)

//     // cell1.innerHTML = user.email
//     // cell2.innerHTML = user.password
//     tbody.innerHTML = user.email + user.password

//     console.log(user)
// }