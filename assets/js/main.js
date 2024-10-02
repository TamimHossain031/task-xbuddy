const items = document.querySelectorAll('.item');
const image = document.querySelector('.image');
const outer = document.querySelector('.outer');
const hoverBg = document.querySelector('.hover-bg');
items.forEach((item,index) =>{
    
    item.addEventListener('mouseover',(e)=>{
        e.preventDefault();        
        item.classList.add('active');
        const data = item.getAttribute('data');
        hoverBg.style.top = `${index * 80}px`;
        image.style.backgroundImage = `url(${data})`;
        image.style.transition = 'all 1s ease';
        outer.style.backgroundImage = `url(${data})`
    })
    item.addEventListener('mouseout',(e)=>{
        e.preventDefault();
        
        item.classList.remove('active');
    })
}
   
)