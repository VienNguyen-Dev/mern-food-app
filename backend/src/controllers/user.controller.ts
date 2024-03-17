import { Request, Response } from "express";
import User from "../models/user.model";
export const createUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;

    const exitingUser = await User.findOne({ auth0Id });
    if (exitingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser.toObject()).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "User create error" });
  }
};
