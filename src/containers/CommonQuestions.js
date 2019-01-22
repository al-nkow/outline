import React, { Component } from 'react';
import Important from '../components/Important';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const Head = styled.h1`
  font-size: 26px;
  font-weight: 600;
`;

const SubHead = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 4px;
  margin: 20px 0!important;
  font-size: 14px;
  padding: 20px!important;
`;

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

        <SubHead>HTML5 новые теги</SubHead>
        <p>
          1. Header, footer, section, article, video, audio, progress, nav, meter, time,
          aside, canvas<br/>
          2. Новые значения атрибута <b>type</b><br/>
          3. Новые атрибуты элементов: dragable, contenteditable, hidden, contextmenu, data-*, dropzone,
          role, spellcheck[8] ...
        </p>
        <SubHead>Преимущества</SubHead>
        <p>
          Поисковые системы лучше индексируют сайт. Лучше работают речевые браузеры (для слепых).
          Всё предназначено для роботов, интерпретирующих код.
        </p>
        <p><b>Header</b> - определяет шапку сайта или раздела</p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>

        <SubHead>CSS переменные</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>

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

        <SubHead>Шифрование</SubHead>
        <p>
          Обратимое преобразование информации в целях сокрытия её от неавторизованных лиц, с предоставлением
          авторизованным пользователям доступа к ней. При шифрование обязательно использование ключа!
          Различают: шифрование данных с помощью открытого ключа, кодировка base64, симметричный шифр,
          ассиметричный шифр ...
        </p>

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
        
      </div>
    );
  }
}

export default CommonQuestions;