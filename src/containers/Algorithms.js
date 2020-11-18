import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Head, SubHead, Code, Block } from '../components/shared';
import Important from '../components/Important';
import CodeBlock from '../components/Code';

import treePng from '../images/tree.png';
import bubbleGif from '../images/bubble.gif';
import selectPng from '../images/selectsort.gif';
import insertGif from '../images/insertsort.gif';

const Image = styled.img`
  width: 200px;
`;

const Stuff = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>Алгоритмы и структуры данных</Head>
      <p>
        Алгоритм это последовательность действий (например, линейный и бинарный поиск, сортировка пузырьком, выбором 
        или вставками), а структура данных это то, над чем вы осуществляете эти действия (например, массив, пары 
        «ключ-значение»). Структура данных - это способ хранения и обработки данных.
      </p>
      <Block>
        <SubHead>Временная сложность алгоритма O(n)</SubHead>
        <p>
          <b>O-нотация</b> - обозначение, описывающее зависимость количества операций от входных данных<br />
          <b>O(1)</b> - одна опреация (например определить чётное или нечётное)<br />
          <b>O(log n)</b> - всегда меньше чем половина n - например поиск в телефонном справочнике - открыли в середине,
          потом в середине половины итд (разделяй и властвуй)<br />
          <b>O(n)</b> - линейная зависимость (для массива - равна количеству элементов массива)<br />
          <b>O(n * log n)</b> - болльшинство алгоритмов сортировки<br />
          <b>O(n<sup>2</sup>)</b> - любой цикл в цикле<br />
          <b>O(2<sup>n</sup>) и O(n!)</b> - только с малым количеством данных - очень сложные! Если будет много данных 
          - повиснет браузер<br />
        </p>
        <Important>
          Например у массива push и length имеют сложность O(1) - а shift и unshift - O(n) - потому что чтобы
          добавить в начало или удалить из начала элемент - нужно все элементы сдвинуть и присвоить им новые индексы!
        </Important>
      </Block>
      <Block>
        <SubHead>Массив (Array)</SubHead>
        <p>
          Массив напоминает пронумерованные ячейки (где номера это индексы), расположенные по порядку. С помощью индекса
          можно обратиться к любой ячейке чтобы посмотреть ее содержимое. Хорошая индексация О(1) - по индексу можно
          обратиться к элемнту, но поиск, вставка и удаление - O(n)
        </p>
      </Block>
      <Block>
        <SubHead>Hash Table (Object, Set, Map)</SubHead>
        <p>
          Индексация в JS - это O(1) так как обращаемся по ключу! А также поиск, вставка и удаление - O(1)!!!
        </p>
        <p>
          Вот пример разницы в производительности - одна и та же задача решается за 8 секунд или за 112 миллисекунд!!!
          Мы всего лишь преобразовали один из массивов в хэш мапу и сложность поиска (indexOf) изменилась с O(n) на O(1)
        </p>
<CodeBlock>{`// Здесь имеем цикл в цикле
let resultArr = arr0.filter(item => {
  return arr1.indexOf(item) !== -1; // indexOf под капотом тоже просто цикл
})

// этот код для массива из 10000 элементов выполняется 8 секунд

// const start = perfomance.now();
// const end = perfomance.now() - start;
`}
</CodeBlock>

<CodeBlock>{`// Теперь попробуем конвертировать один из массивов в hash map
let hashMap = {}

arr1.forEach(item => {
  hashMap[item] = null;
})

let resultArr = arr0.filter(item => {
  return typeOf hashMap[item] !== undefined;
})

// !!! Этот код выполнится за 112 миллисекунд !!!
`}
</CodeBlock>
        <p>
          Еще пример - Множественные проверки
        </p>
