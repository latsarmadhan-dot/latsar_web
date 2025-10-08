// ================= HERO SLIDER =================
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slider img');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === slideIndex) slide.classList.add('active');
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 4000); // Ganti gambar tiap 4 detik

// ================= FOOTER YEAR =================
document.getElementById('year').textContent = new Date().getFullYear();

// ================= VISITOR COUNTER =================
let count = localStorage.getItem('visitCount');
if (!count) count = 0;
count++;
localStorage.setItem('visitCount', count);
document.getElementById('visitorCount').textContent = count;

// ================= LIGHTBOX =================
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// ================= FORM HANDLER =================
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah terkirim.');
  e.target.reset();
});

// ================= INIT AOS =================
AOS.init({
  duration: 1200,      // durasi animasi (ms)
  once: true,          // animasi hanya sekali
  easing: 'ease-in-out'
});

// ============ Scroll ke Atas ============
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
