const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => res.send("GQL Backend 👍"));

app.listen(PORT, () => console.log(`App is running on ${PORT} 👍`));
