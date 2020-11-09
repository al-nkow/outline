import React, { useLayoutEffect } from 'react';
import { Head, SubHead, Code, Block } from '../components/shared';

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
    </>
  );
}

export default Stuff;