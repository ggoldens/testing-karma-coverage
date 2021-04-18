describe('calculator.js', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should start with total as zero', () => {
    expect(calculator.total).toBe(0);
  });

  it('should add numbers to total', () => {
    calculator.add(55);
    calculator.add(15);
    expect(calculator.total).toBe(70);
  });

  it('should substract numbers to total', () => {
    calculator.add(55);
    calculator.subtract(5);
    expect(calculator.total).toBe(50);
  });

  it('should multiply numbers to total', () => {
    calculator.add(10);
    calculator.multiply(3);
    expect(calculator.total).toBe(30);
  });

  it('should divide numbers to total', () => {
    calculator.add(10);
    calculator.divide(2);
    expect(calculator.total).toBe(5);
  });

  it('should throw an error when dividing by 0', () => {
    expect(calculator.divide.bind(null, 0)).toThrowError('Can not divide by zero.');
  });

});

