/* ========================= script.js ========================= */

// Slide otomatis hero section
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slides img');
function showSlide(index){
slides.forEach((img,i)=> img.classList.toggle('active', i === index));
}
function nextSlide(){
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}
if(slides.length > 0){
showSlide(0);
setInterval(nextSlide, 4000);
}

// Statistik pengunjung (localStorage)
const key = 'visitor_count'
let count = parseInt(localStorage.getItem(key) || '0', 10) + 1
localStorage.setItem(key, count)
document.getElementById('visitorCount').innerText = count

// Tahun footer
document.getElementById('year').textContent = new Date().getFullYear()

// Lightbox
function openLightbox(el){
  const lightbox = document.getElementById('lightbox')
  const img = document.getElementById('lightboxImg')
  img.src = el.src
  lightbox.style.display = 'flex'
}
function closeLightbox(){
  document.getElementById('lightbox').style.display = 'none'
}

// Form kontak
const form = document.getElementById('contactForm')
form.addEventListener('submit', e => {
  e.preventDefault()
  alert('Pesan Anda telah terkirim! (simulasi)')
  form.reset()
})