import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 50px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  margin-bottom: 2px;
  color: #333333;
  border-radius: 2px;
  &:hover {
    background: rgba(0,0,0,0.1);
  }
`;

class StartPage extends Component {
  render () {
    return (
      <Wrap>
        <StyledLink to="/questions">JS частые вопросы</StyledLink>
        <StyledLink to="/common">Общие вопросы</StyledLink>
        <StyledLink to="/async">Асинхронное программирование</StyledLink>
        <StyledLink to="/tasks">Задачи на собеседовании</StyledLink>
        <StyledLink to="/react">React основы</StyledLink>
        <StyledLink to="/redux">Redux основы</StyledLink>
        <StyledLink to="/js">Javascript общие вопросы</StyledLink>
        <StyledLink to="/proto">Javascript Наследование</StyledLink>
        <StyledLink to="/scss">SCSS SASS LESS STYLUS</StyledLink>
        <StyledLink to="/template">Шаблоны проектирования</StyledLink>
        <StyledLink to="/solid">SOLID</StyledLink>
        <StyledLink to="/worker">Web workers</StyledLink>
        <StyledLink to="/server">Server</StyledLink>
        <StyledLink to="/api">API</StyledLink>
        <StyledLink to="/node">Node</StyledLink>
        <StyledLink to="/esnew">ES 2015</StyledLink>
        <StyledLink to="/helper">Вопросы на собеседовании</StyledLink>
        <StyledLink to="/canvas">SVG Canvas D3</StyledLink>
        <StyledLink to="/owasp">OWASP</StyledLink>
      </Wrap>
    );
  }
}

export default StartPage;