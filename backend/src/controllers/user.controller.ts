import { Request, Response } from "express";
import User from "../models/user.model";
const createCurrentUser = async (req: Request, res: Response) => {
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

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, city, country } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.sendStatus(401);
    }
    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;
    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "User updating error" });
  }
};

export default {
  createCurrentUser,
  updateCurrentUser,
};
