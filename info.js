function mostrarVentana1() {
    document.getElementById('ventanaEmergente1').style.display = 'block';
  }
  
  function cerrarVentana1() {
    document.getElementById('ventanaEmergente1').style.display = 'none';
  }

function mostrarVentana2() {
    document.getElementById('ventanaEmergente2').style.display = 'block';
  }
  
  function cerrarVentana2() {
    document.getElementById('ventanaEmergente2').style.display = 'none';
  }
  function mostrarVentana3() {
    document.getElementById('ventanaEmergente3').style.display = 'block';
  }
  
  function cerrarVentana3() {
    document.getElementById('ventanaEmergente3').style.display = 'none';
  }
  
  function acerca() {
    window.location.href="info.html"
  }

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((centerY - y) / centerY) * 20;
      const rotateY = ((centerX - x) / centerX) * 20;
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);

      card.querySelector('.card-content').style.transform = `rotateX(${-rotateX}deg) rotateY(${-rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
      card.querySelector('.card-content').style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
