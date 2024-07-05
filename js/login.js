
var loginEmail = document.getElementById('EmailInput');
var loginPass = document.getElementById('PassInput');
var loginBtn = document.getElementById('login');
var alertMassage = document.getElementById('alertMsg');
var users =[];

if(localStorage.getItem('userInfo') != null){
    users = JSON.parse(localStorage.getItem('userInfo'));
}

//& ############### login Function #############
function login(){

// ^Check empty inputs 
if(checkEmptyLogin()){
    alertMsg('All inputs are required' , 'red');
}
// ^go to home page 

else{
  if (checkInputData()) {
    window.location.href = 'home.html';
  }

  // ^incorrect data 
  else {
    alertMsg('incorrect email or password' , 'red');
  }
}
}






// ^############# Check empty inputs function ###########
function checkEmptyLogin(){
    if( loginEmail.value == '' || loginPass.value == ''){
       return true
    }
}

// *############# Alert Msg function ################
function alertMsg(text , color){
    alertMassage.classList.replace('d-none' , 'd-block');
    alertMassage.style.color = color;
    alertMassage.innerHTML = text;
}

// &########### Data already exist ##########
function checkInputData(){
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].userEmail == loginEmail.value && users[i].userPass == loginPass.value ){
          localStorage.setItem('userName' , users[i].userName);
return true;
        }
    }
}
loginBtn.addEventListener('click' , login)