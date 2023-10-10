var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')
const trocar = document.querySelector('#trocar')
var btnShow = document.querySelector('#show')
const senhaInput = document.getElementById('LoginSenha')

// trocar.addEventListener('click', ()=> {
//     document.querySelector('.box').classList.toggle('dark')
//     document.querySelector('.container').classList.toggle('dark')
// })
btnShow.addEventListener('click', function () {
    if (senhaInput.type === 'password') {
        // se tiver no modo senha muda
        senhaInput.type = 'text'
    } else {
        senhaInput.type = 'password'
    }
})

document.querySelector('#btnSignin')
    .addEventListener('click', () => {
        formSignin.style.left = "100px"
        formSignup.style.left = "500px"
        btnColor.style.left = "0px"

    })

document.querySelector('#btnSignup')
    .addEventListener('click', () => {
        formSignin.style.left = "-450px"
        formSignup.style.left = "100px"
        btnColor.style.left = "100px"
    })

// validar email regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const cadaNome = document.querySelector('#cadaNome')
// cadastro 
formSignup.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = cadaNome.value
    const tel = telefone.value;
    const email = cadaEmail.value;
    const password = cadaSenha.value;
    const confirmPassword = cadaSenha2.value;

    // se n for valido
    if (!isValidEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // senhas iguais
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    // ver se o usuário já existe
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === email);

    if (userExists) {
        alert('Email já cadastrado. Escolha um email diferente.');
    } else {
        // salvar nova conta no localStorage
        existingUsers.push({ email, password, tel, name,  });
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('Cadastro bem-sucedido. Agora você pode fazer login.');
        formSignup.reset();
        // redirecionar para a página de login
        window.location.href = 'login.html'; // mesma página
    }
});

//  validar o login
function logar() {
    const loginUsername = document.getElementById('LoginEmail').value;
    const loginPassword = document.getElementById('LoginSenha').value;

    // Verificar se existe conta msm ou precisa criar 
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === loginUsername && user.password === loginPassword);

    if (document.getElementById('lembrarMe').checked) {
        // salve as informações do usuário no localStorage
        var ultimoUsuario = document.getElementById('LoginEmail').value;
        localStorage.setItem('ultimoUsuario', ultimoUsuario);
    } else {
        localStorage.removeItem('ultimoUsuario');
    }

    if (user) {
        // MOSTRANDO MENSAGEM DE BEM VINDO
        document.querySelector('.nomeShow').innerHTML = `<h1 >Sinta-se em casa,</h1> <h1 id="nome">${user.name}!<h1>`;
        document.querySelector('#signin').style.display = "none"
        document.querySelector('.c-loader').style.display = "block"
        document.querySelector('#p1').style.display = "none"
        document.querySelector('.buttonsForm').style.display = "none"
        document.querySelector('.nomeShow').style.marginTop = "100px"
        document.querySelector('h2').style.display = "none"
        document.querySelector('.c-loader').style.marginTop = "10px"

        Toastify({
            text: "Logado com sucesso! ✔",
            duration: 1500,
            position: "left",
            style: {
                background: "linear-gradient(to right, #85a690, #0e9a11)",
            },

        }).showToast();



        setTimeout(() => {
            window.location.href = "lista.html";

        }, 2000);

        var nome = localStorage.getItem()






    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
}

window.onload = function () { //carrega as info do ultimo usuario qnd iniciar a pagina
    var ultimoUsuario = localStorage.getItem('ultimoUsuario');
    if (ultimoUsuario) {
        document.getElementById('LoginEmail').value = ultimoUsuario;
    }
}


