import { Request, Response } from "express";
const pikachu = require("../public/js/pikachu.json");

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
  res.render("home", {
    title: "Home",
    pikachu: pikachu,
    base_experience: 1
  });
};