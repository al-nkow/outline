import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import { Block, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `<img src="file.svg" height="65" width="65">

.logo {
  background-image: url(file.svg);
}

<iframe src="file.svg">...</iframe>

<embed type="image/svg+xml" src="...">

<object ...>
`;

const code2 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <style type="text/css">...</style>
  <path fill="none" d="M0 0h24v24H0z"/>
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
</svg>

// JS манипуляции
window.onload = function() {
  var svg1 = ...
  svg1[0].setAttribute('fill', 'yellow');
}

// Анимации
// - JS анимации
// - CSS3 анимации
// - SVG анимация
<animate dur="2s" values="...">
`;

const code3 = `<body>
<canvas id="example">Обновите браузер</canvas>
<script >
    var example = document.getElementById('example');
    var ctx = example.getContext('2d');
    example.height = 480;
    example.width = 640;
    ctx.strokeStyle = '#b70a02';
    // .fillStyle .fill .lineTo .moveTo .stroke ...
    ...
</script>

strokeRect(x, y, ширина, высота); // рисует прямоугольник
fillRect(x, y, ширина, высота); // рисует закрашенный прямоугольник
clearRect(); // очищает область, размером с прямоугольник
`;

const code4 = `d3.select('body').selectAll('p') // будем работать с <p></p>
  .data([16, 23, 42]) // всегда массив объектов (резервирует места)
  .enter() // помещает данные в зарезервированные места
  .append('p') // для каждого несуществующего элемента создает элемент и добавляет в DOM на ранее зарезервированные D3 места
  .text(function(d) { return d; }) // вставляем данные в p
`;

class CanvasPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>SVG CANVAS D3</Head>

        <Block>
          <SubHead>SVG</SubHead>
          <p>
            Это разметка, основанная на XML, который содержит двумерные векторы.
            Сжимается, поддерживается во всех браузерах, изменяется с помощью
            CSS и JS.
          </p>
          <p>Использование:</p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code1}
          </StyledSyntaxHighlighter>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code2}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>CANVAS</SubHead>
          <p>
            Это элемент HTML5, предназначенный для создания 2х мерного изображения
            при помощи скриптов JS. Отличие от SVG - это холст, на котором рисуем JSом!
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code3}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>D3.js</SubHead>
          <p>
            Data driven document. HTML, CSS, JS, SVG, DOM.
          </p>
          <p>
            Присоединение данных к элементам data.join()
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code4}
          </StyledSyntaxHighlighter>
          <p>
            <b>data()</b> - дает три выборки для реализации отношений между элементами и данными
            Если данных больше чем элементов, то новые элементы попадают в <b>enter()</b> выборку
            для добавления.<br/>
            Если данных меньше чем элемнтов, то лишние элементы попадают в <b>exit()</b> выборку
            для удаления.<br/>
            Если количество данных <b>равно</b> количеству элементов - обновление с удалением
            старых элементов.<br/>
          </p>
        </Block>
      </div>
    );
  }
}

export default CanvasPage;