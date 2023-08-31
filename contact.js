
const blur=document.querySelector('.blur');
const contact=document.querySelectorAll("#let-talk");
contact.forEach((Element)=>{
Element.addEventListener('click',()=>{
    console.log("hsf");
    blur.style.display='block';
})
})
const close=document.getElementById('close');
close.addEventListener('click', function() {
    blur.style.display='none';
});

