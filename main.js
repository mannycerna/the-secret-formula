
//Part 1
let alertForm = document.querySelector('#alertForm');

let alertInput = document.querySelector('#alertInput');

alertForm.addEventListener('submit', function(event){

    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = '';
})

//Part 2 Sandwich Builder

let sandwichForm = document.querySelector('#sandwichForm');

let ingredients = document.querySelectorAll('#sandwichForm .ingredients');

for(let item of ingredients){
    console.log(item.id);
}

sandwichForm.addEventListener('submit', function(event){
    event.preventDefault();

    let newStr = "";

    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            newStr += `${ingredients[i].id},`;
           
        } 
    }
    resetCheckbox();
console.log(newStr);

alert(`Your sandwich contains: ${newStr}`);

})

function resetCheckbox(){
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
        ingredients[i].checked = false;
        }
    }
}

//Part 3 Haircut appointment scheduler
 
let apptForm = document.querySelector('#apptForm');
let dateInput = document.querySelector('#dateInput');
let requestStylist = document.querySelector('#requestStylist');
let longHairRadio = document.querySelector('#longHair');
let shorHairRadio = document.querySelector('#shortHair');

apptForm.addEventListener('submit', function(event){

    event.preventDefault();

    
    let stringHairLength = '';

    if(longHairRadio.checked === true){
        console.log('Long Hair');
        stringHairLength = 'Long Hair';
    } else if(shorHairRadio.checked === true){
        console.log('Short Hair');
        stringHairLength = 'Short Hair';
    } 

    if(requestStylist.value === ''){
        alert('Please request a stylist by name:')
    } else {
        alert(`Haircut scheduled for ${dateInput.value} with ${requestStylist.value} for ${stringHairLength}.`);
    }
    function resetForm(){

    }

});

//Part 4 Create Account

let createAcctForm = document.querySelector('#createAccountForm');
let email = document.querySelector('#email');
let userName = document.querySelector('#userName');
let password = document.querySelector('#new-password');
let confirmPassword = document.querySelector('#confirmPassword');

createAcctForm.addEventListener('submit', function(event){
    event.preventDefault();
    

validatePassword();
resetCreateAcctForm();

});

function validatePassword(){
    if(password.value != confirmPassword.value){
        alert("Passwords Don't Match. Let's try again!");
        return true;
    } else {
        alert(`Your username is: ${userName.value} & email is: ${email.value}`);
        return false;
    }
}


function resetCreateAcctForm(){
    createAcctForm.reset();
}