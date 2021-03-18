import React, { Fragment, PureComponent } from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

import Important from '../components/Important';
import { Block, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `let a = 5;
const b = 7;
`;

const code2 = `let [firstName, lastName] = ['Иван', 'Иванов'];

// Отбросим первые два
let [, , title] = 'Юлий Цезарь Император Рима'.split(' '); // title === 'Император'

// Остальные - в rest
let [firstName, lastName, ...rest] = 'Юлий Цезарь Император Рима'.split(' ');
// rest === ['Импреатор', 'Рима'];

// Значения по умолчанию
let [firstName = 'Гость', lastName = 'Аноним'] = [];

// Объекты
let { title, width, height } = { title: 'Меню', width: 2, height: 33, border: 2 };

// Также можно изменить имена переменных
let { title, width: w, height: h } = { width: 100, height: 33 } // w === 100
`;

const code3 = `function showMenu(title='Без заголовка', width=100, height=200) {
  // ...
}

function showName(first, last, ...rest) { ... };

showName('Юлий', 'Цезарь', 'Император', 'Рима'); // rest === ['Император', 'Рима']
`;

const code4 = `let numbers = [1,2,3,4,5];
let max = Math.max(...numbers); // Math.max.apply(Math, numbers); - то же самое

// Если функция получает объект - она может его сразу же деструктуризовать
function({ title, width, height }) {
  alert(title + '' + width + '' + height);
}
`;

const code5 = `let inc = x => x + 1;
(a,b) => a + b;

let oneMore = (a, b) => {
  let c = a + b;
  return c;
}

let arr = [5, 8, 3];
let sorted = arr.sort((a, b) => a - b);
console.log(sorted); // [3, 5, 8]
`;

const code6 = `let a = \`Some string \${b}\`;
// Разрешен перенос строк!

str.includes(s);   // включает ли строка подстроку
str.endsWith(s);   // true, если str заканчивается подстрокой s
str.startsWith(s); // если начинается подстрокой s
str.repeat(times); // повторяет str times раз
`;

const code7 = `let name = 'Вася';
let isAdmin = true;
let user = { name, isAdmin }; // user.name === 'Вася'

let propName = 'firstName';
// Вычисляемое свойство - здесь также может быть выражение
let user = {[propName]: 'Вася'}; // { firstName: 'Вася' }

// Метод Object.is() определяет, являются ли два значения одинаковыми значениями
Object.is(NaN, NaN); // true

// Копирует в объект target свойства из остальных объектов
// при этом последующие свойства перезатирают предыдущие
Object.assign(target, obj1, obj2);

// Новое объявление методов объекта
let name = 'Вася';
let user = {
  name,
  sayHi() { // вместо sayHi: function...
    alert(this.name);
  }
}
`;

const code8 = `class Название [extends Родитель] {
  constructor
  методы
}
`;

const code9 = `class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

let user = new User('Вася');
user.sayHi(); // 'Вася'
`;

const code10 = `class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`
  }
  set fullName(n) {
    [this.firstName, this.lastName] = n.split(' ');
  }
  ...
}
`;

const code11 = `class Rabbit extends Animal {
  walk() {
    super.walk();
    alert('... and jump');
  }
}

new Rabbit('Вася').walk();

class Rabbit extends Animal {
  constructor() { // если этого конструктора нет - то используется конструктор родителя
    super(); // вызвать конструктор родителя
  }
}
`;

const code12 = `let sym = Symbol();
`;

const code13 = `let arr = [1, 2, 3];
for (let value of arr) {
  alert(value);
}
for (let char of 'Привет') {
  alert(char);
}
`;

const code14 = `map.set(true, 'bool1');
map.get(true);
`;

const code15 = `let set = new Set();

let vasya = { name: 'Вася' };
let petya = { name: 'Петя' };
let dasha = { name: 'Даша' };

set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);

set.size; // 3

// Методы:
set.add(item);
set.delete(item); // удаляет и возвращает true если был и false если не было
set.has(item);
set.clear();

// Перебираем в цикле
set.forEach(user => alert(user.name));
`;

const code16 = `['a', 'b', 'c'].includes('a'); // true
['a', 'b', 'c'].includes('x'); // false

2**3; // 8 - это 2 в 3 степени (экспонента)
`;

const code17 = `// Паддинги строк
'es8'.padStart(5); // __es8 - общая длина 5, но два пробела в начале
'es8'.padStart(5,'xx'); // 'xxes8'
'es8'.padEnd(9,'y'); // 'es8yyyyyy'
`;

const code18 = `const obj = { x: 'xxx', y: 1 };
Object.values(obj); // ['xxx', 1] // как и с массивом работает со строкой

// Когда используем числовые ключи - возвращается 
// в порядке сортировки по ключам