<CodeBlock>{`// Плохой вариант:
if (user.group === 'admin') {
  alert('Hello Admin!');
} else if (user.group === 'editor') {
  alert('Hello Editor!');
} else {
  alert('Hello User!');
}

// Лучше так:
let greets = {
  admin: 'Admin',
  editor: 'Editor!',
  user: 'User!',
}

alert(\`Hello \${greets[user.group]}\`);
`}
</CodeBlock>
      </Block>
      <Block>
        <SubHead>Стэк</SubHead>
        <p>
          Структура в которой элементы добавляются только в конец и удаляются из конца! (last in - first out)
          Индексация <b>O(n)</b>, Поиск <b>O(n)</b>, Вставка <b>O(1)</b>, Удаление <b>O(1)</b>. В JS реализуется с 
          помощью массива.
        </p>
        <p>
          <b>Где используется:</b><br />
          1. Парсеры ({'<div><p><a></a></p></div>'})<br />
          2. Транспиляторы ({'{({[({})]({})})}'})<br />
          3. Стэк вызовов функций Javascript<br />
          4. Истории изменений<br />
        </p>
      </Block>
      <Block>
        <SubHead>Очередь</SubHead>
        <p>
          Структура в которой элементы добавляются в конец а удаляются из конца начала (first in - first out).
          Индексация <b>O(n)</b>, Поиск <b>O(n)</b>, Вставка <b>O(1)</b>, Удаление <b>O(1)</b>.
        </p>
        <p>
          <b>Где используется:</b><br />
          1. Очереди<br />
          2. Очереди событий Javascript<br />
        </p>
      </Block>
      <Block>
        <SubHead>Связанные списки</SubHead>
        <p>
          Не пользуется популярностью. Эти списки хранят последовательность! Каждый элемент содержит свое значение и 
          ссылку на следующий элемент.
          Если удалить элемент - сохранится последовательность. Используются для построения других структур данных.
          Например очередь реализуется на связанных списках.
          Индексация <b>O(n)</b>, Поиск <b>O(n)</b>, Вставка <b>O(1)</b>, Удаление <b>O(1)</b>.
        </p>
        <p>
          <b>Где используется:</b><br />
          1. Очереди<br />
          2. Очереди событий Javascript<br />
        </p>
<CodeBlock>{`let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null // ! последний элемент
      }
    }
  }
};

// Вывод списка через цикл
function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

// Вывод списка через рекурсию
function printList(list) {
  alert(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }
}

printList(list);
`}
</CodeBlock>
      </Block>
      <Block>
        <SubHead>Бинарное дерево</SubHead>
        <p>
          Классический алгоритм поиска элемента в отсортированном массиве (векторе), использующий дробление массива 
          на половины.
        </p>
        <p>
          Сначала сортируем массив .sort() - у этой операции сложность O(n * log(n))
          Затем ищем как в телефонном справочнике: смотрим элемент посередине. Если искомый элемент больше - тогда
          отбрасываем первую половину и ищем только во второй - также смотрим средний элемент этой половины итд.
          тоесть сложность уже O(log(n))
        </p>
        <p>
          Индексация <b>O(log(n))</b>, Поиск <b>O(log(n))</b>, Вставка <b>O(log(n))</b>, Удаление <b>O(log(n))</b> - 
          все логарифмическая сложность, то есть на любое действие понадобится в два раза меньше операций чем туда 
          зашло данных!
        </p>
        <p>
          Например есть массив: [5, 8, 13, 6, 4, 3, 9]<br />
          Как можно найти элемент в этом массиве?<br />
          <Code className="mr">indexOf/includes</Code> - O(n)<br />
          Можно превратить в hash table - O(n+1) - перебрать и обратиться по индексу<br />
          Отсортировать массив! - алгоритмы в отсортированном массиве работают быстрее!
          И искать - тогда будет O(n * log(n) + log(n)) {'=>'} O(n * log(n))<br />
          И наконец бинарное дерево - O(log(n))
        </p>
        <Image src={treePng} alt="" />
<CodeBlock>{`function binarySearch(arr, item)){
  while (arr.length !== 1) {
    let pivotIndex = Math.floor(arr.length/2);
    if (arr[pivotIndex] < item) {
      arr = arr.slice(pivotIndex, arr.length); // именно slice! Он возвращает новый массив (нет мутаций)
    } else if (arr[pivotIndex] > item) {
      arr = arr.slice(0, pivotIndex);
    } else {
      return true;
    }

    return item === arr[0];
  }
}
`}
</CodeBlock>
        <Important>
          Если в коде появилась куча if/else для того чтобы найти/записать/проверить - значит пора задуматься о 
          структуре данных
        </Important>
      </Block>
      <Head>
        Базовый набор JavaScript алгоритмов
      </Head>
      <p>
        Все примеры в этом блоке соблюдают принципы неизменности. Исходный объект не изменяется! Вместо этого мы будем
        возвращать новый объект с необходимыми свойствами.
      </p>
      <Block>
        <SubHead>Уникальный массив</SubHead>
