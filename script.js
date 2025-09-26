document.addEventListener("DOMContentLoaded", () =>{


    const servicebtn = document.querySelector("#servicebtn")
    const portfoliobtn = document.querySelector("#portfoliobtn")
    const serviceplace = document.querySelector("#servicecontain")
    const portfolioplace = document.querySelector("#portfoliocontain")

    servicebtn.onclick = ()=>{
        serviceplace.scrollIntoView({behavior:"smooth"})
    }
    portfoliobtn.onclick = ()=>{
        portfolioplace.scrollIntoView({behavior:"smooth"})
    }
})