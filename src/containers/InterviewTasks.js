import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Head, StyledSyntaxHighlighter} from '../components/shared';
import {tomorrow} from 'react-syntax-highlighter/dist/styles/prism';

const Title = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
`;
const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
`;
const I = styled.span`
  line-height: normal;
  background: rgba(135,131,120,0.15);
  color: #EB5757;
  border-radius: 3px;
  font-size: 85%;
  padding: 2px 5px;
`;
const ResBtn = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  span {
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`
const Block = styled.div`
  margin-bottom: 40px;
`;

const TASKS = [
  {
    title: 'Уникальность всех символов в строке',
    description: <>Напишите функцию, которая определяет уникальны ли все символы в строке. 
    Регистр должен учитываться: <I>‘a’</I> и <I>‘A’</I> разные символы.</>,
    taskCode: `function isUnique(string) {
  // todo
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false`,
    resultCode: `const isUnique = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = i;
  }
  return Object.keys(obj).length === str.length;
}

function isUnique(str) {
  // for (let i = 0; i < str.length; i++) {
  //   if (str.lastIndexOf(str[i]) !== i) {
  //     return false
  //   }
  // }
  // return true
  // const chars = new Set()
  //
  // for (let i = 0; i < str.length; i++) {
  //   const current = str[i]
  //
  //   if (chars.has(current)) {
  //     return false
  //   }
  //
  //   chars.add(current)
  // }
  // return true
  return new Set(str).size === str.length
}`,
  },
  {
    title: 'Плоский массив',
    description: <>Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массив. 
    В результате должны получить новый одномерный массив.</>,
    taskCode: `function flatten(array) {
  // todo
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]`,
    resultCode: `// решение 1
  const flatten = (arr) => {
  const result = [];

  const findNum = (arr) => {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        findNum(item);
      } else {
        result.push(item);
      }
    });
  }

  arr.forEach(item => findNum(item));

  return result;
}

// решение 2
const flatten = (arr) => {
  const str = arr.join(' ').replace(/,/g, ' ').split(' ');
  return str;
}

// решение 3 (не моё)
function flatten(array) {
  const res = []

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i])
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j])
      }
    } else {
      res.push(array[i])
    }
  }

  return res
}`,
  },
  {
    title: 'Факториал',
    description: <>Напишите функцию, которая реализует вычисление факториала.</>,
    taskCode: `// 5! = 5 * 4 * 3 * 2 * 1  === 120`,
    resultCode: `const fac = (num) => {
  if (num < 0) return;
  if (num === 1) return num;
  return num * fac(num - 1);
}`,
  },
  {
    title: 'Удаление всех повторяющихся значений в строкe',
    description: <>Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.</>,
    taskCode: `function removeDupes(str) {
  // todo 
}

console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'`,
    resultCode: `// решение 1
const removeDupes = (str) => {
  return [...new Set(str)].join('');
}

// решение 2
// но здесь includes тоже пробегает по массиву - можно обращаться к объекту {a: true}
const removeDupes = (str) => {
  return [...str].reduce((res, item) => {
    if (!res.includes(item)) res.push(item);
    return res;
  }, []).join('');
}

// еще варианты
function removeDupes(str) {
  // const chars = {}
  // const res = []

  // for (let i = 0; i < str.length; i++) {
    // if (!chars[str[i]]) {
      // chars[str[i]] = true
      // res.push(str[i])
    // }
  // }

  // return res.join('')

  return Array.from(new Set(str)).join('')
}`,
  },
]

/*
{
  title: '',
  description: <></>,
  taskCode: ``,
  resultCode: ``,
},
*/

const InterviewTasks = () => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const viewResult = (index) => {
    setResult(result === index ? 0 : index)
  };





  
  
  // here
  console.log('RESULT >>>>>>>>>>>');












  return (
    <>
      <Head>Задачи на собеседовании</Head>
      {
        TASKS.map((item, index) => (
          <Block key={'i' + index}>
            <Title>{index + 1}. {item.title}</Title>
            <Description>{item.description}</Description>
            <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
              {item.taskCode}
            </StyledSyntaxHighlighter>
            <ResBtn><span onClick={() => viewResult(index)}>Решение</span></ResBtn>
            {result === index ? (
              <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
                {item.resultCode}
              </StyledSyntaxHighlighter>
            ) : null}
          </Block>
        ))
      }
    </>
  )
};

export default InterviewTasks;
