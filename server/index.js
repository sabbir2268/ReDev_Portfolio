const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@portfolio-cluster.vvv4gjc.mongodb.net/?appName=portfolio-cluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB Connected Successfully");

    const database = client.db("projectsDB");
    const projectsCollection = database.collection("projects");

    //post method
    app.post("/projects", async (req, res) => {
      try {
        const { name, description, technologies, github, live } = req.body;

        const newProject = {
          name,
          description,
          technologies,
          github,
          live,
        };

        const result = await projectsCollection.insertOne(newProject);
        console.log("project added successfully", newProject);
        res.status(201).json({
          success: true,
          message: "Project added successfully",
          insertedId: result.insertedId,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to added project",
          error: error.message,
        });
      }
    });

    app.get("/projects", async (req, res) => {
      const result = await projectsCollection.find().toArray();
      res.send(result);
    });
  } catch (err) {
    console.error(err);
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running ");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
