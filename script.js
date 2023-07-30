const btn = document.querySelector("button");
const modal = document.querySelector(".modal");
const closeModalIcon = document.querySelector(".fa-times");

btn.addEventListener("click",openModal);
closeModalIcon.addEventListener("click",closeModal);


function closeModal(){
    modal.style.transform ='scale(0)';
}

function openModal(){
    modal.style.transform = 'scale(1)';
}