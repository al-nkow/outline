import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

export const Head = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: #456e98;
  padding-bottom: 10px;
`;

export const SubHead = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 4px;
  margin: 20px 0!important;
  font-size: 14px;
  padding: 20px!important;
`;

export const Block = styled.div`
  margin-bottom: 40px;
`;

export const Point = styled.div`
  &:before {
    content: '\\2732';
    margin-right: 5px;
  }
  font-size: 18px;
  font-weight: bold;
  color: #4c886f;
  margin-bottom: -5px;
`;

export const Mark = styled.span`
  color: #e85439;
  font-size: 16px;
  font-weight: 300;
`;