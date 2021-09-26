const paral = document.querySelector('.section-crap')
window.addEventListener('scroll', () => {
    let offset  = window.pageYOffset;
    paral.style.backgroundPositionY = offset * 0.5 + 'px'

    const targetScroll = document.querySelectorAll('.scroll')
    let index = 0, length = targetScroll.length
    for(index; index < length; index++){
        let pos = offset * targetScroll[index].dataset.rate
        // targetScroll[index].style.transform = `translate3d(0px ${pos}px, 0px)`
        targetScroll[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)'
    }
})