
// dropbox mobile
const toggle = document.querySelector('.dropbox');
const mobileMenu = document.querySelector('.menu-mobile');

toggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
// dropbox mobile

// botão curriculo
let cvbutton = document.querySelector('.botao-cv')

cvbutton.addEventListener('click', (downloadcv) => {
  downloadcv.preventDefault();

  if (confirm("Deseja baixar o PDF do currículo ?")) {
  let pdf = document.createElement('a');
  pdf.href = cvbutton.getAttribute('href');
  pdf.download = cvbutton.getAttribute('download');
  pdf.click(); 
} 
});


// botão curriculo