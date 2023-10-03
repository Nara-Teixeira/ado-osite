var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')
const trocar = document.querySelector('#trocar')

// trocar.addEventListener('click', ()=> {
//     document.querySelector('.box').classList.toggle('dark')
//     document.querySelector('.container').classList.toggle('dark')
// })

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

// Função para validar o formato de e-mail com Regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const cadaNome = document.querySelector('#cadaNome')
// Adicione um event listener para o formulário de cadastro
formSignup.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = cadaNome.value
    const tel = telefone.value;
    const email = cadaEmail.value;
    const password = cadaSenha.value;
    const confirmPassword = cadaSenha2.value;

    // Verifique o formato do e-mail
    if (!isValidEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Verifique se as senhas coincidem
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    // Verificar se o usuário já existe
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === email);

    if (userExists) {
        alert('Usuário já existe. Escolha um nome de usuário diferente.');
    } else {
        // Salvar novo usuário no localStorage
        existingUsers.push({ email, password, tel, name });
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('Cadastro bem-sucedido. Agora você pode fazer login.');
        formSignup.reset();
        // Redirecionar para a página de login
        window.location.href = 'login.html'; // mesma página
    }
});

// Função para validar o login
function logar() {
    const loginUsername = document.getElementById('LoginEmail').value;
    const loginPassword = document.getElementById('LoginSenha').value;

    // Verificar se já existe
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === loginUsername && user.password === loginPassword);

    if (user) {
        window.location.href = "lista.html";
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
}
