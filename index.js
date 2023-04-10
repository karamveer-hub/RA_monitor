let body = document.querySelector("body ")
let select = document.querySelector(".working_select ")
let select_innertext = document.querySelector(".working_select div")
let select_img = document.querySelector(".working_select img")
let container = document.querySelectorAll(".container")
let blur_box = document.querySelector(".blur_box")
let blur_box2 = document.querySelector(".blur_box2")
let lightbox = document.querySelector(".lightbox")
let lightbox_inside = document.querySelector(".lightbox div")
let lightbox_inside_p = document.querySelector(".lightbox p small")
let lightbox_inside_button = document.querySelector(".lightbox p button")
let Verification_Box_img = document.querySelectorAll(".Planogram .data .inside_div > div img")
let Verification_Box_status = document.querySelectorAll(".Planogram .data .inside_div > div img").nextElementSibling
let Verification_Box_status_verification = document.querySelectorAll(".Planogram .data .inside_div > div").lastElementChild

console.log(Verification_Box_status_verification)



let calender=document.querySelector("#calender1")
let calender2=document.querySelector("#calender2")
let verify_btn=document.querySelector("#verify")

let options = document.querySelector(".options")
let option = document.querySelectorAll(".option")
select.addEventListener("click", () => {
    options.classList.toggle("options_active")
    select_img.classList.toggle("rotate")
    blur_box.style.display="block"
    

    for (let i = 0; i < option.length; i++) {
        option[i].classList.toggle("option_active")

    }

    lightbox.classList.remove("show")



    
})

blur_box.addEventListener("click",()=>{
    blur_box.style.display="none"
options.classList.toggle("options_active")
select_img.classList.toggle("rotate")

for (let i = 0; i < option.length; i++) {
    option[i].classList.toggle("option_active")

}

})



option.forEach(item => {
    item.addEventListener("click", () => {
        blur_box.style.display="none"
        options.classList.toggle("options_active")
    select_img.classList.toggle("rotate")
        for (let i = 0; i < option.length; i++) {
            option[i].classList.toggle("option_active")
    
        }
        select_innertext.innerText = item.innerText
        container.forEach(elem => {

            elem.classList.forEach(el => {
                    if(item.innerText=="RA Monitoring"){
                    elem.style.display = "flex"

                    }
                else if (item.innerText.includes(el)){
                    elem.style.display = "block"
                }
                
                else {
                    elem.style.display = "none"
                }
            })
        })

    })
})
var clone;
Verification_Box_img.forEach(img=>{
    img.addEventListener("click",(e)=>{
        lightbox.classList.toggle("show")
         clone=img.cloneNode(true)
         clone.classList.add("lightbox_img")
         lightbox_inside.appendChild(clone)
         lightbox_inside_p.innerText=img.nextElementSibling.innerText
        //  console.log(lightbox_inside_p)
         lightbox_inside_p.className=img.nextElementSibling.className
        //  lightbox_inside_button.classList.add(img.nextElementSibling.className)
            // console.log(img.nextElementSibling.nextElementSibling.classList)
         verify_btn.innerText=img.nextElementSibling.nextElementSibling.innerText
         img.nextElementSibling.nextElementSibling.classList.contains("verified")? verify_btn.classList.add(img.nextElementSibling.nextElementSibling.classList[1]) :  verify_btn.classList.remove("verified")
        blur_box2.style.display="block"

      

        verify_btn.addEventListener("click",()=>{
            setTimeout(() => {
                lightbox.classList.remove("show")
                blur_box2.style.display="none"
          verify_btn.classList.remove("verified")

                empty(lightbox_inside);
        
            }, 600);
            img.nextElementSibling.nextElementSibling.classList.add("verified")
            img.nextElementSibling.nextElementSibling.innerText="Verified"
            verify_btn.innerText="Verified"
            // console.log(img.nextElementSibling.nextElementSibling.classList[1])
          verify_btn.classList.add("verified")
            // empty(lightbox_inside);
          })


    })
    blur_box2.addEventListener("click",()=>{
        lightbox.classList.remove("show")
        // clone.classList.remove("lightbox_img")
        //   let parent = document.getElementById("parent");
          empty(lightbox_inside);
        blur_box2.style.display="none"

    })


   
    
})
lightbox_inside.addEventListener("click",()=>{
    lightbox.classList.remove("show")
    blur_box2.style.display="none";
    empty(lightbox_inside);

})




function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }


 