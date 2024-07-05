var nameInput = document.getElementById('NameInput');
var emailInput = document.getElementById('EmailInput');
var passInput = document.getElementById('PassInput');
var subBtn = document.getElementById('subBtn');
var alertMassage = document.getElementById('alertMsg');

var users =[];
//^ ######### Get saved Data ###########
if(localStorage.getItem('userInfo')){
    users = JSON.parse(localStorage.getItem('userInfo'));
}

// *################### Add Data #################
function SignUp(){
    var SignupData = {
        userName : nameInput.value,
        userEmail : emailInput.value,
        userPass : passInput.value,
    }
    // *check empty inputs* //////////
if(checkEmpty()){
    alertMsg('All inputs are required' , 'red')
}
// *check saved data* //////////////
else
{
if(checkEmailExist()){
    alertMsg('Email alreay exist' , 'red')
}
// *push data ////////////////////
else{
    users.push(SignupData)
    localStorage.setItem('userInfo' , JSON.stringify(users));
    alertMsg('Sucess' , 'green') 
    clrForm();
    
}
}
}
// !############## submit Btn ###########
subBtn.addEventListener('click' , SignUp);

// ^ ############# Clear Form ###############
function clrForm(){
    nameInput.value = '';
    emailInput.value = '';
    passInput.value = '';
}
// & ############## Check empty inputs ##############
function checkEmpty(){

    if(nameInput.value == '' || emailInput.value == '' || passInput.value == ''){
        return true
    }
    else 
    return false
}

//~ ############### Alert Msg #############
function alertMsg(text , color){
    alertMassage.classList.replace('d-none' , 'd-block');
    alertMassage.style.color = color;
    alertMassage.innerHTML = text;
}

// *############### Email Exist #############
function checkEmailExist(){
    
    for( var i=0 ; i<users.length ; i++){
        if(emailInput.value == users[i].userEmail){
            return true
        }
    }
}