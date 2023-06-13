/* ajout / supprimer un background quand on scrolle */

var nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    nav.classList.add('bg-dark', 'shadow');
  }
  else{
    nav.classList.remove('bg-dark');
  }
})


/* Filtrer les projets (for--filter-menu) */

$(document).on('click', '.project-filter li', function(){

  $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});

/* boucle sur les projets (for-filter-menu)*/

$(document).ready(function(){
$('.list').click(function(){
  const value = $(this).attr('data-filter');
  if(value == 'all'){
    $('.projectCard').show('1000');
  }
  else{
    $('.projectCard').not('.'+value).hide('1000');
    $('.projectCard').filter('.'+value).show('1000');
  }
})
});



