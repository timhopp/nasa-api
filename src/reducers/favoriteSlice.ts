import { createSlice, PayloadAction} from"@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../app/store";
import { Photo } from "../features/photos/types";

//Does this simply ensure an empy array is only PHoto types? 
const initialState: Photo[] = [];

//createSlice automatically generates action creators and action types, reducing the Redux boilerplate
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    //By using PayloadAction, actions are strongly typed so that the action only suppoerts objects of the type Favorite 
    //<Favorite> is passing in the type to be checked

    addFavorite(state, action: PayloadAction<Photo>) {
      state.push(action.payload)
    }
  }
});

//Reducers only look at the dispatched action and create a new state value without basing logic on what the current state might be.
//Reducers also cannot handle asynchronous logic 






export default favoriteSlice.reducer;