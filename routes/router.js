import express from 'express';
const router = express.Router();
import { getDate } from '../queries/crudSkate.js';
import { homeControl } from '../controllers/homeController.js';
import { registerControl } from '../controllers/registerController.js';
import {
    addSkaterControl,
    getSkaterControl,
    getLoginControl,
    updateStaker,
    updateSkaterStatus,
    deleteSkater,
} from "../controllers/skatersController.js";
import { loginControl } from '../controllers/loginController.js';
import { perfilControl, perfil } from '../controllers/perfilController.js';
import { admin } from '../controllers/adminController.js';


router.get('/date', getDate);
router.get("/", getSkaterControl);
router.get('/registro', registerControl);
router.post("/skaters", addSkaterControl);
router.get('/login', loginControl);
router.post('/login', getLoginControl);
router.get('/perfil', perfilControl);
router.put("/skaters", updateStaker);
router.put("/skaters/status/:id", updateSkaterStatus);
router.delete("/skaters/:id", deleteSkater);
router.get("/perfil", perfil);
router.get("/Admin", admin);



export default router;