const express = require('express');
const app = express();

app.get('/user', 
(req, res, next) => {
    console.log('this is 1st route handler')
    next();
},
(req, res, next) => {
    console.log('this is 2nd route handler')
    next();
},
(req, res, next) => {
    console.log('this is 3rd route handler')
    res.send('Response 3');
}
)

app.listen(3000, () => {
    console.log('Server is connected successfully.....');
})