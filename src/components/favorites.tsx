import React, { Component } from "react";
import { connect } from "react-redux"
import { AppDispatch, RootState } from "../app/store"
import { addFavorite } from "../reducers/favoriteSlice";
import { Photo} from "../features/photos/types";


//Both actions and objects need to be passed into the component as a prop with a type
interface favoriteProps {
  currentPhoto: Photo
  favorites: Photo[]
  addFavorite: (currentPhoto: Photo) => void
}


class Favorites extends React.Component<favoriteProps> {

  constructor(props: favoriteProps) {
    super(props)
  }

  render(){
    return (
      <div className= "row justify-content-center">
      <div className="col">

      <button className="btn btn-success" onClick={() => this.props.addFavorite(this.props.currentPhoto)}> Favorite</button>
      </div>
      <div> You have {this.props.favorites.length} favorites</div>
      <div className="col">


      <div className="">Date</div> 
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state: RootState ) => {
  return { 
    currentPhoto: state.currentPhoto.photo[0],
    favorites: state.favorites.favorites
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addFavorite: (photo: Photo) => dispatch(addFavorite(photo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(Favorites);