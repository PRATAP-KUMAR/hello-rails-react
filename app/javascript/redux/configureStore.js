import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greeting';

const reducer = greetingReducer;

const store = configureStore({ reducer });

export default store;