import React from 'react';
import Link from 'next/link';
import { of, Subject } from 'rxjs';
import { StateObservable } from 'redux-observable';
import { connect } from 'react-redux';
import CharacterInfo from '../components/CharacterInfo';
import { rootEpic } from '../redux/epics';
import * as actions from '../redux/actions';

import css from './styles/index.styl';

const mapStateToProps = (state) => ({ state });
const dispatchProps = {
  changeMessage: actions.CHANGE_MESSAGE,
};

const initialState = Object.freeze({
  greeting: 'hello',
});

const getInitialState = (props) => {
  return {
    ...initialState,
    reduxCopyMessage: props.state.message,
  };
};

class Index extends React.Component {
  static async getInitialProps({ store, isServer }) {
    // const state$ = new StateObservable(new Subject(), store.getState());
    // const resultAction = await rootEpic(of(actions.fetchCharacter(isServer)), state$).toPromise(); // we need to convert Observable to Promise
    // store.dispatch(resultAction);

    return { isServer };
  }

  constructor(props) {
    super(props);
    this.state = getInitialState(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  changeRedux() {
    this.props.changeMessage('newReduxMessage');
  }

  render() {
    return (
      <div>
        <h1 className={css.header}>Index Page</h1>
        <CharacterInfo />
        <hr />
        <br />
        state message
        <br />
        {this.state.greeting}
        <hr />
        <br />
        not affected by redux changes
        <br />
        {this.state.reduxCopyMessage}
        <hr />
        <br />
        affected by redux changes
        <br />
        {this.props.state.message}
        <button onClick={() => this.changeRedux()}>reduxChange</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchProps,
)(Index);
