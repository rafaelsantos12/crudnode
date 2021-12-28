import { Router } from "express";
import { CreateCategoryController } from "./Controllers/CreateCategoryController";
import { DeleteCategoryController } from "./Controllers/DeleteCategoryController";
import { GetAllCategoryController } from "./Controllers/GetAllCategoryController";
import { UpdateCategoryController } from "./Controllers/UpdateCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/searchcategories", new GetAllCategoryController().handle)
routes.delete("/deletecategories/:id", new DeleteCategoryController().handle)
routes.put("/updatecategories/:id", new UpdateCategoryController().handle)

export { routes}