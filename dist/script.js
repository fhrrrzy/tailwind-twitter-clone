function textAreaAdjust(element) {
    element.style.height = "40px";
    element.style.height = (25+element.scrollHeight)+"px";
}

let isOpen = false
let sidenav = $("#mobile-left-nav")
let wrapper = $(".wrapper")
$("#mobile-nav-open").click(()=>{
    if(!isOpen){
        sidenav.removeClass("-translate-x-[35rem] ")
        sidenav.addClass("z-[999999] translate-x-0")
        wrapper.addClass("blur-sm")
        isOpen = true
    }
})

$("#mobile-nav-close, #dismiss-side").click(()=>{
    if(isOpen){
        sidenav.removeClass("z-[999999] translate-x-0")
        wrapper.removeClass("blur-sm")
        sidenav.addClass("-translate-x-[35rem]")
        isOpen = false
    }
})

let topbar = $("#topbar")
var prevScrollpos = window.pageYOffset;

const navScroll =  () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        if(topbar.hasClass("-translate-y-12")){
            $("#topbar").removeClass("-translate-y-12")
        }
    } else {
        if(!topbar.hasClass("-translate-y-12")){
            $("#topbar").addClass("-translate-y-12")
        }
    }
    prevScrollpos = currentScrollPos;
}
window.onscroll = navScroll