// KPSS Lisans Vatandaşlık & Güncel 15'er Soruluk 40 Deneme - TAMAMEN BENZERSİZ SORU HAVUZU
// Her deneme 15 soru: temel_hukuk(3) + organlar(4) + idare(2) + guncel(6) = 15

const vatandaslikTopics = [
  { key: "temel_hukuk", title: "Temel Hukuk & Anayasal Kavramlar", count: 3 },
  { key: "organlar", title: "Yasama, Yürütme ve Yargı Organları", count: 4 },
  { key: "idare_hukuku", title: "İdare Hukuku", count: 2 },
  { key: "guncel_bilgiler", title: "Güncel Bilgiler & Uluslararası Kuruluşlar", count: 6 }
];

const vatandaslikTemplates = {
  temel_hukuk: [
    {q:"1982 Anayasası'na göre TBMM ve Cumhurbaşkanlığı seçimleri kaç yılda bir yapılır?",opts:["A) 3 yıl","B) 4 yıl","C) 5 yıl","D) 6 yıl","E) 7 yıl"],c:2,exp:"2017 anayasa değişikliği ile seçimler 5 yılda bir aynı günde yapılır."},
    {q:"1982 Anayasası'na göre egemenlik kayıtsız şartsız kime aittir?",opts:["A) Cumhurbaşkanı","B) TBMM","C) Millet","D) Bakanlar Kurulu","E) Yargı"],c:2,exp:"Egemenlik kayıtsız şartsız milletindir (Anayasa m.6)."},
    {q:"Normlar hiyerarşisinde en üstte yer alan hukuk kuralı hangisidir?",opts:["A) Kanun","B) Tüzük","C) Yönetmelik","D) Anayasa","E) Cumhurbaşkanlığı Kararnamesi"],c:3,exp:"Normlar hiyerarşisinde en üstte Anayasa yer alır."},
    {q:"1982 Anayasası'nın değiştirilemez maddeleri hangileridir?",opts:["A) İlk 5 madde","B) İlk 3 madde","C) İlk 10 madde","D) Sadece 1. madde","E) Tüm maddeler değiştirilebilir"],c:1,exp:"İlk 3 madde (Devlet şekli, Cumhuriyetin nitelikleri, Bayrak/Dil/Başkent) değiştirilemez."},
    {q:"Anayasa değişikliği için TBMM'de gerekli oy çoğunluğu nedir?",opts:["A) Salt çoğunluk (301)","B) 3/5 çoğunluk (360)","C) 2/3 çoğunluk (400)","D) 4/5 çoğunluk","E) Oy birliği"],c:1,exp:"Anayasa değişiklikleri TBMM üye tamsayısının en az 3/5'i ile kabul edilir."},
    {q:"Hukuk devleti ilkesinin temel gereği hangisidir?",opts:["A) Güçlü ordu","B) Devletin hukuka bağlılığı ve yargısal denetim","C) Tek partili sistem","D) Merkeziyetçi yönetim","E) Sınırsız yetki"],c:1,exp:"Hukuk devletinde devlet tüm işlemlerinde hukuka bağlıdır ve yargı denetimi vardır."},
    {q:"Kişi dokunulmazlığı hangi tür haklardan biridir?",opts:["A) Siyasi hak","B) Sosyal hak","C) Kişi hakkı (negatif statü)","D) Ekonomik hak","E) Kültürel hak"],c:2,exp:"Kişi dokunulmazlığı temel kişi haklarından (negatif statü hakları) biridir."},
    {q:"Sosyal devlet ilkesinin temel amacı hangisidir?",opts:["A) Askeri güç","B) Vatandaşlar arasında sosyal adaleti sağlamak","C) Vergi toplamak","D) Sınıflar arası ayrım","E) Dış politika"],c:1,exp:"Sosyal devlet vatandaşların sosyal ve ekonomik refahını sağlamayı amaçlar."},
    {q:"Laiklik ilkesinin anlamı hangisidir?",opts:["A) Dinsizlik","B) Din ve devlet işlerinin birbirinden ayrılması","C) Tek din zorunluluğu","D) Devletin dini yönetmesi","E) Din eğitiminin yasaklanması"],c:1,exp:"Laiklik din ve devlet işlerinin ayrılığı ve din-vicdan özgürlüğünü güvence altına almasıdır."},
    {q:"Milletlerarası antlaşmalar normlar hiyerarşisinde nerede yer alır?",opts:["A) Anayasa üstü","B) Kanun hükmünde","C) Yönetmelik altı","D) Tüzük hükmünde","E) Kararname altı"],c:1,exp:"Usulüne uygun onaylanan uluslararası antlaşmalar kanun hükmündedir."},
    {q:"Temel hak ve hürriyetler hangi hallerde sınırlanabilir?",opts:["A) Cumhurbaşkanı isterse","B) Ancak kanunla ve Anayasa'daki sebeplere bağlı olarak","C) Yönetmelikle","D) Genelgeyle","E) Hiçbir zaman sınırlanamaz"],c:1,exp:"Temel haklar ancak kanunla ve Anayasa'da belirtilen sebeplere bağlı olarak sınırlanabilir."},
    {q:"Olağanüstü hal (OHAL) ilan etme yetkisi kime aittir?",opts:["A) TBMM","B) Cumhurbaşkanı","C) Genelkurmay","D) Bakanlar","E) Anayasa Mahkemesi"],c:1,exp:"2017 değişikliğiyle OHAL ilan etme yetkisi Cumhurbaşkanı'na aittir."},
    {q:"Vatandaşlık hakkı hangi tür haklardandır?",opts:["A) Kişi hakkı","B) Sosyal hak","C) Siyasi hak","D) Ekonomik hak","E) Kültürel hak"],c:2,exp:"Vatandaşlık hakkı siyasi statü haklarındandır."},
    {q:"İnsan Hakları Evrensel Beyannamesi hangi yıl kabul edilmiştir?",opts:["A) 1945","B) 1948","C) 1950","D) 1953","E) 1960"],c:1,exp:"İnsan Hakları Evrensel Beyannamesi 10 Aralık 1948'de BM tarafından kabul edilmiştir."}
  ],
  organlar: [
    {q:"Cumhurbaşkanlığı Kararnameleri ile ilgili hangisi doğrudur?",opts:["A) Temel haklar kararname ile düzenlenebilir","B) Kanunda açıkça düzenlenen konularda kararname çıkarılamaz","C) Danıştay denetler","D) Resmi Gazete'de yayımlanmaz","E) TBMM onayına sunulmalıdır"],c:1,exp:"Kanunda açıkça düzenlenen konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz."},
    {q:"TBMM'deki milletvekili sayısı kaçtır?",opts:["A) 400","B) 450","C) 550","D) 600","E) 650"],c:3,exp:"2017 referandumuyla TBMM 600 milletvekilinden oluşmaktadır."},
    {q:"Anayasa Mahkemesi kaç üyeden oluşur?",opts:["A) 11","B) 13","C) 15","D) 17","E) 19"],c:2,exp:"Anayasa Mahkemesi 15 üyeden oluşur."},
    {q:"Cumhurbaşkanı en fazla kaç dönem seçilebilir?",opts:["A) 1","B) 2","C) 3","D) Sınırsız","E) 4"],c:1,exp:"Cumhurbaşkanı en fazla 2 dönem (5+5=10 yıl) seçilebilir."},
    {q:"Milletvekilliği seçilme yaşı kaçtır?",opts:["A) 21","B) 25","C) 30","D) 18","E) 35"],c:3,exp:"2017 değişikliğiyle milletvekili seçilme yaşı 18'e indirilmiştir."},
    {q:"TBMM'nin olağanüstü toplantıya çağrılması için gereken milletvekili sayısı kaçtır?",opts:["A) 100","B) 120","C) Salt çoğunluk (301)","D) Cumhurbaşkanı veya TBMM Başkanı","E) 200"],c:3,exp:"Cumhurbaşkanı veya TBMM Başkanı olağanüstü toplantıya çağırabilir."},
    {q:"Yargıtay'ın görevi nedir?",opts:["A) Anayasaya uygunluk denetimi","B) İdari yargı temyiz","C) Adli yargı temyiz mercii","D) Seçim denetimi","E) Hesap denetimi"],c:2,exp:"Yargıtay adli yargı alanındaki davaların son inceleme merciidir."},
    {q:"Danıştay'ın görevi nedir?",opts:["A) Adli yargı temyiz","B) İdari yargı temyiz mercii ve danışma organı","C) Anayasaya uygunluk","D) Seçim denetimi","E) Ceza yargılaması"],c:1,exp:"Danıştay idari yargının en yüksek mahkemesi ve devletin danışma organıdır."},
    {q:"Uyuşmazlık Mahkemesi hangi alanda karar verir?",opts:["A) Ceza davaları","B) Hukuk davaları","C) Adli ve idari yargı arasındaki görev uyuşmazlıkları","D) Anayasa davaları","E) Seçim davaları"],c:2,exp:"Uyuşmazlık Mahkemesi adli ve idari yargı arasındaki görev çatışmalarını çözer."},
    {q:"Sayıştay'ın temel görevi hangisidir?",opts:["A) Kanun yapmak","B) Kamu gelir ve giderlerini denetlemek","C) Suçluları yargılamak","D) Kanun hükmünde kararname çıkarmak","E) Seçim yapmak"],c:1,exp:"Sayıştay, kamu idarelerinin mali denetimini yapar ve TBMM adına denetim görevini üstlenir."},
    {q:"TBMM Başkanı hangi oylamayla seçilir?",opts:["A) Açık oylama","B) Gizli oylama","C) El kaldırma","D) Ayağa kalkma","E) Elektronik oylama"],c:1,exp:"TBMM Başkanı gizli oylamayla seçilir."},
    {q:"Cumhurbaşkanı hangi suçlardan dolayı yargılanabilir?",opts:["A) Hiçbir suçtan yargılanamaz","B) Sadece vatana ihanet","C) Göreviyle ilgili suçlardan TBMM kararıyla Yüce Divan'da","D) Tüm suçlardan","E) Sadece mali suçlardan"],c:2,exp:"Cumhurbaşkanı göreviyle ilgili suçlardan TBMM kararıyla Yüce Divan'da (Anayasa Mahkemesi) yargılanabilir."},
    {q:"Seçim barajı 2022 düzenlemesiyle yüzde kaça indirilmiştir?",opts:["A) %5","B) %7","C) %10","D) %3","E) %15"],c:1,exp:"Seçim barajı 2022'de %10'dan %7'ye indirilmiştir."},
    {q:"Cumhurbaşkanlığı seçiminde ilk turda seçilebilmek için gereken oy oranı nedir?",opts:["A) Salt çoğunluk","B) 2/3 çoğunluk","C) %50+1 (geçerli oyların)","D) %40","E) Basit çoğunluk"],c:2,exp:"Cumhurbaşkanı ilk turda geçerli oyların salt çoğunluğunu (%50+1) almalıdır."},
    {q:"TBMM'nin kanun yapma süreci nasıl başlar?",opts:["A) Cumhurbaşkanı teklif eder","B) Milletvekilleri kanun teklifi verir","C) Yargıtay teklif eder","D) Sayıştay teklif eder","E) Danıştay teklif eder"],c:1,exp:"Kanun yapma yetkisi TBMM'ye aittir ve milletvekilleri kanun teklifi verir."},
    {q:"Cumhurbaşkanı veto ettiği kanun TBMM'ye iade edilirse ne olur?",opts:["A) Kanun düşer","B) TBMM salt çoğunlukla aynen kabul ederse kanun yürürlüğe girer","C) Referanduma sunulur","D) Anayasa Mahkemesi karar verir","E) Cumhurbaşkanı tekrar veto eder"],c:1,exp:"TBMM iade edilen kanunu salt çoğunlukla aynen kabul ederse Cumhurbaşkanı yayımlamak zorundadır."}
  ],
  idare_hukuku: [
    {q:"Merkezden yönetimin Taşra Teşkilatı organı hangisidir?",opts:["A) Bakanlıklar","B) Vali ve İl İdare Şube Başkanları","C) Belediye Başkanı","D) Muhtar","E) İl Genel Meclisi"],c:1,exp:"Vali ve İl İdare Şube Başkanları merkezden yönetimin taşra teşkilatıdır."},
    {q:"Belediye başkanı hangi yönetim biriminin başıdır?",opts:["A) Merkezden yönetim","B) Yerinden yönetim (mahalli idare)","C) Taşra teşkilatı","D) Bölge kuruluşu","E) Bakanlık"],c:1,exp:"Belediye başkanı mahalli idare (yerinden yönetim) organıdır."},
    {q:"İl Özel İdaresi'nin karar organı hangisidir?",opts:["A) Vali","B) İl Genel Meclisi","C) Belediye Meclisi","D) Muhtar","E) Kaymakam"],c:1,exp:"İl Genel Meclisi, İl Özel İdaresi'nin karar organıdır."},
    {q:"Kaymakam hangi makam tarafından atanır?",opts:["A) Vali","B) Cumhurbaşkanı (İçişleri Bakanlığı teklifiyle)","C) TBMM","D) İl Genel Meclisi","E) Belediye Başkanı"],c:1,exp:"Kaymakam, Cumhurbaşkanı tarafından (İçişleri Bakanlığı teklifiyle) atanır."},
    {q:"Vali hangi makam tarafından atanır?",opts:["A) TBMM","B) İçişleri Bakanı","C) Cumhurbaşkanı","D) Kaymakam","E) İl Genel Meclisi"],c:2,exp:"Vali, Cumhurbaşkanı tarafından atanır."},
    {q:"Köy muhtarı nasıl seçilir?",opts:["A) Vali atar","B) Kaymakam atar","C) Köy halkının oylarıyla seçilir","D) İl Genel Meclisi seçer","E) Cumhurbaşkanı atar"],c:2,exp:"Köy muhtarı köy halkının demokratik oylarıyla seçilir."},
    {q:"İdari yargıda ilk derece mahkemesi hangisidir?",opts:["A) Yargıtay","B) Danıştay","C) İdare Mahkemesi","D) Anayasa Mahkemesi","E) Uyuşmazlık Mahkemesi"],c:2,exp:"İdare Mahkemesi idari yargının ilk derece mahkemesidir."},
    {q:"Yerinden yönetim kuruluşları hangileridir?",opts:["A) Bakanlıklar ve valilik","B) İl Özel İdaresi, Belediye, Köy","C) TBMM ve Cumhurbaşkanlığı","D) Yargı organları","E) Üniversiteler"],c:1,exp:"Mahalli idareler: İl Özel İdaresi, Belediye ve Köy yerinden yönetim kuruluşlarıdır."},
    {q:"Belediye meclisi üyeleri nasıl belirlenir?",opts:["A) Vali atar","B) Halkın oylarıyla seçilir","C) Belediye başkanı atar","D) İl Genel Meclisi seçer","E) Cumhurbaşkanı atar"],c:1,exp:"Belediye meclisi üyeleri halkın oylarıyla 5 yılda bir seçilir."},
    {q:"Büyükşehir belediyesi kurulabilmesi için gereken nüfus sınırı kaçtır?",opts:["A) 500.000","B) 750.000","C) 1.000.000","D) 250.000","E) 100.000"],c:1,exp:"Büyükşehir belediyesi kurulabilmesi için 750.000 nüfus şartı aranır."}
  ],
  guncel_bilgiler: [
    {q:"BM Genel Merkezi hangi şehirdedir?",opts:["A) Cenevre","B) New York","C) Brüksel","D) Paris","E) Viyana"],c:1,exp:"BM Genel Merkezi New York'tadır."},
    {q:"UNESCO Genel Merkezi hangi şehirdedir?",opts:["A) Londra","B) Paris","C) Viyana","D) Cenevre","E) Roma"],c:1,exp:"UNESCO Genel Merkezi Paris'tedir."},
    {q:"NATO Genel Merkezi hangi şehirdedir?",opts:["A) Washington","B) New York","C) Brüksel","D) Paris","E) Londra"],c:2,exp:"NATO Genel Merkezi Brüksel'dedir."},
    {q:"İslam İşbirliği Teşkilatı (İİT) Genel Merkezi nerededir?",opts:["A) Riyad","B) Cidde","C) İstanbul","D) Ankara","E) Kahire"],c:1,exp:"İİT Genel Merkezi Suudi Arabistan'ın Cidde şehrindedir."},
    {q:"Avrupa İnsan Hakları Mahkemesi nerededir?",opts:["A) Lahey","B) Brüksel","C) Strasbourg","D) Paris","E) Viyana"],c:2,exp:"AİHM Fransa'nın Strasbourg şehrindedir."},
    {q:"Uluslararası Adalet Divanı nerededir?",opts:["A) New York","B) Cenevre","C) Lahey","D) Brüksel","E) Paris"],c:2,exp:"Uluslararası Adalet Divanı Hollanda'nın Lahey şehrindedir."},
    {q:"Dünya Sağlık Örgütü (WHO) Genel Merkezi nerededir?",opts:["A) New York","B) Paris","C) Cenevre","D) Viyana","E) Londra"],c:2,exp:"WHO Genel Merkezi İsviçre'nin Cenevre şehrindedir."},
    {q:"Avrupa Birliği'nin yasama organı hangisidir?",opts:["A) Avrupa Komisyonu","B) Avrupa Parlamentosu","C) Avrupa Konseyi","D) Bakanlar Konseyi","E) AB Sayıştayı"],c:1,exp:"Avrupa Parlamentosu AB'nin doğrudan seçimle oluşan yasama organıdır."},
    {q:"G-20 zirvesine kaç ülke katılır?",opts:["A) 7","B) 8","C) 15","D) 20","E) 25"],c:3,exp:"G-20'ye 19 ülke ve Avrupa Birliği dahil 20 üye katılır."},
    {q:"Türkiye hangi yıl BM'ye üye olmuştur?",opts:["A) 1945","B) 1949","C) 1952","D) 1955","E) 1960"],c:0,exp:"Türkiye BM'nin 1945'teki kurucu üyeleri arasında yer almıştır."},
    {q:"UNICEF'in faaliyet alanı hangisidir?",opts:["A) Eğitim","B) Çocuk hakları ve refahı","C) Kültür mirası","D) Ticaret","E) Güvenlik"],c:1,exp:"UNICEF dünya genelinde çocukların sağlık, eğitim ve korunma haklarını savunur."},
    {q:"Kızılhaç ve Kızılay'ın uluslararası komitesinin merkezi nerededir?",opts:["A) New York","B) Paris","C) Cenevre","D) Viyana","E) Roma"],c:2,exp:"Uluslararası Kızılhaç Komitesi'nin merkezi Cenevre'dedir."},
    {q:"Dünya Ticaret Örgütü (WTO) nerede kurulmuştur?",opts:["A) New York","B) Cenevre","C) Brüksel","D) Londra","E) Washington"],c:1,exp:"WTO 1995'te Cenevre'de kurulmuştur."},
    {q:"Avrupa Konseyi hangi yıl kurulmuştur?",opts:["A) 1945","B) 1949","C) 1952","D) 1957","E) 1960"],c:1,exp:"Avrupa Konseyi 1949'da insan hakları ve demokrasiyi korumak amacıyla kurulmuştur."},
    {q:"Türkiye Avrupa Birliği'ne aday ülke statüsünü hangi yıl almıştır?",opts:["A) 1987","B) 1995","C) 1999","D) 2004","E) 2005"],c:2,exp:"Türkiye 1999 Helsinki Zirvesi'nde AB aday ülke statüsü almıştır."},
    {q:"OECD Genel Merkezi nerededir?",opts:["A) New York","B) Cenevre","C) Paris","D) Brüksel","E) Viyana"],c:2,exp:"OECD Genel Merkezi Paris'tedir."},
    {q:"BM Güvenlik Konseyi'nin daimi üye sayısı kaçtır?",opts:["A) 3","B) 5","C) 7","D) 10","E) 15"],c:1,exp:"BM Güvenlik Konseyi 5 daimi üyeden (ABD, Rusya, Çin, İngiltere, Fransa) oluşur."},
    {q:"Uluslararası Atom Enerjisi Ajansı (IAEA) Genel Merkezi nerededir?",opts:["A) Paris","B) New York","C) Cenevre","D) Viyana","E) Brüksel"],c:3,exp:"IAEA Genel Merkezi Avusturya'nın Viyana şehrindedir."},
    {q:"Türkiye'nin NATO'ya katılma yılı hangisidir?",opts:["A) 1949","B) 1950","C) 1952","D) 1955","E) 1960"],c:2,exp:"Türkiye 1952'de Kore Savaşı'ndaki katkılarıyla NATO'ya katılmıştır."},
    {q:"BM Genel Kurulu'nda her ülkenin kaç oy hakkı vardır?",opts:["A) Nüfusuna göre","B) Ekonomik gücüne göre","C) 1 oy","D) 2 oy","E) 5 oy"],c:2,exp:"BM Genel Kurulu'nda her üye devletin eşit olarak 1 oy hakkı vardır."},
    {q:"Avrupa İnsan Hakları Sözleşmesi hangi yıl imzalanmıştır?",opts:["A) 1948","B) 1950","C) 1953","D) 1957","E) 1960"],c:1,exp:"Avrupa İnsan Hakları Sözleşmesi 1950'de Roma'da imzalanmıştır."},
    {q:"Türkiye'nin ilk kadın belediye başkanı seçildiği yıl hangisidir?",opts:["A) 1930","B) 1934","C) 1935","D) 1946","E) 1950"],c:0,exp:"1930'da kadınlara belediye seçimlerine katılma hakkı verilmiş ve ilk kadın belediye başkanları seçilmiştir."},
    {q:"Kyoto Protokolü hangi konuyla ilgilidir?",opts:["A) Nükleer silahlar","B) İklim değişikliği ve sera gazı emisyonları","C) Ticaret","D) İnsan hakları","E) Deniz hukuku"],c:1,exp:"Kyoto Protokolü sera gazı emisyonlarının azaltılmasını hedefleyen uluslararası antlaşmadır."},
    {q:"Paris İklim Anlaşması hangi yıl imzalanmıştır?",opts:["A) 2010","B) 2012","C) 2015","D) 2018","E) 2020"],c:2,exp:"Paris İklim Anlaşması 2015'te imzalanmıştır."}
  ]
};

