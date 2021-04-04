#8/3/2020
# Hi, my name is Morley Tatro, and I have been coding seriously for 8 years.
# The other day, I was hoping to buy toilet paper, and I went to 3 stores: Ralphs, CVS, and Walgreens.
# Unfortunately, I wasn't able to find any. Instead, I bought the following 2 items:
# 6 bananas, at a price of .25, for a total of 1.50; it was cheap
# 1 carrot bag, at a price of 2, for a total of 2; it was expensive
# The total for everything was 3.50

first_name = "Quinn"
last_name = "Forman"
years_coding = 1

# string interpolation
my_str = f"Hi, my name is {first_name} {last_name}, and I have been coding seriously for {years_coding} years."

items = [
    "chili peppers", # 0
    "avocadoes", # 1
    "cilantro" # 2
]

items_length = len(items)

# string interpolation
my_str += f" This weekend, I was looking to buy {items_length} items: "

# for item in items:
#     pass
#     my_str += item + ", "

for i in range(items_length):
    # print(items[i])
    if i < items_length - 1:
        # string concatenation
        my_str += items[i] + ", "
    else:
        # string concatenation
        my_str += "and " + items[i] + "."

# another list of strings
stores = [
    "PCC",
    "Haggins"
]

my_str += f" I went to {stores[0]} and {stores[1]}."

# a list of 3 dictionaries
# each dictionary is just a set of key/value pairs
items_bought = [
    {
        "name": "guacamoles",
        "price": 499,
        "quantity": 2
    },
    {
        "name": "cilantro",
        "price": 350,
        "quantity": 1
    },
    {
        "name": "bag of rice",
        "price": 549,
        "quantity": 1
    },
]

print(items_bought[1]["quantity"]) # prints the quantity of the second item

def create_item_string(item):
    total = (item['quantity'] * item['price']) / 100
    # print(item)
    return f"{item['quantity']} {item['name']} at a price of ${item['price'] / 100} for a total of ${total}", total

my_str += " I bought "

items_bought_length = len(items_bought)

sum_total = 0

for i in range(items_bought_length):
    item_str, item_total = create_item_string(items_bought[i])

    # adding sum_total and item_total and reassigning sum_total to the result
    sum_total += item_total

    if i < items_bought_length - 1:
        # if we're in front of the last item, do this
        my_str += item_str + ", "
    else:
        # otherwise, do this
        my_str += "and " + item_str


    # print(i)

my_str += f" The total for everything was ${sum_total}."

print(my_str)

# creating a variable and assigning it to the first dictionary in the list
first_item = items_bought[0]

# simple way to loop through a dictionary
for k, v in first_item.items():
    print(k, v)

# loop through all the keys
for key in first_item.keys():
    print(key)

# loop through all the values
for value in first_item.values():
    print(value)

print(first_item["price"])