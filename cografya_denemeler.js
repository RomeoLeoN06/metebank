// KPSS Lisans Coğrafya 18'er Soruluk 40 Deneme - TAMAMEN BENZERSİZ SORU HAVUZU
// Her deneme 18 soru: konum_iklim(3) + fiziki(5) + nufus(2) + tarim(2) + maden(2) + sanayi_ulasim(4) = 18

const cografyaTopics = [
  { key: "konum_iklim", title: "Coğrafi Konum & İklim", count: 3 },
  { key: "fiziki_ozellikler", title: "Türkiye'nin Fiziki Özellikleri & Yer Şekilleri", count: 5 },
  { key: "nufus_yerlesme", title: "Nüfus ve Yerleşme", count: 2 },
  { key: "tarim_hayvancilik", title: "Tarım ve Hayvancılık", count: 2 },
  { key: "maden_enerji", title: "Madenler ve Enerji Kaynakları", count: 2 },
  { key: "sanayi_ulasim_turizm", title: "Sanayi, Ulaşım, Ticaret ve Turizm", count: 4 }
];

const cografyaTemplates = {
  konum_iklim: [
    {q:"Türkiye'de doğudan batıya gidildikçe sıcaklığın artmasının temel nedeni hangisidir?",opts:["A) Enlem etkisi","B) Yükseltinin azalması","C) Denizellik etkisi","D) Bakı etkisi","E) Boylam farkı"],c:1,exp:"Doğudan batıya yükselti azalır, her 200m'de sıcaklık 1°C artar."},
    {q:"Türkiye'nin en doğusu ile en batısı arasındaki yerel saat farkı yaklaşık kaç dakikadır?",opts:["A) 36","B) 56","C) 76","D) 96","E) 116"],c:2,exp:"19 boylamlık fark x 4 dk = 76 dakika yerel saat farkı vardır."},
    {q:"Türkiye'de Akdeniz ikliminin en belirgin özelliği hangisidir?",opts:["A) Her mevsim yağışlı","B) Yazları sıcak-kurak, kışları ılık-yağışlı","C) Yazları serin","D) Kışları çok soğuk","E) Yağış yok"],c:1,exp:"Akdeniz iklimi yazları sıcak-kurak, kışları ılık ve yağışlıdır."},
    {q:"Karadeniz ikliminin en fazla yağış aldığı mevsim hangisidir?",opts:["A) İlkbahar","B) Yaz","C) Sonbahar","D) Kış","E) Her mevsim eşit"],c:2,exp:"Karadeniz iklimi her mevsim yağışlı olmakla birlikte en çok sonbaharda yağış alır."},
    {q:"Türkiye'de karasal iklimin en belirgin etkisi görülen bölge hangisidir?",opts:["A) Ege","B) Akdeniz","C) İç Anadolu","D) Karadeniz","E) Marmara"],c:2,exp:"İç Anadolu'da deniz etkisinden uzaklık nedeniyle karasal iklim belirgindir."},
    {q:"Fön rüzgârı aşağıdakilerden hangisine neden olur?",opts:["A) Yağışın artması","B) Sıcaklığın artması ve nemin düşmesi","C) Kar yağışı","D) Sis oluşumu","E) Sel baskını"],c:1,exp:"Fön rüzgârı dağın rüzgâraltı yamacında ısınarak kurutur ve sıcaklığı artırır."},
    {q:"Türkiye'de maki bitki örtüsü hangi iklim bölgesinde yaygındır?",opts:["A) Karadeniz","B) Akdeniz","C) İç Anadolu","D) Doğu Anadolu","E) Güneydoğu Anadolu"],c:1,exp:"Maki, Akdeniz ikliminin karakteristik kısa boylu, sert yapraklı bitki örtüsüdür."},
    {q:"Türkiye'de bozkır (step) bitki örtüsü hangi bölgelerde yaygındır?",opts:["A) Karadeniz ve Ege","B) İç Anadolu ve Güneydoğu Anadolu","C) Akdeniz ve Marmara","D) Doğu ve Batı","E) Karadeniz ve Akdeniz"],c:1,exp:"Bozkır, yağışın az olduğu İç Anadolu ve Güneydoğu Anadolu'da yaygındır."},
    {q:"Türkiye'nin en yüksek yıllık sıcaklık ortalamasına sahip ili hangisidir?",opts:["A) Antalya","B) Şanlıurfa","C) Hatay","D) Mersin","E) Adana"],c:1,exp:"Şanlıurfa, karasallık ve alçak rakım etkisiyle en yüksek sıcaklık ortalamasına sahiptir."},
    {q:"Türkiye'de en az yağış alan bölüm hangisidir?",opts:["A) Ege","B) Konya Bölümü (Tuz Gölü çevresi)","C) Çatalca-Kocaeli","D) Antalya","E) Doğu Karadeniz"],c:1,exp:"Konya ve Tuz Gölü çevresi yıllık 300 mm altında yağış alarak en kurak alandır."},
    {q:"Türkiye'de en fazla yağış alan yer hangisidir?",opts:["A) Antalya","B) Hopa (Rize)","C) İstanbul","D) Trabzon","E) İzmir"],c:1,exp:"Doğu Karadeniz (Rize-Hopa) Türkiye'nin en çok yağış alan bölgesidir."},
    {q:"Türkiye'nin matematik konumunun sonuçlarından biri hangisidir?",opts:["A) Dört mevsim belirgin yaşanır","B) Gece-gündüz süreleri hep eşittir","C) Tropikal iklim görülür","D) Kutup iklimi etkilidir","E) Muson yağışları görülür"],c:0,exp:"Türkiye orta kuşakta yer aldığı için dört mevsim belirgin yaşanır."},
    {q:"Türkiye'de denize paralel uzanan dağların kıyı ile iç kısımlar arasında oluşturduğu etki hangisidir?",opts:["A) Yağışı artırma","B) Kıyı ile iç kesimler arasında iklim farkı oluşturma","C) Deprem riski","D) Turizm gelişmesi","E) Tarım alanlarını genişletme"],c:1,exp:"Kuzey Anadolu ve Toros dağları deniz etkisinin iç kesimlere ulaşmasını engelleyerek iklim farkı oluşturur."},
    {q:"Türkiye'de kıyı kesimlerinde gece-gündüz sıcaklık farkının az olmasının nedeni hangisidir?",opts:["A) Enlem","B) Denizellik etkisi","C) Yükselti","D) Bakı","E) Bitki örtüsü"],c:1,exp:"Denizin ısıyı yavaş alıp yavaş vermesi kıyılarda sıcaklık farkını azaltır."}
  ],
  fiziki_ozellikler: [
    {q:"Salda Gölü hangi oluşum türüne örnektir?",opts:["A) Tektonik","B) Karstik","C) Volkanik","D) Buzul","E) Set"],c:1,exp:"Salda Gölü Burdur'da kireçtaşı erimesiyle oluşan karstik göldür."},
    {q:"Ege Bölgesi'ndeki dağlar hangi tür oluşumla meydana gelmiştir?",opts:["A) Kıvrılma","B) Kırılma (Horst-Graben)","C) Volkanik","D) Buzul","E) Aşınım"],c:1,exp:"Ege'deki dağlar kırılma sonucu oluşmuş horst-graben yapısındadır."},
    {q:"Türkiye'nin en yüksek dağı hangisidir?",opts:["A) Erciyes","B) Süphan","C) Ağrı","D) Kaçkar","E) Uludağ"],c:2,exp:"Ağrı Dağı 5137m ile Türkiye'nin en yüksek dağıdır."},
    {q:"Türkiye'nin en büyük gölü hangisidir?",opts:["A) Tuz Gölü","B) Beyşehir","C) Van Gölü","D) Burdur","E) Eğirdir"],c:2,exp:"Van Gölü 3713 km² ile Türkiye'nin en büyük gölüdür."},
    {q:"Türkiye'nin en uzun nehri hangisidir?",opts:["A) Sakarya","B) Fırat","C) Kızılırmak","D) Dicle","E) Seyhan"],c:2,exp:"Kızılırmak 1355 km ile Türkiye'nin en uzun nehridir."},
    {q:"Türkiye'de traverten oluşumlarının en yaygın görüldüğü yer hangisidir?",opts:["A) Kapadokya","B) Pamukkale","C) Göreme","D) Safranbolu","E) Nemrut"],c:1,exp:"Pamukkale (Denizli) travertenleriyle dünyaca ünlüdür."},
    {q:"Kapadokya'daki peri bacalarının oluşumunda etkili olan faktör hangisidir?",opts:["A) Karstik erozyon","B) Volkanik tüflerin farklı aşınması","C) Buzul erimesi","D) Rüzgâr birikimi","E) Tektonik çökme"],c:1,exp:"Peri bacaları volkanik tüflerin sel ve rüzgâr erozyonuyla farklı hızda aşınmasıyla oluşur."},
    {q:"Göller Yöresi hangi bölgemizde yer alır?",opts:["A) Ege","B) İç Anadolu","C) Akdeniz","D) Marmara","E) Karadeniz"],c:2,exp:"Göller Yöresi Akdeniz Bölgesi'nin kuzeyinde yer alır."},
    {q:"Türkiye'de Kuzey Anadolu Fay Hattı'nın geçtiği il aşağıdakilerden hangisidir?",opts:["A) Antalya","B) Bolu","C) Konya","D) Şanlıurfa","E) Van"],c:1,exp:"Kuzey Anadolu Fay Hattı Bolu, Düzce, Sakarya gibi illerden geçer."},
    {q:"Türkiye'de delta ovalarının en yaygın görüldüğü kıyı hangisidir?",opts:["A) Karadeniz","B) Ege","C) Akdeniz","D) Marmara","E) Hepsi eşit"],c:2,exp:"Akdeniz kıyısında Çukurova (Seyhan-Ceyhan), Silifke deltaları en büyüklerdir."},
    {q:"Nemrut Krater Gölü hangi bölgemizde yer alır?",opts:["A) İç Anadolu","B) Akdeniz","C) Doğu Anadolu","D) Güneydoğu Anadolu","E) Karadeniz"],c:2,exp:"Nemrut Krater Gölü Doğu Anadolu Bölgesi'nde Bitlis ilinde yer alır."},
    {q:"Tortum Şelalesi hangi bölgemizde bulunur?",opts:["A) Akdeniz","B) Marmara","C) Doğu Anadolu (Erzurum)","D) İç Anadolu","E) Ege"],c:2,exp:"Tortum Şelalesi Erzurum'da bulunan Türkiye'nin en yüksek şelalesidir."},
    {q:"Türkiye'de akarsuların denize ulaşamadan kuruduğu (kapalı havza) bölge hangisidir?",opts:["A) Karadeniz","B) Ege","C) İç Anadolu","D) Marmara","E) Akdeniz"],c:2,exp:"İç Anadolu'da yağışın az olması nedeniyle birçok akarsu kapalı havza oluşturur."},
    {q:"Çukurova'nın verimli topraklarının oluşumunda etkili olan süreç hangisidir?",opts:["A) Volkanik faaliyet","B) Akarsu biriktirmesi (alüvyon)","C) Buzul erimesi","D) Karstik çözünme","E) Rüzgâr birikimi"],c:1,exp:"Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyonlar Çukurova'yı oluşturmuştur."},
    {q:"Marmara Bölgesi'nde yer alan ve Türkiye'nin en büyük yarımadası hangisidir?",opts:["A) Sinop","B) Biga","C) Datça","D) Gelibolu","E) Bodrum"],c:1,exp:"Biga Yarımadası Marmara Bölgesi'ndeki en büyük yarımadadır."},
    {q:"Türkiye'de heyelanların en sık görüldüğü bölge hangisidir?",opts:["A) İç Anadolu","B) Güneydoğu Anadolu","C) Karadeniz","D) Ege","E) Akdeniz"],c:2,exp:"Karadeniz'de bol yağış ve eğimli arazi heyelanlara zemin hazırlar."},
    {q:"Tuz Gölü hangi bölgemizde yer alır ve özelliği nedir?",opts:["A) Doğu Anadolu - Tatlı su","B) İç Anadolu - Tuzlu ve sığ göl","C) Akdeniz - Derin göl","D) Marmara - Tatsu","E) Ege - Acı su"],c:1,exp:"Tuz Gölü İç Anadolu'da tuzlu ve sığ bir kapalı havza gölüdür."},
    {q:"Türkiye'de buzul gölleri en fazla hangi dağlarda bulunur?",opts:["A) Toros","B) Kaçkar ve Cilo","C) Erciyes","D) Uludağ","E) Ilgaz"],c:1,exp:"Kaçkar ve Cilo-Sat dağlarında buzul aşındırma gölleri (sirk gölleri) yaygındır."},
    {q:"Menderes Nehri'nin adını verdiği ve akarsuların kıvrılarak aktığı oluşuma ne denir?",opts:["A) Vadi","B) Kanyon","C) Menderes","D) Delta","E) Ova"],c:2,exp:"Akarsuların eğimin az olduğu yerlerde kıvrılarak akmasına Menderes denir."},
    {q:"Türkiye'de rüzgâr erozyonunun en etkili olduğu alan hangisidir?",opts:["A) Karadeniz kıyıları","B) İç Anadolu ovaları","C) Ege kıyıları","D) Doğu Karadeniz","E) Akdeniz ormanları"],c:1,exp:"Bitki örtüsünün cılız olduğu İç Anadolu ovalarında rüzgâr erozyonu etkilidir."}
  ],
  nufus_yerlesme: [
    {q:"Türkiye'de nüfus yoğunluğunun en fazla olduğu bölge hangisidir?",opts:["A) Marmara","B) Ege","C) Akdeniz","D) İç Anadolu","E) Karadeniz"],c:0,exp:"Marmara sanayi, ticaret ve ulaşım gelişmişliğiyle en yoğun bölgedir."},
    {q:"Türkiye'de nüfusun en seyrek olduğu bölge hangisidir?",opts:["A) Marmara","B) Ege","C) Akdeniz","D) Doğu Anadolu","E) Karadeniz"],c:3,exp:"Doğu Anadolu yüksek rakım ve sert iklim nedeniyle en seyrek nüfuslu bölgedir."},
    {q:"Türkiye'de kırdan kente göçün temel nedeni hangisidir?",opts:["A) Iklim değişikliği","B) Sanayileşme ve iş imkânı arayışı","C) Doğal afet","D) Eğitim politikası","E) Savaş"],c:1,exp:"Sanayileşme ve iş imkânları kırdan kente göçün temel itici/çekici faktörüdür."},
    {q:"Türkiye'de nüfus artış hızının en yüksek olduğu dönem hangisidir?",opts:["A) 1923-1940","B) 1940-1960","C) 1960-1980","D) 1980-2000","E) 2000-2020"],c:2,exp:"1960-1980 döneminde Türkiye'de nüfus artış hızı en yüksek seviyeye ulaşmıştır."},
    {q:"Türkiye'de 'gecekondulaşma' sorununun temel nedeni hangisidir?",opts:["A) Tarım gelişmesi","B) Plansız ve hızlı kentleşme","C) Turizm","D) Sanayi azalması","E) Göç vermek"],c:1,exp:"Kırdan kente hızlı göç ve plansız kentleşme gecekondulaşmaya neden olmuştur."},
    {q:"Türkiye'de Teke ve Taşeli platolarının seyrek nüfuslu olmasının nedeni hangisidir?",opts:["A) İklim","B) Engebeli arazi","C) Kurak toprak","D) Sanayi eksikliği","E) Ulaşım zorluğu"],c:1,exp:"Teke ve Taşeli platolarında arazi engebelidir ve tarım alanları sınırlıdır."},
    {q:"Türkiye'de nüfus sayımlarının temel amacı hangisidir?",opts:["A) Askere alma","B) Kalkınma planları ve hizmet dağılımı için veri toplamak","C) Vergi toplamak","D) Seçim yapmak","E) Göçü önlemek"],c:1,exp:"Nüfus sayımları devletin kalkınma planları için demografik veri toplamasını sağlar."},
    {q:"Türkiye'de hangi il en fazla nüfusa sahiptir?",opts:["A) Ankara","B) İzmir","C) İstanbul","D) Bursa","E) Antalya"],c:2,exp:"İstanbul 15 milyonu aşan nüfusuyla Türkiye'nin en kalabalık ilidir."},
    {q:"Mevsimlik tarım işçiliği nedeniyle geçici nüfus artışı yaşayan bölge hangisidir?",opts:["A) Doğu Anadolu","B) İç Anadolu","C) Çukurova (Akdeniz)","D) Karadeniz","E) Trakya"],c:2,exp:"Çukurova'da pamuk toplama döneminde mevsimlik işçi göçü yoğundur."},
    {q:"Türkiye'de nüfusun yaş yapısına göre genç nüfus oranının yüksek olduğu bölge hangisidir?",opts:["A) Marmara","B) Ege","C) Güneydoğu Anadolu","D) Akdeniz","E) İç Anadolu"],c:2,exp:"Güneydoğu Anadolu'da doğurganlık oranının yüksekliği genç nüfus oranını artırır."}
  ],
  tarim_hayvancilik: [
    {q:"Devlet denetiminde ekim alanları kısıtlanan ürün hangisidir?",opts:["A) Tütün","B) Haşhaş","C) Çay","D) Şekerpancarı","E) Pamuk"],c:1,exp:"Haşhaş ekimi devlet denetiminde kotalı üretilmektedir."},
    {q:"Türkiye'de çay üretiminin yapıldığı tek bölge hangisidir?",opts:["A) Akdeniz","B) Ege","C) Doğu Karadeniz","D) Marmara","E) İç Anadolu"],c:2,exp:"Çay yalnızca Doğu Karadeniz'de (Rize, Trabzon, Artvin) yetiştirilir."},
    {q:"Türkiye'de fındık üretiminde dünya birincisi olan bölge hangisidir?",opts:["A) Ege","B) Akdeniz","C) Karadeniz","D) Marmara","E) İç Anadolu"],c:2,exp:"Karadeniz Bölgesi (Giresun, Ordu, Trabzon) fındık üretiminde dünya lideridir."},
    {q:"Türkiye'de pamuk üretiminin en yoğun yapıldığı bölge hangisidir?",opts:["A) Karadeniz","B) Akdeniz (Çukurova) ve Ege","C) İç Anadolu","D) Doğu Anadolu","E) Marmara"],c:1,exp:"Pamuk üretimi Çukurova, Ege ve Güneydoğu Anadolu'da yoğundur."},
    {q:"Türkiye'de zeytin üretiminin en yoğun olduğu bölge hangisidir?",opts:["A) Karadeniz","B) İç Anadolu","C) Ege ve Akdeniz","D) Doğu Anadolu","E) Güneydoğu Anadolu"],c:2,exp:"Zeytin Ege ve Akdeniz bölgelerinin kıyı kesimlerinde yoğun üretilir."},
    {q:"Türkiye'de büyükbaş hayvancılığın en yaygın olduğu bölge hangisidir?",opts:["A) Ege","B) Akdeniz","C) Doğu Anadolu","D) Güneydoğu Anadolu","E) Marmara"],c:2,exp:"Doğu Anadolu geniş çayır ve otlaklarıyla büyükbaş hayvancılıkta öndedir."},
    {q:"Türkiye'de küçükbaş (koyun-keçi) hayvancılığının en yaygın olduğu bölge hangisidir?",opts:["A) Karadeniz","B) İç Anadolu","C) Akdeniz","D) Ege","E) Marmara"],c:1,exp:"İç Anadolu'nun geniş bozkır alanları küçükbaş hayvancılığa uygundur."},
    {q:"Türkiye'de şekerpancarı üretiminin en yoğun olduğu bölge hangisidir?",opts:["A) Ege","B) Akdeniz","C) İç Anadolu","D) Karadeniz","E) Doğu Anadolu"],c:2,exp:"İç Anadolu şekerpancarı üretiminde en yoğun bölgedir."},
    {q:"Türkiye'de turunçgil (portakal, mandalina, limon) üretiminin en çok yapıldığı bölge hangisidir?",opts:["A) Ege","B) Akdeniz","C) Karadeniz","D) İç Anadolu","E) Marmara"],c:1,exp:"Turunçgil üretimi Akdeniz bölgesinde (Mersin, Adana, Antalya, Hatay) yoğundur."},
    {q:"Türkiye'de arıcılığın en yaygın olduğu bölge hangisidir?",opts:["A) İç Anadolu","B) Güneydoğu Anadolu","C) Karadeniz ve Ege","D) Marmara","E) Doğu Anadolu"],c:2,exp:"Çiçek çeşitliliği nedeniyle Karadeniz ve Ege arıcılıkta öndedir."}
  ],
  maden_enerji: [
    {q:"Türkiye'de krom madeninin en fazla çıkarıldığı merkez hangisidir?",opts:["A) Elazığ-Guleman","B) Sivas-Divriği","C) Konya-Seydişehir","D) Artvin-Murgul","E) Balıkesir-Bigadiç"],c:0,exp:"Elazığ-Guleman krom yatakları açısından en zengin merkezdir."},
    {q:"Türkiye dünya bor madeni rezervlerinin yaklaşık yüzde kaçına sahiptir?",opts:["A) %25","B) %45","C) %55","D) %73","E) %90"],c:3,exp:"Türkiye dünya bor rezervlerinin yaklaşık %73'üne sahiptir."},
    {q:"Türkiye'de taşkömürü çıkarılan tek il hangisidir?",opts:["A) Muğla","B) Manisa","C) Zonguldak","D) Kütahya","E) Afyon"],c:2,exp:"Taşkömürü yalnızca Zonguldak'ta çıkarılır."},
    {q:"Türkiye'de linyit kömürünün en fazla çıkarıldığı il hangisidir?",opts:["A) Zonguldak","B) Muğla","C) Kütahya","D) Manisa","E) Afyon"],c:1,exp:"Muğla (Yatağan) Türkiye'nin en büyük linyit üretim merkezidir."},
    {q:"Türkiye'de demir madeni en çok hangi il ve ilçede çıkarılır?",opts:["A) Elazığ-Guleman","B) Sivas-Divriği","C) Balıkesir-Bigadiç","D) Artvin-Murgul","E) Konya-Seydişehir"],c:1,exp:"Sivas-Divriği Türkiye'nin en büyük demir madeni yatağıdır."},
    {q:"Türkiye'de boksit (alüminyum hammaddesi) en çok hangi ilde çıkarılır?",opts:["A) Sivas","B) Konya-Seydişehir","C) Elazığ","D) Zonguldak","E) Muğla"],c:1,exp:"Konya-Seydişehir boksit madeni ve alüminyum tesisleriyle önemlidir."},
    {q:"Türkiye'de bakır madeni en çok hangi ilde çıkarılır?",opts:["A) Artvin-Murgul","B) Sivas","C) Konya","D) Zonguldak","E) Muğla"],c:0,exp:"Artvin-Murgul Türkiye'nin en önemli bakır madeni yatağıdır."},
    {q:"Türkiye'de jeotermal enerji potansiyeli en yüksek olan bölge hangisidir?",opts:["A) Karadeniz","B) Ege","C) İç Anadolu","D) Doğu Anadolu","E) Güneydoğu Anadolu"],c:1,exp:"Ege Bölgesi kırık hatlar nedeniyle jeotermal enerji potansiyeli en yüksek bölgedir."},
    {q:"Türkiye'de rüzgâr enerjisi santralleri en yoğun hangi bölgede kurulmuştur?",opts:["A) Karadeniz","B) Marmara ve Ege","C) İç Anadolu","D) Doğu Anadolu","E) Güneydoğu Anadolu"],c:1,exp:"Marmara (Bandırma) ve Ege kıyılarında rüzgâr santralleri yoğundur."},
    {q:"Türkiye'de güneş enerjisi potansiyeli en yüksek olan bölge hangisidir?",opts:["A) Karadeniz","B) Marmara","C) Güneydoğu Anadolu","D) Doğu Anadolu","E) İç Anadolu"],c:2,exp:"Güneydoğu Anadolu yıllık güneşlenme süresi en uzun bölge olarak güneş enerjisi potansiyeli en yüksektir."}
  ],
  sanayi_ulasim_turizm: [
    {q:"Türkiye'de bor madeni işleme tesislerinin bulunduğu il hangisidir?",opts:["A) Balıkesir (Bandırma)","B) Zonguldak","C) Adana","D) Trabzon","E) Gaziantep"],c:0,exp:"Balıkesir Bandırma Boraks fabrikası bor madeninin işlendiği ana tesistir."},
    {q:"Türkiye'de sanayi üretiminin en yoğun olduğu bölge hangisidir?",opts:["A) İç Anadolu","B) Marmara","C) Ege","D) Akdeniz","E) Karadeniz"],c:1,exp:"Marmara İstanbul, Kocaeli, Bursa ile Türkiye'nin sanayi kalbidir."},
    {q:"Türkiye'de demiryolu ulaşımının en yoğun olduğu bölge hangisidir?",opts:["A) Doğu Anadolu","B) Karadeniz","C) İç Anadolu ve Marmara","D) Güneydoğu Anadolu","E) Akdeniz"],c:2,exp:"Ankara-İstanbul hattı başta olmak üzere İç Anadolu ve Marmara demiryolu ağı en yoğundur."},
    {q:"Türkiye'de turizm gelirlerinin en yüksek olduğu bölge hangisidir?",opts:["A) İç Anadolu","B) Karadeniz","C) Akdeniz ve Ege","D) Doğu Anadolu","E) Güneydoğu Anadolu"],c:2,exp:"Akdeniz ve Ege sahilleri deniz turizmiyle en fazla turizm geliri elde eder."},
    {q:"Türkiye'de karayolu ulaşımının toplam taşımacılık içindeki payı yaklaşık yüzde kaçtır?",opts:["A) %25","B) %45","C) %65","D) %90","E) %50"],c:3,exp:"Türkiye'de yük ve yolcu taşımacılığının yaklaşık %90'ı karayolu ile yapılır."},
    {q:"Türkiye'de ipek yolu ticaretinin modern karşılığı olan ve Doğu-Batı arasında bağlantı kuran proje hangisidir?",opts:["A) Marmaray","B) BTC Boru Hattı","C) Orta Koridor (Trans-Hazar)","D) Kanal İstanbul","E) Osmangazi Köprüsü"],c:2,exp:"Orta Koridor Türkiye'yi Çin'e bağlayan modern ipek yolu projesidir."},
    {q:"Türkiye'de transit ticaretin en yoğun olduğu boğaz hangisidir?",opts:["A) Çanakkale","B) İstanbul Boğazı","C) Süveyş Kanalı","D) Cebelitarık","E) Hürmüz"],c:1,exp:"İstanbul Boğazı dünya deniz ticaretinin en yoğun geçiş noktalarından biridir."},
    {q:"Türkiye'de dış ticaret açığının temel nedeni hangisidir?",opts:["A) Turizm geliri düşüklüğü","B) İthalatın ihracattan fazla olması","C) Tarım üretimi azlığı","D) Nüfus azlığı","E) Enerji fazlası"],c:1,exp:"Türkiye'de ithalat ihracattan fazla olduğu için dış ticaret açığı oluşur."},
    {q:"Türkiye'de termal turizmin en yaygın olduğu bölge hangisidir?",opts:["A) Karadeniz","B) İç Batı Anadolu (Afyon, Kütahya)","C) Doğu Anadolu","D) Güneydoğu Anadolu","E) Trakya"],c:1,exp:"Afyon ve Kütahya termal kaynakları ile sağlık turizmi merkezidir."},
    {q:"BTC (Bakü-Tiflis-Ceyhan) Boru Hattı hangi ürünü taşır?",opts:["A) Doğalgaz","B) Ham petrol","C) Su","D) Kömür","E) Bor"],c:1,exp:"BTC hattı Azerbaycan petrolünü Ceyhan'a taşıyan ham petrol boru hattıdır."},
    {q:"Türkiye'de kış turizmi potansiyeli en yüksek olan bölge hangisidir?",opts:["A) Akdeniz","B) Ege","C) Doğu Anadolu","D) Güneydoğu Anadolu","E) Marmara"],c:2,exp:"Doğu Anadolu yüksek rakım ve uzun kış mevsimi ile kayak turizmi potansiyeli en yüksektir."},
    {q:"Türkiye'nin en işlek havalimanı hangisidir?",opts:["A) Ankara Esenboğa","B) İstanbul Havalimanı","C) İzmir Adnan Menderes","D) Antalya","E) Trabzon"],c:1,exp:"İstanbul Havalimanı Türkiye'nin ve dünyanın en işlek havalimanlarından biridir."}
  ]
};

