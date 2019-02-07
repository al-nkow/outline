import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #253648;
  z-index: 100;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

class NavBar extends Component {
  render () {
    return (
      <Wrap>
        <Inner>
          <StyledLink to="/">Home</StyledLink>
        </Inner>
      </Wrap>
    );
  }
}

export default NavBar;