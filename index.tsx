require("dotenv").config();
require = require("esm")(module);
//need to add .tsx for node to recognize
module.exports = require("./server/main.tsx");