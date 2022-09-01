import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 50px;
  @media screen and (max-width: 600px) {
    padding: 20px 0;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  margin-bottom: 2px;
  color: #333333;
  border-radius: 2px;
  &:hover {
    background: #d2dce6;
  }
`;

const Divider = styled.div`
    height: 0;
    border-bottom: 1px solid #b9c8d8;
    margin: 20px 0;
`;

class StartPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <Wrap>

        <StyledLink to="/react-native">1. React Native</StyledLink>
        <StyledLink to="/data">2. Алгоритмы и структуры данных</StyledLink>
        <StyledLink to="/stuff">3. Различные вопросы</StyledLink>

        <Divider/>

        <StyledLink to="/wwpage">1. Web Workers</StyledLink>

        <Divider/>

        <StyledLink to="/testing">Testing</StyledLink>
        <StyledLink to="/typescriptnew">Typescript essentials</StyledLink>

        <Divider/>

        <StyledLink to="/common">Общие вопросы</StyledLink>
        <StyledLink to="/scss">SCSS SASS LESS STYLUS</StyledLink>
        <StyledLink to="/canvas">SVG Canvas D3</StyledLink>

        <Divider/>

        <StyledLink to="/questions">Javascript вопросы - часть 1</StyledLink>
        <StyledLink to="/js">Javascript вопросы - часть 2</StyledLink>
        <StyledLink to="/esnew">ES 2015</StyledLink>
        <StyledLink to="/proto">Javascript Наследование</StyledLink>
        <StyledLink to="/async">Асинхронное программирование</StyledLink>

        <Divider/>

        <StyledLink to="/template">Шаблоны проектирования</StyledLink>
        <StyledLink to="/api">API</StyledLink>

        <Divider/>

        <StyledLink to="/react">React основы</StyledLink>
        <StyledLink to="/redux">Redux основы</StyledLink>

        <Divider/>

        <StyledLink to="/helper">Вопросы на собеседовании по всем разделам</StyledLink>
        <StyledLink to="/tasks">Задачи на собеседовании 1</StyledLink>
        <StyledLink to="/interview-tasks">Задачи на собеседовании 2</StyledLink>

        <Divider/>

        <StyledLink to="/worker">Web workers</StyledLink>
        <StyledLink to="/owasp">OWASP</StyledLink>
        <StyledLink to="/solid">SOLID</StyledLink>
        <StyledLink to="/node">Node</StyledLink>
        <StyledLink to="/server">Server</StyledLink>
        <StyledLink to="/angular">Angular 2</StyledLink>
        <StyledLink to="/typescript">TypeScript</StyledLink>

        <Divider/>

        <StyledLink to="/vpn">VPN Server configuration</StyledLink>
        <StyledLink to="/nginx">NGINX</StyledLink>
        <StyledLink to="/docker">Docker</StyledLink>
        <StyledLink to="/mongo">MongoDB</StyledLink>
        <StyledLink to="/linux">Linux</StyledLink>

        <Divider/>

        <StyledLink to="/git">Git</StyledLink>
        <StyledLink to="/snippet">Snippet</StyledLink>
        <StyledLink to="/wisebits">Wisebits</StyledLink>

      </Wrap>
    );
  }
}

export default StartPage;