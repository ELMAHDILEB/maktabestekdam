document.addEventListener("DOMContentLoaded", function() {
const header = document.querySelector("header"),
iconOpen = document.querySelector(".openMenu"),
navLinks = document.querySelector(".navLinks"),
arrowToTop = document.querySelector(".toTop i");


window.addEventListener("scroll", ()=>{
    window.scrollY > 0  ? header.classList.add("stickyHeader") : header.classList.remove("stickyHeader");
    window.scrollY > 100 - 70  ? arrowToTop.style.cssText = `opacity:1;visibility:visible;` : arrowToTop.style.cssText = `opacity:0;visibility:hidden;`;

    arrowToTop.onclick = ()=>{
        window.scrollTo({top:0,
        behavior:"smooth"})
    }
})


iconOpen.addEventListener('click', ()=>{
       navLinks.classList.toggle("active");

       if( navLinks.classList.contains("active")){
         iconOpen.classList.replace("fa-bars","fa-xmark");
       }else{
        iconOpen.classList.replace("fa-xmark","fa-bars");
       }
       
})

// cloning Node 
    const copyTags = document.querySelector(".tags__slide").cloneNode(true);
    document.querySelector(".tags").appendChild(copyTags);

    const secondCopyTags = document.querySelector(".tags__slide").cloneNode(true);
    document.querySelector(".tags").appendChild(secondCopyTags);
  });




  // counter with scrolling

  const whyus = document.getElementById("whyus");
  contentBox = document.querySelectorAll(".contentBox h1");

window.addEventListener("scroll",()=>{
  if(document.documentElement.scrollTop >= whyus.offsetTop){
    contentBox.forEach(content => {
      let val = content.getAttribute("data-set");
         content.textContent =  `+${val}`;
  } )
}} )


