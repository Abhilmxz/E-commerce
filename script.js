const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
   bar.addEventListener('click', () => {
    nav.classList.add('active')
   }) 
}

if (close) {
    close.addEventListener('click', () => {
     nav.classList.remove('active')
    }) 
 }

//  var theDate=new Date()
//   document.write(theDate.getFullYear()) 
//   console.log('the date',theDate)
//   document.getElementById('copyright').innerHTML=theDate.getFullYear()
