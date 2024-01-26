const express = require('express');
const fs = require('fs').promises;
const path = require('path');  // Import the 'path' module

const app = express();
const port = 8080;

app.get('/data', async (req, res) => {
  const { n, m } = req.query;

  if (!n) {
    return res.status(400).json({ error: 'Missing required parameter: n' });
  } 

  const filePath = path.join(__dirname, 'tmp', 'data', `${n}.txt`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');

    if (m) {
      const lineNumber = parseInt(m);
      if (Number.isNaN(lineNumber)) { 
        return res.status(400).json({ error: 'Invalid value for parameter m' });
      }

      const lines = fileContent.split('\n');
      if (lineNumber < 1 || lineNumber > lines.length) {
        return res.status(400).json({ error: 'Invalid line number' });
      } 

      return res.json({ content: lines[lineNumber - 1].trim() });
    } else {
      return res.json({ content: fileContent.trim() });
    }
  } catch (error) {
    console.error('Error:', error);
    if (error.code === 'ENOENT') {
      return res.status(404).json({ error: `File ${n}.txt not found` });
    } else {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
