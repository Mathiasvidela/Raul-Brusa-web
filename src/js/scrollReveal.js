//CONFIG
const sr = ScrollReveal({
    distance:'65px',
    duration: 2000,
    delay: 450,
    reset:false
})

//HOME

sr.reveal('.sr-hero',{delay:100,origin: 'left'});
sr.reveal('.sr-button',{delay:300,origin: 'left'});
sr.reveal('.sr-home-about-img',{delay:150,origin: 'left'});
sr.reveal('.sr-home-about',{delay:150,origin: 'right'});
sr.reveal('.sr-home-services',{delay:150,origin: 'bottom'});

//ABOUT US

sr.reveal('.sr-nosotros-vision',{delay:100,origin: 'bottom'});
