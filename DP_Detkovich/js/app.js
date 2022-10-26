
const exit = document.querySelector("#exit")
let linkExit = document.querySelector(".link-exit")
let appHtml = document.querySelector("#app")

let users
let recordTime = localStorage.getItem('cardTime');

const prefix = 'https://it-academy-js-api-zmicerboksha.vercel.app/api/5/ed/'
const fetchWithLog = (...args) => fetch(...args).then((res) => res.json()).then(console.log);



function htmlMath() {
  return `<audio id="myAudio">
  <source src="audio/6a6f186b6489540.mp3">
</audio>

<header>
  <div class="container">
      
      <ul>
          <li><a href="#index">Сложение</a></li>
          <li><a href="#subtract">Вычетание</a></li>
          <li><a href="#multiply">Умножение</a></li>
          <li><a href="#divide">Деление</a></li>
      </ul>
  </div>
</header>

<div class="wrapper">
  <div class="equation">
      <h1 id="num1" style="color: #fe4a49;">1</h1>
      <h1 id ="sign" style="color: #2ab7ca;"></h1>
      <h1 id="num2" style="color: #fed766;">1</h1>
      <h1 style="color: #fe4a49;">=</h1>
      <h1 style="color: gray;">?</h1>
  </div>
  <div class="answer-options">
      <h1 id="option1">1</h1>
      <h1 id="option2">2</h1>
      <h1 id="option3">3</h1>
  </div>
</div>`

}
function htmlCardsMemory() {
  return `<section class="section-cards">
 <header>
            <div class="container-header">
                <h1>Игра на запоминание</h1>
                <div id="sekundomers">
                  <div class="time">Время:
                    <span id="minute">00</span> :
                    <span id="second">00</span> :
                    <span id="ms">00</span>
                  </div>
            </div>
        </header>
 <div class="memory-game">
   <div class="memory-card" data-framework="panda">
     <img class="front-face" src="./img/panda.svg" alt="panda" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="panda">
     <img class="front-face" src="./img/panda.svg" alt="panda" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>

   <div class="memory-card" data-framework="duk">
     <img class="front-face" src="./img/duk.svg" alt="duk" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="duk">
     <img class="front-face" src="./img/duk.svg" alt="duk" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>

   <div class="memory-card" data-framework="cat">
     <img class="front-face" src="./img/cat.svg" alt="cat" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="cat">
     <img class="front-face" src="./img/cat.svg" alt="cat" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>

   <div class="memory-card" data-framework="shiraf">
     <img class="front-face" src="./img/shiraf.svg" alt="shiraf" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="shiraf">
     <img class="front-face" src="./img/shiraf.svg" alt="shiraf" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>

   <div class="memory-card" data-framework="burunduk">
     <img class="front-face" src="./img/burunduk.svg" alt="burunduk" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="burunduk">
     <img class="front-face" src="./img/burunduk.svg" alt="burunduk" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>

   <div class="memory-card" data-framework="bull">
     <img class="front-face" src="./img/bull.svg" alt="bull" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="bull">
     <img class="front-face" src="./img/bull.svg" alt="bull" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="zebra">
     <img class="front-face" src="./img/zebra.svg" alt="zebra" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="zebra">
     <img class="front-face" src="./img/zebra.svg" alt="zebra" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="begemot">
     <img class="front-face" src="./img/begemot.svg" alt="begemot" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="begemot">
     <img class="front-face" src="./img/begemot.svg" alt="begemot" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="wolf">
     <img class="front-face" src="./img/wolf.svg" alt="wolf" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="wolf">
     <img class="front-face" src="./img/wolf.svg" alt="wolf" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="koza">
     <img class="front-face" src="./img/koza.svg" alt="koza" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
   <div class="memory-card" data-framework="koza">
     <img class="front-face" src="./img/koza.svg" alt="koza" />
     <img class="back-face" src="./img/question.svg" alt="question" />
   </div>
 </div>
</section>`


}
function htmlAlphabet() {
  return `<div class="alphabet">
  <h1>Русский алфавит</h1>
  <div class="set">
    <button type="button" id="а" class= "а letter" name="А">А</button>
    <button type="button" id="б" class= "б letter" name="Б">Б</button>
    <button type="button" id="в" class= "в letter" name="В">В</button>
    <button type="button" id="г" class= "г letter" name="Г">Г</button>
    <button type="button" id="д" class= "д letter" name="Д">Д</button>
    <button type="button" id="е" class= "е letter" name="Е">Е</button>
    <button type="button" id="ё" class= "ё letter" name="Ё">Ё</button>
    <button type="button" id="ж" class= "ж letter" name="Ж">Ж</button>
    <button type="button" id="з" class= "з letter" name="З">З</button>
    <button type="button" id="и" class= "и letter" name="И">И</button>
    <button type="button" id="й" class= "й letter" name="Й">Й</button>
    <button type="button" id="к" class= "к letter" name="К">К</button>
    <button type="button" id="л" class= "л letter" name="Л">Л</button>
    <button type="button" id="м" class= "м letter" name="М">М</button>
    <button type="button" id="н" class= "н letter" name="Н">Н</button>
    <button type="button" id="о" class= "о letter" name="О">О</button>
    <button type="button" id="п" class= "п letter" name="П">П</button>
    <button type="button" id="р" class= "р letter" name="Р">Р</button>
    <button type="button" id="с" class= "с letter" name="С">С</button>
    <button type="button" id="т" class= "т letter" name="Т">Т</button>
    <button type="button" id="у" class= "у letter" name="У">У</button>
    <button type="button" id="ф" class= "ф letter" name="Ф">Ф</button>
    <button type="button" id="х" class= "х letter" name="Х">Х</button>
    <button type="button" id="ц" class= "ц letter" name="Ц">Ц</button>
    <button type="button" id="ч" class= "ч letter" name="Ч">Ч</button>
    <button type="button" id="ш" class= "ш letter" name="Ш">Ш</button>
    <button type="button" id="щ" class= "щ letter" name="Щ">Щ</button>
    <button type="button" id="ъ" class= "ъ letter" name="Ъ">Ъ</button>
    <button type="button" id="ы" class= "ы letter" name="Ы">Ы</button>
    <button type="button" id="ь" class= "ь letter" name="Ь">Ь</button>
    <button type="button" id="э" class= "э letter" name="Э">Э</button>
    <button type="button" id="ю" class= "ю letter" name="Ю">Ю</button>
    <button type="button" id="я" class= "я letter" name="Я">Я</button>
  </div>`
}

