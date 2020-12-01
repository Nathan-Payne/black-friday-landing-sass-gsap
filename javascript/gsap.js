// Animation code

function runIntroAnimation() {
  gsap
    .timeline({ defaults: { ease: 'power2.out' } })
    .from(
      '.landing-grid__titles',
      {
        autoAlpha: 0,
        scaleX: 1.4,
        duration: 0.3,
        stagger: 0.12,
      },
      '0.3'
    )
    .to(
      '.landing-grid__titles',
      {
        fontWeight: 900,
        duration: 2,
        stagger: 0.08,
        ease: 'linear',
      },
      '+=0.5'
    )
    .to('.landing-grid__titles', {
      fontWeight: 100,
      duration: 2,
      stagger: 0.08,
      ease: 'linear',
    })

  gsap
    .timeline({ defaults: { ease: 'power2.out' } })
    .from(
      '.landing-grid__card',
      {
        autoAlpha: 0,
        rotate: 8,
        duration: 1.2,
      },
      '0.2'
    )
    .from(
      '.landing-grid__card-title',
      {
        autoAlpha: 0,
        y: -20,
        duration: 0.3,
      },
      '-=0.2'
    )
    .from(
      '.landing-grid__card-footer',
      {
        autoAlpha: 0,
        y: -20,
        duration: 0.3,
      },
      '-=0.17'
    )
}

function runExitAnimation() {
  gsap
    .timeline()
    .to('.landing-grid__card-title', {
      autoAlpha: 0,
      duration: 0.25,
    })
    .to(
      '.landing-grid__card-footer',
      {
        autoAlpha: 0,
        duration: 0.25,
      },
      '<'
    )
    .to(
      '.landing-grid__titles',
      {
        autoAlpha: 0,
        duration: 0.25,
      },
      '<0.1'
    )
    .to('.landing-grid', {
      rotate: 8,
      autoAlpha: 0,
      duration: 0.2,
    })
}

document.addEventListener('DOMContentLoaded', runIntroAnimation)

document.querySelector('.js-exit').addEventListener('click', runExitAnimation)

function delay(URL) {
  // short delay to allow exit animation and smooth transition
  setTimeout(function () {
    window.location = URL
  }, 500)
}
