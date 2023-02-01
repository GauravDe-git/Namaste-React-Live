# Namaste React - Theory Assignments 

## Chapter 01 - Inception

### Q1. What is Emmet?
A. Emmet is a tool that helps developers/programmers to write code more efficiently. It's a plugin that comes by default with most popular text editors like Atom, Sublime Text and Visual Studio Code. It also comes pre-installed in platforms like codepen.

It allows the users to use shorthand abbreviations / shortcuts to create HTML, CSS and other languages. It can save alot of time as it automatically expands those shortcuts into full codes. Emmet also has alot of other features such as automatic numbering, dynamic tag & attribute name expansion and balance related actions. All of this makes it a popular choice among web developers , simplifying the process of writing and editing code.

Emmet can also be installed as an extension from : [Emmet.io](https://emmet.io/download/)

#### Tip to Enable Emmet in React in VsCode :
* Press Ctrl + Shift + P to open the command pallete and search for user settings.
* Search for 'Emmet' in the user settings.
* Look for 'Included Languages'
* In the key add "javascript" and under value add "javascriptreact".
* Add item and now Emmet will work in JSX/JS files.

### Q2. Difference between a Library and a Framework?
A. A library and a framework are both sets of pre-written code that can be used to perform specific tasks, but they have some key differences.

Library is a collection of reusable functions that can be used in our code when we need it. Most languages have their own 'standard library' but we write our own custom library with functions that are helpful for our specific needs, i.e. functions which are reused alot.

On the other hand, framework is usually a collection of libraries that work together to serve a greater purpose. It specifically tells developers what they need.

The key difference between them is the "Inversion of Control". With a library, you are in-charge of the code, i.e. you decide where and when you want to plug the library into your code. While with a Framework, it is in charge instead; i.e. the framework tells you where you want to plug your code in the framework.

A framework dictates how we develop our applications, whereas a library is like an API that we can call when we need to.

### Q3. What is CDN? Why do we use it?
A. A Content Delivery Network (CDN for short) is a system of servers that are located in various locations around the glove, and they are used to deliver content to users based on their geographic location. CDN is designed to improve the performance and availability of websites and other online applications by reducing the distance between the content and the end user. 

Essentially, CDN stores a copy of our website's content on a network of servers located in various locations around the world. When a user accesses our website, the CDN will deliver the content from the server that is closest to the user, which can significantly reduce the load times of the webpage. 

Thus, the main reasons that we use it is because it provides a good user experience and customer satisfaction due to the low load times. It also helps to reduce the load on the origin server, to improve overall performance and stablity of the website.

### Q4. Why is React known as React?
A. React, a JavaScript Library for building user interfaces was named React because of its ability to "react" to changes in the underlying data. It is designed to efficiently update and redner components in response to changes in the application's data. It does this by using a "virtual DOM" that allows it to make efficient updates to the user interface without having to re-render the entire page.

The modern version of React (currently at version 18), uses functional components with unique functions called "hooks" to make those efficient state changes and updating of the browser dom.

The name "React" was chosen to reflect this key feature of the library. The name also implies the fast and responsive nature of the library.

### Q5. What is cross origin in Script tag?
A. Cross-Origin attribute in the script tag is used to indicate that the script is being loaded from a different domain than the current webpage. Adding this attribute causes the browser to send a CORS (Cross-Origin-Resource-Sharing) request to the server to check if the server is willing to accept requests from the current origin. The server can then send a CORS header, such as "Access-Control-Allow-Origin" to let the script load.

There are two values for the crossorigin attribute which are: "anonymous" and "use-credentials". These specify whether or not the server will be able to access cookies and other user specific information. Naturally, with "anonymous" the cookies & user speicific information won't load, whereas with "user-credentials" they would be loaded.

The cross origin attribute is needed when a webpage is trying to load a script from another domain, and the server needs to indicate whether or not the script should be loaded. However, the cross origin attribute is not needed if the script is being loaded from the same domain as the webpage.

### Q6. What is the difference between React and ReactDOM ?
A. React and ReactDOM are both libraries developed by Facebook for building user interfaces, but they have some key differences.

React is a library for building reusable components for user interfaces. It can break-down those complex UIs to smaller and simple components. It also allows structuring those components using JSX, and provides a set of APIs for managing the component's state and props (properties).

ReactDOM on the other hand, is a library that provides a way to render React components to the browser DOM. It provides a set of APIs that allows us to take a React component and "mount" it to a specific DOM node, and also APIs for updating and unmounting those components.

To put it in brief, React is used to build those reusable UI components and ReactDOM is used to render those components in the web page. They both work together to provide us with beautiful user interfaces.

### Q7. What is the difference between react.development.js and react.production.js files via CDN?
A. React.development.js and React.Production.js are both different versions of React library that have some specific usecases.

React.development.js file is inteded to be used during Development. It provides some features for developing such as, debugging and troubleshooting features to improve the code. For example, it includes extra warnings and error messages (like some console.logs put by the developer) to help identify and fix issues in the code.

React.production.js is used in a productions environment. It is a minified and optimized version of React where all the development-only features are removed, like those extra warnings and error messages. This makes React smaller and run faster in Production to improve the performance of the application.

Both of these libraries can be loaded using CDN for their respective use cases.

### Q8. What is async and defer?
A. The 'async' and 'defer' attributes are used in a script tag to specific how the JavaScript file should be loaded and executed by the browser.

If neither of these tags are used: then if a script tag is encountered in the middle of the html parsing, then it will pause and the scrips will be loaded from the server & also be executed after the loading. Only after the script's execution will the HTML parsing continue.

If the 'async' attribute is used then the browser will download the JavaScript file parallelly to the HTML parsing i.e. without blocking the rendering of the page. The script will then be executed as soon as it is downloaded.

The 'defer' attribute tells the browser to download the JavaScript file while the rest of the page is loading, simmilar to 'async' however but browser has to wait until the page has finished loading before executing it. This means that the JavaScript file is guaranteed to be executed in the order in which it appears in the HTML.

It is recommended to use 'defer' in most cases because it naturally mantains the order of execution of the scripts; but one good use case of 'async' is when you have to load some external scripts like google analytics or some other analytics which are quite modular and independent of our normal code.
