let images=document.querySelectorAll('.slide');
let prev=document.querySelector('.arrow-left');
let next=document.querySelector('.arrow-right');
let current =0;
function startslide() {
reset();
images[0].style.display='block';
}
startslide();
function reset() {
for (var i = 0; i < images.length; i++) {
  images[i].style.display='none';
}
}

prev.addEventListener('click',prevslide);
function prevslide() {
  reset();
if(current == 0)
current=images.length;
images[current-1].style.display='block';
current--;
}
next.addEventListener('click',nextslide);
function nextslide() {
  reset();
  if(current==images.length-1)
  {
    current=-1;
  }
  images[current+1].style.display='block';
  current++;

}
