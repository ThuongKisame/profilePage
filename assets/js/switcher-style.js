const styleSwitcherToggle=document.querySelector('.style-switcher-toggle')
styleSwitcherToggle.addEventListener('click',function(){
    document.querySelector('.style-switcher').classList.toggle('open')
})
window.addEventListener('scroll',function(){
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})
// document.addEventListener('click',function(e){
//     alert("abc")
//     document.querySelector('.style-switcher').classList.remove('open')
// })

const alternateSytle=document.querySelectorAll('.alternate-sytle')
function setActiveStyle(color,e){
    document.querySelectorAll('.color-item').forEach((t) => {
      t.classList.remove('active')
    })
    e.classList.add("active")
    alternateSytle.forEach((style) => {
        if(color==style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled","true")
        }
    })
}

//day dark mode
const dayNight=document.querySelector(".day-night")
dayNight.addEventListener('click',function(){
    dayNight.querySelector('i').classList.toggle("fa-sun")
    dayNight.querySelector('i').classList.toggle("fa-moon")
    document.body.classList.toggle("dark")

})
window.addEventListener("load",function(){
    if(this.document.body.classList.contains("dark")){
        dayNight.querySelector('i').classList.add("fa-sun")
    }else{
        dayNight.querySelector('i').classList.add("fa-moon")
    }
})