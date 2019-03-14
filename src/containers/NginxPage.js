import React, { Component } from 'react';
import {Code, Head, SubHead} from '../components/shared';
import NginxImg from '../images/nginx1.jpg';
import styled from 'styled-components';

const Image = styled.img`
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

        </p>

      </div>
    );
  }
}

export default NginxPage;