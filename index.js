const navBar = document.querySelector('.navbar')
const alli = document.querySelectorAll('li')


alli.forEach((li, index) => 
{
    li.addEventListener("click", e =>
    {
        navBar.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")

        const indicator =document.querySelector(".indicator")
        indicator.style.transform = `translatex(calc(${index * 90}px))`
    })

})
