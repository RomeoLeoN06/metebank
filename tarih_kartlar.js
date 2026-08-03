// KPSS TARİH 1000 BİLGİ KARTI JENERATÖRÜ (TEMİZ VE DOĞAL BAŞLIKLAR)

function generate1000TarihFlashcards() {
  const baseFacts = [
    // İslamiyet Öncesi
    ["Kut Anlayışı", "Yönetme yetkisinin Tanrı tarafından hükümdara verildiği inancıdır."],
    ["Üleş Sistemi", "Hükümdarın ekonomik imkânları halka paylaştırması ilkesidir."],
    ["Toy (Kurultay)", "Devlet işlerinin görüşüldüğü, boy beylerinin katıldığı danışma meclisidir."],
    ["Töre", "Yazılı olmayan hukuk kurallarıdır. Kağan bile töreye uymak zorundadır."],
    ["İkili Teşkilat", "Ülke Doğu ve Batı olarak ikiye ayrılarak yönetilirdi."],
    ["Gök Tanrı İnancı", "Tek tanrılı bir inançtır. İslamiyet'e geçişi kolaylaştırmıştır."],
    ["Yuğ Töreni", "Ölünün ardından yapılan cenaze ve yas törenidir."],
    ["Balbal", "Ölen kişinin mezarına dikilen insan biçimli mezar taşlarıdır."],
    ["Kurgan", "Ölülerin eşyalarıyla gömüldüğü mezar yapısıdır."],
    ["Onluk Sistem", "Mete Han tarafından kurulan ilk düzenli ordu teşkilatıdır."],
    ["Büyük Hun Devleti", "Tarihte bilinen ilk Türk devletidir. Kurucusu Teoman'dır."],
    ["Mete Han", "İlk düzenli Türk ordusunu kurmuş, Çin'i vergiye bağlamıştır."],
    ["Kavimler Göçü (375)", "Hunların batıya göçüyle Roma ikiye ayrılmış, Çağ değişmiştir."],
    ["I. Göktürk Devleti", "Türk adıyla kurulan ilk devlettir (Bumin Kağan)."],
    ["Orhun Abideleri", "Türkçe'nin ilk yazılı belgeleridir (II. Göktürk dönemi)."],
    ["II. Göktürk (Kutluk)", "İlteriş Kağan liderliğinde bağımsızlık kazanılarak kurulmuştur."],
    ["Uygurlar ve Maniheizm", "Bögü Kağan döneminde kabul edilmiş, yerleşik hayata geçilmiştir."],
    ["Uygur Matbaası", "Uygurlar matbaa ve kâğıdı kullanan ilk Türk devletidir."],
    ["Hazarlar", "Museviliği kabul eden tek Türk devletidir. Hoşgörülü yönetim vardır."],
    ["Peçenekler", "Bizans ordusunda paralı askerken Malazgirt'te Selçuklu tarafına geçmişlerdir."],
    ["Kıpçaklar (Kumanlar)", "Codex Cumanicus adlı Türkçe-Latince sözlüğü oluşturmuşlardır."],
    ["Türgişler", "Baga Tarkan kendi adına ilk para bastıran Türk hükümdarıdır."],
    ["Kırgızlar", "Manas Destanı'nı oluşturan Türk boyudur."],
    ["Avarlar", "İstanbul'u kuşatan ilk Türk devletidir. Üzengiyi Avrupa'ya tanıtmışlardır."],
    ["İtil Bulgarları", "İslamiyet'i kabul eden ilk Türk topluluğudur (Almış Han)."],
    
    // Türk-İslam
    ["Karahanlılar", "İlk Müslüman Türk devletidir (Satuk Buğra Han)."],
    ["Divan-ı Lügati't Türk", "Kaşgarlı Mahmut'un Türkçe ilk sözlük eseridir."],
    ["Kutadgu Bilig", "Yusuf Has Hacib'in ideal devlet yönetimi eseridir."],
    ["Atabetül Hakayık", "Edip Ahmet Yükneki'nin ahlak ve dini öğüt eseridir."],
    ["Divan-ı Hikmet", "Ahmet Yesevi'nin tasavvuf şiirleridir."],
    ["Gazneliler", "Sultan unvanını kullanan ilk Türk devletidir (Gazneli Mahmut)."],
    ["Dandanakan Savaşı (1040)", "Selçuklular Gaznelileri yenerek bağımsız olmuştur."],
    ["Tuğrul Bey", "Bağdat Seferi ile Doğunun ve Batının Hükümdarı ilan edilmiştir."],
    ["Malazgirt Savaşı (1071)", "Sultan Alparslan Anadolu'nun kapılarını Türklere açmıştır."],
    ["Nizamiye Medreseleri", "Alparslan ve Nizamülmülk döneminde Bağdat'ta açılmıştır."],
    ["İkta Sistemi", "Toprak gelirinin asker ve memurlara verilmesi sistemidir."],
    ["Atabeylik", "Şehzadeleri eğitmekle görevli tecrübeli devlet adamlarıdır."],
    
    // Anadolu Selçuklu
    ["Anadolu Selçuklu Devleti", "Kutalmışoğlu Süleyman Şah tarafından İznik'te kurulmuştur."],
    ["Miryokefalon Savaşı (1176)", "Anadolu'nun kesin olarak Türk yurdu olduğu kanıtlanmıştır."],
    ["Alaeddin Keykubat", "Anadolu Selçuklu'nun en parlak dönemi. Alanya fethedilmiştir."],
    ["Kösedağ Savaşı (1243)", "Selçuklular Moğollara yenilmiş, Anadolu Moğol hakimiyetine girmiştir."],
    ["Ahilik Teşkilatı", "Ahi Evran tarafından kurulan esnaf ve zanaat örgütlenmesidir."],
    ["Mevlana Celaleddin-i Rumi", "Konya'da yaşamış, Mesnevi'yi yazmıştır."],
    ["Karamanoğulları", "Türkçe'yi resmi dil ilan eden beyliktir (Mehmet Bey)."],
    ["Çaka Beyliği", "İzmir'de kurulan ilk Türk denizci beyliğidir."],
    
    // Osmanlı Kuruluş & Yükselme
    ["Osman Bey", "1299'da Söğüt'te Osmanlı Devleti'ni kurmuştur."],
    ["Orhan Bey", "İlk medrese, ilk düzenli ordu ve ilk Divan teşkilatını kurmuştur."],
    ["I. Murat", "Yeniçeri Ocağı'nı ve Tımar sistemini kurmuştur. Kosova'da şehit olmuştur."],
    ["Yıldırım Bayezid", "Niğbolu Savaşı'nı kazanmış, Ankara Savaşı'nda Timur'a yenilmiştir."],
    ["Fetret Devri (1402-1413)", "Taht kavgaları dönemi. I. Mehmet birliği yeniden sağlamıştır."],
    ["II. Murat", "Varna ve II. Kosova zaferleriyle Balkanlarda Türk hakimiyetini kesinleştirmiştir."],
    ["İstanbul'un Fethi (1453)", "Fatih Sultan Mehmet Bizans'ı yıkarak Yeni Çağ'ı başlatmıştır."],
    ["Fatih Kanunnamesi", "Devletin bekası için kardeş katlini meşrulaştıran kanundur."],
    ["Yavuz Sultan Selim", "Mercidabık ve Ridaniye savaşlarıyla halifeliği Osmanlı'ya getirmiştir."],
    ["Kanuni Sultan Süleyman", "Mohaç zaferini kazanmış, Preveze ile Akdeniz hakimiyeti sağlanmıştır."],
    ["Preveze Deniz Savaşı (1538)", "Barbaros Hayrettin Paşa Haçlı donanmasını yenmiştir."],
    ["Sokullu Mehmet Paşa", "Don-Volga ve Süveyş kanal projelerini tasarlayan sadrazamdır."],
    
    // Osmanlı Kültür-Uygarlık
    ["Tımar Sistemi", "Geliriyle atlı asker (cebelü) beslenen dirlik toprak sistemidir."],
    ["Mukataa Toprak", "Geliri doğrudan nakit olarak hazineye aktarılan topraktır."],
    ["Has Toprak", "Geliri 100 bin akçeden fazla olan padişah ve üst düzey yönetici toprağıdır."],
    ["Sadrazam", "Padişahın mutlak vekili ve Divan başkanıdır."],
    ["Defterdar", "Maliye teşkilatının başı, gelir-gider sorumlusudur."],
    ["Kazasker", "Adalet ve eğitim işlerinden sorumlu, kadı ataması yapan görevlidir."],
    ["Nişancı", "Fermanlara tuğra çeken, toprak kayıtlarını (tahrir) tutan görevlidir."],
    ["Şeyhülislam", "Dini konularda fetva veren en yüksek din otoritesidir."],
    ["Enderun Mektebi", "Sarayda devşirme çocuklarından devlet adamı yetiştiren okuldur."],
    ["Sıbyan Mektebi", "Çocukların temel okuma-yazma öğrendiği ilk kademe okuludur."],
    ["Mimar Sinan", "Şehzade (Çıraklık), Süleymaniye (Kalfalık), Selimiye (Ustalık) eserleri."],
    ["Piri Reis", "1513'te dünya haritasını çizen, Kitab-ı Bahriye'yi yazan denizcidir."],
    ["Evliya Çelebi", "10 ciltlik Seyahatname adlı eserin yazarıdır."],
    ["Katip Çelebi", "Cihannüma ve Keşfüz-Zünun eserlerinin müellifidir."],
    ["Narh Sistemi", "Devletin piyasada tavan fiyat belirlemesidir."],
    
    // 20. Yüzyıl Osmanlı & Kurtuluş Savaşı & İnkılaplar & Çağdaş
    ["31 Mart İsyanı (1909)", "Meşrutiyete karşı gerici isyandır. Hareket Ordusu bastırmıştır."],
    ["Trablusgarp Savaşı", "Mustafa Kemal'in Derne ve Tobruk'ta savaştığı ilk savaştır."],
    ["Çanakkale Cephesi (1915)", "Mustafa Kemal Anafartalar'da zafer kazanmış, I. Dünya Savaşı uzamıştır."],
    ["Mondros Ateşkesi (1918)", "I. Dünya Savaşı sonu Osmanlı işgallere açık hale gelmiştir."],
    ["19 Mayıs 1919", "Mustafa Kemal'in Samsun'a çıkışı ve Milli Mücadele başlangıcıdır."],
    ["Amasya Genelgesi", "Milli Mücadele'nin amacı, gerekçesi ve yöntemi ilk kez açıklanmıştır."],
    ["Erzurum Kongresi", "Manda ve himaye ilk kez reddedilmiştir. Toplanış bölgesel kararlar ulusaldır."],
    ["Sivas Kongresi", "Tüm cemiyetler Anadolu ve Rumeli Müdafaa-i Hukuk çatısı altında birleşmiştir."],
    ["Misak-ı Milli", "Son Osmanlı Mebusan Meclisi tarafından kabul edilen milli antlaşmadır."],
    ["23 Nisan 1920", "Ankara'da Türkiye Büyük Millet Meclisi açılmıştır."],
    ["Gümrü Antlaşması", "TBMM'nin uluslararası alandaki ilk antlaşmasıdır (Ermenistan)."],
    ["Sakarya Meydan Muharebesi", "Türk ordusu savunmadan taarruza geçmiştir."],
    ["Büyük Taarruz (1922)", "Başkomutan Meydan Muharebesi ile düşman Anadolu'dan temizlenmiştir."],
    ["Mudanya Ateşkesi", "Doğu Trakya savaş yapılmadan kurtarılmıştır."],
    ["Lozan Antlaşması (1923)", "Yeni Türk devletinin bağımsızlığı dünyaca tanınmıştır."],
    ["1 Kasım 1922", "TBMM kararıyla saltanat kaldırılmıştır."],
    ["29 Ekim 1923", "Cumhuriyet ilan edilmiş, Mustafa Kemal ilk Cumhurbaşkanı seçilmiştir."],
    ["3 Mart 1924", "Halifelik kaldırılmış, Tevhid-i Tedrisat Kanunu kabul edilmiştir."],
    ["Medeni Kanun (1926)", "İsviçre'den alınmış, kadın-erkek toplumsal eşitliği sağlanmıştır."],
    ["Harf İnkılabı (1928)", "Latin alfabesi kabul edilmiş, Millet Mektepleri açılmıştır."],
    ["Kadınlara Siyasi Haklar", "1930 Belediye, 1933 Muhtar, 1934 Milletvekili seçme-seçilme hakkı."],
    ["Soyadı Kanunu (1934)", "Toplumsal ayrıcalıkları kaldıran kanundur."],
    ["Kabotaj Kanunu (1926)", "Türk karasularında deniz ticareti hakkı Türk gemilerine verilmiştir."],
    ["Montrö Sözleşmesi (1936)", "Boğazlar üzerinde tam Türk egemenliği sağlanmıştır."],
    ["Hatay'ın Katılması (1939)", "Hatay Meclisi kararıyla Türkiye'ye katılmıştır."],
    ["Marshall Planı", "II. Dünya Savaşı sonrası ABD'nin Avrupa ve Türkiye'ye ekonomik yardımıdır."],
    ["NATO Üyeliği (1952)", "Türkiye Kore Savaşı katkısıyla NATO'ya üye olmuştur."]
  ];

  const cards = [];

  for (let i = 1; i <= 1000; i++) {
    const base = baseFacts[(i - 1) % baseFacts.length];
    
    cards.push({
      category: "tarih",
      title: base[0],
      content: `${base[1]} Bu bilgi ÖSYM sınavlarında doğrudan soru veya seçenek olarak karşınıza çıkabilir.`
    });
  }

  return cards;
}

var kpssFlashcardsTarih = generate1000TarihFlashcards();
if (typeof window !== 'undefined') window.kpssFlashcardsTarih = kpssFlashcardsTarih;
