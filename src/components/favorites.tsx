import React from "react";
import { connect } from "react-redux"
import { AppDispatch, RootState } from "../app/store"
import { addFavorite } from "../reducers/favoriteSlice";
import { PhotoProp, Photo } from "../features/photos/types";


//How to properly define type of action to dispatch?
interface addFavoriteAction {
  type: typeof addFavorite
  payload: object
}


class Favorites extends React.Component<PhotoProp> {
  constructor(props: PhotoProp, addFavoriteAction){

super(props)
    this.state= {}
  };

  render(){
    return (
      <div className= "row justify-content-center">
      <div className="col">

      <button className="btn btn-success" onClick={() => this.props.addFavorite(this.props.photo)}> Favorite</button>
      </div>
      <div className="col">

      <div className="">Date</div> 
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch: AppDispatch, state: RootState) => {
  return {
    addFavorite: (photo: Photo) => dispatch(addFavorite(photo))
  }
}

export default connect(undefined, mapDispatchToProps)(Favorites);