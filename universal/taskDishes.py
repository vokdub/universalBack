n, a, b, MAX = map(int, input().split())
i = 1


def maxNoize(n, a, b, MAX, i):
    if a+a*b > MAX or i == n:
        return i
    else:
        return maxNoize(n, a+a*b, b, MAX, i+1)


print(maxNoize(n, a, b, MAX, i))
