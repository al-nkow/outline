import React, { PureComponent } from 'react';
import { Head } from '../components/shared';

class MongoPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Head>MongoDB</Head>

      </div>
    );
  }
}

export default MongoPage;