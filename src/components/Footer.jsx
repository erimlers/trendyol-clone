"use client"
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
function Footer() {
  const params = useParams();
  const popularPages = [
  "Mobilya Takımı", "Yatak Odası Koltuğu", "Lake Mobilya", "Mutfak Mobilya", 
  "Modern Modalife Mobilya", "Beyaz Modalife Mobilya", "302 X 205 Mobilya", 
  "Aeka", "3A Mobilya", "Altın Mobilya", "A-R Mobilya", "KZNMOB HOME Mobilya", 
  "KZNMOB HOME Genç Odası Takımı", "Global Mobilya", "Caddeyıldız Mobilya", 
  "Remaks Mobilya", "Krem Mobilya", "BBB Mobilya", "Garaj Home Mobilya", 
  "Hira Mobilya", "WOODLIFE", "Midoser Mobilya", "Taç Mobilya", "Doğan Mobilya", 
  "Modalife Mobilya", "Trendyol Romanian", "Trendyol Bulgaria", "Elbise", 
  "Samsung Cep Telefonu", "Hesaplama Araçları",

  "Masif Mobilya", "Krem Yatak Odası Mobilyaları", "Ceviz Rengi Mobilya", 
  "Beyaz Mobilya", "Boyuna Mobilya", "Ahşap Mobilya", "Gri Mobilya", "Alya Mobilya", 
  "UYSAL Mobilya", "Erva Mobilya", "IRMAK MOBİLYA", "Bofigo Mobilya", "LADİN Mobilya", 
  "Mila Mobilya", "Çetinler Mobilya", "End Mobilya", "KuzeyLife Mobilya", 
  "MUJGAN Mobilya", "Ev Ve Mobilya", "Lider Mobilya", "İpek Mobilya", "ERİZA Mobilya", 
  "Azra Mobilya", "AYMOBSAN Mobilya", "Mobilyabazari Yatak Odası Takımı", 
  "Trendyol Greece", "Trendyol Serbia", "Etek", "Apple Cep Telefonu", "Erkek T-Shirt",

  "Bella Mobilya", "Yatak Odası Dolapları", "Bohem Mobilya", "Metal Mobilya", 
  "Bej Mobilya", "HDPE Mobilya", "Yurupa Mobilya", "Dolaplar", "Setay Mobilya", 
  "Generic Mobilya", "Mobilyabazari Koltuk Takımı", "Aden Mobilya", "Konfor Mobilya", 
  "Ayder Mobilya", "Remaks", "Vadi Mobilya", "Zirve Mobilya", 
  "KZNMOB HOME Yatak Odası", "Bofigo Ev Ve Mobilya", "TREND Mobilya", "Dnz Mobilya", 
  "Avmpark Mobilya", "Royal Mobilya", "Evim Mobilya", "Shark Mobilya", 
  "Trendyol Saudi Arabia", "Cep Telefonu", "Ayakkabı", "Macbook", "Makyaj"
];
  return (
    
    <footer className='mt-10'>
      {
        !params.id && 
          <div className='w-full max-w-[1450px] mx-auto px-10 lg:px-5 min-w-0 mb-10 text-gray-700 gap-1'>
      <div>
        <div>
         <h2 className='text-2xl font-semibold'>Sağlam Yapılı ve Kullanışlı Mobilya Modelleri Trendyol'da!</h2>
         <p className='text-[18.2px] text-justify leading-[1.35]'>Sağlam mobilyalar, uzun yıllar boyunca kullanıma uygun olan dayanıklı malzemelerden üretilir. Ürünlerin malzeme kalitesi; üretim süreci ve tasarım özellikleri açısından farklılık gösterebilir. İyi seçenekler genellikle sağlam ahşap çerçeve, kaliteli menteşeler, vidalar ve diğer bağlantı elemanları ile birlikte gelir. Deri gibi kaliteli malzemelerden imal edilen pek çok seçenek vardır. Farklı modeller, kullanım amacına uygun olarak tasarlanır. Katlanabilir özelliğe sahip olan yatak ya da baza gibi eşyalar, müşterilere çeşitli özellikler sunarak kaliteli bir deneyim kazandırır. Parçalar; kalitesi, işlevselliği, kolay kullanımı, depolama kapasitesi gibi özellikleri ile öne çıkar. Aynı zamanda yaşam alanlarında verimliliği artırarak zaman kazandırır. Kitaplık hem depolama hem de dekoratif amaçlar için kullanışlı parçadır. Dergilik ve kitap dolapları genellikle sanat eserlerini, çiçekleri veya diğer süs eşyalarını saklamak için mükemmel bir yerdir. Çekyat, çift fonksiyonlu bir mobilyadır. Küçük evlerde ya da misafir odalarında sağlıklı seçimdir. Mutfak adası, depolama ya da hazırlık alanı sağlayan kullanışlı bir parçadır. Mutfağa uygun şekilde tasarlanan adalar; yemek pişirme, hazırlama, yemek servisi veya depolama için çok amaçlı tercih edilebilir. Bu tarz eşyalar, yaşam alanlarında verimliliği artırarak uzun süre dayanır. Malzeme kalitesi; üretim süreci, tasarım özellikleri, sağlamlığı ve kullanışlılığı açısından önemlidir. Her alanda etkinlik gösterebilen parçalar evlerde yer kazandırarak insanların yaşam kalitesini artırır. Tasarım özellikleri ise kullanım amaçlarına uygunluk açısından da önemlidir. Ürünlerin kullanım amacı, tasarımını, boyutunu veya şeklini belirler. Kanepe, oturma odasında rahat bir alan sağlamak için tasarlanır. Farklı genişlikleri sayesinde her ortama uyum sağlayabilir. Aynı zamanda salonlarda yer alması amacıyla tasarlanan seçenekler de mevcuttur. Mobilyaların sağlamlığı; uzun süre dayanması, kullanım sırasında hasar görmemesi açısından önemlidir. Ahşap ürünlerin dayanıklılığı; çerçevesinin kalitesine, ağaç türüne, üretim sürecine ve kullanılan koruyucu kaplamalara bağlıdır. Vidaları, menteşeleri, diğer bağlantı elemanları da eşyaların sağlamlığı açısından önemlidir. Sağlam ve kullanışlı mobilyalar, insanların yaşam alanlarını verimli hale getirerek uzun yıllar boyunca tercih edilebilir. Trendyol’dan çeşitli mobilya tasarımlarına kolayca ulaşabilirsiniz.</p>
       </div>

        <div>
         <h2 className='text-lg font-semibold'>Etkileyici Mobilya Çeşitleri</h2>
         <p className='text-[18.5px] leading-[1.35] text-justify'>
          <Image className='float-left' src='https://cdn.dsmcdn.com/mrktng/seo/23may3/mobilya-1.jpg' alt='Etkileyici Mobilya Çeşitleri' width={300} height={300} />
          Mobilya; yaşam alanlarında yer alarak oturma, yatma, yeme, depolama gibi amaçlar için tasarlanan eşyalardır. Mobilya çeşitleri tercih edilme amacına göre değişiklik gösterir. Oturma grupları genellikle oturma odalarında kullanılır. Koltuk ya da berjer gibi parçalardan oluşan oturma grupları, farklı tarz veya boyutlarda üretilir. Rahat oturma deneyimi sağlayarak evin dekorasyonuna estetik bir dokunuş katar. Yatak odası takımları da genellikle birbirinden farklı parçalardan oluşur. Kişisel eşyaların depolanması veya uyku için kullanılan alternatifler bu takımlarda yer alır. Bu seçenekler yatak odasının işlevselliğini artırarak odanın dekorasyonuna uygun görünüm sağlar. Yemek odası eşyaları; yemek masası, sandalye, vitrin gibi parçalardan oluşur. Yemek yemek ya da misafir ağırlamak için tercih edilebilir. Ofis tasarımları ise masa, sandalye, dolap gibi parçalardan oluşur. Çalışanların iş verimliliğine katkı sağlayarak ofisin profesyonel görünüm kazanmasına imkan tanır. Depolama eşyaları, evin düzenini sağlayarak eşyaların düzenli şekilde saklanmasına olanak tanır. Bahçe için imal edilen seçenekler açık alanlarda kullanıma uygun olan masa, sandalye, şezlong gibi parçalardan oluşur. Müşterilere açık hava alanlarında dinlenmek, sosyalleşmek için çeşitli fırsatlar sunar. Çocuk odası eşyaları, miniklerin uyku, oyun, eğitim ihtiyaçlarını karşılamak için tercih edilir. Çocukların güvenliği ve rahatlığına uygun şekilde tasarlanır. Ürün çeşitleri, kullanım amacına göre farklı boyut, malzeme veya tarz seçenekleri sunar. Ev dekorasyonunda eşyaların seçimi, evin genel tarzını yansıtacak, fonksiyonelliği artıracak şekilde yapılabilir. Ayrıca kaliteli malzemelerden imal edilerek sağlam şekilde üretilmesi de önem arz eder. Sağlam yapılı ve konforlu parçalar uzun ömürlü olarak kullanım deneyimini iyileştirir. Ürünlerin yapımında kullanılan malzemeler de kalitesini belirler. Ahşap, metal, cam, kumaş, deri gibi malzemeler; mobilyaların üretiminde sıkça tercih edilir. Bu malzemeler mobilya kulpları gibi detaylarda da ön plana çıkar. Ahşap seçenekler, doğal bir görünüme sahip olarak uzun ömürlüdür. Metal seçenekler ise modern görünüm sağlayan dayanıklı parçalardır. Cam tasarımlar, şık görünüm sunar. Ayrıca hafifliği sayesinde kolay taşınabilir. Kumaş ya da deri seçenekler; rahat bir oturma deneyimi sağlayarak dekorasyona şıklık katar. Ürünlerin tarzları da evin dekorasyonu için önemlidir. Minimalist, klasik, modern, rustik, sanatsal gibi farklı seçenekler sunar. Minimal seçenekler sade bir tasarıma sahip olarak evin tarzını yansıtır. Klasik seçenekler daha geleneksel tarza sahiptir. Evlerinizde yaşam kalitenizi yükselten, dekorasyonunuzun önemli bir parçası olan eşyalardır. Ürün seçiminde işlevselliğin yanı sıra malzeme kalitesi ve tarz da önemlidir. Sağlam yapılı kullanışlı eşyalar, evlerinizde uzun ömürlü bir kullanım deneyimi sağlar. Ev, ofis, bahçe, otel, restoran mobilyaları gibi farklı alanlar için farklı tasarımlar mevcuttur. Mobilya seçiminde işlevselliğin yanı sıra kullanım alanı da müşterilere ürün seçiminde katkı sağlar. Trendyol’un geniş ürün yelpazesi sayesinde ihtiyacınız olan eşyalara sahip olabilirsiniz.
         </p>
        </div>

        <div>
         <h2 className='text-lg font-semibold'>Mobilya Malzemeleri ve Üretim Teknikleri</h2>
         <p className='text-[18.5px] leading-[1.35] text-justify'>
          <Image className='float-left' src='https://cdn.dsmcdn.com/mrktng/seo/23may3/mobilya-modelleri-2.jpg' alt='Etkileyici Mobilya Çeşitleri' width={300} height={300} />
          Mobilya, evlerin veya işyerlerinin görünümünü tamamlayan en önemli parçalardan biridir. Gerek işlevsel gerekse estetik olarak önemli bir yere sahip olan ürünlerin üretiminde birçok farklı malzeme yer alır. Ayrıca farklı tekniklerle üretilebilen ürünlerin dayanıklılığı, konforu, estetiği; tercih edilen malzemelere ve üretim tekniklerine bağlıdır. Eşyaların üretiminde kullanılan malzemeler; dayanıklılığı, estetiği, fiyatı gibi birçok faktörü etkiler. Ahşap tasarımlar, doğal güzelliği, dayanıklılığı sayesinde oldukça popülerdir. Meşe, ceviz, kayın, çam gibi farklı türlerde üretilebilir. Orta yoğunlukta lif levhası olarak bilinen MDF, ahşap tozları veya reçine kullanılarak üretilen bir malzemedir. MDF; düzgün yüzeyi, düşük maliyeti, boyama kolaylığı ile sıkça kullanılır. Lamine, ahşap yüzeylerin üzerine yapıştırılan kaplama malzemesidir. Lamine kaplama hem farklı desen hem de çeşitli renk seçenekleri sunar. Metal parçalar, ürünlere estetiklik katarak modern ya da endüstriyel görünüm oluşturur. Çelik, alüminyum, demir gibi farklı türlerde metal yer alabilir. Cam parçalar özellikle sehpalarda ön plana çıkarak şeffaf, modern bir görünüm sunar. Genellikle metal veya ahşap çerçevelerle desteklenir. Komodin ve TV sehpa modelleri de şık görüntü sağladığından sıkça tercih edilir. Plastik ürünler hafif ve dayanıklıdır. Farklı renk veya şekillerde üretilen plastik tasarımlar genellikle dış mekanlarda bulunur. Mobilya üretim teknikleri; ürünlerin kalitesini, dayanıklılığını ya da estetiğini belirler. Bazı parçalar geleneksel el işçiliği teknikleriyle üretilir. El işçiliği, ürünlerin benzersizliğini artırır. Bazı ürünler, birkaç parçanın bir araya getirilmesiyle oluşur. Modellerin montajı genellikle kolaydır. Kalıp, eşya parçalarının istenen şekil veya boyutlarda kesilmesine yardımcı olur. Bunun yanı sıra seri üretim için uygun bir yöntemdir. Eşya yüzeylerine kaplama malzemeleri uygulanarak farklı renkler, desenler elde edilebilir. Döküm, mobilyaların metal ayaklarının veya dekoratif öğelerinin üretimi için kullanılır. Aynı zamanda özel tasarım alternatiflerinin üretimi için uygundur. Mobilya üretiminde yer alan malzemeler ya da teknikler, ürünün kalitesini veya fiyatını etkiler. Ürün seçerken, malzemesini ya da üretim tekniklerini dikkate alarak uzun süre kullanabileceğiniz ve hoşunuza gidecek bir ürün seçmeniz önerilir. Trendyol ile her çeşidi inceleyebilir, malzemelere kolayca erişebilirsiniz. 
        </p>
        </div>
      
       <div>
        <h2 className='text-lg font-semibold'>Dekorasyonu Tamamlayan Ev Mobilyaları</h2>
        <p className='text-[18.5px] leading-[1.35] text-justify'>
          <Image className='float-left' src='https://cdn.dsmcdn.com/mrktng/seo/23may3/mobilya-fiyatlari-3.jpg' alt='Etkileyici Mobilya Çeşitleri' width={300} height={300} />
         Mobilyalar, evin görünümünün yanı sıra hissiyatı üzerinde son derece büyük etkiye sahiptir. Doğru ürün seçimi dekorasyonu büyük ölçüde etkiler. Aynı zamanda evinizi fonksiyonel, konforlu, estetik hale getirebilir. Ev dekorasyonunun tarzınıza veya kişiliğinize uygun olması önemlidir. Evdeki eşyaların dağılımı hem yerleşimi hem de kullanım alanını oldukça etkiler. Yatak odalarında veya salonlarda tercih edebileceğiniz dresuar modelleri ile yaşam alanlarınıza estetiklik katabilirsiniz. Modern, rustik, klasik veya minimal stillerden herhangi birini tercih ederek tarzınızı belirleyebilir, buna göre mobilya seçiminde bulunabilirsiniz. Eşya seçiminde renklerin gücünden faydalanabilirsiniz. Duvarlarınızın rengine uygun, canlı veya pastel tonlarda parçalar seçerek evinizin atmosferini değiştirebilirsiniz. Ürün seçiminde estetiğin yanı sıra işlevselliğe de önem vermek gerekir. Çok fonksiyonlu ürünler ile alan tasarrufu sağlayabilirsiniz. Örneğin, depolama alanı olan yatak veya portmanto seçebilirsiniz. Ev dekorasyonu, kişisel zevklerin yansıtılması açısından çeşitli şekillerde tamamlanabilir. Kendi dokunuşunuzu ekleyerek evinizi istediğiniz şekle getirebilirsiniz. Seçeceğiniz mobilya modellerinin küçük dokunuşları ile evinizde büyük bir değişiklik yaratabilirsiniz. Yastıklar, halılar, perde, avize veya mobilya ayakları gibi aksesuarlarla evinizi canlandırabilirsiniz. Seçeceğiniz aksesuarların renk uyumuna dikkat etmek önemlidir. Mobilyalarınızı doğru yerleştirerek odalarınızın hem geniş hem de ferah görünmesini sağlayabilirsiniz. Ürün seçiminde sadece fiyatı değil aynı zamanda kalitesini de dikkate almak gerekir. Kaliteli seçenekler uzun vadede avantajlı bir kullanım sunar. Mobilyalarda doğal malzemelerin yer alması, evleri sıcak bir yapıya büründürür. Ahşap, deri, taş veya cam gibi doğal malzemeler kullanarak evinizi estetik bir görünüme kavuşturabilirsiniz. Ev eşyaları; ortamın farklı bir ambiyansa sahip olabilmesi adına önemli bir rol oynar. Evinize renk katmak amacıyla arzu ettiğiniz parçalara Trendyol üzerinden ulaşabilir, kaliteli bir deneyim yaşayabilirsiniz.
        </p>
      </div>

       <div>
        <h2 className='text-lg font-semibold'>Mobilya Tasarımında Renk ve Desen Kullanımı</h2>
        <p className='text-[18.5px] leading-[1.35] text-justify'>
          <Image className='float-left' src='https://cdn.dsmcdn.com/mrktng/seo/23may3/mobilya-kampanyalari-4.jpg' alt='Etkileyici Mobilya Çeşitleri' width={300} height={300} />
          Mobilya modelleri, işlevsel tasarımlarının yanı sıra dekoratif amaçla da tercih edilir. Duvar rafı seçenekleri dekorasyon parçalarını sergilemek için tercih edilen önemli bir üründür. Bu tarz küçük dokunuşlarla görsel zevk yaratmak mümkündür. Bunun yanı sıra ürün modellerinin renkleri, desenleri, evinizi veya ofisinizi nasıl göstermek istediğinize bağlı olarak önemlidir. Modellerdeki renk veya desen kullanımı, mobilyalarınızın genel görünümünü belirleyebilir, evinize ya da ofisinize karakter katabilir. Ürün renkleri, eşyalarınızın hangi amaca hizmet ettiğine bağlı olarak değişebilir. Dinlenmek ya da rahatlamak amacıyla kullanılan bir oda için pastel renkler, nötr renkler, hafif tonlar tercih edilebilir. Ürün desenleri, eşyalarınıza karakter veya şıklık katabilir. Desenler, eşyalarınızın tüm görünümünü değiştirebildiğinden uygun alternatifleri değerlendirebilirsiniz. Desenli eşyalar, birkaç parçada kullanıldığında veya doğru renklerle eşleştirildiğinde harika görünebilir. Bunun yanı sıra çiçekler, geometrik şekiller, hayvanlar ya da diğer stillerden oluşabilir. Mobilya desenlerinin evinizin veya ofisinizin renklerine uygun olması son derece önemlidir. Ev dizaynında oturma takımıyla TV ünitesi uyum içinde tutulur. Ofislerde ise çalışma koltuğu ile masaların uyumlu ve ergonomik tasarıma sahip olması önem arz eder. Ayrıca desenleri sadece mobilyalarda değil aynı zamanda halılarda, yastıklarda veya perdelerde de kullanabilirsiniz. Renk seçimi, modelin tarzını veya karakterini belirleyen önemli bir faktördür. Eşyaların yer aldığı mekanda yaratılmak istenen atmosfere uygun renkler seçilir. Bu nedenle ürün tercihi yaparken renk seçimine özen göstermek gerekir. Örneğin, modern bir evde retro tarz ürünler bulunursa renk ve desenler, modern dekorasyon tarzına uyum sağlayacak şekilde seçilir. Aynı zamanda klasik bir evde minimalist mobilyalar bulunursa sade renkler, evin genel dekorasyon ile uyumlu hale getirilir. Trendyol ile her tarza uygun şekilde tasarlanan modelleri elde edebilirsiniz.
        </p>
      </div>

       <div>
        <h2 className='text-lg font-semibold'>Beğeni Toplayan Avantajlar ile Mobilyaların</h2>
        <p className='text-[18.5px] leading-[1.35] text-justify'>
          <Image className='float-left' src='https://cdn.dsmcdn.com/mrktng/seo/23may3/mobilya-indirimleri-5.jpg' alt='Etkileyici Mobilya Çeşitleri' width={300} height={300} />
          Mobilyalar, yaşam alanlarının olmazsa olmazıdır. Hem estetik hem de pratik işlevleri olan bu eşyaların birçok avantajı vardır. Mobilyalar, evinizde veya işyerinizde rahat oturma imkanı sağlar. Çalışma sandalyesi veya oturma grupları gibi parçalar konforlu bir alan oluşturur. Mobilyalar, çeşitli alanlarda ki sosyal etkileşimi artırır. Misafirleriniz için oturma odasında rahat bir oturma alanı veya yemek odasında konuklarınızı ağırlayabileceğiniz yemek takımları evlerde sosyal hayatı canlandırır. Gardırop gibi çeşitli tasarımlar, depolama alanı sağlamak için tercih edilebilir. Kısıtlı alana sahipseniz ranza modelleri ile alandan tasarruf etme imkanında bulunabilirsiniz. Dolaplar veya çekmeceler gibi parçalar eşyaların düzenli bir şekilde saklanmasına olanak sağlar. Ayrıca yaşam alanlarının enerjisini görünümünü olumlu etkiler. Her müşterinin tarzına uygun, estetik görünüme sahip tasarımlar, çeşitli ortamlarda güzel bir atmosfer yaratır. Ürünler birden fazla fonksiyona sahip olabilir. Karyola ya da katlanabilir masa gibi eşyalar, kullanım alanı sınırlı olan mekanlarda faydalı bir çözüm sunar. Kaliteli parçalar, uzun yıllar boyunca kullanılabilir ve dayanıklıdır. Sağlam malzemelerden yapılan mobilyalar, uzun ömürlü bir yatırım sağlar. Farklı tarz mekanlara ve dekorasyon zevklerine uygun olarak seçilebilir. Değişik stillerde ve boyutlarda tasarlanan modeller çeşitli ihtiyaçlara cevap verebilir. Bunların yanı sıra ürünlerin ergonomik olması, kullanım kolaylığı sağlar. Uygun yükseklikteki çalışma masası ve sandalyeler, uzun saatler boyunca bilgisayar başında vakit geçirenler için rahat bir çalışma alanı sunar. Kaliteli ve estetik parçalar yaşam alanlarının değerini arttırır. Ortamı dekore etmek için yaptığınız yatırım, evin değerine katkı sağlar. Mobilyalar, renk ve tarz seçenekleri ile birçok kişinin zevkine hitap edebilir. İyi bir araştırma ile her bütçeye uygun birçok ürün çeşidi müşterilere sunulur. Trendyol ile ihtiyacınız olan parçaları satın alarak birçok avantajın sahibi olabilirsiniz.
        </p>
      </div>

       <div>
        <h2 className='text-lg font-semibold'>Her Bütçeye Uygun Mobilya Fiyatları</h2>
        <p className='text-[18.5px] leading-[1.35] text-justify'>
          <Image className='float-left' src='https://cdn.dsmcdn.com/mrktng/seo/23may3/mobilya-yorumlari-6.jpg' alt='Etkileyici Mobilya Çeşitleri' width={300} height={300} />
          Mobilyalar, yaşam alanlarımızda kullanmak üzere tasarlanır. Konfor, estetik ve işlevsellik gibi özelliklerin yanı sıra depolama ya da organizasyon gibi ihtiyaçlara da yanıt veren eşyalar olarak tanımlanabilir. Tarihte kullanılan mobilyalar arasında taş, ahşap, kemik, deri gibi malzemelerden yapılan alternatifler yer alır. Günlük hayatta ise modern teknolojilerle birlikte çeşitli malzemeler kullanılarak farklı tasarımlar üretilir. Eşyaların yapıldığı malzemeler arasında ahşap, metal, cam, kumaş, suni deri, deri, plastik, taş gibi birçok seçenek yer alır. Ayrıca üretimde kullanılan teknikler de oldukça çeşitlidir. Mobilyalar, ev dekorasyonunun önemli bir parçasıdır. Evin tarzını, karakterini ve kişiliğini yansıtan unsurlar arasındadır. Her zevke, bütçeye ve ihtiyaca uygun seçenekler bulunur. Evlerin ve çeşitli alanların bütün ihtiyaçlarını karşılamak üzere her türlü ürün müşterilere sunulur. Ayakkabılıktan salon ve yemek takımı parçalarına kadar geniş ürün yelpazesi Trendyol’da bulunur. Evleri konforlu hale getirmek için laptop sehpası gibi çeşitli ihtiyaçlar giderilebilir. Ayrıca eşyalar, evlerin yanı sıra ofislerde, otellerde, restoranlarda, hastanelerde ya da okullarda kullanılır. Ofislerde askılık, dosyalar ve kitaplar için tasarlanan dolaplar; çalışma alanları için uygundur. Ürün çeşitliliği ve önemi, mobilya markalarının faaliyetlerine göre değişiklik gösterebilir. Trendyol müşterilere kaliteli, estetik, fonksiyonel ve uygun fiyatlı ürünler sunar. Mobilya ürünleri arasında, farklı tarz ve tasarımlarda ürünler de mevcuttur. Klasik, modern, minimal, rustik, endüstriyel gibi farklı tarzları yansıtan tasarımlar; müşterilere geniş bir seçenek yelpazesi sunar. Her bütçeye uygun mobilya fiyatları son derece avantajlıdır. Müşterilere kaliteli ve şık tasarımlar sunulur. Farklı tarz ve tasarımlardaki ürünler arasından seçim yapabilir, evinizi güzel ve konforlu hale getirebilirsiniz. Trendyol'un kolay ve güvenli alışveriş deneyimi ile beğenileri kazanan ürünleri satın alabilirsiniz.
        </p>
      </div>

      <div>
         <h2 className='text-[22px] font-semibold'>Mobilya Alırken Neye Dikkat Edilmelidir?</h2>
         <p className='text-[18.2px] text-justify leading-[1.3]'>Mobilya alırken dikkat edilmesi gereken bazı noktalar vardır. Kullanılacak alanın ölçüleri bu noktaların başında gelir. Alacağınız mobilyanın kullanacağınız alana uygun olması önemlidir. Dar bir alanda yer alacak mobilyaların daha hafif ve düzgün tasarımlı olması gerekir. Mobilyanın kaliteli ve dayanıklı malzemelerden üretilmiş olması da büyük önem arz eder. Böylelikle mobilya uzun süre ürünü kullanmanız mümkün olacaktır. Fonksiyonellik dikkat edilmesi gereken bir diğer noktadır çünkü alacağınız mobilyanın ihtiyaçlarınızı karşılaması önemlidir. Ekstra depolama ihtiyacı olan bir kişi için dolap gibi mobilyalar daha uygun olacaktır. Tasarım konusuna da dikkat etmek gerekir. Mobilyanın evinizdeki diğer eşyalarla uyumlu olması estetik açıdan göz önünde bulundurulmalıdır. Ürünün fiyatının size uygun olması da dikkat edeceğiniz bir diğer husustur. Hem fiyat hem performans değerlendirmesi yapmanız gerekir. Bu noktalara dikkat ederek istediğiniz mobilyayı; kaliteli, fonksiyonel ve uygun fiyata alabilmeniz mümkündür.</p>

       <div>
         <h2 className='text-[22px] font-semibold'>Mobilya Hangi Renkte Olmalıdır?</h2>
         <p className='text-[18.2px] text-justify leading-[1.3]'>Mobilya renk seçimi, kişinin zevkine ve evinin dekorasyonuna göre değişebilir. Açık renkler genellikle daha hafif ve ferah görünüm sağlarken koyu renkler ise daha ciddi ve sofistike bir hava yaratabilir. Mobilya renkleri, duvar rengi ve evdeki diğer eşyaların renkleriyle uyumlu olmalıdır. Açık renkli duvarlarla koyu tonlardaki mobilyalar uyumsuz görünebilir. Renk zıtlığı oluşturmak isteyenler beyaz mobilya çeşitleri ile kırmızı veya siyah gibi koyu tonları da kombinleyebilir. Bu nedenle mobilya renk seçiminde evin dekorasyonunu da dikkate almalısınız. Sonuçta en önemli olan nokta, sizin zevkinize uygun olan tonların kullanılmasıdır. Bu açıdan özgür renk seçimi önem arz eder. Bazen birbiriyle uyumlu görünmeyen renkler bile hoş bir görüntü oluşturur. Örneğin yeşil mobilya çeşitleriyle kırmızı, turuncu veya mor gibi renkler kombinlenebilir. Soft renklerden hoşlanan ve ara tonları düşünen bireyler de gri mobilya türlerini tercih edebilir.</p>
       </div>

       <div>
         <h2 className='text-[22px] font-semibold'>Mobilya Nereden Alınır?</h2>
         <p className='text-[18.2px] text-justify leading-[1.3]'>Trendyol, evinizin veya yaşam alanlarınızın farklı noktalarında kullanabileceğiniz mobilya çeşitlerini sizler için listeler. Türkiye’nin lider e-ticaret platformları arasında yer alan Trendyol, kurulduğu günden bu yana güvenilir hizmet anlayışıyla kaliteyi bir araya getirmeyi başarır. İçiniz rahat bir şekilde alışveriş yapabileceğiniz Trendyol, kişisel verilerinizi de büyük bir hassasiyetle korur. Güvenilir markaların buluşma adresi olan bu platform, mağazaları gezmektense birkaç tıklamayla tüm ürünlere ulaşmanızı sağlar. Dilediğiniz pek çok ürünü parmaklarınızın ucuna getiren Trendyol zamandan ve maliyetten tasarruf etmenin etkili yoludur. Trendyol geniş bir ürün yelpazesine sahiptir. Bu yelpazede ev mobilyalarından ofis ürünlerine, aksesuarlardan halılara kadar yaşam alanlarınızı güzelleştirecek pek çok ürünü bulabilirsiniz. Trendyol, mobilya çeşitlerini de güvenilir bir şekilde kapınıza kadar kısa sürede ulaştırır. Size de bu geniş pratik alışverişin keyfini sürmek kalır.</p>
       </div>
     </div>

     
     </div>
    </div>
      }
   
          <hr className='border-gray-500'/>
    <section className="w-full max-w-[1450px] mx-auto p-6 text-gray-800">
      <h2  className="text-[22px] font-semibold mb-3 text-gray-900">
        Popüler Sayfalar
      </h2>
      
      <div className="grid grid-cols-3 gap-x-5 gap-y-1">
        {popularPages.map((page, index) => (
          <a
            key={index}
            href="#"
            className="text-xs sm:text-[16.5px] text-gray-700 hover:text-black hover:underline transition-colors duration-150 truncate"
          >
            {page}
          </a>
        ))}
      </div>
     </section>
    </footer>
    
  )
}

export default Footer