function addHtml() {
  let app = appHtml

  if (location.hash === "") {

    app.innerHTML = `<div class="jumbotron" id="login">
            <div class="container-sm">
                <h1>Учим цифры и играем</h1>
                <h4>Введи свое имя</h4>
                <form class="form-signin">
                    <div class="form-group">
                        <input id="inputEmail" class="form-control" placeholder="" required="" autofocus="">
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" id="login-button" type="submit">Войти</button>
                </form>
            </div>
        </div>`

  }
  if (location.hash === "#Math") {
    linkExit.setAttribute("href", "#lobby")
    app.innerHTML = htmlMath()

    let option1 = document.getElementById('option1');
    let option2 = document.getElementById('option2');
    let option3 = document.getElementById('option3');
    let audio = document.getElementById('myAudio');

    let answer = 0;

    function generate_index() {
      //определяем целое число от 0 до 10
      let num1 = Math.floor(Math.random() * 11);
      let num2 = Math.floor(Math.random() * 11);
      let dummyAnswer1 = Math.floor(Math.random() * 11);
      let dummyAnswer2 = Math.floor(Math.random() * 11);
      let firstNum = document.getElementById('num1');
      let secondNum = document.getElementById('num2')

      let allAnswers = [];
      let switchAnswers = [];

      if (location.hash === "#index") {
        answer = num1 + num2;
      } else if (location.hash === "#subtract") {
        answer = num1 - num2;
      } else if (location.hash === "#multiply") {
        answer = num1 * num2;
      } else if (location.hash === "#divide") {
        answer = num1 / num2;
      } else {
        answer = num1 + num2;
      }
      
      firstNum.innerHTML = num1;
      secondNum.innerHTML = num2;

      allAnswers = [answer, dummyAnswer1, dummyAnswer2];
      //перебираем и возвращаем новый массив в рандомном порядке
      for (let i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
      }

      option1.innerHTML = switchAnswers[0];
      option2.innerHTML = switchAnswers[1];
      option3.innerHTML = switchAnswers[2];

    }


    option1.addEventListener('click', function () {
      if (option1.innerHTML == answer) {
        generate_index();
      }
      else {
        audio.play();
      }
    });

    option2.addEventListener('click', function () {
      if (option2.innerHTML == answer) {
        generate_index();
      }
      else {
        audio.play();
      }
    });

    option3.addEventListener('click', function () {
      if (option3.innerHTML == answer) {
        generate_index();
      }
      else {
        audio.play();
      }
    });


    let sign = document.getElementById('sign')

    function locationChangeMath() {
      switch (location.hash) {
        case "#index":

          sign.innerHTML = `${"+"}`

          generate_index();
          break
        case "#subtract":
          sign.innerHTML = `${"-"}`
          generate_index()
          break
        case "#multiply":
          sign.innerHTML = `${"*"}`
          generate_index()
          break
        case "#divide":
          sign.innerHTML = `${"/"}`
          generate_index()
          break
        case "#":
          location.hash = "#lobby"
      }
    }


    window.addEventListener('hashchange', locationChangeMath)
    locationChangeMath()


  }
  if (location.hash === "#lobby") {
    linkExit.setAttribute("href", "#")

    app.innerHTML = `<section class="section_lobby" style ="height: 100%">
      <h1>Привет, <span>${users}</span> ! </h1>
    <div class="lobby-bg">

          <div class="card">
            <a href="#cards"><img src="./img/1.jpg" alt="Avatar" ></a>
            <div class="container">
              <h4><b>Карточки памяти</b></h4>
              <p>Тренируем память</p>
            </div>
          </div>
          <div class="card">
            <a href="#Math"><img src="./img/math1.jpg" alt="Avatar" ></a>
            <div class="container">
              <h4><b>Математика</b></h4>
              <p>Учимся считать</p>
            </div>
          </div>
          <div class="card">
            <a href="#alphabet"><img src="./img/alphabet.jpg" alt="Avatar" ></a>
            <div class="container">
              <h4><b>Алфавит</b></h4>
              <p>Запоминаем буквы</p>
            </div>
          </div>
    </div>
  </section>`
  }
  if (location.hash === "#cards") {
  
    linkExit.setAttribute("href", "#lobby")
    app.innerHTML = htmlCardsMemory()

    let cards = document.querySelectorAll('.memory-card');
    let flippedCard = false;
    let lockBoard = false;
    let firstCard;
    let secondCard;

    let dynamicCards = document.getElementsByClassName('memory-card')
    let flip = document.getElementsByClassName('flip')


    function flipCard() {
      if (lockBoard) return;// запрещает переворот карточке до совпадения
      if (this === firstCard) return;// проверка на двойное нажатие

      this.classList.add('flip');

      if (!flippedCard) {
        // Первое нажатие
        flippedCard = true;
        firstCard = this;

        return;
      }

      // Второе нажатие
      secondCard = this;

      if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
      }
      unflipCards()
    }


    function disableCards() {
      // снимаем событие с активных карточек
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

      resetBoard();
    }

    function unflipCards() {
      //возврат карточек
      lockBoard = true;

      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
      }, 500);
    }

    function resetBoard() {
      //сбрасываем переменные 
      [flippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];

      if (flip.length === 20) {
        // обнуляем карточки и останавливаем таймер когда все поле заполненно
        for (let i = 0; i < dynamicCards.length; i++) {
          setTimeout(() => {
            dynamicCards[i].classList.remove('flip')
          }, 1000)

        }
        stopTimer()
        saveTime()

      }

    }

    (function shuffle() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 19);
        card.style.order = randomPos;
      });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard));

    let timer = 0;
    let timerInterval;
    let ms = document.getElementById('ms');
    let second = document.getElementById('second');
    let minute = document.getElementById('minute');

    function goTimer() {
      stopTimer();
      timerInterval = setInterval(function () {
        timer += 1 / 60;
        msVal = Math.floor((timer - Math.floor(timer)) * 100);
        let secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
        let minuteVal = Math.floor(timer / 60);
        ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
        second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
        minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
      }, 1000 / 60);
    }
    goTimer()
    function stopTimer() {
      clearInterval(timerInterval);

    }
    function saveTime() {
      let endMs = ms.innerHTML
      let endMinute = minute.innerHTML
      let endSecond = second.innerHTML
      let endTime = endMinute + " : " + endSecond + " : " + endMs
      /* arrTime.push(endMinute, endSecond, endMs) */
      localStorage.setItem(`cardTime`, JSON.stringify(endTime))


    }


  }
  if (location.hash === "#alphabet"){
    linkExit.setAttribute("href", "#lobby")
    app.innerHTML = htmlAlphabet()

    let letter = document.getElementsByClassName("letter")
console.log(letter)

//принудительно делаем массив из коллекции
Array.from(letter).forEach(element => {

    element.addEventListener("click", function () {
        // получаем текущий обьект из html
        let buttonInnerHTML = this.innerHTML
        console.log(buttonInnerHTML)
        sound(buttonInnerHTML);
    })
});


function sound(key) {
    switch (key) {
        case "А":
            let gen1 = new Audio("audio/gen-а.mp3");
            gen1.play();
            break;

        case "Б":
            let gen2 = new Audio("audio/gen-б.mp3");
            gen2.play();
            break;

        case "В":
            let gen3 = new Audio("audio/gen-в.mp3");
            gen3.play();
            break;

        case "Г":
            let gen4 = new Audio("audio/gen-г.mp3");
            gen4.play();
            break;

        case "Д":
            let gen5 = new Audio("audio/gen-д.mp3");
            gen5.play();
            break;

        case "Е":
            let gen6 = new Audio("audio/gen-е.mp3");
            gen6.play();
            break;

        case "Ё":
            let gen7 = new Audio("audio/gen-ё.mp3");
            gen7.play();
            break;

        case "Ж":
            let gen8 = new Audio("audio/gen-ж.mp3");
            gen8.play();
            break;

        case "З":
            let gen9 = new Audio("audio/gen-з.mp3");
            gen9.play();
            break;

        case "И":
            let gen10 = new Audio("audio/gen-и.mp3");
            gen10.play();
            break;

        case "Й":
            let gen11 = new Audio("audio/gen-й.mp3");
            gen11.play();
            break;

        case "К":
            let gen12 = new Audio("audio/gen-к.mp3");
            gen12.play();
            break;

        case "Л":
            let gen13 = new Audio("audio/gen-л.mp3");
            gen13.play();
            break;

        case "М":
            let gen14 = new Audio("audio/gen-м.mp3");
            gen14.play();
            break;

        case "Н":
            let gen15 = new Audio("audio/gen-н.mp3");
            gen15.play();
            break;

        case "О":
            let gen16 = new Audio("audio/gen-о.mp3");
            gen16.play();
            break;

        case "П":
            let gen17 = new Audio("audio/gen-п.mp3");
            gen17.play();
            break;

        case "Р":
            let gen18 = new Audio("audio/gen-р.mp3");
            gen18.play();
            break;

        case "С":
            let gen19 = new Audio("audio/gen-с.mp3");
            gen19.play();
            break;

        case "Т":
            let gen20 = new Audio("audio/gen-т.mp3");
            gen20.play();
            break;

        case "У":
            let gen21 = new Audio("audio/gen-у.mp3");
            gen21.play();
            break;

        case "Ф":
            let gen22 = new Audio("audio/gen-ф.mp3");
            gen22.play();
            break;

        case "Х":
            let gen23 = new Audio("audio/gen-х.mp3");
            gen23.play();
            break;

        case "Ц":
            let gen24 = new Audio("audio/gen-ц.mp3");
            gen24.play();
            break;

        case "Ч":
            let gen25 = new Audio("audio/gen-ч.mp3");
            gen25.play();
            break;

        case "Ш":
            let gen26 = new Audio("audio/gen-ш.mp3");
            gen26.play();
            break;

        case "Щ":
            let gen27 = new Audio("audio/gen-щ.mp3");
            gen27.play();
            break;

        case "Ъ":
            let gen28 = new Audio("audio/gen-ъ.mp3");
            gen28.play();
            break;

        case "Ы":
            let gen29 = new Audio("audio/gen-ы.mp3");
            gen29.play();
            break;

        case "Ь":
            let gen30 = new Audio("audio/gen-ь.mp3");
            gen30.play();
            break;

        case "Э":
            let gen31 = new Audio("audio/gen-э.mp3");
            gen31.play();
            break;

        case "Ю":
            let gen32 = new Audio("audio/gen-ю.mp3");
            gen32.play();
            break;

        case "Я":
            let gen33 = new Audio("audio/gen-я.mp3");
            gen33.play();
            break;

        default: console.log(key);

    }
}
  }

}

function checkValidate() {
  const inputEmail = document.querySelector("#inputEmail")
  const loginButton = document.querySelector("#login-button")

  loginButton.addEventListener("click", e => {
    if (!(inputEmail.value === "")) {
      location.hash = "#lobby"
      users = inputEmail.value

      fetchWithLog(prefix + "score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": inputEmail.value,
          cardScore: 0,
          mathScore: 0,
          alphabetScore: 0,
        })
      });
    }
  })


}

function locationChange() {
  switch (location.hash) {
    case "":
      console.log("Пустая")
      exit.hidden = true
      addHtml()
      checkValidate()

      break
    case "#lobby":
      exit.hidden = false
      addHtml()
      console.log("lobby")
      break
    case "#Math":
      exit.hidden = false
      addHtml()

      location.hash = "#index";
      console.log("Math")

      break
    case "#cards":
      exit.hidden = false
      console.log("cards")
      addHtml()
      break
    case "#alphabet":
      exit.hidden = false
      console.log("alphabet")
      addHtml()
      break
    case "#logaut":
      exit.hidden = false
      app.innerHTML = `<h1>Это ${location.hash}</h1>`
      location.hash = "";

      break
  }
}


window.addEventListener('hashchange', locationChange)
locationChange()



