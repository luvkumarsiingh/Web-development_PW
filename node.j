Task 1:const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Students!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
Task 2:const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Content successfully written to output.txt');
    }
  });
});

Task 3:const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

Task 4:const os = require('os');

console.log('Operating System:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('Uptime:', os.uptime());

Task 5:const path = require('path');

const filePath = '/users/documents/file.txt';

console.log('Directory Name:', path.dirname(filePath));
console.log('File Name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Parsed Path:', path.parse(filePath));
console.log('Join Paths:', path.join('/users', 'documents', 'file.txt'));

Task 6:const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
      
      let result;
      switch (operation) {
        case 'add':
          result = number1 + number2;
          break;
        case 'subtract':
          result = number1 - number2;
          break;
        case 'multiply':
          result = number1 * number2;
          break;
        case 'divide':
          result = number1 / number2;
          break;
        default:
          console.log('Invalid operation');
          rl.close();
          return;
      }
      
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});

