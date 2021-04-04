# Assignment: Selection Sort
# Objectives:
# Execute selection sort
# If you're given a list with a bunch of numbers and you're supposed to sort the numbers 
# (with the smallest number on the left and the largest number on the right), how would you do this? There are numerous sorting algorithms to sort numbers in the list. We'll introduce one of the simplest sorting algorithm called selection sort.

# Selection sort works by iterating through the list, finding the minimum value, 
# and moving it to the beginning of the list. Then, ignoring the first position, 
# which is now sorted, iterate through the list again to find the next minimum value 
# and move it to index 1. This continues until all values are sorted. 
list = [5,2,0,3,4,2,9, -1, -6, -7, -3]
min = list[0]
for k in range(0, len(list), 1):
    if list[k] < min:
        min = list[k]
        list[k], list[0] = list[0], list[k]
    print(list)
for j in range(1, len(list), 1):
    for i in range(j, len(list), 1):
        if list[i] < list[j]:
            list[i], list[j] = list[j], list[i]
    print(list)

# min = list[0]
# for i in range(0, len(list)-1, 1):
#     if list[i] < min:
#         min = list[i]
#         list[i], list[0] = list[0], list[i]
#     print(list)
# for i in range(1, len(list), 1):
#     if list[i] < list[1]:
#         list[i], list[1] = list[1], list[i]
# print(list)
# for i in range(2, len(list), 1):
#     if list[i] < list[2]:
#         list[i], list[2] = list[2], list[i]
# print(list)
# for i in range(3, len(list), 1):
#     if list[i] < list[3]:
#         list[i], list[3] = list[3], list[i]
# print(list)
# for i in range(4, len(list), 1):
#     if list[i] < list[4]:
#         list[i], list[4] = list[4], list[i]
# print(list)