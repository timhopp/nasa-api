import { Response, Request } from "express"
import { IFavorite } from "../types/favorite"
import Favorite from "../models/favorite"

const getFavorites = async (req: Request, res: Response): Promise<void> => {
  try {
    const favorites: IFavorite[] = await Favorite.find()
    res.status(200).json({ favorites })
  } catch (error) {
    throw error
  }
}


export { getFavorites }