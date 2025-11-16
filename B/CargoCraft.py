import sys

def value(n: int) -> int:
    # Filter odd n values case first, as they cannot be formed by 4 and 6 crafts
    if n % 2 != 0:
        return -1
    
    # Filter n = 2 case which the only even number that cannot be formed by 4 and 6 crafts
    if n == 2:
        return -1
    
    # Simplify the forumula by dividing the equation 4a + 6b = n by 2
    # As n must be even, we can divide it by 2 without remainder
    m = n / 2

    # Calculate minimum number of crafts (min type a 4-crafts and max type b 6-crafts)
    # Calculating max 6-crafts first by m // 3 and then check the remainder parity is the same between m and 6-crafts. If the parity is not the same, reduce 6-crafts by 1 to make the remainder even. Finally, calculate min 4-crafts by (m - 3 * max 6-crafts) / 2
    b = m // 3
    if (m - b) % 2 == 0:
        b_max = b
    else:
        b_max = b - 1
    a_min = (m - 3 * b_max) / 2
    min_value = int(a_min + b_max)

    # Calculate Maximum number of crafts (max type a 4-crafts and min type b 6-crafts)
    # b_min can only be 0 or 1. if n is even b_min = 0, a_max = m/2; else b_min = 1, a_max = (m-3)/2
    b_min = m % 2
    a_max = (m - 3 * b_min) // 2
    max_value = int(a_max + b_min)
    return min_value, max_value

def main():
    # Check for command line arguments
    if len(sys.argv) > 1:
        t = int(sys.argv[1])
        args = sys.argv[2:]
        # Check for correct number of arguments
        if len(args) != t:
            print(f"Error: Invalid number of arguments. Expected {t + 1} but got {len(args) + 1} arguments.")
            sys.exit(1)
        for i in range(t):
            n = int(args[i])
            result = value(n)
            if result == -1:
                print(-1)
            else:
                print(result[0], result[1])
    # No command line arguments, read from standard input
    else:
        t = int(input())
        for n in range(t):
            n = int(input())
            result = value(n)
            if result == -1:
                print(-1)
            else:
                print(result[0], result[1])

if __name__ == "__main__":
    main()