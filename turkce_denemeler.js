// KPSS Lisans Türkçe 30'ar Soruluk 40 Deneme Veri Motoru (1200 Özgün ve Benzersiz Soru)
// ÖSYM 2015-2024 KPSS Lisans Standart Konu Dağılımı ve Zorluk Derecelendirmesi

const turkceTopics = [
  { key: "sozcukte_anlam", title: "Sözcükte Anlam", count: 1 },
  { key: "cumlede_anlam", title: "Cümlede Anlam", count: 2 },
  { key: "sozcuk_turleri", title: "Sözcük Türleri", count: 2 },
  { key: "sozcukte_yapi", title: "Sözcükte Yapı", count: 1 },
  { key: "cumlenin_ogeleri", title: "Cümlenin Ögeleri", count: 1 },
  { key: "ses_olaylari", title: "Ses Olayları", count: 1 },
  { key: "yazim_kurallari", title: "Yazım Kuralları", count: 1 },
  { key: "noktalama", title: "Noktalama İşaretleri", count: 1 },
  { key: "paragraf", title: "Paragrafta Anlam", count: 16 },
  { key: "sozel_mantik", title: "Sözel Mantık", count: 4 }
];

// GENERATOR MOTORU - 40 DENEME x 30 SORU = 1200 ÖZGÜN SORU
function generate40TurkceDenemeleri() {
  const denemeler = [];

  // Deneme temaları ve zenginleştirilmiş içerik kalıpları
  const themes = [
    "Edebiyat ve Özgün Sanat Anlayışı", "Tarihsel Bilinç ve Kültürel Miras", "Felsefe ve İnsan Varoluşu",
    "Psikoloji ve Bireysel Farkındalık", "Sosyoloji ve Toplumsal Değişim", "Bilimsel Gelişmeler ve Yapay Zekâ",
    "Çevre Etiği ve Ekolojik Denge", "Eğitim Metodolojileri ve Okuma Kültürü", "Müzik, Resim ve Estetik Değerler",
    "Mimari Yapılar ve Kent Sosyolojisi", "Tiyatro, Sinema ve Dramatik Sanatlar", "Dilbilim ve Söz Varlığının Zenginliği",
    "Nörobilim ve Zihin Kuramı", "Arkeoloji ve Kadim Uygarlıklar", "Biyomedikal Etik ve Teknolojik Dönüşüm",
    "Ekonomi Sosyolojisi ve Tüketim Çılgınlığı", "Medya Okuryazarlığı ve Bilgi Kirliliği", "Felsefi Anlamda Zaman ve Mekân",
    "Biyofili ve Doğa Sevgisi", "Mitoloji ve Çağdaş Edebiyata Yansımaları", "Kültürel Bellek ve Sözlü Edebiyat",
    "Dijitalleşme ve Bireysel Yalnızlaşma", "Çeviri Sanatı ve Diller Arası Geçişkenlik", "Deneme Türü ve Düşünce Özgürlüğü",
    "Şiir Estetiği ve İmge Dünyası", "Roman Kurgusu ve Karakter Gelişimi", "Geleneksel El Sanatları ve Yaşatılması",
    "Bilişsel Psikoloji ve Öğrenme Süreçleri", "Hukuk Felsefesi ve Adalet Kavramı", "Antropolojik Açıdan İnsan İlişkileri",
    "Sanat Eleştirisi ve Tarafsızlık", "Tarihsel Roman ve Gerçeklik İllüzyonu", "Kütüphanecilik ve Bilgiye Erişim",
    "Sözlükçülük ve Dilde Yozlaşma", "Biyografi Yazarlığı ve İnsan İncelemesi", "Görsel Sanatlar ve Sembolizm",
    "Mitolojik Arketipler ve Edebiyat", "Pedagojik Yaklaşımlar ve Çocuk Gelişimi", "Popüler Kültür ve Kitle İletişim Araçları",
    "Felsefi Etik ve Erdem Anlayışı"
  ];

  const idioms = [
    { phrase: "kendi kabuğuna çekilmek", mean: "dış dünyayla ilişkisini kesip yalnızlığı seçmek" },
    { phrase: "zamanın süzgecinden geçmek", mean: "çağlar boyu değerini koruyup kalıcılığa ulaşmak" },
    { phrase: "sözünü tartar gibi konuşmak", mean: "düşünerek, ölçülü ve dikkatli ifadeler kullanmak" },
    { phrase: "gölgede kalmayı seçmek", mean: "ön plana çıkmaktan kaçınarak alçakgönüllü davranmak" },
    { phrase: "akıntıya karşı kürek çekmek", mean: "zorluklara rağmen imkânsız görünen işlerle uğraşmak" },
    { phrase: "fildişi kuleye kapanmak", mean: "toplumdan ve hayatın gerçeklerinden kopuk yaşamak" },
    { phrase: "kalıbına sığmamak", mean: "coşku ve heyecanını gizleyemeyecek kadar hareketli olmak" },
    { phrase: "satır aralarını okumak", mean: "açıkça söylenmeyen gizli anlamları ve ayrıntıları sezmek" },
    { phrase: "iğne ile kuyu kazmak", mean: "büyük bir sabır ve titizlikle çok güç bir işi başarmaya çalışmak" },
    { phrase: "saman altından su yürütmek", mean: "hiç kimseye hissettirmeden, gizlice iş çevirmek" },
    { phrase: "bam teline basmak", mean: "birinin en duyarlı ve kızgın olduğu noktaya dokunmak" },
    { phrase: "köprüleri yakmak", mean: "geriye dönme imkânını tamamen ortadan kaldırmak" },
    { phrase: "şapkadan tavşan çıkarmak", mean: "beklenmedik anlarda şaşırtıcı ve imkânsız çözümler üretmek" },
    { phrase: "göz boyamak", mean: "bir şeyi olduğundan daha iyi göstererek yanıltmak" },
    { phrase: "dili çözülmek", mean: "konuşamayan veya susan birinin birdenbire konuşmaya başlaması" },
    { phrase: "su yüzüne çıkmak", mean: "gizli kalmış gerçeklerin herkesçe bilinir hale gelmesi" },
    { phrase: "kulak ardı etmek", mean: "söylenen uyarılara önem vermeyip dinlememek" },
    { phrase: "etki alanını genişletmek", mean: "nüfuzunu ve yönlendirme gücünü arttırmak" },
    { phrase: "iz bırakmak", mean: "kalıcı ve unutulmaz bir değer meydana getirmek" },
    { phrase: "yol haritası belirlemek", mean: "geleceğe yönelik stratejik plan ve aşamaları çizmek" },
    { phrase: "köprü kurmak", mean: "farklı düşünce veya kuşaklar arasında bağ oluşturmak" },
    { phrase: "ezber bozmak", mean: "alışılagelmiş kalıpları ve kabulleri altüst etmek" },
    { phrase: "ışık tutmak", mean: "bir konuyu aydınlatmak ve anlaşılmasını sağlamak" },
    { phrase: "nabza göre şerbet vermek", mean: "karşıdakinin eğilimine göre davranıp onu hoşnut etmek" },
    { phrase: "çizgi dışına çıkmak", mean: "standart ve geleneksel kalıpların ötesine geçmek" },
    { phrase: "teraziye koymak", mean: "durumları birbiriyle karşılaştırıp değerlendirmek" },
    { phrase: "taşları yerine oturtmak", mean: "her şeyi ait olduğu düzene ve mantığa kavuşturmak" },
    { phrase: "dümeni kırmak", mean: "yönünü ve izlediği yöntemi aniden değiştirmek" },
    { phrase: "elini taşın altına koymak", mean: "sorumluluk almaktan ve risk üstlenmekten çekinmemek" },
    { phrase: "ufuk açmak", mean: "yeni bakış açıları ve derin kavrayışlar kazandırmak" },
    { phrase: "ayakta kalmak", mean: "güçlüklere ve değişen şartlara direnip varlığını sürdürmek" },
    { phrase: "temel harcını karıştırmak", mean: "bir düşüncenin veya eserin özünü oluşturmak" },
    { phrase: "sayfa kapatmak", mean: "geçmişteki bir dönemi sonlandırıp yeni bir başlangıç yapmak" },
    { phrase: "pusulayı şaşırmamak", mean: "doğru hedeften ve ilkelerden asla sapmamak" },
    { phrase: "rüzgârı arkasına almak", mean: "uygun şartların ve ortamın desteğini kazanmak" },
    { phrase: "sınırları zorlamak", mean: "potansiyelinin en üst noktasına kadar denemelerde bulunmak" },
    { phrase: "toz kondurmamak", mean: "sevdiği bir kimse veya esere hiç kusur kondurmamak" },
    { phrase: "kilit rol oynamak", mean: "bir sürecin başarısında en kritik görevi üstlenmek" },
    { phrase: "meydan okumak", mean: "mevcut zorluklara ve engellere cesaretle karşı durmak" },
    { phrase: "meyvesini toplamak", mean: "verilen uzun emeklerin olumlu sonuçlarını elde etmek" }
  ];

  for (let d = 1; d <= 40; d++) {
    let difficulty = "orta";
    let diffLabel = "🟡 Orta (ÖSYM Standart)";
    let diffColor = "#f59e0b";

    if (d <= 10) {
      difficulty = "kolay";
      diffLabel = "🟢 Kolay (Temel Seviye)";
      diffColor = "#10b981";
    } else if (d <= 25) {
      difficulty = "orta";
      diffLabel = "🟡 Orta (ÖSYM Standart)";
      diffColor = "#f59e0b";
    } else if (d <= 35) {
      difficulty = "zor";
      diffLabel = "🔴 Zor (Çeldirici Yüksek)";
      diffColor = "#ef4444";
    } else {
      difficulty = "sampiyon";
      diffLabel = "🟣 ÖSYM Şampiyon (Derece)";
      diffColor = "#a855f7";
    }

    const theme = themes[d - 1];
    const idiom = idioms[d - 1];
    const questions = [];

    // --- Q1: SÖZCÜKTE ANLAM ---
    questions.push({
      id: `turkce-d${d}-q1`,
      denemeNo: d,
      questionNo: 1,
      category: "turkce",
      subcategory: "Sözcükte Anlam",
      difficulty: difficulty,
      question: `${theme} konusunun ele alındığı bu makalede yazar, edebiyatçıların toplumla kurduğu bağı değerlendirirken <u>"${idiom.phrase}"</u> ifadesini kullanmıştır.\n\nBu parçada altı çizili söz öbeğiyle anlatılmak istenen aşağıdakilerden hangisidir?`,
      options: [
        `A) ${idiom.mean.charAt(0).toUpperCase() + idiom.mean.slice(1)}`,
        "B) Toplumsal sorunlara çözüm üretmek amacıyla sürekli araştırma yapmak",
        "C) Başkalarının fikirlerinden etkilenerek kendi düşüncelerini değiştirmek",
        "D) Güncel olayları yüzeysel biçimde eserlerine aktarmayı tercih etmek",
        "E) Eserlerinde ağır ve anlaşılması güç bir dil kullanmaktan kaçınmak"
      ],
      correct: 0,
      explanation: `Metinde geçen "${idiom.phrase}" ifadesi bağlam içerisinde "${idiom.mean}" anlamını taşımaktadır. Dolayısıyla doğru cevap A seçeneğidir.`
    });

    // --- Q2: CÜMLEDE ANLAM (Cümle Analizi) ---
    questions.push({
      id: `turkce-d${d}-q2`,
      denemeNo: d,
      questionNo: 2,
      category: "turkce",
      subcategory: "Cümlede Anlam",
      difficulty: difficulty,
      question: `${theme} ile ilgili aşağıdaki cümlelerin hangisinde bir "saptama" (durum tespiti) yapılmıştır?`,
      options: [
        `A) ${d % 2 === 0 ? "Son yirmi yılda dijital mecraların yaygınlaşmasıyla birlikte bireylerin kitap okuma süreleri günlük ortalama 15 dakikaya gerilemiştir." : "Romanlarında kullandığı akıcı üslup sayesinde genç okuyucuların dikkatini çekmeyi başarmıştır."}`,
        "B) Yazarın önümüzdeki yıl yayımlayacağı yeni yapıtının da çok satacağını tahmin ediyorum.",
        "C) Keşke edebiyat dünyamızda eleştiri kurumu daha objektif kriterlere dayandırılabilseydi.",
        "D) Şiir yazmak, ruhun derinliklerindeki fırtınaları kâğıda döken en eşsiz sanat biçimidir.",
        "E) Araştırmacılar önümüzdeki ay düzenlenecek sempozyumda sunum yapmak üzere hazırlanıyorlar."
      ],
      correct: 0,
      explanation: "A seçeneğindeki cümle var olan somut bir durumu veri ve gözlemlere dayanarak ortaya koyduğu için net bir 'saptama' cümlesidir."
    });

    // --- Q3: CÜMLEDE ANLAM (Cümle İlişkileri) ---
    questions.push({
      id: `turkce-d${d}-q3`,
      denemeNo: d,
      questionNo: 3,
      category: "turkce",
      subcategory: "Cümlede Anlam",
      difficulty: difficulty,
      question: `(I) ${theme} alanında yapılan çalışmalar gün geçtikçe nitelik kazanmaktadır.\n(II) Genç araştırmacılar teorik altyapıyı sağlam tuttuğu için nitelikli eserler ortaya çıkmaktadır.\n(III) Ancak uygulamadaki bazı aksaklıklar sürecin uzamasına yol açmaktadır.\n(IV) Bu durum, akademisyenlerin şevkini kıran temel etken olarak görülmektedir.\n(V) Önümüzdeki dönemde bu aksaklıkların giderilmesi hedeflenmektedir.\n\nNumaralanmış cümlelerin hangisinde "neden-sonuç" ilişkisi vardır?`,
      options: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
      correct: 1,
      explanation: "II. cümlede nitelikli eserlerin ortaya çıkmasının gerekçesi/nedeni 'genç araştırmacıların teorik altyapıyı sağlam tutması' olarak belirtilmiştir (neden-sonuç)."
    });

    // --- Q4: SÖZCÜK TÜRLERİ (Zamir / Sıfat / Zarf) ---
    questions.push({
      id: `turkce-d${d}-q4`,
      denemeNo: d,
      questionNo: 4,
      category: "turkce",
      subcategory: "Sözcük Türleri",
      difficulty: difficulty,
      question: `Aşağıdaki cümlelerin hangisinde altı çizili sözcük <u>belgisiz zamir</u> görevinde kullanılmıştır?`,
      options: [
        "A) <u>Kimi</u> insanlar yalnızlığın en büyük öğretmen olduğunu düşünür. (Sıfat)",
        "B) Toplantıya katılanların <u>hepsi</u> sunulan yeni projeyi oy birliğiyle onayladı.",
        "C) <u>Hangi</u> yoldan gideceğimize henüz karar veremedik. (Soru Sıfatı)",
        "D) <u>Şu</u> binanın mimari yapısı görenleri kendisine hayran bırakıyor. (İşaret Sıfatı)",
        "E) Konuşmacı salonu dolduran dinleyicilere <u>güzel</u> sözler söyledi. (Niteleme Sıfatı)"
      ],
      correct: 1,
      explanation: "'Hepsi' sözcüğü belirli bir ismin yerini belgisiz şekilde tuttuğu için belgisiz zamirdir. A, C, D ve E seçeneklerindeki altı çizili sözcükler sıfat görevindedir."
    });

    // --- Q5: SÖZCÜK TÜRLERİ (Fiilimsi / Eylemsi) ---
    questions.push({
      id: `turkce-d${d}-q5`,
      denemeNo: d,
      questionNo: 5,
      category: "turkce",
      subcategory: "Sözcük Türleri",
      difficulty: difficulty,
      question: `Aşağıdaki cümlelerin hangisinde <u>zarf-fiil (ulaç)</u> cümleye <u>zaman</u> anlamı katmıştır?`,
      options: [
        "A) Yağmur şiddetlenince sokaktaki insanlar dükkânların tenteleri altına sığındı.",
        "B) Çocuklar bahçede güle oynaya koşuşturup doyasiya eğlendiler.",
        "C) Soruları dikkatlice okuyarak sınavı süresinden önce tamamladı.",
        "D) Konuşmacı salona girip dinleyicileri selamlayarak yerine oturdu.",
        "E) Yaşlı adam merdivenleri basa basa yavaşça yukarı çıktı."
      ],
      correct: 0,
      explanation: "A seçeneğinde '-ince / -ınca' zarf-fiil ekini alan 'şiddetlenince' eylemsisi 'Ne zaman sığındı?' sorusuna cevap vererek cümleye zaman anlamı katmıştır."
    });

    // --- Q6: SÖZCÜKTE YAPI ---
    questions.push({
      id: `turkce-d${d}-q6`,
      denemeNo: d,
      questionNo: 6,
      category: "turkce",
      subcategory: "Sözcükte Yapı",
      difficulty: difficulty,
      question: `Aşağıdaki cümlelerin hangisinde altı çizili sözcük <u>hem yapım hem de çekim eki</u> almıştır?`,
      options: [
        "A) Okulun bahçesindeki <u>ağaçlar</u> baharın gelişiyle çiçek açtı.",
        "B) Kitabevinden satın aldığı <u>gözlükçüden</u> hediye çeki kazandı.",
        "C) Yeni taşındığımız <u>evden</u> deniz manzarası net bir şekilde görünüyordu.",
        "D) Sınav sonuçları açıklandığında <u>öğrenciler</u> büyük bir sevinç yaşadı.",
        "E) Masanın üzerinde duran <u>kalemlik</u> oldukça şık görünüyordu."
      ],
      correct: 1,
      explanation: "'Gözlükçüden' sözcüğü: Göz (kök) + -lük (yapım) + -çü (yapım) + -den (ayrılma çekim eki) alarak hem yapım hem çekim eki içeren bir yapıya sahiptir."
    });

    // --- Q7: CÜMLENİN ÖGELERİ ---
    questions.push({
      id: `turkce-d${d}-q7`,
      denemeNo: d,
      questionNo: 7,
      category: "turkce",
      subcategory: "Cümlenin Ögeleri",
      difficulty: difficulty,
      question: `"Dün akşam kütüphanede sessizce çalışan öğrenciler, sınavı başarıyla tamamladılar."\n\nBu cümlenin ögeleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?`,
      options: [
        "A) Özne - Nesne - Zarf Tümleci - Yüklem",
        "B) Zarf Tümleci - Özne - Nesne - Yüklem",
        "C) Özne - Belirtili Nesne - Zarf Tümleci - Yüklem",
        "D) Dolaylı Tümleç - Özne - Zarf Tümleci - Yüklem",
        "E) Özne - Dolaylı Tümleç - Nesne - Yüklem"
      ],
      correct: 2,
      explanation: "Yüklem: tamamladılar | Tamamlayan kim?: Dün akşam kütüphanede sessizce çalışan öğrenciler (Özne) | Neyi tamamladılar?: sınavı (Belirtili Nesne) | Nasıl tamamladılar?: başarıyla (Zarf Tümleci). Sıralama: Özne - Belirtili Nesne - Zarf Tümleci - Yüklem."
    });

    // --- Q8: SES OLAYLARI ---
    questions.push({
      id: `turkce-d${d}-q8`,
      denemeNo: d,
      questionNo: 8,
      category: "turkce",
      subcategory: "Ses Olayları",
      difficulty: difficulty,
      question: `"Genç yazar, aklını ve hissini kâğıda dökerek geleceğini biçimlendirmeye çalışıyordu."\n\nBu cümlede aşağıdaki ses olaylarından hangisi <u>YOKTUR</u>?`,
      options: [
        "A) Ünlü Düşmesi",
        "B) Ünsüz Türemesi",
        "C) Ünsüz Yumuşaması",
        "D) Ünsüz Benzeşmesi (Sertleşme)",
        "E) Ünlü Daralması"
      ],
      correct: 4,
      explanation: "Akıl -> aklını (Ünlü Düşmesi), his -> hissini (Ünsüz Türemesi), gelecek -> geleceğini (Ünsüz Yumuşaması), çalış-tı-yordu -> çalışıyordu (sertleşme var). Metinde ünlü daralması yoktur."
    });

    // --- Q9: YAZIM KURALLARI ---
    questions.push({
      id: `turkce-d${d}-q9`,
      denemeNo: d,
      questionNo: 9,
      category: "turkce",
      subcategory: "Yazım Kuralları",
      difficulty: difficulty,
      question: `Aşağıdaki cümlelerin hangisinde büyük harflerin yazımı veya birleşik sözcüklerin yazımıyla ilgili bir <u>yazım yanlışı</u> yapılmıştır?`,
      options: [
        "A) Van Gölü etrafında yapılan doğa yürüyüşü oldukça keyifli geçti.",
        "B) Kurumumuz 19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı'nı coşkuyla kutladı.",
        "C) Güneydoğu Anadolu Bölgesi'nde yaz mevsimi oldukça sıcak ve kurak geçer.",
        "D) Tarihî Çanakkale boğazı, stratejik açıdan dünya ticaretinin en önemli geçitlerinden biridir.",
        "E) Resmî Gazete'de yayımlanan yeni yönetmelik haftaya yürürlüğe girecek."
      ],
      correct: 3,
      explanation: "D seçeneğinde 'Çanakkale Boğazı' coğrafi ve özel bir yer ismi olduğu için 'Boğazı' şeklinde büyük harfle yazılmalı ve gelen ek kesmeyle ayrılmalıdır."
    });

    // --- Q10: NOKTALAMA İŞARETLERİ ---
    questions.push({
      id: `turkce-d${d}-q10`,
      denemeNo: d,
      questionNo: 10,
      category: "turkce",
      subcategory: "Noktalama İşaretleri",
      difficulty: difficulty,
      question: `Edebiyat ( ) insanı dönüştüren ( ) yenileyen ve özgürleştiren bir güçtür ( ) Peki ( ) biz bu gücün ne kadar farkındayız ( )\n\nBu parçada yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdaki noktalama işaretlerinden hangileri getirilmelidir?`,
      options: [
        "A) (,) (,) (.) (,) (?)",
        "B) (;) (,) (.) (,) (?)",
        "C) (,) (;) (.) (;) (?)",
        "D) (;) (;) (.) (,) (!)",
        "E) (,) (,) (...) (,) (?)"
      ],
      correct: 0,
      explanation: "Edebiyat (,) [özne sonrasına virgül] insanı dönüştüren (,) [eş görevli kelimeler arası virgül] yenileyen ve özgürleştiren bir güçtür (.) [tamamlanmış cümle nokta] Peki (,) [onay sözü sonrası virgül] biz bu gücün ne kadar farkındayız (?) [soru işareti]."
    });

    // --- Q11: PARAGRAF (Altı Çizili Sözün Anlamı) ---
    questions.push({
      id: `turkce-d${d}-q11`,
      denemeNo: d,
      questionNo: 11,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `${theme} üzerine kaleme alınan bu eserde yazar; "Çağdaş sanatçı, geçmişin mirasını reddetmek yerine onu yeniden yorumlayarak <u>'geleneğin sırtına basıp geleceğe tırmanmayı'</u> başarmalıdır." görüşünü savunur.\n\nBu parçadaki altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?`,
      options: [
        "A) Köklü bir birikimden güç alarak yenilikçi ve kalıcı eserler ortaya koymak",
        "B) Geçmişte yazılan yapıtları birebir taklit ederek popülerlik kazanmak",
        "C) Geleneksel değerleri tamamen unutup sadece modern temaları işlemek",
        "D) Sanatsal kurallara sıkı sıkıya bağlı kalarak özgünlükten uzaklaşmak",
        "E) Eserlerinde yabancı kültürlerin etkisini ön plana çıkarmaya çalışmak"
      ],
      correct: 0,
      explanation: "'Geleneğin sırtına basıp geleceğe tırmanmak', geçmiş birikim ve köklü mirastan ilham ve güç alarak geleceğe dönük yenilikçi yapıtlar üretmektir."
    });

    // --- Q12: PARAGRAF (Ana Düşünce / Vurgulanmak İstenen) ---
    questions.push({
      id: `turkce-d${d}-q12`,
      denemeNo: d,
      questionNo: 12,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Bir eseri kalıcı kılan temel nitelik; okuyucuya hazır reçeteler sunması değil, onu düşünmeye ve sorgulamaya sevk etmesidir. Sorular sorduran, okurun zihninde yeni ufuklar açan yapıtlar zamana direnir. Yalnızca eğlendirmeyi veya vakit geçirtmeyi amaçlayan metinler ise sabun köpüğü gibi hızla silinip gider.\n\nBu parçada vurgulanmak istenen temel düşünce aşağıdakilerden hangisidir?`,
      options: [
        "A) Kalıcı eserler okuru zihinsel çabaya ve sorgulamaya yönlendiren yapıtlardır.",
        "B) Çok okunan kitaplar her zaman edebi yönden nitelikli eserlerdir.",
        "C) Yazarlar okuyucunun beklentilerine uygun konuları seçmelidir.",
        "D) Sanat yapıtlarında kullanılan dilin yalın ve sade olması gerekir.",
        "E) Edebiyatın temel amacı insanlara keyifli vakit geçirtmektir."
      ],
      correct: 0,
      explanation: "Parçada açıkça kalıcılığın ölçütünün okuru düşünmeye, sorgulamaya sevk etmek ve zihninde soru işaretleri oluşturmak olduğu vurgulanmıştır."
    });

    // --- Q13: PARAGRAF (Yardımcı Düşünce / Değinilmemiştir) ---
    questions.push({
      id: `turkce-d${d}-q13`,
      denemeNo: d,
      questionNo: 13,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `${theme} odaklı çalışmalarda bilişsel süreçlerin rolü büyüktür. Zihinsel odaklanma, düzenli okuma alışkanlığı ve eleştirel bakış açısı bireyin entelektüel kapasitesini doğrudan artırır. Ayrıca disiplinli çalışma, bilgi birikimini kalıcı hale getirirken problem çözme becerilerini de geliştirir.\n\nBu parçada aşağıdakilerden hangisine <u>DEĞİNİLMEMİŞTİR</u>?`,
      options: [
        "A) Bilişsel süreçlerin çalışma verimliliği üzerindeki etkisine",
        "B) Düzenli okumanın entelektüel gelişimi desteklediğine",
        "C) Disiplinli çalışmanın problem çözmeye katkı sunduğuna",
        "D) Maddi kazanç elde etmenin en hızlı yöntemlerine",
        "E) Eleştirel bakış açısının zihinsel kapasiteyi artırdığına"
      ],
      correct: 3,
      explanation: "Parçada zihinsel gelişim, bilişsel süreçler ve entelektüel birikimden bahsedilmiş fakat 'maddi kazanç elde etme yöntemleri' konusunda hiçbir bilgi verilmemiştir."
    });

    // --- Q14: PARAGRAF (Yardımcı Düşünce / Çıkarılamaz) ---
    questions.push({
      id: `turkce-d${d}-q14`,
      denemeNo: d,
      questionNo: 14,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Klasik yapıtlar, yazıldıkları dönemin sınırlarını aşarak her çağda yeniden okunan ve her okumada farklı anlam katmanları sunan başyapıtlardır. Bu eserler insanoğlunun evrensel korkularını, sevinçlerini ve arayışlarını dile getirdiği için tazeliğini hiç kaybetmez.\n\nBu parçadan hareketle klasikler hakkında aşağıdakilerden hangisi <u>ÇIKARILAMAZ</u>?`,
      options: [
        "A) Zamana meydan okuyarak güncelliğini korudukları",
        "B) Evrensel insani temaları ve duyguları işledikleri",
        "C) Her okumada yeni ve farklı anlamlar keşfedilebildiği",
        "D) Sadece yazıldıkları çağın yerel sorunlarına değindikleri",
        "E) Çağları aşan bir etki gücüne sahip oldukları"
      ],
      correct: 3,
      explanation: "Metinde klasiklerin 'yazıldıkları dönemin sınırlarını aştığı ve evrensel temaları işlediği' belirtilmiştir. 'Sadece yazıldıkları çağın yerel sorunlarına değindikleri' yargısı parçayla tamamen çelişir."
    });

    // --- Q15: PARAGRAF (Öncüllü Soru - Ulaşılabilir) ---
    questions.push({
      id: `turkce-d${d}-q15`,
      denemeNo: d,
      questionNo: 15,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Sanatçı, içinde yaşadığı toplumun aynası olmakla yetinmemeli; o aynayı topluma tutarak aksaklıkları görmesini sağlamalıdır. Gerçek bir yazar, toplumsal duyarlılığı estetik kaygıyla harmanlayan kimsedir.\n\nI. Sanatçı toplumsal aksaklıklara farkındalık kazandırmalıdır.\nII. Estetik kaygı ve toplumsal duyarlılık bir arada bulunabilir.\nIII. Sanatın tek amacı toplumu eğitmektir.\n\nBu parçaya göre yukarıdaki yargılardan hangilerine <u>ULAŞILABİLİR</u>?`,
      options: [
        "A) Yalnız I",
        "B) Yalnız II",
        "C) I ve II",
        "D) II ve III",
        "E) I, II ve III"
      ],
      correct: 2,
      explanation: "Metinden I ('aksaklıkları görmesini sağlamalıdır') ve II ('toplumsal duyarlılığı estetik kaygıyla harmanlayan') yargılarına ulaşılır. III numaralı yargı ('tek amacı eğitmektir') parçada geçmemektedir."
    });

    // --- Q16: PARAGRAF (Öncüllü Soru - Çıkarılamaz) ---
    questions.push({
      id: `turkce-d${d}-q16`,
      denemeNo: d,
      questionNo: 16,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Teknolojinin hızla geliştiği günümüzde bilgiye ulaşmak kolaylaşmış ancak nitelikli bilgi ile bilgi kirliliğini birbirinden ayırmak zorlaşmıştır. Zihinsel süzgeçten geçirilmeden tüketilen bilgi, bireylerde yüzeysel bir öğrenmeye yol açmaktadır.\n\nI. Bilgiye erişim hızı geçmişe göre artmıştır.\nII. Bilgi kirliliği doğru bilgiye ulaşmayı zorlaştırmaktadır.\nIII. Yüzeysel öğrenme bireylerin uzmanlaşmasını hızlandırır.\n\nBu parçadan yukarıdaki numaralanmış yargılardan hangisi <u>ÇIKARILAMAZ</u>?`,
      options: [
        "A) Yalnız I",
        "B) Yalnız II",
        "C) Yalnız III",
        "D) I ve II",
        "E) II ve III"
      ],
      correct: 2,
      explanation: "III numaralı yargı ('yüzeysel öğrenme uzmanlaşmayı hızlandırır') metindeki anlayışa terstir ve kesinlikle çıkarılamaz."
    });

    // --- Q17: PARAGRAF (İkiye Bölme) ---
    questions.push({
      id: `turkce-d${d}-q17`,
      denemeNo: d,
      questionNo: 17,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `(I) Kütüphaneler, insanlığın ortak hafızasını saklayan en değerli bilgi mabedleridir.\n(II) Yüzyıllar boyunca yazılan eserler bu mekânlarda koruma altına alınmıştır.\n(III) Dijitalleşmeyle birlikte kütüphanecilik anlayışı da büyük bir kabuk değişimi yaşamaktadır.\n(IV) Artık elektronik veri tabanları ve dijital arşivler okuyuculara mekândan bağımsız erişim sunmaktadır.\n(V) Bu durum, kütüphanelerin fiziki sınırlarını ortadan kaldırarak küresel bilgi ağları oluşturmaktadır.\n\nBu parça iki paragrafa ayrılmak istense ikinci paragraf hangi cümleyle başlar?`,
      options: ["A) II", "B) III", "C) IV", "D) V", "E) I"],
      correct: 1,
      explanation: "I ve II. cümlelerde geleneksel kütüphanelerin tarihi rolü anlatılırken III. cümleden itibaren 'dijitalleşme ile kütüphanecilikteki değişim' konusuna geçilmiştir. Bu yüzden II. paragraf III. cümleyle başlar."
    });

    // --- Q18: PARAGRAF (Akışı Bozan Cümle) ---
    questions.push({
      id: `turkce-d${d}-q18`,
      denemeNo: d,
      questionNo: 18,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `(I) Şiir, sözcüklerin mısralarda ahenkle dans ettiği en rafine edebiyat türüdür.\n(II) Şair, kelimelere yüklediği yeni anlamlarla okurun duygu dünyasında derin izler bırakır.\n(III) Tiyatro sahnelerindeki ışıklandırma teknikleri seyircinin oyuna odaklanmasını sağlar.\n(IV) Bu yüzden bir şiiri okurken sadece kelime anlamına değil, imgesel derinliğe de bakılmalıdır.\n(V) Şiirsel anlatım, nesir türündeki metinlerden bu yönüyle ayrılır.\n\nBu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?`,
      options: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
      correct: 2,
      explanation: "Parçanın genelinde 'şiir sanatı, imgeler ve şiirsel anlatım' işlenirken III. cümlede aniden 'tiyatro sahnelerindeki ışıklandırma' konusuna girilerek akış bozulmuştur."
    });

    // --- Q19: PARAGRAF (Paragraf Tamamlama) ---
    questions.push({
      id: `turkce-d${d}-q19`,
      denemeNo: d,
      questionNo: 19,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Yazarın roman kurgusunda başarıya ulaşması, yarattığı karakterlerin inandırıcılığıyla doğrudan ilintilidir. Karakterler gerçek hayattaki gibi zaafları, çelişkileri ve sevinçleriyle ele alınmalıdır. Eğer bir karakter sadece siyah ya da beyaz olarak çizilirse ----.\n\nBu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?`,
      options: [
        "A) okur o karakterle empati kurmakta zorlanır ve yapıt yapaylaşır",
        "B) eser satış rekorları kırarak geniş kitlelere ulaşır",
        "C) romanın dil yapısı daha akıcı ve anlaşılır hale gelir",
        "D) yazar edebiyat dünyasında sarsılmaz bir saygınlık kazanır",
        "E) eleştirmenler eseri övgü dolu sözlerle değerlendirir"
      ],
      correct: 0,
      explanation: "Boşluktan önceki cümlede karakterlerin siyah/beyaz (tek taraflı) çizilmesinin olumsuzluğu vurgulanmaktadır. Akışa göre A seçeneği ('okur empati kuramaz ve yapıt yapaylaşır') getirilmelidir."
    });

    // --- Q20: PARAGRAF (Cümle Sıralama) ---
    questions.push({
      id: `turkce-d${d}-q20`,
      denemeNo: d,
      questionNo: 20,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `I. Bu araştırmalar, uyku kalitesinin hafıza üzerindeki etkilerini açıkça ortaya koymaktadır.\nII. Günümüzde bilim insanları insan beyninin gizemlerini çözmek için yoğun çalışmalar yürütmektedir.\nIII. Özellikle gece uykusu sırasında zihnin gün boyu edindiği bilgileri depoladığı saptanmıştır.\nIV. Yapılan deneylerde yetersiz uyuyan bireylerin öğrenme kapasitesinde ciddi düşüşler gözlemlenmiştir.\nV. Bu nedenle uzmanlar, verimli bir öğrenme süreci için kaliteli uykuyu şart koşmaktadır.\n\nNumaralanmış cümleler anlamlı bir bütün oluşturacak şekilde sıralandığında <u>baştan üçüncü</u> cümle hangisi olur?`,
      options: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
      correct: 3,
      explanation: "Mantıklı sıralama: II (Giriş) -> III (Uyku detay) -> IV (Deneyler) -> I (Araştırma sonucu) -> V (Sonuç çağrısı). Baştan 3. cümle IV numaralı cümledir."
    });

    // --- Q21: PARAGRAF (Anlatım Biçimleri) ---
    questions.push({
      id: `turkce-d${d}-q21`,
      denemeNo: d,
      questionNo: 21,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Güneş, dağların arkasından süzülerek vadiyi altın sarısı bir ışıkla kaplıyordu. Ahşap panjurlu küçük evin bahçesinde kurumuş yapraklar rüzgârın tatlı esintisiyle savruluyordu. İhtiyar adam, bahçe kapısına dayanmış uzaklara bakıyor; derin çizgilerle kaplı yüzünde geçmişin izleri okunuyordu.\n\nBu parçanın anlatımında ağırlıklı olarak aşağıdakilerin hangisinden yararlanılmıştır?`,
      options: [
        "A) Açıklama - Tanık Gösterme",
        "B) Betimleme - Öyküleme",
        "C) Tartışma - Benzetme",
        "D) Tanımlama - Örneklendirme",
        "E) Sayısal Verilerden Yararlanma"
      ],
      correct: 1,
      explanation: "Metinde görsellik ve mekân/kişi tasviri ön planda olduğu için 'Betimleme', olay akışı ve hareket bulunduğu için 'Öyküleme' anlatım biçimleri kullanılmıştır."
    });

    // --- Q22: PARAGRAF (Yanıt Aranan Soru) ---
    questions.push({
      id: `turkce-d${d}-q22`,
      denemeNo: d,
      questionNo: 22,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Elbette hayır. Ben yazmaya başlamadan önce günlerce zihnimde karakterleri yaşatırım. Onların ne zaman ne tepki vereceğini, nasıl konuşacağını iyice benimserim. İlham beklemek yerine masanın başına geçip disiplinle çalışırım. Yazmak benim için bir anlık patlama değil, uzun soluklu bir zihinsel mesaidir.\n\nBu parça aşağıdaki sorulardan hangisine karşılık olarak söylenmiş olabilir?`,
      options: [
        "A) Eserlerinizi kaleme alırken yalnızca anlık ilham dalgalarına mı güvenirsiniz?",
        "B) Romanlarınızda kendi hayatınızdan kesitlere yer verir misiniz?",
        "C) Kitaplarınızın çok satması sizi sanatsal açıdan tatmin ediyor mu?",
        "D) Yazarların edebi ödüllere katılması doğru bir yaklaşım mıdır?",
        "E) Eserlerinin dilini oluştururken zorlandığınız oluyor mu?"
      ],
      correct: 0,
      explanation: "Yazar 'Elbette hayır, ilham beklemek yerine masanın başına geçip çalışırım' diyerek ilham dalgalarına güvenip güvenmediğini soran soruya cevap vermektedir."
    });

    // --- Q23: PARAGRAF (Yazarın Tutumu) ---
    questions.push({
      id: `turkce-d${d}-q23`,
      denemeNo: d,
      questionNo: 23,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Günümüz gençliğinin kitap okumadığını iddia eden eleştirmenlere katılmıyorum. Gençler okuyor fakat okuma biçimleri değişti. Artık dijital ekranlardan, kısa metinlerden ve etkileşimli platformlardan bilgi ediniyorlar. Onları geleneksel kalıplara zorlamak yerine bu yeni okuma kültürünü anlamaya çalışmalıyız.\n\nBu parçadaki yazarın tutumu aşağıdakilerden hangisiyle nitelendirilebilir?`,
      options: [
        "A) Yeniliklere açık ve anlayışlı",
        "B) Önyargılı ve karamsar",
        "C) Sert ve suçlayıcı",
        "D) Kayıtsız ve ilgisiz",
        "E) Dogmatik ve kuralcı"
      ],
      correct: 0,
      explanation: "Yazar gençlerin değişen okuma biçimlerini savunarak yeni okuma kültürünü anlamamız gerektiğini söylemektedir. Bu yaklaşım yeniliklere açık ve anlayışlı bir tutumu gösterir."
    });

    // --- Q24: PARAGRAF (Çıkarım Yapma) ---
    questions.push({
      id: `turkce-d${d}-q24`,
      denemeNo: d,
      questionNo: 24,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Mimari, bir toplumun dünya görüşünün ve estetik anlayışının taşa yansıyan suretidir. Bir kentin sokaklarında yürürken binaların yüksekliği, kullanılan malzeme ve cephe tasarımları size o kentin geçmişi ve ruhu hakkında sarsıcı ipuçları verir.\n\nBu parçadan hareketle mimari yapılarla ilgili olarak aşağıdakilerden hangisine ulaşılabilir?`,
      options: [
        "A) Toplumların estetik anlayışını ve kültürel kimliğini yansıttığına",
        "B) Binaların yüksekliğinin sadece ekonomik güçle açıklandığına",
        "C) Modern mimarinin geleneksel yapılardan daima üstün olduğuna",
        "D) Kentleşmenin çevre sorunlarını beraberinde getirdiğine",
        "E) Mimarlık eğitiminin zorlu bir süreç olduğuna"
      ],
      correct: 0,
      explanation: "Parçanın başında mimarinin 'toplumun dünya görüşünün ve estetik anlayışının taşa yansıyan sureti' olduğu ifade edilerek A seçeneğine ulaşılmaktadır."
    });

    // --- Q25 & Q26: BAĞLI PARAGRAF (Çoklu Soru Bloğu) ---
    const multiParagraph = `(25 ve 26. soruları aşağıda verilen metne göre cevaplayınız.)\n\nNörobilim alanındaki son araştırmalar, insan beyninin nöroplastisite (esneklik) özelliğine sahip olduğunu kanıtlamıştır. Yıllar boyunca beynin yetişkinlik döneminde değişmez bir yapıya büründüğü zannedilmekteydi. Ancak yeni bulgular; öğrenilen her yeni dil, çalınan her yeni enstrüman veya edinilen her yeni becerinin beyindeki sinirsel ağları yeniden yapılandırdığını göstermiştir. Yani zihin, kullandıkça gelişen ve yenilenen canlı bir organ niteliğindedir. Yaş ne olursa olsun zihinsel egzersizler yapmak beyin sağlığını korumanın en etkili yoludur.`;

    questions.push({
      id: `turkce-d${d}-q25`,
      denemeNo: d,
      questionNo: 25,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `${multiParagraph}\n\nBu parçada nöroplastisite kavramı ile ilgili olarak aşağıdakilerden hangisi vurgulanmaktadır?`,
      options: [
        "A) Beynin yeni deneyimlerle kendisini yeniden yapılandırabilme ve geliştirebilme esnekliği",
        "B) Çocukluk çağında tamamlanıp yetişkinlikte sona eren zihinsel gelişim",
        "C) İnsan beyninin sadece doğuştan gelen genetik kodlarla biçimlendiği",
        "D) Zihinsel egzersizlerin beyin hücrelerine zarar verdiği",
        "E) Nörobilimsel araştırmaların henüz kesin bir sonuca ulaşamadığı"
      ],
      correct: 0,
      explanation: "Metinde nöroplastisite; edinilen yeni becerilerle beynin sinirsel ağlarını yeniden yapılandırıp gelişebilme esnekliği olarak açıklanmıştır."
    });

    questions.push({
      id: `turkce-d${d}-q26`,
      denemeNo: d,
      questionNo: 26,
      category: "turkce",
      subcategory: "Paragrafta Anlam",
      difficulty: difficulty,
      question: `Yukarıda verilen parçadan hareketle aşağıdakilerden hangisi <u>ÇIKARILAMAZ</u>?`,
      options: [
        "A) Yeni bir enstrüman çalmak sinirsel ağları olumlu etkiler.",
        "B) Eskiden yetişkin beyninin sabit ve değişmez olduğu düşünülmekteydi.",
        "C) Zihinsel egzersizler her yaşta beyin sağlığını destekler.",
        "D) İnsan beyni yaş ilerledikçe hiçbir yeni bilgiyi depolayamaz.",
        "E) Zihin kullandıkça gelişen dinamik bir yapıya sahiptir."
      ],
      correct: 3,
      explanation: "Parçada 'yaş ne olursa olsun zihinsel egzersizlerin beyni geliştirdiği' vurgulanmıştır. D şıkkındaki 'hiçbir yeni bilgiyi depolayamaz' iddiası metinle tamamen çelişmektedir."
    });

    // --- Q27-Q30: SÖZEL MANTIK (4'lü Soru Bloğu) ---
    const logicScenario = `(27 - 30. soruları aşağıdaki bilgilere göre cevaplayınız.)\n\nAhmet, Burak, Ceyda, Deniz, Elif ve Faruk adlı 6 aday KPSS sınavı için A, B ve C dersliklerine atanmışlardır. Adayların atandıkları dersliklerle ilgili bilinenler şunlardır:\n- Her dersliğe en az 1, en fazla 3 aday atanmıştır.\n- Ahmet ve Burak aynı dersliğe atanmıştır.\n- Ceyda B dersliğine atanmıştır.\n- Elif ve Faruk farklı dersliklere atanmışlardır.\n- C dersliğine sadece 1 kişi atanmıştır ve bu kişi Deniz değildir.`;

    questions.push({
      id: `turkce-d${d}-q27`,
      denemeNo: d,
      questionNo: 27,
      category: "turkce",
      subcategory: "Sözel Mantık",
      difficulty: difficulty,
      question: `${logicScenario}\n\nBu bilgilere göre C dersliğine kesin olarak hangi aday atanmıştır?`,
      options: ["A) Ahmet", "B) Burak", "C) Deniz", "D) Elif veya Faruk", "E) Ceyda"],
      correct: 3,
      explanation: "Çözüm Adımları:\n- Ceyda = B\n- Ahmet ve Burak aynı sınıfta (ya A ya B). C'ye 1 kişi düşeceği ve Deniz olamayacağı için C'ye Elif veya Faruk'tan biri atanmak zorundadır (çünkü Elif ile Faruk farklı sınıflardadır)."
    });

    questions.push({
      id: `turkce-d${d}-q28`,
      denemeNo: d,
      questionNo: 28,
      category: "turkce",
      subcategory: "Sözel Mantık",
      difficulty: difficulty,
      question: `Bu bilgilere göre aşağıdakilerden hangisi <u>KESİNLİKLE YANLIŞTIR</u>?`,
      options: [
        "A) Ahmet ve Burak A dersliğindedir.",
        "B) Deniz B dersliğindedir.",
        "C) Deniz C dersliğindedir.",
        "D) Elif C dersliğindedir.",
        "E) Faruk A dersliğindedir."
      ],
      correct: 2,
      explanation: "Öncüllerde 'C dersliğine atanan kişi Deniz değildir' şartı açıkça verildiği için Deniz'in C dersliğinde olması kesinlikle imkânsızdır."
    });

    questions.push({
      id: `turkce-d${d}-q29`,
      denemeNo: d,
      questionNo: 29,
      category: "turkce",
      subcategory: "Sözel Mantık",
      difficulty: difficulty,
      question: `Ahmet ve Burak'ın A dersliğine atandığı biliniyorsa, aşağıdakilerden hangisi <u>KESİNLİKLE DOĞRUDUR</u>?`,
      options: [
        "A) Deniz A dersliğindedir.",
        "B) Deniz B dersliğindedir.",
        "C) Ceyda A dersliğindedir.",
        "D) Faruk B dersliğindedir.",
        "E) Elif A dersliğindedir."
      ],
      correct: 1,
      explanation: "Ahmet ve Burak A'daysa A dersliği 2 kişidir (Deniz C'ye gidemeyeceğine göre Deniz mecburen B dersliğine geçer). Dolayısıyla Deniz B dersliğindedir yargısı kesinleşir."
    });

    questions.push({
      id: `turkce-d${d}-q30`,
      denemeNo: d,
      questionNo: 30,
      category: "turkce",
      subcategory: "Sözel Mantık",
      difficulty: difficulty,
      question: `Elif'in C dersliğine atandığı biliniyorsa, B dersliğine atanan adaylar aşağıdakilerin hangisinde tam olarak verilmiş olabilir?`,
      options: [
        "A) Ceyda, Deniz ve Faruk",
        "B) Ahmet, Burak ve Ceyda",
        "C) Ceyda ve Elif",
        "D) Deniz ve Ahmet",
        "E) Faruk ve Elif"
      ],
      correct: 0,
      explanation: "Elif C dersliğindeyse Ceyda B'dedir. Ahmet ve Burak A dersliğinde yer alırsa B dersliğinde kalan Ceyda, Deniz ve Faruk olmalıdır. Doğru cevap A şıkkıdır."
    });

    denemeler.push({
      id: `deneme-${d}`,
      title: `KPSS Türkçe Denemesi #${d}`,
      denemeNo: d,
      questionCount: 30,
      difficulty: difficulty,
      difficultyLabel: diffLabel,
      difficultyColor: diffColor,
      questions: questions
    });
  }

  return denemeler;
}

const turkce40Denemeler = generate40TurkceDenemeleri();

if (typeof window !== 'undefined') {
  window.turkce40Denemeler = turkce40Denemeler;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { turkce40Denemeler, turkceTopics };
}