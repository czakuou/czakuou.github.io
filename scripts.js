document.addEventListener('DOMContentLoaded', () => {
  // Start Here

  const SLIDETIME = 500;
  const backButton = document.querySelector('.prev')
  const nextButton = document.querySelector('.next')
  const allSlides = [...document.querySelectorAll('.recomended_carusele__item')]

  let clicable = true
  let active = null
  let newActive = null

  function initSlider() {
    allSlides.forEach(slide => {
      slide.setAttribute(
        'style',
        `transition: transform ${SLIDETIME}ms ease;
                      animation-duration: ${SLIDETIME}ms;
        `,
      )
    })
  }

  function changeSlide(forward) {
    if (clicable){
      clicable = false
      active = document.querySelector('.active')
      const activeSlideIndex = allSlides.indexOf(active)

      if (forward) {
        newActive = allSlides[(activeSlideIndex + 1) % allSlides.length]
        active.classList.add('slideOutLeft')
        newActive.classList.add('slideInRight', 'active')
      }else{
        newActive = allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length]
        active.classList.add('slideOutRight')
        newActive.classList.add('slideInLeft', 'active')
      }
    }
  }

  allSlides.forEach(slide => {
    slide.addEventListener('transitionend', () => {
      if (slide === active && !clicable) {
        clicable = true
        active.className = 'recomended_carusele__item'
      }
    })
  })

  // Event listeners
  nextButton.addEventListener('click', () => {
    changeSlide(true)
  })
  backButton.addEventListener('click', () => {
    changeSlide(false)
  })

  // init slider
  initSlider()
})
