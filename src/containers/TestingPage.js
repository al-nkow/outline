import React, { useLayoutEffect } from 'react';
import { Head, SubHead } from '../components/shared';
import Code from '../components/Code';

const TextingPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>Тестирование Jest Enzyme</Head>
      <SubHead>Асинхронность</SubHead>
{/* 
      <p>
        test
      </p> */}

<Code>
{`const Ajax = require('./async');

describe('Работа Ajax: getData', () => {
  test('Должна вернуть value async', async () => {
    const result = await Ajax.getData('some data');
    expect(result).toBe('some data');
  })

  test('Должна вернуть value with Promise', () => {
    // нужно написать return чтобы Jest дождался выполнения асинхронной функции
    return await Ajax.getData('some data').then((data) => {
      expect(data).toBe('some data');
    });
  })

  test('Должен поймать ошибку из промиса', () => {
    return await Ajax.getData('some data').cath((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  })

  test('Должен поймать ошибку из промиса', async() => {
    try {
      await Ajax.getData('some data')
    } catch(err) {
      expect(err.message).toBe('Some error');
    }
  })
});`}
</Code>

      <SubHead>Mock</SubHead>

<Code>
{`const { map } = './helpers/mycastommap'

describe('Тестирование функции map', () => {
  let array
  let fn

  beforeEach(() => {
    array = [1, 2, 3, 5]
    fn = jest.fn(x => x ** 2)
  })

  test('Должен быть вызван колбэк', () => {
    map(array, fn);
    expect(fn).toBeCalled()
  })

  test('Kолбэк должен быть вызван 4 раза', () => {
    map(array, fn);
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4) // то же самое что выше
  })

  test('Kолбэк должен возводить в квадрат каждый элемент', () => {
    map(array, fn);
    expect(fn.mock.results[0].value).toBe(1)
    expect(fn.mock.results[1].value).toBe(4)
    expect(fn.mock.results[2].value).toBe(9)
    expect(fn.mock.results[3].value).toBe(25)
  })
});
`}
</Code>
    </>
  )
};

export default TextingPage;