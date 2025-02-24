# HTTP Server with Dockerized Node.js Application

This repository contains a simple HTTP server implemented in Node.js. The server responds to incoming GET requests on the endpoint `/data` and accepts query parameters `n` (file name) and `m` (line number). The server reads text files from the `/tmp/data` directory and provides content based on the provided parameters.

## Features

- Handles GET requests at the `/data` endpoint.
- Accepts query parameters `n` and `m`.
- Reads text files from `/tmp/data` directory.
- Supports reading entire file content or specific line content.
- Dockerized for easy deployment.

## Prerequisites

- [Node.js](https://nodejs.org/) installed locally.
- [Docker](https://www.docker.com/products/docker-desktop) installed for containerization.

## Getting Started

### Local Development

1. Install dependencies:

   ```bash
   npm install

2. Start the Server:

   ```bash
   npm start
   ```

3. Access the Server:

   Open your web browser and navigate to [http://localhost:8080/data?n=1](http://localhost:8080/data?n=1).

### Docker Deployment

1. Build Docker Image:

   ```bash
   docker build -t http-server-node .
   ```

2. Run Docker Container:

   ```bash
   docker run -p 8080:8080 --memory=1500m --cpus=2 http-server-node
   ```

3. Access the Server:

   ```bash
   Open your web browser and navigate to [http://localhost:8080/data?n=1](http://localhost:8080/data?n=1).
   ```
