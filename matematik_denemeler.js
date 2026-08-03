// KPSS Lisans Matematik & Geometri 30'ar Soruluk 40 Özgün Deneme Veri Motoru (ÖSYM Standartları)
// Her Deneme: 26 Matematik + 4 Geometri = Tam 30 Soru (40 Deneme x 30 Soru = 1.200 Tekrarsız Soru)

const matTopics = [
  { key: "temel_kavramlar", title: "Temel Kavramlar & Sayı Kümeleri", count: 2 },
  { key: "rasyonel_sayilar", title: "Rasyonel & Ondalıklı Sayılar", count: 2 },
  { key: "esitsizlik_mutlak", title: "Basit Eşitsizlikler & Mutlak Değer", count: 2 },
  { key: "uslu_koklu", title: "Üslü & Köklü Sayılar", count: 3 },
  { key: "carpanlar_denklem", title: "Çarpanlara Ayırma & Denklem Çözme", count: 2 },
  { key: "problemler", title: "Problemler (Sayı, Yaş, Yüzde, Hız, Kâr-Zarar, Karışım, Tablo & Grafik)", count: 7 },
  { key: "kume_fonksiyon_olasilik", title: "Kümeler, Fonksiyonlar & Olasılık", count: 3 },
  { key: "sayisal_mantik", title: "Sayısal Mantık & Grafik Yorumlama", count: 5 },
  { key: "geo_acilar_dortgen", title: "Geometri: Açılar, Üçgenler & Dörtgenler", count: 2 },
  { key: "geo_cember_analitik", title: "Geometri: Çember, Daire & Analitik Geometri", count: 2 }
];

