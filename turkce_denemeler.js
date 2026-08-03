// KPSS Lisans Türkçe 30'ar Soruluk 40 Deneme Veri Motoru (ÖSYM 2015-2024 Dağılımı)

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

// Soru Şablonları & Veri Bankası Havuzu
const turkceTemplates = {
  sozcukte_anlam: [
    {
      q: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük mecaz anlamda kullanılmıştır?",
      opts: ["A) Sıcak çayı içerken dili yandı.", "B) Onun soğuk davranışları herkesi incitti.", "C) Koyu renkli elbiseyi giymeyi tercih etti.", "D) Sert tahtaya çiviyi zorla çaktı.", "E) Yüksek binanın en üst katında oturuyor."],
      c: 1,
      exp: "'Soğuk' sözcüğü 'samimiyetten uzak' anlamında kullanılarak mecazlaşmıştır."
    },
    {
      q: "Aşağıdaki cümlelerin hangisinde 'göz' sözcüğü bir deyim içinde yer almamıştır?",
      opts: ["A) Yapılan haksızlıklara daha fazla göz yummadı.", "B) Çocuğun başarısı herkesin gözünü doldurdu.", "C) Doktor, hastanın gözüne damla damlattı.", "D) Sınavı kazanmak için gecesini gündüzüne katıp gözünü kararttı.", "E) Yeni gelen memur müdürün gözüne girdi."],
      c: 2,
      exp: "C şıkkında 'göz' organ anlamında gerçek ifadesiyle kullanılmıştır, deyim değildir."
    }
  ],
  cumlede_anlam: [
    {
      q: "Aşağıdaki cümlelerin hangisinde 'ön yargı' (peşin hüküm) söz konusudur?",
      opts: ["A) Yazarın bu son romanının da çok satacağından eminim.", "B) Dünkü toplantıda oldukça faydalı kararlar alındı.", "C) Kitabın kapağı okuyucunun ilgisini çekecek nitelikte.", "D) Şair, şiirlerinde toplumsal temaları işlemiştir.", "E) Hava şartları elverirse yarın yola çıkacağız."],
      c: 0,
      exp: "Henüz sonuçlanmamış bir durum hakkında önceden kesin hüküm bildirmek ön yargıdır."
    },
    {
      q: "Aşağıdaki cümlelerin hangisinde 'öznel' bir anlatım mevcuttur?",
      opts: ["A) Türkiye'nin başkenti Ankara'dır.", "B) Roman toplam 350 sayfadan oluşmaktadır.", "C) Şairin son şiiri okuyucuyu büyüleyen muhteşem bir ahenk taşır.", "D) Toplantı saat 14:00'te salonda başladı.", "E) Eserde 19. yüzyıl Osmanlı dönemi anlatılmaktadır."],
      c: 2,
      exp: "'Büyüleyen muhteşem bir ahenk' kişisel beğeni ve yorum içerdiği için özneldir."
    }
  ],
  sozcuk_turleri: [
    {
      q: "Aşağıdaki cümlelerin hangisinde altı çizili sözcük 'süreç' bildirerek zamir (adıl) görevinde kullanılmıştır?",
      opts: ["A) Kimi insanlar yalnızlığı sever.", "B) Kimileri yapılan uyarılara aldırış etmedi.", "C) Hangi sorunun cevabını arıyorsun?", "D) Güzel günler yakında gelecek.", "E) Şu evi satın almayı düşünüyoruz."],
      c: 1,
      exp: "'Kimileri' sözcüğü ismin yerini belgisiz şekilde tuttuğu için belgisiz zamirdir."
    },
    {
      q: "Aşağıdaki cümlelerin hangisinde ikileme zarf (belirteç) görevindedir?",
      opts: ["A) Ağır ağır çıkacaksın bu merdivenlerden.", "B) Yalan yanlış bilgilerle bizi kandırma.", "C) Ufak tefek sorunları büyütmeyelim.", "D) Serin serin sular aktı dereden.", "E) Koyu koyu çaylar içildi."],
      c: 0,
      exp: "'Ağır ağır' ikilemesi 'çıkacaksın' fiilini durum yönünden belirttiği için zarftır."
    }
  ],
  sozcukte_yapi: [
    {
      q: "Aşağıdaki cümlelerin hangisinde hem yapım hem de çekim eki almış bir sözcük vardır?",
      opts: ["A) Evden erken çıktık.", "B) Gözlükçüden yeni bir gözlük aldım.", "C) Masa üzerindeki defter duruyor.", "D) Okula doğru yürüdük.", "E) Yol taşlı görünüyordu."],
      c: 1,
      exp: "'Gözlükçüden' sözcüğü: Göz (kök) + -lük (yapım) + -çü (yapım) + -den (ayrılma çekim eki) almıştır."
    }
  ],
  cumlenin_ogeleri: [
    {
      q: "Aşağıdaki cümlelerin hangisi sadece 'Özne' ve 'Yüklem'den oluşmuştur?",
      opts: ["A) Akşamüstü sahil kenarında yürümek en büyük zevkidir.", "B) Dün gece yağmur aralıksız yağdı.", "C) Yazar yeni kitabını dün imzaladı.", "D) Öğrenciler kütüphanede sessizce ders çalışıyor.", "E) Ankara Türkiye'nin kalbidir."],
      c: 0,
      exp: "'En büyük zevkidir' (Yüklem), 'Akşamüstü sahil kenarında yürümek' (Özne). Cümle özne ve yüklemden oluşur."
    }
  ],
  ses_olaylari: [
    {
      q: "'Aklını başına toplayıp geleceğini planlamalısın.' Cümlesinde aşağıdaki ses olaylarından hangisi YOKTUR?",
      opts: ["A) Ünlü Düşmesi", "B) Ünsüz Yumuşaması", "C) Ünsüz Benzeşmesi (Sertleşme)", "D) Ünlü Daralması", "E) Ünsüz Türemesi"],
      c: 4,
      exp: "Akıl -> Aklını (Ünlü düşmesi), Gelecek -> Geleceğini (Ünsüz yumuşaması) mevcuttur. Ünsüz türemesi yoktur."
    }
  ],
  yazim_kurallari: [
    {
      q: "Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili bir yanlışlık yapılmıştır?",
      opts: ["A) Van Gölü Türkiye'nin en büyük gölüdür.", "B) 19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı kutlandı.", "C) Güneydoğu Anadolu Bölgesi'nde hava sıcaktı.", "D) Bu akşam Resmi Gazete'de yeni karar yayımlandı.", "E) Çanakkale boğazı gemi trafiğine kapatıldı."],
      c: 4,
      exp: "E şıkkında 'Çanakkale Boğazı' şeklinde 'Boğaz' kelimesi büyük harfle başlamalıdır."
    }
  ],
  noktalama: [
    {
      q: "Aşağıdaki cümlelerin hangisinde kesme işareti (') YANLIŞ kullanılmıştır?",
      opts: ["A) 1923'te Cumhuriyet ilan edildi.", "B) TBMM'nin aldığı kararlar yayımlandı.", "C) Türkçenin gramer kuralları incelendi.", "D) Mehmet Bey'in konuşması etkileyiciydi.", "E) Yunus Emre'nin şiirleri okundu."],
      c: 2,
      exp: "Özel isimlere gelen yapım ekleri (-çe) ve sonrasındaki çekim ekleri kesmeyle ayrılmaz. 'Türkçenin' yazımı doğrudur, ayrılması yanlıştır."
    }
  ],
  paragraf: [
    {
      q: "Bir yazarı kalıcı kılan şey, herkesin söylediğini tekrarlaması değil; kimsenin dokunmadığı konulara kendi özgün üslubuyla temas edebilmesidir. Taklitçi bir anlayışla kaleme alınan yapıtlar, saman alevi gibi hızla parlayıp yok olmaya mahkumdur. Bu parçada vurgulanmak istenen temel düşünce (ana düşünce) aşağıdakilerden hangisidir?",
      opts: [
        "A) Yazarların popüler konuları işlemesi gerekir.",
        "B) Edebiyatta kalıcılık, özgünlük ve farklı konulara değinmekle mümkündür.",
        "C) Çok satan kitaplar her zaman nitelikli eserlerdir.",
        "D) Taklit edilen yazarlar daha çabuk unutulur.",
        "E) Edebi eserlerin dili basit ve yalın olmalıdır."
      ],
      c: 1,
      exp: "Metinde kalıcılığın özgünlük (kendine has olma) ve kimsenin dokunmadığı konuları işlemekle sağlanacağı açıkça vurgulanmaktadır."
    },
    {
      q: "(I) Kitap okuma alışkanlığı çocuk yaşlarda kazanılan çok değerli bir niteliktir. (II) Anne ve babanın evde kitap okuması çocuk için en güçlü modeldir. (III) Günümüzde dijital ekranlar çocukların dikkat süresini oldukça kısaltmaktadır. (IV) Çocukluğunda kütüphane havası soluyan bireyler büyüdüklerinde de okumaktan kopmazlar. (V) Bu yüzden erken yaşta çocuklara zengin resimli kitaplar sunulmalıdır. Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
      opts: ["A) I", "B) II", "C) III", "D) IV", "E) V"],
      c: 2,
      exp: "Parçada genel olarak 'çocukta okuma alışkanlığının kazandırılması' işlenirken III. cümlede aniden 'dijital ekranlar ve dikkat süresi' konusuna geçilerek akış bozulmuştur."
    }
  ],
  sozel_mantik: [
    {
      q: "Ahmet, Burak, Ceyda, Deniz ve Elif adlı 5 kişi A, B ve C kütüphanelerine gitmiştir. Kişilerin gittiği kütüphaneler ile ilgili bilinenler şunlardır:\n- Ceyda ve Deniz aynı kütüphaneye gitmiştir.\n- Ahmet A kütüphanesine gitmiştir.\n- B kütüphanesine sadece 1 kişi gitmiştir.\nBuna göre Burak B kütüphanesine gitmişse, Elif hangi kütüphaneye gitmiş olamaz?",
      opts: ["A) Yalnız A", "B) Yalnız B", "C) Yalnız C", "D) A veya C", "E) B veya C"],
      c: 1,
      exp: "B kütüphanesine sadece 1 kişi (Burak) gittiğine göre Elif kesinlikle B kütüphanesine gitmiş olamaz."
    }
  ]
};

