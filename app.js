const menuicon = document.querySelector('#menu')
const navlinks = document.querySelector('#nav-links')

menuicon.addEventListener('click',()=>{
    navlinks.classList.toggle('nav-shows')
    if(navlinks.className == 'nav-shows'){
      let icon= document.querySelector('#icon').className='fa-solid fa-xmark'
    }else{
        icon.className='fa-solid fa-bars'
    }
})