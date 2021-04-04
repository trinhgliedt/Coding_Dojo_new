# 1. TASK: print "Hello World"
print("Hello World")

# 2. print "Hello Noelle!" with the name in a variable
name = "Noelle"
print("Hello: ",name)
print("Hello: "+name)

# 3. print "Hello 42!" with the number in a variable
number = 42
print("Hello: ",number)
#print("Hello: " +number)
number = 42
print("Hello: {} ".format(number))
print("Hello: %s " %(number))
print(f"Hello: {number} ")

# 4. print "I love to eat sushi and pizza." with the foods in variables
#print( your code here ) # with .format()
#print( your code here ) # with an f string
food1 = "sushi"
food2 = "pizza"
print("I love to eat {} and {}.".format(food1,food2))
print("I love to eat %s and %s."%(food1,food2))
print(f"I love to eat {food1} and {food2}.")  


x = 10
if x > 50:
    print("bigger than 50")
else:
    print("smaller than 50")

class EmptyClass:
    
for val in my_string:
    pass