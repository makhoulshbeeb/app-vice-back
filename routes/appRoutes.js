import express from "express";
import { createApp, getApp, getAllApps, getAppBySearch } from "../controllers/appController.js";

const router = express.Router();

router.get("/app/:id", getApp);
router.get("/app", getAllApps);
router.post("/app", createApp);
router.get("/app/search/:search", getAppBySearch);

export default router;
