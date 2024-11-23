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
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
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
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
    {
      topic: "Props and State",
      code: `
// Class component with state
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

// Explanation:
// State is similar to props, but it is private and fully controlled by the component.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
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
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
    {
      topic: "Conditional Rendering",
      code: `
// Conditional rendering example
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign up.</h1>;
}

// Explanation:
// You can use if statements or conditional operators to render different elements based on conditions.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
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
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
    {
      topic: "Forms",
      code: `
// Handling form data in React
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

// Explanation:
// In React, form data is usually handled by the component's state.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
    {
      topic: "Lifting State Up",
      code: `
// Sharing state between components
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input value={temperature} onChange={this.handleChange} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
        );
    }
}

// Explanation:
// Lifting state up to a common ancestor lets sibling components share data.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
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
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
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
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
    {
      topic: "React Hooks: useContext",
      code: `
// Using the useContext Hook
const ThemeContext = React.createContext('light');

function App() {
    return (
        <ThemeContext.Provider value="dark">
        <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
        <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button theme={theme}>Button with {theme} theme</button>;
}

// Explanation:
// The useContext hook lets you subscribe to React context without introducing nesting.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
    {
      topic: "React Hooks: useReducer",
      code: `
// Using the useReducer Hook
import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        default:
        throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}

// Explanation:
// The useReducer hook is an alternative to useState for complex state logic.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
    {
      topic: "React Hooks: useCallback",
      code: `
// Using the useCallback Hook
import React, { useState, useCallback } from 'react';

function Parent() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log('Clicked!');
    }, []);

    return (
        <div>
        <Child onClick={handleClick} />
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

function Child({ onClick }) {
    console.log('Child rendered');
    return <button onClick={onClick}>Click me</button>;
}

// Explanation:
// useCallback returns a memoized callback to prevent unnecessary re-renders.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
    {
      topic: "React Hooks: useMemo",
      code: `
// Using the useMemo Hook
import React, { useState, useMemo } from 'react';

function ExpensiveComputation(num) {
    console.log('Computing...');
    return num * 2;
}

function App() {
const [number, setNumber] = useState(1);
const [text, setText] = useState('');

const computedValue = useMemo(() => ExpensiveComputation(number), [number]);

return (
        <div>
        <input value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <input value={text} onChange={e => setText(e.target.value)} />
        <p>Computed Value: {computedValue}</p>
        </div>
    );
}

// Explanation:
// useMemo memoizes a computed value, recomputing it only when dependencies change.
      `,
      type: "JavaScript",
      shadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
    },
];

export default codeData