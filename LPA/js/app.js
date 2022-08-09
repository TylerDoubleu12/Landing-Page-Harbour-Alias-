/*
* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
*
* Dependencies: None
*
* JS Version: ES2015/ES6
*
* JS Standard: ESlint
*
**/

/**
* Define Global Variables
*
*/

//Global Variables//

const sec = document.querySelectorAll('section')
const navbar = document.querySelector('navbar')
const navLink = document.querySelector('ul');

//build dynamic navigation menu with added Event Listeners for the List Items //

function createNavBar(){

  const navLink = document.querySelector('ul');
  
  sec.forEach((section)=>{

    let listLink= document.createElement('li');
    let anc = document.createElement('a');
    anc.classList.add("active");
    let sectdata = section.dataset.nav;

    

    listLink.innerHTML += `<li class="nav-item"><a class="nav-link">${sectdata}</a></li>`;
    navLink.appendChild(listLink);

    listLink.addEventListener("click", (e)=> {
        e.preventDefault();
        if(anc.classList.contains("active")===true){
            section.scrollIntoView({behavior:"smooth"});
        }
        
    });
   
    //create active state in order to highlight each nav list item//
    const lis = document.querySelectorAll('.navtag li');

    for(const li of lis){
        li.onclick = ()=>{
            for(const li of lis){
                li.className = "";
            }
        li.classList.add("active");
        }
    }

  })

 
  
}

//build nav menu//
createNavBar();