<CodeBlock>{`const numbers = [1, 2, 1, 1, 2, 1, 3, 4, 1 ]
const uniq = [...new Set(numbers)] // => [ 1, 2, 3, 4 ]
const uniq2 = Array.from(new Set(numbers)) // => [ 1, 2, 3, 4 ]
`}</CodeBlock>
        <p>у Set есть такие полезные методы как <b>size</b> и <b>has</b></p>
      </Block>
      <Block>
        <SubHead>Обновление объекта в массиве по свойству</SubHead>
<CodeBlock>{`const initial = [ { id: 1, score: 1 }, { id: 2, score: 2 }, { id: 3, score: 4 } ];
const newValue = { id: 3, score: 3 };
const updated = initial.map(x => x.id === newValue.id ? newValue : x);
console.log(updated) // => [ { id: 1, score: 1 }, { id: 2, score: 2 }, { id: 3, score: 3 } ];
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Удаление объекта из массива по свойству</SubHead>
<CodeBlock>{`const removeId = 3
const without3 = initial.filter(x => x.id !== removeId)
console.log(without3) // => [ { id: 1, score: 1  }, { id: 2, score: 2  }  ]
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Удаления ключа из объекта</SubHead>
        <p>Мы можем использовать деструктуризацию в обратном направлении</p>
<CodeBlock>{`const a = {
  foo: 'bar',
  useful: 1,
  useless: 2,
}

const {useless, ...clean} = a;
console.log(clean); // { foo: 'bar', useful: 1 }
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Объединение массива объектов</SubHead>
<CodeBlock>{`// merge an array of objects
const data = [ {a: 1}, {b: 2}, {c: 3} ]
const merged = data.reduce((res, obj) => ({...res, ...obj}), {})
console.log(merged) // => { a: 1, b: 2, c: 3  }

// merge an array of objects by property
const toMerge = [
  { id: 1, value: 'a', },
  { id: 2, value: 'b', },
  { id: 3, value: 'c' },
  { id: 1, score: 1 },
  { id: 2, score: '2' },
]
const mergedByProperty = toMerge.reduce((result, obj) => ({
  ...result,
  [obj.id]: {
    ...result[obj.id],
    ...obj
  }
}), {})
console.log(mergedByProperty) // =>
/*
 *{ '1': { id: 1, value: 'a', score: 1 },
 *  '2': { id: 2, value: 'b', score: '2' },
 *  '3': { id: 3, value: 'c' } }
 */
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Преобразование многомерного массива в одномерный</SubHead>
<CodeBlock>{`const arrayOfArray = [ [1, 2], [3, 4], [[5, 6]] ]
const flattened = arrayOfArray.reduce((res, a) => [...res, ...a], [] )
console.log(flattened) // => [1, 2, 3, 4, [5, 6]]
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Преобразование массива в объект из пар ключ-значение</SubHead>
<CodeBlock>{`// fromPairs
const pairs = [['a', 1], ['b', 2], ['c', 3]]
const asObjects = pairs
  .reduce((res, [key, value]) => ({ ...res, [key]: value }), {})

// Or event smarter
const asObjects2 = { ...(new Map(pairs)) }

console.log(asObjects) // => { a: 1, b: 2, c: 3  }
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Удаление повторяющихся элементов из двух массивов</SubHead>
<CodeBlock>{`// subtract two sets
const s1 = [ 1, 2, 3, 4, 5 ]
const s2 = [ 2, 4 ]
const subtracted = s1.filter(x => s2.indexOf(x) < 0)
console.log(subtracted) // [1, 3, 5]
`}</CodeBlock>
      </Block>
      <Head>Основные алгоритмы</Head>
      <Block>
        <SubHead>Линейный поиск</SubHead>
        <p>
          Поиск перебором элементов. Просматриваются все один за другим, пока не будет найден искомый элемент. алгоритм 
          линейного поиска не должен использовать отсортированный список.
        </p>
<CodeBlock>{`function linearSearch(value, list) {
    let found = false; // флаг, сигнализирующий о том, что значение найдено
    let position = -1; // позиция, в которой значение найдено, или -1, если нет такого значения
    let index = 0;
 
    // пока значение не найдено или индекс меньше длины массива
    while(!found && index < list.length) {
      // если значение найдено
      if(list[index] == value) {
        found = true;     // флаг = истина
        position = index; // позиция равна индексу элемента в массиве
      } else {
        index += 1;
      }
    }

    return position;
}
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Бинарный поиск</SubHead>
        <p>
          Подход "Разделяй и властвуй". Работает только на отсортированном массиве. Мы делим массив пополам и смотрим, в
          какой половине находится искомый элемент, затем делим эту половину пополам, затем половину от половины и так 
          далее пока не найдем. По аналогии с телефонным справочником.
        </p>
<CodeBlock>{`const binarySearch = (array, item) => {
  let low = 0;
  let high = array.length - 1;
 
  while(low <= high) {
  	let middle = parseInt((high + low) / 2); // Math.floor((start + end) / 2);
    let value = array[middle];
 
  	if (value === item) {
      return value;
    }
 
    if (value > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
 
  return null;
};
 
const array = [1, 2, 3, 4, 5, 6];
const item = 2;
 
binarySearch(array, item);
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Сортировка пузырьком</SubHead>
        <p>
          Сортировку пузырьком (Bubble Sort) также иногда называют сортировкой простыми обменами. Алгоритм не является 
          эффективным, имеет сложность <b>O(n²)</b> и на практике не используется. Суть алгоритма в сравнении
          пары соседних элементов — если они стоят в неправильном порядке, то их меняют местами. Чтобы отсортировать
          таким образом весь массив длиной N, придется пройтись по нему N-1 раз (последний элемент уже будет
          отсортирован на предыдущей итерации, поэтому для него проход не требуется). Также за каждый проход в конец 
          массива “всплывает” при сортировке по возрастанию — наибольшее число, по убыванию — наименьшее. А значит на 
          следующей итерации его можно уже не проверять.
        </p>
        <Image src={bubbleGif} alt="" />
<CodeBlock>{`const bubbleSort = arr => {
  const last = arr.length - 1;

  for (let i = 0; i < last; i++) {
    let wasSwap = false;

    for (let j = 0, endJ = last - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }
    
    if (!wasSwap) break; // если прошли по циклу и ничего не поменяли - значит уже отсортирован
  }
  return arr;
};
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Сортировка выбором</SubHead>
        <p>
          Сортировка выбором осуществляется путем непрерывного выбора наименьшего значения и перемещения его к одному 
          концу. Сложность <b>O(N²)</b>
        </p>
        <p>
          Суть алгоритма — за каждый проход по массиву выбрать минимальный элемент (для сортировки по возрастанию) и 
          поменять его местами с первым элементом в еще не отсортированном участке массива
        </p>
        <Image src={selectPng} alt="" />
<CodeBlock>{`const selectionSort = arr => {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength - 1; i++) {
    let indexMin = i;

    for (let j = i + 1; j < arrLength; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }

    if (indexMin !== i) { // если в первой позиции минимальный элемент - то просто не надо ничего менять
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};
`}</CodeBlock>
        <p>
          Но эта сортировка является неустойчивой! Отличие устойчивых сортировок от неустойчивых в том, что если 
          сравниваются не просто значения, а объекты по какому-то из свойств (массив объектов и сортируем по ключу), то 
          устойчивая сортировка оставит объекты с одинаковым ключом в том же порядке, в котором они были, а неустойчивая
          перемешает.
        </p>
      </Block>
      <Block>
        <SubHead>Сортировка вставкой</SubHead>
        <p>
          Рассмотрим сортировку по возрастанию. Суть алгоритма заключается в том, что в цикле один за другим выбираются 
          элементы массива и сравниваются с элементами, стоящими перед ними, до тех пор пока не будет найдет элемент, 
          меньший текущего, или мы не дойдем до начала массива. Перед ним мы и вставляем текущий, для этого 
          предварительно сдвинув все элементы, которые оказались больше текущего, в сторону увеличения на один индекс.
        </p>
        <p>
          Алгоритм имеет сложность O(n²) только для худшего случая (массива, отсортированного в обратном порядке), а 
          для лучшего случая сложность будет O(n) — достаточно одного прохода, чтобы понять что массив отсортирован. Но 
          все равно не стоит использовать этот алгоритм в работе (как и выбор с пузырьком)!
        </p>
        <Image src={insertGif} alt="" />
<CodeBlock>{`const insertionSort = arr => {
    const arrLength = arr.length;

    for (let i = 1; i < arrLength; i++) {
        const current = arr[i];

        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};
`}</CodeBlock>
      </Block>
      <Block>
        <SubHead>Сортировка слиянием (Merge sort)</SubHead>
        <p>
          
        </p>
      </Block>
    </>
  );
}

export default Stuff;