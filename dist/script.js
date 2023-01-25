function textAreaAdjust(element) {
    element.style.height = "40px";
    element.style.height = (25+element.scrollHeight)+"px";
}

let isOpen = false
let sidenav = $("#mobile-left-nav")
let wrapper = $(".wrapper")
$("#mobile-nav-open").click(()=>{
    if(!isOpen){
        sidenav.removeClass("-translate-x-96 ")
        sidenav.addClass("z-50 translate-x-0")
        wrapper.addClass("brightness-75")
        isOpen = true
    }
})

$("#mobile-nav-close").click(()=>{
    if(isOpen){
        sidenav.removeClass("z-50 translate-x-0")
        wrapper.removeClass("brightness-75")
        sidenav.addClass("-translate-x-96")
        isOpen = false
    }
})

if(isOpen){
    wrapper.click(()=>{
        console.log("wtf")
        if(isOpen){
            sidenav.removeClass("z-50 translate-x-0")
            wrapper.removeClass("brightness-75")
            sidenav.addClass("-translate-x-96")
            isOpen = false
        }
    })
}