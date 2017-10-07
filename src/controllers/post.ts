import { Request, Response } from "express";

export const submit = (req: Request, res: Response) => {
    console.log("Submit, we are in submitttt");
    if (!req.user) {
      // TODO Add "You need to login" message
      return res.redirect("/login");
    }
    res.render("post/submit", {
      title: "Submit"
    });
  };

export const create = (req: Request, res: Response) => {
    console.log("We are now in create.");
    if (!req.user) {
        // TODO Add "You need to login" message
        return res.redirect("/login");
      }

      res.render("post/create", {
        title: "Create"
      });
};