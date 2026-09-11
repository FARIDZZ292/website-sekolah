/**
 * ==========================================================================
 * Pondok Pesantren Islam Shuffah Hizbullah & Madrasah Al-Fatah
 * Script Interaktivitas Landing Page (Vanilla JavaScript)
 * ==========================================================================
 */

// Icon SVG untuk Tema Tampilan
var sunIconSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
var moonIconSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

// --------------------------------------------------------------------------
// 1. Inisialisasi Tema (Mode Gelap / Terang)
// --------------------------------------------------------------------------
function inisialisasiTema() {
    var modeTersimpan = localStorage.getItem('shuffah_theme');
    var body = document.body;
    var ikon = document.getElementById('ikon-mode');

    // Default ke mode gelap futuristik jika belum disetel
    if (modeTersimpan === 'terang') {
        body.classList.remove('gelap');
        if (ikon) ikon.innerHTML = moonIconSVG;
    } else {
        body.classList.add('gelap');
        if (ikon) ikon.innerHTML = sunIconSVG;
    }
}

function gantiMode() {
    var body = document.body;
    var ikon = document.getElementById('ikon-mode');
    
    body.classList.toggle('gelap');

    if (body.classList.contains('gelap')) {
        if (ikon) ikon.innerHTML = sunIconSVG;
        localStorage.setItem('shuffah_theme', 'gelap');
    } else {
        if (ikon) ikon.innerHTML = moonIconSVG;
        localStorage.setItem('shuffah_theme', 'terang');
    }
}

// --------------------------------------------------------------------------
// 2. Menu Navigasi Mobile (Hamburger Toggle)
// --------------------------------------------------------------------------
function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    var hamburger = document.getElementById('hamburger');
    
    if (!menu || !hamburger) return;

    menu.classList.toggle('buka');
    
    var garis = hamburger.querySelectorAll('span');
    if (menu.classList.contains('buka')) {
        garis[0].style.transform = 'translateY(7.5px) rotate(45deg)';
        garis[1].style.opacity = '0';
        garis[2].style.transform = 'translateY(-7.5px) rotate(-45deg)';
    } else {
        garis[0].style.transform = 'none';
        garis[1].style.opacity = '1';
        garis[2].style.transform = 'none';
    }
}

// Tutup menu drawer saat link diklik
function pasangNavClickListener() {
    var navLinks = document.querySelectorAll('.nav-item');
    var menu = document.getElementById('nav-menu');
    var hamburger = document.getElementById('hamburger');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (menu && menu.classList.contains('buka')) {
                menu.classList.remove('buka');
                if (hamburger) {
                    var garis = hamburger.querySelectorAll('span');
                    garis[0].style.transform = 'none';
                    garis[1].style.opacity = '1';
                    garis[2].style.transform = 'none';
                }
            }
        });
    });
}

// --------------------------------------------------------------------------
// 3. Animasi Hitung Statistik (Live Counters)
// --------------------------------------------------------------------------
var sudahAnimasiStat = false;

function jalankanAnimasiStatistik() {
    if (sudahAnimasiStat) return;

    var panelStat = document.querySelector('.hero-stats-panel');
    if (!panelStat) return;

    var rect = panelStat.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        sudahAnimasiStat = true;

        var statAngkaList = document.querySelectorAll('.stat-angka');
        statAngkaList.forEach(function(el) {
            var target = parseInt(el.getAttribute('data-angka'), 10) || 0;
            var current = 0;
            var durasi = 1600; // 1.6 detik
            var stepTime = 16;
            var totalSteps = durasi / stepTime;
            var kenaikan = target / totalSteps;

            var timer = setInterval(function() {
                current += kenaikan;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = Math.floor(current).toLocaleString('id-ID');
            }, stepTime);
        });
    }
}

// --------------------------------------------------------------------------
// 4. Smooth Scroll & Highlight Menu Aktif
// --------------------------------------------------------------------------
function kelolaScrollAktif() {
    var sections = document.querySelectorAll('section[id]');
    var navItems = document.querySelectorAll('.nav-item');
    var scrollY = window.pageYOffset + 140;

    sections.forEach(function(sec) {
        var top = sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navItems.forEach(function(item) {
                item.classList.remove('aktif');
                if (item.getAttribute('href') === '#' + id) {
                    item.classList.add('aktif');
                }
            });
        }
    });

    // Floating Back-to-Top Button
    var btnKeAtas = document.getElementById('ke-atas');
    if (btnKeAtas) {
        if (window.pageYOffset > 450) {
            btnKeAtas.classList.add('tampil');
        } else {
            btnKeAtas.classList.remove('tampil');
        }
    }
}

