// WA Popup Form Logic
let currentProduct = { name: '', price: '', emoji: '' };

function openWaPopup(name, price, emoji, variants) {
  currentProduct = { name, price, emoji };
  document.getElementById('popupProductName').textContent = name;
  document.getElementById('popupProductPrice').textContent = price;
  document.getElementById('popupEmoji').textContent = emoji;

  // Handle variants
  const variantGroup = document.getElementById('variantGroup');
  const variantSelect = document.getElementById('waVariant');

  if (variants && variants.length > 0) {
    variantGroup.style.display = 'block';
    variantSelect.innerHTML = '<option value="">Pilih Ukuran</option>';
    variants.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v; opt.textContent = v;
      variantSelect.appendChild(opt);
    });
  } else {
    variantGroup.style.display = 'none';
  }

  document.getElementById('waPopup').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWaPopup() {
  document.getElementById('waPopup').classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('waForm').reset();
}

function sendToWA(e) {
  e.preventDefault();

  const name = document.getElementById('waName').value;
  const qty = document.getElementById('waQty').value;
  const variant = document.getElementById('waVariant').value;
  const note = document.getElementById('waNote').value;

  const waNumber = document.querySelector('.wa-popup-overlay').dataset.waNumber || '628xxxxxxxxxx';

  let message = `Halo Ola Store! 👋%0A%0A`;
  message += `Saya *${name}* ingin memesan:%0A`;
  message += `📦 *${currentProduct.name}*%0A`;
  message += `💰 ${currentProduct.price}%0A`;
  message += `🔢 Jumlah: ${qty}%0A`;
  if (variant) message += `📏 Ukuran: ${variant}%0A`;
  if (note) message += `📝 Catatan: ${note}%0A`;
  message += `%0ATerima kasih! 🙏`;

  window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
  closeWaPopup();
}

// Close on overlay click
document.getElementById('waPopup').addEventListener('click', function(e) {
  if (e.target === this) closeWaPopup();
});

// Attach to buttons after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.wa-popup-trigger').forEach(btn => {
    btn.addEventListener('click', function() {
      const variants = JSON.parse(this.dataset.variants || '[]');
      openWaPopup(
        this.dataset.name,
        this.dataset.price,
        this.dataset.emoji,
        variants
      );
    });
  });
});
