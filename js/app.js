const icoMenu = document.querySelector('.ico-menu');
const menu = document.querySelector('.menu');
const icoBars = document.querySelector('#icon-menu');

icoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-left');
    icoBars.classList.toggle('fa-bars');
    icoBars.classList.toggle('fa-times');
});


const menuLinks = document.querySelectorAll('.menu ul a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.menu ul a[href="#${id}"]`)

        if(entry.isIntersecting){
            document.querySelector('.menu ul a.selected').classList.remove('selected')
            menuLink.classList.add('selected');
        } 
    });
}, {rootMargin: "-30% 0px -70% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', function() {
        menu.classList.remove('menu-left');
    })

    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
})


//===================================================================
// ABILITIES
//===================================================================

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}



//====================================================
// PROJECT
//====================================================
const carruselGrande = document.querySelector('.carousel__project');
const carruselEnlace = document.querySelectorAll('.link');

carruselEnlace.forEach( ( cadaEnlace , i )=> {
    carruselEnlace[i].addEventListener('click', ()=>{
        let posicion = i;
        let operacion = posicion * -25;

        carruselGrande.style.transform = `translateX(${ operacion }% )`;

        carruselEnlace.forEach( ( cadaEnlace, i )=>{
            carruselEnlace[i].classList.remove('active')
        })
        carruselEnlace[i].classList.add('active')
    })
} )