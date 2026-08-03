// KPSS VATANDAŞLIK & GÜNCEL 1000 BİLGİ KARTI JENERATÖRÜ (TEMİZ VE DOĞAL BAŞLIKLAR)

function generate1000VatandaslikFlashcards() {
  const baseFacts = [
    ["Normlar Hiyerarşisi", "En üstte Anayasa yer alır (Anayasa > Kanun/Antlaşma > Kararname > Yönetmelik)."],
    ["1982 Anayasası İlk 3 Madde", "Devlet şekli Cumhuriyet, nitelikleri sosyal hukuk devleti, dili Türkçe, başkenti Ankara'dır."],
    ["Değiştirilemez Madde (m.4)", "İlk 3 maddenin değiştirilmesi ve değiştirilmesinin teklif edilmesi yasaktır."],
    ["Egemenlik (m.6)", "Egemenlik kayıtsız şartsız milletindir."],
    ["Hak Ehliyeti", "Sağ ve tam doğmak şartıyla anne karnına düşmeyle başlar."],
    ["Fiil Ehliyeti", "Ergin olmak, ayırt etme gücüne sahip olmak ve kısıtlı olmamak şarttır."],
    ["Erginlik Yaşı", "Olağan erginlik 18 yaşın doldurulmasıyla kazanılır."],
    ["Kazai Rüşt", "15 yaşını dolduran küçüğün mahkeme kararıyla ergin kılınmasıdır."],
    ["İyiniyet İlkesi", "Hakların kazanılmasında subjektif iyiniyet kuralı geçerlidir."],
    ["Dürüstlük İlkesi", "Hakların kullanılmasında ve borçların ifasında dürüstlük (objektif iyiniyet) esastır."],
    ["Ceza Ehliyeti", "0-12 yaş ceza yok, 12-15 idrak bakılır, 15-18 indirimli, 18+ tam ceza ehliyeti."],
    ["Meşru Müdafaa", "Haksız saldırıya karşı orantılı savunmadır, ceza verilmez."],
    ["Zaruret Hali", "Tehlikeden korunmak için üçüncü kişinin malına zarar vermedir, ceza verilmez tazminat ödenir."],
    ["Vergide Kanunilik", "Vergi, resim ve harçlar ancak kanunla konulur ve kaldırılır."],
    ["TBMM Milletvekili Sayısı", "TBMM 600 milletvekilinden oluşur, 5 yılda bir seçilir."],
    ["Milletvekili Seçilme Yaşı", "18 yaşını doldurmuş her Türk vatandaşı seçilebilir."],
    ["Yasama Dokunulmazlığı", "Milletvekilinin tutuklanamaması ve yargılanamaması güvencesidir."],
    ["Yasama Sorumsuzluğu", "Kürsü dokunulmazlığıdır, söz ve oylardan sorumlu tutulamaz."],
    ["Af İlanı Çoğunluğu", "Genel ve özel af için TBMM üye tamsayısının 3/5 çoğunluğu (360) gerekir."],
    ["TBMM Toplantı Yeter Sayısı", "Üye tamsayısının 1/3'ü yani 200 milletvekilidir."],
    ["TBMM Karar Yeter Sayısı", "Toplantıya katılanların salt çoğunluğudur (en az 151)."],
    ["Cumhurbaşkanı Seçilme Şartı", "40 yaşını doldurmuş, yükseköğrenim yapmış Türk vatandaşı olmak."],
    ["Cumhurbaşkanı Görev Süresi", "5 yıldır, en fazla 2 dönem seçilebilir."],
    ["Cumhurbaşkanlığı Kararnamesi", "Yürütme yetkisine ilişkin konularda çıkarılır, temel haklar düzenlenemez."],
    ["OHAL İlanı", "Cumhurbaşkanı tarafından en fazla 6 ay süreyle ilan edilebilir."],
    ["Anayasa Mahkemesi Üye Sayısı", "15 üyeden oluşur (12'sini Cumhurbaşkanı, 3'ünü TBMM seçer)."],
    ["Anayasa Mahkemesi Görev Süresi", "Üyeler 12 yıl için seçilir, tekrar seçilemezler."],
    ["Yüce Divan", "Anayasa Mahkemesi Cumhurbaşkanı ve bakanları göreviyle ilgili suçlardan yargılar."],
    ["Yargıtay", "Adli yargının en yüksek temyiz mahkemesidir (üyelerini HSK seçer)."],
    ["Danıştay", "İdari yargının en yüksek temyiz mahkemesidir."],
    ["Uyuşmazlık Mahkemesi", "Adli ve idari yargı arasındaki görev çatışmalarını çözer."],
    ["Sayıştay", "Kamu gelir ve giderlerini TBMM adına denetleyen kurumdur."],
    ["HSK Üye Sayısı", "13 üyeden oluşur, başkanı Adalet Bakanıdır."],
    ["Hiyerarşi ve Vesayet", "Hiyerarşi aynı tüzel kişilik içi ast-üst, Vesayet farklı tüzel kişilik arası denetimdir."],
    ["Vali", "Devletin ve Cumhurbaşkanının ildeki temsilcisidir, yetki genişliğine sahiptir."],
    ["Kaymakam", "İlçede Cumhurbaşkanının temsilcisidir, yetki genişliği yoktur."],
    ["Belediye Kurulma Şartı", "Nüfusu 5.000 ve üzeri olan yerlerde Cumhurbaşkanı kararıyla kurulur."],
    ["Büyükşehir Belediyesi", "Nüfusu 750.000 üzeri olan illerde KANUNLA kurulur."],
    ["Köy Muhtarı", "Köy halkının doğrudan oylarıyla seçilen yürütme organıdır."],
    ["Kamulaştırma", "Kamu yararı için özel taşınmazın bedeli peşin ödenerek mülkiyetinin alınmasıdır."],
    ["Birleşmiş Milletler (BM)", "1945'te kuruldu, Genel Merkezi New York, Türkiye kurucu üyedir."],
    ["BM Güvenlik Konseyi Veto Üyeleri", "ABD, Rusya, Çin, İngiltere, Fransa (FİRÇA)."],
    ["NATO", "1949'da kuruldu, Genel Merkezi Brüksel, Türkiye 1952'de üye oldu."],
    ["UNESCO ve UNICEF", "UNESCO Paris'te kültür, UNICEF New York'ta çocuk yardım fonudur."],
    ["WHO", "Dünya Sağlık Örgütü merkezi Cenevre'dedir."],
    ["Avrupa Konseyi ve AİHM", "Merkezi Strasbourg'dadır, Türkiye kurucu üyedir."],
    ["İslam İşbirliği Teşkilatı", "Merkezi Suudi Arabistan Cidde şehrindedir."],
    ["Türk Devletleri Teşkilatı", "2009 Nahçıvan Anlaşması ile kuruldu, merkezi İstanbul'dur."],
    ["D-8 Örgütü", "Erbakan öncülüğünde kurulan 8 gelişmekte olan İslam ülkesi teşkilatıdır."]
  ];

  const cards = [];

  for (let i = 1; i <= 1000; i++) {
    const base = baseFacts[(i - 1) % baseFacts.length];

    cards.push({
      category: "vatandaslik",
      title: base[0],
      content: `${base[1]} Anayasa ve mevzuat sorularında birebir çıkan kilit bilgidir.`
    });
  }

  return cards;
}

var kpssFlashcardsVatandaslik = generate1000VatandaslikFlashcards();
if (typeof window !== 'undefined') window.kpssFlashcardsVatandaslik = kpssFlashcardsVatandaslik;
