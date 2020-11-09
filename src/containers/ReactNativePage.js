import React, { useLayoutEffect } from 'react';
import { Head, SubHead, Code, Block } from '../components/shared';
// import CodeBlock from '../components/Code';

const ReactNative = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>REACT NATIVE COURSE</Head>
      <Block>
        <SubHead>Expo</SubHead>
        <p>
          Это типа фреймворк над React Native - можно просто запуститься и создать приложение.
          Обязательно используем node 12 и выше!
        </p>
        <p>
          <Code className="mr">npm i -g expo-cli</Code> - установим expo-cli глобально<br/>
        </p>
        <p>
          Также скачай на айфон приложение expo-client чтобы запускать на нем приложение<br />
          Для vscode можно поставить расширение react native tools, react native/react/redux snippets, prettier
          material icon theme<br />
          prettier можно включить в настройках - format on save поставить галочку
        </p>
        <p>
          <Code className="mr">expo init NameYourApp</Code> - сгенерировать приложение<br/>
        </p>
        <p>Далее он предложит выбрать Managed or Bare workflow - первый меньше без папок ios и android</p>
        <p>
          <Code className="mr">View</Code> - это как div<br/>
          <Code className="mr">Text</Code> - для вывода текста<br/>
        </p>
        <p>
          <Code className="mr">yarn start</Code> - запустить приложение<br/>
          Откроется Metro Bundler - там можно собрать и запустить приложение, опубликовать и открыть в браузере<br />
          Все эти команды можно выполнить через терминал (там есть подсказки)
        </p>
      </Block>
      <Block>
        <SubHead>Запуск на IOS simulator</SubHead>
        <p>
          Сперва нужно установить XCode из Appstore на макбуке! Затем открываем его и заходим в XCode / Preferences.
          Там переходим во вкладку Locations и проверяем чтобы была установлена последняя Command Line Tools - иначе если
          там ничего не выбрано - можно получить ошибку при запуске.
        </p>
        <p>
          <b>XCode / Open developer tool / Simulator</b> - так откроем симулятор<br />
          <b>File / Open device / iOS</b> - здесь можно поменять модель телефона<br />
          Теперь переходим в Metro Bundler (тот что запускается на локалхосте npm start) 
          и выбираем слева <b>Run on iOS Simulator</b> - то же самое можно выполнить просто нажав <b>i</b> в терминале.<br />
          <b>Command + D</b> - эта комбинация открывает панель управления в симуляторе
        </p>
      </Block>
      <Block>
        <SubHead>Запуск на Android studio</SubHead>
        <p>
          <b>developer/android.com/studio</b> - качаем android studio потом запускаем и устанавливаем (standart), открываем<br />
          <b>configure / SDK manager</b> - переходим сюда - проверить что все компоненты установлены<br />
          Потом надо какую-то херню через терминал сделать в соответствии с документацией...<br />
          Теперь переходим в Metro Bundler и запускаем <b>Run on android device/emulator</b><br />
          Также это можно сделать из консоли нажав <b>a</b>
        </p>
      </Block>
      <Block>
        <SubHead>Запуск на мобильном телефоне</SubHead>
        <p>
          Нужно скачать и установить Expo Client на свой телефон (из App Store). Далее надо перейти в Metro Bundler и
          просканировать QR-код. Надо чтобы телефон и компьютер были подключены к одной сети. Чтобы вызвать меню
          разработчика - надо потрясти телефоном.
        </p>
      </Block>
      <Block>
        <SubHead>DEBUG</SubHead>
        <p>
          <Code className="mr">console.log();</Code> - выводит все в консоль терминала<br/>
          также можно войти в панель управления в симуляторе и выбрать <b>Debug Remote JS</b> - это откроет вкладку в хроме
          и там в консоли браузера будут выводиться все ошибки. Но это существенно замедляет приложение - так что не
          забывайте впоследствии отключать Debug Remote JS
        </p>
      </Block>
      <Block>
        <SubHead>Публикация</SubHead>
        <p>
          Мы можем опубликовать наше приложение в Expo - примерно как npm пакет. Приложение будет доступно по адресу
          expo.io/@username/app в репозитории Expo. Для этого переходим в Metro Bundler и слева в меню выбираем&#8194;
          <b>Publish or republish project</b> или в терминале можно набрать <b>expo publish</b>. Далее надо ответить
          на несколько вопросов и нажать Опубликовать. После этого в терминале надо выбрать - создать пользователя Expo
          или авторизоваться.
        </p>
      </Block>
      <Block>
        <SubHead>Возможности</SubHead>
        <p>
          <Code className="mr">onPress</Code> - это как onClick в десктопном приложении<br/>
        </p>
      </Block>
    </>
  )
}

export default ReactNative;