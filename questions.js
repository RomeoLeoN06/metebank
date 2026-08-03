// KPSS Lisans 3 Ayrı Bilgi Kartı Destesi (Tarih, Coğrafya, Vatandaşlık & Güncel)

const kpssFlashcardsTarih = (typeof window !== 'undefined' && window.kpssFlashcardsTarih) 
  ? window.kpssFlashcardsTarih 
  : [];

const kpssFlashcardsCografya = (typeof window !== 'undefined' && window.kpssFlashcardsCografya) 
  ? window.kpssFlashcardsCografya 
  : [];

const kpssFlashcardsVatandaslik = (typeof window !== 'undefined' && window.kpssFlashcardsVatandaslik) 
  ? window.kpssFlashcardsVatandaslik 
  : [];

// Combine all for backward compatibility
const kpssFlashcards = [
  ...kpssFlashcardsTarih,
  ...kpssFlashcardsCografya,
  ...kpssFlashcardsVatandaslik
];

const kpssQuestions = [];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    kpssFlashcardsTarih,
    kpssFlashcardsCografya,
    kpssFlashcardsVatandaslik,
    kpssFlashcards,
    kpssQuestions
  };
}
