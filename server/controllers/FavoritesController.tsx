import express, { Router } from "express";
import BaseController from "../utils/BaseController";
import { favoritesService } from "../services/FavoritesService";

export class FavoritesController extends BaseController {
  constructor() {
    super("api/favorites");
    // const favsRouter = express.Router()
    // this.getFavorites = this.getFavorites.bind(this)
    // const router = Router()
    this.router
    .get("", this.getFavorites)
    .post("/post", this.create);
  }


  async getFavorites(req, res, next) {
    try {
      // let favorites = await favoritesService.getFavorites();
      // res.send(favorites);
      res.send("you hit favorites")
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await favoritesService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
}