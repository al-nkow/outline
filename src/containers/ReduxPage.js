import React, { PureComponent } from 'react';
import { Point, Head, StyledSyntaxHighlighter } from '../components/shared';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const code1 = `{
  type: 'ЗАГРУЗИ_ФОТО',
  payload: 2018
}
`;

const code2 = `function getPhotos(year) {
  return {
    type: GET_PHOTOS,
    payload: year
  }
}
`;

const code3 = `function page(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_SUCCESS:
      return Object.assign({}, state, {
        photos: action.payload
      })
      ...
      default ...
  }
}
`;

const code4 = `const mapDispatchToProps = dispatch => ({
  setYearAction: year => dispatch(setYear(year))
})
// setYear - это action creator
`;

class ReduxPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <Head>Redux</Head>

        <Point>Action</Point>
        <p>
          это просто объект
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code1 }
        </StyledSyntaxHighlighter>

        <Point>Action Creator</Point>
        <p>
          это функция для вызова action<br/>
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code2 }
        </StyledSyntaxHighlighter>

        <Point>Reducer</Point>
        <p>
          это функция, которая принимает предыдущее состояние и действие (state и action)
          и возвращает новую версию предыдущего состояния (следующее состояние).<br/>
          Разбиваем приложение на кусочки и за каждый кусочек отвечает редьюсер.<br/>
          <b>В редьюсере всегда возвращаем новый объект!</b><br/>
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code3 }
        </StyledSyntaxHighlighter>

        <Point>mapDispatchToProps</Point>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code4 }
        </StyledSyntaxHighlighter>
      </div>
    );
  }
}

export default ReduxPage;