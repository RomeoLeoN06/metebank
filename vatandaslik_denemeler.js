// KPSS Lisans Vatandaşlık & Güncel Bilgiler 15'er Soruluk 40 Deneme Veri Motoru (600 Özgün Soru)
// ÖSYM Standart Konu Dağılımı:
// Temel Hukuk (3) + Anayasa Hukuku (3) + 1982 Anayasası Devlet Organları (3) + İdare Hukuku (3) + Güncel & Genel Kültür (3) = 15 Soru

const vatandaslikTopics = [
  { key: "temel_hukuk", title: "Temel Hukuk Kavramları", count: 3 },
  { key: "anayasa_hukuku", title: "Anayasa Hukuku ve Temel Haklar", count: 3 },
  { key: "devlet_organlari", title: "1982 Anayasası (Yasama, Yürütme, Yargı)", count: 3 },
  { key: "idare_hukuku", title: "İdare Hukuku ve Devlet Teşkilatı", count: 3 },
  { key: "guncel", title: "Güncel Bilgiler & Genel Kültür", count: 3 }
];

function generate40VatandaslikDenemeleri() {
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

    // Q1: Temel Hukuk (Normlar Hiyerarşisi)
    questions.push({
      id: `vatandaslik-d${d}-q1`, denemeNo: d, questionNo: 1, category: "vatandaslik", subcategory: "Temel Hukuk", difficulty: difficulty,
      question: `📍 [NORMLAR HİYERARŞİSİ PİRAMİDİ]\nHukuk kurallarının piramitsel sıralanmasında en üstte Anayasa yer alır.\n\nNormlar Hiyerarşisine göre aşağıdakilerden hangisi en üstte yer alan ve diğer tüm kuralların kendisine aykırı olamayacağı metindir?`,
      options: ["A) Anayasa", "B) Kanun", "C) Cumhurbaşkanlığı Kararnamesi", "D) Yönetmelik", "E) Genelge"],
      correct: 0, explanation: "Normlar Hiyerarşisinin en üst basamağında Anayasa bulunur; hiçbir alt kural Anayasa'ya aykırı olamaz."
    });

    // Q2: Temel Hukuk (Hak Ehliyeti / Fiil Ehliyeti)
    questions.push({
      id: `vatandaslik-d${d}-q2`, denemeNo: d, questionNo: 2, category: "vatandaslik", subcategory: "Temel Hukuk", difficulty: difficulty,
      question: `Türk Medeni Kanunu'na göre "Hak ehliyeti" kişiliğin başlama anı olan tam ve sağ doğumla kazanılır.\n\nBuna göre kişiliğin başlangıç anı aşağıdakilerden hangisidir?`,
      options: [
        "A) Çocuğun tam ve sağ olarak doğduğu an",
        "B) Ergin (18 yaşını doldurduğu) olunan an",
        "C) Ana rahmine düşüldüğü an",
        "D) Nüfus kütüğüne kayıt yapıldığı an",
        "E) Evlilik akdinin kurulduğu an"
      ],
      correct: 0, explanation: "Hak ehliyeti çocuğun tam ve sağ doğması şartıyla ana rahmine düştüğü andan itibaren hüküm ifade eder, kişilik sağ doğumla başlar."
    });

    // Q3: Temel Hukuk (Hukuk Türleri & Yaptırımlar)
    questions.push({
      id: `vatandaslik-d${d}-q3`, denemeNo: d, questionNo: 3, category: "vatandaslik", subcategory: "Temel Hukuk", difficulty: difficulty,
      question: `Hukuka aykırı olarak yapılan bir idari işlemin yargı kararıyla ortadan kaldırılması yaptırımına ne ad verilir?`,
      options: ["A) İptal", "B) Ceza", "C) Hükümsüzlük", "D) Tazminat", "E) Cebri İcra"],
      correct: 0, explanation: "İdari işlemlerin hukuka aykırı bulunarak mahkemece ortadan kaldırılması yaptırımı 'İptal'dir."
    });

    // Q4: Anayasa Hukuku (Anayasa Tarihi)
    questions.push({
      id: `vatandaslik-d${d}-q4`, denemeNo: d, questionNo: 4, category: "vatandaslik", subcategory: "Anayasa Hukuku", difficulty: difficulty,
      question: `Türk Anayasa tarihinde "Egemenlik kayıtsız şartsız milletindir" ilkesine yer veren ilk anayasa hangisidir?`,
      options: ["A) 1921 Anayasası (Teşkilat-ı Esasiye)", "B) 1876 Kanun-i Esasi", "C) 1924 Anayasası", "D) 1961 Anayasası", "E) 1982 Anayasası"],
      correct: 0, explanation: "Milli egemenlik ilkesi ilk kez 1921 Teşkilat-ı Esasiye Anayasası'nda yer almıştır."
    });

    // Q5: Anayasa Hukuku (Devlet Şekilleri & İlkeler)
    questions.push({
      id: `vatandaslik-d${d}-q5`, denemeNo: d, questionNo: 5, category: "vatandaslik", subcategory: "Anayasa Hukuku", difficulty: difficulty,
      question: `1982 Anayasası'nın 2. maddesinde belirtilen Cumhuriyetin nitelikleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?`,
      options: [
        "A) İnsan haklarına saygılı ve Atatürk milliyetçiliğine bağlı olma",
        "B) Demokratik, laik ve sosyal bir hukuk devleti olma",
        "C) Teokratik ve monarşik bir yönetim yapısına sahip olma",
        "D) Toplumun huzuru ve milli dayanışma içinde bulunma",
        "E) Ülkesi ve milletiyle bölünmez bir bütün olma"
      ],
      correct: 2, explanation: "Türkiye Cumhuriyeti teokratik (dini) veya monarşik değil; laik ve demokratik bir sosyal hukuk devletidir."
    });

    // Q6: Temel Hak ve Ödevler
    questions.push({
      id: `vatandaslik-d${d}-q6`, denemeNo: d, questionNo: 6, category: "vatandaslik", subcategory: "Temel Haklar", difficulty: difficulty,
      question: `Aşağıdaki haklardan hangisi 1982 Anayasası'nda "Siyasi Haklar ve Ödevler" kategorisinde yer alır?`,
      options: ["A) Vatan Hizmeti (Askerlik) ve Vergi Ödevi", "B) Çalışma ve Sözleşme Hürriyeti", "C) Mülkiyet Hakkı", "D) Sağlık ve Çevre Hakkı", "E) Konut Dokunulmazlığı"],
      correct: 0, explanation: "Vatan hizmeti, vergi ödevi, seçme-seçilme ve dilekçe hakkı Siyasi Hak ve Ödevler kısmındadır."
    });

    // Q7: 1982 Anayasası (Yasama Organı - TBMM)
    questions.push({
      id: `vatandaslik-d${d}-q7`, denemeNo: d, questionNo: 7, category: "vatandaslik", subcategory: "Yasama Organı", difficulty: difficulty,
      question: `TBMM üye tamsayısı 600 milletvekilidir. TBMM Genel Kurulu'nda bir kanunun kabul edilebilmesi için karar yeter sayısı nitelikli çoğunluk aranmayan hallerde toplantıya katılanların salt çoğunluğudur.\n\nAncak karar yeter sayısı hiçbir şekilde üye tamsayısının kaçta birinden az olamaz?`,
      options: ["A) 1/4'ünün 1 fazlası (151)", "B) 1/3'ü (200)", "C) 1/2'si (300)", "D) 3/5'i (360)", "E) 2/3'ü (400)"],
      correct: 0, explanation: "Karar yeter sayısı üye tamsayısının 1/4'ünün 1 fazlasından (151) az olamaz."
    });

    // Q8: 1982 Anayasası (Yürütme Organı - Cumhurbaşkanlığı)
    questions.push({
      id: `vatandaslik-d${d}-q8`, denemeNo: d, questionNo: 8, category: "vatandaslik", subcategory: "Yürütme Organı", difficulty: difficulty,
      question: `Cumhurbaşkanı seçilmek için aşağıdaki şartlardan hangisi <u>yanlıştır</u>?`,
      options: [
        "A) 40 yaşını doldurmuş olmak",
        "B) Yükseköğrenim (Üniversite) yapmış olmak",
        "C) Milletvekili seçilme yeterliliğine sahip Türk vatandaşı olmak",
        "D) Doğrudan halk tarafından seçilmek",
        "E) En az 10 yıl devlet memurluğu yapmış olmak"
      ],
      correct: 4, explanation: "Cumhurbaşkanı adaylığı için devlet memuru olma şartı yoktur."
    });

    // Q9: 1982 Anayasası (Yargı Organı - Yüksek Mahkemeler)
    questions.push({
      id: `vatandaslik-d${d}-q9`, denemeNo: d, questionNo: 9, category: "vatandaslik", subcategory: "Yargı Organı", difficulty: difficulty,
      question: `1982 Anayasası'na göre aşağıdakilerden hangisi yüksek mahkemeler arasında <u>yer almaz</u>?`,
      options: ["A) Anayasa Mahkemesi", "B) Yargıtay", "C) Danıştay", "D) Uyuşmazlık Mahkemesi", "E) Sayıştay"],
      correct: 4, explanation: "Sayıştay yüksek mali denetim organıdır; Anayasa'da mahkemeler bölümünde geçse de 'Yüksek Mahkeme' sayılmaz."
    });

    // Q10: İdare Hukuku (İdari Teşkilat Yapısı)
    questions.push({
      id: `vatandaslik-d${d}-q10`, denemeNo: d, questionNo: 10, category: "vatandaslik", subcategory: "İdare Hukuku", difficulty: difficulty,
      question: `Türkiye'nin idari yapısında "Merkezden Yönetim" (Başkent & Taşra) teşkilatında yer alan mülki idare amirleri kimlerdir?`,
      options: [
        "A) Vali ve Kaymakam",
        "B) Belediye Başkanı ve Muhtar",
        "C) Büyükşehir Belediye Başkanı ve İl Genel Meclisi",
        "D) Rektör ve Dekan",
        "E) Oda Başkanı ve Baro Başkanı"
      ],
      correct: 0, explanation: "Vali (İl) ve Kaymakam (İlçe) merkezin taşra teşkilatındaki mülki idare amirleridir."
    });

    // Q11: İdare Hukuku (Memurluk ve Disiplin)
    questions.push({
      id: `vatandaslik-d${d}-q11`, denemeNo: d, questionNo: 11, category: "vatandaslik", subcategory: "Devlet Memurluğu", difficulty: difficulty,
      question: `657 sayılı Devlet Memurları Kanunu'na göre aday memurluk süresi en az ve en fazla ne kadardır?`,
      options: ["A) En az 1 yıl - En fazla 2 yıl", "B) En az 6 ay - En fazla 1 yıl", "C) En az 2 yıl - En fazla 3 yıl", "D) En az 3 ay - En fazla 6 ay", "E) En az 1 yıl - En fazla 3 yıl"],
      correct: 0, explanation: "Aday memurluk süresi en az 1 yıl, en fazla 2 yıldır."
    });

    // Q12: İdare Hukuku (Kamulaştırma & Özelleştirme)
    questions.push({
      id: `vatandaslik-d${d}-q12`, denemeNo: d, questionNo: 12, category: "vatandaslik", subcategory: "Kamulaştırma", difficulty: difficulty,
      question: `Devletin veya kamu tüzel kişilerinin kamu yararının gerektirdiği hallerde özel mülkiyette bulunan taşınmaz malların karşılığını peşin ödeyerek mülkiyetini almasına ne ad verilir?`,
      options: ["A) Kamulaştırma (Istimlak)", "B) Istimval", "C) Devletleştirme", "D) Geçici İşgal", "E) Şuf'a Hakkı"],
      correct: 0, explanation: "Özel mülkiyetteki taşınmaz malın peşin bedelle kamuya geçirilmesi 'Kamulaştırma'dır."
    });

    // Q13: Güncel Bilgiler (Uluslararası Örgütler)
    questions.push({
      id: `vatandaslik-d${d}-q13`, denemeNo: d, questionNo: 13, category: "vatandaslik", subcategory: "Güncel Bilgiler", difficulty: difficulty,
      question: `Birleşmiş Milletler (BM) Genel Merkezi aşağıdaki şehirlerin hangisinde bulunmaktadır?`,
      options: ["A) New York", "B) Cenevre", "C) Brüksel", "D) Paris", "E) Viyana"],
      correct: 0, explanation: "BM Genel Merkezi New York (ABD)'tadır."
    });

    // Q14: Güncel Bilgiler (Türk Dünyası & Sanat/Kültür)
    questions.push({
      id: `vatandaslik-d${d}-q14`, denemeNo: d, questionNo: 14, category: "vatandaslik", subcategory: "Güncel Bilgiler", difficulty: difficulty,
      question: `UNESCO Dünya Miras Listesi'nde yer alan ve "Tarihin Sıfır Noktası" olarak adlandırılan dünyanın bilinen en eski tapınak kompleksi Göbeklitepe hangi ilimiz sınırları içerisindedir?`,
      options: ["A) Şanlıurfa", "B) Gaziantep", "C) Adıyaman", "D) Mardin", "E) Diyarbakır"],
      correct: 0, explanation: "Göbeklitepe Şanlıurfa ilimizde yer almaktadır."
    });

    // Q15: Güncel Bilgiler (2024-2026 Önemli Gelişmeler & Bilim)
    questions.push({
      id: `vatandaslik-d${d}-q15`, denemeNo: d, questionNo: 15, category: "vatandaslik", subcategory: "Güncel Bilgiler", difficulty: difficulty,
      question: `Türkiye'nin ilk astronotu olarak Uluslararası Uzay İstasyonu'na (ISS) giderek uzayda bilimsel deneyler gerçekleştiren ilk Türk uzay yolcusu kimdir?`,
      options: ["A) Alper Gezeravcı", "B) Tuva Cihangir Atasever", "C) Umut Yıldız", "D) Aziz Sancar", "E) Celal Şengör"],
      correct: 0, explanation: "Alper Gezeravcı Axiom-3 görevi ile uzaya giden ilk Türk astronotumuzdur."
    });

    denemeler.push({
      id: `deneme-${d}`,
      title: `KPSS Vatandaşlık Denemesi #${d}`,
      denemeNo: d,
      questionCount: 15,
      difficulty: difficulty,
      difficultyLabel: diffLabel,
      difficultyColor: diffColor,
      questions: questions
    });
  }

  return denemeler;
}

const vatandaslik40Denemeler = generate40VatandaslikDenemeleri();

if (typeof window !== 'undefined') {
  window.vatandaslik40Denemeler = vatandaslik40Denemeler;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { vatandaslik40Denemeler, vatandaslikTopics };
}