const container = document.getElementById('container');

window.addEventListener('DOMContentLoaded', (event) => {
    
    container.style.transform = 'translateY(0)'; // end position
    container.style.opacity = '1'; // make content visible
});


function myFunction(x) {
    if (x.matches) { // If media query matches
        container.style.transform = 'scale(0)';
        container.style.top = "0px";
        container.style.transformOrigin = 'center center';
    } else {
        container.addEventListener('mousemove', (e) => {
            // const rect = container.getBoundingClientRect();
            // const offsetY = e.clientY + rect.top;
            const yPercent = e.clientY;
           const  centerY = container.clientHeight/2;
           const deltaY = (yPercent);
        
        //    console.log(yPercent);
        //    console.log(centerY);
        //    console.log(deltaY);
           
           // Adjust this value if you want more or less movement on Y-axis
            // const maxTranslateY = 50;  // in pixels
        
            // const translateY = (yPercent / 100) * maxTranslateY;
            // container.style.top = -yPercent+450 +"px";
            container.style.transform = `translateY(${-yPercent*2 + 800}px) scale(2.2)`;
        
            // container.style.transformOrigin = ` ${-offsetY}px`;
           //const xPercent = (e.clientX* -500);
           //const yPercent = ((e.clientY-container.offsetHeight)/100)*50;
           //container.style.transform = `translateY(${-yPercent}px) scale(2.2) `;
        
        //    container.style.transform = 'scale(1.8)';
        
        
        
        });
    }
  }
var x = window.matchMedia("(max-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction);

container.addEventListener('mouseleave', () => {
    container.style.transform = 'scale(1)';
    container.style.top = "0px";
    container.style.transformOrigin = 'center center';
});