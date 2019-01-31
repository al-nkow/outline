import React, { Component } from 'react';

import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

import { Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';
import Important from '../components/Important';

const code1 = `var animal = {
  eats: true;
}

function Rabbit(name) {
  this.name = name;
  this.__proto__ = animal; // наследование
}

// Или так:
Rabbit.prototype = animal;
Rabbit.prototype.fuck = function() {
  console.log('Ouyeah!');
}

// Прототип:
{
  constructor: Rabbit,
  __proto__: {}, // <--
  fuck: function() {...}
}

// Объекты:
var a = {};
var b = {};
b.__proto__ = a;

// Функции конструкторы
function a() {...}
var b = new a();
// b.__proto__ === a.prototype // true 
`;

const code2 = `Rabbit.prototype.__proto__ = Animal.prototype;
// Этот способ не работает в IE!

Rabbit.prototype = Object.create(Animal.prototype);

// В prototype по умолчанию всегда находится свойство constructor
// указывающее на функцию-конструктор:
// Rabbit.prototype.constructor === Rabbit
// При замене через Object.create это свойство надо сохранить!

Rabbit.prototype.constructor = Rabbit
`;

const code3 = `// расширяем Rabbit методами Animal
class Rabbit extends Animal { 
  walk() {
    super.walk();
    // в объекте super хранятся методы родителя
    alert('...');
  }
}
`;


class ProtoPage extends Component {

  render () {
    return (
      <div>
        <Head>Наследование</Head>
        <p>
          Объект наследует свойства и методы из своего прототипа, а если их нет - то из
          свойства и метода родителя.
        </p>
        <p>
          При создании объекта через <b>new</b> в его прототип <b>__proto__</b> записывается
          ссылка из <b>prototype</b> родителя (то есть по сути сам prototype).<br/>
          Свойство <b>prototype</b> указывает <b>__proto__</b> для новых объектов и всё!
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>

        <Important>
          В прототип <b>класса</b> нельзя записать обычное значение, только функцию!<br/>
          User.prtotype.key = 'value' - нельзя! только функции (методы)
        </Important>
        <Important>
          У класса методы не перечислимые
        </Important>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code3}
        </StyledSyntaxHighlighter>

        <SubHead>Инкапсуляция</SubHead>
        <p>
          это изоляция данных внутри экземпляра класса.
        </p>

        <SubHead>Полиморфизм</SubHead>
        <p>
          Это способность объекта использовать методы произвольного класса, который
          не существует на момент создания базового.
        </p>
      </div>
    );
  }
}

export default ProtoPage;