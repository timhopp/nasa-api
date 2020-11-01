import React from "react"
import { Photo } from "../features/photos/types"

interface PhotoProp {
  photo: { title: string, url: string, explanation: string}
}

export default function CurrentPhoto({ photo }: PhotoProp) {
  return(
    <div className="container-fluid">
      <div className="row align-items-center">
      <div className="col btn btn-info ml-2">Previous</div>
      <div className="col-8">
        <h2>{photo.title}</h2>
        <img className="img" src={photo.url} alt="Image Not Available"></img>
        <p>{photo.explanation}</p>
        
        </div>
      <div className="col btn btn-info mr-2">Next</div>
      </div>
    </div>
  )


}