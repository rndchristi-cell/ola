export type Language = 'id' | 'en';

export const translations = {
  id: {
    htmlLang: 'id',
    nav: { home: 'Beranda', catalog: 'Katalog', gallery: 'Galeri', about: 'Tentang', blog: 'Blog', testimonials: 'Testimoni', location: 'Lokasi', contact: 'Hubungi Kami' },
    hero: { title: 'Toko Lurik Solo & Busana Jawa', highlight: 'Asli, Sejak 2017', description: 'Toko lurik Solo terpercaya — koleksi lurik Jawa tradisional dan busana khas “Surjane Ola”, berkualitas dari pengrajin lokal Kota Solo. Sentuhan warisan, gaya masa kini.', catalog: 'Lihat Katalog →', chat: 'Chat WA' },
    stats: { reviews: 'Ulasan Google', rating: 'Rating Bintang', established: 'Tahun Berdiri', local: 'Produk Lokal' },
    products: { title: 'Katalog Produk', subtitle: 'Pilihan lurik dan busana Jawa terbaik dari pengrajin Kota Solo', note: 'Katalog ini hanya sebagian kecil dari koleksi produk kami. Jika Anda ingin membeli produk lainnya, silakan hubungi kami melalui WhatsApp.', readMore: 'Baca selengkapnya', detail: 'Lihat detail produk', order: 'Pesan', orderWhatsApp: 'Pesan via WhatsApp', chooseSize: 'Pilih Ukuran', send: 'Kirim ke WhatsApp', notice: 'Harga belum termasuk ongkir. Detail produk, ketersediaan, dan informasi lain terkait pesanan akan kami informasikan setelah pesanan diterima.' },
    gallery: { title: 'Galeri', subtitle: 'Koleksi lurik kami dalam gambar' },
    testimonials: { title: 'Kata Pelanggan Kami', subtitle: 'Kepercayaan dari pelanggan yang sudah berbelanja lurik Solo asli di toko kami', google: 'dari ulasan Google', viewAll: 'Lihat semua ulasan di Google →' },
    blog: { title: 'Blog', all: 'Lihat semua artikel →', readMore: 'Baca selengkapnya' },
    about: { title: 'Toko Lurik dan Busana Jawa dari Pasar Klewer Solo', p1: 'hadir di', p2: 'sejak tahun', p3: 'menyediakan koleksi lurik dan busana Jawa berkualitas tinggi dari pengrajin lokal terbaik.', p4: 'Setiap produk kami adalah hasil tangan pengrajin yang melestarikan warisan budaya Jawa. Kami percaya bahwa lurik bukan sekadar kain, tetapi cerita dan identitas. Datang langsung ke toko kami atau pesan online untuk membeli produk pilihan Anda. Kami melayani pesanan satuan dan seragam.', handmade: '100% Handmade', local: 'Produk Lokal', sustainable: 'Sustainable', quality: 'Premium Quality' },
    location: { title: 'Kunjungi Kami', subtitle: 'Datang langsung ke toko kami di Pasar Klewer Solo' },
    footer: { description: 'Toko lurik & busana Jawa asli dari Pasar Klewer Solo. Melestarikan warisan budaya melalui fashion berkualitas.', menu: 'Menu', social: 'Sosial Media', contact: 'Kontak', maps: 'Google Maps', made: 'Dibuat dengan ❤️ di Solo.' },
    language: 'EN'
  },
  en: {
    htmlLang: 'en',
    nav: { home: 'Home', catalog: 'Catalog', gallery: 'Gallery', about: 'About', blog: 'Blog', testimonials: 'Reviews', location: 'Location', contact: 'Contact Us' },
    hero: { title: 'Solo Lurik & Javanese Apparel', highlight: 'Authentic Since 2017', description: 'A trusted Solo lurik store offering traditional Javanese lurik fabrics and signature “Surjane Ola” apparel, crafted by local artisans. Heritage style for today.', catalog: 'View Catalog →', chat: 'Chat on WhatsApp' },
    stats: { reviews: 'Google Reviews', rating: 'Star Rating', established: 'Established', local: 'Local Products' },
    products: { title: 'Product Catalog', subtitle: 'Selected lurik fabrics and Javanese apparel from Solo artisans', note: 'This catalog shows only part of our collection. Contact us on WhatsApp to inquire about more products.', readMore: 'Read more', detail: 'View product details', order: 'Order', orderWhatsApp: 'Order via WhatsApp', chooseSize: 'Choose Size', send: 'Send to WhatsApp', notice: 'Shipping is not included. Product details, availability, and other order information will be confirmed after we receive your request.' },
    gallery: { title: 'Gallery', subtitle: 'Our lurik collection in pictures' },
    testimonials: { title: 'What Our Customers Say', subtitle: 'Trusted by customers who shop for authentic Solo lurik', google: 'from Google reviews', viewAll: 'View all Google reviews →' },
    blog: { title: 'Blog', all: 'View all articles →', readMore: 'Read more' },
    about: { title: 'Lurik and Javanese Apparel from Pasar Klewer Solo', p1: 'has been located at', p2: 'since', p3: 'offering high-quality lurik fabrics and Javanese apparel from the finest local artisans.', p4: 'Every product is handcrafted by artisans who preserve Javanese cultural heritage. We believe lurik is more than fabric—it carries stories and identity. Visit our store or order online for selected products. We serve individual and uniform orders.', handmade: '100% Handmade', local: 'Local Products', sustainable: 'Sustainable', quality: 'Premium Quality' },
    location: { title: 'Visit Us', subtitle: 'Visit our store at Pasar Klewer Solo' },
    footer: { description: 'Authentic lurik and Javanese apparel from Pasar Klewer Solo. Preserving cultural heritage through quality fashion.', menu: 'Menu', social: 'Social Media', contact: 'Contact', maps: 'Google Maps', made: 'Made with ❤️ in Solo.' },
    language: 'ID'
  }
} as const;

export const getTranslations = (lang: Language = 'id') => translations[lang];
