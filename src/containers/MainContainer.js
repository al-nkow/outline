import React from "react";
import { Route } from "react-router-dom";
import styled from 'styled-components';

import StartPage from './StartPage';
import AsyncPage from './AsyncPage';
import TasksPage from './TasksPage';
import ReactPage from './ReactPage';
import ReduxPage from './ReduxPage';
import JsPage from './JsPage';
import ProtoPage from './ProtoPage';
import ScssPage from './ScssPage';
import TmplPage from './TmplPage';
import CommonQuestions from './CommonQuestions';
import SolidPage from './SolidPage';
import WorkerPage from './WorkerPage';
import ServerPage from './ServerPage';
import ApiPage from './ApiPage';
import NodePage from './NodePage';
import QuestionsPage from './Questions';
import EsNewPage from './EsNew';
import HelperPage from './HelperPage';
import CanvasPage from './CanvasPage';
import OwaspPage from './OwaspPage';
import AngularPage from './AngularPage';
import TypeScriptPage from './TypeScriptPage';
import VpnPage from './VpnPage';
import NginxPage from './NginxPage';
import WisebitsPage from './WisebitsPage';
import DockerPage from './DockerPage';
import SnippetPage from './SnippetPage';
import MongoPage from './MongoPage';
import GitPage from './GitPage';
import LinuxPage from './LinuxPage';
import TestingPage from  './TestingPage';
import Typescript from  './TypescriptLast';
import WebworkersPage from './WebworkersPage';
import ReactNativePage from './ReactNativePage';
import StuffPage from './Stuff';
import Algorithms from './Algorithms';
import InterviewTasks from './InterviewTasks';

const Wrap = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 900px;
  padding: 10px 20px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  border-radius: 3px;
  min-height: 200px;
  @media screen and (max-width: 920px) {
    max-width: 96%;
  }
`;

const AppRouter = () => (
  <Wrap>
    <Container>
      <Route path="/" exact component={StartPage} />
      <Route path="/common/" component={CommonQuestions} />
      <Route path="/async" exact component={AsyncPage} />
      <Route path="/tasks/" component={TasksPage} />
      <Route path="/react/" component={ReactPage} />
      <Route path="/redux/" component={ReduxPage} />
      <Route path="/js/" component={JsPage} />
      <Route path="/proto/" component={ProtoPage} />
      <Route path="/scss/" component={ScssPage} />
      <Route path="/template/" component={TmplPage} />
      <Route path="/solid/" component={SolidPage} />
      <Route path="/worker/" component={WorkerPage} />
      <Route path="/server/" component={ServerPage} />
      <Route path="/api/" component={ApiPage} />
      <Route path="/node" component={NodePage} />
      <Route path="/questions" component={QuestionsPage} />
      <Route path="/esnew" component={EsNewPage} />
      <Route path="/helper" component={HelperPage} />
      <Route path="/canvas" component={CanvasPage} />
      <Route path="/owasp" component={OwaspPage} />
      <Route path="/angular" component={AngularPage} />
      <Route path="/typescript" component={TypeScriptPage} />
      <Route path="/vpn" component={VpnPage} />
      <Route path="/nginx" component={NginxPage} />
      <Route path="/wisebits" component={WisebitsPage} />
      <Route path="/docker" component={DockerPage} />
      <Route path="/snippet" component={SnippetPage} />
      <Route path="/mongo" component={MongoPage} />
      <Route path="/git" component={GitPage} />
      <Route path="/linux" component={LinuxPage} />
      <Route path="/testing" component={TestingPage} />
      <Route path="/typescriptnew" component={Typescript}/>
      <Route path="/wwpage" component={WebworkersPage}/>
      <Route path="/react-native" component={ReactNativePage}/>
      <Route path="/stuff" component={StuffPage}/>
      <Route path="/data" component={Algorithms}/>
      <Route path="/interview-tasks" component={InterviewTasks}/>
    </Container>
  </Wrap>
);

export default AppRouter;