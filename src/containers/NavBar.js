import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #cccccc;
  z-index: 100;
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  color: #333333;
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