import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

export const NumTitle = styled(({ num, title, className }) => (
  <div className={className}>
    <span className="round">{num}</span> {title}
  </div>
))`
  font-size: 18px;
  font-weight: 600;
  color: #456e98;
  .round {
    font-size: 16px;
    margin-top: -3px;
    font-weight: 600;
    margin-right: 10px;
    float: left;
    width: 22px;
    height: 22px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #456e98;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Code = styled.span`
  color: #88d883;
  background: #2d2d2d;
  padding: 2px 10px;
  font-size: 14px;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 2px;
  &.mr {
    margin-right: 10px;
  }
  &.ml {
    margin-left: 10px;
  }
`;

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

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 800px;
  border: 1px solid #f5f5f5;
  border-radius: 2px;
  margin: 0 auto 10px auto;
`;