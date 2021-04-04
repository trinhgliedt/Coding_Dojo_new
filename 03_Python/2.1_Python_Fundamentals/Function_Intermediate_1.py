# Assignment: Functions Intermediate I
# Objectives:
# Practice using default parameter values
# Practice passing in named arguments
# Become familiar with Python's random module
# With this concept of default parameters in mind, the goal of this assignment is 
# to write a single function, randInt() that takes up to 2 arguments.

# If no arguments are provided, the function should return a random integer between 0 and 100.
# If only a max number is provided, the function should return a random integer 
# between 0 and the max number.
# If only a min number is provided, the function should return a random integer 
# between the min number and 100
# If both a min and max number are provided, the function should return a random 
# integer between those 2 values.
# Here are a couple of important notes about using random.random() and rounding.
#  (Create this function without using random.randInt() -- we are trying to build that method ourselves for this assignment!)

# random.random() returns a random floating number between 0.000 and 1.000
# random.random() * 50 returns a random floating number between 0.000 and 50.000
# random.random() * 25 + 10 returns a random floating number between 10.000 and 35.000
# round(num) returns the rounded integer value of num
# Here's a little bit of code to get you started, with some test cases and expected outputs. 
# Test each function call one at a time and a few times each to make sure you're getting the correct range.
import random
def randInt(min=0, max=100):
    if max < min:
        print("You provided a max that is smaller than a min. Max will be considered min and this function will return a random number between the two.")
        num = max + round(random.random()*(min-max))
        print(f"random number between min of {max} and max of {min} is {num}")
        return num
    elif (max == 0 and min == 0):
        return 0
    else:
        num = min + round(random.random()*(max-min))
        print(f"random number between min of {min} and max of {max} is {num}")
        return num
print(randInt()) 		    # should print a random integer between 0 to 100
print(randInt(max=50)) 	    # should print a random integer between 0 to 50
print(randInt(min=50)) 	    # should print a random integer between 50 to 100
print(randInt(min=50, max=500))    # should print a random integer between 50 and 500
print(randInt(min=40, max=10))
print(randInt(max=-5)) 
print(randInt(max=0))