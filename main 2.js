
function toggleNav(){
  const nav = document.getElementById('mainnav');
  const btn = document.querySelector('.nav-toggle');
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// Simple i18n helper in i18n.js handles content replacement
