const python_data = [
    {
        title: "Basic Concepts of Python",
        subtext: "Variables and Data TypesPython uses variables to store information, which can be of various data types:",
        code: ` name = "John"  # String
                  age = 25        # Integer
                  height = 5.9    # Float
                  is_student = True  # Boolean
        `
    },
    {
        title: "Control Flow (Conditionals and Loops)",
        subtext: "Python supports conditional statements and loops to control the program flow:",
        code: `if age > 18:
              print("You are an adult.")
          else:
              print("You are a minor.")

          for i in range(5):
              print(i)  # Prints numbers from 0 to 4
        `
    },
    {
        title: "Loops:",
        subtext: "A for loop iterates over a sequence (like a list or range) and executes code for each element. This makes it useful for repetitive tasks.",
        code: ` numbers = [1, 2, 3, 4, 5]
              total = 0
              for num in numbers:
                  total += num
              print(f"The sum is: total")  # Output: The sum is: 15
        `
    },
    {
        title: "Recursion:",
        subtext: "is a technique where a function calls itself to solve a problem. It is commonly used for problems that can be broken down into smaller, similar sub-problems.",
        code: `def factorial(n):
              if n == 1:
                  return 1
              else:
                  return n * factorial(n - 1)

          print(factorial(5))  # Output: 120 (5 * 4 * 3 * 2 * 1)
        `
    },
    {
        title: "Data Structures:",
        subtext: "Python provides built-in data structures like lists, tuples, and dictionaries:",
        code: `fruits = ["apple", "banana", "cherry"]  # List
coordinates = (10, 20)                    # Tuple
student = &#123;"name": "John", "age": 25&#125;    # Dictionary
        `
    },
    
]

export default python_data