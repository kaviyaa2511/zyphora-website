/* ── WHATSAPP CONTACT FORM ── */
(function(){
  // Replace with your WhatsApp Business number, country code first, digits only.
  const WHATSAPP_NUMBER = "919876543210";

  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.querySelector('#cf-name').value.trim();
    const email = this.querySelector('#cf-email').value.trim();
    const phone = this.querySelector('#cf-phone').value.trim();
    const message = this.querySelector('#cf-message').value.trim();

    let text = `Hello Zyphora, I'd like to get in touch.\n\nName: ${name}`;
    if (email)   text += `\nEmail: ${email}`;
    if (phone)   text += `\nPhone: ${phone}`;
    if (message) text += `\nMessage: ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });
})();

