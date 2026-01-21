  let display = document.getElementById('display');
        let currentValue = '0';
        let previousValue = '';
        let operation = null;
        let shouldResetDisplay = false;

        function updateDisplay() {
            display.textContent = currentValue;
        }

        function clearDisplay() {
            currentValue = '0';
            previousValue = '';
            operation = null;
            shouldResetDisplay = false;
            updateDisplay();
        }

        function deleteChar() {
            if (currentValue.length > 1) {
                currentValue = currentValue.slice(0, -1);
            } else {
                currentValue = '0';
            }
            updateDisplay();
        }

        function appendNumber(num) {
            if (shouldResetDisplay) {
                currentValue = num;
                shouldResetDisplay = false;
            } else {
                if (num === '.' && currentValue.includes('.')) {
                    return;
                }
                currentValue = currentValue === '0' && num !== '.' ? num : currentValue + num;
            }
            updateDisplay();
        }

        function appendOperator(op) {
            if (operation !== null && !shouldResetDisplay) {
                calculate();
            }
            
            previousValue = currentValue;
            operation = op;
            shouldResetDisplay = true;
        }

        function calculate() {
            if (operation === null || shouldResetDisplay) {
                return;
            }

            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);
            let result;

            switch(operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        currentValue = 'Error';
                        updateDisplay();
                        operation = null;
                        shouldResetDisplay = true;
                        return;
                    }
                    result = prev / current;
                    break;
                case '%':
                    result = prev % current;
                    break;
                default:
                    return;
            }

            currentValue = result.toString();
            operation = null;
            shouldResetDisplay = true;
            updateDisplay();
        }

        
        document.addEventListener('keydown', (e) => {
            if (e.key >= '0' && e.key <= '9' || e.key === '.') {
                appendNumber(e.key);
            } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
                appendOperator(e.key);
            } else if (e.key === 'Enter' || e.key === '=') {
                e.preventDefault();
                calculate();
            } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
                clearDisplay();
            } else if (e.key === 'Backspace') {
                deleteChar();
            }
        });