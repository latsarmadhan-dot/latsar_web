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

  // ================= TUTUP MENU OTOMATIS SAAT KLIK LINK =================
const navLinksClick = document.querySelectorAll('#navMenu a');

navLinksClick.forEach(link => {
  link.addEventListener('click', () => {
    // Tutup menu saat link diklik (berlaku di HP & laptop)
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

  // ================= POPUP FORM GOOGLE =================
function openForm() {
  document.getElementById("popupForm").style.display = "flex";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// === POPUP GOOGLE MAPS ===
function openMap(place) {
  const modal = document.getElementById("mapModal");
  const frame = document.getElementById("mapFrame");
  let url = "";

  switch (place) {
    case "jantur":
      url =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4363.3890813278!2d114.8468577!3d-0.8451204000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df975946a693a09%3A0x78b5b5cc8912f610!2sAir%20Terjun%20Jantur%20Doyam!5e1!3m2!1sid!2sid!4v1761014767489!5m2!1sid!2sid";
      break;
    case "trinsing":
      url =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4363.138263710708!2d114.93417679999999!3d-1.0448020000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df9813cce5d9443%3A0xc57c8b217ba79195!2sObyek%20Wisata%20Danau%20Desa%20Trinsing!5e1!3m2!1sid!2sid!4v1761014894061!5m2!1sid!2sid"
      break;
    case "batur":
      url =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4363.163828970379!2d114.89503959999999!3d-1.0262286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df978a955555553%3A0x7a2177b2c5a04c6d!2sBuper%20Panglima%20Batur!5e1!3m2!1sid!2sid!4v1761014925784!5m2!1sid!2sid"
      break;
  }

  frame.src = url;
  modal.classList.add("show");
  document.body.classList.add("overflow-hidden");
}

function closeMap() {
  const modal = document.getElementById("mapModal");
  const frame = document.getElementById("mapFrame");
  modal.classList.remove("show");
  frame.src = "";
  document.body.classList.remove("overflow-hidden");
}

// Klik area luar popup untuk menutup
document.addEventListener("click", function (e) {
  const modal = document.getElementById("mapModal");
  if (modal.classList.contains("show") && e.target === modal) {
    closeMap();
  }
});

