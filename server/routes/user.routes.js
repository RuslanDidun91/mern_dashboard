import express from "express";
import {
  getAllUsers,
  createUser,
  getUserInfo
} from '../controllers/user.controller.js';
//instance of router
const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfo);


export default router;