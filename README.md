HOW TO ADD YOUR OWN PHOTOS
===========================
The website currently shows grey placeholder boxes instead of real photos.
Each placeholder box has a small caption naming the exact file it expects,
e.g. "images/hero-main.jpg". To bring the site to life:

1. Prepare your photo and rename it to match the filename EXACTLY (including
   lowercase letters and the .jpg ending).
2. Copy it into this "images" folder, replacing nothing (the placeholder is
   just HTML/CSS — once a real file with the matching name exists, you swap
   the <div class="ph"> block for a plain <img> tag — see step 3).
3. Open the relevant .html file in any text editor and find the placeholder
   block that mentions your filename, e.g.:

     <div class="ph" style="aspect-ratio:4/3;">
       <svg ...></svg>
       <span class="ph-label">Hero photo<span class="ph-file">images/hero-main.jpg</span></span>
     </div>

   Replace the whole block with:

     <img src="images/hero-main.jpg" alt="Describe the photo here" style="width:100%;height:100%;object-fit:cover;">

   (Keep the surrounding wrapper div/class the same — only the inner
   placeholder is replaced with an <img> tag.)

Recommended photo sizes (landscape unless noted):
- hero-main.jpg            1200 x 1500 px (portrait)
- cat-*.jpg / product-*.jpg 1000 x 750 px
- about-factory.jpg        1000 x 1250 px (portrait)
- gallery-01.jpg .. gallery-12.jpg   1000 x 1000 px (square)
- project-01.jpg .. project-06.jpg   1000 x 625 px

LOGO
====
The logo is currently a simple ladder icon drawn in code (no image file
needed). To use your own logo image instead, replace the two lines that
look like this in every page's <header>:

  <span class="brand-mark">
    <svg viewBox="0 0 24 24" ...>...</svg>
  </span>

with:

  <span class="brand-mark">
    <img src="images/logo.png" alt="Maha RPS Ladders Pvt Ltd logo" style="width:100%;height:100%;object-fit:contain;">
  </span>

Do this in every .html file's header (and footer, where the mark repeats).
Recommended logo file: images/logo.png, square, at least 200 x 200 px,
transparent background.

Keep total image file sizes reasonable (ideally under 300KB each after
compressing) so the site loads quickly — tools like squoosh.app or
tinypng.com are free and easy to use for this.
