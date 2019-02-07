import React, { Component } from 'react';
import { Head } from '../components/shared';
import ts1 from '../images/ts1.jpg';
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: 100%;
  border: 1px solid #f5f5f5;
  border-radius: 2px;
  margin-bottom: 10px;
`;

class TypeScriptPage extends Component {
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