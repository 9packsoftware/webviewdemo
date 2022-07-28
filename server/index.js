const express = require('express');
const { forwardRef } = require('react');
const server = express();
const port = parseInt(process.argv[2]);
const axios = require('axios');

const forward = async (req, resp, contentType) => {
    const source = req.query.source;
    const response = await axios.get(
        source,
        { responseType: 'arraybuffer' }
    );
    const buffer = Buffer.from(response.data, 'utf-8');

    resp.contentType(contentType);
    resp.status(200).send(buffer);
    resp.end();
}

server.get('/document.pdf', async (req, resp) => {
    await forward(req, resp, 'application/pdf');
})

server.get('/video', async (req, resp) => {
    await forward(req, resp, 'video/mp4');
})

server.listen(port, () => { })