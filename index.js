import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "Osamudazai123",
  port: 5432,
});

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items;

app.get("/", async (req, res) => {

  const itemsTemp = await db.query("SELECT * FROM items");
  items = itemsTemp.rows;

  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const newItem = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ($1)", [newItem])
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  let currItemId = parseInt(req.body.updatedItemId);
  let currItemTitle = req.body.updatedItemTitle;

  // change it to the database
  await db.query("UPDATE items SET title = $1 WHERE id = $2", [currItemTitle, currItemId]);

  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  let currItemId = parseInt(req.body.deleteItemId);
  
  await db.query("DELETE FROM items WHERE id = $1;", [currItemId]);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
