/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOGAR*/
sr.reveal('.hogar__titulo',{}); 
sr.reveal('.hogar__img',{delay: 400}); 

/*SCROLL QUEES*/
sr.reveal('.quees__img',{}); 
sr.reveal('.quees__subtitulo',{delay: 400}); 
sr.reveal('.quees__texto',{delay: 400}); 

/*SCROLL TESTIMONIO*/
sr.reveal('.testimonio__subtitulo',{}); 
sr.reveal('.testimonio__texto',{}); 
sr.reveal('.testimonio__data',{interval: 200}); 
sr.reveal('.testimonio__img',{delay: 600});

/*SCROLL CARACTERISTICAS*/
sr.reveal('.caracteristicas__subtitulo',{}); 
sr.reveal('.caracteristicas__texto',{}); 
sr.reveal('.caracteristicas__data',{interval: 200}); 
sr.reveal('.caracteristicas__img',{delay: 400});

/*SCROLL PROCESO*/
sr.reveal('.precio__texto',{});
sr.reveal('.paso__subtitulo',{}); 
sr.reveal('.paso__texto',{}); 
sr.reveal('.paso__data',{interval: 200}); 
sr.reveal('.paso__img',{delay: 600});

/*SCROLL DISEÑO*/
sr.reveal('.diseño__img',{interval: 200}); 

/*SCROLL CONTACTO*/
sr.reveal('.contact__input',{interval: 200}); 
sr.reveal('.card',{delay: 600});

/* BOTON WHATSAPP */
popupWhatsApp = () => {
  
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
  
    btnClosePopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
    })
    
    btnOpenPopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
       popup.style.animation = "fadeIn .6s 0.0s both";
    })
    
    sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20");
       
     window.open('https://wa.me/56930551593?text='+relmsg, '_blank'); 
    
    });
  
  }
  
  popupWhatsApp();

/* SLIDER HOGAR */
const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


  prev.addEventListener("click",function(){
      prevSlide();
      updateCircleIndicator(); 
      resetTimer();
  })

  next.addEventListener("click",function(){
     nextSlide(); 
     updateCircleIndicator();
     resetTimer();
     
  })

  // create circle indicators
   function circleIndicator(){
       for(let i=0; i< slides.length; i++){
         const div=document.createElement("div");
               div.innerHTML=i+1;
               div.setAttribute("onclick","indicateSlide(this)")
               div.id=i;
               if(i==0){
                 div.className="active";
               }
              indicator.appendChild(div);
       }
   }
   circleIndicator();

   function indicateSlide(element){
        index=element.id;
        changeSlide();
        updateCircleIndicator();
        resetTimer();
   }
    
   function updateCircleIndicator(){
     for(let i=0; i<indicator.children.length; i++){
       indicator.children[i].classList.remove("active");
     }
     indicator.children[index].classList.add("active");
   }

  function prevSlide(){
     if(index==0){
       index=slides.length-1;
     }
     else{
       index--;
     }
     changeSlide();
  }

  function nextSlide(){
     if(index==slides.length-1){
       index=0;
     }
     else{
       index++;
     }
     changeSlide();
  }

  function changeSlide(){
           for(let i=0; i<slides.length; i++){
              slides[i].classList.remove("active");
           }

      slides[index].classList.add("active");
  }

  function resetTimer(){
      // when click to indicator or controls button 
      // stop timer 
      clearInterval(timer);
      // then started again timer
      timer=setInterval(autoPlay,8000);
  }

 
 function autoPlay(){
     nextSlide();
     updateCircleIndicator();
 }

 let timer=setInterval(autoPlay,8000);