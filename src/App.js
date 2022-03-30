import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from './actions';

function App({ counter, isLogged,dispatch }) {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      

      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
    </div>
  );
}
const mapStateToPropss = (state) => {
  return {
    counter: state.counter,
    isLogged: state.isLogged
  }
}

export default connect(mapStateToPropss)  (App);
