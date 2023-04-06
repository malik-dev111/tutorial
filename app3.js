let h2 = document.querySelector('.h2')
let button  = document.querySelector('.button')
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let Password = document.querySelector('#Password')
let Password2 = document.querySelector('#Password2')
// else{
//     button.addEventListener('click',()=>{
//           
//        })   
// }

button.addEventListener('click',()=>{
    if(email.value.length <= 9){
        alert('doldurun')
    }
    else if(username.value == '' && username.value.length < 9 ){
        alert('doldurun')
    }
    else if(Password.value == '' && Password.value.length < 9 ){
        alert('doldurun')
    }
    else if(Password2.value == '' && Password2.value.length < 9 ){
        alert('doldurun')
    }
    else if( true ){
        h2.innerHTML = `salam ${username.value} Account saxlandı`
    }
})
setInterval(() => {
    alert:malik('sa')
}, 1000);