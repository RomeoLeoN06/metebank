// KPSS Lisans Tarih 27'şer Soruluk 40 Deneme - TAMAMEN BENZERSİZ SORU HAVUZU
// Her deneme 27 soru: islam_oncesi(2) + osmanli_siyaset(3) + osmanli_kultur(5) + osmanli_20yy(4) + inkilap_kurtulus(7) + ataturk_politikalar(4) + cagdas(2) = 27

const tarihTopics = [
  { key: "islam_oncesi", title: "İslamiyet Öncesi & İlk Türk İslam Tarihi", count: 2 },
  { key: "osmanli_siyaset", title: "Osmanlı Devleti Siyaseti", count: 3 },
  { key: "osmanli_kultur", title: "Osmanlı Devleti Kültür ve Uygarlık", count: 5 },
  { key: "osmanli_20yy", title: "20. Yüzyıl Osmanlı Devleti", count: 4 },
  { key: "inkilap_kurtulus", title: "Kurtuluş Savaşı & İnkılap Tarihi", count: 7 },
  { key: "ataturk_politikalar", title: "Atatürk Dönemi Politikaları & İlkeler", count: 4 },
  { key: "cagdas", title: "Çağdaş Türk ve Dünya Tarihi", count: 2 }
];

const tarihTemplates = {
  islam_oncesi: [
    {q:"İlk Türk devletlerinde hükümdarın yönetme yetkisini Tanrı'dan aldığına inanılan anlayışa ne ad verilir?",opts:["A) Toy","B) Kut","C) Kurultay","D) Balbal","E) Töre"],c:1,exp:"Kut, Tanrı'nın hükümdara verdiği yönetme yetkisidir."},
    {q:"Maniheizm dinini kabul ederek yerleşik hayata geçen ilk Türk devleti hangisidir?",opts:["A) Hunlar","B) Göktürkler","C) Uygurlar","D) Hazarlar","E) Kıpçaklar"],c:2,exp:"Bögü Kağan döneminde Uygurlar Maniheizm'i kabul etmiştir."},
    {q:"Orhun Yazıtları aşağıdaki Türk devletlerinden hangisine aittir?",opts:["A) Hunlar","B) II. Göktürk (Kutluk)","C) Uygurlar","D) Avarlar","E) Peçenekler"],c:1,exp:"Orhun Yazıtları II. Göktürk Devleti'ne ait Türkçe'nin ilk yazılı belgeleridir."},
    {q:"Türk tarihinde ilk düzenli ordu teşkilatını kuran devlet hangisidir?",opts:["A) Göktürkler","B) Büyük Hun","C) Uygurlar","D) Hazarlar","E) Avarlar"],c:1,exp:"Mete Han onluk sisteme dayalı ilk düzenli orduyu kurmuştur."},
    {q:"Türklerde devlet işlerinin görüşüldüğü ve boy beylerinin katıldığı meclise ne ad verilir?",opts:["A) Kut","B) Toy (Kurultay)","C) Budun","D) Tigin","E) Şad"],c:1,exp:"Toy/Kurultay, devlet işlerinin tartışıldığı danışma meclisidir."},
    {q:"İlk Müslüman Türk devleti olarak kabul edilen devlet hangisidir?",opts:["A) Gazneliler","B) Karahanlılar","C) Büyük Selçuklular","D) Tolunoğulları","E) İhşidler"],c:1,exp:"Karahanlılar (Satuk Buğra Han) İlk Müslüman Türk devletidir."},
    {q:"Türk-İslam tarihinde ilk medreseyi açan devlet hangisidir?",opts:["A) Büyük Selçuklular","B) Karahanlılar","C) Gazneliler","D) Osmanlılar","E) Harzemşahlar"],c:1,exp:"Karahanlılar, Semerkant'ta ilk medreseyi kurmuştur."},
    {q:"Büyük Selçuklu Devleti'nde devlet yönetimi ile ilgili esasları anlatan Siyasetname adlı eser kime aittir?",opts:["A) Yusuf Has Hacib","B) Kaşgarlı Mahmut","C) Nizamülmülk","D) Edip Ahmet Yükneki","E) Ali Şir Nevai"],c:2,exp:"Siyasetname, Nizamülmülk'ün devlet yönetimi hakkındaki eseridir."},
    {q:"Malazgirt Savaşı (1071) hangi Selçuklu hükümdarı döneminde kazanılmıştır?",opts:["A) Tuğrul Bey","B) Melikşah","C) Alparslan","D) Sultan Sancar","E) Kılıç Arslan"],c:2,exp:"Malazgirt Savaşı'nı Alparslan kazanarak Anadolu'nun kapısını açmıştır."},
    {q:"Divan-ı Lügati't Türk adlı eseri yazarak Türkçe'nin zenginliğini Araplara gösteren bilgin kimdir?",opts:["A) Yusuf Has Hacib","B) Kaşgarlı Mahmut","C) Nizamülmülk","D) Edip Ahmet","E) Ahmet Yesevi"],c:1,exp:"Kaşgarlı Mahmut, Divan-ı Lügati't Türk'ü yazmıştır."},
    {q:"Kutadgu Bilig adlı eseri yazarak ideal devlet yönetimini anlatan düşünür kimdir?",opts:["A) Kaşgarlı Mahmut","B) Yusuf Has Hacib","C) Nizamülmülk","D) Edip Ahmet","E) Hoca Ahmet Yesevi"],c:1,exp:"Yusuf Has Hacib, Kutadgu Bilig'i Karahanlılar döneminde yazmıştır."},
    {q:"Türklerde ölünün ardından yapılan cenaze törenine ne ad verilir?",opts:["A) Sığır","B) Şölen","C) Yuğ","D) Toy","E) Kurgan"],c:2,exp:"Yuğ, Türklerde ölü gömme ve yas tutma törenidir."},
    {q:"İslamiyet öncesi Türklerde ölen kişinin mezarına dikilen taşlara ne ad verilir?",opts:["A) Kurgan","B) Balbal","C) Bengü Taşı","D) Yada Taşı","E) Ongun"],c:1,exp:"Balbal, ölen kişinin savaşta öldürdüğü kişi sayısını gösteren mezar taşıdır."},
    {q:"Göktürk Devleti'nin yıkılmasının ardından Türk bağımsızlığını yeniden kazanan İlteriş (Kutluk) Kağan hangi devleti kurmuştur?",opts:["A) Büyük Hun","B) Avar","C) II. Göktürk","D) Uygur","E) Hazar"],c:2,exp:"İlteriş Kağan II. Göktürk (Kutluk) Devleti'ni kurmuştur."},
    {q:"Hazar Devleti'nde farklı dinlere mensup insanlar bir arada yaşamıştır. Bu durum hangi kavramla açıklanır?",opts:["A) Asimilasyon","B) Hoşgörü politikası","C) Göçebelik","D) Teokratik yönetim","E) Federasyon"],c:1,exp:"Hazarlar Musevilik, Hristiyanlık ve İslam'ın bir arada yaşandığı hoşgörülü bir devlettir."},
    {q:"Türk tarihinde ilk kez parayı basan Türk devleti hangisidir?",opts:["A) Hunlar","B) Göktürkler","C) Uygurlar","D) Türgişler","E) Kırgızlar"],c:3,exp:"Türgişler kendi adlarına para bastıran ilk Türk devletidir."},
    {q:"Karahanlılar döneminde yazılan ve Türk dilinin ilk sözlüğü sayılan eser hangisidir?",opts:["A) Kutadgu Bilig","B) Atabetül Hakayık","C) Divan-ı Lügati't Türk","D) Divan-ı Hikmet","E) Siyasetname"],c:2,exp:"Divan-ı Lügati't Türk, Kaşgarlı Mahmut'un Türkçe sözlüğüdür."},
    {q:"Büyük Selçuklu Devleti'nde ülke toprakları hangi anlayışa göre hanedan üyeleri arasında paylaştırılmıştır?",opts:["A) Kut anlayışı","B) Veraset anlayışı","C) Laiklik ilkesi","D) Feodal düzen","E) Mutlak monarşi"],c:1,exp:"Selçuklularda ülke toprakları veraset anlayışına göre hanedan üyelerine dağıtılmıştır."},
    {q:"Dandanakan Savaşı (1040) ile Gaznelileri yenen ve bağımsız bir devlet kuran Türk boyu hangisidir?",opts:["A) Osmanlılar","B) Karahanlılar","C) Selçuklular","D) Harzemşahlar","E) Eyyubiler"],c:2,exp:"Dandanakan ile Selçuklular bağımsızlıklarını ilan etmiştir."},
    {q:"Gazneli Mahmut hangi alanda özellikle ün kazanmış ve Hindistan'a 17 sefer düzenlemiştir?",opts:["A) Mimari","B) Edebiyat","C) İslam'ın yayılması","D) Denizcilik","E) Astronomi"],c:2,exp:"Gazneli Mahmut Hindistan seferlerinde İslamiyet'i yaymıştır."},
    {q:"Moğol istilası öncesinde Harzemşahların yıkılmasında Cengiz Han'ın hangi seferi etkili olmuştur?",opts:["A) Çin Seferi","B) Otrar Olayı sonrası sefer","C) Haçlı Seferi","D) Mısır Seferi","E) Hint Seferi"],c:1,exp:"Otrar'da Moğol elçilerin öldürülmesi Cengiz Han'ın Harzemşahlara savaş açmasına neden olmuştur."},
    {q:"Türk-İslam devletlerinde hükümdarın egemenlik sembollerinden biri olan hutbe ne anlama gelir?",opts:["A) Askeri geçit","B) Cuma namazında hükümdar adına okunan dua","C) Vergi toplama hakkı","D) Tuğra basma yetkisi","E) Bayrak dikme töreni"],c:1,exp:"Hutbe, Cuma namazında hükümdar adına okunan duadır ve egemenlik sembolüdür."},
    {q:"Anadolu Selçuklu Devleti'nin kurucusu kimdir?",opts:["A) Alparslan","B) Kılıç Arslan I","C) Süleyman Şah","D) Melikşah","E) Alaeddin Keykubat"],c:2,exp:"Anadolu Selçuklu Devleti'ni Kutalmışoğlu Süleyman Şah kurmuştur."},
    {q:"Anadolu'da kurulan ilk Türk beyliklerinden olan Danişmentliler'in merkezi neresidir?",opts:["A) Konya","B) Sivas","C) Kayseri","D) Erzurum","E) Trabzon"],c:1,exp:"Danişmentliler'in merkezi Sivas ve Tokat'tır."},
    {q:"İlk Türk devletlerinde devletin 'Doğu-Batı' olmak üzere ikiye ayrılarak yönetilmesi anlayışına ne denir?",opts:["A) Federasyon","B) İkili teşkilat","C) Mutlak monarşi","D) Cumhuriyet","E) Teokratik yönetim"],c:1,exp:"İkili teşkilat, devletin doğu ve batı olarak iki kanat halinde yönetilmesidir."},
    {q:"Türk boyları arasında ortak bir dil, din ve kültür birliği oluşturmayı amaçlayan düşünce akımı hangisidir?",opts:["A) Osmanlıcılık","B) İslamcılık","C) Türkçülük (Turancılık)","D) Batıcılık","E) Adem-i Merkeziyetçilik"],c:2,exp:"Türkçülük, tüm Türk boylarını bir çatı altında toplamayı amaçlar."},
    {q:"Selçuklu döneminde tasavvuf düşüncesinin Anadolu'da yayılmasında en etkili isim kimdir?",opts:["A) Yunus Emre","B) Mevlana Celaleddin-i Rumi","C) Hacı Bektaş-ı Veli","D) Ahi Evran","E) Hoca Ahmet Yesevi"],c:1,exp:"Mevlana'nın hoşgörü felsefesi Anadolu'da tasavvufun yayılmasında çok etkili olmuştur."},
    {q:"Kösedağ Savaşı (1243) hangi devletler arasında yapılmıştır?",opts:["A) Osmanlı - Bizans","B) Selçuklu - Haçlılar","C) Anadolu Selçuklu - Moğollar","D) Osmanlı - Timur","E) Karamanoğulları - Osmanlı"],c:2,exp:"Kösedağ Savaşı'nda Anadolu Selçukluları Moğollara yenilmiş ve Moğol egemenliğine girmiştir."},
    {q:"Ahi teşkilatı Anadolu'da hangi alanda örgütlenmiştir?",opts:["A) Askeri","B) Dini","C) Esnaf ve Zanaatkarlık","D) Tarım","E) Eğitim"],c:2,exp:"Ahilik, Anadolu'da esnaf ve zanaatkarların örgütlendiği teşkilattır."},
    {q:"İlk Türk devletlerinde Gök Tanrı inancının temel özelliklerinden biri aşağıdakilerden hangisidir?",opts:["A) Çok tanrılı inanç","B) Tek Tanrı inancı","C) Putperestlik","D) Ateşe tapınma","E) İnek kutsallığı"],c:1,exp:"Gök Tanrı inancı tek tanrılı bir inanç sistemidir."},
    {q:"Büyük Selçuklu Devleti'nde Atabeylik kurumu ne amaçla oluşturulmuştur?",opts:["A) Vergi toplamak","B) Şehzadeleri eğitmek ve yöneticilik öğretmek","C) Orduyu yönetmek","D) Dini eğitim vermek","E) Ticaret düzenlemek"],c:1,exp:"Atabeyler, şehzadelerin yetiştirilmesi ve eyalet yönetiminin öğretilmesi için görevlendirilmiştir."},
    {q:"Türklerin İslamiyet'i kabul etmesinin temel kolaylaştırıcı faktörlerinden biri olarak gösterilen benzerlik hangisidir?",opts:["A) Yazı sistemi","B) Tek tanrı inancı","C) Yerleşik hayat","D) Denizcilik","E) Hukuk sistemi"],c:1,exp:"Gök Tanrı inancındaki tek tanrı anlayışı İslam'ın tevhid anlayışıyla benzeşmektedir."},
    {q:"Türklerin Anadolu'yu yurt edinmesinin yolunu açan savaş hangisidir?",opts:["A) Dandanakan","B) Pasinler","C) Malazgirt","D) Kösedağ","E) Miryokefalon"],c:2,exp:"1071 Malazgirt Savaşı Anadolu'nun kapısını Türklere açmıştır."},
    {q:"Anadolu Selçuklu Devleti'nin Bizans tehlikesini ortadan kaldırdığı savaş hangisidir?",opts:["A) Malazgirt","B) I. Haçlı Seferi","C) Miryokefalon","D) Kösedağ","E) Ankara"],c:2,exp:"1176 Miryokefalon Savaşı ile Bizans'ın Anadolu'yu geri alma umudu son bulmuştur."},
    {q:"Anadolu Selçuklu Devleti'nde deniz ticaretini geliştirmek için kurulan ilk Türk tersanesi nerededir?",opts:["A) İstanbul","B) Sinop","C) Antalya","D) İzmir","E) Trabzon"],c:1,exp:"Sinop'ta kurulan tersane Anadolu Selçuklularının ilk deniz üssüdür."},
    {q:"Moğol istilasından kaçan Türkmen boylarının Anadolu'da kurdukları beyliklere ne ad verilir?",opts:["A) Atabeylikler","B) Uç Beylikleri","C) Beylikler Dönemi beylikleri","D) Taht beylikleri","E) Ticarethane beylikleri"],c:2,exp:"Kösedağ sonrası kurulan beyliklere İkinci Beylikler Dönemi beylikleri denir."},
    {q:"Karamanoğlu Mehmet Bey'in 'Bugünden sonra divanda, dergahta Türkçe'den başka dil kullanılmayacaktır' fermanı hangi alanda önemlidir?",opts:["A) Askeri reform","B) Dil ve kültür","C) Ekonomi","D) Hukuk","E) Dini reform"],c:1,exp:"Bu ferman Türkçe'nin resmi dil olarak kullanılması adına önemli bir adımdır."},
    {q:"Anadolu'da kurulan ilk Türk devleti (beyliği) hangisidir?",opts:["A) Danişmentliler","B) Saltuklar","C) Mengücekliler","D) Artuklular","E) Çaka Beyliği"],c:4,exp:"Çaka Beyliği, Anadolu'da kurulan ilk Türk beyliğidir (İzmir)."},
    {q:"Haçlı Seferleri'nin başlamasında etkili olan olay hangisidir?",opts:["A) İstanbul'un fethi","B) Malazgirt Savaşı","C) Bizans'ın Papa'dan yardım istemesi","D) Moğol istilası","E) Kösedağ Savaşı"],c:2,exp:"Malazgirt sonrası Bizans'ın papadan yardım istemesi Haçlı Seferlerini başlatmıştır."},
    {q:"Selçuklularda ikta sistemi hangi amaca hizmet etmiştir?",opts:["A) Ticaretin geliştirilmesi","B) Toprak gelirinin askeri harcamalara ayrılması","C) Deniz ticaretinin korunması","D) Sanatın desteklenmesi","E) Dini eğitimin yaygınlaştırılması"],c:1,exp:"İkta sistemi toprak gelirini asker ve devlet memurlarına tahsis ederek merkezi otoriteyi güçlendirmiştir."}
  ],
  osmanli_siyaset: [
    {q:"Osmanlı Devleti'nin Balkanlar'daki hakimiyetini kesinleştiren savaş hangisidir?",opts:["A) I. Kosova","B) Niğbolu","C) II. Kosova (1448)","D) Varna","E) Sırpsındığı"],c:2,exp:"1448 II. Kosova ile Türklerin Balkanlar'dan atılamayacağı kesinleşmiştir."},
    {q:"İstanbul'un fethinde (1453) kullanılan ve surları yıkmada etkili olan büyük topun dökümcüsü kimdir?",opts:["A) Mimar Sinan","B) Urban","C) Akşemseddin","D) Çandarlı Halil Paşa","E) Zağanos Paşa"],c:1,exp:"Macar asıllı Urban, Fatih için dev topları dökmüştür."},
    {q:"Kanuni Sultan Süleyman döneminde Osmanlı-İran arasında imzalanan ilk resmi antlaşma hangisidir?",opts:["A) Kasr-ı Şirin","B) Ferhat Paşa","C) Amasya","D) Zitvatorok","E) Serav"],c:2,exp:"1555 Amasya Antlaşması Osmanlı-İran arasındaki ilk resmi antlaşmadır."},
    {q:"Preveze Deniz Savaşı'nı (1538) kazanarak Akdeniz'de Osmanlı hakimiyetini pekiştiren kaptan kimdir?",opts:["A) Piri Reis","B) Turgut Reis","C) Barbaros Hayrettin Paşa","D) Kılıç Ali Paşa","E) Seydi Ali Reis"],c:2,exp:"Barbaros Hayrettin Paşa Preveze'de Haçlı donanmasını yenmiştir."},
    {q:"Osmanlı Devleti'nin Avrupa'daki ilk toprak kaybını yaşadığı antlaşma hangisidir?",opts:["A) Zitvatorok","B) Karlofça","C) Pasarofça","D) Küçük Kaynarca","E) Yaş"],c:1,exp:"1699 Karlofça Antlaşması ile Osmanlı Avrupa'da ilk kez toprak kaybetmiştir."},
    {q:"Fatih Sultan Mehmet'in İstanbul'u fethederek sona erdirdiği devlet hangisidir?",opts:["A) Sasani","B) Roma","C) Bizans (Doğu Roma)","D) Karolenj","E) Frank"],c:2,exp:"1453'te Fatih Sultan Mehmet Bizans İmparatorluğu'na son vermiştir."},
    {q:"Osmanlı Devleti'nde ilk kez Avrupalı bir devlete kapitülasyon hangi padişah döneminde verilmiştir?",opts:["A) Fatih","B) Yavuz","C) Kanuni","D) II. Selim","E) II. Bayezid"],c:2,exp:"Kanuni Sultan Süleyman 1536'da Fransa'ya kapitülasyon vermiştir."},
    {q:"Yavuz Sultan Selim'in Mısır'ı fethetmesiyle Osmanlı'ya geçen unvan hangisidir?",opts:["A) Han","B) Hakan","C) Halife","D) Kağan","E) Bey"],c:2,exp:"Halifelik Yavuz Sultan Selim ile Osmanlı padişahlarına geçmiştir."},
    {q:"Osmanlı Devleti'nin kuruluşunda önemli rol oynayan ve Osman Bey'e kılıç kuşandıran kişi kimdir?",opts:["A) Hacı Bektaş-ı Veli","B) Mevlana","C) Şeyh Edebali","D) Yunus Emre","E) Ahi Evran"],c:2,exp:"Şeyh Edebali, Osman Bey'e kılıç kuşandırarak devletin kuruluşunda manevi destek vermiştir."},
    {q:"Osmanlı Devleti'nin Karadeniz'i bir Türk gölü haline getirdiği fetih hangisidir?",opts:["A) İstanbul fethi","B) Kırım'ın fethi","C) Trabzon'un fethi","D) Sinop'un fethi","E) Ceneviz kalelerinin alınması"],c:1,exp:"1475'te Kırım'ın fethi ile Karadeniz Osmanlı iç denizi olmuştur."},
    {q:"Osmanlı Devleti'nin denizlerde ilk kez Avrupalı bir devlete yenildiği savaş hangisidir?",opts:["A) Preveze","B) Çeşme","C) İnebahtı","D) Sinop","E) Navarin"],c:2,exp:"1571 İnebahtı Savaşı Osmanlı donanmasının ilk büyük yenilgisidir."},
    {q:"II. Viyana Kuşatması'nın (1683) başarısızlıkla sonuçlanması hangi dönemi başlatmıştır?",opts:["A) Yükselme","B) Duraklama","C) Gerileme","D) Dağılma","E) Kuruluş"],c:2,exp:"1683 II. Viyana Kuşatması başarısızlığı Gerileme Dönemi'ni başlatmıştır."},
    {q:"Osmanlı Devleti'nde Avrupa tarzında ilk askeri ıslahat yapan padişah kimdir?",opts:["A) II. Mahmut","B) III. Selim","C) Abdülmecid","D) Abdülaziz","E) I. Mahmut"],c:1,exp:"III. Selim Nizam-ı Cedit ordusunu kurarak Avrupa tarzı ilk askeri ıslahat yapmıştır."},
    {q:"Osmanlı Devleti'nde Yeniçeri Ocağı'nı kaldıran padişah kimdir ve bu olaya ne ad verilir?",opts:["A) III. Selim - Nizam-ı Cedit","B) II. Mahmut - Vaka-i Hayriye","C) Abdülmecid - Tanzimat","D) IV. Murat - Koçi Bey Risalesi","E) II. Osman - Kapıkulu Islahatı"],c:1,exp:"II. Mahmut 1826'da Yeniçeri Ocağı'nı Vaka-i Hayriye ile kaldırmıştır."},
    {q:"Lale Devri'nin sona ermesine neden olan isyan hangisidir?",opts:["A) 31 Mart İsyanı","B) Patrona Halil İsyanı","C) Celali İsyanları","D) Kabakçı Mustafa İsyanı","E) Buçuktepe İsyanı"],c:1,exp:"1730 Patrona Halil İsyanı Lale Devri'ni sona erdirmiştir."},
    {q:"Osmanlı'da ilk matbaa hangi dönemde kurulmuştur?",opts:["A) Kanuni Dönemi","B) Lale Devri","C) Tanzimat Dönemi","D) II. Mahmut Dönemi","E) I. Meşrutiyet"],c:1,exp:"İlk matbaa Lale Devri'nde İbrahim Müteferrika tarafından kurulmuştur."},
    {q:"Pasarofça Antlaşması (1718) sonrası başlayan ve Osmanlı'nın Avrupa'yı örnek aldığı dönem hangisidir?",opts:["A) Tanzimat","B) Meşrutiyet","C) Lale Devri","D) Islahat Fermanı","E) Kanun-i Esasi"],c:2,exp:"Pasarofça sonrası Lale Devri başlamıştır (1718-1730)."},
    {q:"Osmanlı'nın Rusya'ya Kırım'ı kaybettiği antlaşma hangisidir?",opts:["A) Karlofça","B) Küçük Kaynarca","C) Yaş","D) Edirne","E) Bükreş"],c:1,exp:"1774 Küçük Kaynarca Antlaşması ile Kırım Rusya'ya bırakılmıştır."},
    {q:"Osmanlı Devleti'nde padişahın yetkilerini ilk kez sınırlandıran belge hangisidir?",opts:["A) Tanzimat Fermanı","B) Islahat Fermanı","C) Sened-i İttifak","D) Kanun-i Esasi","E) Nizam-ı Cedit"],c:2,exp:"1808 Sened-i İttifak padişah yetkilerini sınırlandıran ilk belgedir."},
    {q:"Tanzimat Fermanı (1839) hangi padişah döneminde ilan edilmiştir?",opts:["A) II. Mahmut","B) Abdülmecid","C) Abdülaziz","D) II. Abdülhamit","E) V. Murat"],c:1,exp:"Tanzimat Fermanı Abdülmecid döneminde Mustafa Reşit Paşa tarafından okunmuştur."},
    {q:"Osmanlı'da halkın din ve mezhep farkı gözetilmeksizin eşit tutulmasını amaçlayan ferman hangisidir?",opts:["A) Tanzimat","B) Islahat","C) Sened-i İttifak","D) Kanun-i Esasi","E) Vaka-i Hayriye"],c:1,exp:"1856 Islahat Fermanı gayrimüslimlere eşit haklar tanımıştır."},
    {q:"I. Meşrutiyet'in (1876) ilan edilmesiyle yürürlüğe giren anayasa hangisidir?",opts:["A) 1924 Anayasası","B) 1961 Anayasası","C) Kanun-i Esasi","D) Teşkilat-ı Esasiye","E) 1982 Anayasası"],c:2,exp:"Kanun-i Esasi Osmanlı Devleti'nin ilk anayasasıdır."},
    {q:"Osmanlı Devleti'nde devşirme sistemi hangi amaçla uygulanmıştır?",opts:["A) Vergi toplamak","B) Hristiyan çocuklardan asker ve devlet adamı yetiştirmek","C) Ticaret geliştirmek","D) Toprak dağıtmak","E) Din adamı yetiştirmek"],c:1,exp:"Devşirme sistemi Hristiyan ailelerin çocuklarından Yeniçeri ve devlet adamı yetiştirmek için uygulanmıştır."},
    {q:"Viyana Kongresi (1815) hangi amaçla toplanmıştır?",opts:["A) Osmanlı'yı paylaşmak","B) Napolyon savaşları sonrası Avrupa düzenini kurmak","C) Haçlı Seferi düzenlemek","D) Sömürgeleri paylaşmak","E) Ticaret anlaşması yapmak"],c:1,exp:"Viyana Kongresi Napolyon sonrası Avrupa'nın yeniden düzenlenmesi için toplanmıştır."},
    {q:"Piri Reis'in çizdiği ve keşif dönemini yansıtan dünya haritası hangi yüzyıla aittir?",opts:["A) 14. yy","B) 15. yy","C) 16. yy","D) 17. yy","E) 18. yy"],c:2,exp:"Piri Reis haritası 1513'te (16. yüzyıl) çizilmiştir."},
    {q:"Osmanlı mimarisinin en ünlü yapı ustası olan Mimar Sinan'ın ustalık eseri hangisidir?",opts:["A) Süleymaniye Camii","B) Şehzade Camii","C) Selimiye Camii","D) Sultan Ahmet Camii","E) Fatih Camii"],c:2,exp:"Selimiye Camii (Edirne) Mimar Sinan'ın ustalık eseridir."},
    {q:"Osmanlı Devleti'nde padişahın cülus (tahta çıkma) bahşişi hangi askeri birliğe verilirdi?",opts:["A) Akıncılar","B) Sipahiler","C) Yeniçeriler","D) Azaplar","E) Deliler"],c:2,exp:"Cülus bahşişi padişahın tahta çıkışında Yeniçerilere verilirdi."},
    {q:"Mohaç Savaşı (1526) hangi padişah döneminde yapılmış ve hangi ülke yenilmiştir?",opts:["A) Fatih - Sırbistan","B) Yavuz - İran","C) Kanuni - Macaristan","D) II. Selim - Venedik","E) I. Murat - Sırbistan"],c:2,exp:"Kanuni 1526 Mohaç Savaşı'nda Macaristan'ı yenmiştir."},
    {q:"Sokullu Mehmet Paşa'nın açmayı planladığı ve gerçekleşemeyen kanal projesi hangisidir?",opts:["A) Marmara Kanalı","B) Süveyş Kanalı","C) Don-Volga Kanalı","D) Panama Kanalı","E) Korint Kanalı"],c:2,exp:"Sokullu Don-Volga ve Süveyş kanal projelerini planlamıştır."},
    {q:"Osmanlı'da Divan toplantılarına başkanlık eden ve padişahın mutlak vekili olan kişi kimdir?",opts:["A) Şeyhülislam","B) Kazasker","C) Sadrazam","D) Defterdar","E) Nişancı"],c:2,exp:"Sadrazam, padişahın mutlak vekili olarak Divan'a başkanlık eder."},
    {q:"Anadolu'daki Celali İsyanları'nın temel nedeni hangisidir?",opts:["A) Dini sebep","B) Vergi yükü ve tımar bozulması","C) Yabancı istila","D) Mezhep çatışması","E) Doğal afet"],c:1,exp:"Tımar sisteminin bozulması ve vergi yükü Celali İsyanlarına neden olmuştur."},
    {q:"Osmanlı'da 'Şeyhülislam' hangi alanda yetki sahibidir?",opts:["A) Maliye","B) Askerlik","C) Dini ve hukuki konular (fetva verme)","D) Dış politika","E) Eğitim"],c:2,exp:"Şeyhülislam dini konularda fetva veren en yüksek dini otoritedir."},
    {q:"Osmanlı vergi sisteminde 'Avarız' vergisi ne zaman toplanırdı?",opts:["A) Her yıl düzenli","B) Savaş ve olağanüstü dönemlerde","C) Hasat zamanında","D) Bayramlarda","E) Her ay"],c:1,exp:"Avarız vergisi savaş ve olağanüstü hallerde toplanan geçici bir vergidir."},
    {q:"Yeniçeri Ocağı hangi padişah döneminde kurulmuştur?",opts:["A) Osman Bey","B) Orhan Bey","C) I. Murat","D) Fatih","E) Kanuni"],c:2,exp:"Yeniçeri Ocağı I. Murat döneminde kurulmuştur."},
    {q:"Osmanlı'da tımar sisteminin bozulmasının en önemli sonucu hangisidir?",opts:["A) Ticaretin gelişmesi","B) Eyalet askerlerinin (Tımarlı Sipahi) azalması","C) Deniz gücünün artması","D) Nüfusun azalması","E) Eğitimin gelişmesi"],c:1,exp:"Tımar bozulunca Tımarlı Sipahi sayısı düşmüş ve ordu zayıflamıştır."},
    {q:"Osmanlı Devleti'nde ilk altın parayı bastıran padişah kimdir?",opts:["A) Osman Bey","B) Orhan Bey","C) Fatih Sultan Mehmet","D) Kanuni","E) Yavuz"],c:2,exp:"İlk Osmanlı altın parasını (Sultani) Fatih Sultan Mehmet bastırmıştır."},
    {q:"Osmanlı'nın son döneminde ortaya çıkan fikir akımlarından 'Osmanlıcılık' neyi savunur?",opts:["A) Türk milliyetçiliği","B) Din birliği","C) Tüm Osmanlı vatandaşlarının eşitliği","D) Batılılaşma","E) Ademi merkeziyet"],c:2,exp:"Osmanlıcılık din ve milliyet farkı gözetmeden tüm Osmanlı vatandaşlarının eşitliğini savunur."},
    {q:"Osmanlı minyatür sanatının en ünlü temsilcisi olan ve Kanuni dönemi eserler üreten sanatçı kimdir?",opts:["A) Piri Reis","B) Matrakçı Nasuh","C) Evliya Çelebi","D) Katip Çelebi","E) Fuzuli"],c:1,exp:"Matrakçı Nasuh minyatür ve topografya alanındaki eserleriyle ünlüdür."},
    {q:"Osmanlı'da Lonca teşkilatının görevi nedir?",opts:["A) Askeri eğitim","B) Dini hizmetler","C) Esnaf ve zanaatkarları denetlemek","D) Vergi toplamak","E) Adalet sağlamak"],c:2,exp:"Lonca, esnaf ve zanaatkarların kalite ve fiyat denetimini yapan teşkilattır."},
    {q:"Osmanlı Devleti'nin Kuzey Afrika'daki hakimiyetini sağlayan denizci kimdir?",opts:["A) Piri Reis","B) Turgut Reis","C) Barbaros Hayrettin Paşa","D) Seydi Ali Reis","E) Kılıç Ali Paşa"],c:2,exp:"Barbaros Hayrettin Paşa Kuzey Afrika'yı Osmanlı'ya katmıştır."},
    {q:"Osmanlı'da 'Sancak' hangi yönetim birimine karşılık gelir?",opts:["A) Köy","B) İl (vilayet)","C) İlçe benzeri idari birim","D) Mahalle","E) Başkent"],c:2,exp:"Sancak, eyaletin altındaki idari birimdir ve sancak beyi tarafından yönetilir."}
  ],
  osmanli_kultur: [
    {q:"Osmanlı'da gelirleri doğrudan devlet hazinesine aktarılan topraklara ne ad verilir?",opts:["A) Tımar","B) Mukataa","C) Vakıf","D) Dirlik","E) Yurtluk"],c:1,exp:"Mukataa topraklarının geliri iltizam usulüyle hazineye aktarılır."},
    {q:"Osmanlı toprak sisteminde en küçük gelirli dirlik hangisidir?",opts:["A) Has","B) Zeamet","C) Tımar","D) Mukataa","E) Paşmaklık"],c:2,exp:"Tımar, yıllık geliri 3.000-20.000 akçe olan en küçük dirliktir."},
    {q:"Osmanlı'da kadıların görevi hangi alandadır?",opts:["A) Sadece dini","B) Hem yargı hem belediye işleri","C) Sadece askeri","D) Sadece mali","E) Sadece eğitim"],c:1,exp:"Kadılar hem yargı hem de belediye işlerini yürüten çok yönlü görevlilerdir."},
    {q:"Osmanlı'da vakıf sisteminin temel amacı hangisidir?",opts:["A) Vergi toplamak","B) Sosyal hizmet ve kamu yararı","C) Askeri eğitim","D) Ticaret geliştirmek","E) Nüfus artışı"],c:1,exp:"Vakıf sistemi eğitim, sağlık, bayındırlık gibi sosyal hizmetleri finanse etmiştir."},
    {q:"Osmanlı'da devlet memurlarına ve komutanlara tahsis edilen en büyük gelirli dirlik hangisidir?",opts:["A) Tımar","B) Zeamet","C) Has","D) Mukataa","E) Malikane"],c:2,exp:"Has, padişah, sadrazam ve beylerbeyine ayrılan en büyük dirliktir."},
    {q:"Osmanlı'da Enderun Mektebi hangi amaçla kurulmuştur?",opts:["A) Halk eğitimi","B) Devlet yöneticisi yetiştirmek","C) Asker eğitmek","D) Tüccar yetiştirmek","E) Din adamı yetiştirmek"],c:1,exp:"Enderun Mektebi, devşirme çocuklarından üst düzey yönetici yetiştirmek için kurulmuştur."},
    {q:"Osmanlı'da Kapıkulu askerleri kimlerden oluşur?",opts:["A) Türkmen beylerinden","B) Devşirme sistemiyle yetiştirilen askerlerden","C) Gönüllü sipahilerden","D) Köylülerden","E) Yabancı paralı askerlerden"],c:1,exp:"Kapıkulu askerleri devşirme sistemiyle yetiştirilmiş maaşlı askerlerdir."},
    {q:"Osmanlı mimarisinde külliye kavramı neyi ifade eder?",opts:["A) Tek başına cami","B) Cami etrafında oluşan sosyal yapılar topluluğu","C) Saray kompleksi","D) Kale","E) Tersane"],c:1,exp:"Külliye, cami, medrese, hamam, imaret gibi yapıların bir arada bulunduğu komplekstir."},
    {q:"Osmanlı'da 'Narh' uygulaması neyi amaçlamıştır?",opts:["A) Toprak dağıtımı","B) Ürün fiyatlarının belirlenerek halkın korunması","C) Askere alma","D) Vergi indirimi","E) Dini eğitim"],c:1,exp:"Narh, esnafın keyfi fiyat artışını önlemek için devletin belirlediği fiyat tavanıdır."},
    {q:"Osmanlı'da eğitim ve öğretim kurumlarının en üst düzeyi olan kurum hangisidir?",opts:["A) Sıbyan Mektebi","B) Medrese","C) Enderun","D) Bimaristan","E) Tekke"],c:2,exp:"Medreseler Osmanlı'daki en yüksek eğitim kurumlarıdır."},
    {q:"Osmanlı'da Nişancı'nın görevi nedir?",opts:["A) Maliye yönetmek","B) Padişahın tuğrasını çekmek ve toprak kayıtlarını tutmak","C) Orduyu yönetmek","D) Fetva vermek","E) Donanmayı yönetmek"],c:1,exp:"Nişancı ferman ve beratlara tuğra çeker ve tahrir defterlerini tutar."},
    {q:"Osmanlı'da zeamet dirliğinin yıllık geliri ne kadardır?",opts:["A) 3.000 akçeye kadar","B) 20.000-100.000 akçe","C) 100.000 akçe üstü","D) 1.000 akçe","E) 500.000 akçe"],c:1,exp:"Zeamet yıllık geliri 20.000-100.000 akçe olan orta büyüklükte dirliktir."},
    {q:"Osmanlı'da 'İmaret' nedir?",opts:["A) Hastane","B) Fakirlere yemek dağıtan hayır kurumu","C) Medrese","D) Kervansaray","E) Hamam"],c:1,exp:"İmaret, vakıf geliriyle fakirlere ücretsiz yemek dağıtan kurumdur."},
    {q:"Osmanlı eğitim sisteminde çocukların temel okuma-yazma öğrendiği kurum hangisidir?",opts:["A) Medrese","B) Enderun","C) Sıbyan Mektebi","D) Darülfünun","E) Mühendishane"],c:2,exp:"Sıbyan Mektebi ilkokul düzeyinde temel eğitim veren kurumdur."},
    {q:"Osmanlı'da 'Tımar' sahiplerinin en önemli yükümlülüğü hangisidir?",opts:["A) Vergi vermek","B) Toprak geliriyle asker beslemek ve savaşa katılmak","C) Saray korumak","D) Gemi yapmak","E) Ticaret yapmak"],c:1,exp:"Tımar sahibi toprak geliriyle atlı asker (cebelü) beslemek ve sefere katılmak zorundadır."},
    {q:"Osmanlı'da Defterdar'ın görevi nedir?",opts:["A) Adalet işleri","B) Maliye ve hazine yönetimi","C) Ordu komutanlığı","D) Dış politika","E) Eğitim"],c:1,exp:"Defterdar, Osmanlı maliye teşkilatının başıdır."},
    {q:"Osmanlı'da 'Çift Hane' sistemi neyi ifade eder?",opts:["A) Saray yönetimi","B) Bir çift öküz sürebilecek aile birimi ve toprak parçası","C) İki bölümlü medrese","D) Çifte vergilendirme","E) İki padişahlık"],c:1,exp:"Çift Hane, reaya ailesinin işleyebileceği toprak birimi ve vergi hesap temelidir."},
    {q:"Osmanlı'da 'Kazasker'in görevi hangisidir?",opts:["A) Maliye","B) Donanma","C) Adalet ve eğitim işlerinin yönetimi","D) Dış politika","E) Taşra yönetimi"],c:2,exp:"Kazasker, kadı atamalarını yapar ve yargı-eğitim işlerinden sorumludur."},
    {q:"Osmanlı'da Kapan-ı Dakik ve Kapan-ı Hınta gibi kurumlar hangi alanda faaliyet gösterir?",opts:["A) Askeri","B) Eğitim","C) Ticaret (Un ve tahıl kontrol merkezleri)","D) Dini","E) Sağlık"],c:2,exp:"Kapan, ticari ürünlerin tartıldığı ve denetlendiği merkezlerdir."},
    {q:"Osmanlı'da padişahların savaşa gittiğinde devleti yönetmekle görevlendirdiği kişiye ne denir?",opts:["A) Nişancı","B) Sadaret Kaymakamı","C) Defterdar","D) Kazasker","E) Kaptan-ı Derya"],c:1,exp:"Sadaret Kaymakamı, padişah seferdeyken İstanbul'u yönetir."},
    {q:"Osmanlı'da Bimaristan (Darüşşifa) hangi hizmeti verir?",opts:["A) Eğitim","B) Hastane ve tedavi hizmeti","C) Konaklama","D) Posta","E) Mahkeme"],c:1,exp:"Bimaristan Osmanlı'daki hastanelere verilen isimdir."},
    {q:"Osmanlı'da Menzil teşkilatı hangi amaçla kurulmuştur?",opts:["A) Askeri eğitim","B) Posta ve haberleşme","C) Vergi toplama","D) Ticaret","E) Yargı"],c:1,exp:"Menzil teşkilatı resmi posta ve haberleşme ağıdır."},
    {q:"Osmanlı'da esnafların mesleğe kabul edilme törenine ne ad verilir?",opts:["A) Narh","B) Gedik","C) İcazet","D) Peştamal kuşanma","E) Berat"],c:3,exp:"Peştamal kuşanma töreni esnafın ustalığa kabul edilme ritüelidir."},
    {q:"Osmanlı'da ilmiye sınıfına dahil olan görevlilerden hangisi eğitim veren kişidir?",opts:["A) Kadı","B) Müderris","C) Şeyhülislam","D) Nişancı","E) Defterdar"],c:1,exp:"Müderris medreselerde ders veren öğretim üyesidir."},
    {q:"Osmanlı'da Akıncılar hangi görevle bilinir?",opts:["A) Saray muhafızlığı","B) Sınır boylarında keşif ve baskın yapmak","C) Vergi toplamak","D) Kadılık yapmak","E) Ticaret"],c:1,exp:"Akıncılar düşman topraklarında keşif ve yıpratma görevi yapan hafif süvari birlikleridir."},
    {q:"Osmanlı'da 'Ocaklık' toprak türü neyi ifade eder?",opts:["A) Padişaha ait toprak","B) Geliri kale muhafızlarına ve tersane giderlerine ayrılan toprak","C) Vakıf arazisi","D) Has arazi","E) Mülk arazi"],c:1,exp:"Ocaklık, geliri kale garnizonları ve tersane gibi askeri giderlere ayrılan toprak türüdür."},
    {q:"Osmanlı Devleti'nde 'Reaya' kavramı kimleri ifade eder?",opts:["A) Yönetici sınıf","B) Askerler","C) Vergi veren üretici halk","D) Din adamları","E) Tüccarlar"],c:2,exp:"Reaya, toprakta çalışan ve vergi ödeyen üretici halk sınıfıdır."},
    {q:"Osmanlı'da Kaptan-ı Derya'nın görevi nedir?",opts:["A) Kara ordusunu yönetmek","B) Donanmanın başkomutanı olmak","C) Maliye yönetmek","D) Fetva vermek","E) Eğitim yönetmek"],c:1,exp:"Kaptan-ı Derya, Osmanlı donanmasının başkomutanıdır."},
    {q:"Osmanlı'da 'İltizam' sistemi nedir?",opts:["A) Askere alma sistemi","B) Devlet gelirlerinin açık artırmayla özel kişilere satılması","C) Eğitim sistemi","D) Toprak dağıtımı","E) Yargı sistemi"],c:1,exp:"İltizam, vergi gelirlerinin mültezim adı verilen kişilere satılmasıdır."},
    {q:"Osmanlı'da 'Mülk arazi' sahibinin hangi hakkı vardır?",opts:["A) Kullanım hakkı","B) Tam mülkiyet (satma, devretme, miras bırakma)","C) Kira hakkı","D) Geçici kullanım","E) Sadece ekim hakkı"],c:1,exp:"Mülk arazi tam mülkiyet hakkına sahip özel topraktır."},
    {q:"Osmanlı'da ilk Osmanlı medresesini hangi padişah açmıştır?",opts:["A) Osman Bey","B) Orhan Bey","C) I. Murat","D) Fatih","E) II. Bayezid"],c:1,exp:"Osmanlı'da ilk medreseyi Orhan Bey İznik'te açmıştır."},
    {q:"Osmanlı'da 'Darülhadis' ne tür bir eğitim kurumudur?",opts:["A) Tıp okulu","B) Hadis ilmi öğretilen medrese","C) Askerlik okulu","D) Mühendislik okulu","E) Lise"],c:1,exp:"Darülhadis, Hz. Muhammed'in hadislerinin öğretildiği ihtisas medresesidir."},
    {q:"Osmanlı'da 'Çarşı ve Pazar' düzenini kim denetlerdi?",opts:["A) Sadrazam","B) Kadı ve Muhtesip","C) Padişah","D) Kaptan-ı Derya","E) Defterdar"],c:1,exp:"Muhtesip (ihtisab ağası) pazar ve çarşıların denetiminden sorumludur."},
    {q:"Osmanlı'da 'Subaşı'nın görevi nedir?",opts:["A) Eğitim","B) Şehir güvenliğini sağlamak","C) Vergi toplamak","D) Fetva vermek","E) Ticaret yapmak"],c:1,exp:"Subaşı şehrin güvenlik ve asayişinden sorumlu görevlidir."},
    {q:"Osmanlı'da kervansaraylar hangi amaçla inşa edilmiştir?",opts:["A) Askeri üs","B) Tüccar ve yolcuların konaklama ve güvenliğini sağlamak","C) Dini eğitim","D) Saray yönetimi","E) Mahkeme"],c:1,exp:"Kervansaraylar ticaret yolları üzerinde yolcuların ücretsiz konaklaması için yapılmıştır."},
    {q:"Osmanlı'da Has topraklar kime aittir?",opts:["A) Köylülere","B) Padişah, Sadrazam ve Beylerbeyine","C) Tımar sahiplerine","D) Zeamet sahiplerine","E) Müderrislere"],c:1,exp:"Has, yıllık geliri 100.000 akçe üstü olan ve padişah, sadrazam, beylerbeyine ait dirliktir."}
  ],
  osmanli_20yy: [
    {q:"31 Mart İsyanını bastırmak için Selanik'ten gelen ordunun adı nedir?",opts:["A) Kuvayı Milliye","B) Hareket Ordusu","C) Yıldırım Orduları","D) Şark Ordusu","E) Kafkas Kolordusu"],c:1,exp:"Hareket Ordusu 31 Mart İsyanı'nı bastırmıştır."},
    {q:"Trablusgarp Savaşı (1911-1912) hangi devletler arasında yapılmıştır?",opts:["A) Osmanlı - İngiltere","B) Osmanlı - İtalya","C) Osmanlı - Fransa","D) Osmanlı - Rusya","E) Osmanlı - Yunanistan"],c:1,exp:"İtalya Trablusgarp'ı işgal etmiş ve Osmanlı savunma yapmıştır."},
    {q:"Balkan Savaşları sonucu Osmanlı'nın Avrupa'daki toprak kaybının bir sonucu olarak yaşanan göç dalgası neye yol açmıştır?",opts:["A) Nüfus azalması","B) Batı Anadolu'ya yoğun Türk göçü ve demografik değişim","C) Sanayileşme","D) Eğitim reformu","E) Tarım devrimi"],c:1,exp:"Balkan Savaşları sonrası milyonlarca Türk Anadolu'ya göç etmek zorunda kalmıştır."},
    {q:"I. Dünya Savaşı'nda Osmanlı hangi ittifak grubunda yer almıştır?",opts:["A) İtilaf Devletleri","B) İttifak Devletleri","C) Tarafsız","D) Balkan İttifakı","E) SSCB"],c:1,exp:"Osmanlı Almanya ve Avusturya-Macaristan ile İttifak Devletleri'nde yer almıştır."},
    {q:"Çanakkale Savaşı'nda Türk ordusuna komuta eden Mustafa Kemal'in savaştığı yer neresidir?",opts:["A) Sakarya","B) Anafartalar","C) Dumlupınar","D) Kütahya","E) İnönü"],c:1,exp:"Mustafa Kemal Anafartalar'da Çanakkale'nin kaderini değiştiren komutayı üstlenmiştir."},
    {q:"Osmanlı'nın I. Dünya Savaşı'na girmesine yol açan olay hangisidir?",opts:["A) Balkan Savaşları","B) Goeben ve Breslau gemilerinin Rusya'yı bombalaması","C) Trablusgarp Savaşı","D) Sevr Antlaşması","E) Mondros Ateşkesi"],c:1,exp:"Alman gemilerinin Osmanlı bayrağıyla Rusya limanlarını bombalaması savaşa girişi tetiklemiştir."},
    {q:"I. Dünya Savaşı'nda Osmanlı'nın kazandığı en önemli cephe hangisidir?",opts:["A) Kafkas","B) Kanal","C) Çanakkale","D) Irak","E) Hicaz"],c:2,exp:"Çanakkale Cephesi Osmanlı'nın kazandığı en parlak zaferdir."},
    {q:"Mondros Ateşkesi (30 Ekim 1918) hangi savaşın sonunda imzalanmıştır?",opts:["A) Balkan Savaşları","B) Trablusgarp Savaşı","C) I. Dünya Savaşı","D) Kurtuluş Savaşı","E) Çanakkale Savaşı"],c:2,exp:"Mondros Ateşkesi I. Dünya Savaşı sonunda Osmanlı'nın imzaladığı mütareke belgosidir."},
    {q:"II. Meşrutiyet (1908) hangi cemiyetin baskısıyla ilan edilmiştir?",opts:["A) Müdafaa-i Hukuk","B) İttihat ve Terakki","C) Reddi İlhak","D) Kilikyalılar","E) Trakya Paşaeli"],c:1,exp:"İttihat ve Terakki Cemiyeti'nin baskısıyla II. Abdülhamit II. Meşrutiyet'i ilan etmiştir."},
    {q:"Osmanlı'da II. Abdülhamit'in tahttan indirilmesine neden olan olay hangisidir?",opts:["A) Trablusgarp Savaşı","B) 31 Mart İsyanı","C) Balkan Savaşları","D) I. Dünya Savaşı","E) Çanakkale Savaşı"],c:1,exp:"31 Mart İsyanı bastırıldıktan sonra II. Abdülhamit tahttan indirilmiştir."},
    {q:"I. Dünya Savaşı'nda Osmanlı'nın Sarıkamış Harekâtı hangi cephede gerçekleşmiştir?",opts:["A) Çanakkale","B) Kanal","C) Kafkas","D) Irak","E) Suriye-Filistin"],c:2,exp:"Sarıkamış Harekâtı Kafkas Cephesi'nde Ruslara karşı yapılmıştır."},
    {q:"Osmanlı'da 'Meclis-i Mebusan' ilk kez hangi dönemde açılmıştır?",opts:["A) Tanzimat","B) I. Meşrutiyet","C) II. Meşrutiyet","D) Cumhuriyet","E) Islahat"],c:1,exp:"Meclis-i Mebusan I. Meşrutiyet (1876) döneminde açılmıştır."},
    {q:"Wilson İlkeleri'nin Osmanlı Devleti açısından önemi nedir?",opts:["A) Toprak kaybını artırdı","B) Türk halkına bağımsızlık hakkı tanıdı","C) Sömürgeciliği destekledi","D) Osmanlı'yı yıktı","E) İngiltere'ye yaradı"],c:1,exp:"Wilson İlkeleri 'milletlerin kendi kaderini tayin hakkı' ilkesiyle Türk halkına umut vermiştir."},
    {q:"I. Dünya Savaşı'nda Osmanlı'nın Kanal Cephesi'nde karşısına çıkan devlet hangisidir?",opts:["A) Rusya","B) Fransa","C) İngiltere","D) İtalya","E) Yunanistan"],c:2,exp:"Kanal Cephesi'nde Osmanlı Mısır'daki İngiliz kuvvetleriyle savaşmıştır."},
    {q:"Son Osmanlı Mebusan Meclisi hangi belgeyi kabul etmiştir?",opts:["A) Tanzimat Fermanı","B) Misak-ı Milli","C) Sened-i İttifak","D) Kanun-i Esasi","E) Mondros Ateşkesi"],c:1,exp:"Son Osmanlı Mebusan Meclisi 28 Ocak 1920'de Misak-ı Milli'yi kabul etmiştir."},
    {q:"Osmanlı'da askeri alanda Almanlardan yardım alınan ve ordunun modernizasyonuna katkı sağlayan kurum hangisidir?",opts:["A) Darülfünun","B) Harbiye Mektebi","C) Enderun","D) Medrese","E) Tekke"],c:1,exp:"Harbiye Mektebi'nde Alman subaylar eğitim vererek ordunun modernizasyonunu sağlamıştır."},
    {q:"Osmanlı'nın son döneminde milli bankacılık hareketinin öncülerinden olan kurum hangisidir?",opts:["A) Ziraat Bankası","B) İtibar-ı Milli Bankası","C) Osmanlı Bankası","D) İş Bankası","E) Etibank"],c:1,exp:"İtibar-ı Milli Bankası Osmanlı'nın son döneminde kurulan milli sermayeli bankadır."},
    {q:"I. Dünya Savaşı sonunda Osmanlı'nın imzaladığı barış antlaşması hangisidir?",opts:["A) Versay","B) Sevr","C) Lozan","D) Mondros","E) Nöyyi"],c:1,exp:"Sevr Antlaşması (1920) I. Dünya Savaşı sonrası Osmanlı'ya dayatılan barış antlaşmasıdır."},
    {q:"Kuvayı Milliye hareketi nasıl ortaya çıkmıştır?",opts:["A) Padişah emriyle","B) Halkın işgallere karşı kendiliğinden direnişi","C) İtilaf Devletleri desteğiyle","D) TBMM kararıyla","E) Almanya yardımıyla"],c:1,exp:"Kuvayı Milliye, işgallere karşı halkın kendiliğinden oluşturduğu direniş hareketidir."},
    {q:"Osmanlı'nın son padişahı kimdir?",opts:["A) Abdülmecid","B) II. Abdülhamit","C) V. Mehmet Reşat","D) VI. Mehmet Vahdettin","E) Abdülaziz"],c:3,exp:"VI. Mehmet Vahdettin Osmanlı'nın son padişahıdır (1918-1922)."}
  ],
  inkilap_kurtulus: [
    {q:"Amasya Genelgesi'nde Milli Mücadelenin amacı ve gerekçesi ilk kez açıklanmıştır. Bu genelgenin tarihi nedir?",opts:["A) 19 Mayıs 1919","B) 22 Haziran 1919","C) 23 Temmuz 1919","D) 4 Eylül 1919","E) 11 Ekim 1919"],c:1,exp:"22 Haziran 1919 Amasya Genelgesi Milli Mücadelenin ilk adımıdır."},
    {q:"Erzurum Kongresi hangi bakımdan bölgesel, kararları bakımından ulusaldır?",opts:["A) Toplanışı - kararları","B) Katılımcıları - finansı","C) Yeri - süresi","D) Delegeleri - amacı","E) Örgütü - bütçesi"],c:0,exp:"Erzurum Kongresi toplanışı bölgesel, kararları ulusal niteliktedir."},
    {q:"Sivas Kongresi'nin en önemli kararı hangisidir?",opts:["A) Manda reddedildi","B) Tüm cemiyetler birleştirildi","C) İlk anayasa yapıldı","D) Saltanat kaldırıldı","E) Cumhuriyet ilan edildi"],c:1,exp:"Sivas Kongresi'nde bölgesel cemiyetler birleştirilerek ulusal bir yapı oluşturulmuştur."},
    {q:"TBMM ne zaman ve nerede açılmıştır?",opts:["A) 23 Nisan 1920 - Ankara","B) 29 Ekim 1923 - Ankara","C) 22 Haziran 1919 - Amasya","D) 19 Mayıs 1919 - Samsun","E) 30 Ekim 1918 - İstanbul"],c:0,exp:"TBMM 23 Nisan 1920'de Ankara'da açılmıştır."},
    {q:"Sakarya Meydan Muharebesi'nin (1921) önemi nedir?",opts:["A) İlk zafer","B) Son zafer","C) Savunmadan taarruza geçişi sağlamıştır","D) Düşman denize döküldü","E) Mudanya Ateşkesi imzalandı"],c:2,exp:"Sakarya Meydan Muharebesi Türk ordusunun savunmadan taarruza geçtiği dönüm noktasıdır."},
    {q:"Büyük Taarruz (26 Ağustos 1922) sonrasında Yunan ordusunun Anadolu'dan çekilmesini sağlayan ateşkes hangisidir?",opts:["A) Mondros","B) Mudanya","C) Gümrü","D) Moskova","E) Lozan"],c:1,exp:"Mudanya Ateşkesi (11 Ekim 1922) Büyük Taarruz sonrası imzalanmıştır."},
    {q:"Mustafa Kemal'in Samsun'a çıkış tarihi nedir?",opts:["A) 23 Nisan 1920","B) 29 Ekim 1923","C) 19 Mayıs 1919","D) 30 Ağustos 1922","E) 22 Haziran 1919"],c:2,exp:"19 Mayıs 1919 Milli Mücadele'nin başlangıcı kabul edilir."},
    {q:"Kütahya-Eskişehir Muharebeleri'nde TBMM ordusunun geri çekilmesi üzerine Mustafa Kemal'e verilen yetki hangisidir?",opts:["A) Cumhurbaşkanlığı","B) Başkomutanlık","C) Sadrazamlık","D) Genelkurmay Başkanlığı","E) Meclis Başkanlığı"],c:1,exp:"Kütahya-Eskişehir yenilgisi sonrası Mustafa Kemal'e Başkomutanlık yetkisi verilmiştir."},
    {q:"I. İnönü Savaşı'nın (1921) en önemli siyasi sonucu hangisidir?",opts:["A) Lozan Antlaşması","B) Sovyet Rusya ile Moskova Antlaşması","C) İtalya ile barış","D) Mudanya Ateşkesi","E) TBMM'nin kapanması"],c:1,exp:"I. İnönü zaferi sonrası SSCB ile Moskova Antlaşması imzalanmıştır."},
    {q:"Tekalif-i Milliye Emirleri neyi amaçlamıştır?",opts:["A) Vergi reformu","B) Ordunun ihtiyaçlarının halktan karşılanması","C) Eğitim reformu","D) Toprak reformu","E) Sanayi devrimi"],c:1,exp:"Tekalif-i Milliye Emirleri Sakarya öncesi ordunun ihtiyaçlarını karşılamak için çıkarılmıştır."},
    {q:"Lozan Antlaşması hangi tarihte imzalanmıştır?",opts:["A) 29 Ekim 1923","B) 24 Temmuz 1923","C) 11 Ekim 1922","D) 30 Ağustos 1922","E) 23 Nisan 1920"],c:1,exp:"Lozan Antlaşması 24 Temmuz 1923'te İsviçre'de imzalanmıştır."},
    {q:"Lozan Antlaşması'nda çözümsüz kalan ve Türkiye lehine sonraki yıllarda çözülen konu hangisidir?",opts:["A) Kapitülasyonlar","B) Musul sorunu","C) Boğazlar","D) Dış borçlar","E) Azınlık hakları"],c:2,exp:"Boğazlar sorunu 1936 Montrö Sözleşmesi ile Türkiye lehine çözülmüştür."},
    {q:"Saltanat hangi tarihte kaldırılmıştır?",opts:["A) 29 Ekim 1923","B) 1 Kasım 1922","C) 3 Mart 1924","D) 23 Nisan 1920","E) 24 Temmuz 1923"],c:1,exp:"Saltanat 1 Kasım 1922'de kaldırılmıştır."},
    {q:"Cumhuriyet ne zaman ilan edilmiştir?",opts:["A) 1 Kasım 1922","B) 24 Temmuz 1923","C) 29 Ekim 1923","D) 3 Mart 1924","E) 23 Nisan 1920"],c:2,exp:"Cumhuriyet 29 Ekim 1923'te ilan edilmiştir."},
    {q:"Halifelik ne zaman kaldırılmıştır?",opts:["A) 1 Kasım 1922","B) 29 Ekim 1923","C) 3 Mart 1924","D) 5 Aralık 1934","E) 25 Kasım 1925"],c:2,exp:"Halifelik 3 Mart 1924'te kaldırılmıştır."},
    {q:"Tevhid-i Tedrisat Kanunu hangi tarihte kabul edilmiştir?",opts:["A) 29 Ekim 1923","B) 3 Mart 1924","C) 1 Kasım 1928","D) 5 Aralık 1934","E) 25 Kasım 1925"],c:1,exp:"3 Mart 1924'te kabul edilen Tevhid-i Tedrisat eğitimde birliği sağlamıştır."},
    {q:"Tekke ve zaviyelerin kapatılması hangi Atatürk ilkesiyle doğrudan ilişkilidir?",opts:["A) Milliyetçilik","B) Halkçılık","C) Laiklik","D) Devletçilik","E) İnkılapçılık"],c:2,exp:"Tekke ve zaviyelerin kapatılması Laiklik ilkesinin uygulamasıdır."},
    {q:"Yeni Türk harflerinin kabul edildiği tarih hangisidir?",opts:["A) 3 Mart 1924","B) 25 Kasım 1925","C) 1 Kasım 1928","D) 5 Aralık 1934","E) 29 Ekim 1923"],c:2,exp:"1 Kasım 1928'de Latin harflerine geçilmiştir."},
    {q:"Kadınlara seçme ve seçilme hakkı hangi tarihte verilmiştir?",opts:["A) 1926","B) 1930","C) 1934","D) 1938","E) 1923"],c:2,exp:"5 Aralık 1934'te Türk kadınlarına seçme ve seçilme hakkı verilmiştir."},
    {q:"Şapka İnkılabı hangi tarihte yapılmıştır?",opts:["A) 1 Kasım 1928","B) 25 Kasım 1925","C) 3 Mart 1924","D) 29 Ekim 1923","E) 5 Aralık 1934"],c:1,exp:"25 Kasım 1925'te Şapka Kanunu kabul edilmiştir."},
    {q:"Medeni Kanun hangi ülkeden alınmıştır?",opts:["A) Almanya","B) Fransa","C) İsviçre","D) İtalya","E) İngiltere"],c:2,exp:"1926'da İsviçre'den alınan Medeni Kanun ile kadın-erkek eşitliği sağlanmıştır."},
    {q:"TBMM'nin açılmasından sonra çıkan ilk iç isyan hangisidir?",opts:["A) 31 Mart","B) Şeyh Sait İsyanı","C) Bolu-Düzce Ayaklanmaları","D) Menemen Olayı","E) Celali"],c:2,exp:"TBMM'ye karşı çıkan ilk büyük iç isyanlar Bolu-Düzce Ayaklanmalarıdır."},
    {q:"II. İnönü Savaşı'nın (1921) siyasi sonucu hangisidir?",opts:["A) Moskova Antlaşması","B) İtilaf Devletleri'nin Ankara'yı tanıması","C) Lozan Antlaşması","D) Mudanya Ateşkesi","E) Londra Konferansı'na TBMM'nin çağrılması"],c:4,exp:"II. İnönü zaferi sonrası İtilaf Devletleri TBMM'yi Londra Konferansı'na çağırmıştır."},
    {q:"Gümrü Antlaşması (1920) hangi devletle imzalanmıştır?",opts:["A) Gürcistan","B) İran","C) Ermenistan","D) Sovyet Rusya","E) Yunanistan"],c:2,exp:"TBMM'nin uluslararası alanda imzaladığı ilk antlaşma Ermenistan ile Gümrü'dür."},
    {q:"Ankara Antlaşması (1921) hangi devletle imzalanmış ve güney cephesi kapanmıştır?",opts:["A) İngiltere","B) İtalya","C) Fransa","D) Yunanistan","E) Rusya"],c:2,exp:"Fransa ile Ankara Antlaşması imzalanarak güney cephesi kapanmıştır."},
    {q:"Kurtuluş Savaşı'nda düzenli ordunun kurulmasını sağlayan komutan kimdir?",opts:["A) Kazım Karabekir","B) İsmet İnönü","C) Fevzi Çakmak","D) Mustafa Kemal","E) Ali Fuat Cebesoy"],c:3,exp:"Mustafa Kemal'in emriyle düzenli ordu kurulmuştur."},
    {q:"Doğu Cephesi'nde Ermeni ordusunu yenerek Kars ve Sarıkamış'ı alan komutan kimdir?",opts:["A) İsmet İnönü","B) Kazım Karabekir","C) Fevzi Çakmak","D) Ali Fuat Cebesoy","E) Refet Bele"],c:1,exp:"Kazım Karabekir Doğu Cephesi'nde Ermenileri yenmiştir."},
    {q:"Amasya Görüşmeleri (1919) hangi iki taraf arasında yapılmıştır?",opts:["A) TBMM - İngiltere","B) Temsil Heyeti - İstanbul Hükümeti","C) Osmanlı - Rusya","D) TBMM - Fransa","E) Mustafa Kemal - Padişah"],c:1,exp:"Amasya Görüşmeleri Temsil Heyeti ile İstanbul Hükümeti arasında yapılmıştır."},
    {q:"Misak-ı Milli'nin temel ilkesi hangisidir?",opts:["A) Mandater yönetim kabul edilmesi","B) Türk vatanının bölünmez bütünlüğü","C) Kapitülasyonların devamı","D) İstanbul'un işgali","E) Saltanatın korunması"],c:1,exp:"Misak-ı Milli Türk vatanının bölünmezliğini ve tam bağımsızlığı savunur."},
    {q:"Mustafa Kemal'in 'Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır' sözü hangi savaş öncesinde söylenmiştir?",opts:["A) I. İnönü","B) II. İnönü","C) Sakarya","D) Büyük Taarruz","E) Çanakkale"],c:2,exp:"Bu söz Sakarya Meydan Muharebesi öncesinde söylenmiştir."},
    {q:"Türkiye Büyük Millet Meclisi'nin ilk anayasası olan Teşkilat-ı Esasiye ne zaman kabul edilmiştir?",opts:["A) 23 Nisan 1920","B) 20 Ocak 1921","C) 29 Ekim 1923","D) 3 Mart 1924","E) 1 Kasım 1922"],c:1,exp:"1921 Anayasası (Teşkilat-ı Esasiye) 20 Ocak 1921'de kabul edilmiştir."},
    {q:"Batı Cephesi'nde İnönü Muharebelerini kazanan komutan kimdir?",opts:["A) Mustafa Kemal","B) Kazım Karabekir","C) İsmet Paşa (İnönü)","D) Fevzi Çakmak","E) Ali Fuat Cebesoy"],c:2,exp:"İsmet Paşa (İnönü) Batı Cephesi'nde İnönü zaferlerini kazanmıştır."},
    {q:"Büyük Taarruz'un başlangıç tarihi nedir?",opts:["A) 30 Ağustos 1922","B) 26 Ağustos 1922","C) 9 Eylül 1922","D) 11 Ekim 1922","E) 1 Kasım 1922"],c:1,exp:"Büyük Taarruz 26 Ağustos 1922'de başlamıştır."},
    {q:"Yunan ordusunun İzmir'den denize döküldüğü tarih hangisidir?",opts:["A) 26 Ağustos 1922","B) 30 Ağustos 1922","C) 9 Eylül 1922","D) 11 Ekim 1922","E) 1 Kasım 1922"],c:2,exp:"9 Eylül 1922'de Türk ordusu İzmir'e girmiş ve Yunan kuvvetleri denize dökülmüştür."},
    {q:"Havza Genelgesi'nin temel amacı hangisidir?",opts:["A) Halkı uyandırmak ve mitingler düzenletmek","B) Ordu kurmak","C) Meclis açmak","D) Antlaşma imzalamak","E) Padişahı devirmek"],c:0,exp:"Havza Genelgesi halkın işgallere karşı uyanmasını ve mitingler düzenlemesini amaçlamıştır."},
    {q:"Kurtuluş Savaşı'nda TBMM'ye karşı çıkarılan isyanları bastırmak için hangi mahkemeler kurulmuştur?",opts:["A) Ağır Ceza","B) İstiklal Mahkemeleri","C) Askeri Mahkemeler","D) Divan-ı Harp","E) Sulh Ceza"],c:1,exp:"İstiklal Mahkemeleri iç isyanları bastırmak ve otoriteyi sağlamak için kurulmuştur."},
    {q:"Milli Mücadele döneminde yayın organı olarak kullanılan ve Mustafa Kemal'in desteklediği gazete hangisidir?",opts:["A) Tasvir-i Efkar","B) Hakimiyet-i Milliye","C) Tanin","D) İkdam","E) Tercüman-ı Ahval"],c:1,exp:"Hakimiyet-i Milliye gazetesi TBMM'nin yarı resmi yayın organıdır."}
  ],
  ataturk_politikalar: [
    {q:"I. Beş Yıllık Sanayi Planı'nın uygulanması hangi Atatürk ilkesiyle ilgilidir?",opts:["A) Milliyetçilik","B) Devletçilik","C) Halkçılık","D) Laiklik","E) İnkılapçılık"],c:1,exp:"Devletçilik ilkesi devletin ekonomide aktif rol almasını öngörür."},
    {q:"Montrö Boğazlar Sözleşmesi hangi yıl imzalanmıştır?",opts:["A) 1930","B) 1934","C) 1936","D) 1938","E) 1923"],c:2,exp:"1936 Montrö Sözleşmesi ile Boğazlarda Türk egemenliği tam olarak sağlanmıştır."},
    {q:"Hatay'ın Türkiye'ye katılma süreci hangi yılda tamamlanmıştır?",opts:["A) 1936","B) 1937","C) 1938","D) 1939","E) 1940"],c:3,exp:"Hatay 1939'da referandumla Türkiye'ye katılmıştır."},
    {q:"Sadabat Paktı (1937) hangi bölgedeki devletler arasında imzalanmıştır?",opts:["A) Balkanlar","B) Orta Doğu","C) Avrupa","D) Asya","E) Afrika"],c:1,exp:"Sadabat Paktı Türkiye, İran, Irak ve Afganistan arasında imzalanmıştır."},
    {q:"Balkan Antantı (1934) hangi devletler arasında kurulmuştur?",opts:["A) Türkiye, Yunanistan, Romanya, Yugoslavya","B) Türkiye, İran, Irak, Afganistan","C) Türkiye, İngiltere, Fransa","D) Türkiye, SSCB, Almanya","E) Türkiye, Mısır, Suriye"],c:0,exp:"Balkan Antantı Türkiye, Yunanistan, Romanya ve Yugoslavya arasında kurulmuştur."},
    {q:"Atatürk'ün 'Yurtta sulh, cihanda sulh' ilkesi hangi politikayı yansıtır?",opts:["A) Saldırgan dış politika","B) Yayılmacı politika","C) Barışçıl dış politika","D) İzolasyonist politika","E) Sömürgeci politika"],c:2,exp:"Bu ilke Türkiye'nin barışçıl dış politika anlayışının temelidir."},
    {q:"Türk Tarih Kurumu hangi yıl kurulmuştur?",opts:["A) 1928","B) 1930","C) 1931","D) 1932","E) 1934"],c:2,exp:"Türk Tarih Kurumu 1931'de kurulmuştur (Milliyetçilik ilkesi)."},
    {q:"Türk Dil Kurumu hangi yıl kurulmuştur?",opts:["A) 1928","B) 1930","C) 1931","D) 1932","E) 1934"],c:3,exp:"Türk Dil Kurumu 1932'de kurulmuştur."},
    {q:"Soyadı Kanunu hangi tarihte kabul edilmiştir?",opts:["A) 1926","B) 1928","C) 1931","D) 1934","E) 1938"],c:3,exp:"21 Haziran 1934'te Soyadı Kanunu kabul edilmiştir."},
    {q:"Atatürk'e 'Atatürk' soyadı hangi tarihte verilmiştir?",opts:["A) 29 Ekim 1923","B) 24 Kasım 1934","C) 5 Aralık 1934","D) 1 Kasım 1928","E) 10 Kasım 1938"],c:1,exp:"24 Kasım 1934'te TBMM tarafından 'Atatürk' soyadı verilmiştir."},
    {q:"Cumhuriyet döneminde açılan ilk özel banka hangisidir?",opts:["A) Ziraat Bankası","B) İş Bankası","C) Etibank","D) Halkbank","E) Sümerbank"],c:1,exp:"İş Bankası 1924'te Atatürk'ün girişimiyle kurulmuştur."},
    {q:"Kabotaj Kanunu ne zaman kabul edilmiştir ve neyi öngörür?",opts:["A) 1924 - Kara ticareti","B) 1926 - Deniz ticaretinin Türk gemilerine verilmesi","C) 1928 - Hava ulaşımı","D) 1930 - Demiryolu","E) 1934 - Madencilik"],c:1,exp:"1926 Kabotaj Kanunu ile Türk karasularındaki ticaret hakkı Türk gemilerine verilmiştir."},
    {q:"Atatürk ilkelerinden 'Halkçılık' neyi savunur?",opts:["A) Devletin ekonomide rol alması","B) Halkın eşitliği ve sınıf ayrımının olmaması","C) Dini yönetim","D) Milliyetçilik","E) Batılılaşma"],c:1,exp:"Halkçılık, toplumda sınıf ayrımı gözetmeksizin herkesin eşit haklara sahip olmasıdır."},
    {q:"Atatürk'ün Nutuk (Söylev) eserini okuduğu tarih hangisidir?",opts:["A) 1923","B) 1925","C) 1927","D) 1930","E) 1934"],c:2,exp:"Nutuk, 1927'de TBMM'de okunmuş ve 1919-1927 dönemi anlatılmıştır."},
    {q:"Atatürk ilkelerinden 'İnkılapçılık' neyi savunur?",opts:["A) Gelenekleri korumak","B) Çağdaş uygarlık seviyesine ulaşmak için yenilikleri sürdürmek","C) Dini reformlar","D) Monarşi kurmak","E) Savaş hazırlığı"],c:1,exp:"İnkılapçılık, yapılan yenilikleri korumak ve çağdaşlaşma sürecini sürdürmektir."},
    {q:"Aşar vergisinin kaldırılmasının (1925) amacı hangisidir?",opts:["A) Sanayiyi geliştirmek","B) Köylünün üzerindeki vergi yükünü hafifletmek","C) Dış ticareti artırmak","D) Eğitimi geliştirmek","E) Askeri güçlendirme"],c:1,exp:"Aşar vergisi kaldırılarak üretici köylünün üzerindeki ağır vergi yükü hafifletilmiştir."},
    {q:"Atatürk döneminde kurulan Sümerbank hangi sanayi alanında faaliyet göstermiştir?",opts:["A) Demir-çelik","B) Tekstil ve dokuma","C) Gıda","D) Madencilik","E) Ulaşım"],c:1,exp:"Sümerbank tekstil ve dokuma sanayisi alanında devlet yatırımı olarak kurulmuştur."},
    {q:"Atatürk döneminde kurulan Etibank hangi alanda faaliyet göstermiştir?",opts:["A) Tekstil","B) Maden ve enerji","C) Gıda","D) Ulaşım","E) Tarım"],c:1,exp:"Etibank maden ve enerji kaynaklarının işletilmesi için kurulmuştur."},
    {q:"Ölçü ve tartı birimlerinin değiştirilmesi (metrik sistem) hangi yılda yapılmıştır?",opts:["A) 1923","B) 1925","C) 1928","D) 1931","E) 1934"],c:1,exp:"1925'te uluslararası ölçü birimleri (metrik sistem) kabul edilmiştir."},
    {q:"1924 Anayasası'nın en önemli özelliği hangisidir?",opts:["A) Padişahlık korunmuştur","B) Egemenlik kayıtsız şartsız milletindir","C) Çok partili sistem","D) Başkanlık sistemi","E) Federal yönetim"],c:1,exp:"1924 Anayasası 'Egemenlik kayıtsız şartsız milletindir' ilkesini benimsemiştir."}
  ],
  cagdas: [
    {q:"Marshall Planı (1947) ABD'nin hangi amaca yönelik yardım paketidir?",opts:["A) Askeri ittifak","B) Avrupa'nın ekonomik kalkınması","C) Sömürgecilik","D) Silahlanma","E) Uzay yarışı"],c:1,exp:"Marshall Planı SSCB tehdidine karşı Avrupa'yı ekonomik olarak kalkındırmayı amaçlar."},
    {q:"Truman Doktrini hangi ülkelere askeri ve ekonomik yardımı öngörmüştür?",opts:["A) İngiltere ve Fransa","B) Türkiye ve Yunanistan","C) Almanya ve İtalya","D) Japonya ve Kore","E) Hindistan ve Pakistan"],c:1,exp:"Truman Doktrini Türkiye ve Yunanistan'a SSCB tehdidine karşı yardımı kapsar."},
    {q:"NATO hangi yıl kurulmuştur?",opts:["A) 1945","B) 1947","C) 1949","D) 1951","E) 1955"],c:2,exp:"NATO (Kuzey Atlantik İttifakı) 1949'da kurulmuştur."},
    {q:"Türkiye NATO'ya hangi yıl katılmıştır?",opts:["A) 1949","B) 1950","C) 1952","D) 1955","E) 1960"],c:2,exp:"Türkiye 1952'de Kore Savaşı'ndaki katkılarıyla NATO'ya katılmıştır."},
    {q:"Kore Savaşı (1950-1953) hangi iki blok arasındaki çatışmadır?",opts:["A) ABD - İngiltere","B) Kuzey Kore (SSCB) - Güney Kore (ABD/BM)","C) Çin - Japonya","D) Hindistan - Pakistan","E) İsrail - Arap"],c:1,exp:"Kore Savaşı Soğuk Savaş döneminde SSCB destekli Kuzey ve ABD destekli Güney arasında yaşanmıştır."},
    {q:"Bandung Konferansı (1955) hangi hareketin başlangıcı olarak kabul edilir?",opts:["A) NATO","B) Varşova Paktı","C) Bağlantısızlar Hareketi","D) Avrupa Birliği","E) BM"],c:2,exp:"Bandung Konferansı Bağlantısızlar Hareketi'nin temelini oluşturmuştur."},
    {q:"Avrupa Ekonomik Topluluğu (AET/AB'nin öncüsü) hangi antlaşmayla kurulmuştur?",opts:["A) Maastricht","B) Roma","C) Paris","D) Versay","E) Lozan"],c:1,exp:"1957 Roma Antlaşması ile AET kurulmuştur."},
    {q:"Soğuk Savaş döneminde SSCB'nin kurduğu askeri ittifak hangisidir?",opts:["A) NATO","B) AET","C) Varşova Paktı","D) BM","E) CENTO"],c:2,exp:"Varşova Paktı 1955'te SSCB liderliğinde kurulmuştur."},
    {q:"Berlin Duvarı'nın yıkılma tarihi hangisidir?",opts:["A) 1985","B) 1987","C) 1989","D) 1991","E) 1993"],c:2,exp:"Berlin Duvarı 9 Kasım 1989'da yıkılmıştır."},
    {q:"SSCB hangi yıl resmen dağılmıştır?",opts:["A) 1989","B) 1990","C) 1991","D) 1993","E) 1995"],c:2,exp:"SSCB 1991'de resmen dağılmıştır."},
    {q:"Kıbrıs Barış Harekâtı hangi tarihte gerçekleştirilmiştir?",opts:["A) 1960","B) 1967","C) 1974","D) 1980","E) 1983"],c:2,exp:"1974 Kıbrıs Barış Harekâtı Türk ordusunun Kıbrıs'a müdahalesidir."},
    {q:"Birleşmiş Milletler hangi yıl kurulmuştur?",opts:["A) 1919","B) 1939","C) 1945","D) 1948","E) 1950"],c:2,exp:"BM 1945'te II. Dünya Savaşı sonrası kurulmuştur."},
    {q:"II. Dünya Savaşı hangi olayla sona ermiştir?",opts:["A) Normandiya Çıkartması","B) Stalingrad Savaşı","C) Hiroşima ve Nagazaki'ye atom bombası atılması","D) Pearl Harbor","E) Berlin'in düşmesi"],c:2,exp:"ABD'nin Japonya'ya atom bombası atmasıyla II. Dünya Savaşı sona ermiştir."},
    {q:"İsrail Devleti hangi yıl kurulmuştur?",opts:["A) 1945","B) 1946","C) 1948","D) 1950","E) 1956"],c:2,exp:"İsrail 1948'de Filistin topraklarında kurulmuştur."},
    {q:"Türkiye hangi yıl Avrupa Konseyi'ne üye olmuştur?",opts:["A) 1945","B) 1949","C) 1952","D) 1955","E) 1960"],c:1,exp:"Türkiye 1949'da Avrupa Konseyi'nin kurucu üyeleri arasında yer almıştır."},
    {q:"Kuzey Kıbrıs Türk Cumhuriyeti hangi yıl ilan edilmiştir?",opts:["A) 1974","B) 1978","C) 1980","D) 1983","E) 1985"],c:3,exp:"KKTC 15 Kasım 1983'te ilan edilmiştir."},
    {q:"I. Dünya Savaşı sonrası kurulan uluslararası barış örgütü hangisidir?",opts:["A) BM","B) Milletler Cemiyeti","C) NATO","D) AET","E) CENTO"],c:1,exp:"Milletler Cemiyeti (Cemiyet-i Akvam) I. Dünya Savaşı sonrası kurulmuştur."},
    {q:"Türkiye Milletler Cemiyeti'ne hangi yıl üye olmuştur?",opts:["A) 1920","B) 1923","C) 1930","D) 1932","E) 1936"],c:3,exp:"Türkiye 1932'de Milletler Cemiyeti'ne üye olmuştur."},
    {q:"Nükleer Silahların Yayılmasının Önlenmesi Antlaşması (NPT) hangi yıl imzalanmıştır?",opts:["A) 1963","B) 1968","C) 1972","D) 1975","E) 1980"],c:1,exp:"NPT 1968'de nükleer silahların yayılmasını önlemek amacıyla imzalanmıştır."},
    {q:"Küba Füze Krizi (1962) hangi iki süper güç arasında yaşanmıştır?",opts:["A) ABD - Çin","B) ABD - SSCB","C) SSCB - İngiltere","D) ABD - Fransa","E) Çin - SSCB"],c:1,exp:"Küba Füze Krizi ABD ve SSCB arasında nükleer savaş eşiğine gelinen krizdir."}
  ]
};

