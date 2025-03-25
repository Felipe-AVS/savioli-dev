// Animação de rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animação para aumentar a escala dos cards de projeto com o scroll
  const projetos = document.querySelectorAll('.uk-card');
  window.addEventListener('scroll', () => {
    projetos.forEach(projeto => {
      const rect = projeto.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        projeto.classList.add('uk-card-hover');
      }
    });
  });
  