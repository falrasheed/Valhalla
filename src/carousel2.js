//CAROUSEL
/*------------------------------
        Album Cover Slider
--------------------------------*/
//start added by Chase

// this is what I changed
var a = document.getElementsByTagName("carousel-link");
// this is what I changed

var cfImg = document.getElementsByClassName("coverflow2__image")

var scaleI = 0;
for (scaleI; scaleI < a.length; scaleI++) {
  if (scaleI === 3) {
    continue;
  } else {
    a[scaleI].style.cursor = "default";
    a[scaleI].addEventListener("click", prevDef);
  }
}

function prevDef(e) {
  e.preventDefault();
}

function forScale(coverflow2Pos) {
  for (scaleI = 0; scaleI < a.length; scaleI++) {
    a[scaleI].style.cursor = "default";
    a[scaleI].addEventListener("click", prevDef);
  }
  for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
    if (cfImg[scaleI].getAttribute("data-coverflow2-index") == coverflow2Pos) {
      cfImg[scaleI].parentElement.style.cursor = "pointer";
      cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
    }
  }
}
//end added by Chase

function setupcoverflow2(coverflow2Container) {
  var coverflow2Containers;

  if (typeof coverflow2Container !== "undefined") {
    if (Array.isArray(coverflow2Container)) {
      coverflow2Containers = coverflow2Container;
    } else {
      coverflow2Containers = [coverflow2Container];
    }
  } else {
    coverflow2Containers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow2'));
  }

  coverflow2Containers.forEach(function(containerElement) {
    var coverflow2 = {};
    var prevArrows, nextArrows;

    //capture coverflow2 elements
    coverflow2.container = containerElement;
    coverflow2.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow2__image'));
    coverflow2.position = Math.floor(coverflow2.images.length / 2) + 1;

    //set indicies on images
    coverflow2.images.forEach(function(coverflow2Image, i) {
      coverflow2Image.dataset.coverflow2Index = i + 1;
    });

    //set initial position
    coverflow2.container.dataset.coverflow2Position = coverflow2.position;

    //get prev/next arrows
    prevArrows = Array.prototype.slice.apply(coverflow2.container.getElementsByClassName("prev-arrow"));
    nextArrows = Array.prototype.slice.apply(coverflow2.container.getElementsByClassName("next-arrow"));

    //add event handlers
    function setPrevImage() {
      coverflow2.position = Math.max(1, coverflow2.position - 1);
      coverflow2.container.dataset.coverflow2Position = coverflow2.position;
      //call the functin forScale added
      forScale(coverflow2.position);
    }

    function setNextImage() {
      coverflow2.position = Math.min(coverflow2.images.length, coverflow2.position + 1);
      coverflow2.container.dataset.coverflow2Position = coverflow2.position;
      //call the function Chase added
      forScale(coverflow2.position);
    }

    function jumpToImage(evt) {
      coverflow2.position = Math.min(coverflow2.images.length, Math.max(1, evt.target.dataset.coverflow2Index));
      coverflow2.container.dataset.coverflow2Position = coverflow2.position;
      //start added by Chase
      setTimeout(function() {
        forScale(coverflow2.position);
      }, 1);
      //end added by Chase
    }

    function onKeyPress(evt) {
      switch (evt.which) {
        case 37: //left arrow
          setPrevImage();
          break;
        case 39: //right arrow
          setNextImage();
          break;
      }
    }
    prevArrows.forEach(function(prevArrow) {
      prevArrow.addEventListener('click', setPrevImage);
    });
    nextArrows.forEach(function(nextArrow) {
      nextArrow.addEventListener('click', setNextImage);
    });
    coverflow2.images.forEach(function(image) {
      image.addEventListener('click', jumpToImage);
    });
    window.addEventListener('keyup', onKeyPress);
  });
}

setupcoverflow2();

