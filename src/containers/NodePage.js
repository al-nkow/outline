import React, { Component } from 'react';
import { Head, SubHead } from '../components/shared';

class NodePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>NODE.JS</Head>
        <p>
          Node.js - это программное средство для выполнения js (на сервере, desktop,
          notebook, где угодно)
        </p>
        <SubHead>Как в NODE.js отправлять изображение на сервер?</SubHead>
        <p>
          1. Передача файла из html формы<br/>
          2. Content-Type: multipart/form-data<br/>
          3. через input type="file"
        </p>
      </div>
    );
  }
}

export default NodePage;