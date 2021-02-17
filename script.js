const modalBtn = document.getElementById('kontakt');
const modalWindow = document.querySelector('div');
const overlay = document.querySelector('.overlay');
// const closeModalBtn = document.querySelector('.close-modal');
const body = document.querySelector('body');

const nameInput = document.getElementById('first-name');
const surnameInput = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone-number');
const courseInput = document.getElementById('course');
const sendBtn = document.querySelector('.send-button');

const ar = [];



let closeModal = ()=> {  
            modalWindow.classList.add('hidden');
            overlay.classList.add('hidden');

}


// for(let i = 0; i < modalBtn.length; i++) {
    modalBtn.addEventListener('click', function() {
        // console.log(modalBtn[i].textContent);
            modalWindow.classList.remove('hidden');
            overlay.classList.remove('hidden');
    });
// }


// closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', (e)=> {

    // console.log(e);
    if(!(modalWindow.classList.contains('hidden')) && (e.key === 'Escape')) {
        closeModal();
    }});

overlay.addEventListener('click', closeModal);

sendBtn.addEventListener('click', ()=>{
    ar.push({nameInput: nameInput.value, surnameInput: surnameInput.value, phoneNumber: phoneNumber.value, courseInput: courseInput.value});
    console.log(ar[ar.length-1]);
    console.log(ar.length);
    nameInput.value = '';
    surnameInput.value = '';
    phoneNumber.value = '';
});


