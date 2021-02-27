const express = require('express');


const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, async () => {
    console.log(`Server is up on Port ${PORT}`);
})