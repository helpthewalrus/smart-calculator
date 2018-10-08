class SmartCalculator {
  constructor(initialValue) {
    this.numbers = [initialValue];
    this.operators = [];
  }

  add(number) {
    if (this.operators.length === 0) {
      this.operators.push('+');
      this.numbers.push(number);
    } else if (['+', '-', '*', '/', ''].includes(this.operators[this.operators.length-1])) {
      let number_1 = this.numbers.pop();
      let number_2 = this.numbers.pop();
      let operator = this.operators.pop();
      this.numbers.push(this.count(operator, number_2, number_1));
      this.numbers.push(number);
      this.operators.push('+');
    } 
    return this;
  }
  
  subtract(number) {
    if (!this.operators.length) {
      this.operators.push('-');
      this.numbers.push(number);
    } else if (['+', '-', '*', '/', ''].includes(this.operators[this.operators.length-1])) {
      let number_1 = this.numbers.pop();
      let number_2 = this.numbers.pop();
      let operator = this.operators.pop();
      this.numbers.push(this.count(operator, number_2, number_1));
      this.numbers.push(number);
      this.operators.push('-');
    } 
    return this; 
  }

  multiply(number) {
    if (!this.operators.length || ['+', '-'].includes(this.operators[this.operators.length-1])) {
      this.operators.push('*');
      this.numbers.push(number);
    } else if (['*', '/', ''].includes(this.operators[this.operators.length-1])) {
      let number_1 = this.numbers.pop();
      let number_2 = this.numbers.pop();
      let operator = this.operators.pop();
      this.numbers.push(this.count(operator, number_2, number_1));
      this.numbers.push(number);
      this.operators.push('*');
    } 
    return this;
  }

  devide(number) {
    if (!this.operators.length || ['+', '-'].includes(this.operators[this.operators.length-1])) {
      this.operators.push('/');
      this.numbers.push(number);
    } else if (['*', '/', ''].includes(this.operators[this.operators.length-1])) {
      let number_1 = this.numbers.pop();
      let number_2 = this.numbers.pop();
      let operator = this.operators.pop();
      this.numbers.push(this.count(operator, number_2, number_1));
      this.numbers.push(number);
      this.operators.push('/');
    }
    return this;  
  }

  pow(number) {
    let number_1 = number;
    let number_2 = this.numbers.pop();
    this.numbers.push(this.count('', number_2, number_1));
    return this;
  }

  count(operator, x, y) {
    switch(operator) {
      case '+':
        return x + y
        break;
      case '-':
        return x - y
        break;
      case '*':
        return x * y
        break;
      case '/':
        return x / y
        break;
      case '':
        return x ** y
        break;
    }
  }

  valueOf() {
    let result = 0;
    let number_1;
    let number_2;
    let operator;
    while (this.operators.length) {    
      number_1 = this.numbers.pop();
      number_2 = this.numbers.pop();
      operator = this.operators.pop()
      result = this.count(operator, number_2, number_1)
      this.numbers.push(result);
    }
  
  return result
  }
}

module.exports = SmartCalculator;
