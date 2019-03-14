import React, { Component } from 'react';
import {Code, Head, SubHead} from '../components/shared';
import NginxImg from '../images/nginx1.jpg';
import NginxImg2 from '../images/nginx2.jpg';
import Important from '../components/Important';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  display: block;
  max-width: 400px;
  margin: 5px 0;
`;

class NginxPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>NGINX</Head>
        <SubHead>Установка Nginx на сервер Ubuntu 16</SubHead>
        <p>
          <a href="https://www.digitalocean.com/community/tutorials/nginx-ubuntu-16-04-ru" target="_blank">Ссылка на статью</a>
        </p>
        <Image src={NginxImg} alt=""/>
        <p>
          <Code className="mr">sudo apt-get update</Code><br/>
          <Code className="mr">sudo apt-get install nginx</Code><br/>
          <Code className="mr">sudo ufw app list</Code>- проверить, добавил ли Nginx себя в файрвол. Он делает это автоматически.
        </p>
        <p>
          <Code className="mr">sudo ufw allow 'Nginx Full'</Code>- этот профиль открывает порты 80 (обычный, не
          шифрованный веб-трафик) и 443 (трафик шифруется с помощью TLS/SSL).<br/>
          <Code className="mr">sudo ufw allow 'Nginx HTTP'</Code> - разрешить соединения через nginx по http<br/>
          <Code className="mr">sudo ufw allow 'Nginx HTTPS'</Code> - этот профиль открывает только порт 443
          (трафик шифруется с помощью TLS/SSL)
        </p>
        <p>
          <Code className="mr">sudo ufw status</Code>- посмотреть в настройках файрвола должен появиться nginx<br/>
          <Code className="mr">sudo systemctl status nginx</Code>- после установки nginx запустится автоматически -
          можно проверить выполнив эту команду<br/>
          <Code className="mr">sudo systemctl start nginx</Code><br/>
          <Code className="mr">sudo systemctl stop nginx</Code>- остановить nginx<br/>
          <Code className="mr">nginx -t</Code>- проверить нет ли ошибок в конфигурации<br/>
          <Code className="mr">sudo systemctl restart nginx</Code>- перезапуск<br/>
          <Code className="mr">sudo systemctl reload nginx</Code>- если вносим изменения в конфигурацию  nginx<br/>
          <Code className="mr">sudo systemctl disable nginx</Code>- отключить автоматический запуск nginx<br/>
          <Code className="mr">sudo systemctl enable nginx</Code>- снова включить автозапуск nginx при старте сервера<br/>
        </p>
        <Important>
          Ваш веб-сервер будет установлен в директорию <b>/etc/nginx/</b> в ней расположен файл
          конфига <b>nginx.conf</b> и папка <b>sites-available</b> - это наиболее важные элементы
        </Important>
        <p>
          Ваш установленный сервер может поддерживать больше одного сайта, а файлы, которые описывают
          сайты вашего сервера, находятся в каталоге <b>/etc/nginx/sites-available</b>
        </p>
        <p>
          Веб-сервер ничего не будет делать с этими файлами, если они не будут привязаны символической
          ссылкой на папку <b>/etc/nginx/site-enabled</b>
        </p>
        <p>
          В файле <b>/etc/nginx/nginx.conf</b> в конце есть ссылка на <b>include /etc/nginx/sites-enabled/ *;</b><br/>
          В нем файл <b>default</b> - который является ссылкой на <b>/etc/nginx/sites-available/default</b>
        </p>
        <Important>
          <b>nginx.conf</b> &rarr; /etc/nginx/sites-enabled/<b>default</b> &larr; /etc/nginx/sites-available/<b>default</b>
        </Important>
        <Image src={NginxImg2}/>
        <p>
          <a href="https://www.youtube.com/watch?v=4p1Zc8F29Lk&list=PLQlWzK5tU-gDyxC1JTpyC2avvJlt3hrIh&index=12" target="_blank">
            Ссылка на видео
          </a>
        </p>
      </div>
    );
  }
}

export default NginxPage;