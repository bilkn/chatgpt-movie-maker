import express from "express";

const app = express();

app.get("/", (_, res) => res.send("Hello from express!"));

const PORT = 3000
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));