// --------------------------------------------------------------------------
// 5. Galeri Foto: Lightbox Modal Interaktif
// --------------------------------------------------------------------------
function setupGalleryLightbox() {
    var galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var img = item.querySelector('img');
            var caption = item.getAttribute('data-caption') || (img ? img.alt : 'Dokumentasi Resmi Pesantren');
            if (!img) return;

            // Buat overlay modal
            var modal = document.createElement('div');
            modal.className = 'gallery-lightbox-modal';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.background = 'rgba(2, 18, 12, 0.94)';
            modal.style.backdropFilter = 'blur(16px)';
            modal.style.webkitBackdropFilter = 'blur(16px)';
            modal.style.zIndex = '9999';
            modal.style.display = 'flex';
            modal.style.flexDirection = 'column';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.padding = '24px';
            modal.style.cursor = 'zoom-out';
            modal.style.animation = 'fadeIn 0.25s ease';

            // Wadah konten
            var container = document.createElement('div');
            container.style.maxWidth = '920px';
            container.style.width = '100%';
            container.style.textAlign = 'center';
            container.style.cursor = 'default';

            var bigImg = document.createElement('img');
            bigImg.src = img.src;
            bigImg.alt = caption;
            bigImg.style.maxHeight = '75vh';
            bigImg.style.maxWidth = '100%';
            bigImg.style.margin = '0 auto';
            bigImg.style.borderRadius = '16px';
            bigImg.style.border = '1px solid rgba(0, 255, 135, 0.3)';
            bigImg.style.boxShadow = '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 255, 135, 0.2)';

            var captionEl = document.createElement('p');
            captionEl.textContent = caption;
            captionEl.style.color = '#f0fdf4';
            captionEl.style.fontSize = '1.05rem';
            captionEl.style.fontWeight = '600';
            captionEl.style.marginTop = '16px';

            var closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '24px';
            closeBtn.style.right = '28px';
            closeBtn.style.background = 'rgba(16, 185, 129, 0.2)';
            closeBtn.style.border = '1px solid rgba(0, 255, 135, 0.4)';
            closeBtn.style.color = '#00ff87';
            closeBtn.style.fontSize = '2rem';
            closeBtn.style.width = '46px';
            closeBtn.style.height = '46px';
            closeBtn.style.borderRadius = '50%';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.display = 'flex';
            closeBtn.style.alignItems = 'center';
            closeBtn.style.justifyContent = 'center';
            closeBtn.style.lineHeight = '1';

            container.appendChild(bigImg);
            container.appendChild(captionEl);
            modal.appendChild(closeBtn);
            modal.appendChild(container);
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';

            function tutupModal() {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                    document.body.style.overflow = '';
                }
            }

            modal.addEventListener('click', function(e) {
                if (e.target === modal || e.target === closeBtn) {
                    tutupModal();
                }
            });

            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    tutupModal();
                    document.removeEventListener('keydown', escHandler);
                }
            });
        });
    });
}

// --------------------------------------------------------------------------
// 6. Formulir Pendaftaran & Konsultasi
// --------------------------------------------------------------------------
function kirimPesan(event) {
    event.preventDefault();

    var submitBtn = document.getElementById('submit-btn');
    var successBox = document.getElementById('pesan-sukses');
    var form = document.getElementById('form-kontak');

    if (!submitBtn || !form) return;

    submitBtn.disabled = true;
    var originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sedang Mengirim Data...</span>';

    setTimeout(function() {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;

        if (successBox) {
            successBox.style.display = 'flex';
            form.reset();

            setTimeout(function() {
                successBox.style.display = 'none';
            }, 6000);
        }
    }, 1200);
}

// --------------------------------------------------------------------------
// 7. Event Listeners Saat Dokumen Siap
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    inisialisasiTema();
    pasangNavClickListener();
    setupGalleryLightbox();
    jalankanAnimasiStatistik();

    window.addEventListener('scroll', function() {
        kelolaScrollAktif();
        jalankanAnimasiStatistik();
    });
});
