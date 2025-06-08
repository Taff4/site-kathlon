// Função chamada ao clicar no logo principal (ícone K)
function animarSplash() {
  const logo = document.getElementById('logoPrincipal');
  const lateral = document.getElementById('graficoLateral');
  const splash = document.getElementById('splash');

  // Adiciona as classes de animação CSS
  logo.classList.add('animado');
  lateral.classList.add('animado');

  // Aguarda a animação e inicia a transição
  setTimeout(() => {
    splash.classList.add('fade-out');

    // Após fade-out, oculta splash e exibe conteúdo do site
    setTimeout(() => {
      splash.style.display = 'none';
      const content = document.getElementById('site-content');
      content.classList.remove('hidden');
      content.classList.add('fade-in');
    }, 1000);
  }, 800); // tempo de animação dos elementos
}

// Função alternativa para clique em botão "Entrar" (caso exista)
function enterSite() {
  animarSplash(); // reutiliza a animação principal
}

// Botão de menu responsivo (hambúrguer)
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.menu-overlay');

  navbar.classList.toggle('open');

  // Só mostra overlay no mobile
  if (window.innerWidth <= 768) {
    if (navbar.classList.contains("open")) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
    }
  } else {
    overlay.classList.remove("active");
  }
}


// Fecha o menu ao clicar em qualquer link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".navbar").classList.remove("open");
    });
  });
});

// Animações GSAP ao carregar a splash
document.addEventListener("DOMContentLoaded", () => {
  // Logo principal: entra de cima com fade
  gsap.from("#logoPrincipal", {
    duration: 1.2,
    y: -80,
    opacity: 0,
    ease: "power2.out"
  });

  // Logo imagem interna (zoom suave)
  gsap.from("#logoPrincipal img", {
    duration: 1.4,
    scale: 0.7,
    opacity: 0,
    delay: 0.3,
    ease: "back.out(1.7)"
  });

  // Título e subtítulo com leve atraso
  gsap.from("#logoPrincipal h1, #logoPrincipal p", {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    delay: 0.5
  });

  // Gráfico lateral: slide-in da esquerda
  gsap.from("#graficoLateral", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "power3.out"
  });
});

// Clique em imagem para abrir em tela cheia
document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".imagem-interativa");

  imagens.forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.width = "100vw";
      modal.style.height = "100vh";
      modal.style.background = "#ffffff";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.zIndex = 9999;

      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.style.maxWidth = "90%";
      fullImg.style.maxHeight = "90%";
      fullImg.style.borderRadius = "12px";
      fullImg.style.boxShadow = "0 0 30px rgba(0, 0, 0, 0.2)";
      fullImg.style.border = "1px solid #ddd";
      fullImg.style.cursor = "zoom-out";

      modal.appendChild(fullImg);
      document.body.appendChild(modal);

      modal.addEventListener("click", () => {
        document.body.removeChild(modal);
      });
    });
  });
});

// Animação dos cards com GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card").forEach(card => {
  gsap.fromTo(card, 
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-scroll").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.from("#bd", {
  scrollTrigger: {
    trigger: "#bd",
    start: "top 80%"
  },
  opacity: 0,
  y: 80,
  duration: 1.2
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
});

function fecharMenu() {
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.menu-overlay');

  navbar.classList.remove("open");
  overlay.classList.remove("active");
}


function scrollToTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('btn-topo');
  if (window.scrollY > 300) {
    btn.classList.add('mostrar');
  } else {
    btn.classList.remove('mostrar');
  }
});
