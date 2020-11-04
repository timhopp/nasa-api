
export class NotFound extends Error {
  status: number;
  message: string;
  constructor(message = "Not Found") {
    super(message);
    this.status = 404;
  }
}
export class Forbidden extends Error {
  status: number;
  message: string;
  constructor(message = "Access Forbidden") {
    super(message);
    this.status = 403;
  }
}
export class UnAuthorized extends Error {
  status: number;
  message: string;
  constructor(message = "Unauthorized") {
    super(message);
    this.status = 401;
  }
}
export class BadRequest extends Error {
  status: number;
  message: string;
  constructor(message = "Bad Request") {
    super(message);
    this.status = 400;
  }
}
export class Unexpected extends Error {
  status: number;
  message: string;
  constructor(message = "Unexpected Error") {
    super(message);
    this.status = 500;
  }
}
