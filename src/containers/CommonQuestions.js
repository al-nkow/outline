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
            9. GZIP сжатие
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
            Для указания типа документа. Какую версию HTML использовать (их 8 штук -
            XHTML строгий синтаксис, фреймы и так далее). Некоторые браузеры поддерживают XHTML5 и
            обрабатывают такую разметку по-другому.
          </p>
        </Block>
        <Block>
          <SubHead>HTML5</SubHead>
          <p>
            Это открытая платформа, предназначенная для создания веб приложений, использующих
            аудио, видео, графику, анимацию и так далее.
          </p>
          <p>
            1. Новые теги: header, footer, section, article, video, audio, progress, nav, meter, time,
            aside, canvas<br/>
            2. Новые значения атрибута <b>type</b><br/>
            3. Новые атрибуты элементов: dragable, contenteditable, hidden, contextmenu, data-*, dropzone,
            role, spellcheck[8] ...
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
          <SubHead>Арность</SubHead>
          <p>
            Это количество операторов функции (количество ее аргументов)
          </p>
        </Block>
        <Block>
          <SubHead>Feature detection</SubHead>
<StyledSyntaxHighlighter language='javascript' style={tomorrow}>
{`// Проверяем конкретную функцию

if (window.XMLHttpRequest) {
  new XMLHttpRequest
}`}
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
        </Block>
        <Block>
          <SubHead>События загрузки DOM</SubHead>
          <p>
            <b>ready</b> - готово дерево DOM<br/>
            <b>load</b> - загружено все содержимое, включая изображения
          </p>
        </Block>
        <Block>
          <SubHead>Получение данных из url</SubHead>
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
          <SubHead>SAME ORIGIN</SubHead>
          <p>
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
            <b>ajax</b> - отправил запрос - получил результат<br/>
            <b>comet</b> - непрерывный канал, по которому приходят данные (чат, аукцион, онлайн редактор)
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










      </div>
    );
  }
}

export default CommonQuestions;