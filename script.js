// ==========================
// MENÚ ACTIVO AL HACER SCROLL
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

// ==========================
// ANIMACIÓN AL HACER SCROLL
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".card, .benefits-grid div, .gallery img, .about, .contact")
.forEach(el=>observer.observe(el));

// ==========================
// EFECTO EN HEADER
// ==========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.padding="0px";

header.style.background="rgba(255,255,255,.98)";

header.style.boxShadow="0 8px 20px rgba(0,0,0,.1)";

}else{

header.style.background="rgba(255,255,255,.95)";

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});

// ==========================
// BOTÓN WHATSAPP
// ==========================

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/525951209050";

whatsapp.className="whatsapp";

whatsapp.target="_blank";

whatsapp.innerHTML='<i class="fa-brands fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

// ==========================
// SCROLL SUAVE
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ==========================
// AÑO AUTOMÁTICO EN FOOTER
// ==========================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Cleverland | Guardería • Maternal • Preescolar`;

}

// ==========================
// EFECTO DE ENTRADA
// ==========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .8s ease";