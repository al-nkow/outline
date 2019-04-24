import React, { PureComponent } from 'react';
import {Head, StyledSyntaxHighlighter, SubHead, Code, NumTitle} from '../components/shared';
import Important from '../components/Important';
import {tomorrow} from 'react-syntax-highlighter/dist/styles/prism';

const code1 = `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - //где искать нод жээс
sudo apt-get install -y nodejs //сама установка нода
// опционально можно установить дополнительные пакеты - хрен знает зачем

// на 07.03 такие инструкции:
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs
`;

const code2 = `Port 22  // - поменять порт ssh на любой от 1025 до 65536
PermitRootLogin yes  // - заменить на no - отключить вход под рутом по ssh
// (чтобы зайти под рутом - верните yes)
// (CTRL-X, затем Y, затем ENTER) - выйти и сохранить
`;

const code3 = `[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target
`;

const code4 = `mkdir www
cd www
git clone -b node https://…..
cd nameofyourapp
npm i
npm start // или npm run back или node server.js
`;

const code5 = `// Или так:
pm2 start server.js
pm2 startup systemd
// теперь копируем и выполняем строку из терминала
pm2 save
`;

class VpnPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>VPN Server configuration</Head>

        <SubHead>Начальная настройка сервера</SubHead>

        <NumTitle num="1" title="Купить VPS хостинг"/>
        <p>
          Например, на REG.ru можно выбрать <b>VPS Linux OpenVZ - Ubuntu 16.04</b><br/>
          Через какое-то время придет письмо с данными для доступа.
          Если не пришло в течение получаса - звони этим педикам <b>8-800-555-34-78</b>
        </p>

        <NumTitle num="2" title="Подключаемся к серверу по SSH"/>
        <p>
          <Code className="mr">ssh root@189.33.264.122</Code> жмём yes и вводим пароль
        </p>

        <NumTitle num="3" title="Теперь надо обновить систему"/>
        <p>
          <Code className="mr">apt-get update</Code>
          <span>переходим в корень <b>cd /</b> и выполняем эту команду</span>
        </p>

        <NumTitle num="4" title="Далее установим GIT и CURL"/>
        <p>
          <Code>apt-get install git curl</Code>
        </p>

        <NumTitle num="5" title="Далее установим Node.js"/>
        <p>
          Через менеджер пакетов (via package manager) - инструкция по
          <a href="https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions" target="_blank" rel="noopener noreferrer">этой</a>ссылке
          - просто копируем команды в консоль и выполняем
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>

        <NumTitle num="6" title="Добавим нового пользователя в систему"/>
        <p>
          Производить действия под рутом - это плохая практика!
        </p>
        <p>
          <Code className="mr">adduser alex</Code>добавить нового пользователя с именем <b>alex</b><br/>
          Далее надо будет ввести пароль и ответить на необязательные вопросы
        </p>
        <p>
          Теперь добавим новому пользователю возможность выполнять команды от имени рутового
          пользователя то есть в режиме <b>sudo</b> - для этого его надо добавить в группу <b>sudo</b>
          <Code className="mr ml">usermod -aG sudo alex</Code>или так <Code>adduser alex sudo</Code>
        </p>

        <NumTitle num="7" title="Настроим SSH"/>
        <p>
          <Code className="mr">pbcopy &lt; ~/.ssh/id_rsa.pub</Code>копировать ssh ключ в буфер обмена<br/>
          Если ключа нет - то его сперва нужно сгенерировать:<br/>
          <Code>ssh-keygen -t rsa -C "your_email@example.com"</Code>
        </p>
        <p>
          Теперь <b>под рутом</b> нужно выполнить следующие команды:<br/><br/>
          <Code className="mr">su - alex</Code>переключиться на пользователя alex и перейти в его домашнюю директорию<br/>
          <Code className="mr">mkdir ~/.ssh</Code>создать каталог <b>.ssh</b><br/>
          <Code className="mr">chmod 700 ~/.ssh</Code>ограничить права на доступ к ней<br/>
          <Code className="mr">sudo apt-get install nano</Code>если nano не установлен<br/>
          <Code className="mr">nano ~/.ssh/authorized_keys</Code>открыть в редакторе nano файл <b>authorized_keys</b><br/>
          Далее добавьте ваш открытый ключ (который должен быть в буфере обмена) путем вставки в текстовый редактор<br/>
          <Code className="mr">chmod 600 ~/.ssh/authorized_keys</Code>ограничить права на доступ к этому файлу<br/>
          <Code className="mr">exit</Code>вернуться в пользователя root
        </p>

        <NumTitle num="8" title="Изменить некоторые настройки (это пункт лучше после файрвола)"/>
        <p>
          <Code className="mr">nano /etc/ssh/sshd_config</Code>открыть файл для редактирования
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>
        <p>
          <Code className="mr">service ssh restart</Code>перезапустить сервис ssh чтобы он начал использовать новую конфигурацию<br/>
          <Code className="mr">ssh -p 2233 alex@38.155.198.201</Code>теперь соединяться с сервером надо так<br/>
        </p>
        <p>
          <Important>Обязательно открыть этот порт в файрволле</Important>
        </p>

        <NumTitle num="9" title="Установка MongoDB"/>
        <p>
          Установим MongoDB - для этого следуем
          <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/" target="_blank" rel="noopener noreferrer">инструкции на официальном сайте</a>
          - раздел <b>Install MongoDB Community Edition on Ubuntu</b><br/>
          Или вот хорошая <a href="https://www.digitalocean.com/community/tutorials/mongodb-ubuntu-16-04-ru" target="_blank" rel="noopener noreferrer">инструкция</a>.
        </p>
        <p>
          Сначала необходимо импортировать ключ официального репозитория MongoDB<br/>
          <Code>sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4</Code>
        </p>
        <p>
          Далее нам необходимо добавить настройки репозитория в apt, чтобы иметь возможность загрузить MongoDB с помощью apt<br/>
          <Code>echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list</Code>
        </p>
        <p>
          После установки надо обновить список пакетов<br/>
          <Code>sudo apt-get update</Code>
        </p>
        <p>
          Теперь мы можем установить пакеты MongoDB<br/>
          <Code>sudo apt-get install -y mongodb-org</Code>
        </p>

        <NumTitle num="10" title="Настроить запуск MongoDB в виде сервиса"/>
        <p>
          Для того, чтобы запускать <b>MongoDB</b> в виде сервиса <b>Ubuntu 16.04</b>, нам необходимо создать юнит-файл описывающий
          этот сервис. Создайте файл конфигурации <b>mongodb.service</b> в директории <b>/etc/systemd/system</b> с помощью nano
          или любого другого текстового редактора.
        </p>
        <p>
          Если не установлен nano - установить его командой<Code className="ml">sudo apt-get install nano</Code>
        </p>
        <p>
          <Code>sudo nano /etc/systemd/system/mongodb.service</Code>
        </p>
        <p>
          Туда надо будет вставить следующий код:
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code3}
        </StyledSyntaxHighlighter>
        <p>
          ctrl x, enter - чтобы сохранить
        </p>
        <p>
          Далее запустим только что созданный нами сервис с помощью <b>systemctl</b><br/>
          <Code>sudo systemctl start mongodb</Code><br/>
          <Code className="mr">sudo systemctl status mongodb</Code>- чтобы проверить статус
        </p>
        <p>
          Последнее, что нам осталось сделать, это включить автоматический запуск MongoDB при старте системы<br/>
          <Code>sudo systemctl enable mongodb</Code>
        </p>

        <NumTitle num="11" title="Настройка файрвола UFW"/>
        <p>
           <Important>
             <b>Внимание!!!</b> Проведите начальную настройку перед включением UFW.
             В частности, должен быть доступен SSH(22 порт) и порт, который изменили в файле конфигурации.
             В ином случае вы рискуете потерять доступ к серверу. (Также надо открыть порт для MongoDB?).
             Короче, открыть все нужные порты.
           </Important>
        </p>
        <p>
          <Code className="mr">sudo apt-get install ufw</Code>- установить файрвол если он не установлен<br/>
          <Code className="mr">sudo ufw app list</Code>- список доступных приложений которые имеют профили в UFW<br/>
          <Code className="mr">sudo ufw allow OpenSSH</Code>- разрешить соединения по SSH<br/>
          <Code className="mr">sudo ufw allow ssh</Code><br/>
          <Code className="mr">sudo ufw allow 2213</Code>- разрешить соединения по новому порту<br/>
          <Code className="mr">sudo ufw enable</Code>- включить файрвол<br/>
          <Code className="mr">sudo ufw status</Code>- посмотреть разрешенные соединения
        </p>
        <p>
          <Code className="mr">sudo ufw status verbose</Code>- посмотреть статус - включен или нет
        </p>
        <p>
          По умолчанию UFW настройки запрещают все входящие соединения и разрешают все исходящие<br/>
          <Code className="mr">sudo ufw default deny incoming</Code><br/>
          <Code className="mr">sudo ufw default allow outgoing</Code>
        </p>
        <p>
          <Code className="mr">sudo ufw allow 22</Code><br/>
          <Code className="mr">sudo ufw allow 3000</Code><br/>
          <Code className="mr">sudo ufw allow http</Code><br/>
          <Code className="mr">sudo ufw allow https</Code><br/>
        </p>
        <p>
          Если потребуется - можно разрешить:<br/>
          <Code className="mr">sudo ufw allow http</Code>или<Code className="ml">sudo ufw allow 80</Code><br/>
          <Code className="mr">sudo ufw allow https</Code>или<Code className="ml">sudo ufw allow 443</Code><br/>
          <Code className="mr">sudo ufw allow ftp</Code>или<Code className="ml">sudo ufw allow 21/tcp</Code><br/>
        </p>

        <NumTitle num="12" title="Создаем проект"/>
        <p>
          Создадим папку с проектом в которой будем запускать приложение и клонируем туда репозиторий с проектом <b>/home/alex/…</b>
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code4}
        </StyledSyntaxHighlighter>

        <NumTitle num="13" title="Автозапуск"/>
        <p>
          <Code className="mr">sudo npm i pm2 -g</Code>- установим pm2 в систему глобально<br/>
          <Code className="mr">pm2 start ./server.js --name="proka4"</Code>- запустим проект с помощью pm2 указав имя проекта<br/>
          Далее необходимо указать pm2 какие проекты запускать автоматически<br/>
          <Code className="mr">pm2 save</Code>- запомним только что запущеный проект<br/>
          <Code className="mr">pm2 startup ubuntu</Code>- попросим pm2 сгенерировать скрипт автозапуска<br/>
          если не прокатило - выполнить просто pm2 startup<br/>
          далее pm2 попросит выполнить команду - копируем и выполняем<br/>
          <Code className="mr">pm2 restart all</Code>- после изменений кода на сервере - необходимо сервер перезапустить<br/>
          <Code className="mr">pm2 list</Code>- выведет список приложений которые будут перезапущены вместе с сервером<br/>
          <Code className="mr">sudo reboot</Code>- теперь чтобы проверить что все стартует вместе с сервером - перезагрузим сервер<br/>
        </p>
        <Important>На самом деле достаточно просто <b>pm2 start server.js</b></Important>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code5}
        </StyledSyntaxHighlighter>

        <NumTitle num="14" title="Дополнительная информация"/>
        <p>
          <Code className="mr">sudo apt-get install htop</Code>- установит монитор процессов сервера в реальном времени<br/>
          <Code className="mr">sudo htop</Code>- запустить монитор<br/>
          <Code className="mr">free -m</Code>- посмотреть сколько памяти занято<br/>
          <Code className="mr">pwd</Code>- отобразит полный путь до текущей директории
        </p>
        <p>
          <Code className="mr">scp -r /path/to/local/dir user@remotehost:/path/to/remote/dir</Code>- копировать с компа на сервер<br/>
          <Code className="mr">scp -P 2213 -r /Users/aleksey/DUMPS/myapi alex@24.1380.197.198:/home/alex/dump</Code>- пример
        </p>
        <p>
          <Code className="mr">mongod</Code><br/>
          <Code className="mr">mongodump --db somedb</Code>- создаст дамп в этой директории (где открыт терминал)<br/>
          <Code className="mr"> mongorestore --drop -d &lt;database-name&gt; &lt;directory-of-dumped-backup&gt;</Code><br/>
          <Code className="mr">mongorestore --drop -d proka4 /home/alex/dump/myapi</Code>- восстановить базу proka4 из myapi
        </p>
        <Important>
          Обрати внимание: когда мы создаем дамп - в директории создается папка с файлами - это и есть дамп. Когда восстанавливаем -
          нужно прописывать путь до папки не заходя в нее - иначе будут просто файлы в папке dump
        </Important>
        <p>
          <Code className="mr">db.copyDatabase( "myapi", "proka4" )</Code>- копировать базу myapi в новую базу proka4<br/>
          <Code className="mr">db.dropDatabase()</Code>- удалить базу данных
        </p>
        <p>
          служба mysql занимает 31% памяти - ее можно отключить<br/>
          <Code className="mr">sudo service mysql stop</Code><br/>
          <Code className="mr">sudo service --status-all | grep mysql</Code>- так можно убедиться что она остановлена<br/>
          или полностью удалить!<br/>
          <Code className="mr">sudo service mysql stop</Code><br/>
          <Code className="mr">sudo apt-get remove --purge mysql-server mysql-client mysql-common</Code><br/>
          <Code className="mr">sudo apt-get autoremove</Code><br/>
          <Code className="mr">sudo apt-get autoclean</Code><br/>
          Рекомендуется после удаления еще проверить и удалить настройки mysql:<br/>
          <Code className="mr">apt-cache rdepends mysql-server</Code><br/>
          <Code className="mr">apt-cache rdepends mysql-client</Code><br/>
          <Code className="mr">rm -rf /etc/mysql</Code><br/>
          <Code className="mr">find / -iname ‘mysql*’ -exec rm -rf {} \;</Code><br/>
          <Code className="mr">service mysql status</Code>- проверить статус
        </p>
        <Important>
          Чтобы привязать домен к хостингу - нужно прописать ему ns-сервера хостинг провайдера и
          поправить A-запись и WWW-запись - указать IP адрес своего хостинга (сервера).
        </Important>
        <p>
          Команды LINUX<br/>
          <Code className="mr">rm -rf dump/</Code>- удалить директорию dump с содержимым (без подтверждения)<br/>
          <Code className="mr">netstat -tln</Code>- посмотреть какие порты чем заняты
        </p>

        <NumTitle num="14" title="Если не запускается"/>
        <p>
          <b>1.</b> Открыт ли этот порт в файрволе убунту UFW?<br/>
          <b>2.</b> Правильно ли указан адрес сервера в админке?<br/>
          <b>3.</b> Лэндинг не отображается как правило если ошибка в шаблоне (если отображается страница логина админки<br/>
          <b>/admin/login</b> - то стопудово ошибка в шаблоне PUG)<br/>
          <b>4.</b> Проверь - скопировалась ли база данных, все ли коллекции есть и все ли записи на месте?
        </p>
      </div>
    );
  }
}

export default VpnPage;