const aside = document.querySelector(".aside");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");
const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav");

const arrowUp = document.querySelectorAll(".arrow-up");
const arrowDown = document.querySelectorAll(".arrow-down");

const dropdown = document.querySelectorAll(".drop-down .dropdown-menu");


closeBtn.addEventListener('click', ()=>{
    aside.classList.remove("sidebar");
    closeBtn.classList.remove("show-icon");
   container.classList.remove("background-change");
   nav.classList.remove("show-nav");
});

menuBtn.addEventListener('click', ()=>{
    aside.classList.add("sidebar");
    closeBtn.classList.add("show-icon");
    nav.classList.add("show-nav");
    container.classList.add("background-change");
})


arrowDown.forEach(function(arrowdown){
    arrowdown.addEventListener('click', function(e){
        const id = e.currentTarget;
       // console.log(id);
        if (id.dataset.id === "down-1"){
            arrowUp.forEach((arrowup)=>{
                const target = arrowup
               if(target.dataset.id === "up-1"){
                    target.classList.remove("hide")
                    e.currentTarget.classList.add("hide");
                }
            });  
            dropdown.forEach((d)=>{
                const data = d
                if(data.dataset.id === "features"){
                    data.classList.remove("hide-list");
                }
            });
        }

        if (id.dataset.id === "down"){
            arrowUp.forEach((arrowup)=>{
                const target = arrowup
               if(target.dataset.id === "up"){
                    target.classList.remove("hide")
                    e.currentTarget.classList.add("hide")
                    
                }
            }); 
            dropdown.forEach((d)=>{
                const data = d
                if(data.dataset.id === "company"){
                    data.classList.remove("hide-list")
                }
            });         
        }
    })
})


arrowUp.forEach(function(arrowup){
    arrowup.addEventListener('click', function(e){
        const id = e.currentTarget;
       // console.log(id);
        if (id.dataset.id === "up-1"){
            arrowDown.forEach((arrowdown)=>{
                const target = arrowdown
               if(target.dataset.id === "down-1"){
                    target.classList.remove("hide");
                    e.currentTarget.classList.add("hide");
                }
            });
            dropdown.forEach((d)=>{
                const data = d
                if(data.dataset.id === "features"){
                    data.classList.add("hide-list");
                }
            }); 
        }
        if (id.dataset.id === "up"){
            arrowDown.forEach((arrowdown)=>{
                const target = arrowdown
               if(target.dataset.id === "down"){
                    target.classList.remove("hide");
                    e.currentTarget.classList.add("hide");
                }
                
            });      
            dropdown.forEach((d)=>{
                const data = d
                if(data.dataset.id === "company"){
                    data.classList.add("hide-list");
                }
            });    
        }
    })
})
