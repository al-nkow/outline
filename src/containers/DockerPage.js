import React, { PureComponent } from 'react';
import { Head, Code, SubHead, Block } from '../components/shared';
import Important from '../components/Important';

class DockerPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>DOCKER</Head>
        <Block>
          <p>
            <b>Контейнер</b> – крошечная виртуальная машина с примитивными функциями для запуска приложения, которое было положено в него.<br/>
          </p>
          <p>
            <b>Виртуальная машина</b> - это виртуальная версия реальной машины, которая имитирует аппаратные средства машины внутри более крупной машины.
          </p>
          <p>
            <Code>docker ps</Code> - выводится список запущенных контейнеров, опционально флаг -a для списка всех контейнеров<br/>
            <Code>start</Code> – запуск созданного контейнера<br/>
            <Code>attach</Code> – присоединяет стандартный вход и выход терминала к работающему контейнеру,
            буквально подключая вас к контейнеру, как к любой виртуальной машине<br/>
            <Code>docker create -it ubuntu:16.04 bash</Code> - Возьмем образ Ubuntu из Docker Hub и создадим из него
            контейнер. добавляем -it как опциональную функцию, чтобы дать контейнеру интегрированный терминал.<br/>
            <Code>docker ps -a</Code> - посмотрим список всех контейнеров<br/>
            <Code>docker ps</Code> - список запущеных контейнеров<br/>
            <Code>docker start 56238716ad35</Code> - запустить контейнер - где 56238716ad35 это id костейнера<br/>
            <Code>docker attach 56238716ad35</Code> - присоединить это окно терминала к контейнеру<br/>
            <Code>exit</Code> - выйти из контейнера, контейнер остановится<br/>
          </p>
          <p>
            <Important>
              Каждый контейнер Docker работает как sudo по умолчанию, то есть команды sudo не существует.<br/>
              Каждая выполняемая команда автоматически запускается с полномочиями sudo!
            </Important>
          </p>
          <p>
            <Code>docker stop &lt;container_id&gt;</Code>  - остановить контейнер<br/>
            <Code>docker rm 7643dba89904</Code> - удалить контейнер<br/>
          </p>
        </Block>
        <SubHead>Тома</SubHead>
        <p>
          Тома позволяют сопоставлять каталоги на главной машине с каталогами внутри контейнера!<br/>
          <Code>docker create -it -v $(pwd):/var/www ubuntu:latest bash</Code> - При создании нового контейнера
          добавьте флаг -v, чтобы указать, какой том создать. Эта команда привяжет текущий рабочий каталог на
          компьютере к директории <b>/var/www</b> внутри контейнера.
        </p>
      </div>
    );
  }
}

export default DockerPage;