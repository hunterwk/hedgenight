const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

const uri = process.env.MONGODB_URI || "mongodb://localhost/hedgenight";
mongoose.connect(uri, { 
  useNewUrlParser: true,  
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const userSeed = [
  {
    username: "test@test.com",
    password: "password",
    tasks: [
    {
      name: "Design meeting with client",
      notes: "Outlined basic requirements for application.  Outlined design elements",  
      duration: 200,
    },
    {
        name: "Create template",
        notes: "Created template for project. Whiteboard technologies and basic workflows",  
        duration: 400,
    }
  ]
  },
 
];

db.User
  .remove({})
  .then(() => db.User.create(userSeed))
  .then(data => {
    // console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
