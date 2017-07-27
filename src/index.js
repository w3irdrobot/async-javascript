import debug from 'debug';
import http from 'http';
import app from './app';

const { PORT = 7000 } = process.env;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
