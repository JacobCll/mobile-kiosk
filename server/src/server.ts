import app from "./index.js";

const PORT = 5666;

const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log("Server is running on", URL);
});
