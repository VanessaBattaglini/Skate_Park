import express from "express";
import router from "./routes/router.js";
import { engine } from "express-handlebars";
import path from "path";
import fileUpload from "express-fileupload";
process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

//Configuracion handlebars
app.set("view engine", "handlebars");
app.engine(
    "handlebars",
    engine({
        defaultLayout: "main",
        layoutsDir: path.join(__dirname, "views/layouts"),
    })
);

//middlewares
app.use(express.json());//Para leer archivos json
app.use(express.static(path.join(__dirname, "/views")));//Carpeta  de las  vistas
app.use(express.static(path.join(__dirname, "/assets")));//Carpeta  pública
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));//Leer bootstrap
//Cargar imagenes
app.use(
    fileUpload({
        limits: 5000000,
        abortOnLimit: true,
        responseOnLimit: "El tamaño de la imagen supera el límite permitido",
    })
);
app.use(express.urlencoded({ extended: false }));//Leer formularios

app.use("/", router);//Rutas

app.listen(PORT, () => {
    console.log(`El servidor se ha levantado en el PORT http://localhost:${PORT}`);
});
