import { Router } from "express";

export default interface IController<T>
{
    getRoutes(): Router;
    setBaseRoutes(): void;
    setCustomRoutes(): void;
};