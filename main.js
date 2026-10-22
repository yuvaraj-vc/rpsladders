document.addEventListener('DOMContentLoaded', function () {

  /* ---- Populate contact info from config.js everywhere on the page ---- */
  document.querySelectorAll('[data-phone-display]').forEach(el => el.textContent = SITE_CONFIG.phoneDisplay);
  document.querySelectorAll('[data-phone-link]').forEach(el => el.href = 'tel:' + SITE_CONFIG.phoneDial);
  document.querySelectorAll('[data-email]').forEach(el => { el.textContent = SITE_CONFIG.email; el.href = 'mailto:' + SITE_CONFIG.email; });
  document.querySelectorAll('[data-company-name]').forEach(el => el.textContent = SITE_CONFIG.companyName);
  document.querySelectorAll('[data-address]').forEach(el => el.innerHTML = `${SITE_CONFIG.address.line1}<br>${SITE_CONFIG.address.line2} – ${SITE_CONFIG.address.pincode}`);
  document.querySelectorAll('[data-review-link]').forEach(el => el.href = SITE_CONFIG.googleReviewLink);
  document.querySelectorAll('[data-map-embed]').forEach(el => { el.src = SITE_CONFIG.mapEmbedSrc; });

  /* Generic WhatsApp buttons: <a data-wa="Message text here">...</a> */
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.href = waLink(el.getAttribute('data-wa'));
    el.target = '_blank';
    el.rel = 'noopener';
  });

  /* Floating WhatsApp button (default general enquiry message) */
  const waFloat = document.getElementById('waFloat');
  if (waFloat) {
    waFloat.href = waLink(`Hi ${SITE_CONFIG.companyName}, I'd like to enquire about your aluminium products.`);
    waFloat.target = '_blank';
    waFloat.rel = 'noopener';
  }

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));
  }

  /* ---- Gallery filter ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        item.style.display = (f === 'all' || item.getAttribute('data-cat') === f) ? '' : 'none';
      });
    });
  });

  /* ---- Lightbox ---- */
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbLabel = lightbox.querySelector('.ph-label');
    const lbFile = lightbox.querySelector('.ph-file');
    const lbCaption = lightbox.querySelector('.lb-caption');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const label = item.getAttribute('data-label') || 'Gallery photo';
        const file = item.getAttribute('data-file') || '';
        if (lbLabel) lbLabel.textContent = label;
        if (lbFile) lbFile.textContent = file;
        if (lbCaption) lbCaption.textContent = label;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('.lb-close')) lightbox.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
  }

  /* ---- Enquiry form ---- */
  const form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const product = form.querySelector('[name="product"]').value;
      const phone = form.querySelector('[name="phone"]').value.trim();
      const msg = form.querySelector('[name="message"]').value.trim();

      const waText = `New website enquiry\nName: ${name}\nPhone: ${phone}\nProduct interest: ${product}\nMessage: ${msg}`;
      const successBox = document.getElementById('formSuccess');
      if (successBox) successBox.classList.add('show');
      form.reset();

      // Also open WhatsApp with the enquiry pre-filled so it reaches you instantly.
      window.open(waLink(waText), '_blank');
    });
  }

  /* Set current year in footer */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});