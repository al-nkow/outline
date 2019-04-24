import React, { PureComponent } from 'react';
import { Image, Head } from '../components/shared';
import ang1 from '../images/ang1.jpg';
import ang2 from '../images/ang2.jpg';
import ang3 from '../images/ang3.jpg';
import ang4 from '../images/ang4.jpg';
import ang5 from '../images/ang5.jpg';
import ang6 from '../images/ang6.jpg';
import ang7 from '../images/ang7.jpg';
import ang8 from '../images/ang8.jpg';
import ang9 from '../images/ang9.jpg';
import ang10 from '../images/ang10.jpg';
import ang11 from '../images/ang11.jpg';
import ang12 from '../images/ang12.jpg';

class AngularPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>ANGULAR</Head>
        <Image src={ang1} alt=""/>
        <Image src={ang2} alt=""/>
        <Image src={ang3} alt=""/>
        <Image src={ang4} alt=""/>
        <Image src={ang5} alt=""/>
        <Image src={ang6} alt=""/>
        <Image src={ang7} alt=""/>
        <Image src={ang8} alt=""/>
        <Image src={ang9} alt=""/>
        <Image src={ang10} alt=""/>
        <Image src={ang11} alt=""/>
        <Image src={ang12} alt=""/>
      </div>
    );
  }
}

export default AngularPage;