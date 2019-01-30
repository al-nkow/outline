import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

// import Important from '../components/Important';
import { Block, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `var array = [elem0, elem1, elem2, elem3];
var empty = [];
var array = new Array(elem0, elem1, elem2);
var empty = new Array();
`;

class Cmpnt extends Component {
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





        {/*<Important>Important info</Important>*/}
      </div>
    );
  }
}

export default Cmpnt;