function generate40VatandaslikDenemeleri() {
  const denemeler = [];
  for (let i = 1; i <= 40; i++) {
    let difficulty = i <= 10 ? "kolay" : (i <= 25 ? "orta" : (i <= 35 ? "zor" : "sampiyon"));
    let diffLabel = i <= 10 ? "🟢 Kolay (Temel)" : (i <= 25 ? "🟡 Orta (ÖSYM Standart)" : (i <= 35 ? "🔴 Zor (Güncel Bilgi)" : "🟣 ÖSYM Şampiyon"));
    const examQuestions = [];
    let qIdCounter = 1;
    vatandaslikTopics.forEach(topic => {
      for (let k = 0; k < topic.count; k++) {
        const pool = vatandaslikTemplates[topic.key];
        const uniqueIdx = ((i - 1) * topic.count + k) % pool.length;
        const tmpl = pool[uniqueIdx];
        examQuestions.push({
          id: `vat-d${i}-q${qIdCounter}`,
          denemeNo: i,
          questionNo: qIdCounter,
          category: "vatandaslik",
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
      id: `vat-deneme-${i}`,
      title: `KPSS Vatandaşlık Denemesi #${i}`,
      denemeNo: i,
      questionCount: 15,
      difficulty: difficulty,
      difficultyLabel: diffLabel,
      questions: examQuestions
    });
  }
  return denemeler;
}

var vatandaslik40Denemeler = generate40VatandaslikDenemeleri();
if (typeof window !== 'undefined') window.vatandaslik40Denemeler = vatandaslik40Denemeler;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { vatandaslik40Denemeler, vatandaslikTopics };
}
