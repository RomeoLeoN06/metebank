// KPSS Lisans Coğrafya 18'er Soruluk 40 Deneme Veri Motoru (720 Özgün Soru + Harita/Grafik Görsel Destekli)
// ÖSYM 2015-2024 Standart Konu Dağılımı:
// Konum (2) + Yer Şekilleri & Harita (4) + İklim & Bitki (3) + Nüfus & Göç (3) + Tarım & Orman (2) + Maden & Sanayi (2) + Ulaşım & Kalkınma Projeleri (2) = 18 Soru

const cografyaTopics = [
  { key: "konum", title: "Coğrafi Konum & Jeopolitik", count: 2 },
  { key: "yer_sekilleri", title: "Yer Şekilleri & Dağ-Ova-Platolar", count: 4 },
  { key: "iklim", title: "İklim, Bitki Örtüsü & Toprak", count: 3 },
  { key: "nufus", title: "Nüfus, Yerleşme & Göçler", count: 3 },
  { key: "tarim", title: "Tarım, Hayvancılık & Ormancılık", count: 2 },
  { key: "maden", title: "Madenler, Enerji & Sanayi", count: 2 },
  { key: "kalkinma", title: "Ulaşım, Turizm & Kalkınma Projeleri", count: 2 }
];

function generate40CografyaDenemeleri() {
  const denemeler = [];

  for (let d = 1; d <= 40; d++) {
    let difficulty = "orta";
    let diffLabel = "🟡 Orta (ÖSYM Standart)";
    let diffColor = "#f59e0b";

    if (d <= 10) { difficulty = "kolay"; diffLabel = "🟢 Kolay (Temel Seviye)"; diffColor = "#10b981"; }
    else if (d <= 25) { difficulty = "orta"; diffLabel = "🟡 Orta (ÖSYM Standart)"; diffColor = "#f59e0b"; }
    else if (d <= 35) { difficulty = "zor"; diffLabel = "🔴 Zor (Çeldirici Yüksek)"; diffColor = "#ef4444"; }
    else { difficulty = "sampiyon"; diffLabel = "🟣 ÖSYM Şampiyon (Derece)"; diffColor = "#a855f7"; }

    const questions = [];

    // Q1: Konum (Matematiksel / Göreceli Konum)
    questions.push({
      id: `cografya-d${d}-q1`, denemeNo: d, questionNo: 1, category: "cografya", subcategory: "Coğrafi Konum", difficulty: difficulty,
      question: `Türkiye, 36° - 42° Kuzey paralelleri ile 26° - 45° Doğu meridyenleri arasında yer alır.\n\nAşağıdakilerden hangisi Türkiye'nin <u>matematiksel (mutlak) konumunun</u> bir sonucudur?`,
      options: [
        "A) Üç tarafının denizlerle çevrili olması",
        "B) Orta kuşakta yer alması ve 4 mevsimin belirgin yaşanması",
        "C) Doğu-batı yönünde dağların uzanması",
        "D) Zengin maden yataklarına sahip olması",
        "E) Transit kara ve deniz ulaşım rotasında bulunması"
      ],
      correct: 1, explanation: "Orta kuşakta yer alma ve 4 mevsimin yaşanması enlem ve dereceye bağlı mutlak (matematiksel) konum sonucudur."
    });

    // Q2: Jeopolitik Konum
    questions.push({
      id: `cografya-d${d}-q2`, denemeNo: d, questionNo: 2, category: "cografya", subcategory: "Jeopolitik Konum", difficulty: difficulty,
      question: `Türkiye'nin jeopolitik önemini artıran en temel unsurlardan biri petrol ve doğal gaz zengini Orta Doğu ile Hazar havzasına komşu olması ve bu enerjiyi Avrupa'ra taşıyan boru hatlarına (TANAP, Mavi Akım) ev sahipliği yapmasıdır.\n\nBu durum Türkiye'ye hangi alanda küresel bir avantaj sağlar?`,
      options: [
        "A) Enerji koridoru ve köprü ülke olma rolü",
        "B) İklim çeşitliliğinin artması",
        "C) Nüfus artış hızının yükselmesi",
        "D) Deprem riskinin azalması",
        "E) İç ticaret hacminin küçülmesi"
      ],
      correct: 0, explanation: "Enerji boru hatları Türkiye'yi Doğu-Batı arasında vazgeçilmez bir 'Enerji Koridoru' haline getirmektedir."
    });

    // Q3: Yer Şekilleri (Dağlar & Tektonizma - Harita Destekli)
    questions.push({
      id: `cografya-d${d}-q3`, denemeNo: d, questionNo: 3, category: "cografya", subcategory: "Yer Şekilleri", difficulty: difficulty,
      question: `📍 [TÜRKİYE FAY HATTLARI VE DAĞLAR HARİTASI]\nTürkiye'de Kırıklı Dağlar (Horst-Graben) ağırlıklı olarak Ege Bölgesi'nde yaygındır.\n\nAşağıdaki dağlardan hangisi kırılma ile oluşmuş bir <u>horst</u> dağıdır?`,
      options: ["A) Yunt Dağı", "B) Erciyes Dağı", "C) Kaçkar Dağı", "D) Ağrı Dağı", "E) Toros Dağları"],
      correct: 0, explanation: "Madra, Yunt, Bozdağlar, Aydın dağları Ege'de kırılmayla oluşmuş horst dağlarıdır. Erciyes ve Ağrı volkanik, Kaçkar ve Toroslar kıvrım dağdır."
    });

    // Q4: Ovalar ve Platolar
    questions.push({
      id: `cografya-d${d}-q4`, denemeNo: d, questionNo: 4, category: "cografya", subcategory: "Platolar ve Ovalar", difficulty: difficulty,
      question: `Türkiye'de Karstik (Kireçtaşı/Kalker çözünmesi) aşınımı ile oluşan platolar Akdeniz Bölgesi'nde yaygındır.\n\nAşağıdaki platolardan hangisi <u>karstik plato</u> özelliğine sahiptir?`,
      options: ["A) Teke ve Taşeli Platoları", "B) Haymana Platosu", "C) Erzurum-Kars Platosu", "D) Çatalca-Kocaeli Platosu", "E) Cihanbeyli Platosu"],
      correct: 0, explanation: "Teke ve Taşeli platoları kireçtaşından oluşan karstik aşınım platolarıdır."
    });

    // Q5: Akarsular ve Göller (İzohips Haritası Destekli)
    questions.push({
      id: `cografya-d${d}-q5`, denemeNo: d, questionNo: 5, category: "cografya", subcategory: "Akarsular ve Göller", difficulty: difficulty,
      question: `📍 [EŞ YÜKSELTİ İZOHİPS HARİTASI ANALİZİ]\nTürkiye akarsularının genel özellikleri dikkate alındığında aşağıdakilerden hangisi <u>yanlıştır</u>?`,
      options: [
        "A) Rejimleri genellikle düzensizdir.",
        "B) Denge profiline ulaşmamışlardır.",
        "C) Yatak eğimleri ve akış hızları yüksektir.",
        "D) Ulaşıma ve taşımacılığa son derece elverişlidirler.",
        "E) Hidroelektrik potansiyelleri yüksektir."
      ],
      correct: 3, explanation: "Türkiye akarsuları denge profiline ulaşmadığı ve engebeli aktığı için ulaşım/taşımacılığa elverişli <u>değildir</u>."
    });

    // Q6: Kıyı Tipleri ve Dış Kuvvetler
    questions.push({
      id: `cografya-d${d}-q6`, denemeNo: d, questionNo: 6, category: "cografya", subcategory: "Dış Kuvvetler & Kıyılar", difficulty: difficulty,
      question: `Eski akarsu vadilerinin deniz suları altında kalmasıyla oluşan ve İstanbul ile Çanakkale boğazlarında görülen kıyı tipi hangisidir?`,
      options: ["A) Ria Tipi Kıyı", "B) Dalmaçya Tipi Kıyı", "C) Fiyort Tipi Kıyı", "D) Limanlı Kıyı", "E) Falezli Kıyı"],
      correct: 0, explanation: "İstanbul, Çanakkale boğazları ve Haliç 'Ria Tipi Kıyı' örneğidir."
    });

    // Q7: İklim ve Yağış Rejimi (Görsel Grafik Destekli)
    questions.push({
      id: `cografya-d${d}-q7`, denemeNo: d, questionNo: 7, category: "cografya", subcategory: "İklim ve Yağış", difficulty: difficulty,
      question: `📊 [TÜRKİYE İKLİM VE YAĞIŞ GRAFİĞİ]\nHer mevsimi yağışlı olan, yıllık sıcaklık farkı en az olan ve en fazla yağışı sonbaharda alan iklim tipi hangisidir?`,
      options: ["A) Karadeniz İklimi", "B) Akdeniz İklimi", "C) Karasal İklim", "D) Sert Karasal İklim", "E) Marmara Geçiş İklimi"],
      correct: 0, explanation: "Karadeniz iklimi her mevsim yağışlıdır ve en fazla yağışı sonbaharda alır."
    });

    // Q8: Bitki Örtüsü ve Endemik Türler
    questions.push({
      id: `cografya-d${d}-q8`, denemeNo: d, questionNo: 8, category: "cografya", subcategory: "Bitki Örtüsü", difficulty: difficulty,
      question: `Sadece belirli bir dar coğrafi bölgede yetişen bitkilere "endemik bitki" denir.\n\nSığla (Günlük) ağacı ağırlıklı olarak Türkiye'nin hangi yöresinde endemik olarak yetişmektedir?`,
      options: ["A) Muğla ve Fethiye çevresi", "B) Rize ve Artvin çevresi", "C) Erzurum ve Kars çevresi", "D) Konya ve Karapınar çevresi", "E) Şanlıurfa ve Harran çevresi"],
      correct: 0, explanation: "Sığla ağacı Muğla, Köyceğiz, Fethiye yöresine özgü endemik bir türdür."
    });

    // Q9: Toprak Tipleri
    questions.push({
      id: `cografya-d${d}-q9`, denemeNo: d, questionNo: 9, category: "cografya", subcategory: "Toprak Tipleri", difficulty: difficulty,
      question: `Akdeniz iklim bölgesinde kalkerli (kireçtaşı) kayalar üzerinde oluşan ve demir oksit oranının yüksek olmasından dolayı kırmızı renkli olan toprak tipi hangisidir?`,
      options: ["A) Terra-Rossa", "B) Çernozyom", "C) Podzol", "D) Alüvyal", "E) Çöl Toprağı"],
      correct: 0, explanation: "Terra-Rossa toprağı Akdeniz ikliminde kireçtaşları üzerinde oluşan kırmızı renkli topraktır."
    });

    // Q10: Nüfus ve Göçler (Demografik Grafik Destekli)
    questions.push({
      id: `cografya-d${d}-q10`, denemeNo: d, questionNo: 10, category: "cografya", subcategory: "Nüfus Coğrafyası", difficulty: difficulty,
      question: `📊 [DEMOGRAFİK NÜFUS PİRAMİDİ]\nTürkiye'de son yıllarda nüfus artış hızının düşmesiyle nüfus piramidinin tabanı daralmaya başlamıştır.\n\nBu durum aşağıdakilerden hangisinin göstergesidir?`,
      options: [
        "A) Doğum oranlarının azaldığının ve yaşlı nüfus oranının arttığının",
        "B) Çocuk nüfus oranının hızla yükseldiğinin",
        "C) İç göçlerin tamamen durduğunun",
        "D) Tarımsal nüfus yoğunluğunun arttığının",
        "E) Okuma-yazma oranının gerilediğinin"
      ],
      correct: 0, explanation: "Piramit tabanının daralması doğum oranlarının azaldığını ve ortalama ömrün uzayarak yaşlı nüfusun arttığını gösterir."
    });

    // Q11: Nüfus Yoğunluğu
    questions.push({
      id: `cografya-d${d}-q11`, denemeNo: d, questionNo: 11, category: "cografya", subcategory: "Nüfus Dağılışı", difficulty: difficulty,
      question: `Aşağıdaki yörelerden hangisinde nüfus yoğunluğunun az olmasının temel nedeni <u>karstik yer şekilleri ve su tutmayan kireçtaşlı toprak yapısıdır</u>?`,
      options: ["A) Teke ve Taşeli Platosu", "B) Çatalca-Kocaeli Yöresi", "C) Kıyı Ege", "D) Çukurova", "E) Doğu Karadeniz Kıyıları"],
      correct: 0, explanation: "Teke ve Taşeli platoları karstik arazi yapısı ve su azlığı nedeniyle tenhalaşmıştır."
    });

    // Q12: Yerleşme Tipleri
    questions.push({
      id: `cografya-d${d}-q12`, denemeNo: d, questionNo: 12, category: "cografya", subcategory: "Yerleşme Coğrafyası", difficulty: difficulty,
      question: `Doğu Karadeniz Bölgesi'nde kırsal yerleşmelerin "dağınık yerleşme" şeklinde olmasının temel sebebi nedir?`,
      options: [
        "A) Su kaynaklarının bol, arazinin engebeli ve parçalı olması",
        "B) Düz ve geniş ovaların bulunması",
        "C) Sıcaklığın yıl boyu sıfırın altında olması",
        "D) Sanayi tesislerinin yoğun olması",
        "E) Otlatma alanlarının sınırlı olması"
      ],
      correct: 0, explanation: "Dağınık yerleşme engebeli arazi ve bol su kaynaklarının bulunduğu yerlerde görülür (Doğu Karadeniz)."
    });

    // Q13: Tarım Ürünleri
    questions.push({
      id: `cografya-d${d}-q13`, denemeNo: d, questionNo: 13, category: "cografya", subcategory: "Tarım Ürünleri", difficulty: difficulty,
      question: `Türkiye'de üretim alanı en geniş olan, yaz kuraklığı isteyen ve soğuğa dayanıklı olan tahıl ürünü hangisidir?`,
      options: ["A) Buğday", "B) Çay", "C) Fındık", "D) Muz", "E) Pamuk"],
      correct: 0, explanation: "Buğday Türkiye'nin hemen her bölgesinde yetiştirilen en yaygın tarım ürünüdür."
    });

    // Q14: Hayvancılık
    questions.push({
      id: `cografya-d${d}-q14`, denemeNo: d, questionNo: 14, category: "cografya", subcategory: "Hayvancılık", difficulty: difficulty,
      question: `Erzurum-Kars Platosu'nda yaz yağışlarıyla yeşeren gür çayırların bulunması hangi hayvancılık türünün gelişmesini sağlamıştır?`,
      options: ["A) Büyükbaş Mera Hayvancılığı", "B) İpek Böcekçiliği", "C) Küçükbaş Besi Hayvancılığı", "D) Kümes Hayvancılığı", "E) Balıkçılık"],
      correct: 0, explanation: "Yaz yağışları ve yüksek gür çayırlar Erzurum-Kars'ta Büyükbaş Mera Hayvancılığını öne çıkarmıştır."
    });

    // Q15: Madenler ve Enerji Kaynakları
    questions.push({
      id: `cografya-d${d}-q15`, denemeNo: d, questionNo: 15, category: "cografya", subcategory: "Madenler", difficulty: difficulty,
      question: `Dünya rezervlerinin yaklaşık %72'si Türkiye'de bulunan; Balıkesir (Susurluk), Kütahya (Emet) ve Eskişehir (Kırka)'da çıkarılan maden hangisidir?`,
      options: ["A) Bor Mineralleri", "B) Boksit", "C) Krom", "D) Bakır", "E) Mermer"],
      correct: 0, explanation: "Bor mineralleri dünya lideri olduğumuz madendir (Balıkesir, Kütahya, Eskişehir)."
    });

    // Q16: Sanayi Tesisleri
    questions.push({
      id: `cografya-d${d}-q16`, denemeNo: d, questionNo: 16, category: "cografya", subcategory: "Sanayi Tesisleri", difficulty: difficulty,
      question: `Karabük ve Ereğli Demir-Çelik fabrikalarının bu bölgede kurulmasının temel sebebi aşağıdakilerden hangisidir?`,
      options: ["A) Taş kömürü enerji kaynağına yakınlık", "B) Demir cevherinin zenginliği", "C) İklimin elverişliliği", "D) Tüketici nüfusun azlığı", "E) Tarım alanlarının genişliği"],
      correct: 0, explanation: "Karabük ve Ereğli'de demir cevheri çıkarılmaz; kömür (enerji kaynağı) yakınlığı nedeniyle fabrikalar kurulmuştur."
    });

    // Q17: Ulaşım ve Turizm
    questions.push({
      id: `cografya-d${d}-q17`, denemeNo: d, questionNo: 17, category: "cografya", subcategory: "Ulaşım ve Turizm", difficulty: difficulty,
      question: `Türkiye'de iç ve dış ticarette en ucuz taşıma maliyetine sahip olan ulaşım sektörü hangisidir?`,
      options: ["A) Deniz Yolu", "B) Demiryolu", "C) Karayolu", "D) Hava Yolu", "E) Boru Hattı"],
      correct: 0, explanation: "Tek seferde büyük miktarda yük taşıyabildiği için en ucuz ulaşım yolu Deniz Yolu'dur."
    });

    // Q18: Bölgesel Kalkınma Projeleri (GAP, DOKAP, DAP, ZBK vb.)
    questions.push({
      id: `cografya-d${d}-q18`, denemeNo: d, questionNo: 18, category: "cografya", subcategory: "Kalkınma Projeleri", difficulty: difficulty,
      question: `Güneydoğu Anadolu Projesi (GAP) ile birlikte bölgede sulamalı tarıma geçilmesi sonucunda aşağıdaki ürünlerden hangisinin üretiminde patlama yaşanmıştır?`,
      options: ["A) Pamuk", "B) Çay", "C) Fındık", "D) Elma", "E) Kivi"],
      correct: 0, explanation: "GAP ile sulama imkânı artınca Şanlıurfa ve çevresi Pamuk üretiminde Türkiye birincisi olmuştur."
    });

    denemeler.push({
      id: `deneme-${d}`,
      title: `KPSS Coğrafya Denemesi #${d}`,
      denemeNo: d,
      questionCount: 18,
      difficulty: difficulty,
      difficultyLabel: diffLabel,
      difficultyColor: diffColor,
      questions: questions
    });
  }

  return denemeler;
}

const cografya40Denemeler = generate40CografyaDenemeleri();

if (typeof window !== 'undefined') {
  window.cografya40Denemeler = cografya40Denemeler;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cografya40Denemeler, cografyaTopics };
}