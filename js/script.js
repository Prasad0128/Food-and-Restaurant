
//navbar
let nav = document.querySelector(".navigation_wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');

navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        // Check if navCollapse is not null before removing the class
        if (navCollapse) {
            navCollapse.classList.remove("show");
        }
    });
});

//counter desing
document.addEventListener('DOMContentLoaded', ()=>{
    function counter(id, start, end, duration){
        let object = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math .abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            object.textContent = current;
            if (current == end){
                clearInterval(timer);
            }
        }, step);

    }
    counter("counter1", 0, 128, 3000);
    counter("counter2", 0, 527, 3000);
    counter("counter3", 0, 287, 3000);
    counter("counter4", 0, 127, 3000);

});