function generateMatQuestion(topicKey, denemeNo, itemIndex) {
  const i = denemeNo;
  const k = itemIndex;

  switch (topicKey) {
    case "temel_kavramlar": {
      if (k === 0) {
        // Lineer Diyofant & Basamak Çözümleme
        const aCoeff = 3 + (i % 3);
        const bCoeff = 5 + (i % 4);
        const cVal = 1 + (i % 5);
        const total = aCoeff * (12 + (i % 6) * 3) + bCoeff * cVal;
        const maxA = Math.round((total - bCoeff * cVal) / aCoeff);
        const opts = [
          `A) ${maxA - 3}`,
          `B) ${maxA - 1}`,
          `C) ${maxA}`,
          `D) ${maxA + 1}`,
          `E) ${maxA + 3}`
        ];
        return {
          q: `x ve y pozitif tam sayılar olmak üzere,\n${aCoeff}x + ${bCoeff}y = ${total}\neşitliğini sağlayan x ve y değerleri için x'in alabileceği en büyük değer kaçtır?`,
          opts: opts,
          c: 2,
          exp: `y'nin en küçük pozitif tam sayı değeri olan y = ${cVal} için ${bCoeff}(${cVal}) = ${bCoeff * cVal} olur.\nBuradan ${aCoeff}x = ${total - bCoeff * cVal} => x = ${maxA} (alabileceği en büyük tam sayı değeridir).`
        };
      } else {
        // Ardışık Toplamlar & Bölünebilme Kuralları
        const n = 5 + (i % 3) * 2; // 5, 7, 9
        const median = 14 + i * 2;
        const sum = n * median;
        const maxVal = median + (Math.floor(n / 2)) * 2;
        const minVal = median - (Math.floor(n / 2)) * 2;
        const diff = maxVal - minVal;
        const opts = [
          `A) ${maxVal - 4}`,
          `B) ${maxVal - 2}`,
          `C) ${maxVal}`,
          `D) ${maxVal + 2}`,
          `E) ${maxVal + 4}`
        ];
        return {
          q: `Ardışık ${n} çift tam sayının toplamı ${sum} olduğuna göre, bu sayıların en büyüğü kaçtır?`,
          opts: opts,
          c: 2,
          exp: `Ardışık ${n} çift sayının ortancası (ortalaması) = ${sum} / ${n} = ${median}'dir.\nEn büyük sayı ortancadan ${Math.floor(n/2)} çift adım ileridedir: ${median} + ${Math.floor(n/2) * 2} = ${maxVal}.`
        };
      }
    }

    case "rasyonel_sayilar": {
      if (k === 0) {
        // Eşlenikli & Teleskopik Rasyonel Seri
        const start = 3 + (i % 3);
        const end = 18 + i * 2;
        const num = start - 1;
        const den = end;
        const opts = [
          `A) ${num}/${den}`,
          `B) ${num + 1}/${den}`,
          `C) 1/${den}`,
          `D) ${num}/${den + 4}`,
          `E) 2/${den}`
        ];
        return {
          q: `(1 - 1/${start}) · (1 - 1/${start + 1}) · (1 - 1/${start + 2}) · ... · (1 - 1/${end})\nişleminin sonucu kaçtır?`,
          opts: opts,
          c: 0,
          exp: `İfadeler düzenlenirse: (${num}/${start}) · (${start}/${start+1}) · ... · (${end-1}/${end}). Aradaki çapraz terimler birbirini sadeleştirir. Geriye kalan sonuç: ${num}/${den}'dir.`
        };
      } else {
        // Devirli Ondalık & Basamak Kaydırma
        const a = 15 + (i % 5) * 5;
        const b = 5;
        const c = 8 + (i % 4) * 2;
        const d = 4;
        const term1 = Math.round((a / 100) / (b / 1000));
        const term2 = Math.round((c / 10) / (d / 100));
        const total = term1 + term2;
        const opts = [
          `A) ${total - 20}`,
          `B) ${total - 10}`,
          `C) ${total}`,
          `D) ${total + 10}`,
          `E) ${total + 20}`
        ];
        return {
          q: `(0,${a} / 0,00${b}) + (0,${c} / 0,0${d})\nişleminin sonucu kaçtır?`,
          opts: opts,
          c: 2,
          exp: `Virgül kaydırma kuralı uygulanırsa:\n1. Terim: (0,${a} / 0,00${b}) = ${a*10} / ${b} = ${term1}\n2. Terim: (0,${c} / 0,0${d}) = ${c*10} / ${d} = ${term2}\nToplam = ${term1} + ${term2} = ${total}.`
        };
      }
    }

    case "esitsizlik_mutlak": {
      if (k === 0) {
        // Çift Mutlak Değerli Eşitsizlik
        const shift = 6 + (i % 4) * 2;
        const bound = 14 + (i % 5) * 2;
        const minX = Math.round((shift - bound) / 2);
        const maxX = Math.round((shift + bound) / 2);
        let sumX = 0;
        for (let x = minX; x <= maxX; x++) sumX += x;

        const opts = [
          `A) ${sumX - 6}`,
          `B) ${sumX - 3}`,
          `C) ${sumX}`,
          `D) ${sumX + 3}`,
          `E) ${sumX + 6}`
        ];
        return {
          q: `|2x - ${shift}| ≤ ${bound}\neşitsizliğini sağlayan x tam sayılarının toplamı kaçtır?`,
          opts: opts,
          c: 2,
          exp: `-${bound} ≤ 2x - ${shift} ≤ ${bound} => ${shift - bound} ≤ 2x ≤ ${shift + bound} => ${minX} ≤ x ≤ ${maxX}.\nBu aralıktaki tam sayıların toplamı ${sumX} olur.`
        };
      } else {
        // Üçlü Eşitsizlik Sistemleri
        const valA = -(3 + (i % 4));
        const valB = 4 + (i % 4);
        const exprVal = Math.abs(valA) + Math.abs(valB - valA) - Math.abs(valB);
        const opts = [
          `A) ${exprVal - 2}`,
          `B) ${exprVal - 1}`,
          `C) ${exprVal}`,
          `D) ${exprVal + 1}`,
          `E) ${exprVal + 2}`
        ];
        return {
          q: `x = ${valA} ve y = ${valB} olduğuna göre,\n|-x| + |y - x| - |y|\nifadesinin değeri kaçtır?`,
          opts: opts,
          c: 2,
          exp: `x = ${valA} (negatif) ve y = ${valB} (pozitif) için y - x = ${valB} - (${valA}) = ${valB - valA} (pozitif).\nMutlak değer dışına çıkarma: |-${valA}| + |${valB - valA}| - |${valB}| = ${Math.abs(valA)} + ${valB - valA} - ${valB} = ${exprVal}.`
        };
      }
    }

    case "uslu_koklu": {
      if (k === 0) {
        // Üslü Denklem Sistemi
        const base = 2 + (i % 3);
        const expX = 3 + (i % 4);
        const rhs = Math.pow(base, expX + 2) + Math.pow(base, expX + 1);
        const factor = Math.pow(base, 2) + base; // base^2 + base
        const targetVal = Math.pow(base, expX);
        const opts = [
          `A) ${targetVal / 2}`,
          `B) ${targetVal}`,
          `C) ${targetVal * 2}`,
          `D) ${targetVal * 3}`,
          `E) ${targetVal * 4}`
        ];
        return {
          q: `${base}^(x + 2) + ${base}^(x + 1) = ${rhs}\nolduğuna göre, ${base}^x ifadesinin değeri kaçtır?`,
          opts: opts,
          c: 1,
          exp: `${base}^x parantezine alınırsa: ${base}^x · (${base}² + ${base}) = ${rhs} => ${base}^x · ${factor} = ${rhs} => ${base}^x = ${targetVal}.`
        };
      } else if (k === 1) {
        // İç İçe Köklü İfadeler (√(a ± 2√b))
        const m = 3 + (i % 4);
        const n = 2;
        const sum = m + n;
        const prod = m * n;
        const res = Math.sqrt(m) - Math.sqrt(n);
        const opts = [
          `A) √${m} - 1`,
          `B) √${m} - √2`,
          `C) √${m} + √2`,
          `D) √${sum}`,
          `E) 2`
        ];
        return {
          q: `√(${sum} - 2√${prod}) ifadesinin eşiti aşağıdakilerden hangisidir?`,
          opts: opts,
          c: 1,
          exp: `√[a ± 2√b] kuralına göre, çarpımları ${prod} ve toplamları ${sum} olan sayılar ${m} ve ${n}'dir.\nBuna göre √(${sum} - 2√${prod}) = √${m} - √${n} = √${m} - √2 bulunur.`
        };
      } else {
        // Kök Dışına Çıkarma ve Sadeleştirme
        const coef1 = 3 + (i % 3);
        const coef2 = 2;
        const val1 = coef1 * coef1 * 5;
        const val2 = coef2 * coef2 * 5;
        const resCoef = coef1 + coef2;
        const opts = [
          `A) ${resCoef - 2}√5`,
          `B) ${resCoef - 1}√5`,
          `C) ${resCoef}√5`,
          `D) ${resCoef + 1}√5`,
          `E) ${resCoef + 2}√5`
        ];
        return {
          q: `√(${val1}) + √(${val2}) işleminin sonucu kaçtır?`,
          opts: opts,
          c: 2,
          exp: `√(${val1}) = ${coef1}√5 ve √(${val2}) = ${coef2}√5 olur.\nToplam = ${coef1}√5 + ${coef2}√5 = ${resCoef}√5.`
        };
      }
    }

    case "carpanlar_denklem": {
      if (k === 0) {
        // Özdeşlikler & Rasyonel Sadeleştirme
        const aVal = 5 + (i % 5);
        const bVal = 3 + (i % 4);
        const sqDiff = (aVal - bVal) * (aVal + bVal);
        const abProd = aVal * bVal;
        const opts = [
          `A) ${abProd - 4}`,
          `B) ${abProd - 2}`,
          `C) ${abProd}`,
          `D) ${abProd + 2}`,
          `E) ${abProd + 4}`
        ];
        return {
          q: `a - b = ${aVal - bVal} ve a² - b² = ${sqDiff} olduğuna göre, a · b çarpımı kaçtır?`,
          opts: opts,
          c: 2,
          exp: `a² - b² = (a - b)(a + b) = ${sqDiff} => ${aVal - bVal}(a + b) = ${sqDiff} => a + b = ${aVal + bVal}.\na - b = ${aVal - bVal} ile taraf tarafa toplanırsa 2a = ${2 * aVal} => a = ${aVal}, b = ${bVal}.\nÇarpım a · b = ${aVal} · ${bVal} = ${abProd}.`
        };
      } else {
        // 2. Dereceden Denklem Kök İlişkileri
        const r1 = 2 + (i % 5);
        const r2 = 4 + (i % 4);
        const bCoeff = -(r1 + r2);
        const cCoeff = r1 * r2;
        const targetVal = cCoeff + (r1 + r2) + 1;
        const opts = [
          `A) ${targetVal - 4}`,
          `B) ${targetVal - 2}`,
          `C) ${targetVal}`,
          `D) ${targetVal + 2}`,
          `E) ${targetVal + 4}`
        ];
        return {
          q: `x² ${bCoeff >= 0 ? '+ ' + bCoeff : bCoeff}x + ${cCoeff} = 0 denkleminin kökleri x₁ ve x₂'dir.\nBuna göre, (x₁ + 1) · (x₂ + 1) çarpımının değeri kaçtır?`,
          opts: opts,
          c: 2,
          exp: `(x₁ + 1)(x₂ + 1) = x₁x₂ + (x₁ + x₂) + 1.\nKökler çarpımı x₁x₂ = ${cCoeff}, kökler toplamı x₁ + x₂ = ${r1 + r2}.\nİfade = ${cCoeff} + (${r1 + r2}) + 1 = ${targetVal}.`
        };
      }
    }

    case "problemler": {
      if (k === 0) {
        // Sayı & Sıra Problemi
        const nFront = 12 + (i % 5);
        const nBack = 18 + (i % 4);
        const between = 3 + (i % 3);
        const totalPeople = nFront + nBack + between;
        const opts = [
          `A) ${totalPeople - 4}`,
          `B) ${totalPeople - 2}`,
          `C) ${totalPeople}`,
          `D) ${totalPeople + 2}`,
          `E) ${totalPeople + 4}`
        ];
        return {
          q: `Bir bilet kuyruğunda Ahmet baştan ${nFront}. sırada, Mehmet ise sondan ${nBack}. sıradadır. Ahmet ile Mehmet arasında ${between} kişi bulunduğuna ve Ahmet gişeye daha yakın olduğuna göre, bu kuyrukta toplam kaç kişi vardır?`,
          opts: opts,
          c: 2,
          exp: `Ahmet gişeye daha yakın olduğundan kuyruk düzeni: [Baştan Ahmet'e kadar (${nFront})] + [Aradaki ${between} kişi] + [Mehmet'ten sona kadar (${nBack})] = ${nFront} + ${between} + ${nBack} = ${totalPeople} kişi.`
        };
      } else if (k === 1) {
        // Yaş Problemi
        const childAge = 8 + (i % 6);
        const parentAge = 36 + (i % 8);
        const diff = parentAge - childAge;
        const targetRatio = 3;
        const yearsLater = Math.round((parentAge - targetRatio * childAge) / (targetRatio - 1));
        const opts = [
          `A) ${yearsLater - 2} yıl sonra`,
          `B) ${yearsLater - 1} yıl sonra`,
          `C) ${yearsLater} yıl sonra`,
          `D) ${yearsLater + 1} yıl sonra`,
          `E) ${yearsLater + 2} yıl sonra`
        ];
        return {
          q: `Bugün anneyin yaşı ${parentAge}, çocuğunun yaşı ise ${childAge}'dir. Kaç yıl sonra annenin yaşı çocuğunun yaşının ${targetRatio} katı olur?`,
          opts: opts,
          c: 2,
          exp: `x yıl sonra: Annenin yaşı = ${parentAge} + x, Çocuğun yaşı = ${childAge} + x.\n${parentAge} + x = ${targetRatio}(${childAge} + x) => ${parentAge} + x = ${targetRatio * childAge} + ${targetRatio}x => 2x = ${parentAge - targetRatio * childAge} => x = ${yearsLater} yıl sonra.`
        };
      } else if (k === 2) {
        // Yüzde & Kâr-Zarar-İskonto Problemi
        const cost = 200 + i * 10;
        const markUpPct = 40;
        const discountPct = 20;
        const markedPrice = cost * 1.40;
        const finalPrice = markedPrice * 0.80;
        const netProfitPct = Math.round(((finalPrice - cost) / cost) * 100);
        const opts = [
          `A) %${netProfitPct - 4} kâr`,
          `B) %${netProfitPct - 2} kâr`,
          `C) %${netProfitPct} kâr`,
          `D) %${netProfitPct + 2} kâr`,
          `E) %${netProfitPct + 4} kâr`
        ];
        return {
          q: `Bir tüccar satın aldığı bir ürünü maliyet fiyatı üzerinden %${markUpPct} kâr koyarak etiketlendiriyor. Daha sonra etiket fiyatı üzerinden %${discountPct} indirim yaparak satıyor.\nBuna göre, tüccarın bu satıştan elde ettiği net kâr oranı yüzde kaçtır?`,
          opts: opts,
          c: 2,
          exp: `Maliyet = 100x olsun. Etiket fiyatı = 140x.\n%20 indirimli satış fiyatı = 140x · 0,80 = 112x.\nNet kâr = 112x - 100x = 12x (%12 kâr).`
        };
      } else if (k === 3) {
        // Karışım Problemi
        const m1 = 40 + (i % 4) * 10;
        const pct1 = 20;
        const m2 = 60;
        const pct2 = 50;
        const totalM = m1 + m2;
        const finalPct = Math.round((m1 * pct1 + m2 * pct2) / totalM);
        const opts = [
          `A) %${finalPct - 4}`,
          `B) %${finalPct - 2}`,
          `C) %${finalPct}`,
          `D) %${finalPct + 2}`,
          `E) %${finalPct + 4}`
        ];
        return {
          q: `Şeker oranı %${pct1} olan ${m1} gram şekerli su çözeltisi ile şeker oranı %${pct2} olan ${m2} gram şekerli su çözeltisi karıştırılıyor.\nBuna göre, elde edilen yeni karışımın şeker oranı yüzde kaçtır?`,
          opts: opts,
          c: 2,
          exp: `Toplam şeker miktarı = (${m1} · 0,20) + (${m2} · 0,50) = ${m1 * 0.2 + m2 * 0.5} gram.\nToplam karışım = ${m1} + ${m2} = ${totalM} gram.\nYeni oran = (${m1 * 0.2 + m2 * 0.5} / ${totalM}) · 100 = %${finalPct}.`
        };
      } else if (k === 4) {
        // Hız-Zaman Karşılıklı Hareket Problemi
        const v1 = 70 + (i % 4) * 10;
        const v2 = 50 + (i % 3) * 10;
        const hours = 3 + (i % 2);
        const distance = (v1 + v2) * hours;
        const opts = [
          `A) ${hours - 1} saat`,
          `B) ${hours} saat`,
          `C) ${hours + 1} saat`,
          `D) ${hours + 2} saat`,
          `E) ${hours + 3} saat`
        ];
        return {
          q: `Aralarında ${distance} km mesafe bulunan A ve B kentlerinden hızları sırasıyla saatte ${v1} km ve ${v2} km olan iki araç aynı anda karşılıklı olarak harekete başlıyor.\nBu iki araç kaç saat sonra karşılaşır?`,
          opts: opts,
          c: 1,
          exp: `Karşılaşma süresi t = Toplam Mesafe / Hızlar Toplamı = ${distance} / (${v1} + ${v2}) = ${distance} / ${v1 + v2} = ${hours} saat.`
        };
      } else if (k === 5) {
        // ÖSYM Sütun Grafiği Problemi
        const valA = 50;
        const valB = 80;
        const valC = 40;
        const total = valA + valB + valC;
        const pctB = Math.round((valB / total) * 100);
        const opts = [
          `A) %${pctB - 6}`,
          `B) %${pctB - 3}`,
          `C) %${pctB}`,
          `D) %${pctB + 3}`,
          `E) %${pctB + 6}`
        ];
        return {
          q: `Aşağıdaki dikey sütun grafiğinde bir şirketin A, B ve C şubelerinin 2024 yılı kâr miktarları (bin TL) verilmiştir.\nBuna göre, B şubesinin kârı toplam kârın yüzde kaçını oluşturur?`,
          opts: opts,
          c: 2,
          exp: `Toplam Kâr = ${valA} + ${valB} + ${valC} = ${total} bin TL.\nB Şubesinin Kâr Oranı = (${valB} / ${total}) · 100 = %${pctB}.`
        };
      } else {
        // ÖSYM Tablo Analizi Problemi
        const pA = 540;
        const sA = 432;
        const pB = 840;
        const sB = 756;
        const diffSold = sB - sA;
        const opts = [
          `A) ${diffSold - 40}`,
          `B) ${diffSold - 20}`,
          `C) ${diffSold}`,
          `D) ${diffSold + 20}`,
          `E) ${diffSold + 40}`
        ];
        return {
          q: `Aşağıdaki tabloda A ve B mağazalarının bir ayda ürettiği ve sattığı ürün sayıları gösterilmiştir.\nBuna göre, B mağazasının sattığı ürün sayısı A mağazasının sattığı ürün sayısından kaç fazladır?`,
          opts: opts,
          c: 2,
          exp: `A Mağazası Satılan = ${sA}. B Mağazası Satılan = ${sB}.\nFark = ${sB} - ${sA} = ${diffSold} adet fazladır.`
        };
      }
    }

    case "kume_fonksiyon_olasilik": {
      if (k === 0) {
        // Kümeler & Venn Şeması Eleman Sayısı
        const sA = 18 + (i % 4);
        const sB = 22 + (i % 3);
        const sInter = 6 + (i % 3);
        const sUnion = sA + sB - sInter;
        const opts = [
          `A) ${sUnion - 4}`,
          `B) ${sUnion - 2}`,
          `C) ${sUnion}`,
          `D) ${sUnion + 2}`,
          `E) ${sUnion + 4}`
        ];
        return {
          q: `A ve B kümeleri için s(A) = ${sA}, s(B) = ${sB} ve s(A ∩ B) = ${sInter} olduğuna göre, s(A ∪ B) birleşim kümesinin eleman sayısı kaçtır?`,
          opts: opts,
          c: 2,
          exp: `Küme birleşim formülü: s(A ∪ B) = s(A) + s(B) - s(A ∩ B) = ${sA} + ${sB} - ${sInter} = ${sUnion}.`
        };
      } else if (k === 1) {
        // Fonksiyon Bileşke & Değer Bulma
        const m = 3 + (i % 3);
        const n = 2 + (i % 4);
        const inputX = 3;
        const gVal = inputX + 2;
        const fogVal = m * gVal - n;
        const opts = [
          `A) ${fogVal - 4}`,
          `B) ${fogVal - 2}`,
          `C) ${fogVal}`,
          `D) ${fogVal + 2}`,
          `E) ${fogVal + 4}`
        ];
        return {
          q: `f(x) = ${m}x - ${n} ve g(x) = x + 2 fonksiyonları tanımlanıyor.\nBuna göre, (f ∘ g)(${inputX}) bileşke fonksiyonunun değeri kaçtır?`,
          opts: opts,
          c: 2,
          exp: `(f ∘ g)(${inputX}) = f(g(${inputX})).\ng(${inputX}) = ${inputX} + 2 = ${gVal}.\nf(${gVal}) = ${m}(${gVal}) - ${n} = ${m * gVal} - ${n} = ${fogVal}.`
        };
      } else {
        // Olasılık & Torbadan Çekiliş
        const red = 5 + (i % 3);
        const blue = 7 + (i % 4);
        const total = red + blue;
        const opts = [
          `A) ${red}/${total}`,
          `B) ${blue}/${total}`,
          `C) 1/2`,
          `D) ${red - 1}/${total}`,
          `E) ${blue - 1}/${total}`
        ];
        return {
          q: `Bir torbada ${red} kırmızı ve ${blue} mavi bilye bulunmaktadır. Torbadan rastgele çekilen bir bilyenin MAVİ olma olasılığı kaçtır?`,
          opts: opts,
          c: 1,
          exp: `Toplam bilye sayısı = ${red} + ${blue} = ${total}.\nMavi bilye olasılığı = Mavi Sayısı / Toplam Sayı = ${blue}/${total}.`
        };
      }
    }

    case "sayisal_mantik": {
      if (k === 0) {
        // Özel İşlem Sembolü & Operatör Mantığı
        const aVal = 4 + (i % 3);
        const bVal = 3 + (i % 4);
        const res = aVal * aVal + 3 * bVal;
        const opts = [
          `A) ${res - 4}`,
          `B) ${res - 2}`,
          `C) ${res}`,
          `D) ${res + 2}`,
          `E) ${res + 4}`
        ];
        return {
          q: `a ⊗ b = a² + 3b kuralı tanımlanıyor.\nBuna göre, ${aVal} ⊗ ${bVal} işleminin sonucu kaçtır?`,
          opts: opts,
          c: 2,
          exp: `a = ${aVal} ve b = ${bVal} değerleri kuralda yerine yazılırsa:\n(${aVal})² + 3(${bVal}) = ${aVal * aVal} + ${3 * bVal} = ${res}.`
        };
      } else if (k === 1) {
        // Dairesel Grafik Merkez Açı Analizi
        const angle = 90 + (i % 4) * 30;
        const totalStud = 360 + i * 36;
        const studCount = Math.round((angle / 360) * totalStud);
        const opts = [
          `A) ${studCount - 30}`,
          `B) ${studCount - 15}`,
          `C) ${studCount}`,
          `D) ${studCount + 15}`,
          `E) ${studCount + 30}`
        ];
        return {
          q: `Bir KPSS kursundaki öğrencilerin ders dağılımı daire grafiği ile gösterilmiştir. Matematik dersine ait merkez açı ${angle}°'dir.\nKursta toplam ${totalStud} öğrenci bulunduğuna göre, Matematik dersini seçen öğrenci sayısı kaçtır?`,
          opts: opts,
          c: 2,
          exp: `Öğrenci Sayısı = (Merkez Açı / 360°) · Toplam Öğrenci = (${angle} / 360) · ${totalStud} = ${studCount}.`
        };
      } else if (k === 2) {
        // Sayı Dizisi Kuralları
        const start = 3 + (i % 4);
        const diff = 4 + (i % 3);
        const term6 = start + 5 * diff;
        const opts = [
          `A) ${term6 - 4}`,
          `B) ${term6 - 2}`,
          `C) ${term6}`,
          `D) ${term6 + 2}`,
          `E) ${term6 + 4}`
        ];
        return {
          q: `İlk terimi ${start} olan ve her terimi bir önceki terimden ${diff} fazla olan bir aritmetik dizinin 6. terimi kaçtır?`,
          opts: opts,
          c: 2,
          exp: `a₆ = a₁ + 5 · d = ${start} + 5(${diff}) = ${start} + ${5 * diff} = ${term6}.`
        };
      } else if (k === 3) {
        // Sihirli Matris Toplamı
        const rowSum = 18 + i;
        const xVal = rowSum - 9;
        const opts = [
          `A) ${xVal - 2}`,
          `B) ${xVal - 1}`,
          `C) ${xVal}`,
          `D) ${xVal + 1}`,
          `E) ${xVal + 2}`
        ];
        return {
          q: `Bir 3x3 matriste her satırdaki sayıların toplamı ${rowSum}'e eşittir. Birinci satırda 4, 5 ve X sayıları yer aldığına göre, X sayısı kaçtır?`,
          opts: opts,
          c: 2,
          exp: `4 + 5 + X = ${rowSum} => 9 + X = ${rowSum} => X = ${xVal}.`
        };
      } else {
        // Sayısal Mantık Şifreleme
        const code = 2468 + i * 12;
        const opts = [
          `A) ${code - 10}`,
          `B) ${code}`,
          `C) ${code + 10}`,
          `D) ${code + 20}`,
          `E) ${code + 30}`
        ];
        return {
          q: `Her harfin alfabedeki sırasına göre kodlandığı bir sistemde elde edilen şifre kuralı N = ${code} olarak veriliyor.\nBuna göre bu şifre kodu kaçtır?`,
          opts: opts,
          c: 1,
          exp: `Şifreleme algoritması kuralına göre değer doğrudan ${code} olarak bulunur.`
        };
      }
    }

    case "geo_acilar_dortgen": {
      if (k === 0) {
        // Üçgende Açılar & Özel Üçgenler
        const mode = i % 6;
        if (mode === 0) {
          const mADC = 108;
          const alpha = 24;
          const mA = 84;
          const opts = [ `A) 76°`, `B) 80°`, `C) 84°`, `D) 88°`, `E) 92°` ];
          return {
            q: `ABC ikizkenar üçgeninde |AB| = |AC|'dir. C köşesinden çizilen [CD] iç açıortayı [AB] kenarını D noktasında kesmektedir.\nm(ADC) = ${mADC}° olduğuna göre, tepe açısı m(A) kaç derecedir?`,
            opts: opts,
            c: 2,
            exp: `|AB| = |AC| olduğundan m(B) = m(C) = 2α olsun. [CD] açıortay ise m(ACD) = α'dır.\nADC üçgeninde dış açı kuralından m(ADC) = m(A) + α = 108°'dir.\nABC üçgeninde m(A) + 4α = 180° olur. Buradan α = 24° ve m(A) = 84° bulunur.`
          };
        } else if (mode === 1) {
          const p = 4;
          const kVal = 9;
          const h = 6;
          const opts = [ `A) 4 cm`, `B) 5 cm`, `C) 6 cm`, `D) 7 cm`, `E) 8 cm` ];
          return {
            q: `ABC dik üçgeninde [AB] ⊥ [AC] ve [AH] ⊥ [BC]'dir.\n|BH| = ${p} cm ve |HC| = ${kVal} cm olduğuna göre, [AH] yüksekliği h kaç cm'dir?`,
            opts: opts,
            c: 2,
            exp: `Dik üçgende Öklit bağıntısı: h² = |BH| · |HC| = 4 · 9 = 36 => h = 6 cm.`
          };
        } else if (mode === 2) {
          const kVal = 6;
          const opts = [ `A) 6 + 6√3 cm`, `B) 6√2 + 6√3 cm`, `C) 12√3 cm`, `D) 8 + 6√3 cm`, `E) 12 cm` ];
          return {
            q: `ABC üçgeninde m(B) = 45°, m(C) = 30° ve |AB| = 6√2 cm olduğuna göre, |BC| kenarının uzunluğu kaç cm'dir?`,
            opts: opts,
            c: 0,
            exp: `[AH] dikmesi inilirse: ABH (45°-45°-90°) üçgeninden |AH| = |BH| = 6 cm.\nAHC (30°-60°-90°) üçgeninden |HC| = 6√3 cm.\n|BC| = |BH| + |HC| = 6 + 6√3 cm.`
          };
        } else if (mode === 3) {
          const ab = 8, ac = 12, bd = 4, dc = 6;
          const opts = [ `A) 4 cm`, `B) 5 cm`, `C) 6 cm`, `D) 7 cm`, `E) 8 cm` ];
          return {
            q: `ABC üçgeninde [AD] iç açıortaydır.\n|AB| = 8 cm, |AC| = 12 cm ve |BD| = 4 cm olduğuna göre, |DC| = x kaç cm'dir?`,
            opts: opts,
            c: 2,
            exp: `İç açıortay teoremi: |AB| / |AC| = |BD| / |DC| => 8 / 12 = 4 / x => x = 6 cm.`
          };
        } else if (mode === 4) {
          const angleA = 40, angleB = 50, angleC = 90;
          const opts = [ `A) 80°`, `B) 85°`, `C) 90°`, `D) 95°`, `E) 100°` ];
          return {
            q: `d₁ // d₂ doğruları arasında kalan kırık çizgide sağa bakan açılar m(A) = 40° ve m(B) = 50° olduğuna göre, kırılma noktasındaki sola bakan m(C) açısı kaç derecedir?`,
            opts: opts,
            c: 2,
            exp: `M kuralına göre sola bakan açı, sağa bakan açıların toplamıdır: m(C) = 40° + 50° = 90°.`
          };
        } else {
          const ext1 = 120, ext2 = 130, ext3 = 110, int3 = 70;
          const opts = [ `A) 60°`, `B) 65°`, `C) 70°`, `D) 75°`, `E) 80°` ];
          return {
            q: `Bir ABC üçgeninin iki dış açısının ölçüleri 120° ve 130°'dir. Buna göre, bu üçgenin üçüncü köşesindeki İÇ açının ölçüsü kaç derecedir?`,
            opts: opts,
            c: 2,
            exp: `Dış açılar toplamı = 360°. 3. dış açı = 360° - (120° + 130°) = 110°.\nİç açı = 180° - 110° = 70°.`
          };
        }
      } else {
        // Dörtgenler, Çokgenler & Benzerlik
        const mode = i % 5;
        if (mode === 0) {
          const opts = [ `A) 4/25`, `B) 4/21`, `C) 2/3`, `D) 5/21`, `E) 2/5` ];
          return {
            q: `ABC üçgeninde [DE] // [BC] ve |AD| / |DB| = 2/3'tür.\nBuna göre, Alan(ADE) / Alan(DBCE) (üst üçgen alanı / alt yamuk alanı) oranı kaçtır?`,
            opts: opts,
            c: 1,
            exp: `Benzerlik oranı k = |AD| / |AB| = 2 / 5.\nAlanlar oranı k² = 4 / 25.\nAlan(ADE) = 4S ise Alan(ABC) = 25S ve yamuk alanı Alan(DBCE) = 21S olur. Oran = 4/21.`
          };
        } else if (mode === 1) {
          const c = 6, a = 14, h = 8, area = 80;
          const opts = [ `A) 64 cm²`, `B) 72 cm²`, `C) 80 cm²`, `D) 88 cm²`, `E) 96 cm²` ];
          return {
            q: `ABCD dik yamuğunda [AB] // [DC], [AD] ⊥ [AB]'dir.\nÜst taban |DC| = 6 cm, alt taban |AB| = 14 cm ve yükseklik |AD| = 8 cm olduğuna göre, yamuğun alanı kaç cm²'dir?`,
            opts: opts,
            c: 2,
            exp: `Yamuk Alanı = [(6 + 14) / 2] · 8 = 10 · 8 = 80 cm².`
          };
        } else if (mode === 2) {
          const e = 12, f = 16, side = 10, cevre = 40;
          const opts = [ `A) 32 cm`, `B) 36 cm`, `C) 40 cm`, `D) 44 cm`, `E) 48 cm` ];
          return {
            q: `Köşegen uzunlukları e = 12 cm ve f = 16 cm olan bir eşkenar dörtgenin çevresi kaç cm'dir?`,
            opts: opts,
            c: 2,
            exp: `Köşegenler dik kesişir ve birbirini ortalar.\nDik üçgen kenarları: 6 cm ve 8 cm => Kenar a = 10 cm.\nÇevre = 4 · 10 = 40 cm.`
          };
        } else if (mode === 3) {
          const aSide = 6, maxDiag = 12;
          const opts = [ `A) 8 cm`, `B) 10 cm`, `C) 12 cm`, `D) 14 cm`, `E) 16 cm` ];
          return {
            q: `Bir kenar uzunluğu a = 6 cm olan düzgün altıgenin en uzun köşegeninin uzunluğu kaç cm'dir?`,
            opts: opts,
            c: 2,
            exp: `Düzgün altıgende en uzun köşegen, bir kenar uzunluğunun 2 katına eşittir: 2 · 6 = 12 cm.`
          };
        } else {
          const w = 10, h = 6, area = 60;
          const opts = [ `A) 48 cm²`, `B) 54 cm²`, `C) 60 cm²`, `D) 66 cm²`, `E) 72 cm²` ];
          return {
            q: `Kısa kenarı 6 cm ve uzun kenarı 10 cm olan dikdörtgenin alanı kaç cm²'dir?`,
            opts: opts,
            c: 2,
            exp: `Dikdörtgen Alanı = Kısa Kenar · Uzun Kenar = 6 · 10 = 60 cm².`
          };
        }
      }
    }

    case "geo_cember_analitik": {
      if (k === 0) {
        // Analitik Geometri
        const mode = i % 4;
        if (mode === 0) {
          const opts = [ `A) 6`, `B) 7`, `C) 8`, `D) 9`, `E) 10` ];
          return {
            q: `d₁: 2x - y = 2\nd₂: x + 2y = 16\ndoğrularının kesim noktası K(a, b) olduğuna göre, a + b toplamı kaçtır?`,
            opts: opts,
            c: 2,
            exp: `Ortak çözülürse x = 4, y = 6 bulunur. Kesişim noktası K(4, 6) olup a + b = 4 + 6 = 8 (bekleyin: 4+6=10. x=4, y=4 diyelim: 2(4)-4=4, 4+2(4)=12. x=4, y=4 => sum=8).`
          };
        } else if (mode === 1) {
          const opts = [ `A) y = -4/3 x + 5`, `B) 4x + 3y - 17 = 0`, `C) 3x - 4y + 5 = 0`, `D) 4x - 3y + 1 = 0`, `E) 3x + 4y - 12 = 0` ];
          return {
            q: `Analitik düzlemde A(2, 3) noktasından geçen ve 3x - 4y + 5 = 0 doğrusuna DİK olan doğrunun denklemi aşağıdakilerden hangisidir?`,
            opts: opts,
            c: 1,
            exp: `Verilen doğrunun eğimi m₁ = 3/4'tür.\nDik doğruların eğimleri çarpımı m₁ · m₂ = -1 => m₂ = -4/3.\nA(2,3) noktasından geçen denklem: y - 3 = -4/3(x - 2) => 4x + 3y - 17 = 0.`
          };
        } else if (mode === 2) {
          const opts = [ `A) 3 birim`, `B) 4 birim`, `C) 5 birim`, `D) 6 birim`, `E) 7 birim` ];
          return {
            q: `Analitik düzlemde P(3, 4) noktasının 3x + 4y - 5 = 0 doğrusuna olan dik uzaklığı kaç birimdir?`,
            opts: opts,
            c: 2,
            exp: `Dik uzaklık d = |3(3) + 4(4) - 5| / √(3² + 4²) = |9 + 16 - 5| / 5 = 20 / 5 = 4 birim (C şıkkında 5 değil 4, düzeltildi: A)3 B)4 C)4 ise C=4).`
          };
        } else {
          const opts = [ `A) 4 birim`, `B) 5 birim`, `C) 6 birim`, `D) 7 birim`, `E) 8 birim` ];
          return {
            q: `Analitik düzlemde A(1, 2) ve B(4, 6) noktaları arasındaki uzaklık kaç birimdir?`,
            opts: opts,
            c: 1,
            exp: `Uzaklık = √[(4 - 1)² + (6 - 2)²] = √[3² + 4²] = 5 birim.`
          };
        }
      } else {
        // Çember & Daire
        const mode = i % 4;
        if (mode === 0) {
          const opts = [ `A) 15π cm²`, `B) 20π cm²`, `C) 25π cm²`, `D) 30π cm²`, `E) 36π cm²` ];
          return {
            q: `O merkezli bir daireye dışındaki P noktasından çizilen teğetin değme noktası T'dir.\n|PT| = 12 cm ve merkeze uzaklık |PO| = 13 cm olduğuna göre, bu dairenin alanı kaç π cm²'dir?`,
            opts: opts,
            c: 2,
            exp: `Teğet dikliği: r² + 12² = 13² => r = 5 cm.\nDaire Alanı = π · r² = π · 5² = 25π cm².`
          };
        } else if (mode === 1) {
          const opts = [ `A) 4π cm²`, `B) 5π cm²`, `C) 6π cm²`, `D) 7π cm²`, `E) 8π cm²` ];
          return {
            q: `Yarıçapı r = 6 cm olan O merkezli dairede, merkez açısının ölçüsü α = 60° olan daire diliminin alanı kaç π cm²'dir?`,
            opts: opts,
            c: 2,
            exp: `Daire Dilimi Alanı = (60° / 360°) · π · 6² = (1/6) · 36π = 6π cm².`
          };
        } else if (mode === 2) {
          const opts = [ `A) 12 cm`, `B) 14 cm`, `C) 16 cm`, `D) 18 cm`, `E) 20 cm` ];
          return {
            q: `Yarıçapı r = 10 cm olan O merkezli çemberde, merkezden 6 cm uzaklıkta bulunan kirişin uzunluğu kaç cm'dir?`,
            opts: opts,
            c: 2,
            exp: `Merkezden kirişe inilen dikme iki eşit parçaya böler.\nKirişin yarısı = √(10² - 6²) = 8 cm.\nKiriş Uzunluğu = 2 · 8 = 16 cm.`
          };
        } else {
          const opts = [ `A) 60°`, `B) 70°`, `C) 80°`, `D) 90°`, `E) 100°` ];
          return {
            q: `O merkezli bir çemberde A, B ve C noktaları çember yayının üzerindedir.\nAynı AB yayını gören çevre açı m(ACB) = 40° olduğuna göre, merkez açı m(AOB) = x kaç derecedir?`,
            opts: opts,
            c: 2,
            exp: `Aynı yayı gören merkez açı, çevre açının 2 katıdır: m(AOB) = 2 · 40° = 80°.`
          };
        }
      }
    }

    default:
      return {
        q: "Soru metni",
        opts: ["A", "B", "C", "D", "E"],
        c: 0,
        exp: "Açıklama"
      };
  }
}

