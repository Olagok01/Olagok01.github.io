const frontPage = document.querySelector(".top")
const donwnPage = document.querySelector(".bottom")
const btns = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const selection = document.querySelector(".selection");
let value



btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const num = e.currentTarget.dataset.id
        submit.addEventListener('click', function(){
            if(num === "1"){
                let value = num
                selection.innerHTML = `you have selected ${value} out of 5`  
            }
            else if (num === "2"){
                let value = num
                selection.innerHTML = `you have selected ${value} out of 5`
            }
            else if (num === "3"){
                let value = num
                selection.innerHTML = `you have selected ${value} out of 5`
            }
            else if (num === "4"){
                let value = num
                selection.innerHTML = `you have selected ${value} out of 5`
            }
            else if (num === "5"){
                let value = num
                selection.innerHTML = `you have selected ${value} out of 5`
            }
             
             frontPage.classList.add("hide")
             donwnPage.classList.remove("hide")
        })
    
    })
})   
