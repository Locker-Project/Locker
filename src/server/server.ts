import * as express from "express";
import * as path from "path";
import * as http from "http";

//express server
const app = express();
const server: http.Server = http.createServer(app);

const basedir: string = path.join(__dirname, "../");
const viewsdir: string = path.join(basedir, "views");
const resourcesdir: string = path.join(basedir, "resources");
const scriptsdir: string = path.join(basedir, "scripts");
const imagedir: string = path.join(basedir, "images");
const port: number = Number(process.env.PORT) || 3000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Node version:${process.version}`);
    console.log(`PID:${process.pid}`)
    console.log(`${process.env.NODE_ENV} mode,bot:${process.env.USE_BOT}`);
});

app.use(express.json());
app.use("/scripts", express.static(scriptsdir));
app.use("/resources/background", express.static(path.join(resourcesdir, "Backgrounds")));
app.use("/resources/behavior", express.static(path.join(resourcesdir, "Behaviors")));
app.use("/resources/music", express.static(path.join(resourcesdir, "MusicResources")));
app.use("/resources/sfx", express.static(path.join(resourcesdir, "SoundEffects")));
app.use("/images", express.static(imagedir));

app.get("/favicon", (req, res) => {
    if (req.headers["content-type"] == "image/x-icon") res.sendFile(path.join(imagedir, "favicon.ico"));
    else res.sendFile(path.join(imagedir, "favicon.png"));
});

app.get("/worker", (req, res) => {
    res.sendFile(path.join(scriptsdir, "serviceWorker", "serviceWorker.js"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(viewsdir, "index.html"));
});

app.get("/health", (req, res) => {
    res.status(200).end("Server online.");
})

app.use((req, res, next) => {
    res.status(404).redirect("/");
});

//process events
process.on('unhandledRejection', (error, promise) => {
    console.log(' Promise rejection : ', promise);
    console.error(error);
});

process.on("uncaughtException", (error) => {
    console.error(error);
});