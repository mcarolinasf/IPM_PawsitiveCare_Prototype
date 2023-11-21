
const express = require('express');
const app = express();



app.use(express.json());

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});





app.get("/", (req, res) => {
    
    res.status(200).json("Hey there");

});
