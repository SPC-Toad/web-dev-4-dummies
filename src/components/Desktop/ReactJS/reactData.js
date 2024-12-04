const codeData = [
    {
      topic: "Introduction to React Components",
      code: `
// A simple functional component
import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Explanation:
// This is a simple React component defined as a function.
// It receives props and returns JSX.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(255, 0, 0, 0.5)"
    },
    {
      topic: "JSX Syntax",
      code: `
// Using JSX to render elements
const element = <h1>Hello, world!</h1>;

// Explanation:
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without using createElement().
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(255, 0, 0, 0.5)"
    },
    {
      topic: "Handling Events",
      code: `
// Handling events in React
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make 'this' work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        );
    }
}

// Explanation:
// In React, events are named using camelCase, and you pass a function as the event handler.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(255, 0, 0, 0.5)"
    },
    {
      topic: "Lists and Keys",
      code: `
// Rendering a list of items
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>
);

// Explanation:
// Keys help React identify which items have changed, are added, or are removed.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(255, 0, 0, 0.5)"
    },
    {
        topic: "React Hooks: useEffect",
        code: `
  // Using the useEffect Hook
  import React, { useState, useEffect } from 'react';
  
  function Example() {
      const [count, setCount] = useState(0);
  
      // Similar to componentDidMount and componentDidUpdate
      useEffect(() => {
          // Update the document title using the browser API
          document.title = \`You clicked \${count} times\`;
      });
  
      return (
          <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
              Click me
          </button>
          </div>
      );
  }
  
  // Explanation:
  // The useEffect hook lets you perform side effects in functional components.
        `,
        type: "JavaScript",
        shadow: "0px 4px 10px rgba(255, 0, 0, 0.5)"
    },
    {
      topic: "React Hooks: useState",
      code: `
// Using the useState Hook
import React, { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );
}

// Explanation:
// The useState hook lets you add state to functional components.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(255, 0, 0, 0.5)"
    },
];

export default codeData