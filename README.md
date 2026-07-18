# 🏪 Ola Store — Template Website Statis

Template website statis untuk Ola Store (Lurik & Busana Jawa) menggunakan Astro + Cloudflare Pages.

## 📁 Struktur Folder

```
ola-store/
├── public/
│   ├── images/           ← Taruh foto produk & logo di sini
│   │   ├── hero.jpg      ← Foto hero section
│   │   ├── about.jpg     ← Foto tentang/toko
│   │   ├── produk-1.jpg  ← Foto produk 1
│   │   ├── produk-2.jpg  ← Foto produk 2
│   │   └── ...           ← dst
│   └── scripts/
│       └── wa-popup.js   ← Logic popup WA (jangan diubah)
├── src/
│   ├── components/       ← Komponen halaman (jangan diubah)
│   ├── layouts/          ← Layout utama (jangan diubah)
│   ├── pages/            ← Halaman (jangan diubah)
│   ├── styles/           ← CSS (jangan diubah)
│   └── data/
│       ├── products.json ← 📝 EDIT INI: daftar produk
│       └── site.json     ← 📝 EDIT INI: info toko
├── astro.config.mjs
├── package.json
└── README.md
```

## ✏️ Cara Edit (Cuma 2 File)

### 1. `src/data/site.json` — Info Toko

```json
{
  "siteName": "Ola Store",
  "tagline": "Lurik & Busana Jawa Asli",
  "location": "Pasar Klewer Solo Lt.4 Blok C24 & D24-25",
  "city": "Surakarta, Jawa Tengah",
  "waNumber": "6281234567890",     ← GANTI nomor WA
  "instagram": "@ola.lurik",
  "facebook": "olastoresolo",
  "twitter": "olastoresolo",
  "email": "hello@ecclesiola.com",
  "googleMapsUrl": "https://maps.google.com/...",
  "established": "2010",
  "reviews": "225+",
  "rating": "4.9"
}
```

### 2. `src/data/products.json` — Daftar Produk

```json
{
  "products": [
    {
      "id": 1,
      "name": "Lurik Klasik",
      "price": 185000,
      "desc": "Kain lurik tradisional motif garis",
      "badge": "BEST SELLER",
      "emoji": "👘",
      "hasVariants": false
    },
    {
      "id": 2,
      "name": "Blus Lurik Modern",
      "price": 275000,
      "desc": "Blus dengan sentuhan lurik",
      "badge": "",
      "emoji": "🥻",
      "hasVariants": true,
      "variants": ["S", "M", "L", "XL"]   ← Tambah ukuran
    }
  ]
}
```

**Untuk tambah produk baru:** Copy salah satu blok `{}`, paste di bawah, ganti isinya. Jangan lupa `id` unik!

### 3. Foto Produk

Taruh foto di folder `public/images/` dengan nama:
- `hero.jpg` — Foto besar di atas
- `about.jpg` — Foto toko/tentang
- `produk-1.jpg`, `produk-2.jpg`, ... — Foto tiap produk (sesuai id)

Kalau belum ada foto, otomatis pakai emoji placeholder.

## 🚀 Deploy ke Cloudflare Pages

### Step 1: Upload ke GitHub (di HP/browser)
1. Buka [github.com](https://github.com) → Login
2. Klik "+" → "New repository"
3. Nama: `ola-store` → Klik "Create repository"
4. Klik "uploading an existing file"
5. Drag & drop SEMUA file/folder dari project ini
6. Klik "Commit changes"

### Step 2: Connect ke Cloudflare Pages
1. Buka [dash.cloudflare.com](https://dash.cloudflare.com) → Login
2. Klik "Pages" di sidebar kiri
3. Klik "Connect to Git"
4. Pilih "GitHub" → Authorize
5. Pilih repo `ola-store`
6. Framework preset: **Astro**
7. Klik "Save and Deploy"
8. Tunggu 1-2 menit → Website live! 🎉

### Step 3: Custom Domain
1. Di Cloudflare Pages project → tab "Custom domains"
2. Klik "Set up a custom domain"
3. Masukkan: `ecclesiola.com`
4. Ikuti instruksi DNS (biasanya auto kalau domain udah di Cloudflare)

## 🔄 Update Website

Tiap kali edit file di GitHub:
1. Buka repo GitHub
2. Klik file yang mau diedit
3. Klik icon pensil (✏️)
4. Edit → Scroll bawah → "Commit changes"
5. Cloudflare Pages auto deploy dalam 1-2 menit!

## 🛠️ Fitur

- ✅ Grid produk 2 kolom (HP) / 3 kolom (desktop)
- ✅ Popup form WA sebelum redirect (nama, jumlah, ukuran, catatan)
- ✅ Edit produk dari JSON (tanpa coding)
- ✅ SEO-friendly (meta tags, semantic HTML)
- ✅ Responsive (HP, tablet, desktop)
- ✅ Fast loading (static HTML, no server)
- ✅ Siap Turnstile (tinggal tambah script)

## 📱 Preview di HP

Buka link `https://[nama-repo].pages.dev` di browser HP setelah deploy.

---

Dibuat dengan ❤️ untuk Ola Store — Pasar Klewer Solo
