// const prefix = "http://localhost:3001/api/5/ed/";
const prefix = 'https://it-academy-js-api-zmicerboksha.vercel.app/api/5/ed/'

const fetchWithLog = (...args) =>
  fetch(...args).then((res) => res.json()).then(console.log);

//Создание пользователя
fetchWithLog(prefix + "score", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "username": 'Dima',
    cardScore: 5
  })
});

// получить все записи, если нету вернет пустой массив
// ?username=Dima - опционально, фильтранет по имени
fetchWithLog(prefix + "score?username=Dima");

// получить юзера по id
fetchWithLog(prefix + "ысщку/1");

//изменние юзера
fetchWithLog(prefix + "score/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    mathScore: 10
  })
});
// Удалить юзера
fetchWithLog(prefix + "score/1", {
  method: "DELETE"
});

