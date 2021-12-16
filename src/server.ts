import "reflect-metadata"
import express from "express";
import "./database";
import { routes } from "./routes";


const app = express();

app.use(routes);

app.listen(300 , () => console.log(" Serve is running"));

