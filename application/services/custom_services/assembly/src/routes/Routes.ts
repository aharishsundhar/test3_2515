import { Request, Response, NextFunction } from "express";
import { assemblyController } from '../controller/assemblyController';


export class Routes {
    private assembly: assemblyController = new assemblyController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/assembly').get(this.assembly.GpGetAllValues);
app.route('/assembly').post(this.assembly.GpCreate);
     }

}