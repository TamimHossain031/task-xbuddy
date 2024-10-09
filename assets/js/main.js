const items = document.querySelectorAll('.item');
const image = document.querySelector('.image-holder');
const outer = document.querySelector('.outer');
const bg_image = document.querySelector('.bg-image img');
const hoverBg = document.querySelector('.hover-bg');
const box = document.querySelector('.box');
let time;
let dataAll;
const images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg']
items.forEach((item,index) =>{
    const newHover = document.createElement('div');
    newHover.classList.add('hovered');
    item.appendChild(newHover);
    newHover.addEventListener('mouseover',function(e){               
      document.querySelectorAll('.active').forEach(single => single.classList.remove('active'))                 
       
        const data = `./assets/img/${images[index]}`;
        hoverBg.style.top = `${index * 80}px`;     
      
        if(!item.classList.contains('active')){ 
            clearTimeout(time);
            item.classList.add('active');
            image.classList.add('active');
            time = setTimeout(()=>{            
                image.src = data ;
                bg_image.src = data ;
              
            },300);
        }else{
           
         
        }      
        
    },true) 
  
}
   
)

const fade = () =>{
    outer.style.opacity = '1';
    image.style.opacity = '1';
   
}
window.addEventListener('load',()=>{
    fade()
})