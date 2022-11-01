const http = require("http");
const app = require("./app");
const expressServer = http.createServer(app);

const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://young-vision:young-vision@cluster0.lvweu.mongodb.net/young-vision?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3009;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URI);
  expressServer.listen(PORT);
  console.log(`Listening to PORT: ${PORT}`);
}

startServer();
