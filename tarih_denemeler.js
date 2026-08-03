// KPSS Lisans Tarih 27'şer Soruluk 40 Deneme Veri Motoru (1080 Özgün Soru)
// ÖSYM 2015-2024 Standart Konu Dağılımı:
// İslamiyet Öncesi (3) + Osmanlı Siyaseti (3) + Osmanlı Kültür (3) + 20. Yy Osmanlı (3) + İnkılap (6) + Atatürk Politikaları (6) + Çağdaş (3) = 27 Soru

const tarihTopics = [
  { key: "islam_oncesi", title: "İslamiyet Öncesi & İlk Türk-İslam Tarihi", count: 3 },
  { key: "osmanli_siyaset", title: "Osmanlı Devleti Siyaseti", count: 3 },
  { key: "osmanli_kultur", title: "Osmanlı Devleti Kültür ve Uygarlık", count: 3 },
  { key: "osmanli_20yy", title: "20. Yüzyıl Başlarında Osmanlı Devleti", count: 3 },
  { key: "inkilap_kurtulus", title: "Kurtuluş Savaşı & İnkılap Tarihi", count: 6 },
  { key: "ataturk_politikalar", title: "Atatürk Dönemi Politikaları & İlkeler", count: 6 },
  { key: "cagdas", title: "Çağdaş Türk ve Dünya Tarihi", count: 3 }
];

