import { Response, Request } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";


export class CreateCategoryController {

    async handle(resquest: Request, response: Response){
        const { name, description} = resquest.body;

        const service = new CreateCategoryService();

        const result = await service.execute({ name, description});

        if (result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }

}