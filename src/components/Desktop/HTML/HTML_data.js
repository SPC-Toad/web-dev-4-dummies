const html_data = [ 
    {
        title: "Basic Structure",
        subtext: "Every HTML document follows this structure:",
        code: `
        <!DOCTYPE html>
            <html>
            <head>
            <title>My First Page</title> <!-- Page Title -->
            </head>
            <body>
            <h1>Welcome to My Page!</h1>
            <p>This is a paragraph.</p>
            </body>
        </html>
        `,
        shadow: '0px 2px 10px rgba(0, 0, 225, 0.8)'
    },
    {
        title: "Common Tags",
        subtext: "Tags you will see throughout a HTML page:",
        code: `
        Heading: 
        <h1>Main Heading</h1>
        <h2>Subheading</h2>
        <h3>Smaller Heading</h3>

        Paragraphs: 
        <p>This is a paragraph of text.</p>

        Links and images: 
        <a href="https://example.com">Visit Example</a>
        <img src="image.jpg" alt="Description of the image">
        `,
        shadow: '0px 2px 10px rgba(0, 0, 225, 0.8)'
    },
    
    {
        title: "Lists",
        subtext: "Ordered and unordered lists:",
        code: `
        <ol>
            <li>First Item</li>
            <li>Second Item</li>
        </ol>

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        `,
        shadow: '0px 2px 10px rgba(0, 0, 225, 0.8)'
    },

    {
        title: "Tables",
        subtext: "Can have headers within it and shows data:",
        code: `
        <table>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
        </table>
        `,
        shadow: '0px 2px 10px rgba(0, 0, 225, 0.8)'
    },

    {
        title: "Attributes",
        subtext: "Attributes add extra information to elements",
        code: `
       <a href="https://example.com" target="_blank">Open Link in New Tab</a>
        `,
        shadow: '0px 2px 10px rgba(0, 0, 225, 0.8)'
    },

]

export default html_data
