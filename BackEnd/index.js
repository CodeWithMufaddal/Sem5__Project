const ConnectToMongo = require('./db.js');
const express = require("express");
ConnectToMongo()
const app = express();
const port = 5500;

app.use(express.json());


app.get("/", (req, res) => { res.send(req.body); })

// ======= Product.js =======
app.use("/api/Product", require("./routes/product.js"));

// ======= UserProfile.js =======
app.use("/api/userProfile", require("./routes/userProfile.js"));

// ======= auth.js =======
app.use("/api/auth", require("./routes/auth.js"));

app.listen(port, () => {
   console.log(`Jamali-Collectio app listening at http://localhost:${port}`);
})