import { Request, Response, NextFunction } from "express";
import { manufactureController } from '../controller/manufactureController';


export class Routes {
    private manufacture: manufactureController = new manufactureController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/manufacture').post(this.manufacture.GpCreate);
app.route('/manufacture').get(this.manufacture.GpGetAllValues);
     }

}