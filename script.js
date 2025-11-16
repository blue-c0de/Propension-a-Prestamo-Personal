document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-right a");
  const sections = Array.from(document.querySelectorAll("main .section"))
    .filter(sec => sec.id && sec.id.startsWith("seccion"));

  const hero = document.getElementById("hero");
  const title = document.querySelector(".nav-left h1");

  // -------- 1) Scroll suave al hacer click en el navbar --------
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // sin "#"
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // -------- 2) Scrollspy manual con window.scroll --------
  function updateActiveLink() {
    // Altura donde consideramos la "línea de lectura" bajo el navbar
    const offset = 140; // píxeles desde la parte superior

    let currentId = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // Si la franja a 'offset' px está dentro de la sección
      if (rect.top <= offset && rect.bottom > offset) {
        currentId = section.id;
      }
    });

    // Si estamos en el hero (no hay sección activa) quitamos todo
    if (!currentId) {
      navLinks.forEach(link => link.classList.remove("active"));
      return;
    }

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === "#" + currentId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // -------- 3) Mostrar/ocultar título del navbar según hero --------
  function updateHeroTitle() {
    if (!hero || !title) return;

    const heroRect = hero.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Si buena parte del hero está visible, ocultamos el título
    if (heroRect.top < viewportHeight * 0.5 && heroRect.bottom > viewportHeight * 0.2) {
      title.classList.remove("visible");
    } else {
      title.classList.add("visible");
    }
  }

  function onScroll() {
    updateActiveLink();
    updateHeroTitle();
  }

  window.addEventListener("scroll", onScroll);
  // Llamamos una vez al cargar la página
  onScroll();
});

// -------- 4) Botones Ver todas / Ver menos (consulta 4) --------
function mostrarTodo3() {
  const t10 = document.getElementById("tabla3_10");
  const tfull = document.getElementById("tabla3_full");
  const btnMenos = document.getElementById("btn_menos_3");

  if (t10 && tfull && btnMenos) {
    t10.style.display = "none";
    tfull.style.display = "block";
    btnMenos.style.display = "inline-block";
  }
}

function mostrarMenos3() {
  const t10 = document.getElementById("tabla3_10");
  const tfull = document.getElementById("tabla3_full");
  const btnMenos = document.getElementById("btn_menos_3");

  if (t10 && tfull && btnMenos) {
    tfull.style.display = "none";
    t10.style.display = "block";
    btnMenos.style.display = "none";
  }
}