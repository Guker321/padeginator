export const padeginatorFunc = (word, caseVal, endings = {}) => {
  const indeclinableNouns = [
    'пони',
    'метро',
    'пальто',
    'кенгуру',
    'зебу',
    'колибри',
    'сулугуни',
    'драже',
    'трюмо',
    'каноэ',
    'алоэ',
    'шасси',
    'такси',
    'жалюзи',
    'бра',
  ];

  let targetWordSlice;
  if (/(а|я)$/gi.test(word)) {
    endings = {
      rod: 'ы',
      dat: 'е',
      vin: 'у',
      tvor: 'ой',
      predl: 'е',
    };
  }
  if (/(ь|о|е)$/gi.test(word)) {
    endings = {
      rod: 'я',
      dat: 'ю',
      vin: 'е',
      tvor: 'ем',
      predl: 'е',
    };
  }
  // ПОСМОТРИ ПО ПОВОДУ РАБОТЫ С ПУСТЫМИ ОБЬЕКТАМИ может оптимизируешь
  const transformWord = (word, endings, caseVal, lastIndex = -1) => {
    if (indeclinableNouns.includes(word)) {
      return word;
    }
    if (Object.keys(endings).length === 0) {
      return word;
    }
    targetWordSlice = word.slice(0, lastIndex);
    return `${targetWordSlice}${endings[caseVal]}`;
  };

  switch (caseVal) {
    case 'imen':
      return word;
    case 'rod':
      return transformWord(word, endings, caseVal);
    case 'dat':
      return transformWord(word, endings, caseVal);
    case 'vin':
      return transformWord(word, endings, caseVal);
    case 'tvor':
      return transformWord(word, endings, caseVal);
    case 'predl':
      return transformWord(word, endings, caseVal);
    default:
      return 'Произошла ошибка попробуйте другое слово';
  }
};
