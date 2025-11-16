# Question A – Mystic Waves

## Description
This program calculates the total energy after all `n` waves. The energy alternates between `x` and `−x`, starting with `x`. User needs to input integer `t (1 ≤ t ≤ 100)` which is the number of test cases.
Each of the following case contains two integers `x` and `n` `(1 ≤ x, n ≤ 10)`. For each case, a single integer will be outputed

### Implementation Details
- If `n` is a even number, the total energy is `0` (`x` and `-x` cancel each other).  
- If `n` is a odd number, the total energy is `x` (one positive wave remains).

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
The enter the input values and results will be printed

### Command-Line Arguments
You can also provide all input as command-line arguments.
```bash
python3 main.py t x1 n1 x2 n2 ... xt nt
```