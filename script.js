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

// ================= VISITOR COUNTER (Realtime Global - Vercel KV) =================
async function updateVisitorCount() {
  try {
    const response = await fetch('/api/visitor');
    const data = await response.json();
    document.getElementById('visitorCount').textContent = data.count.toLocaleString();
  } catch (error) {
    console.error('Gagal memuat jumlah pengunjung:', error);
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

// ================= NAVBAR ACTIVE SCROLL =================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // jarak atas
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
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

