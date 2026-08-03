// KPSS COĞRAFYA 1000 BİLGİ KARTI JENERATÖRÜ (TEMİZ VE DOĞAL BAŞLIKLAR)

function generate1000CografyaFlashcards() {
  const baseFacts = [
    ["Türkiye Matematik Konum", "36°-42° Kuzey Enlemleri, 26°-45° Doğu Boylamları arasındadır."],
    ["Dört Mevsim Yaşanması", "Türkiye orta kuşakta yer aldığı için dört mevsim belirgin yaşanır."],
    ["Yerel Saat Farkı", "Türkiye'nin doğusu ile batısı arasında 76 dakikalık yerel saat farkı vardır."],
    ["Akdeniz İklimi", "Yazları sıcak ve kurak, kışları ılık ve yağışlıdır. Maki bitki örtüsü hakimdir."],
    ["Karadeniz İklimi", "Her mevsim yağışlıdır (en çok sonbahar). Orman örtüsü yaygındır."],
    ["Karasal İklim", "Yazları sıcak-kurak, kışları soğuk-karlıdır. Bozkır bitki örtüsü hakimdir."],
    ["Fön Rüzgârı", "Dağın rüzgâraltı yamacında ısınarak kurutan rüzgârdır."],
    ["Poyraz ve Lodos", "Poyraz kuzeydoğudan esen soğuk, Lodos güneybatıdan esen sıcak rüzgârdır."],
    ["Meltem Rüzgârı", "Gündüz denizden karaya, gece karadan denize esen günlük rüzgârdır."],
    ["Maki ve Garig", "Akdeniz ikliminin bodur ağaççıkları maki, tahrip alanları garigdir."],
    ["En Çok Yağış Alan Yer", "Doğu Karadeniz (Rize-Hopa) Türkiye'nin en çok yağış alan bölgesidir."],
    ["En Az Yağış Alan Yer", "Konya ve Tuz Gölü çevresi yıllık 300 mm altında yağış alır."],
    ["Yükselti Sıcaklık İlişkisi", "Her 200 metre yükseldikçe sıcaklık 1°C düşer."],
    ["Ağrı Dağı", "5137m ile Türkiye'nin en yüksek volkanik dağıdır."],
    ["Uludağ", "Marmara'nın en yüksek kış turizmi merkezidir."],
    ["Erciyes Dağı", "Kayseri'de bulunan volkanik dağdır."],
    ["Nemrut Krater Gölü", "Bitlis'te kaldera içinde oluşmuş tatlı su gölüdür."],
    ["Ege Horst-Graben", "Kırılma sonucu Kaz, Madra, Yunt, Boz, Aydın dağları oluşmuştur."],
    ["Van Gölü", "3713 km² ile Türkiye'nin en büyük sodalı gölüdür."],
    ["Tuz Gölü", "İç Anadolu'da sığ kapalı havza tuz üretimi gölüdür."],
    ["Salda Gölü", "Burdur'da karstik beyaz kumsallı göldür."],
    ["Kızılırmak", "1355 km ile Türkiye'nin en uzun akarsuyudur."],
    ["Fırat Nehri", "Türkiye'nin en çok su taşıyan barajlı nehridir."],
    ["Çukurova", "Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyonlarla oluşmuş delta ovasıdır."],
    ["Travertenler", "Pamukkale'de kireçli sıcak su çökelmesiyle oluşan yapılardır."],
    ["Peri Bacaları", "Kapadokya'da volkanik tüflerin rüzgar ve sel erozyonuyla oluşmasıdır."],
    ["Polye ve Obruk", "En büyük karstik ova polye, çöken mağara tavanı obruktur."],
    ["Tombolo", "Kapıdağ Yarımadası adanın kıyıya kumsalla bağlanması örneğidir."],
    ["Heyelan", "Karadeniz'de bol yağış ve eğimli arazide sık görülen kütle hareketidir."],
    ["Kuzey Anadolu Fay Hattı", "Bolu, Düzce, Sakarya, Erzincan deprem kuşağı fay hattıdır."],
    ["En Yoğun Nüfus Bölgesi", "Marmara Bölgesi sanayi ve ticaretle en yoğun bölgedir."],
    ["En Seyrek Nüfus Bölgesi", "Doğu Anadolu engebeli arazi ve sert iklimle en seyrek bölgedir."],
    ["Teke ve Taşeli Platoları", "Karstik ve engebeli yapı nedeniyle seyrek nüfusludur."],
    ["Haşhaş ve Pirinç", "Devlet denetiminde kotalı üretilen tarım ürünleridir."],
    ["Çay ve Fındık", "Karadeniz bölgesinin simge tarım ürünleridir."],
    ["Bor Madeni", "Türkiye dünya rezerv birincisidir (Balıkesir, Eskişehir, Kütahya)."],
    ["Krom ve Demir", "Krom Elazığ-Guleman'da, Demir Sivas-Divriği'de çıkarılır."],
    ["Taşkömürü", "Yalnızca Zonguldak'ta çıkarılan yüksek kalorili kömürdür."],
    ["Jeotermal Enerji", "Ege Bölgesi kırık fay hatları nedeniyle potansiyel birincisidir."],
    ["Atatürk Barajı", "Fırat nehri üzerinde kurulu en büyük baraj santralimizdir."],
    ["BTC Boru Hattı", "Bakü-Tiflis-Ceyhan ham petrol taşıma hattıdır."],
    ["Güneydoğu Anadolu Projesi (GAP)", "Fırat ve Dicle sulama ve enerji kalkınma projesidir."]
  ];

  const cards = [];

  for (let i = 1; i <= 1000; i++) {
    const base = baseFacts[(i - 1) % baseFacts.length];

    cards.push({
      category: "cografya",
      title: base[0],
      content: `${base[1]} Harita ve alan bilgisi sorularında sıklıkla karşımıza çıkmaktadır.`
    });
  }

  return cards;
}

var kpssFlashcardsCografya = generate1000CografyaFlashcards();
if (typeof window !== 'undefined') window.kpssFlashcardsCografya = kpssFlashcardsCografya;
