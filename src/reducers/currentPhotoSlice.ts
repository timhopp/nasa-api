import { createSlice, PayloadAction, createAsyncThunk, Action } from"@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../app/store";
import axios from "axios";
import { Photo, Photos } from "../features/photos/types";


const initialState: 
  //Do I want this as object? 
  Photo[] = [];


const currentPhotoSlice = createSlice ({
  name: "currentPhoto",
  initialState,
  reducers: {
    setCurrentPhoto(state, action: PayloadAction<Photo>) {
      state.push(action.payload)
      console.log(JSON.stringify(state))
    }
  }
});


//use middleware Thunk to be able to do an async function
//dispatch must be definied as type AppDispatch(more explanation!)
//.get function must be defined as type Photo, otherwise it will be type any and cause error in Typescript
   //However.. it still comes in as an object with the API's defined names and additional info
export const fetchCurrentPhoto = createAsyncThunk(
  "reducers/fetchPhoto",
  
  async (dispatch: AppDispatch) => {
     const response = await axios.get<Photo>(
      "https://api.nasa.gov/planetary/apod?api_key=gb8EyxhtZFQDFJtgS4FlKoumVutmPTkYStGt0MF5"
    
    )
    dispatch(
      currentPhotoSlice.actions.setCurrentPhoto(response.data));
  }
)

export const selectCurrentPhoto = (state : Photo) => state;

export default currentPhotoSlice.reducer;