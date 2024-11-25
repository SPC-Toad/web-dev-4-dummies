import React from 'react';
import './C.css';
import Tab from '../modules/Tab/Tab';

import c from '../../assets/c.png';
import grass from '../../assets/texture-grass-field.jpg';

import Code from '../modules/Code/Code';
import Cube from '../modules/Cube/Cube';

const codeData = [
  {
    topic: "Structure: Every C program has a main function, which is the entry point for execution.",
    code: `
      #include <stdio.h>  // Standard Input Output Library

      int main() {
          printf("Hello, World!\\n");  // Prints to console
          return 0;  // Indicates successful execution
      }
    `,
    type: "C Language",
    shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
  },
  {
    topic: "Variables: C has several data types: int, float, char, etc.",
    code: `
      int age = 23;
      float salary = 5000.50;
      char initial = 'A';
    `,
    type: "C Language",
    shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
  },
  {
    topic: "Control Statements: Use if-else and loops for control flow.",
    code: `
      // If else statement
      if (age > 18) {
        printf("Adult\\n");
      } else {
        printf("Minor\\n");
      }
      // For loop
      for (int i = 0; i < 5; i++) {
        printf("%d\\n", i);  // Prints numbers 0 to 4
      }
    `,
    type: "C Language",
    shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
  },
  {
    topic: "Functions: Define reusable blocks of code.",
    code: `
      int add(int a, int b) {
          return a + b;
      }

      int sum = add(5, 3);  // sum will be 8
    `,
    type: "C Language",
    shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
  },
  {
    topic: "Pointers: Pointers store memory addresses, adding flexibility.",
    code: `
      int num = 10;
      int *p = &num;  // p now holds the address of num
    `,
    type: "C Language",
    shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
  },
  {
    topic: "Arrays: Store collections of data in a single variable.",
    code: `
      int numbers[5] = {1, 2, 3, 4, 5};
    `,
    type: "C Language",
    shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
  },
  {
    topic: "Structures: Used to group different data types.",
    code: `
      struct Person {
          char name[50];
          int age;
      };

      struct Person person1 = {"Alice", 30};
    `,
    type: "C Language",
    shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
  },
  {
    topic: "Compiling and Running",
    code: `
      gcc myprogram.c -o myprogram
      ./myprogram
    `,
    type: "Compiler",
    shadow: "0px 4px 10px rgba(255, 0, 0, 0.5)"
  },
];


function C() {
  return (
    <Tab icon={c} title={"C language"}>
      <div id="c-container">
        <div id="c-title">Basics of C Language</div>
        <Cube image={grass}/>
        <ol id="c-ol-container">
          {codeData.map((item, index) => (
            <li key={index} id="c-li-container">
              <div id="c-li-text">{item.topic}</div>
              <Code
                type={item.type}
                code={item.code}
                shadow={item.shadow}
              />
            </li>
          ))}
        </ol>
      </div>
    </Tab>
  );
}

export default C;
