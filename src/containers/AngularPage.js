import React, { Component } from 'react';
import { Head } from '../components/shared';

class AngularPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>ANGULAR</Head>
        <p>
          Сканы конспекта
        </p>
      </div>
    );
  }
}

export default AngularPage;