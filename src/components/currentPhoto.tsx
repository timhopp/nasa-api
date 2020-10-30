import React from "react"

export default function CurrentPhoto() {
  return(
    <div className="container-fluid">
      <div className="row align-items-center">
      <div className="col-2 btn btn-info">Previous</div>
      <div className="col-8">
        <div>Title</div>
        <div>Image</div>
        <div>Description</div>
        
        </div>
      <div className="col-2 btn btn-info">Next</div>
      </div>
    </div>
  )


}