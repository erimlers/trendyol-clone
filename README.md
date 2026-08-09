# Trendyol Clone 🛍️

Modern web teknolojileri kullanılarak geliştirilmiş, popüler e-ticaret platformu Trendyol'un kullanıcı arayüzü (UI) klonudur. Proje, hem mobil hem de masaüstü cihazlar için özel olarak tasarlanmış responsive (duyarlı) bir yapıya sahiptir.

## 🚀 Teknolojiler
- **Next.js (App Router)** - SSR ve Routing altyapısı
- **React** - Kullanıcı arayüzü bileşenleri
- **Tailwind CSS** - Hızlı ve modern stillendirme
- **React Icons** - Arayüz ikonları

## ✨ Özellikler
- **Cihaza Özel Render (Device Detection):** Kullanıcının cihazına (Mobil / Masaüstü) göre CSS Breakpoint'leri yerine tamamen farklı ve özelleştirilmiş bileşenler (`DesktopProductDetail`, `MobileProductDetail` vb.) sunulur.
- **Modüler Ürün Detay Sayfası:** Mobil cihazlar için dikey kaydırılabilir esnek yapı, masaüstü cihazlar için bozulmayan ve dar ekranlarda yatay scroll çıkan 3 sütunlu yapı.
- **Dinamik Header:** Bulunulan sayfaya göre (`usePathname`) değişen koşullu mobil navigasyon çubuğu.
- **Kapsamlı Filtreleme Arayüzü:** Masaüstünde yan panel, mobilde ise aşağıdan açılır (modal) olarak tasarlanmış filtreleme arayüzü (görsel taslak).
- **Birebir Tasarım:** Trendyol'un orijinal tasarımına sadık kalınarak oluşturulmuş grid yapıları, kampanyalı rozetler ve satıcı panelleri.

## 📦 Kurulum ve Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev
```

Sunucu başladıktan sonra tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek projeyi görüntüleyebilirsiniz.

---
*Not: Bu proje Front-End yeteneklerini geliştirmek amacıyla yapılmış bir UI klon çalışmasıdır. Gerçek bir veritabanı veya ödeme sistemi barındırmaz.*