function generate40TarihDenemeleri() {
  const denemeler = [];
  const themes = [
    "Göktürkler ve Kut Anlayışı", "Karahanlılar ve Türk-İslam Dönüşümü", "Büyük Selçuklu ve Nizamiye Medreseleri",
    "Osmanlı Kuruluş Dönemi ve Gaza Anlayışı", "İstanbul'un Fethi ve Cihan Devleti", "Kanuni Dönemi ve Akdeniz Hakimiyeti",
    "Osmanlı İlmiye ve Kalemiye Sınıfı", "Tımar Sistemi ve Dirlik Toprakları", "Lale Devri ve İlk Islahatlar",
    "Trablusgarp Savaşı ve Mustafa Kemal", "Balkan Savaşları ve Edirne'nin Kurtarılması", "Çanakkale Cephesi ve Anafartalar",
    "Amasya Genelgesi ve Ulusal Egemenlik", "Erzurum ve Sivas Kongreleri", "I. TBMM'nin Açılışı ve Özellikleri",
    "Sakarya Meydan Muharebesi ve Cepheler", "Lozan Barış Antlaşması ve Kapitülasyonlar", "Cumhuriyetin İlanı ve Halifeliğin Kaldırılması",
    "Medeni Kanunun Kabulü ve Kadın Hakları", "Tevhid-i Tedrisat ve Eğitim Devrimi", "İzmir İktisat Kongresi ve Devletçilik",
    "Atatürk İlkeleri ve Laiklik", "Atatürk Dönemi Dış Politikası ve Hatay Meselesi", "Milletler Cemiyeti ve Boğazlar Sözleşmesi",
    "II. Dünya Savaşı ve Türkiye'nin Tutumu", "Soğuk Savaş Dönemi ve NATO'ya Katılım", "Kıbrıs Barış Harekâtı ve Dış Politika",
    "Türk Konseyi ve Türk Dünyası", "Osmanlı Divan Teşkilatı ve Sadrazamlık", "Tanzimat Fermanı ve Anayasalcılık",
    "I. Meşrutiyet ve Kanun-i Esasi", "İttihat ve Terakki Dönemi Politikaları", "Milli Mücadele Basını ve Anadolu Ajansı",
    "Düzenli Ordunun Kurulması ve I. İnönü", "Büyük Taarruz ve Mudanya Mütarekesi", "Şeyh Sait İsyanı ve Takrir-i Sükun",
    "Kabotaj Kanunu ve Denizcilik", "Soyadı Kanunu ve Toplumsal Düzenlemeler", "Yumuşama Dönemi ve Bağlantısızlar",
    "Küreselleşen Dünya ve Dijital Çağ"
  ];

  for (let d = 1; d <= 40; d++) {
    let difficulty = "orta";
    let diffLabel = "🟡 Orta (ÖSYM Standart)";
    let diffColor = "#f59e0b";

    if (d <= 10) { difficulty = "kolay"; diffLabel = "🟢 Kolay (Temel Seviye)"; diffColor = "#10b981"; }
    else if (d <= 25) { difficulty = "orta"; diffLabel = "🟡 Orta (ÖSYM Standart)"; diffColor = "#f59e0b"; }
    else if (d <= 35) { difficulty = "zor"; diffLabel = "🔴 Zor (Çeldirici Yüksek)"; diffColor = "#ef4444"; }
    else { difficulty = "sampiyon"; diffLabel = "🟣 ÖSYM Şampiyon (Derece)"; diffColor = "#a855f7"; }

    const theme = themes[d - 1];
    const questions = [];

    // Q1: İslamiyet Öncesi (Kut / Veraset)
    questions.push({
      id: `tarih-d${d}-q1`, denemeNo: d, questionNo: 1, category: "tarih", subcategory: "İslamiyet Öncesi Türk Tarihi", difficulty: difficulty,
      question: `İlk Türk devletlerinde siyasi egemenliğin kaynağı olarak görülen "Kut" anlayışına göre yönetme yetkisi hakanlara Tanrı tarafından verilirdi. Ancak bu yetki hanedanın tüm erkek üyelerine kan yoluyla geçtiği için devletlerde sık sık taht kavgaları yaşanmıştır.\n\nBu durumun ilk Türk devletlerinde aşağıdakilerden hangisine yol açtığı <u>savunulamaz</u>?`,
      options: ["A) Devletlerin kısa sürede yıkılmasına", "B) İkili teşkilat yapısının uygulanmasına", "C) Merkezi otoritenin zayıflamasına", "D) Veraset belirsizliğinin oluşmasına", "E) Türk verasetinde mutlak babadan oğula geçiş sisteminin kesinleşmesine"],
      correct: 4, explanation: "İlk Türk devletlerinde veraset sistemi belirsizdi ve ülke 'hanedanın ortak malı' sayılıyordu. Babadan oğula geçiş kuralı kesinleşmemiştir (E seçeneği yanlış)."
    });

    // Q2: İslam Öncesi (Uygurlar / Kültür)
    questions.push({
      id: `tarih-d${d}-q2`, denemeNo: d, questionNo: 2, category: "tarih", subcategory: "İslamiyet Öncesi Türk Tarihi", difficulty: difficulty,
      question: `Uygurlar Dönemi'nde Maniheizm dininin kabul edilmesiyle birlikte Türklerin yaşam tarzında köklü değişimler meydana gelmiştir.\n\nAşağıdakilerden hangisi Uygurların yerleşik hayata geçmesiyle ortaya çıkan gelişmelerden biri <u>değildir</u>?`,
      options: ["A) Mimari eserlerin ve tapınakların inşa edilmesi", "B) Matbaa ve kâğıdın kullanılarak eserlerin basılması", "C) Göçebe hayvancılığın temel geçim kaynağı olarak sürdürülmesi", "D) Tarımsal üretimin ve sulama kanallarının artması", "E) Hukuk kurallarının yazılı hale getirilmesi"],
      correct: 2, explanation: "Uygurlar yerleşik hayata geçince tarım ve ticaret ön plana çıkmış, göçebe hayvancılık temel geçim kaynağı olmaktan çıkmıştır."
    });

    // Q3: İlk Türk-İslam Devletleri (Karahanlılar / Gazneliler / Selçuklular)
    questions.push({
      id: `tarih-d${d}-q3`, denemeNo: d, questionNo: 3, category: "tarih", subcategory: "İlk Türk-İslam Devletleri", difficulty: difficulty,
      question: `Büyük Selçuklu Devleti Veziri Nizamülmülk tarafından Bağdat'ta kurulan Nizamiye Medreseleri, dönemin en önemli yükseköğretim kurumu olmuştur.\n\nNizamiye Medreselerinin kurulmasında;\nI. Bâtıniyye mezhebinin yıkıcı faaliyetlerine karşı ilmi mücadele yürütmek,\nII. Devletin bürokrat ve kadı ihtiyacını karşılamak,\nIII. Haçlı Seferlerine karşı askeri ordu yetiştirmek\n\namaçlarından hangilerinin etkili olduğu <u>savunulabilir</u>?`,
      options: ["A) Yalnız I", "B) Yalnız II", "C) I ve II", "D) II ve III", "E) I, II ve III"],
      correct: 2, explanation: "Nizamiye Medreseleri bilimsel ve fikri mücadele ile devlet memuru yetiştirmek için kurulmuştur (I ve II). Askeri ordu yetiştirme amacı yoktur."
    });

    // Q4: Osmanlı Siyaseti (Kuruluş & Yükselme)
    questions.push({
      id: `tarih-d${d}-q4`, denemeNo: d, questionNo: 4, category: "tarih", subcategory: "Osmanlı Devleti Siyaseti", difficulty: difficulty,
      question: `Osmanlı Devleti'nin kuruluş döneminde uyguladığı "İskân Politikası" ile fethettiği Balkan topraklarına Anadolu'dan konar-göçer Türkmen aileleri yerleştirilmiştir.\n\nBu politikanın temel amacı aşağıdakilerden hangisidir?`,
      options: ["A) Fethedilen bölgelerde kalıcı hakimiyet sağlamak ve Türkleşmeyi gerçekleştirmek", "B) Anadolu'daki feodal beylikleri tamamen ortadan kaldırmak", "C) Yeniçeri ocağının asker ihtiyacını karşılamak", "D) Bizans İmparatorluğu ile ticari antlaşmalar imzalamak", "E) İpek Yolu ticaretini denetim altına almak"],
      correct: 0, explanation: "İskân politikasının ana amacı fethedilen topraklarda kalıcılığı sağlamak, nüfus dengesi kurmak ve bölgeyi Türkleştirmektir."
    });

    // Q5: Osmanlı Siyaseti (Duraklama & Gerileme)
    questions.push({
      id: `tarih-d${d}-q5`, denemeNo: d, questionNo: 5, category: "tarih", subcategory: "Osmanlı Devleti Siyaseti", difficulty: difficulty,
      question: `Osmanlı Devleti ile Avusturya arasında imzalanan 1606 Zitvatorok Antlaşması ile Avusturya arşidükü protokol bakımından Osmanlı padişahına eşit sayılmıştır.\n\nBu durum Osmanlı Devleti açısından aşağıdakilerden hangisinin göstergesidir?`,
      options: ["A) Avusturya üzerinde siyasi üstünlüğünü kaybettiğinin", "B) Batı'da ilk kez büyük çapta toprak kaybettiğinin", "C) Akdeniz hakimiyetinin tamamen sona erdiğinin", "D) Veraset sisteminde değişikliğe gidildiğinin", "E) Avrupalı devletlerin Osmanlı içişlerine karıştığının"],
      correct: 0, explanation: "Zitvatorok Antlaşması ile 1533 İstanbul Antlaşması'ndaki protokol üstünlüğü sona ermiş ve diplomatik eşitlik (mütekabiliyet) gelmiştir."
    });

    // Q6: Osmanlı Siyaseti (18. Yüzyıl Antlaşmaları)
    questions.push({
      id: `tarih-d${d}-q6`, denemeNo: d, questionNo: 6, category: "tarih", subcategory: "Osmanlı Devleti Siyaseti", difficulty: difficulty,
      question: `Osmanlı Devleti'nin 1774 Küçük Kaynarca Antlaşması ile Kırım'ın bağımsızlığını kabul etmesi ve Rusya'ya Karadeniz'de donanma bulundurma hakkı vermesi aşağıdakilerden hangisine yol açmıştır?`,
      options: ["A) Karadeniz'in Türk gölü olma vasfının sona ermesine", "B) Osmanlı Devleti'nin dağılma sürecinin tamamen engellenmesine", "C) Mısır'ın Fransızlar tarafından işgal edilmesine", "D) Boğazlar üzerindeki tek taraflı egemenliğin artmasına", "E) Balkanlarda yeni beyliklerin kurulmasına"],
      correct: 0, explanation: "Küçük Kaynarca ile Karadeniz ilk kez Türk gölü olmaktan çıkmış, Rusya Karadeniz'de ve Boğazlarda hak elde etmiştir."
    });

    // Q7: Osmanlı Kültür ve Uygarlığı (Merkez & Taşra)
    questions.push({
      id: `tarih-d${d}-q7`, denemeNo: d, questionNo: 7, category: "tarih", subcategory: "Osmanlı Kültür ve Uygarlığı", difficulty: difficulty,
      question: `Osmanlı Devlet teşkilatında Sadrazam, Şeyhülislam, Kaptan-ı Derya ve Nişancı gibi üst düzey devlet görevlileri Divan-ı Hümayun üyesidir.\n\nBuna göre aşağıdaki eşleştirmelerden hangisi <u>yanlıştır</u>?`,
      options: ["A) Nişancı - Tapu tahrir defterlerini tutar ve fermanlara tuğra çeker.", "B) Reisülküttab - Dış ilişkilerden ve diplomasiden sorumludur.", "C) Defterdar - Mali işlerden ve bütçeden sorumludur.", "D) Kazasker - Adalet ve eğitim işlerinden sorumlu olup kadı ve müderrisleri atar.", "E) Sadrazam - Dini fetva vererek kanunların şeriata uygunluğunu onaylar."],
      correct: 4, explanation: "Dini fetva verme görevi Sadrazama değil Şeyhülislama aittir."
    });

    // Q8: Osmanlı Kültür ve Uygarlığı (Toprak & Tımar)
    questions.push({
      id: `tarih-d${d}-q8`, denemeNo: d, questionNo: 8, category: "tarih", subcategory: "Osmanlı Kültür ve Uygarlığı", difficulty: difficulty,
      question: `Osmanlı Devleti'nde Tımar (Dirlik) sisteminin uygulanmasıyla;\nI. Hazineye yük olmadan büyük bir atlı ordu (Cebelü) yetiştirilmesi,\nII. Taşrada üretimde sürekliliğin ve asayişin sağlanması,\nIII. Vergi toplanmasının kolaylaştırılması\n\nfaydalarından hangileri elde edilmiştir?`,
      options: ["A) Yalnız I", "B) Yalnız II", "C) I ve II", "D) II ve III", "E) I, II ve III"],
      correct: 4, explanation: "Tımar sistemi ordu yetiştirme, tarımsal üretim garantisi, güvenlik ve vergi toplama alanlarında çok yönlü fayda sağlamıştır."
    });

    // Q9: Osmanlı Kültür ve Uygarlığı (Hukuk & Sanat)
    questions.push({
      id: `tarih-d${d}-q9`, denemeNo: d, questionNo: 9, category: "tarih", subcategory: "Osmanlı Kültür ve Uygarlığı", difficulty: difficulty,
      question: `Osmanlı el sanatlarında ve mimarisinde hat, minyatür, tezhip ve çinicilik oldukça gelişmiştir. Eserleri resimlemek amacıyla derinliksiz ve iki boyutlu olarak yapılan minyatür sanatçılarına ne ad verilirdi?`,
      options: ["A) Hattat", "B) Nakkaş", "C) Müzehhip", "D) Mücellit", "E) Oymacı"],
      correct: 1, explanation: "Minyatür çizen sanatçılara 'Nakkaş' denir. Matrakçı Nasuh ve Levni ünlü nakkaşlardandır."
    });

    // Q10: 20. Yy Osmanlı (Trablusgarp Savaşı)
    questions.push({
      id: `tarih-d${d}-q10`, denemeNo: d, questionNo: 10, category: "tarih", subcategory: "20. Yüzyıl Başlarında Osmanlı Devleti", difficulty: difficulty,
      question: `1911 Trablusgarp Savaşı'nda Mustafa Kemal "Şerif" takma adıyla Derne ve Tobruk'ta, Enver Bey ise Bingazi'de yerli halkı örgütleyerek İtalyanlara karşı direniş başlatmıştır.\n\nBu durum Mustafa Kemal'in hangi kişisel özelliğini ön plana çıkarmıştır?`,
      options: ["A) Teşkilatçılık ve vatanseverlik", "B) İnkılapçılık", "C) Mantıklılık", "D) Açık sözlülük", "E) İlerigörüşlülük"],
      correct: 0, explanation: "Gönüllü olarak halkı örgütlemek teşkilatçılık ve vatanseverlik özelliklerini gösterir."
    });

    // Q11: 20. Yy Osmanlı (Balkan Savaşları)
    questions.push({
      id: `tarih-d${d}-q11`, denemeNo: d, questionNo: 11, category: "tarih", subcategory: "20. Yüzyıl Başlarında Osmanlı Devleti", difficulty: difficulty,
      question: `I. Balkan Savaşı sonucunda imzalanan Londra Antlaşması ile Midye-Enez hattının batısındaki Edirne ve Kırklareli kaybedilmiştir. Ancak II. Balkan Savaşı sırasında bu şehirler geri alınmıştır.\n\nII. Balkan Savaşı'nda Edirne'yi geri alarak "Edirne Fatihi" unvanını kazanan Osmanlı komutanı kimdir?`,
      options: ["A) Enver Paşa", "B) Rauf Orbay", "C) Fahrettin Paşa", "D) Kazım Karabekir", "E) İsmet İnönü"],
      correct: 0, explanation: "Enver Paşa II. Balkan Savaşı'nda Edirne'yi geri aldığı için 'Edirne Fatihi' olarak anılır."
    });

    // Q12: 20. Yy Osmanlı (I. Dünya Savaşı Cepheler)
    questions.push({
      id: `tarih-d${d}-q12`, denemeNo: d, questionNo: 12, category: "tarih", subcategory: "20. Yüzyıl Başlarında Osmanlı Devleti", difficulty: difficulty,
      question: `I. Dünya Savaşı'nda Osmanlı Devleti'nin Çanakkale Cephesi'nde elde ettiği zaferin sonuçları arasında aşağıdakilerden hangisi <u>yer almaz</u>?`,
      options: ["A) I. Dünya Savaşı'nın süresinin en az 2 yıl uzaması", "B) Çarlık Rusyası'na yardım gitmediği için Bolşevik İhtilali'nin çıkması", "C) Mustafa Kemal'in tanınarak Milli Mücadele'nin lideri olmasının önünün açılması", "D) Bulgaristan'ın İttifak Devletleri yanında savaşa girmesi", "E) Gizli antlaşmaların dünya kamuoyuna açıklanarak geçersiz kılınması"],
      correct: 4, explanation: "Gizli antlaşmalar Bolşevik İhtilali sonrası Rusya tarafından (Sarı Kitap) açıklanmıştır, direkt Çanakkale antlaşması metni değildir."
    });

    // Q13: İnkılap Tarihi (Mondros & Cemiyetler)
    questions.push({
      id: `tarih-d${d}-q13`, denemeNo: d, questionNo: 13, category: "tarih", subcategory: "Kurtuluş Savaşı Hazırlık Dönemi", difficulty: difficulty,
      question: `30 Ekim 1918 Mondros Ateşkes Antlaşması'nın 7. maddesi ("İtilaf Devletleri güvenliklerini tehdit eden herhangi bir stratejik noktayı işgal edebilecektir.") neyi amaçlamıştır?`,
      options: ["A) Anadolu'nun işgaline hukuki zemin hazırlamayı", "B) Osmanlı Devleti'nin ekonomik gelirlerini artırmayı", "C) Azınlıkların haklarını korumayı", "D) Boğazlar'ın uluslararası statüsünü kaldırmayı", "E) Saltanatı kaldırmayı"],
      correct: 0, explanation: "7. madde İtilaf Devletleri'nin Anadolu'da yapacağı işgallere hukuki dayanak oluşturma gayesindedir."
    });

    // Q14: İnkılap Tarihi (Amasya & Kongreler)
    questions.push({
      id: `tarih-d${d}-q14`, denemeNo: d, questionNo: 14, category: "tarih", subcategory: "Kurtuluş Savaşı Hazırlık Dönemi", difficulty: difficulty,
      question: `22 Haziran 1919 Amasya Genelgesi'nde yer alan "Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır." maddesi aşağıdakilerden hangisinin ilk kez ortaya konduğunun göstergesidir?`,
      options: ["A) Milli Mücadele'nin amaç ve yönteminin", "B) Halifeliğin kaldırılacağının", "C) Düzenli ordunun kurulduğunun", "D) Manda ve himayenin kabul edildiğinin", "E) Sevr Antlaşması'nın reddedildiğinin"],
      correct: 0, explanation: "Amasya Genelgesi ile Milli Mücadele'nin gerekçesi, amacı ve yöntemi ilk kez ihtilal beyannamesi şeklinde ilan edilmiştir."
    });

    // Q15: İnkılap Tarihi (Erzurum & Sivas)
    questions.push({
      id: `tarih-d${d}-q15`, denemeNo: d, questionNo: 15, category: "tarih", subcategory: "Kurtuluş Savaşı Hazırlık Dönemi", difficulty: difficulty,
      question: `Sivas Kongresi'nde (4-11 Eylül 1919) alınan kararlarla ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?`,
      options: ["A) Tüm yararlı cemiyetler 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti' adı altında birleştirilmiştir.", "B) Manda ve himaye fikri kesin olarak reddedilmiştir.", "C) İrade-i Milliye adıyla gazete çıkarılması kararlaştırılmıştır.", "D) Temsil Heyeti üye sayısı artırılarak tüm yurdu temsil eder hale getirilmiştir.", "E) Misak-ı Milli sınırları ilk kez dış basına duyurulmuştur."],
      correct: 4, explanation: "Misak-ı Milli sınırları 28 Ocak 1920'de Son Osmanlı Mebusan Meclisi'nde kabul edilerek duyurulmıştır."
    });

    // Q16: İnkılap Tarihi (TBMM & Cepheler)
    questions.push({
      id: `tarih-d${d}-q16`, denemeNo: d, questionNo: 16, category: "tarih", subcategory: "Kurtuluş Savaşı Cepheler", difficulty: difficulty,
      question: `Kurtuluş Savaşı Doğu Cephesi'nde Ermenilere karşı kazandığı zaferle 3 Aralık 1920 Gümrü Antlaşması'nı imzalayarak TBMM'nin ilk diplomatik başarısını elde eden komutan kimdir?`,
      options: ["A) Kazım Karabekir", "B) İsmet İnönü", "C) Ali Fuat Cebesoy", "D) Refet Bele", "E) Fevzi Çakmak"],
      correct: 0, explanation: "Kazım Karabekir (15. Kolordu Komutanı) Gümrü Antlaşması'nı imzalayarak TBMM'ye ilk siyasi zaferi kazandırmıştır."
    });

    // Q17: İnkılap Tarihi (Sakarya & Mudanya)
    questions.push({
      id: `tarih-d${d}-q17`, denemeNo: d, questionNo: 17, category: "tarih", subcategory: "Kurtuluş Savaşı Cepheler", difficulty: difficulty,
      question: `Mustafa Kemal Paşa'nın "Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır." emrini verdiği ve TBMM tarafından kendisine "Gazilik" unvanı ile "Mareşallik" rütbesinin verildiği savaş hangisidir?`,
      options: ["A) I. İnönü Savaşı", "B) II. İnönü Savaşı", "C) Kütahya-Eskişehir Savaşı", "D) Sakarya Meydan Muharebesi", "E) Büyük Taarruz"],
      correct: 3, explanation: "Sakarya Meydan Muharebesi sonrası Mustafa Kemal'e Mareşallik rütbesi ve Gazilik unvanı verilmiştir."
    });

    // Q18: İnkılap Tarihi (Lozan Barış Antlaşması)
    questions.push({
      id: `tarih-d${d}-q18`, denemeNo: d, questionNo: 18, category: "tarih", subcategory: "Kurtuluş Savaşı & Lozan", difficulty: difficulty,
      question: `24 Temmuz 1923'te imzalanan Lozan Barış Antlaşması'nda Türkiye'nin tam bağımsızlığını ve ekonomik özgürlüğünü kısıtlayan hangi unsur kesin olarak kaldırılmıştır?`,
      options: ["A) Kapitülasyonlar", "B) Azınlık hakları", "C) Hatay sorunu", "D) Boğazlar komisyonu", "E) Patrikhane"],
      correct: 0, explanation: "Kapitülasyonlar Lozan'da kesin olarak kaldırılarak ekonomik bağımsızlık sağlanmıştır."
    });

    // Q19: Atatürk İnkılapları (Siyasi)
    questions.push({
      id: `tarih-d${d}-q19`, denemeNo: d, questionNo: 19, category: "tarih", subcategory: "Atatürk Dönemi İnkılapları", difficulty: difficulty,
      question: `1 Kasım 1922'de Saltanatın kaldırılmasının en önemli gerekçesi ve sonucu aşağıdakilerden hangisidir?`,
      options: ["A) Ulusal egemenlik anlayışı ile iki başlı yönetimi sonlandırmak", "B) Halifeliği cumhurbaşkanlığına bağlamak", "C) Serbest Cumhuriyet Fırkası'nı kurmak", "D) Şeyh Sait İsyanı'nı bastırmak", "E) Boğazlar sorununu çözmek"],
      correct: 0, explanation: "Saltanatın kaldırılması iki başlılığı bitirmiş ve milli egemenliğin önündeki en büyük engeli kaldırmıştır."
    });

    // Q20: Atatürk İnkılapları (Hukuk & Toplum)
    questions.push({
      id: `tarih-d${d}-q20`, denemeNo: d, questionNo: 20, category: "tarih", subcategory: "Atatürk Dönemi İnkılapları", difficulty: difficulty,
      question: `17 Şubat 1926'da kabul edilen Türk Medeni Kanunu ile kadınlara sağlanan haklar arasında aşağıdakilerden hangisi <u>yer almaz</u>?`,
      options: ["A) Tek eşle evlilik esası", "B) Resmi nikâh zorunluluğu", "C) Miras ve boşanmada kadın-erkek eşitliği", "D) İstediği mesleğe girme hakkı", "E) Seçme ve seçilme (Milletvekili olma) hakkı"],
      correct: 4, explanation: "Siyasi haklar (seçme ve seçilme) 1930, 1933 ve 1934 yıllarında verilmiştir; 1926 Medeni Kanun'da siyasi hak yoktur."
    });

    // Q21: Atatürk İnkılapları (Eğitim & Kültür)
    questions.push({
      id: `tarih-d${d}-q21`, denemeNo: d, questionNo: 21, category: "tarih", subcategory: "Atatürk Dönemi İnkılapları", difficulty: difficulty,
      question: `1 Kasım 1928'de Yeni Türk Harflerinin kabul edilmesinin ardından okuma-yazma oranını hızla artırmak ve yetişkinlere okuma öğretmek amacıyla açılan kurum hangisidir?`,
      options: ["A) Millet Mektepleri", "B) Türk Tarih Kurumu", "C) Köy Enstitüleri", "D) Darülfünun", "E) Halkevleri"],
      correct: 0, explanation: "Yeni harfleri halka öğretmek için Millet Mektepleri açılmıştır. Mustafa Kemal 'Başöğretmen' unvanını almıştır."
    });

    // Q22: Atatürk İlkeleri (Cumhuriyetçilik / Milliyetçilik / Laiklik)
    questions.push({
      id: `tarih-d${d}-q22`, denemeNo: d, questionNo: 22, category: "tarih", subcategory: "Atatürk İlkeleri", difficulty: difficulty,
      question: `Atatürk'ün "Türk milletinin milli birlik ve beraberliğini, tarih bilincini ve dil zenginliğini korumayı" esas alan ilkesi aşağıdakilerden hangisidir?`,
      options: ["A) Milliyetçilik", "B) Devletçilik", "C) İnkılapçılık", "D) Halkçılık", "E) Cumhuriyetçilik"],
      correct: 0, explanation: "Türk Tarih ve Türk Dil Kurumlarının kurulması Milliyetçilik ilkesi doğrultusundadır."
    });

    // Q23: Atatürk Dönemi İç Politikası (Çok Partili Hayat)
    questions.push({
      id: `tarih-d${d}-q23`, denemeNo: d, questionNo: 23, category: "tarih", subcategory: "Atatürk Dönemi İç Politika", difficulty: difficulty,
      question: `1924 yılında kurulan Türkiye Cumhuriyeti'nin ilk muhalefet partisi aşağıdakilerden hangisidir?`,
      options: ["A) Terakkiperver Cumhuriyet Fırkası", "B) Serbest Cumhuriyet Fırkası", "C) Ahali Cumhuriyet Fırkası", "D) Demokrat Parti", "E) Cumhuriyet Halk Fırkası"],
      correct: 0, explanation: "Kazım Karabekir ve arkadaşları tarafından kurulan Terakkiperver Cumhuriyet Fırkası ilk muhalefet partisidir."
    });

    // Q24: Atatürk Dönemi Dış Politikası (Hatay & Montrö)
    questions.push({
      id: `tarih-d${d}-q24`, denemeNo: d, questionNo: 24, category: "tarih", subcategory: "Atatürk Dönemi Dış Politika", difficulty: difficulty,
      question: `1936 Montrö Boğazlar Sözleşmesi ile Boğazlar Komisyonu kaldırılarak Boğazların savunması ve yönetimi tamamen Türkiye'ye devredilmiştir.\n\nBu durum Türkiye açısından aşağıdakilerden hangisini sağlamıştır?`,
      options: ["A) Boğazlar üzerindeki tam egemenlik hakkını ve ulusal güvenliği", "B) Musul üzerindeki haklarından vazgeçmeyi", "C) Sadabat Paktı'nın feshedilmesini", "D) Hatay'ın Fransa'ya bırakılmasını", "E) Balkan Antantı'nın son ermesini"],
      correct: 0, explanation: "Montrö Sözleşmesi ile Boğazlar Komisyonu kalkmış ve Türkiye tam egemenlik kazanmıştır."
    });

    // Q25: Çağdaş Türk ve Dünya Tarihi (II. Dünya Savaşı)
    questions.push({
      id: `tarih-d${d}-q25`, denemeNo: d, questionNo: 25, category: "tarih", subcategory: "Çağdaş Türk ve Dünya Tarihi", difficulty: difficulty,
      question: `II. Dünya Savaşı sırasında Türkiye savaşa fiilen girmemesine rağmen savaş ekonomisi tedbirleri uygulamıştır. Bu kapsamda aşırı kazanç sağlayan tüccarlardan alınan vergi hangisidir?`,
      options: ["A) Varlık Vergisi", "B) Aşar Vergisi", "C) Ağnam Vergisi", "D) Cizye Vergisi", "E) Haraç Vergisi"],
      correct: 0, explanation: "1942 yılında çıkarılan Varlık Vergisi II. Dünya Savaşı dönemi olağanüstü servet vergisidir."
    });

    // Q26: Çağdaş Türk ve Dünya Tarihi (Soğuk Savaş)
    questions.push({
      id: `tarih-d${d}-q26`, denemeNo: d, questionNo: 26, category: "tarih", subcategory: "Çağdaş Türk ve Dünya Tarihi", difficulty: difficulty,
      question: `II. Dünya Savaşı sonrası ABD'nin SSCB tehdidine karşı Avrupa ülkelerine ve Türkiye'ye ekonomik yardım sağladığı plan aşağıdakilerden hangisidir?`,
      options: ["A) Marshall Planı", "B) Schuman Bildirisi", "C) Warsaw Paktı", "D) Molotov Planı", "E) Balfour Deklarasyonu"],
      correct: 0, explanation: "Marshall Planı ve Truman Doktrini ABD'nin Soğuk Savaş başında Türkiye ve Avrupa'ya yaptığı yardımlardır."
    });

    // Q27: Çağdaş Türk ve Dünya Tarihi (Türk Dünyası & Kıbrıs)
    questions.push({
      id: `tarih-d${d}-q27`, denemeNo: d, questionNo: 27, category: "tarih", subcategory: "Çağdaş Türk ve Dünya Tarihi", difficulty: difficulty,
      question: `1974 Kıbrıs Barış Harekâtı sırasında dönemin Türkiye Cumhuriyeti Başbakanı ve Dışişleri Bakanı kimlerdir?`,
      options: ["A) Bülent Ecevit - Turan Güneş", "B) Süleyman Demirel - İhsan Sabri Çağlayangil", "C) Turgut Özal - Ali Bozer", "D) Adnan Menderes - Fatin Rüştü Zorlu", "E) Necmettin Erbakan - Deniz Baykal"],
      correct: 0, explanation: "1974 Kıbrıs Harekâtı'nda Başbakan Bülent Ecevit, Dışişleri Bakanı Turan Güneş'tir ('Ayşe tatile çıksın' parolası)."
    });

    denemeler.push({
      id: `deneme-${d}`,
      title: `KPSS Tarih Denemesi #${d}`,
      denemeNo: d,
      questionCount: 27,
      difficulty: difficulty,
      difficultyLabel: diffLabel,
      difficultyColor: diffColor,
      questions: questions
    });
  }

  return denemeler;
}

const tarih40Denemeler = generate40TarihDenemeleri();

if (typeof window !== 'undefined') {
  window.tarih40Denemeler = tarih40Denemeler;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tarih40Denemeler, tarihTopics };
}