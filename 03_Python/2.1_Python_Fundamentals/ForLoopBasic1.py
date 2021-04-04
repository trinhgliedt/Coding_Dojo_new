# 1 Basic - Print all integers from 0 to 150.
for x in range(151):
    print(x)

x = 0;
while x <151:
    print(x)
    x = x+1
#2 Multiples of Five - Print all the multiples of 5 from 5 to 1,000
for x in range(5, 1000, 5):
    print(x)

x = 5
while x < 1001:
    print(x)
    x = x + 5

# 3 Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" 
# instead. If divisible by 10, print "Coding Dojo".
for x in range(1, 101, 1):
    if x%10 == 0:
        print("Coding Dojo")
    elif x%5 == 0:
        print("Coding")
    else: print(x)

# 4 Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
sum = 0
for x in range (1, 500000+1, 2):
    sum = sum + x
print(sum)

# 5 Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
for x in range(2018, 0, -4):
    print(x)

# 6 Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and 
# going through highNum, print only the integers that are a multiple of mult. 
# For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)
#Answer:
#case 1
# lowNum, highNum, mult= -2, 185, 0
#case 1a
# lowNum, highNum, mult= 113, 185, 3
# lowNum, highNum, mult= 2, 185, 30
# lowNum, highNum, mult= 2, 30, 3
# case 1b
# lowNum, highNum, mult= -113, -85, 3
# lowNum, highNum, mult= -2, 185, 30
# lowNum, highNum, mult= -30, 185, 30
# lowNum, highNum, mult= -2, 30, 3

# case 2z:
# lowNum, highNum, mult= 113, 185, -3
# lowNum, highNum, mult= 2, 185, -30
# lowNum, highNum, mult= 2, 30, -3
# case 2b:
# lowNum, highNum, mult= -113, -85, -3
# lowNum, highNum, mult= -2, 30, -3
# lowNum, highNum, mult= -2, 185, -5
def flexible_counter(lowNum, highNum, mult):
    startV = 0;
    import math
    if mult == 0:
        print(mult)
    if mult > 0:
        if lowNum > 0:
            startV = max(int(math.ceil(lowNum/mult))*mult, mult)
        elif lowNum < 0: 
            if abs(lowNum)>abs(mult):
                startV = min(int(math.ceil(lowNum/mult)*mult), -mult)    
            else: 
                startV = max(int(math.ceil(lowNum/mult))*mult, -mult)
        print(f"with lowNum = {lowNum}, highNum = {highNum}, multiple = {mult}")
        for i in range(startV, highNum+1, mult):
                print(i)
    if mult < 0:
        if lowNum > 0:
            startV = max(int(math.floor(lowNum/mult))*mult, mult)
        elif lowNum < 0:
            startV = min(int(math.floor(lowNum/mult)*mult), -mult)   
        print(f"with lowNum = {lowNum}, highNum = {highNum}, multiple = {mult}")
        for i in range(startV, highNum+1, -mult):
                print(i)

flexible_counter(2, 185, 0)   
flexible_counter(113, 185, 3) 
flexible_counter(-113, -85, 3) 
flexible_counter(-113, -85, -3) 
flexible_counter(2, 185, 30) 
flexible_counter(2, 185, -30) 
flexible_counter(-2, 185, -5) 
