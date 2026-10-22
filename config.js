/* =========================================================================
   MAHA RPS LADDERS PVT LTD — SITE CONFIGURATION
   -------------------------------------------------------------------------
   Edit the values below to update contact details, WhatsApp number, map
   and social/review links SITE-WIDE. You do not need to touch any other
   file to change these — every page reads from this one.
   ========================================================================= */

const SITE_CONFIG = {
  companyName: "Maha RPS Ladders Pvt Ltd",
  tagline: "Precision Aluminium, Built to Last",

  // Phone number shown + used for click-to-call. Use full international format.
  phoneDisplay: "+91 98765 43210",
  phoneDial: "+919876543210",

  // WhatsApp number in international format, NO + sign, NO spaces.
  whatsappNumber: "919876543210",

  email: "info@maharpsladders.com",

  address: {
    line1: "Plot No. 12, Industrial Estate",
    line2: "Coimbatore, Tamil Nadu, India",
    pincode: "641001"
  },

  // Google Maps embed — replace with your own by going to Google Maps,
  // searching your business, Share > Embed a map, and copying the src URL.
  mapEmbedSrc: "https://www.google.com/maps?q=Coimbatore+Tamil+Nadu&output=embed",

  // Google review link — once your Google Business Profile is live, replace
  // this with your real "Write a review" link (found in Google Business Profile).
  googleReviewLink: "https://www.google.com/search?q=Maha+RPS+Ladders+Pvt+Ltd+reviews",

  businessHours: [
    { day: "Monday – Saturday", hours: "9:00 AM – 7:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ],

  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#"
  }
};

/* Builds a WhatsApp click-to-chat link with a pre-filled message.
   Used across the site for every "Enquire on WhatsApp" button. */
function waLink(message) {
  const base = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}