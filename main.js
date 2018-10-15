var modalContent = $('.modal-content')
var modalText = $('.modal-text')
var modal = $('.modal')
var header = $('header')

$('.menu-toggle').on('touchstart click', function() {
  $('.about').toggleClass('open-menu')
  $('.plus').toggleClass('minus')
  $('header').toggleClass('fix-position')

  if ($('.plus').text() !== '-') {
    $('.plus').text('-')
  } else {
    $('.plus').text('+')
  }

  return false
})

function pageReady() {
  $('.pcover').on('click', function() {
    var images = []
    modalContent.html('')
    const el = $(this)
    const title = el.find('.overlay h3').html()
    modalText.text(title)
    const photos = el
      .attr('data-photos')
      .replace(/\s/g, '')
      .split(',')
    photos.forEach(function(src) {
      const photo = new Image()
      photo.src = src
      images.push(photo)
      modal.fadeIn(300)
      header.fadeOut(300)
    })
    $('.modal-content').append(images)
    slideShow(images)
    return false
  })

  $('.modal-close, .modal-background').on('touchstart click', function() {
    $('.modal').fadeOut(300)
    $('header').fadeIn(300)
    return false
  })
}

function slideShow(images) {
  modalContent.on('mousemove touchmove', function(event) {
    const x = event.offsetX
    const width = this.offsetWidth
    const percentage = x / width
    const imageNumber = Math.floor(percentage * images.length)
    images.forEach(image => {
      image.style.display = 'none'
    })
    images[imageNumber].style.display = 'block'
  })
}

pageReady()
