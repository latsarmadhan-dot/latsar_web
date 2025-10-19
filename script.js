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
async function updateVisitorCount() {
  try {
    const response = await fetch('/api/visitor');
    const data = await response.json();
    document.getElementById('visitorCount').textContent = data.count.toLocaleString();
  } catch (error) {
    console.error('Gagal mengambil data pengunjung:', error);
    document.getElementById('visitorCount').textContent = '—';
  }
}

updateVisitorCount();

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

  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // ================= POPUP FORM GOOGLE =================
function openForm() {
  document.getElementById("popupForm").style.display = "flex";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
