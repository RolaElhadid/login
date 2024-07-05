var welcome = document.getElementById('welcome');
var logoutBtn = document.querySelector('.logout');

if(localStorage.getItem('userName')){
    welcome.innerHTML = `Welcome ${localStorage.getItem('userName')}`;
}

function logout(){
window.location.href = 'index.html'
}

logoutBtn.addEventListener('click' , logout)