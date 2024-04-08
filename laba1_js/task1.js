const strInput = document.querySelector('#str');
const countBtn = document.querySelector('#count-btn');
const resultEl = document.querySelector('#result');
const clearBtn = document.querySelector('#clear-btn');

countBtn.addEventListener('click', () => {
    const str = strInput.value;
    const vowelCount = countVowels(str);
    resultEl.textContent = `Кількість голосних: ${vowelCount}`;
});

function countVowels(str) {
    // Перетворити рядок у нижній регістр для порівняння
    str = str.toLowerCase();
  
    // Визначити голосні
    const vowels = "aeiou";
  
    // Створити змінну для підрахунку
    let vowelCount = 0;
  
    // Перебрати кожен символ у рядку
    for (let i = 0; i < str.length; i++) {
      // Перевірити, чи є символ голосною
      if (vowels.includes(str[i])) {
        // Збільшити лічильник
        vowelCount++;
      }
    }
  
    // Повернути кількість голосних
    return vowelCount;
  }

clearBtn.addEventListener('click', () => {
  resultEl.textContent = '';
});
  