import { dbContext } from "../db/DbContext";

class FavoritesService {
  async create(rawData) {
    let data = await dbContext.Favorites.create(rawData);
  }
  async getFavorites(query = {}) {
    let favorites = await dbContext.Favorites.find(query);
    return favorites;
  }
}

export const favoritesService = new FavoritesService();