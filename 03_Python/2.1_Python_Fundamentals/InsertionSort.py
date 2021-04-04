# Insertion Sort
# Objectives:
# Execute insertion sort
# Build an algorithm for insertion sort. Please watch the video here to understand how 
# insertion sort works and implement the code. Basically, this sort works by starting at index 1, 
# shifting that value to the left until it is sorted relative to all values to the left, 
# and then moving on to the next index position and performing the same shifts until 
# the end of the list is reached. The following animation also shows how insertion sort is done.
# list = [5,3,1,2,9,7,1,-2]
list = [9,1,7,6,3,1,4,6,0,-1,-9]
for j in range (len(list)):
    for k in range(0, j, 1):
        for i in range (0, j, 1):
            if list[i] > list[i+1]:
                list[i+1], list[i] = list[i], list[i+1]
print(list)
# for i in range (0, 0, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# # i = 0: [5,3,1,2,9,7,1,-2] --> [3,5,1,2,9,7,1,-2]
# for i in range (0, 1, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# # i = 0: [3,5,1,2,9,7,1,-2] --> [3,5,1,2,9,7,1,-2]
# # 1 = 1: [3,5,1,2,9,7,1,-2] --> [3,1,5,2,9,7,1,-2]
# for i in range (0, 1, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# # i = 0: [3,1,5,2,9,7,1,-2] --> [1,3,5,2,9,7,1,-2]
# # i = 1: [1,3,5,2,9,7,1,-2] --> [1,3,5,2,9,7,1,-2]
# for i in range (0, 2, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# # i = 0: [1,3,5,2,9,7,1,-2] --> [1,3,5,2,9,7,1,-2] 
# # i = 1: [1,3,5,2,9,7,1,-2]  --> [1,3,5,2,9,7,1,-2] 
# # i = 2: [1,3,5,2,9,7,1,-2]  --> [1,3,2,5,9,7,1,-2] 
# for i in range (0, 2, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# # i = 0: [1,3,2,5,9,7,1,-2] --> [1,3,2,5,9,7,1,-2]
# # i = 1: [1,3,2,5,9,7,1,-2]  --> [1,2,3,5,9,7,1,-2] 
# # i = 2: [1,2,3,5,9,7,1,-2] --> [1,2,3,5,9,7,1,-2]
# for i in range (0, 2, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# # i = 0: [1,3,2,5,9,7,1,-2] --> [1,3,2,5,9,7,1,-2]
# # i = 1: [1,3,2,5,9,7,1,-2]  --> [1,2,3,5,9,7,1,-2] 
# # i = 2: [1,2,3,5,9,7,1,-2] --> [1,2,3,5,9,7,1,-2]
# for i in range (0, 3, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# # i = 0: [1,2,3,5,9,7,1,-2] --> [1,2,3,5,9,7,1,-2]
# # i = 1: [1,2,3,5,9,7,1,-2] --> [1,2,3,5,9,7,1,-2]
# # i = 2: [1,2,3,5,9,7,1,-2] --> [1,2,3,5,9,7,1,-2]
# # i = 3: [1,2,3,5,9,7,1,-2] --> [1,2,3,5,9,7,1,-2]
# for i in range (0, 3, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 4, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 4, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 4, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 4, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 5, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 5, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 5, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 5, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 5, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 6, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 6, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 6, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 6, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 6, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 6, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 7, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 7, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 7, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 7, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 7, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 7, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# for i in range (0, 7, 1):
#     if list[i] > list[i+1]:
#         list[i+1], list[i] = list[i], list[i+1]
# # for i in range (0, 7, 1):
# #     if list[i] > list[i+1]:
# #         list[i+1], list[i] = list[i], list[i+1]
# print(list)