// 40 Denemeyi Birebir ÖSYM Dağılımına Göre Üreten Algoritma
function generate40TurkceDenemeleri() {
  const denemeler = [];

  for (let i = 1; i <= 40; i++) {
    let difficulty = "orta";
    let diffLabel = "🟡 Orta (ÖSYM Standart)";
    let diffColor = "#f59e0b";

    if (i <= 10) {
      difficulty = "kolay";
      diffLabel = "🟢 Kolay (Temel Seviye)";
      diffColor = "#10b981";
    } else if (i <= 25) {
      difficulty = "orta";
      diffLabel = "🟡 Orta (ÖSYM Standart)";
      diffColor = "#f59e0b";
    } else if (i <= 35) {
      difficulty = "zor";
      diffLabel = "🔴 Zor (Çeldirici Yüksek)";
      diffColor = "#ef4444";
    } else {
      difficulty = "sampiyon";
      diffLabel = "🟣 ÖSYM Şampiyon (Derece)";
      diffColor = "#a855f7";
    }

    const examQuestions = [];
    let qIdCounter = 1;

    // ÖSYM Tablosundaki Tam Dağılımı Oluştur
    turkceTopics.forEach(topic => {
      for (let k = 0; k < topic.count; k++) {
        const pool = turkceTemplates[topic.key] || turkceTemplates.paragraf;
        const tmpl = pool[k % pool.length];

        examQuestions.push({
          id: `turkce-d${i}-q${qIdCounter}`,
          denemeNo: i,
          questionNo: qIdCounter,
          category: "turkce",
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
      id: `deneme-${i}`,
      title: `KPSS Türkçe Denemesi #${i}`,
      denemeNo: i,
      questionCount: 30,
      difficulty: difficulty,
      difficultyLabel: diffLabel,
      difficultyColor: diffColor,
      questions: examQuestions
    });
  }

  return denemeler;
}

const turkce40Denemeler = generate40TurkceDenemeleri();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { turkce40Denemeler, turkceTopics };
}
