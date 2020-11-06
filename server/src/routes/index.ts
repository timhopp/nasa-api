import { Router } from "express"
import { getFavorites } from "../controllers/favorites"

const router
// : Router 
= Router()

router.get("/todos", getFavorites)


export default router