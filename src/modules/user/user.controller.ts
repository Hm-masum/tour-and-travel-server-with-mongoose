import { Request, Response } from 'express';
import { userService } from './user.service';

// req and res manage
const crateUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await userService.createUser(payload);
    res.json({
      status: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'Something went wrong',
      err,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser();
    res.json({
      status: true,
      message: 'Users find successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'Something went wrong',
      err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await userService.getSingleUser(userId);
    res.json({
      status: true,
      message: 'User getting successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'Something went wrong',
      err,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const body = req.body;
    const result = await userService.updateUser(userId, body);
    res.json({
      status: true,
      message: 'User update successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'Something went wrong',
      err,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await userService.deleteUser(userId);
    res.json({
      status: true,
      message: 'User deleted successfully',
      result,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'Something went wrong',
      err,
    });
  }
};

export const userController = {
  crateUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
