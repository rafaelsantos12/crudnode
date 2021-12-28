import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


type CategoryUpdate = {
    name: string;
    description: string;
    id: string
}



export class UpdateCategoryService {

    async execute({ name, description, id}: CategoryUpdate): Promise<Category | Error>{
    
        const repo = getRepository(Category);
        
        if(!await repo.findOne(id)){
            return new Error("Category does not exists!")
        }

        const category = await repo.findOne(id);

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repo.save(category);

        return category

        
    }

}