# Febry Nia — Personal Portfolio

Portfolio pribadi untuk mahasiswa Informatika / calon Software Developer.
Dibangun dengan **React + Vite + Tailwind CSS + Framer Motion + Lucide React**.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Untuk build versi produksi:

```bash
npm run build
npm run preview
```

## Struktur project

```
src/
├── components/
│   ├── Navbar.jsx        # navbar sticky + active section + mobile menu
│   ├── Hero.jsx           # hero section (foto + intro + CTA)
│   ├── About.jsx          # tentang saya + statistik
│   ├── Skills.jsx         # kartu skill per kategori
│   ├── Projects.jsx       # featured projects
│   ├── Contact.jsx        # ajakan kontak + link sosial
│   ├── Footer.jsx         # footer minimalis
│   ├── Loader.jsx         # loading screen singkat saat pertama buka
│   ├── ScrollProgress.jsx # progress bar scroll di bagian atas
│   └── BackToTop.jsx      # tombol kembali ke atas
├── hooks/
│   └── useActiveSection.js # deteksi section aktif untuk navbar
├── assets/images/          # taruh foto & thumbnail project di sini
├── App.jsx
├── main.jsx
└── index.css
```

## Yang perlu kamu ganti

1. **Foto profil** — lihat `src/assets/images/README.txt` dan komentar
   `// TODO` di `src/components/Hero.jsx`.
2. **Thumbnail project** — sama, lihat komentar `// TODO` di
   `src/components/Projects.jsx`.
3. **Link project** — ganti `demoUrl` dan `githubUrl` (masih `"#"`)
   di array `PROJECTS` dalam `src/components/Projects.jsx`.
4. **Link sosial & email** — ganti URL GitHub/LinkedIn/Instagram dan
   alamat email placeholder di `Hero.jsx`, `Contact.jsx`, dan `Footer.jsx`.

## Design tokens

Warna, font, dan efek glow diatur terpusat di `tailwind.config.js`
(kategori `colors`, `fontFamily`, `boxShadow`) dan `src/index.css`
(kelas reusable seperti `.btn-primary`, `.badge`, `.section-tag`).
Ubah di situ kalau mau menyesuaikan tema.
