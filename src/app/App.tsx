import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import rootReducer from "../reducers/index";
import {Provider} from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import store, { AppDispatch } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentPhoto, selectCurrentPhoto } from "../reducers/currentPhotoSlice";
import thunkMiddleware from "redux-thunk";
import CurrentPhoto from "../components/currentPhoto"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootState } from "../app/store"

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

//Need to export RootState and set state type to RootState to access reducers
const photoStatus = useSelector((state: RootState) => state.currentPhoto.status)
const error = useSelector((state: RootState) => state.currentPhoto.error)
const currentPhoto = useSelector((state: RootState) => state.currentPhoto.photo[0]); 


useEffect(() => {
  if(photoStatus == 'idle')
  dispatch(fetchCurrentPhoto())
  //Adding the empty array as a second argument ensures it only is called once. 
  //https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once


}, [])


let content 
if(photoStatus === 'loading'){
   content =
  <div> Loading </div>
} else if (photoStatus === 'succeeded') {
   content = 
  <div>
    {currentPhoto.title}
    
    </div>
} else if (photoStatus === 'failed') {
   content = 
   <div>{error}</div> 
 }

  return (
    <div className="App">
      <header className="App-header">
       NASA Picture of The Day App
       {content}
      </header>
    <div>
      <CurrentPhoto></CurrentPhoto>
    </div>



    </div>
  );
}

export default AppWrapper;
