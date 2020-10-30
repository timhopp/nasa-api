import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import rootReducer from "../reducers/index";
import {Provider} from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { AppDispatch } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentPhoto, selectCurrentPhoto } from "../reducers/currentPhotoSlice";
import thunkMiddleware from "redux-thunk";


const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);


const AppWrapper = () => {
  const store = createStore(rootReducer, undefined, composedEnhancers);

  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

const App = () => {

  
//Why should I use useDispatch here instead of AppDispatch? What exactly is the difference for Typescript? 
const dispatch = useDispatch();
const currentPhoto = useSelector(selectCurrentPhoto)

useEffect(() => {
  //Why do I need to define dispatch again? Why is is a necessary argument? There must be a better way to do this. 
  dispatch(fetchCurrentPhoto(dispatch))
})

let content = 
  <div>{currentPhoto.title}</div>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Dynamic changes? Cool
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        Hi
      {content}
      </div>
    </div>
  );
}

export default AppWrapper;
