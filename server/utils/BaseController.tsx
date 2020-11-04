import express from "express";

// interface baseProps {
//   mount?: any,
//   router?: any
// }

export default class BaseController{
  //TS requires types for these, but since they're express imports they are put as any
  router: any;
  mount: any;
  constructor(mount) {
    if (typeof mount != "string") {
      throw new Error("Unable to register controller no mount path specified");
    }
    if (mount[0] != "/") {
      mount = "/" + mount;
    }
    this.mount = mount;
    this.router = express.Router();
  }
}
