import express from "express";
import cors from "cors";
import router from "../src/routes.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(process.env.PORT || 3001, () => {
    console.log("server on...");
});

