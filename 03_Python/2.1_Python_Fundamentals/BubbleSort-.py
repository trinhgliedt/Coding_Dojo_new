def bubbleSort(list):
    for j in range (len(list) - 1):
        for i in range (len(list)-1-j):
            if list[i] > list [i+1]:
                list[i], list[i+1] = list[i+1], list[i]
    return list
        
print(bubbleSort([5, 1, 4, 2, 8]))