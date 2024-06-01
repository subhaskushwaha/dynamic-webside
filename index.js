const slides = document.querySelectorAll(".slide")
  var counter = 0;
//console.log(slides)
slides.forEach(
    (slide,index) => {
       slide.Style.left = `${index * 100}%`
    }
)

const goprev = () => {
    counter--
    alert()
    slideImage()
  
}
const goNext = () => {
    counter++
    alert()
    slideImage()
    
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.Style.transform = `translateX(-${counter * 100}%)`
        }
    )
}