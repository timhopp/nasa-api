import mongoose from "mongoose";
// import HostTokensSchema from "../models/HostTokens";
import FavoritesSchema from "../models/Favorites";

class DbContext {
  // //Import Schemas here
  // HostTokens = mongoose.model("HostTokens", HostTokensSchema);
  Favorites = mongoose.model("Favorites", FavoritesSchema);
}

export const dbContext = new DbContext();