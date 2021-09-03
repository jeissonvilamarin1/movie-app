import {data} from "./data.js";

//slider
//seleccionar los divs y botones
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

//colocar el ultimo slide en la 1era posición, antes que comienze el slider
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

//funcion para mover dando click al boton 
function next(){
    //seleccionar la primera posicion del slider
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];

    //mover todo el slider para que se vea la 2da imagen y la primera img quede por fuera del overflow
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5.s";

    //funcion para que apenas acabe 
    setTimeout(function(){
        slider.style.transition = "none";
        //el primer elemento debe ir a la ultima posicion
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        //debe volver al left 100%
        slider.style.marginLeft = "-100%";
    }, 500);
}

function previous(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener("click", function(){
    next();
});
btnLeft.addEventListener("click", function(){
    previous();
});

//cards

let cards = document.getElementById("cards");
const detailsPage = document.getElementById('details-page');
const cardName = document.getElementById('card-name');
const cardYear = document.getElementById('card-year');
const titleMovie = document.getElementById('card-title'); 
const img = document.getElementById('card-img');
const descriptionMovie = document.getElementById('card-description');
const body = document.getElementById('body');
const close = document.getElementById('close');
const closeRegister = document.getElementById('close-register');
const registerPage = document.getElementById('register-page');
const registerButton = document.getElementById('register-btn');


cards.innerHTML= " ";
data.forEach(movie =>{
    const {image, title, year, description} = movie;
    cards.innerHTML += `
    <div class="card-section">    
        <div class="card" id="card">
            <a><img src=${image} class="card-image"></a>
            <h4 class="card-title">${title}</h4>
            <p class="card-year">${year}</p>
        </div>
    </div>
    `;
    let card = document.getElementById("card");
    
    card.onclick = movie =>{
        body.style.overflow="hidden";
        detailsPage.style.display="flex";
        titleMovie.innerHTML = `${title}`;
        cardName.innerHTML= `${title}`;
        img.src = `${image}`;
        descriptionMovie.innerHTML= `${description}`;
        cardYear.innerHTML = `${year}`;
    } ;

})

data.forEach(movie =>{
        const {image, title, year, description} = movie;
            cards.onclick = (movie) =>{
                body.style.overflow="hidden";
                detailsPage.style.display="flex";
                titleMovie.innerHTML = `${title}`;
                cardName.innerHTML= `${title}`;
                img.src = `${image}`;
                descriptionMovie.innerHTML= `${description}`;
                cardYear.innerHTML = `${year}`;
            };
})


function closeDetail(){
    detailsPage.style.display= "none";
    body.style.overflow= "auto";
}

close.addEventListener("click", function(){
    closeDetail();
});

function closeRegisterPage(){
    registerPage.style.display= "none";
    body.style.overflow= "auto";
}

closeRegister.addEventListener("click", function(){
    closeRegisterPage();
});

registerButton.addEventListener("click", ()=>{
    registerPage.style.display= "flex";
})


function getForm(){
    let name = document.getElementById("inputName").value;
    let lastName = document.getElementById("inputLastName").value;
    let phone = document.getElementById("inputPhone").value;
    let address = document.getElementById("inputAddress").value;
    let observations = document.getElementById("inputObservations").value;
    let user ={
        Nombre : name,
        Apellido : lastName,
        Celular : phone,
        Direccion : address,
        Observaciones : observations
    }
    localStorage.setItem("Usuario", JSON.stringify(user));
}

let send = document.getElementById("send-btn");

send.addEventListener("click", function(){
    getForm();
});
