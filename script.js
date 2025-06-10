// Função chamada ao clicar no logo principal (ícone K)
function animarSplash() {
  const logo = document.getElementById('logoPrincipal');
  const lateral = document.getElementById('graficoLateral');
  const splash = document.getElementById('splash');

  logo.classList.add('animado');
  lateral.classList.add('animado');

  setTimeout(() => {
    splash.classList.add('fade-out');

    setTimeout(() => {
      splash.style.display = 'none';
      const content = document.getElementById('site-content');
      content.classList.remove('hidden');
      content.classList.add('fade-in');
    }, 1000);
  }, 800);
}

// Função alternativa para botão "Entrar"
function enterSite() {
  animarSplash();
}

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;

  if (window.innerWidth <= 992) {
    const isOpen = navbar.classList.contains('open');
    navbar.classList.toggle('open');
    overlay.classList.toggle('active');
    body.style.overflow = isOpen ? '' : 'hidden'; // 🔒 bloqueia ou libera scroll do fundo
  } else {
    navbar.classList.toggle('open');
    overlay.classList.remove('active');
  }
}
// Fecha o menu via botão ou link
function fecharMenu() {
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.menu-overlay');
  document.body.style.overflow = ''; // ✅ libera rolagem ao fechar menu
  navbar.classList.remove("open");
  overlay.classList.remove("active");
}

// Scroll para o topo
function scrollToTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar botão de voltar ao topo
window.addEventListener('scroll', () => {
  const btn = document.getElementById('btn-topo');
  if (window.scrollY > 300) {
    btn.classList.add('mostrar');
  } else {
    btn.classList.remove('mostrar');
  }
});

// Inicializações após DOM carregado
document.addEventListener("DOMContentLoaded", () => {
  // Fecha menu ao clicar em link
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".navbar").classList.remove("open");
    });
  });

  // Imagens em tela cheia
  const imagens = document.querySelectorAll(".imagem-interativa");
  imagens.forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        padding: 1rem;
        overflow: auto;
        box-sizing: border-box;
        touch-action: manipulation;
      `;

      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        border-radius: 12px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
        border: 1px solid #ddd;
        cursor: zoom-out;
      `;

      modal.appendChild(fullImg);
      document.body.appendChild(modal);

      modal.addEventListener("click", () => {
        document.body.removeChild(modal);
      });
    });
  });

  // Toggle via botão id="menu-toggle" se existir
  const toggle = document.getElementById("menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("open");
    });
  }

  // Animações com GSAP
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#logoPrincipal", {
    duration: 1.2,
    y: -80,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from("#logoPrincipal img", {
    duration: 1.4,
    scale: 0.7,
    opacity: 0,
    delay: 0.3,
    ease: "back.out(1.7)"
  });

  gsap.from("#logoPrincipal h1, #logoPrincipal p", {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    delay: 0.5
  });

  gsap.from("#graficoLateral", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "power3.out"
  });

  // ❌ Animação dos cards REMOVIDA

  // Elementos com fade-scroll
  gsap.utils.toArray(".fade-scroll").forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Seção do banco de dados
  gsap.from("#bd", {
    scrollTrigger: {
      trigger: "#bd",
      start: "top 80%"
    },
    opacity: 0,
    y: 80,
    duration: 1.2
  });

});
