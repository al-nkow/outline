import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import styled from 'styled-components';

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 4px;
  margin: 20px 0!important;
  font-size: 14px;
  padding: 20px!important;
`;

const Code = ({ children }) => {
  return (
    <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
      { children }
    </StyledSyntaxHighlighter>
  )
};

export default Code;