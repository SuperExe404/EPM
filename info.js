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

  function mostrarVentana4() {
    document.getElementById('ventanaEmergente4').style.display = 'block';
  }
  
  function cerrarVentana4() {
    document.getElementById('ventanaEmergente4').style.display = 'none';
  }

  function mostrarVentana5() {
    document.getElementById('ventanaEmergente5').style.display = 'block';
  }
  
  function cerrarVentana5() {
    document.getElementById('ventanaEmergente5').style.display = 'none';
  }

  function mostrarVentana6() {
    document.getElementById('ventanaEmergente6').style.display = 'block';
  }
  
  function cerrarVentana6() {
    document.getElementById('ventanaEmergente6').style.display = 'none';
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

  function checkCheckboxes() {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");

    if (!checkbox1.checked || !checkbox2.checked) {
      alert("Por favor, acepta todos los términos y condiciones.");
    } else {
      window.location.href = "https://drive.google.com/drive/folders/1IFRkFTrlBSW-V8qYcAeQHct3J0k4uA5c?usp=sharing";
    }
  }