window.addEventListener('scroll', onScroll)

onScroll();

function onScroll() {
  if (scrollY > 0) {
    const navigation = document.getElementById('navigation');
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }

  backToTopButton();
  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(services);
  activeMenuAtCurrentSection(about);
  activeMenuAtCurrentSection(contact);
}

function activeMenuAtCurrentSection(section){
  const targetLine = scrollY+innerHeight/2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedLineTarget = targetLine >= sectionTop
  // console.log('O topo da secao chegou ou passou da linha?', sectionTopReachOrPassedLineTarget);

  const sectionEndAt = sectionTop + sectionHeight;
  // console.log(sectionEndAt);

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine;
  // console.log('O fundo da secao passou da linha?', sectionEndPassedTargetLine);

  // limites da secao
  const sectionBaudaries = sectionTopReachOrPassedLineTarget && !sectionEndPassedTargetLine

  // seleciona na class menu os a que contem href e pega o id
  const sectionId = section.getAttribute('id');
  
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active');
  if(sectionBaudaries){
    console.log(menuElement);
    menuElement.classList.add('active')
    
  }
  
  
}

function backToTopButton(){
  const backToTopButton = document.querySelector('.backToTopButton');
  if(scrollY > 500){
    backToTopButton.classList.add('show');
  }
  else{
    backToTopButton.classList.remove('show');
  }
}

 
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`);
