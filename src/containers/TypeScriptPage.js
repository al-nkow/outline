import React, { PureComponent } from 'react';
import { Image, Head } from '../components/shared';
import ts1 from '../images/ts1.jpg';
import ts2 from '../images/ts2.jpg';
import ts3 from '../images/ts3.jpg';
import ts4 from '../images/ts4.jpg';
import ts5 from '../images/ts5.jpg';
import ts6 from '../images/ts6.jpg';
import ts7 from '../images/ts7.jpg';
import ts8 from '../images/ts8.jpg';
import ts9 from '../images/ts9.jpg';
import ts10 from '../images/ts10.jpg';

class TypeScriptPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>Type Script</Head>
        <Image src={ts1} alt=""/>
        <Image src={ts2} alt=""/>
        <Image src={ts3} alt=""/>
        <Image src={ts4} alt=""/>
        <Image src={ts5} alt=""/>
        <Image src={ts6} alt=""/>
        <Image src={ts7} alt=""/>
        <Image src={ts8} alt=""/>
        <Image src={ts9} alt=""/>
        <Image src={ts10} alt=""/>
      </div>
    );
  }
}

export default TypeScriptPage;