import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import Important from '../components/Important';
import { Block, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `$font-stack: Helvetica, sans-serif;
body {
  font: 100% $font-stack;
}
`;

const code2 = `nav {
  ul {
    li {
      font-size: 16px;
    }
  }
}
`;

const code3 = ` // _partial.scss
// если стоит _ - тогда не компилируется в css а только импортируется
@import partial
`;

const code4 = `@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
          border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
`;

const code5 = `%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
}
.message {
  @extend %message-shared;
  border-color: green;
}
`;

const code6 = `// + - * / %
...
width: 300px / 960px * 100% // конвертируем пикселы в проценты
`;

const code7 = `.sidebar {
  width: 300px;
  @media screen and (max-width: 500px) { ... }
}
`;

const code8 = `@for $i from 1 through 3 {
  .item-#{$i} { // класс .item-1 .item-2 и.т.д.
    width: 2em * $i;
  }
}
`;

const code9 = `<link rel="stylesheet/less" type="text/css" href="styles.less">
<script src="less.js" type="text/javascript"></script>
// less.js - библиотека которая компилирует less на лету (на клиенте)
`;

const code10 = `$font = 'Helvetica', Arial, sans-serif

body
  font 20px/40px $font
  
width 400px
margin-left (@width/2)

size(width, height=width)
.foo
  size(100px)
  
overflow ellipsis
// ->
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

class ScssPage extends Component {

  render () {
    return (
      <div>
        <Block>
          <Head>SCSS</Head>

          <SubHead>Переменные</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code1}
          </StyledSyntaxHighlighter>

          <SubHead>Вложенности</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code2}
          </StyledSyntaxHighlighter>

          <SubHead>Фрагменты</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code3}
          </StyledSyntaxHighlighter>

          <SubHead>Миксины</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code4}
          </StyledSyntaxHighlighter>

          <SubHead>Расширение/Наследование</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code5}
          </StyledSyntaxHighlighter>

          <SubHead>Математические операторы</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code6}
          </StyledSyntaxHighlighter>

          <SubHead>Media</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code7}
          </StyledSyntaxHighlighter>

          <SubHead>Функции</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code8}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <Head>SASS</Head>
          <p>
            SASS - то же что SCSS только другой синтаксис - отступы (без скобок)
          </p>
        </Block>

        <Block>
          <Head>LESS</Head>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code9}
          </StyledSyntaxHighlighter>
          <Important>
            Возможен вызов javascript прямо из CSS:<br/>
            @height: `document.body.clientHeight`;
          </Important>
          <p>
            - в LESS в отличие от SASS/SCSS нет логики!<br/>
            - нет if/then, for и т.п.<br/>
            - можно подмешивать классы: <b>.styledElem &#123; .someclass &#125;</b>
          </p>
        </Block>

        <Block>
          <Head>STYLUS</Head>
          <p>
            - разработан на базе Node.js (можно установить как пакет)<br/>
            - можно писать и в CSS стиле и в SASS стиле
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code10}
          </StyledSyntaxHighlighter>
        </Block>
      </div>
    );
  }
}

export default ScssPage;