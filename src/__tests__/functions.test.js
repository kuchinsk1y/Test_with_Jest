// Використовуємо require() замість import
const { ageClassification, weekFn } = require('../functions');

// **Завдання:**
// 1. Створення проекту: Ініціалізуйте новий проект та налаштуйте середовище для роботи з Jest.
// Для цього вам знадобиться створити новий каталог для проекту, ініціалізувати npm (`npm init -y`), встановити Jest як залежність розробки (`npm install --save-dev jest`) та додати в `package.json` скрипт для запуску тестів: `"test": "jest"`.
// 2. Тестування функції `ageClassification(num)`:** Ваше завдання полягає у написанні тестів для функції `ageClassification(num)`, яка класифікує вік людини.
// Тест повинен перевірити коректність роботи функції для всіх вказаних у прикладі діапазонів віку.


test("ageClassification for ages", () => {
  expect(ageClassification(-1)).toBe(null)
  expect(ageClassification(0)).toBe(null)
  expect(ageClassification(1)).toBe("Дитинство")
  expect(ageClassification(24)).toBe("Дитинство")
  expect(ageClassification(24.01)).toBe("Молодість")
  expect(ageClassification(44)).toBe("Молодість")
  expect(ageClassification(44.01)).toBe("Зрілість")
  expect(ageClassification(65)).toBe("Зрілість")
  expect(ageClassification(65.1)).toBe("Старість")
  expect(ageClassification(75)).toBe("Старість")
  expect(ageClassification(75.01)).toBe("Довголіття")
  expect(ageClassification(90)).toBe("Довголіття")
  expect(ageClassification(90.01)).toBe("Рекорд")
  expect(ageClassification(122)).toBe("Рекорд")
  expect(ageClassification(122.01)).toBe(null)
  expect(ageClassification(150)).toBe(null)
})

// console.log('    -1 :', ageClassification(-1)) // -1 : null
// console.log('     0 :', ageClassification(0)) // 0 : null
// console.log('     1 :', ageClassification(1)) // 1 : Дитинство
// console.log('    24 :', ageClassification(24)) // 24 : Дитинство
// console.log(' 24.01 :', ageClassification(24.01)) // 24.01 : Молодість
// console.log('    44 :', ageClassification(44)) // 44 : Молодість
// console.log(' 44.01 :', ageClassification(44.01)) // 44.01 : Зрілість
// console.log('    65 :', ageClassification(65)) // 65 : Зрілість
// console.log('  65.1 :', ageClassification(65.1)) // 65.1 : Старість
// console.log('    75 :', ageClassification(75)) // 75 : Старість
// console.log(' 75.01 :', ageClassification(75.01)) // 75.01 : Довголіття
// console.log('    90 :', ageClassification(90)) // 90 : Довголіття
// console.log(' 90.01 :', ageClassification(90.01)) // 90.01 : Рекорд
// console.log('   122 :', ageClassification(122)) // 122 : Рекорд
// console.log('122.01 :', ageClassification(122.01)) // 122.01 : null
// console.log('   150 :', ageClassification(150)) // 150 : null

// 3. Тестування функції weekFn(cond): Напишіть тести для функції weekFn(cond), що повертає назву дня тижня за заданим числом.
// Тест повинен переконатися, що функція коректно повертає назви для чисел від 1 до 7, та повертає null для невідповідних значень (наприклад, 9, 1.5, '2').

test("weekFn for days of the week", () => {
  expect(weekFn(1)).toBe("Понеділок")
  expect(weekFn(3)).toBe("Середа")
  expect(weekFn(7)).toBe("Неділя")
  expect(weekFn(9)).toBe(null)
  expect(weekFn(1.5)).toBe(null)
  expect(weekFn("2")).toBe(null)
})
