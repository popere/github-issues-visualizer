const express = require('express');
const path = require('path');

const port = process.env.PORT || 80;
const app = express();

app.use(express.static(path.join(__dirname, 'dist/github-issues-visualizer')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/github-issues-visualizer/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started correctly on port: ${port}`);
  }
});
