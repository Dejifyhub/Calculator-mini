# Clean Calculator

A modern, responsive calculator built with HTML, CSS, and JavaScript using switch case expressions for arithmetic operations.

![Calculator Preview](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Features

### Core Functionality
- ✨ Basic arithmetic operations (addition, subtraction, multiplication, division)
- 🔢 Modulo operation for remainders
- 🎯 Decimal number support
- 🚫 Division by zero error handling
- ⌨️ Full keyboard support
- 🔙 Backspace/delete last character
- 🧹 Clear all function

### User Interface
- 🎨 Modern gradient design
- 📱 Responsive layout
- 💫 Smooth button animations
- 🖱️ Hover effects
- 📺 Large, readable display

## Technical Implementation

### Switch Case Expression
The calculator uses a **switch case** structure for all arithmetic operations, providing clean and maintainable code:

```javascript
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
        result = prev / current;
        break;
    case '%':
        result = prev % current;
        break;
}
```

## How to Use

### Getting Started
1. Download or clone the `calculator.html` file
2. Open the file in any modern web browser
3. Start calculating!

### Mouse Controls
- **Number buttons (0-9)**: Enter digits
- **Decimal point (.)**: Add decimal numbers
- **Operators (+, -, ×, /, %)**: Perform operations
- **Equals (=)**: Calculate result
- **C button**: Clear everything
- **← button**: Delete last character

### Keyboard Controls
| Key | Action |
|-----|--------|
| `0-9` | Enter numbers |
| `.` | Decimal point |
| `+` `-` `*` `/` `%` | Operators |
| `Enter` or `=` | Calculate result |
| `Escape` or `C` | Clear display |
| `Backspace` | Delete last character |

## Code Structure

### HTML
- Semantic structure with calculator container
- Display area for showing numbers and results
- Button grid layout for input

### CSS
- Grid layout for responsive button arrangement
- Custom color schemes for different button types
- Gradient background with modern aesthetics
- Smooth transitions and hover effects

### JavaScript
The calculator uses a state-based approach with the following variables:
- `currentValue`: The number currently being entered or displayed
- `previousValue`: The first operand in calculations
- `operation`: The current arithmetic operation
- `shouldResetDisplay`: Flag to determine if the display should be cleared on next input

### Key Functions
- `appendNumber(num)`: Adds digits to current value
- `appendOperator(op)`: Sets the operation and prepares for next input
- `calculate()`: Executes the operation using switch case
- `clearDisplay()`: Resets calculator to initial state
- `deleteChar()`: Removes last character from current value
- `updateDisplay()`: Updates the display with current value

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

## File Information

- **Single file application**: Everything is contained in one HTML file
- **No dependencies**: Pure vanilla JavaScript, no libraries required
- **File size**: Lightweight (~4KB)
- **Offline capable**: Works without internet connection

## Customization

### Changing Colors
Modify the CSS color values:
```css
/* Operator buttons */
.operator {
    background: #ff9500;  /* Change this */
}

/* Background gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding New Operations
Add a new case to the switch statement:
```javascript
case '^':  // Power operation
    result = Math.pow(prev, current);
    break;
```

## Error Handling

The calculator includes error handling for:
- Division by zero (displays "Error")
- Multiple decimal points in a single number (prevented)
- Invalid operations (gracefully handled)

## Future Enhancements

Potential features to add:
- Scientific calculator functions (sin, cos, tan, etc.)
- Memory functions (M+, M-, MR, MC)
- History of calculations
- Theme switcher (dark/light mode)
- Calculation history
- Copy result to clipboard

## License

This project is open source and available for personal and commercial use.

## Author

Created as a clean, educational example of a calculator using switch case expressions.

---

**Enjoy calculating!** 🧮
