import React, { useLayoutEffect } from 'react';
import { Head, SubHead, Code, Block } from '../components/shared';
import CodeBlock from '../components/Code';
import Important from '../components/Important';

const Stuff = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>Заметки</Head>
      <Block>
        <SubHead>Пакетные менеджеры</SubHead>
        <p>
          Принципиальной разницы между yarn и npm нет - оба устанавливают пакеты из package.json
        </p>
        <p>
          <b>npm</b> - это онлайн репозиторий для публикации пакетов Node.js.
          Также это CLI, который позволяет их устанавливать
        </p>
        <p>
          <b>npx</b> - также инструмент CLI, только с помощью него можно выполнить пакет который ранее не был установлен!
          Он временно установит пакет и запустит его (потом сразу удалит)
        </p>
        <p>
          <b>yarn</b> - это новый менеджер пакетов от Facebook, Google ...<br />
          Он намного быстрее чем npm так как все задачи в нем выполняются параллельно!<br/>
          Yarn меньше информации выводит в лог и использует эмоджи<br />
          Yarn всегда автоматически обновляет файл yarn.lock при установке новых зависимостей, в то время как npm
          создаст свой файл блокировки (lock) только по команде npm shrinkwrap<br />
          <Code className="mr">yarn upgrade</Code> - обновит все пакеты до последних версий (в npm это сложнее)<br/>
          <Code className="mr">yarn why</Code> - проанализирует граф зависимостей и поможет выяснить, почему
          указанный пакет установлен в проекте.
        </p>
      </Block>
      <Block>
        <SubHead>Примитивные типы</SubHead>
        <p>Стандарт ECMAScript определяет 9 типов! object, function и примитивы! (typeof [] === 'object')</p>
        <p>
          Есть 7 примитивных типов: <b>string</b>, <b>number</b>, <b>boolean</b>, <b>symbol</b>, <b>null</b>
          , <b>undefined</b> и <b>bigint</b>.
        </p>
        <p>
          <Code className="mr">let id = Symbol(); или let id = Symbol("id");</Code> - создаем новый символ<br />
          Символ - это просто уникальный идентификатор. Символы гарантированно уникальны. Даже если мы создадим 
          множество символов с одинаковым описанием, это всё равно будут разные символы.<br />
          Символы не преобразуются автоматически в строки!!!<br />
          Символы игнорируются циклом for…in !!!<br />
          Свойство объекта не будет модифицировано прямым обращением!<br />
          <Code className="mr">Object.getOwnPropertySymbols(obj)</Code> – с его помощью можно получить все свойства 
          объекта с ключами-символами.
        </p>
        <p>
          Например есть какой-то объект user и нам надо добавить ему айдишник - но мы точно не знаем есть ли там или 
          может появится когда-то user.id - поэтому можно создать свое свойство к которому можно обратиться только по
          символу user[id] !== user.id
        </p>
<CodeBlock>{`let user = {
  name: "Вася"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] );
`}
</CodeBlock>
        <p>
          <Code className="mr">Bigint</Code> - это специальный числовой тип, который предоставляет возможность работать 
          с целыми числами произвольной длины. Чтобы создать значение типа BigInt, необходимо добавить <b>n</b> в конец 
          числового литерала или вызвать функцию BigInt, которая создаст число типа BigInt из переданного аргумента. 
          Аргументом может быть число, строка и др. BigInt можно использовать как обычные числа.
        </p>
      </Block>
      <Block>
        <SubHead>Map</SubHead>
        <p>
          Это коллекция ключ/значение, как и <b>Object</b>. Но основное отличие в том, что <b>Map</b> позволяет 
          использовать ключи любого типа! То есть в отличие от объектов, ключи не будут приведены к строкам!
          Можно даже использовать объекты в качестве ключей! NaN также может использоваться в качестве ключа.
          Каждый вызов map.set возвращает объект map, так что мы можем объединить вызовы в цепочку 
          map.set("1", "str1").set(1, "num1").set(true, "bool1");<br />
          <Code className="mr">new Map()</Code> – создаёт коллекцию.<br />
          <Code className="mr">map.set(key, value)</Code> – записывает по ключу key значение value.<br />
          <Code className="mr">map.get(key)</Code> – возвращает значение по ключу или undefined, если ключ key 
          отсутствует.<br />
          <Code className="mr">map.has(key)</Code> – возвращает true, если ключ key присутствует в коллекции, иначе 
          false.<br />
          <Code className="mr">map.delete(key)</Code> – удаляет элемент по ключу key.<br />
          <Code className="mr">map.clear()</Code> – очищает коллекцию от всех элементов.<br />
          <Code className="mr">map.size</Code> – возвращает текущее количество элементов.<br />
        </p>
        <p>
          Для перебора можно получить итерируемые наборы ключей, значений и элементов:
        </p>
<CodeBlock>{`let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
  alert(entry); // огурец,500 (и так далее)
}

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
  alert(\`\${key}: \${value}\`); // огурец: 500 и так далее
});
`}
</CodeBlock>
        <Important>
          В отличие от обычных объектов Object, в Map перебор происходит в том же порядке, в каком происходило 
          добавление элементов.
        </Important>
      </Block>
      <Block>
        <SubHead>Set</SubHead>
        <p>
          Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться 
          только один раз. При повторных вызовах set.add() с одним и тем же значением ничего не происходит!
        </p>
        <p>
          Поскольку каждое значение в Set должно быть уникальным, сравнение значений основано на алгоритме 
          "подобное значение": NaN равно NaN (несмотря на то, что NaN !== NaN); все другие значения рассматриваются 
          равными исходя из семантики оператора строго равенства ===.
        </p>
        <p>
          <Code className="mr">new Set(iterable)</Code> – создаёт Set, и если в качестве аргумента был предоставлен 
          итерируемый объект (обычно это массив), то копирует его значения в новый Set.<br />
          <Code className="mr">set.add(value)</Code> – добавляет значение (если оно уже есть, то ничего не делает), 
          возвращает тот же объект set.<br />
          <Code className="mr">set.delete(value)</Code> – удаляет значение, возвращает true, если value было в множестве
          на момент вызова, иначе false.<br />
          <Code className="mr">set.has(value)</Code> – возвращает true, если значение присутствует в множестве, иначе 
          false.<br />
          <Code className="mr">set.clear()</Code> – удаляет все имеющиеся значения.<br />
          <Code className="mr">set.size</Code> – возвращает количество элементов в множестве.<br />
        </p>
        <p>
          C перебором коллекции - все точно так же как у Map, с той лищь разницей что у Set цикл forEach имеет имеет 3 
          аргумента: значение value, потом снова то же самое значение valueAgain, и только потом целевой объект. Это
          сделано для совместимости с Map.
        </p>
        <Important>
          Перебор Map и Set всегда осуществляется в порядке добавления элементов, так что нельзя сказать, что 
          это – неупорядоченные коллекции, но поменять порядок элементов или получить элемент напрямую по его номеру 
          нельзя!
        </Important>
      </Block>
    </>
  );
}

export default Stuff;