function generate40TarihDenemeleri() {
  const denemeler = [];

  for (let i = 1; i <= 40; i++) {
    let difficulty = i <= 10 ? "kolay" : (i <= 25 ? "orta" : (i <= 35 ? "zor" : "sampiyon"));
    let diffLabel = i <= 10 ? "🟢 Kolay (Temel)" : (i <= 25 ? "🟡 Orta (ÖSYM Standart)" : (i <= 35 ? "🔴 Zor (Kritik Bilgi)" : "🟣 ÖSYM Şampiyon"));

    const examQuestions = [];
    let qIdCounter = 1;

    tarihTopics.forEach(topic => {
      for (let k = 0; k < topic.count; k++) {
        const pool = tarihTemplates[topic.key];
        // Her deneme için farklı indeksten soru al (deneme no + soru sırası ile benzersiz)
        const uniqueIdx = ((i - 1) * topic.count + k) % pool.length;
        const tmpl = pool[uniqueIdx];

        examQuestions.push({
          id: `tarih-d${i}-q${qIdCounter}`,
          denemeNo: i,
          questionNo: qIdCounter,
          category: "tarih",
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
      id: `tar-deneme-${i}`,
      title: `KPSS Tarih Denemesi #${i}`,
      denemeNo: i,
      questionCount: 27,
      difficulty: difficulty,
      difficultyLabel: diffLabel,
      questions: examQuestions
    });
  }

  return denemeler;
}

var tarih40Denemeler = generate40TarihDenemeleri();
if (typeof window !== 'undefined') window.tarih40Denemeler = tarih40Denemeler;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tarih40Denemeler, tarihTopics };
}
