const express = require('express');

const app = express();
app.listen(8000, ()=> {
    console.log(`Server is runing on ${8000} port!`);
});
