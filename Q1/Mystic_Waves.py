import sys

# Function to determine output based on n is odd or even
# If n is odd, return x; if n is even, return 0
def value(x: int, n: int) -> int:
    return x if n % 2 else 0

def main():
    # Check for command line arguments
    if len(sys.argv) > 1:
        t = int(sys.argv[1])
        args = sys.argv[2:]
        # Check for correct number of arguments
        if len(args) != t * 2:
            print(f"Error: Invalid number of arguments. Expected {t * 2 + 1} but got {len(args) + 1} arguments.")
            sys.exit(1)
        for i in range(t):
            x = int(args[2 * i])
            n = int(args[2 * i + 1])
            result = value(x, n)
            print(result)
    # No command line arguments, read from standard input
    else:
        t = int(input())
        for n in range(t):
            x, n = map(int, input().split())
            result = value(x, n)
            print(result)

if __name__ == "__main__":
    main()