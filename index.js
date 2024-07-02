import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import home from "./routes/home/index.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/assets", express.static(path.join(__dirname, "public", "static")));
console.log(path.join(__dirname, "public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", home);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server started at port: 3000  
go to: http://localhost:3000`);
});
