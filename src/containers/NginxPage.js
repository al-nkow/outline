import React, { Component } from 'react';
import { Code, Head, SubHead, Block, StyledSyntaxHighlighter } from '../components/shared';
import NginxImg from '../images/nginx1.jpg';
import NginxImg2 from '../images/nginx2.jpg';
import Important from '../components/Important';
import styled from 'styled-components';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const Image = styled.img`
  width: 100%;
  display: block;
  max-width: 400px;
  margin: 5px 0;
`;

const code1 = `server {
  listen 80;

  server_name yoursite.ru;

  gzip on;
  gzip_disable "msie6";
  gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript;

  root /home/alex/www/YOURSITE_FOLDER;
  index  index.html index.htm;

  location / {
    try_files $uri $uri/ =404;
  }

  # add other directives here;
}
`;

const code2 = `server {
  listen 80;
  listen [::]:80;
  
  server_name 189.22.208.119;
  
  location / {
    proxy_pass "http://localhost:3000/";
  }
}
`;

const code3 = `server {
  listen 80;
  listen [::]:80;
  
  server_name 185.20.224.109;
  
  location /socket.io/ {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass "http://localhost:3000/socket.io";
  }
  
  location / {
    proxy_pass "http://localhost:3000/";
  }
}
`;

const code4 = `server {
  listen 80;
  listen [::]:80;
  
  server_name ladyworldnas.com;
  return 301 https://$host$request_uri;
}
`;

const code5 = `server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  
  server_name ladyworldnas.com; // править
  root /home/alex/www/PROKA4_STATIC/dist; // править
  index  index.html index.htm; // править
  
  # certs sent to the client in SERVER HELLO are concatenated in ssl_certificate
  
  ssl_certificate /etc/letsencrypt/live/ladyworldnas.com/fullchain.pem; // править
  ssl_certificate_key /etc/letsencrypt/live/ladyworldnas.com/privkey.pem; // править
  
  ssl_session_timeout 1d;
  ssl_session_cache shared:SSL:50m;
  ssl_session_tickets off;
  
  # Diffie-Hellman parameter for DHE ciphersuites, recommended 2048 bits
  # ssl_dhparam /path/to/dhparam.pem; // закомментировать
  
  # intermediate configuration. tweak to your needs.
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers 'ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GC$
  ssl_prefer_server_ciphers on;
  
  # HSTS (ngx_http_headers_module is required) (15768000 seconds = 6 months)
  add_header Strict-Transport-Security max-age=15768000;
  
  # OCSP Stapling ---
  # fetch OCSP records from URL in ssl_certificate and cache them
  ssl_stapling on;
  ssl_stapling_verify on;
  
  ## verify chain of trust of OCSP response using Root CA and Intermediate certs
  # ssl_trusted_certificate /path/to/root_CA_cert_plus_intermediates; // закомментировать
  
  resolver 8.8.8.8; // править
}
`;

const code6 = `server {
    listen 80;
    listen [::]:80;
    
    server_name ladyworldnas.ru;
    
    return 301 https://ladyworldnas.ru$request_uri;
}

server {
    listen 80;
    listen [::]:80;
    
    server_name www.ladyworldnas.ru;
    
    return 301 https://ladyworldnas.ru$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    gzip on;
    gzip_disable "msie6";
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript;
    gzip_comp_level 5;

    location /admin {
        index index.html;
        alias /home/alex/www/SITE_ADMIN/build;
        
        if (!-e $request_filename){
            rewrite ^(.*)$ /test/index.html last;
        }
    }

    location / {
        proxy_pass "http://localhost:3000/";
    }

    # certs sent to the client in SERVER HELLO are concatenated in ssl_certificate
    ssl_certificate /etc/letsencrypt/live/proka4show.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/proka4show.ru/privkey.pem;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    # Diffie-Hellman parameter for DHE ciphersuites, recommended 2048 bits
    # ssl_dhparam /path/to/dhparam.pem;

    # intermediate configuration. tweak to your needs.
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers 'ECDHE.......384:DHE-$
    ssl_prefer_server_ciphers on;

    # HSTS (ngx_http_headers_module is required) (15768000 seconds = 6 months)
    add_header Strict-Transport-Security max-age=15768000;

    # OCSP Stapling ---
    # fetch OCSP records from URL in ssl_certificate and cache them
    ssl_stapling on;
    ssl_stapling_verify on;

    ## verify chain of trust of OCSP response using Root CA and Intermediate certs
    # ssl_trusted_certificate /path/to/root_CA_cert_plus_intermediates;

    resolver 8.8.8.8;
}`;

class NginxPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Block>
          <Head>NGINX</Head>
          <SubHead>Установка Nginx на сервер Ubuntu 16</SubHead>
          <p>
            <a href="https://www.digitalocean.com/community/tutorials/nginx-ubuntu-16-04-ru" target="_blank" rel="noopener noreferrer">Ссылка на статью</a>
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
            <a href="https://www.youtube.com/watch?v=4p1Zc8F29Lk&list=PLQlWzK5tU-gDyxC1JTpyC2avvJlt3hrIh&index=12" target="_blank" rel="noopener noreferrer">
              Ссылка на видео
            </a>
          </p>
        </Block>

        <Block>
          <SubHead>Пример 1</SubHead>
          <p>
            1. Купить домен и прописать в его A-записях IP адрес VPS сервера<br/>
            2. Чтобы <b>nginx</b> обрабатывал запросы, нужно добавить файл конфигурации. Каждый такой файл соответствует одному домену<br/>
            3. По адресу <b>/etc/nginx/sites-available/</b> создать файл <b>yoursitename.conf</b><br/>
            4. Открыть этот файл с помощью редактора <b>nano</b> и заполнить следующим содержимым:
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code1}
          </StyledSyntaxHighlighter>
          <p>
            5. Теперь необходимо создать символическую ссылку на этот файл в каталоге sites-enabled -
            иначе конфигурационный файл будет отключен. Создается командой<br/>
            <Code>sudo ln -s /etc/nginx/sites-available/yoursitename.conf /etc/nginx/sites-enabled/</Code><br/>
            6. Перезапустить <b>nginx</b> командой <Code>sudo systemctl restart nginx</Code><br/>
            7. ПОВТОРИТЬ ПРОЦЕДУРУ для каждого сайта<br/>
            8. Тест новой конфигурации <Code>sudo nginx -t</Code> - (sudo если не под рутом)
          </p>
        </Block>
        <Block>
          <SubHead>Для node.js</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code2}
          </StyledSyntaxHighlighter>
        </Block>
        <Block>
          <SubHead>Если нужны websocket</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code3}
          </StyledSyntaxHighlighter>
          <Important>
            Если при попытке открыть статический сайт возникает <b>403</b> ошибка<br/>
            <b>namei -om /home/alex/www/YOURSITE_FOLDER</b> - посмотреть права на доступ к папке
          </Important>
        </Block>

        <Block>
          <Head>Подключение SSL сертификата, настройка https</Head>
          <p>
            1. Заходим на сайт <a href="https://certbot.eff.org/" target="_blank">https://certbot.eff.org/</a>
            и устанавливаем согласно инструкции<br/>
            <Code>sudo apt-get update</Code><br/>
            <Code>sudo apt-get install software-properties-common</Code><br/>
            <Code>sudo add-apt-repository ppa:certbot/certbot</Code><br/>
            <Code>sudo apt-get update</Code><br/>
            <Code>sudo apt-get install python-certbot-nginx</Code><br/>
            2. <Code>certbot certonly --standalone -d ladyworldnas.com</Code><br/>
            3. Далее вводим <b>email</b> на который придёт сообщение что действие сертификата заканчивается<br/>
            4. <b>A</b> - Agree<br/>
            5. <b>No</b><br/>
            6. Если вдруг появилась ошибка <b>error: Problem binding to port 80: Could not bind to IPv4 or IPv6</b>  - значит надо остановить <b>nginx</b> - он занимает порт <b>80</b>. Останови и выполни команду еще раз.
            7. <b>/etc/letsencrypt/live/ladyworldnas.com/fullchain.pem</b>  - здесь сохранен сертификат<br/>
            8. <b>/etc/letsencrypt/live/ladyworldnas.com/privkey.pem</b> - здесь хранится ключ<br/>
            <Important>Делать регулярный бэкап папки <b>/etc/letsencrypt</b></Important>
            9. Сделаем копию всего каталога: <Code>cp -r /etc/letsencrypt/ /home/alex</Code> (в папку home/alex/)<br/>
            10. Cоздадим архив этой папки чтобы можно было его скачать <Code>tar czf letsencrypt.tar.gz letsencrypt/</Code><br/>
            11. Скачайте файл <b>letsencrypt.tar.gz</b> на диск и сохраните в надежном месте<br/>
            12. Теперь надо настроить NGINX<br/>
            13. Переходим на <a href="https://mozilla.github.io/server-side-tls/ssl-config-generator/">https://mozilla.github.io/server-side-tls/ssl-config-generator/</a><br/>
            14. Здесь надо заполнить данные о конфигурации твоего сервера:<br/>
            <b>Nginx</b>, <b>Modern</b> - значит довольно новые браузеры от <b>ie11</b>, лучше выбрать <b>Intermediate</b>,<br/>
            далее нужно указать версию сервера и версию <b>OpenSSL</b>.<br/>
            <Code>nginx -v</Code> выведет версию сервера (1.10.3),<br/>
            <Code>openssl version</Code> - покажет версию openssl (1.0.2g)<br/>
            16. Копируем все что получилось и вставляем в файл <b>/etc/nginx/sites-available/proka4showru.conf</b><br/>
            17. Правим путь <b>ssl_certificate /path/to/signed_cert_plus_intermediates;</b><br/>
            - должно быть <b>ssl_certificate /etc/letsencrypt/live/ladyworldnas.com/fullchain.pem;</b><br/>
            18. Правим <b>ssl_certificate_key /etc/letsencrypt/live/ladyworldnas.com/privkey.pem;</b><br/>
            19. Закомментировать строку <b># ssl_dhparam /path/to/dhparam.pem;</b><br/>
            20. Удалить <b>ssl_trusted_certificate /path/to/root_CA_cert_plus_intermediates;</b><br/>
            21. Править <b>resolver 8.8.8.8;</b><br/>
            22. Убрать <b>…</b><br/>
            23. Скопировать и добавить из начальной конфигурации (после listen [::]:443 ssl http2;)<br/>
            <b>server_name ladyworldnas.com;</b><br/>
            <b>root /home/alex/www/PROKA4_STATIC/dist;</b><br/>
            <b>index  index.html index.htm;</b><br/>
            24. теперь сайт доступен по <b>https://ladyworldnas.com/</b><br/>
            25. Дальше если надо - добавить все про вебсокеты (вставить после resolver) и также перезапустить nginx (из старого блока server это убрать)<br/>
            26. Но! наш сайт все еще доступен по адресу <b>http://…</b> - нужно сделать переадресацию
            с <b>http</b> на <b>https</b>! - для этого в начальном блоке оставляем только<br/>
          </p>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code4}
          </StyledSyntaxHighlighter>
          Итого:
          <StyledSyntaxHighlighter language='php' style={tomorrow}>
            {code5}
          </StyledSyntaxHighlighter>
        </Block>

        <Block>
          <SubHead>Обновить сертификат</SubHead>
          <p>
            1. Останвливаем <b>nginx</b><br/>
            2. <Code>sudo certbot renew</Code><br/>
            3. Запускаем <b>nginx</b><br/>
          </p>
          <p>
            Появится сообщение<br/>
            Congratulations! Your certificate and chain have been saved at:<br/>
            <b>/etc/letsencrypt/live/yoursitename.ru/fullchain.pem</b><br/>
            Your key file has been saved at:<br/>
            <b>/etc/letsencrypt/live/yoursitename.ru/privkey.pem</b><br/>
            Your cert will expire on 2019-01-13. To obtain a new or tweaked<br/>
            version of this certificate in the future, simply run certbot<br/>
            again. To non-interactively renew *all* of your certificates, run "certbot renew"
          </p>
        </Block>

        <Block>
          <Important>
            Если вдруг какая-о херня случилась - типа не пускает на сервер по ssh -
            надо зайти в панель управления хостингом - найти услугу сервера и там есть кнопка
            - <b>Перезагрузить сервер</b>!
          </Important>
        </Block>

        <Block>
          <SubHead>Работающая кофигурация</SubHead>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            {code6}
          </StyledSyntaxHighlighter>
        </Block>

      </div>
    );
  }
}

export default NginxPage;