const items = document.querySelectorAll('.item');
const image = document.querySelector('.image-holder');
const outer = document.querySelector('.outer');
const bg_image = document.querySelector('.bg-image img');
const hoverBg = document.querySelector('.hover-bg');
const box = document.querySelector('.box');
const images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg']
items.forEach((item,index) =>{
    
    item.addEventListener('mouseover',function(e){               
        document.querySelector('.active').classList.remove('active');                    
       
        const data = `./assets/img/${images[index]}`;
        hoverBg.style.top = `${index * 80}px`;     
      
        if(!item.classList.contains('active')){ 
            item.classList.add('active');
            image.style.opacity='0.5';
            bg_image.style.opacity='0.5';
            const time = setTimeout(()=>{            
                image.src = data ;
                bg_image.src = data ;
                image.style.opacity='1';
                bg_image.style.opacity='1';
            },200);
        }else{
            image.src =`${data}` ;
            bg_image.src =`${data}` ;
          
        }
      
      
            
           
       
       
        
    },false)
   
  
}
   
)

const fade = () =>{
    outer.style.opacity = '1';
    image.style.opacity = '1';
   
}
window.addEventListener('load',()=>{
    fade()
})