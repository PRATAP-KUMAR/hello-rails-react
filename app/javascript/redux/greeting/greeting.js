import axios from 'axios';

const GET_DATA = 'GET_DATA';
const API = 'http://localhost:3000/api/messages';

const initialState = [];

const greetingReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const getDataAction = () => (dispatch) => {
  axios.get(API).then((resonse) => {
    const {data} = resonse;
    dispatch({ type: GET_DATA, payload: data[0] })
  });
};

export default greetingReducer;