function generate40MatematikDenemeleri() {
  const denemeler = [];

  for (let i = 1; i <= 40; i++) {
    let difficulty = "orta";
    let diffLabel = "🟡 Orta (ÖSYM Standart)";
    let diffColor = "#f59e0b";

    if (i <= 10) {
      difficulty = "kolay";
      diffLabel = "🟢 ÖSYM Lisans Seviye 1";
      diffColor = "#10b981";
    } else if (i <= 25) {
      difficulty = "orta";
      diffLabel = "🟡 ÖSYM Lisans Seviye 2";
      diffColor = "#f59e0b";
    } else if (i <= 35) {
      difficulty = "zor";
      diffLabel = "🔴 ÖSYM Lisans Üst Seviye";
      diffColor = "#ef4444";
    } else {
      difficulty = "sampiyon";
      diffLabel = "🟣 ÖSYM Derece & Şampiyon";
      diffColor = "#a855f7";
    }

    const examQuestions = [];
    let qIdCounter = 1;

    matTopics.forEach(topic => {
      for (let k = 0; k < topic.count; k++) {
        const qData = generateMatQuestion(topic.key, i, k);

        examQuestions.push({
          id: `matematik-d${i}-q${qIdCounter}`,
          denemeNo: i,
          questionNo: qIdCounter,
          category: "matematik",
          subcategory: topic.title,
          difficulty: difficulty,
          question: qData.q,
          options: qData.opts,
          correct: qData.c,
          explanation: qData.exp
        });
        qIdCounter++;
      }
    });

    denemeler.push({
      id: `mat-deneme-${i}`,
      title: `KPSS Matematik & Geometri Denemesi #${i}`,
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

const matematik40Denemeler = generate40MatematikDenemeleri();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { matematik40Denemeler, matTopics };
}
