import React, { PureComponent } from 'react';
import { Mark, Point, Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const code1 = `static getDerivedStateFromProps(nextProps, prevState) {...}
  // нет доступа к this.props и this.state!
  // должен возвращать новое состояние или return null если не меняем состояние
`;

const code2 = `shouldComponentUpdate(nextProps,nextState) {
  return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
}
// В обычном компоненте просто { return true; }
`;

const code3 = `ComponentWillReceiveProps(newProps) {
  if (this.props.visible === true && next.props.visible === false) {
    console.log('HIDDEN');
  }
}
`;

const code4 = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
// Раньше так:
<input value="456" ref={(node) => { this.inputEl = node; }} />
`;

class ReactPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>React</Head>
        <p>
          Это библиотека! Работа основана на концепте виртуального DOM. React содержит
          виртуальный DOM в памяти и каждый раз, когда в него вносят изменения, быстро их
          сравнивает с реальным DOM, сводит в одно обновление и посылает целый пакет
          данных на настоящий DOM.
        </p>
        <SubHead>Жизненный цикл компонентов</SubHead>
        <Point>componentWillMount <Mark>(deprecated)</Mark></Point>
        <p>
          Компонент будет примонтирован
        </p>
        <Point>componentDidMount</Point>
        <p>
          Можно использовать refs, указать установку фокуса, таймауты,
          ajax запросы, взаимодействия с другими библиотеками.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code4 }
        </StyledSyntaxHighlighter>
        <Point>componentWillReceiveProps <Mark>(deprecated)</Mark></Point>
        <p>
          Здесь компонент получает новые props. Старые доступны как this.props
          а новые ComponentWillReceiveProps(nextProps) {'{...}'}
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code3 }
        </StyledSyntaxHighlighter>
        <p>
          Новый метод <b>getDerivedStateFormProps</b>:
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code1 }
        </StyledSyntaxHighlighter>
        <Point>shouldComponentUpdate</Point>
        <p>
          Можно отменить обновление компонента
        </p>
        <Point>componentWillUpdate <Mark>(deprecated)</Mark></Point>
        <p>
          Вызывается прямо перед <b>render</b> когда новые props и state получены.
        </p>
        <Point>componentDidUpdate</Point>
        <p>
          Вызывается сразу после <b>render</b>. Не вызывается в момент первого рендера!
        </p>
        <Point>componentWillUnmount</Point>
        <p>
          Вызывается перед тем, как компонент будет удален из DOM.
          Здесь можно отписаться от прослушивания событий.
        </p>
        <SubHead>Pure Component</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code2 }
        </StyledSyntaxHighlighter>
      </div>
    );
  }
}

export default ReactPage;