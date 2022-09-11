const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(process.env.PORT || 3333, () => {
  console.log(`Flexin on port: ${PORT}!!`);
});