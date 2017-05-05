
let slideIndex = 1;
showItem(slideIndex);

function plusItem(n) {
  showItem(slideIndex += n);
}

function currentItem(n) {
  showItem(slideIndex = n);

}

function showItem(n) {
  let i;
  let mainItems = document.getElementsByClassName("slider__main-item");
  let icons = document.getElementsByClassName("slider__item");

  if (n > mainItems.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = mainItems.length;
  }

  for (i = 0; i < mainItems.length; i++) {
     mainItems[i].style.display = "none";  
  }

  for (i = 0; i < icons.length; i++) {
     icons[i].className = icons[i].className.replace(" slider__item--active", "");
  }

  mainItems[slideIndex-1].style.display = "block";  
  icons[slideIndex-1].className += " slider__item--active";
}

