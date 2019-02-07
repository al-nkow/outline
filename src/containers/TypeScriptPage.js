import React, { Component } from 'react';
import { Head } from '../components/shared';
import ts1 from '../images/ts1.jpg';
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 800px;
  border: 1px solid #f5f5f5;
  border-radius: 2px;
  margin: 0 auto 10px auto;
`;

class TypeScriptPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>Type Script</Head>
        <Image src={ts1} alt=""/>
        <Image src={ts1} alt=""/>
      </div>
    );
  }
}

export default TypeScriptPage;