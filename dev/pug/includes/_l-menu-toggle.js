// Скрипты главного меню
   var toggle = document.getElementById('mbtn');
   var close = document.getElementById('close');
   var mask = document.createElement('div');
   mask.className = 'mask';

  /* slide menu left */
  toggle.addEventListener('click', function(){
    document.getElementById('mainmenu').classList.add('open');
    document.body.appendChild(mask);
    } );

  /* hide active menu if mask is clicked */
  mask.addEventListener('click', function(){
    document.getElementById('mainmenu').classList.remove('open');
    open = "";
    document.body.removeChild(mask);
    } );

  /* hide active menu if close menu button is clicked */
  close.addEventListener('click', function(){
    document.getElementById('mainmenu').classList.remove('open')
    document.body.removeChild(mask);
    } );

  // /* hide active menu if close menu button is clicked */
  // [].slice.call(document.querySelectorAll('close-menu')).forEach(function(el,i){
  //   el.addEventListener('click', function(){
  //     document.getElementById('mainmenu').classList.remove('open')
  //   //  document.body.removeChild(mask);
  //   } );

  // Конец скриптов главного меню
  // .. 