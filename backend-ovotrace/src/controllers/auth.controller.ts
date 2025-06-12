import { Request, Response } from 'express';
import User from '../models/User';

// Registro de cliente
export const registerClient = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }

    const newUser = new User({ name, email, password, role: 'cliente' });
    await newUser.save();

    res.status(201).json({ message: 'Cliente registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar cliente', error });
  }
};

// Registro de productor
export const registerFarm = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword, farmName, location } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }

    const newUser = new User({ name, email, password, role: 'productor', farmName, location });
    await newUser.save();

    res.status(201).json({ message: 'Productor registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar productor', error });
  }
};
