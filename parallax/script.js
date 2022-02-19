window.addEventListener('scroll', function() {
  if (pageYOffset > 0) {
    document.querySelector('.container').style.fontSize = (window.pageYOffset / 20) * 2.1 + 'em';
  }
});