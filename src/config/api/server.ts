import cors from "cors";
import morgan from "morgan";
import express from "express";

class Server {

    public app: express.Application;

    constructor() {

        this.app = express();
        this.loadConfig();
        this.loadRoute();

    }

    public loadConfig():void {

        this.app.set("PORT", 3123);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit: "100mb"}));
        this.app.use(express.urlencoded({extended: true}));     

    }

    public loadRoute():void {
    // Aqui agregamos las rutas
    }

    public start():void {

        this.app.listen(this.app.get("PORT"), ()=>{

            console.log("Server running", this.app.get("PORT"));

        });

    } 

}

export default Server;
