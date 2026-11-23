const express = require('express');
const { adminAuth } = require('./middleware/auth')
const app = express();

app.use('/admin', adminAuth);
app.get('/admin/getAllData', (req, res) => {
    res.send('All Data Sent');
});

app.get('/admin/deleteUser', (req, res) => {
    res.send('User Deleted');
});

app.use('/user', (req, res, next) => {
    res.send('User Data Found');
});

app.listen(3000, () => {
    console.log('Server is connected successfully.....');
})