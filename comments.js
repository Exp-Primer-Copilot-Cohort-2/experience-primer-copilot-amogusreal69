// Create web server
// Load the comments from the file
// Add new comments from the file
// Save the comments to the file

// Load the comments from the file
// Add new comments from the file
// Save the comments to the file

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Load the comments from the file
const comments = JSON.parse(fs.readFileSync('comments.json'));

// Add new comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send('Comment added');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Save the comments to the file
// fs.writeFileSync('comments.json', JSON.stringify(comments));