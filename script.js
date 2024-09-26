document.addEventListener("DOMContentLoaded", function () {
    let backgrounds=document.querySelectorAll(".fading-images")
    let headings=document.querySelectorAll(".fading-heading")
    let imageIndex=0
    function changeBackground(){
      backgrounds[imageIndex].classList.remove("showing");
      headings[imageIndex].classList.remove("show");
      imageIndex++
      if(imageIndex>=backgrounds.length){
        imageIndex=0
      }
      backgrounds[imageIndex].classList.add("showing")
      headings[imageIndex].classList.add("show")
    }
    setInterval(changeBackground,3000)
    
  })
  