# Assignment: For Loop Basic II
# Objectives:
# Get comfortable writing functions only using basic building blocks of Python 
# (i.e. using your own skills rather than relying on built-ins)
# Get comfortable using for loops, functions, lists, and other data types

# 1. Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
def biggie(list):
    for i in range (len(list)):
       if list[i] > 0:
           list[i] = "big"
    return list
print(biggie([-1,2,3,4,5,-6,0,-1]))

# 2. Count Positives - Given a list of numbers, create a function to replace the last value with 
# the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
def countPos(list):
    count = 0
    for i in range(len(list)):
        if list[i]  >0:
            count = count + 1
    list[len(list)-1] = count
    return list
print(countPos([-5,2,-3,-4,1]))

# 3. Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7
def sumTotal(list):
    sum = 0
    for i in range (len(list)):
      sum = sum + list[i]  
    return sum
print(sumTotal([2,3,1,5]))


#4.  Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5
def average(list):
    sum = 0
    for i in range (len(list)):
      sum = sum + list[i]  
    return sum/len(list)
print(average([2,3,1,5]))

# 5. Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0
def length(list):
    return len(list)
print(length([2,3,1,5,9,7]))

# 6. Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. 
# If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False
def minimum(list):
    if len(list)==0:
        return False
    else:
        min = list[0]
        for i in range (len(list)):
            if list[i] < min:
                min = list[i]
        return min
print(minimum([-5,2,3,5,7,0]))
print(minimum([5,2,-3,5,7,0]))
print(minimum([1]))
print(minimum([]))

# 7. Maximum - Create a function that takes a list and returns the maximum value in the list. 
# If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False
def maximum(list):
    if len(list)==0:
        return False
    else:
        max = list[0]
        for i in range (len(list)):
            if list[i] > max:
                max = list[i]
        return max
print(maximum([-5,2,3,5,7,0]))
print(maximum([5,2,-3,5,7,0]))
print(maximum([1]))
print(maximum([]))

# 8. Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the 
# sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) 
# should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }
def utimateAnalysis(list):
    if len(list)==0:
        return False
    else:
        sum = 0
        avg = 0
        newDict={}
        min = list[0]
        max = list[0]
        for i in range (len(list)):
            
            sum += list[i]
            if list[i] >= max:
                max = list[i]
            if list[i] <= min:
                min = list[i]
        avg = sum/len(list)
        newDict['sumTotal'] = sum
        newDict['average'] = avg
        newDict['mimimum'] = min
        newDict['maximum'] = max
        newDict['length'] = len(list)
        return newDict
print(utimateAnalysis([37,2,1,-9]))

# 9. Reverse List - Create a function that takes a list and return that list with values reversed. 
# Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
def reverseList(list):
    for i in range(int(len(list)/2)+1):
        temp = list[i]
        list[i] = list[len(list)-1-i]
        list[len(list)-1-i] = temp
    return list
print(reverseList([-9,1,2,37]))

def reverseList(list):
    list.reverse()
    return list
print(reverseList([-9,1,2,37]))