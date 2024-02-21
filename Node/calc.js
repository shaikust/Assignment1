const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Simple Calculator</h1>
    <form action="/calculate" method="post">
      <input type="number" name="num1" placeholder="Enter first number" required>
      <select name="operation">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" name="num2" placeholder="Enter second number" required>
      <button type="submit">Calculate</button>
    </form>
  `);
});

app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operation = req.body.operation;

  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation';
  }

  res.send(`<h1>Result: ${result}</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
