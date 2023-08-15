# Genel Bilgilendirme ![Paketteki İkon Sayısı](https://img.shields.io/badge/Paketteki%20%C4%B0kon%20Say%C4%B1s%C4%B1-112-blue?style=flat)

Scicon Brands Paketi'ni kullanarak projelerinize; markaların logolarını, araçların logolarını, yazılım dillerinin simgelerini, kurum ve kuruluşların sembollerini ikon olarak dahil edebilirsiniz. Projelerinizi tasarımsal ve görsel açıdan daha iyi hale getirmek için ikonlar oldukça iyi bir seçimdir. Scicon ikon paketi, düzenli olarak ekleme ve güncelleme alan bir ikon paketidir. Scicon Brands Paketi ise Scicon Paketi'nin içerisinde ayrı bir kategoridir. Dilerseniz doğrudan bütün paketi indirebilir dilerseniz de paketin içindeki ikon kategorilerini ayrı ayrı kurabilirsiniz. İstediğiniz zaman ana pakete geçebilirsiniz ve bu geçişlerde herhangi bir başka değişiklik yapmanız gerekmez.

# Kurulum ve Kullanım

İkon paketini kullanmanın önerilen iki yolu vardır: CDN aracılığı ile dahil etmek ve npm aracılığı ile kurmak. Aşağıda bu iki yöntemi nasıl kullanabileceğiniz anlatılmıştır:

## CDN Aracılığıyla Dahil Etmek ![CDN Desteği](https://img.shields.io/badge/CDN%20Deste%C4%9Fi-Aktif-green?style=flat)

Paketi, CDN aracılığı ile kullanmak için jsDelivr kullanmanız gerekmektedir. Aşağıdaki CDN bağlantısını kullanabilirsiniz:

`https://cdn.jsdelivr.net/gh/sci-hook/scicon-brands@latest/style.css`

Paketi, projenize doğrudan dahil etmek için aşağıdaki kodu kullanabilirsiniz:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sci-hook/scicon-brands@latest/style.css">`

Yukarıdaki kodu, ikon paketini kullanacağınız dosyanın `<head>` etiketine ekleyebilirsiniz.

## npm Aracılığıyla Dahil Etmek ![npm Desteği](https://img.shields.io/badge/npm%20Deste%C4%9Fi-Aktif-green?style=flat)

Paketi, npm aracılığı ile kurmak için aşağıdaki kodu terminalde çalıştırmalısınız:

`$ npm i scicon-brands`

Ardından SCSS dosyanızın içerisine aşağıdaki şekilde ekleyebilirsiniz:

`@import 'node_modules/scicon-brands';`

# Dokümantasyon ve Yardım

Scicon Paketi için daha detaylı dokümantasyon mevcuttur. Kurulum hakkında detaylı bilgilendirme almak, değişiklikleri takip etmek ve sorularınıza cevap almak için lütfen Scicon Paketi'nin GitHub Wiki sayfasını inceleyiniz. Wiki sayfasında bulamadığınız cevapları GitHub aracılığı ile issue olarak sorabilirsiniz. Sci-Hook Scion Geliştirme Ekibi size yardımcı olacaktır.

[Scicon GitHub Wiki Sayfası](https://github.com/Sci-Hook/scicon/wiki)

[Scicon Github Issues Sayfası](https://github.com/Sci-Hook/scicon/issues)

# Sürümlendirme ![Stabil Sürüm](https://img.shields.io/badge/Stabil%20S%C3%BCr%C3%BCm-1.0.3-orange?style=flat) ![Son Sürüm](https://img.shields.io/badge/Son%20S%C3%BCr%C3%BCm-1.0.3-orange?style=flat)

Scicon Brands Paketi'ni sürümlendirirken Semantic Sürümlendirmesi ile kendi sürümlendirme sistemimizi birleştirip kullanıyoruz. İkonları şu şekilde sürümlendiriyoruz:

`<ana-sürüm (major)>.<ikon.güncellemesi (minor)>.<yama (patch)>`

Ana sürüm, paketin üst sürümüdür ve büyük çaplı değişiklikleri kapsamaktadır. Bu büyük çaplı değişiklikler, yazılımsal değişiklikler ve yeni ikon stilleri gibi önemli güncellemeleri kapsamaktadır. Scicon Paketi'nin ana sürümünü daima güncel tutmanızı öneririz.

İkon güncellemesi; yeni eklenen, güncellenen ve çıkarılan ikonları kapsamaktadır. Her bir ikon değişikliği için sürüm bir kere artırılır. Örneğin; sürümü 2.0.1 olan paketin yeni sürümünde 5 yeni ikon eklendiyse 3 ikon çıkarıldıysa yeni sürüm, 2.8.1 olacaktır.

Yamalar; yazılımsal hata düzeltmelerini, yazım hatalarını ve küçük çaplı ikon düzeltmelerini kapsamaktadır. Yamalar, önemli değişiklikleri kapsamamaktadır. Ancak yine de paketin en son sürümünün kullanılması paketten en iyi verimin alınması için önemlidir.

# İkon Talebi, Hata Raporlama, Öneriler ve Katkı Sağlama

Yeni ikon talebinde bulunmak, hataları raporlamak, önerilerinizi sunmak ve paketin gelişmesine katkı sağlamak için GitHub'un issues bölümünü kullanabilirsiniz. Issues bölümü sizi yapmanız gerekenler konusunda yönlendirecektir. Paketin gelişmesine katkı sağlamak istediğiniz için teşekkür ederiz.

[Scicon Github Issues Sayfası](https://github.com/Sci-Hook/scicon/issues)

# Katkı Sağlayanlar

Paketteki ikonların tasarımı ve yazılımsal işleri [Çınar Civan](https://github.com/cinarcivan) tarafından yapılmaktadır. Yazılımsal teknik işler ise [Emirhan Gerçeker](https://github.com/lim10tech) tarafından sürdürülmektedir.

# Lisans

Paketteki bütün ikonlar, Creative Commons Attribution-ShareAlike 4.0 International Public (CC BY-SA 4.0) Lisansı altında sunulmaktadır.

Paketin Scicon fontu, Open Font License (OFL) lisansı altında sunulmaktadır.

Paketin kaynak kodları MIT, Lisansı altında sunulmaktadır.

Yasal metni [buradan](https://github.com/Sci-Hook/scicon-brands/blob/main/LICENSE) görüntüleyebilirsiniz.