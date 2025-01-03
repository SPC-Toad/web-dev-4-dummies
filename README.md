# Web Development for Dummies

## Introduction

**Web Development for Dummies** is a website designed to provide tutorials on HTML, CSS, JavaScript, and React.js. Think of it as a textbook for beginners to help you understand the basics of web development. The website is styled with **Windows XP** theme.

---

## How to Get Started

### Step 1: Clone the Repository

First, open a terminal (or Command Prompt on Windows) and navigate to the directory where you want to download the project. Use the following command to clone the repository:

```bash
git clone https://github.com/SPC-Toad/web-dev-4-dummies.git
```

Step 2: Navigate to the Project Folder
```bash
cd web-dev-4-dummies
```

Step 3: Install Dependencies
Once you're inside the project folder, you need to install all the necessary dependencies. Run the following command:
```bash
npm install
```
This command will download and set up everything you need to run the project.

## How to Upload Your Work to GitHub (IMPORTANT! DOING THIS WRONG MAY LEAD TO SCRAPING THE PROJECT)
Step 1: Create a New Branch
Before making changes, it's best practice to create a new branch for your work. To create and switch to a new branch, use this command:
```bash
git checkout -b <your-branch-name>
```
Replace <your-branch-name> with a descriptive name for your branch. (E.g. hello-world)

Step 2: Commit Your Changes
After making your changes in the code, stage them using:
```bash
git add .
```
Next, commit the changes with a meaningful message:
```bash
git commit -m "HTML tutorial"
```
Make sure your message describes what you’ve done in this commit.

Step 3: Push to Your Branch
Now, you need to upload your changes to the branch you created. Run the following command:
```bash
git push origin <your-branch-name>
```
Again, replace <your-branch-name> with the name of your branch.


## Switch to the Main Branch
To switch back to the main branch, use this command:
```bash
git checkout main
```

## Working on a project
Please 'git pull' if possible to be updated.






# So what am I supposed to do?

You are now going to make a tutorial for your topic. 
- HTML
- CSS
- Javascript
- Python (Kim)
- C (Kim)

## Ok what am I looking at tho?

If you go to src --> components --> Desktop, you will see all the pages and modules folder. 
You have to go to YOUR TOPIC folder (e.g. HTML CSS JS PYTHON Clang) and complete the assignment.

## Where is {topic}.html? Aren't we supposed to have html?

We are using "jsx" file type. This will combine javascript and html into one file.

## Let's break down what we are doing in JSX!

Let's take an example jsx. 
This is snippet of HTML.jsx:
```js
import html from '../../assets/html.png'

function HTML() {
  return (
    <Tab icon={html} title={"Hypertext Markup Language (HTML)"}>
        {/* CODE HERE */}
        {/* THIS IS WHERE HTML GOES */}
    </Tab>
  )
}

export default HTML
```

There is function HTML(). When function HTML is called, then it will return:
```js
<Tab icon={html} title={"Hypertext Markup Language (HTML)"}>
    {/* CODE HERE */}
    {/* THIS IS WHERE HTML GOES */}
</Tab>
```

## Where do we code your javascript?
You code it right between the function and return.
```js
function HTML() {
    // This is where JS code goes
    return (
        // some HTML Tags here
    );
}
```

## What the hell is this language? Is this javascript?

Yes, but not exactly like javascript.
You need to learn react hook. 
Read about react hook's objective.
Then focus on learning "useState" "useEffect" "useRef". These are the most commonly used react hook (you dont really need more than that).

## Question?

Just let me know, we can meet up before class or after. 


