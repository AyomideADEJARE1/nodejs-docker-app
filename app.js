const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Docker App</title>
        </head>
        <body>
            <h1>Ay's Node.js Docker Deployment is Successful</h1>
            <p>This application is running inside a Docker container.</p>
            <p>Deployed using GitHub, Linux, Docker and Docker Hub.</p>
        </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log("Server running on port " + port);
});
