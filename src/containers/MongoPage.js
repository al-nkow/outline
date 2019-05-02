import React, { PureComponent } from 'react';
import { Head, Code, SubHead, Block } from '../components/shared';
import Important from '../components/Important';

class MongoPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Head>MongoDB</Head>
        <Block>
          <p>
            <a href="https://docs.mongodb.com/manual/reference/method/db.dropDatabase/" target="_blank" rel="noopener noreferrer">Справочник SHELL</a>
          </p>
          <p>
            <Code className="mr">mongo -u "username" -p "soMe01PassWoRD" --authenticationDatabase nameofdatabase</Code>
            - подключиться с паролем и именем пользователя<br/>
            <Code className="mr">show dbs</Code> - просмотр всех баз данных<br/>
            <Code className="mr">use hrbase</Code> - использовать базу hrbase<br/>
            <Code className="mr">db.dropDatabase();</Code>  - удалить эту базу<br/>
          </p>
          <p>
            <Important>
              Среди списка баз данных видим базу <b>admin</b> - чтобы выполнять операции копирования итд нужно переключиться
              в эту базу! - <b>use admin</b>
            </Important>
          </p>
          <p>
            <Code className="mr">db.runCommand(&#123;copydb: 1, fromdb: 'hrbase', 'todb': 'hrbase_bkp'&#125;);</Code> -
            скопировать базу <b>hrbase</b> в базу <b>hrbase_bkp</b> (hrbase_bkp заранее создавать не надо)
          </p>
          <p>
            <Code className="mr">
              db.getCollection('users').update(&#123; joinedDate: &#123; $exists: false &#125; &#125;, &#123;
              $set: &#123; joinedDate: new ISODate('2018-02-12 11:16:40.003Z') &#125; &#125;, &#123; multi: true &#125;);
            </Code>
            - скрипт для того чтобы просетить дату добавления юзера
          </p>
          <p>
            <Code className="mr">mongod</Code> - запустить базу в отдельном терминальном окне<br/>
            <Code className="mr">mongo</Code> - подключиться к базе<br/>
            <Code className="mr">show dbs</Code> - показать все базы данных<br/>
            <Code className="mr">use myapi</Code> - использовать базу myapi (доступна в переменной db)<br/>
            <Code className="mr">show collections</Code> - показать все коллекции<br/>
            <Code className="mr">db.collectionName.find();</Code> - показать все записи коллекции
          </p>
        </Block>
        <Block>
          <SubHead>Скопировать базу с сервера и развернуть у себя</SubHead>
          <p>
            1. создаем папку <b>mkdir foldername</b> куда будем сохранять дамп базы, заходим в нее в терминале <b>cd foldername</b><br/>
            2. выполнить: <Code>mongodump -h hrportal.bkz:27017 -d hrbase -u "admin@bzgmail.com" -p "soMe01PassWoRD" --authenticationDatabase admin</Code><br/>
            3. <Code className="mr">mongorestore --db hrbase dump/hrbase</Code> - в той же папке
          </p>
        </Block>
        <p>
          <Code className="mr">mongodump --db database_name</Code> - создаст дамп базы данных в текущей папке (где терминал открыт)<br/>
          <Code>scp -P 2216 -r petya@186.21.232.109:/home/alex/dump /Users/aleksey/projects/LOCALFOLDER</Code><br/>
          <Code>mongorestore --drop -d myapi /dump/myapi</Code>
        </p>
      </div>
    );
  }
}

export default MongoPage;