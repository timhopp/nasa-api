import { createSlice, PayloadAction, createAsyncThunk, Action } from"@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../app/store";
import axios from "axios";
import { Photo, Photos } from "../features/photos/types";


//Need an interface to declare the initial states type
interface PhotoState {
  photo: Photo[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null | undefined
}


let initialState: PhotoState = {
  photo: [] as Photo[],
  status: 'idle',
  error: null
}

export const fetchCurrentPhoto = createAsyncThunk(
  "reducers/fetchPhoto",
  
  async () => {
     const response = await axios.get<Photo>(
      "https://api.nasa.gov/planetary/apod?api_key=gb8EyxhtZFQDFJtgS4FlKoumVutmPTkYStGt0MF5"
    
    );
   return response.data;
  }
)


const currentPhotoSlice = createSlice ({
  name: "currentPhoto",
  initialState,
  reducers: {
    // setCurrentPhoto(state, action: PayloadAction<Photo>) {
    //   state.photo.push(action.payload)
    //   // state.photoLoaded = true;
    //   console.log(JSON.stringify(state.photo[0]))
    // }
  },
  extraReducers: builder => {
    builder.addCase(fetchCurrentPhoto.pending, (state, action) => {
      console.log('loaded')
      state.status = "loading";
  })
    builder.addCase(fetchCurrentPhoto.fulfilled, (state, action) => {
      console.log('success')
      state.status = "succeeded";
      state.photo = state.photo.concat(action.payload);
      console.log(JSON.stringify(state.photo[0]))
    })
  
    builder.addCase(fetchCurrentPhoto.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
  }
});


//use middleware Thunk to be able to do an async function
//dispatch must be definied as type AppDispatch(more explanation!)
//.get function must be defined as type Photo, otherwise it will be type any and cause error in Typescript
   //However.. it still comes in as an object with the API's defined names and additional info


export default currentPhotoSlice.reducer;