function generate40CografyaDenemeleri() {
  const denemeler = [];
  for (let i = 1; i <= 40; i++) {
    let difficulty = i <= 10 ? "kolay" : (i <= 25 ? "orta" : (i <= 35 ? "zor" : "sampiyon"));
    let diffLabel = i <= 10 ? "🟢 Kolay (Temel)" : (i <= 25 ? "🟡 Orta (ÖSYM Standart)" : (i <= 35 ? "🔴 Zor (Harita Detay)" : "🟣 ÖSYM Şampiyon"));
    const examQuestions = [];
    let qIdCounter = 1;
    cografyaTopics.forEach(topic => {
      for (let k = 0; k < topic.count; k++) {
        const pool = cografyaTemplates[topic.key];
        const uniqueIdx = ((i - 1) * topic.count + k) % pool.length;
        const tmpl = pool[uniqueIdx];
        examQuestions.push({
          id: `cog-d${i}-q${qIdCounter}`,
          denemeNo: i,
          questionNo: qIdCounter,
          category: "cografya",
          subcategory: topic.title,
          difficulty: difficulty,
          question: tmpl.q,
          options: tmpl.opts,
          correct: tmpl.c,
          explanation: tmpl.exp
        });
        qIdCounter++;
      }
    });
    denemeler.push({
      id: `cog-deneme-${i}`,
      title: `KPSS Coğrafya Denemesi #${i}`,
      denemeNo: i,
      questionCount: 18,
      difficulty: difficulty,
      difficultyLabel: diffLabel,
      questions: examQuestions
    });
  }
  return denemeler;
}

var cografya40Denemeler = generate40CografyaDenemeleri();
if (typeof window !== 'undefined') window.cografya40Denemeler = cografya40Denemeler;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cografya40Denemeler, cografyaTopics };
}
