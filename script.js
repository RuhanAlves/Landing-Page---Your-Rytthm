gsap.registerPlugin(ScrollTrigger);

// ângulo final de cada imagem — os mesmos valores que estavam fixos no CSS
const rosas = [
  { el: '.Rosa',  end: 0   },
  { el: '.Rosa2', end: 60  },
  { el: '.Rosa3', end: 120 }
];

// todas começam em 0deg -> sobrepostas, parecendo uma imagem só
gsap.set(rosas.map(r => r.el), { rotation: 0 });

const rosaTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.Sec04',
    start: 'top 80%',   // começa quando a seção entra pela base da tela
    end: 'top top',     // termina quando ela sai pelo topo
    scrub: 2,               // acompanha o scroll (funciona nos dois sentidos)
    //markers: true,      // descomente pra depurar o range no navegador
  }
});

rosas.forEach(r => {
  rosaTl.to(r.el, {
    rotation: r.end,
    ease: 'power2.inOut',
  }, 0); // "0" = as 3 giram em paralelo
});

window.addEventListener('load', () => {
    const testes = document.querySelectorAll('.tipos');

    testes.forEach((el) => {
    gsap.fromTo(el, {
        y: 200
    }, {
        y: 0,
        scrollTrigger: {
            trigger: el,
            start: 'center 90%',
            end: 'top center',
            scrub: 2,
            invalidateOnRefresh: true
        }
    });
});
});