import React, { Component } from 'react';
import Important from '../components/Important';
import { Block, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const code1 = `// Объявляем:
:root {
  --red: #ff6f69;
}

// Использовать так:
#title {
  color: var(--red);
}

// Или
color: var(--red, black); // black используется если переменная не передана

// Доступ из Javascript:
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--main-color');
console.log(mainColor);
`;

const code2 = `<section>
    <h2>...</h2>
    <p>...</p>
</section>

<figure>
  <img src="..." alt="...">
  <figcaption>...</figcaption>
</figure>

<time>1957-10-04</time>
`;

class CommonQuestions extends Component {
  render () {
    return (
      <div>
        <Head>Общие вопросы</Head>

        <Block>
          <SubHead>Семантическая разметка</SubHead>
          <p>
            Это контент с грамотно поставленными HTML тегами форматирования.
            Семантика - использование тегов в соответствии со смыслом (правила форматирования)
          </p>
        </Block>
        <Block>
          <SubHead>Оптимизация</SubHead>
          <p>
            Как увеличить скорость загрузки?<br/>
            1. Уменьшить количество HTTP запросов: CSS спрайты, inline картинки
            (url-схема data:), конкатенация файлов (объединение в один)<br/>
            2. CSS файлы - в начало страницы<br/>
            3. Javascript файлы - в конце страницы<br/>
            4. Минификация<br/>
            5. Поддомены для параллельно скачивания<br/>
            6. Используйте кэш браузера<br/>
            7. CDN для загрузки популярных библиотек<br/>
            8. Оптимизация изображений<br/>
            9. GZIP сжатие<br/>
            10. Чтобы заставить браузер загружать болше ресурсов ПАРАЛЛЕЛЬНО
            можно отдавать их с разных доменов<br/>
            11. Предзагрузка ресурсов: &lt;link rel="prefetch" href="webfont.woff"&gt;<br/>
            12. Отказаться от изображений для retina дисплеев<br/>
            13. Использовать baseline jpeg (сначала грузится размытое изображение)<br/>
            14. Как можно меньше изображений
          </p>
          <Important>
            Одновременно с одного домена браузер может качать только 2 ресурса
          </Important>
        </Block>
        <Block>
          <SubHead>Стандарты и комитеты по стандартам ISO, IEC</SubHead>
          <p>Требования, позволяют оценить качество</p>
        </Block>
        <Block>
          <SubHead>DOCTYPE</SubHead>
          <p>
            Нужен для того, чтобы браузер правильно отображал разметку документа.
            Для указания типа документа. Какую версию HTML использовать (их 8 штук -
            XHTML строгий синтаксис, фреймы и так далее). Некоторые браузеры поддерживают XHTML5 и
            обрабатывают такую разметку по-другому.<br/>
            <b>Quirks Mode</b> - неопределенное состояние (некорректное отображение страниц, написанных
            для старых браузеров)<br/>
            <b>Standarts Mode</b> - соответствует стандартам
          </p>
        </Block>
        <Block>
          <SubHead>HTML5</SubHead>
          <p>
            Это открытая платформа, предназначенная для создания веб приложений, использующих
            аудио, видео, графику, анимацию и так далее. Это не продолжатель разметки гипертекста,
            а новая платформа для создания веб приложений, использующих аудио, видео, анимацию,
            графику и многое другое.
          </p>
          <p>
            1. Новые теги: header, footer, section, article, video, audio, progress, nav,
            meter, time, aside, canvas, ruby, details, strong<br/>
            2. Новые значения атрибута <b>type</b><br/>
            3. Новые атрибуты элементов: dragable, contenteditable, hidden,
            contextmenu, data-*, dropzone, role, spellcheck[8] ...<br/>
            4. Автономная работа, благодаря кэшу HTML5<br/>
            5. Можно рисовать, используя CANVAS API<br/>
            6. 3D графика<br/>
            7. Загрузка файлов new FormData<br/>
            8. drag and drop<br/>
            9. audio video<br/>
            10. canvas svg<br/>
            11. Веб компоненты!
          </p>
          <Important>
            GET - данные отправляются в URL<br/>
            POST - передает данные в запросе (пользователь их не видит)
          </Important>
        </Block>
        <Block>
          <SubHead>Преимущества новых тегов HTML5</SubHead>
          <p>
            Поисковые системы лучше индексируют сайт. Лучше работают речевые браузеры (для слепых).
            Всё предназначено для роботов, интерпретирующих код.
          </p>
          <p><b>Header</b> - определяет шапку сайта или раздела</p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code2}
          </StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>Cookies</SubHead>
          <p>
            Небольшой текстовый файл, в который записываются данные посещенного сайта:
            логин, пароль, индивидуальные настройки, статистика посещений. Каждый раз при
            посещении сайта, браузер отправляет серверу сайта наш куки для идентификации.
          </p>
        </Block>
        <Block>
          <SubHead>Session Storage</SubHead>
          <p>
            Это более функциональная альтернатива cookies. Можно хранить неограниченные объемы
            информации, информация доступна без подключения к интернету, данные не отсылаются
            при каждом запросе страницы, удобно сохранять и извлекать информацию. Более безопасны.<br/>
            <b>Local Storage</b> - хранит неограниченно<br/>
            <b>Session Storage</b> - хранит данные только в течение пользовательской сессии.<br/>
            Если один сайт открыт в нескольких вкладках браузера - сторадж у него будет один
            и доступен в каждой вкладке.
          </p>
        </Block>
        <Block>
          <SubHead>Undeclarated и Undefined</SubHead>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`var obj = {
  prop1: 'value1',
  prop2: 'value2'
}

console.log(obj.test); // undefined - не вызовет ошибки
console.log(test); // undeclarated - Uncaught ReferenceError: test is not defined
`}
</StyledSyntaxHighlighter>
        </Block>








        <Block>
          <SubHead>Арность</SubHead>
          <p>
            Это количество операторов функции (количество ее аргументов)
          </p>
        </Block>
        <Block>
          <SubHead>Feature detection</SubHead>
          <p>
            Определение возможностей браузера. Пример использования - Modernizer
          </p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`// Проверяем конкретную функцию

if (window.XMLHttpRequest) {
  new XMLHttpRequest
}

// Или в html:
<video src="images/...">Your browser not ...</video>
`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>Feature inference</SubHead>
          <p>
            Есть одна функция - значит есть и остальные. Например если есть SessionStorage, то
            значит поддерживается HTML5
          </p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`if (document.getElementsByTagName) {
  element = document.getElementById
}`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>Graceful degradation</SubHead>
          <p>
            Правильное отображение контента при отключенном Javascript, аккуратное отображение
            без CSS3 и отключенных изображениях
          </p>
        </Block>
        <Block>
          <SubHead>Progressive enhancement</SubHead>
          <p>
            Прогрессивное улучшение - от простого к сложному. HTML - CSS - CSS3 - JS
          </p>
        </Block>
        <Block>
          <SubHead>FUOC</SubHead>
          <p>
            В IE (вспышка) отображение страницы сперва без стилей. Решение проблемы -
            обернуть всю страницу в блок, который скрыть и только когда вся страница
            загрузилась со стилями - показать этот блок с помощью JS (.show());
          </p>
        </Block>
        <Block>
          <SubHead>User Agent</SubHead>
          <p>В user agent содержится информация о браузере</p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`if (navigator.userAgent.indexOf('MSIE7') > -1) {
  // do something ...
}`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>JSONP</SubHead>
          <Important>
            Работает только в GET!
          </Important>
          <p>
            С помощью JS добавляем в head скрипт
          </p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`<script src="/user?id=123"></script>
// addScript('user?id&callback=onUserData')
// ответ будет onUserData({name: 'Vasya', age: 30});
`}
</StyledSyntaxHighlighter>
          <p>
            Браузер его скачивает и тут же выполняет! Сервер обернет ответ в функцию, имя
            которой мы передали в GET параметре
          </p>
        </Block>
        <Block>
          <SubHead>Мемоизация</SubHead>
          <p>
            Сохранение результатов выполнения функция для предотвращения повторных вычислений.
            Другими словами - кэширование промежуточного результата. Как пример - рекурсия с
            сохранением промежуточного результата в какой-то массив или объект.
          </p>
          <p>
            Кэширование результатов функции - перед выполнением функции - проверка. если результат есть в
            кэше - значит функция уже выполнялась и берем результат оттуда. Если результата нет в кэше - выполняем.
          </p>
        </Block>
        <Block>
          <SubHead>События загрузки DOM</SubHead>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`// DOMContentLoaded – означает, что все DOM-элементы разметки уже созданы, можно их искать,
// вешать обработчики, создавать интерфейс, но при этом, возможно, ещё
// не догрузились какие-то картинки или стили

// load – страница и все ресурсы загружены, используется редко, обычно
// нет нужды ждать этого момента

<script>
  function ready() {
    alert( 'DOM готов' );
    alert( "Размеры картинки: " + img.offsetWidth + "x" + img.offsetHeight );
  }

  document.addEventListener("DOMContentLoaded", ready);
</script>

<img id="img" src="https://js.cx/clipart/yozhik.jpg?speed=1">
`}
</StyledSyntaxHighlighter>
          <p>
            <b>ready</b> - готово дерево DOM<br/>
            <b>load</b> - загружено все содержимое, включая изображения
          </p>
        </Block>
        <Block>
          <SubHead>Получение данных из url</SubHead>
          <p>
            <b>window.location</b> - получает/устанавливает параметры url
          </p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`window.location.href // вся ссылка в виде строки
window.location.search // строка с параметрами из ссылки ?id=2&name=Petya...
`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>CSS переменные</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code1}
          </StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>POST CSS</SubHead>
          <p>
            В чём отличие от препроцессоров?<br/>
            <b>Препроцессор</b>: монолитный, логика прямо в шаблоне<br/>
            <b>Post CSS</b>: все функции как плагины, JS трансформирует CSS<br/>
          </p>
          <p>
            Примеры:<br/>
            <b>autoprefixer</b><br/>
            <b>cssnext</b> - пишем на CSS4 преобразует в CSS3<br/>
            <b>data-packer</b> - сначала грузятся стили а только потом картинки (выносит их в отдельный файл)<br/>
            <b>bem-linter</b>
          </p>
          <Important>
            На PostCSS можно сделать любую фичу которая есть в SASS, но на SASS невозможно сделать большинство фич,
            которые есть в PostCSS! SASS и SCSS - отличие только в синтаксисе (в SASS отступы а SCSS похож на CSS)
          </Important>
        </Block>
        <Block>
          <SubHead>Функциональное программирование</SubHead>
          <p>
            1. Все функции - чистые. Функции, вызываемые от одних и тех же аргументов всегда возвращают
            одинаковые значения. Нет обращений к переменным вне функции. Нет побочных эффектов
            (не меняем ничего вне функции).<br/>
            2. Функции высшего порядка - это те, которые принимают другую функцию как
            аргумент или возвращают функцию (например .filter и .map).<br/>
            3. Переменные неизменяемы (const)
            4. ...
          </p>
          <p>
            Вопросы: монады, каррирование, линзы, чистые функции
          </p>
        </Block>
        <Block>
          <SubHead>Шифрование</SubHead>
          <p>
            Обратимое преобразование информации в целях сокрытия её от неавторизованных лиц, с предоставлением
            авторизованным пользователям доступа к ней. При шифрование обязательно использование ключа!
            Различают: шифрование данных с помощью открытого ключа, кодировка base64, симметричный шифр,
            ассиметричный шифр ...
          </p>
        </Block>
        <Block>
          <SubHead>Сессии</SubHead>
          <p>
            Это механизм, позволяющий однозначно идентифицировать браузер и создающий для этого браузера файл на сервере
            в котором хранятся переменные сеанса.
          </p>
          <Important>
            Переменную можно передать браузеру только в куках или вметсе с POST/GET запросом
          </Important>
          <p>
            К каждой ссылке и каждой форме PHP дописывает идентификатор сессии (к формам добавляется скрытое поле).
            Чтобы поместить переменную в сессию - достаточно присвоить её элементу массива $_SESSION (PHP)
          </p>
          <p>
            Записать данные в сессию - отправить запрос на сервер! Сессия создается на сервере, а куки хранятся на
            компьютере пользователя!
          </p>
        </Block>
        <Block>
          <SubHead>SAME ORIGIN POLICY</SubHead>
          <p>
            Ограничивает доступ окон и фреймов друг к другу. Два URL считаются имеющими один источник,
            если у них одинаковый протокол! Из разных источников - запрещено!
            Один источник! Запрещает доступ из одного окна к другому!<br/>
            Общение окон с разных доменов - <b>postMessage</b> (интерфейс).
            Получатель ставит обработчик на событие <b>onmessage</b>.
          </p>
        </Block>
        <Block>
          <SubHead>LERNA</SubHead>
          <p>
            Это инструмент, который помогает держать множество пакетов в одном репозитории.
            Создание симлинков на локальные пакеты.
          </p>
        </Block>
        <Block>
          <SubHead>FORM DATA (IE10+)</SubHead>
          <p>
            Встроенный объект, который кодирует формы для отправки на сервер.
            C помощью этого объекта также можно отправлять файлы на сервер.
          </p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`var data = new FormData(document.forms.person); // document.forms - все формы

data.append('newname', 'Max');
var xhr = new XMLHttpRequest();
xhr.open('POST', '/url');
`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>THIS</SubHead>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`// 1. Вызов функции
function f() {
  console.log(this === window); // true
}
f();
`}
</StyledSyntaxHighlighter>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`// 2. В конструкторе this указывает на создаваемый объект
function f() {
  this.x = 5;
  console.log(this === window); // false
}
var o = new f();
console.log(o.x === 5); // true
`}
</StyledSyntaxHighlighter>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`function f () {
  this.x = 5;
}

f();

console.log(x); // 5

var s = new f();

console.log(s.x,  window.x); // 5 5
`}
</StyledSyntaxHighlighter>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`// 3. В методе объекта this - ссылка на объект!
var o = {
  f: function() {
    return this;
  }
}
console.log(o.f() === o); // true
`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>USE STRICT</SubHead>
          <p>
            Строгий режим. Современный стандарт. Для того, чтобы можно было использовать
            современный JS.
          </p>
        </Block>
        <Block>
          <SubHead>AJAX</SubHead>
          <p>
            Осуществляет запрос к серверу без перезагрузки страницы<br/>
            По умолчанию запрос к серверу осуществляется методом <b>GET</b><br/>
            <b>ajax</b> - отправил запрос - получил результат<br/>
            <b>comet</b> - непрерывный канал, по которому приходят данные (чат,
            аукцион, онлайн редактор). Браузер отправил запрос и держит соединение с сервером
            ожидая ответа и прерывается только доставкой сообщений, потом тут же делает
            новый запрос.
          </p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`var xhr = new XMLHttpRequest();
xhr.open('GET', 'phones.json', false); // false - асинхронно, true - синхронно
// phones.json - это url
xhr.send;
if (xhr.status != 200) {
  alert(error);
} else {
  alert(xhr.responseText);
};
`}
</StyledSyntaxHighlighter>
          <Important>
            У GET запросов нет тела! У POST основные данные передаются в теле запроса!
          </Important>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`var xhr = new XMLHttpRequest();
xhr.open('GET', 'phones.json', true);
xhr.send;
xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    // error
  } else {
    // result
  };
};
`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>Анонимные функции</SubHead>
          <p>
            Это функции без объявления, без названия, самовызывающиеся функции. Используются, например, чтобы
            изолировать фрагмент кода от воздействия извне. Анонимную функцию можно создать и присвоить переменной
            как обычное значение.
          </p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`(function() {
  ...
})();

var foo = function() { ... };
foo();
`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>HOST OBJECTS</SubHead>
          <p>
            Или объекты среды - объекты JS, предоставляемые окружением, в котором исполняется код (то есть браузером).
            Например: <b>Event, HtmlElement, XMLHttpRequest</b>. Они могут меняться по усмотрению разработчиков браузеров.
            В разных браузерах их реализации могут отличаться.
          </p>
          <p>Function.prototype.bind - используется для привязки контекста</p>
          <Important>
            <b>Нативные объекты</b> JS - строго соответствуют спецификации (Object, Array, Function, String).
          </Important>
        </Block>
        <Block>
          <SubHead>HOISTING</SubHead>
          <p>
            Поднятие объявления переменной в начало области видимости (присваивание значений не поднимается).
          </p>
        </Block>
        <Block>
          <SubHead>CHAINING</SubHead>
          <p>Цепочки вызовов методов</p>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`...siblings('li').append('<a></a>').show().hide();
`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>CSS3, media query</SubHead>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`@media условие
@media all and (color) {...} // все цветные
@media all and (not handled) {...} // все кроме смартфонов
@media screen and (max-width: 980px) {...}
@media only screen and (orientation: portrait) {...}

// Внешнее подключение
<link href="test.css" rel="stylesheet" media="only screen and (max-width: 480px)">

// Условная загрузка
if (window.matchMedia("(min-width: 60em)").matches) {...}
`}
</StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>Условные единицы измерения</SubHead>
          <p>
            <b>px</b> = 10px или 16.5px<br/>
            <b>em</b> - относительно размера шрифта<br/>
            <b>1em</b> - текущий размер шрифта родителя<br/>
            <b>2em, 0.5em</b> - также допускается<br/>
            <b>2%</b> - от шрифта родителя<br/>
            <b>rem</b> - размер шрифта относительно шрифта элемента<br/>
            <b>vw</b> - 1% ширины окна<br/>
            <b>vh</b> - 1% высоты окна<br/>
            <b>vmin</b> - наименьшее из vw и vh (IE9 vm)<br/>
            <b>vmax</b> - наибольшее из vw и vh
          </p>
        </Block>







        <Block>
          <SubHead>UNCATEGORIZED</SubHead>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`a == b; // преобразовывает типы (если отличаются) и сравнивает
a === b // строгое равенство

~ // побитовое НЕ - заменяет каждый бит на противоположный

.end(); // возвращает предыдущий набор элементов

deffered // объекты, хранят состояние задачи (выполнено, еще не выполнено, выполнено с ошибкой)

[1,2,5,10].sort((a,b) => a - b); // - сортировка массива
`}

alert(type of null); // object
alert(null instanceOf Object) // false

0.1 + 0.2 === 0.3 // false

alert(typeof NaN) // Number
alert(NaN === NaN) // false

~~3.14 // 3
</StyledSyntaxHighlighter>
        </Block>
      </div>
    );
  }
}

export default CommonQuestions;