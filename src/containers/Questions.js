import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import Important from '../components/Important';
import { Block, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `(function() {
  var a = b = 5;
})();

console.log(b);
`;

const code2 = `(function() {
  'use strict';
  var a = window.b = 5; // ссылаемся на глобальную область
})();

console.log(b);
`;

const code3 = `String.prototype.repeatify = String.prototype.repeatify || function(times) {
  var str = '';
  for (var i=0; i < times; i++) {
    str += this;
  }
  return str;
}

// Или еще вариант решения
return new Array(times + 1).join(this);
`;

const code4 = `function test() {
   console.log(a);
   console.log(foo());
    
   var a = 1;
   function foo() {
      return 2;
   }
}
 
test();

// Результаты кода – underfined и 2
`;

const code5 = `var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
 
console.log(obj.prop.getFullname());
 
var test = obj.prop.getFullname;
 
console.log(test());
`;

const code6 = `console.log(test.call(obj.prop));
`;

class QuestionsPage extends Component {
  render () {
    return (
      <div>
        <Head>Javascript вопросы - часть 1</Head>

        <Block>
          <SubHead>Возможности</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code1}
          </StyledSyntaxHighlighter>
          <p>
            Код выше выведет 5. Здесь переменная <b>a</b> является переменной функции,
            а переменная <b>b</b> принадлежит глобальной области видимости!
          </p>
          <Important>
            В строгом режиме обязательно надо ссылаться на глобальную область,
            иначе будет ошибка <b>ReferenceError: b is not defined</b>
          </Important>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code2}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Создание "родных" методов</SubHead>
          <p>
            Определите повторяющуюся функцию в строке объекта. Функция подразумевает целое число,
            определяющее, сколько раз строка должна повторяться. Функция повторяет указанную строку
            указанное число раз. Например: hello.repeatify(3);
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code3}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Подъем</SubHead>
          <p>Каков результат выполнения и почему?</p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code4}
          </StyledSyntaxHighlighter>
          <p>
            Причина в том, что обе переменные функции подняты (помещены в верхней части функции),
            но переменные не удерживают присвоены значения. В то время, когда переменная a печатается,
            она существует в функции (это декларируется), но она все ещё undefined
          </p>
        </Block>

        <Block>
          <SubHead>Как это работает в JavaScript?</SubHead>
          <p>Каков результат следующего кода? Обоснуйте свой ответ.</p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code5}
          </StyledSyntaxHighlighter>
          <p>
            Код выдаст <b>Aurelio De Rosa</b> и <b>John Doe</b>. Причина в том, что контекст функции, вызываемый
            ключевым словом this, в JavaScript зависит от того, как именно вызывается функция,
            а не от того, как она определена. Вызов первых <b>console.log()</b>, <b>getFullname()</b>
            вызывается функцией объекта <b>obj.prop</b>. Таким образом, контекст относится к последнему
            и возвращает <b>fullname</b> как свойство объекта. В противном случае, когда <b>getFullname()</b>
            присваивается переменной, контекст относится к глобальному объекту.
            Это происходит потому, что тест устанавливается как свойство глобального объекта (window).
            По этой причине функция возвращает значение свойства <b>fullname</b> из window,
            которая в данном случае является кодом, устанавливаемым в первой строке фрагмента.
          </p>
        </Block>

        <Block>
          <SubHead>call() и apply()</SubHead>
          <p>Исправьте предыдущий вопрос так, чтобы последний console.log() стал <b>Aurelio De Rosa</b></p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code6}
          </StyledSyntaxHighlighter>
        </Block>

      </div>
    );
  }
}

export default QuestionsPage;