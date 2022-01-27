 const navLink = document.querySelectorAll(".nav-link");
 
    // ACTIVE LINK
    function linkAction() {
        navLink.forEach(n=> n.classList.remove("active"));
        this.classList.add("active");   
    }

    navLink.forEach(n => n.addEventListener("click",linkAction));

    
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll",scrollActive)

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach((current)=>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 300;
             let sectionId = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(".navbar-nav a[href*="+ sectionId +"]").classList.add("active");
            }

            else{
                document.querySelector(".navbar-nav a[href*="+ sectionId +"]").classList.remove("active");
            }
        })
    }

// DYNAMMIC YEAR:
    const currentYear = new Date().getFullYear();
    const year = document.getElementById("year");
    year.innerText = currentYear;

// PRELOADER EFFECT
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});


// on scroll btn
const mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
