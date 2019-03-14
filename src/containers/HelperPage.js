import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import { Block, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `var array = [elem0, elem1, elem2, elem3];
var empty = [];
var array = new Array(elem0, elem1, elem2);
var empty = new Array();
`;

const code2 = `<div class="outer">
    <p class="inner"></p>
</div>

// innerHTML возвратит <p class="inner"></p>
// outerHTML возвратит <div class="outer"><p class="inner"></p></div>
`;

const code3 = `var arr = ['a', 'b', 'c'];
print(Object.getOwnPropertyNames(arr).sort()); // prints '0,1,2,length'

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
print(Object.getOwnPropertyNames(obj).sort()); // prints '0,1,2'
`;

const code4 = `var arr = ['a', 'b', 'c'];
alert(Object.keys(arr)); // will alert '0, 1, 2'

var obj = { 0: 'a', 1: 'b', 2: 'c' };
alert(Object.keys(obj)); // will alert '0, 1, 2'

// ---------------------
// если написать
a: { enumerable: false }
// то keys не вернет!!!
`;

const code5 = `try {
  ...
} catch(error) {
  console.log(error);
}
`;

const code6 = `a(); // ok
b(); // error

var b = function() {
  console.log('hello b');
};

function a() {
  console.log('hello a');
}
`;

const code7 = `(function() {
  var element = document.getElementById('element');
  element.onclick = function() {
    alert('Hello from closure!');
  }
})();
`;

const code8 = `function getExtension(filename) {
  var fragments = filename.split('.');
  return fragments[fragments.length - 1];
}
`;

const code9 = `var foo = 'Hello';
(function() {
  var bar = ' World';
  alert(foo + bar); // 'Hello World'
})();
alert(foo + bar); // ReferenceError: bar is not defined
`;

const code10 = `var foo = [];
foo.push(1);
foo.push(2);

// Ответ: 2
`;

const code11 = `window.document === document; // true
window.getElementById; // undefined
document.getElementById; // function ...
`;

const code12 = `myArray --> Array.prototype --> Object.prototype --> null
myNodeList --> NodeList.prototype --> Object.prototype --> null
`;

const code13 = `var myNodeList = document.querySelectorAll('.my-class');
var nodesArray = Array.prototype.slice.call(myNodeList); // преобразовать в массив

// No you can use array methods to nodelist
nodesArray.forEach(function(el, index) {
  console.log(index, el);
});
`;

const code14 = `function getElementByAttribute(attribute) {
  var allElements = document.getElementsByTagName(*);
  var el;
  var found = [];
  
  for(var i = 0; i < all.Elements.length; i++) {
    el = allElements[i];
    if (el.getAttribute(attribute)) {
      found.push(el);
    }
  }
  
  return found;
}
`;

const code15 = `function addClass(selector, className) {
  var el = document.querySelector(selector);
  if (el) {
    el.classList.add(className);
  }
}

// IE9+
el.classList.remove('my-class');
el.classList.toggle('my-class');
el.classList.contains('my-class');
`;

const code16 = `function isDescendant(parent, child) {
  while (child.parentNode) {
    if (child.parentNode === parent) {
      return true;
    } else {
      child = child.parentNode;
    }
  }
  return false;
}
`;

const code17 = `var ul = document.getElementById('myList');
el.innerHTML = 'Only one item';
`;

const code18 = `var li = document.createElement('li');
var text = document.createTextNode('Only one item');

li.appendChild(text);
ul.appendChild(li);
`;

const code19 = `// BAD. You use the DOM each time
var list = ['foo', 'bar', 'baz'];
var el;
var text;

for(var i = 0; i < list.length; i++) {
  el = document.createElement('li');
  text = document.createTextNode(list[i]);
  el.appendChild(text);
  document.body.appendChild(el);
}

// GOOD. You call reflow once
var fragment = document.createDocumentFragment();
var list = ['foo', 'bar', 'baz'];
var el;
var text;

for(var i = 0; i < list.length; i++) {
  el = document.createElement('li');
  text = document.createTextNode(list[i]);
  el.appendChild(text);
  fragment.appendChild(el);
}
document.body.appendChild(fragment);
`;

const code20 = `document.addEventListener('DOMContentLoaded', function() {
  // add your code here
});

document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    // add your code here
  }
}
`;

const code21 = `document.getElementById('listToDestroy')
  .addEventListener('click', function(event) {
    var el = event.target.parentNode;
    
    el.parentNode.removeChild(el);
    event.preventDefault();
  });
`;

const code22 = `document.getElementById('doubleHolder')
  .addEventListener('click', function(event) {
    if (event.target.classList.contains('double')) {
      var btn = document.createElement('button');
      var btn2 = document.createElement('button');
      
      btn.setAttribute('class', 'double');
      btn.innerHTML = 'double';
      
      btn2.setAttribute('class', 'double');
      btn2.innerHTML = 'double';
      
      this.appendChild(btn);
      this.appendChild(btn2);
      this.removeChild(event.target);
    }
  });
`;

const code23 = `document.querySelector('body')
  .addEventListener('click', function(event) {
    console.log('body clicked', event.target);
  });
  
// or
  
window.onclick = function(event) {
  console.log('someone clicked', event.target);
}
`;

class HelperPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>Ответы на вопросы</Head>

        <Block>
          <SubHead>Как переадресовать страницу?</SubHead>
          <p>
            window.location.href = 'https://mysite.com...'
          </p>
        </Block>

        <Block>
          <SubHead>Сколько параметров можно передать функции?</SubHead>
          <p>Сколько угодно</p>
        </Block>

        <Block>
          <SubHead>Объекты в Javascript</SubHead>
          <p>
            Объекты (они же - ассоциативные массивы, хэши) и работа с ними в JavaScript
            реализованы не так, как в большинстве языков. Объект в JavaScript представляет
            собой обычный ассоциативный массив или, иначе говоря, "хэш". Он хранит любые
            соответствия "ключ => значение" и имеет несколько стандартных методов.
            Метод объекта в JavaScript - это просто функция, которая добавлена в
            ассоциативный массив.
          </p>
        </Block>

        <Block>
          <SubHead>Зачем перед переменной писать var</SubHead>
          <p>
            <b>x = 5;</b> - так будет создана глобальная переменная<br/>
            <b> var x = 5;</b> - локальная переменная, ограниченная областью видимости функции<br/>
            Также создавая функцию без <b>var</b> - она будет видна везде в текущей области видимости.
          </p>
        </Block>

        <Block>
          <SubHead>Как создать массив</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code1}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Какие конструкции есть для циклов в JS</SubHead>
          <p>
            for, while, do... while
          </p>
        </Block>

        <Block>
          <SubHead>В чём различие свойств innerHTML и outerHTML?</SubHead>
          <p>
            Свойство любого DOM элемента innerHTML содержит HTML код, который находится внутри этого элемента.
            При установке нового значения этого свойства, внутренний HTML код рендерится браузером заново.
            outerHTML почти аналогичен innerHTML, разница в том, что он возвращает полный HTML элемента.
            Также, важно отметить, что innerHTML поддерживается всеми современными браузерами,
            а outerHTML поддерживается в IE (с некоторыми отличиями от остальных браузеров), в последних
            версиях Opera, и в браузерах на основе последних WebKit (Safari, Chrome), но не поддерживается
            в Firefox.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code2}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>В чем разница между Object.getOwnPropertyNames() и Object.keys()?</SubHead>
          <p>
            <b>Object.getOwnPropertyNames()</b> возвращает перечислимые и не перечислимые свойства из
            объекта или массива.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code3}
          </StyledSyntaxHighlighter>
          <p>
            <b>Object.keys()</b> возвращает перечислимые свойства из объекта или массива.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code4}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>
            С помощью какой конструкции языка можно управлять потоком выполнения скрипта
            и отслеживать ошибки?
          </SubHead>
          <p>
            Это возможно с помощью конструкции try{}... catch{}
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code5}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Почему вызов a(); происходит успешно, а вызов b(); выдает ошибку?</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code6}
          </StyledSyntaxHighlighter>
          <p>
            Функция а() инициализируется на этапе загрузки скрипта, как бы "всплывает вверх" а функция
            b инициализируется, когда объявляется переменная b
          </p>
        </Block>

        <Block>
          <SubHead>
            Что такое глобальные переменные ? Как они создаются ? Какие проблемы связаны
            с использованием глобальных переменных?
          </SubHead>
          <p>
            Глобальная переменная - переменная, которая доступна (видима) во всем документе, в отличии от локальной
            (ограничена рамками блока программного кода, внутри которого она определена).
            Большинство JavaScript разработчиков избегает использования глобальных переменных. Одна из причин -
            возможный конфликт имен глобальных и локальных переменных. Так же код использующий глобальные
            переменные может быть тяжелее сопровождать и тестировать.
          </p>
        </Block>

        <Block>
          <SubHead>Что такое замыкания (closure) в JavaScript?</SubHead>
          <p>
            Простыми словами это внутренняя функция, т.е. функция в функции.
            Замыканием (closure) называют потому, что после выполнения родительской или
            внешней функции, код внутренней все еще "живет" в интерпретаторе, и его
            можно выполнить. Ошибок не возникнет даже если внутренняя функция
            (замыкание) будет использовать переменные из внешней функции.
            Например, эту особенность можно использовать для создания функций
            обработчиков событий:
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code7}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>
            Напишите функцию принимающую строку с именем файла и возвращающую расширение
            (фрагмент после последней точки).
          </SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code8}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Что вернет выражение +new Date()? Чем отличается от Date.now().</SubHead>
          <p>
            Ответ в том, что +new Date(); создаст экземпляр объекта Date и
            благодаря + переведет его в числовой формат. Во втором случае вызовется
            статический метод конструктора, который является более приоритетным,
            т.к. во-первых он не требует создания экземпляра, а во-вторых является
            более понятным.
          </p>
        </Block>

        <Block>
          <SubHead>Что покажут эти два alert?</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code9}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Чему равно foo.length?</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code10}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Что такое prototype в javascript?</SubHead>
          <p>
            В общих чертах prototype - это свойство позволяющее добавлять уже существующим
            объектам свойства, также используется для эмуляции наследования классов в
            JavaScript. Подробный ответ написан здесь . Еще как вариант, можно упомянуть
            о Prototype.js. Это популярная библиотека добавляющая удобные ООП возможности
            в программы на JavaScript-е.
          </p>
        </Block>

        <Block>
          <SubHead>Какие способы навешивания обработчиков событий вы знаете?</SubHead>
          <p>
            События можно добавлять тремя способами:<br/>
            1. <b>htmlElement.onclick = function(event) &#123; .... &#125;</b> - так можно
            добавить только один обработчик<br/>
            2. <b>htmlElement.addEventListener( "click", ... )</b> - так можно навесить несколько
            обработчиков, сохраняет порядок обработчиков<br/>
            3. <b>htmlElement.attachEvent( "on"+имя_события, обработчик)</b> - тоже можно навесить
            несколько, не сохраняет порядок обработчиков, нет доступа к элементу на котором
            сработало событие.<br/>
          </p>
        </Block>

        <Block>
          <SubHead>Eсть ли разница между window и document?</SubHead>
          <p>
            Да. У JavaScript есть глобальный объект и всё происходит через него. window -
            тот самый объект, который хранит глобальные переменные, функции, местоположение,
            историю. Всё находится внутри него, setTimeout, XMLHttpRequest, console и
            localStorage также являются частью window.<br/>
            Аналогично дело обстоит и с document, который является свойством объекта
            window и представляет DOM. Все ноды - это часть document, следовательно, вы
            можете использовать getElementById или addEventListener для document. Но
            обратите внимание, что этих методов нет в объекте window.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code11}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Вызываются ли document.onload и window.onload одновременно?</SubHead>
          <p>
            window.onload вызывается, когда DOM готов и весь контент, включая картинки,
            стили, фреймы и т.д. загружен. document.onload вызывается когда дерево DOM
            выстроено, но до момента, как подгружаются картинки, стили и пр.
            document.readyState возвращает "loading" пока документ грузится, "interactive"
            - когда завершился парсинг, но продолжается загрузка дополнительных ресурсов,
            и "complete" когда всё загружено. Событие readystatechange вызывается для
            объекта document когда это значение изменяется.
          </p>
        </Block>

        <Block>
          <SubHead>Как остановить дальнейшее распространение события?</SubHead>
          <p>
            Вызвать event.stopPropagation();
          </p>
        </Block>

        <Block>
          <SubHead>Назовите различные пути для получения элемента из DOM дерева?</SubHead>
          <p>
            <b>getElementById</b> для получения одного элемента, которому соответствует указанный ID.<br/>
            <b>getElementsByClassName</b> для получения nodeList (nodeList это не массив, это скорее
            массиво-подобный объект) по названию класса.<br/>
            <b>getElementsByTagName</b> для получения nodeList по имени тэга.<br/>
            <b>querySelector</b> вы можете указывать селекторы в виде css стилей (аля jquery) и
            данный метод вернёт первый элемент из DOM соответствующий запросу.<br/>
            <b>querySelectorAll</b> вернёт список не "живых" nodeList. Не "живые" значит, что
            любые изменения (добавление, удаления в DOM) после выборки элементов не будут отражены
            в результатах поиска.<br/>
            <b>getElementsByName</b> возвращает список элементов по name<br/>
            <b>getElementsByTagNameNS</b> возвращает элементы с определённым названием тэга в
            пространстве имён.
          </p>
        </Block>

        <Block>
          <SubHead>Какой наибыстрейший метод для получения элемента через css селектор?</SubHead>
          <p>
            Это зависит от того, что вам нужно найти. Если у вас есть ID элемента, то
            getElementById - это самый быстрый путь для получения элемента. Однако,
            вам не следует содержать много ID в вашем документе, чтобы избежать
            заучивания стилей. getElementsByClassName - это второй по скорости метод
            для получения элемента.<br/>
            Вот список упорядоченный по скорости выборки элементов, начиная с наибыстрейшего:
          </p>
          <p>
            <b>ID (#myID)</b><br/>
            <b>Класс (.myClass)</b><br/>
            <b>Тэг (div, p)</b><br/>
            <b>Элемент, находящийся рядом (sibling) (div+p, div~p)</b><br/>
            <b>Прямой потомок (div &gt; p)</b><br/>
            <b>Все потомки (div p)</b><br/>
            <b>Универсальный (*)</b><br/>
            <b>Атрибут (input[type="checkbox"])</b><br/>
            <b>Псевдо-элемент (p:first-child)</b>
          </p>
        </Block>

        <Block>
          <SubHead>Могу ли я удалить обработчик события с элемента?</SubHead>
          <p>
            Да. <b>target.removeEventListener('click', handler)</b>
          </p>
        </Block>

        <Block>
          <SubHead>
            Почему querySelectorAll('.my-class') медленнее, чем getElementsByClassName('my-class')?
          </SubHead>
          <p>
            querySelectorAll является универсальным методом. Он оптимизирован под различные
            типы селекторов. Если вы просто укажите имя класса с ".", внутри он будет
            использовать getElementsByClassName (может меняться в зависимости от браузера).
            В то же время, если вы будете напрямую использовать getElementsByClassName,
            то понятно, что этому методу не нужно проходить через все внутренние процессы,
            в отличии от querySelectorAll. Следовательно, для поиска  элемента с конкретным
            именем класса, getElementsByClassName будет быстрее, чем querySelectorAll.
          </p>
        </Block>

        <Block>
          <SubHead>Почему я не могу использовать forEach или похожий метод массива для NodeList?</SubHead>
          <p>
            Да, и массив и nodeList имеет параметр length и вы можете использовать цикл
            для прохода по элементам, но не всё так просто.
            Оба они унаследованы от Object. Однако, массив имеет иной прототип нежели,
            чем nodeList. forEach, map, и пр. включены в array.prototype, которого не
            существуют для NodeList.prototype объекта. Следовательно, вы не можете использовать
            forEach для nodeList.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code12}
          </StyledSyntaxHighlighter>
          <p>
            Для решения этой проблемы можно пропустить nodeList через цикл и делать всё,
            что пожелаете внутри цикла. Или вызвать метод для конвертации nodeList в массив.
            После этого у вас будет доступ ко всем методам из array.prototype.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code13}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>
            Если вам необходимо реализовать getElementByAttribute, как вы будете это делать?
          </SubHead>
          <p>
            Во-первых, получить все элементы из DOM. Это можно сделать используя
            getElementsByTagName с параметром '*' и затем проверить имеют ли они нужные
            атрибуты. В этом случае, даже если атрибут равен null, он будет захвачен.
            Если вам нужно проверить значение, вам следует добавить один дополнительный
            параметр и сравнивать с ним в блоке с IF.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code14}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Как бы вы добавили класс к элементу через селектор?</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code15}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Как я могу запустить обработчик в фазе захвата, а не в фазе всплытия?</SubHead>
          <p>
            В методах addEventListener и removeEventLister есть третий опциональный параметр.
            Вы можете установить его в true или false в зависимости от того хотите или нет
            использовать фазу захвата.
          </p>
        </Block>

        <Block>
          <SubHead>Как проверить, что один элемент является дочерним другому?</SubHead>
          <p>
            Первое, проверьте является ли указанный родитель прямым для ребенка.
            Если нет, продолжайте двигаться вверх по дереву.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code16}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>
            Какой метод больше всего подходит для создания DOM элемента? Что лучше
            innerHTML или createElement?
          </SubHead>
          <p>
            Когда вы устанавливаете свойство innerHTML, браузер удаляет всех "детей"
            из элемента. Затем парсит строку и вставляет её в элемент как потомка.
            Например, если вы хотите добавить элемент списка к несортированному списку,
            вы можете получить элемент и задать ему innerHTML:
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code17}
          </StyledSyntaxHighlighter>
          <p>
            innerHTML может быть медленным при парсинге строки. Браузер вынужден иметь
            дело со строкой даже если вы задали ему невалидный html.
            С другой стороны, пока вы используете appendChild, вы создаёте новый
            элемент. С момента его создания, браузеру не нужно парсить строку и иметь
            дело с невалидным html. И вы можете указать потомка для родителя, который
            будет добавлен к элементу родителя.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code18}
          </StyledSyntaxHighlighter>
          <p>
            Все-таки, лучше написать пару дополнительных строк на JavaScript - это
            упростит жизнь браузеру и сделает вашу страницу быстрее.
          </p>
        </Block>

        <Block>
          <SubHead>
            Каким образом можно предотвратить множественный вызов обработчика для одного события?
          </SubHead>
          <p>
            Если слушатель события прикреплён к одному и тому же типу (click, keydown, и т.д.)
            элемента, вы можете вызвать event.stopImmediatePropagation() в первом обработчике
            и другие не будут выполнены.
          </p>
        </Block>

        <Block>
          <SubHead>
            Что делает createDocumentFragment и для чего можно его использовать?
          </SubHead>
          <p>
            documentFragment - очень легковесная и маленькая штука. Этот метод помогает в тех
            случаях, когда вы производите множество манипуляции с DOM. "Дерганье" DOM сотни
            раз - это дорогое удовольствие, которое может привести к вызову reflow. Избегайте
            частого reflow. Вы можете избежать этого, используя documentFragment, что
            уберегает от использования лишней памяти.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code19}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Что такое reflow?</SubHead>
          <p>
            reflow: когда вы меняете размер или позицию элемента на странице, все элементы
            после этого вынуждены изменять свои позиции в соответствии с изменениями, сделанными
            вами. Для примера, если вы меняете высоту элемента, то все элементы под ним
            вынуждены сдвинуться вниз. Следовательно, поток элементов на странице изменился
            и это вызывает reflow.<br/>
            Почему reflow это плохо: перекомпоновка может быть очень дорогой и это может
            вызвать свистопляску на телефонах и планшетах.
          </p>
        </Block>

        <Block>
          <SubHead>Как я могу проверить было событие отменено или нет?</SubHead>
          <p>
            Используйте event.cancelable для получения true или false. Однако, вам обязательно
            нужно вызвать preventDefault() для предотвращения события.
          </p>
        </Block>

        <Block>
          <SubHead>Какие причины reflow? Как можно уменьшить reflow?</SubHead>
          <p>
            Причины reflow:<br/>
            - изменение шаблона (геометрия страницы)<br/>
            - изменения размера окна<br/>
            - изменения высоты\ширины любого элемента<br/>
            - изменение шрифта<br/>
            - перемещение элемента (анимация)<br/>
            - удаление или добавление стиля<br/>
            - калькуляции смещения по высоте или по ширине<br/>
            - display: none<br/>
          </p>
          <p>
            Как этого избежать:<br/>
            - не устанавливайте стили внутри элементов<br/>
            - применяйте анимацию к элементам, которые отпозиционированы fixed или absolute<br/>
            - избегайте таблиц<br/>
          </p>
        </Block>

        <Block>
          <SubHead>Что такое repaint и когда оно происходит?</SubHead>
          <p>
            repaint происходит когда вы изменяете вид элемента без изменения размеров.<br/>
            Причины repaint:<br/>
            изменения цвета фона<br/>
            изменения цвета шрифта<br/>
            visibility: hidden<br/>
            Предпочтительней repaint вместо reflow
          </p>
        </Block>

        <Block>
          <SubHead>
            Есть ли что-то такое о чём нужно позаботится при использовании node.cloneNode()?
          </SubHead>
          <p>
            При клонировании убедитесь, что вы не дублируете ID.
          </p>
        </Block>

        <Block>
          <SubHead>
            Как быть уверенным в том, что DOM подготовлен и можно выполнять JavaScript,
            как реализовать $(document).ready?
          </SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code20}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Что такое всплытие?</SubHead>
          <p>
            Для понимания "всплытия", вам нужно понять что происходит когда вы кликаете где-либо
            на странице. Предположим, у вас есть таблица с множеством колонок и столбцов и вы
            кликаете в одну из ячеек.<br/>
            Вы возможно думаете, что когда вы кликните на ячейку, то браузер будет знать что
            у вас есть обработчик на нажатии на ячейку и он будет вызван незамедлительно.
            Это абсолютно не верно. На самом деле, браузер не знает куда вы кликнули. Браузер
            будет определять местоположение клика следующими путями:<br/>
            <b>Захват:</b>  когда вы кликаете, браузер знает, что событие клика произошло.
            Он начинает с window (самый низкий уровень), затем идёт в document, затем html
            тэг, затем body, затем table... Он пытается достичь самого высокого уровня элемента,
            который только возможен. Это зовётся фазой "захвата" (первая фаза).<br/>
            <b>Цель:</b> когда браузер достигнет самого элемента на котором был произведен
            клик, то браузер отметит если ли у этого элемента какие-либо прикрепленные
            обработчики. Если ничего нет, то браузер выполнил обработчик клика. Это называет
            фаза цели (вторая фаза).<br/>
            <b>Всплытие:</b> после вызова обработчика, прикрепленного к "td", браузер начнёт
            своё путешествие обратно с window. Уровень за уровнем он будет проверять если ли
            на элементе обработчик на "click" и если обнаружит таковой - выполнит. Это и есть
            стадия всплытия (третья фаза). Заметьте, когда вы кликните на ячейку, будут исполнены
            все обработчики событий на click для всех родительских элементов.
          </p>
        </Block>

        <Block>
          <SubHead>Как можно уничтожить несколько элементов с одним вызовом click?</SubHead>
          <p>
            Если у вас есть список из сотни элементов, которые имеют различные обработчики,
            вы можете написать одну сотню обработчиков событий (аля копипаст) с одинаковым
            кодом в сотне места. Это работает, но если понадобится что-то изменить в
            обработчике, вы будете вынуждены поменять это везде.<br/>
            Вторая проблема заключается в том, что вы хотите динамически добавлять новые
            элементы и, следовательно, вам нужно быть уверенным в том, что к новому элементу
            был добавлен свой обработчик. Много JavaScript кода!<br/>
            <b>Ответ:</b> В данном случае, как нельзя кстати, нам подойдет всплытие. Вы можете
            навесить только один обработчик на родительский элемент. В нашем примере это будет
            "ul" тэг. После клика по элементу списка (заметьте, элемент не имеет обработчика),
            событие будет всплывать и достигнет элемента "ul", который имеет обработчик и
            об будет исполнен.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code21}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Как предотвратить нажатие по ссылке?</SubHead>
          <p>
            Можно return false, можно и event.preventDefault() внутри обработчика события.
            Однако, это не остановит дальнейшее распространение.
          </p>
        </Block>

        <Block>
          <SubHead>
            Создайте кнопку, которая удаляется при нажатии на неё, и создаются две новые
            кнопки в этом же месте.
          </SubHead>
          <p>
            Можно решить это добавив обработчик события вместе с кнопкой для удаления и
            добавить новые. Однако, мы можем снизить количество навешиваний событий. Если
            мы добавим обработчик к родительскому элементу вместо кнопки, то у нас не будет
            необходимости добавлять обработчик при каждом создании кнопки. Итак, мы будем
            пользоваться преимуществами всплытия.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code22}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Как отлавливать все нажатия на странице?</SubHead>
          <p>
            Вы можете достичь цели при помощи фазы всплытия, т.к. все события click
            будут всплывать до элемента body. Однако, если "всплытие" было отменено
            через stopPropagation() этот код не будет работать.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code23}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Как получить весь текст на странице?</SubHead>
          <p>
            Самый простой путь получить весь текст - через свойство innerText у body.
            <b>document.body.innerText;</b>
          </p>
        </Block>

        <Block>
          <SubHead>Что такое defer и async?</SubHead>
          <p>
            Обычное состояние: когда вы вставляете стандартный тэг script (без defer и async),
            парсер приостанавливает парсинг до того момента, как скрипт будет скачан и выполнен.<br/>
            <b>defer:</b> defer в тэге script отложит выполнение скрипта. Следовательно скрипт будет
            выполнен когда DOM будет доступен. Важный момент, defer не поддерживается всеми
            современными браузерами.<br/>
            <b>async:</b> скачивание и выполнение скрипта асинхронно. Если это возможно, устанавливайте
            выполнение скрипта в асинхронном режиме, но обратите внимание, что async не имеет
            эффекта на инлайновые скрипты.
          </p>
        </Block>

        <Block>
          <SubHead>Какие существуют типы нод?</SubHead>
          <p>
            ELEMENT_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_NODE,
            DOCUMENT_TYPE_NODE, DOCUMENT_FRAGMENT_NODE, и т.д.
          </p>
        </Block>









        {/*<Important>Important info</Important>*/}
      </div>
    );
  }
}

export default HelperPage;