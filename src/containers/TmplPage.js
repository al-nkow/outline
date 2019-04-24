import React, { PureComponent } from 'react';
import Important from '../components/Important';
import { Block, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const code1 = `function Observable {
  var observers = [];
  
  this.sendMessage = function(msg) {
    for(var i = 0, len = observers.length; i < len; i++) {
      observers[i].notify(msg);
    }
  }
  
  this.addObserver(observer) {
    observers.push(observer);
  };
}

function Observer(behavior) {
  this.notify = function(msg) {
    behavior(msg);
  }
}

var observable = new Observable();
var obs1 = new Observer(function(msg) {
  console.log(msg);
});
var obs2 = ...
...

observable.addObserver(obs1);
observable.addObserver(obs2);
...
`;

const code2 = `var Person = function { ... };
Person.prototype.greet = function() { ... };

var bob = new Person('Bob', 22, 'Programmer');
`;

const code3 = `var myModule = (function() {
  var memes = []; // Приватные
  var getMemes = function() {...}; // Приватные
  return {
    getMemes: getMemes
  };
})();

console.log(myModule.getMemes());
`;

const code4 = `const Singleton = {
  foo: 123,
  getInstance() { return this }
}

let obj1 = Singleton.getInstance();
let obj2 = Singleton.getInstance();
obj1 = 456;
console.log(obj1 === obj2); // true

// ------------------------

var Singleton = new function() {
  var instance = this;
  // ...
  return function() {
    return instance;
  }
}

console.log(new Singleton === new Singleton); // true
`;

const code5 = `var Person = function(name) { ... };
Person.prototype.greet = function() {...};

// или

var Person = function(name) { ... };
var CoolPerson = function() { ... };
CoolPerson.prototype = Object.create(Person.prototype);
`;

const code6 = `function MemeQuery(target) {
  this.target = document.querySelector(target);
}

var $ = function(target) {
  return new MemeQuery(target);
};
`;

const code7 = `var Adam = new User(chatMediator, 'Adam');
// и, например, Adam.sendMessage дёргает chatMediator.notifyAll();
`;

const code8 = `carManager.execute('requestInfo', 'Ford', 'k759px');
`;

class TmplPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>Шаблоны проектирования</Head>
        <p>Это проверенный способ решения проблем</p>

        <Block>
          <SubHead>Порождающие шаблоны (Creational)</SubHead>
          <p>
            Cоздание новых объектов<br/>
            1. Конструктор (Constructor)<br/>
            2. Модульный (Module)<br/>
            3. Фабричный метод (Factory)<br/>
            4. Одиночка (Singletone)
          </p>
        </Block>

        <Block>
          <SubHead>Структурные шаблоны</SubHead>
          <p>
            1. Декоратор (Decorator)<br/>
            2. Фасад (Facade)
          </p>
        </Block>

        <Block>
          <SubHead>Поведенческие шаблоны (Behavioral)</SubHead>
          <p>
            Определяют, как объекты соотносятся друг с другом<br/>
            1. Наблюдатель (Observer)<br/>
            2. Посредник (Mediator)<br/>
            3. Команда (Command)
          </p>
        </Block>

        <Block>
          <SubHead>Конструктор</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code2}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Модуль</SubHead>
          <p>
            Используется для инкапсуляции методов (сокрытия состояния объекта от прямого доступа)
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code3}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Фабрика</SubHead>
          <p>
            Используется, чтобы упростить создание объектов. Проще генерировать экземпляры
            объектов, не требует использования конструктора. Функция возвращает разные классы
            в зависимости от какого-то аргумента.
          </p>
        </Block>

        <Block>
          <SubHead>Singleton</SubHead>
          <p>
            Это класс с одним единственным экземпляром! Одна глобальная точка доступа и только
            один объект в приложении. (Создать глобальную переменную с присвоением объекта)
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code4}
          </StyledSyntaxHighlighter>
          <Important>
            Два объекта равны, если относятся к одному и тому же объекту.
            (Сравнение объекта истинно лишь в том случае, если оба операнда
            ссылаются на один и тот же объект в памяти)
          </Important>
        </Block>

        <Block>
          <SubHead>Декоратор</SubHead>
          <p>
            Используется чтобы добавлять новую функциональность объектам
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code5}
          </StyledSyntaxHighlighter>
          <Important>
            Object.create() - создает объект, который не имеет прототипа
          </Important>
        </Block>

        <Block>
          <SubHead>Фасад (Facade)</SubHead>
          <p>
            Используется для создания простого интерфейса (упрощает функциональность, как, например jQuery).
            Создаем объект - и доступ к его методам через этот объект.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code6}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Observer</SubHead>
          <p>
            Позволяет объектам наблюдать за объектами и быть оповещенными об изменениях.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code1}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Посредник (Mediator)</SubHead>
          <p>
            Один объект контролирует сообщение между объектами, поэтому объекты
            не сообщаются друг с другом напрямую. Это похоже на Observer, только каждому объекту
            при создании передается этот управляющий объект.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code7}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Command</SubHead>
          <p>
            Инкапсулирует вызов метода в один объект. Все методы в одном объекте и обращаемся к ним
            через один метод, в который передаем имя необходимого метода.
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code8}
          </StyledSyntaxHighlighter>
        </Block>
      </div>
    );
  }
}

export default TmplPage;