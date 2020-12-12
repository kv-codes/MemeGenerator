module.exports = app => {
    const memes = require("../controllers/meme.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", memes.create);
  
    // Retrieve all Tutorials
    router.get("/", memes.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", memes.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", memes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", memes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", memes.delete);
  
    // Create a new Tutorial
    router.delete("/", memes.deleteAll);
  
    app.use('/api/memes', router);
  };