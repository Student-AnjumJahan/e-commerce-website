import express from "express"
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getCoupons, validateCoupons } from "../controllers/coupon.controller.js";


const router = express.Router();


router.get("/", protectRoute, getCoupons);
router.post("/validate", protectRoute, validateCoupons);



export default router