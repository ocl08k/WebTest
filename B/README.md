# Question B – CargoCraft Fleet

## Description
This program calculates the minimum and maximum possible number of crafts. User needs to input integer `t (1 ≤ t ≤ 100)` which is the number of test cases.
Each of the following case contains integer `n` `(1 ≤ x, n ≤ 10¹⁸)`. For each case, a line containing two integers x and y will be outputed. They are the minimum and maximum possible number of crafts. If there is no solution, output - 1.

### Implementation Details
The solution uses a constant-time O(1) formula:

1. **Filter impossible case**
- If n is odd → impossible
- If n = 2 → impossible

2. **Compute minimum crafts:**
- Maximize Type A crafts → minimize Type B crafts.

3. **Compute maximum crafts:**
- Maximize Type B crafts → minimize Type A crafts.

## Setup

### Prerequisites

- Python 3.12.2

## How to Run
This program supports two ways to provide input:

### Standard Input(default)
Navigate to the folder and run:
```bash
python main.py
```
The enter the input values `t` and `x` and results will be printed

### Command-Line Arguments
You can also provide all input as command-line arguments.
```bash
python3 main.py t x1 x2 ... xt
```