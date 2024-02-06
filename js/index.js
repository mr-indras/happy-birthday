(function() {
  function $(id) {
    return document.getElementById(id);
  }
  
  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  var audio1 = new Audio("hbd.mp3");
      audio1.volume = 1;
      audio1.play();
  
  console.log('wat', card);
  openB.addEventListener('click', function () {
      
    
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });
  
  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
