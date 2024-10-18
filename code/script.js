

const toggleMenu = () =>{
    document.querySelector('.sidebar').classList.toggle('active')
    document.querySelector('.menu').style.display = "none"
    let close = document.querySelector(".close")

    close.style.display = "block"  

    close.addEventListener('click',() => {
        document.querySelector('.menu').style.display = "block"
        document.querySelector('.sidebar').classList.toggle('active')
        close.style.display = "none"  
    })
    
}