const obj = { x: 'xxx', y: 1 };
Object.entries(obj); // [['x', 'xxx'], ['y', 1]]
`;

const code19 = `Object.getOwnPropertyDescriptors
// Возвращает дескрипторы собственных свойств указанного объекта

{
  configurable: true,
  enumerable: true,
  get: function() {},
  set: undefined
}
`;

const code20 = `function fetchTextByPromise() {
  return new Promise(resolve => {
    setTimeOut(() => { resolve('es8') }, 2000);
  })
}

async function sayHello() {
  const externalFetchedText = await fetchTextByPromise();
  console.log('Result: ', externalFetchedText);
}

sayHello();

// --------------------

const makeRequest = async () => {
  try {
    const data = JSON.parse(await getJSON());
    console.log(data);
  } catch(err) {
    console.log(err);
  }
}
`;

const code21 = `var Observable = Rx.Observable;
var button = document.getElementById('button');
var clicks = Observable.fromEvent(button, 'click');

clicks.forEach(function(e) {
  alert('clicked'); // на каждый клик получим алерт
});
`;

class Cmpnt extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <Fragment>
        <Head>ES 2015</Head>
        <p>
          В V8 большинство возможностей ES6 поддерживаются только при включенном <b>'use strict'</b>
        </p>

        <Block>
          <SubHead>Переменные</SubHead>
          <p>
            Область видимости такой переменной - блок <b>&#123;&#125;</b><br/>
            Это влияет на if, while, for<br/>
            Переменная <b>let</b> видна только после объявления
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code1}
          </StyledSyntaxHighlighter>
          <Important>При использовании в цикле для каждой итерации создается своя переменная</Important>
        </Block>

        <Block>
          <SubHead>Деструктуризация</SubHead>
          <p>
            Можно присвоить массив или объект сразу нескольким переменным, разбив его на части.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code2}
          </StyledSyntaxHighlighter>
          <Important>Вложенные объекты также можно деструктуризовать</Important>
        </Block>

        <Block>
          <SubHead>Функции</SubHead>
          <p>
            Можно указывать параметры по умолчанию. Они используются если параметр отсутствует
            или равен <b>undefined</b>
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code3}
          </StyledSyntaxHighlighter>
          <Important>
            Опретор <b>...</b> можно использовать для передачи массива параметров как списка
          </Important>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code4}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Стрелочные функции</SubHead>
          <p>
            Функции стрелки не имеют своего <b>arguments</b> и <b>this</b>.
            В них используется <b>super</b> внешней функции.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code5}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Строки</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code6}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Объекты и прототипы</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code7}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>SUPER</SubHead>
          <p>
            Только для использования в методах объекта.<br/>
            <b>super.parentProperty</b> позволяет из метода объекта получить свойство его прототипа.
          </p>
        </Block>

        <Block>
          <SubHead>Классы</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code8}
          </StyledSyntaxHighlighter>
          <Important>
            <b>Constructor</b> запускается при создании <b>new ClassName();</b>
          </Important>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code9}
          </StyledSyntaxHighlighter>
          <p>
            В классах есть геттеры, сеттеры и вычисляемые свойства
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code10}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Статические свойства</SubHead>
          <p>
            Это свойства, доступные через точку (класс - это тоже объект)
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code11}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Тип данных Symbol</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code12}
          </StyledSyntaxHighlighter>
          <p>
            Служит для создания уникальных идентификаторов. Если в объект зсписать свойство-символ
            то оно не участвует в итерации и к этому свойству нельзя обратиться по его названию.
          </p>
        </Block>

        <Block>
          <SubHead>Итераторы</SubHead>
          <p>
            Итераторы - способ перебора. Итерируемые объекты - это те, содержание которых
            можно перебрать в цикле. Строки тоже итерируемые.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code13}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>MAP</SubHead>
          <p>
            Map - коллекция для хранения записей ключ: значение. В map ключем может быть
            произвольное значение.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code14}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>SET</SubHead>
          <p>
            Set - коллекция для хранения множества значений, причем каждое может встречаться
            только один раз! Например - используется для подсчета уникальных посетителей.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code15}
          </StyledSyntaxHighlighter>
          <Important>
            <b>WeakMap</b> и <b>WeakSet</b> то же что и set и map только объекты при удалении
            удаляются из памяти.
          </Important>
        </Block>

        <Block>
          <SubHead>ES7</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code16}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>ES8 (es2017)</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code17}
          </StyledSyntaxHighlighter>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code18}
          </StyledSyntaxHighlighter>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code19}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Асинхронные функции async/await</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code20}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Observable</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code21}
          </StyledSyntaxHighlighter>
        </Block>
      </Fragment>
    );
  }
}

export default Cmpnt;