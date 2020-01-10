# Assignment

## Code Challenge

The starter application included has some signficant issues that make it not work correctly, and a few underdeveloped features. Your task is to fix any errors in the code already, and build some simple features to match the given requirements below.

### Requirements

- Create a fork of this repository. All code changes should be madee to your fork.

- As a user (here just a fake one) should be able to login, with my extremely secure password, 'password'. An email address should also be required, but any should work.

- Once logged in, a user should be able to navigate to the `Profile` page, and update my name so that it appears on the home page instead of `Test User`

- On the repository page (which should mount the Repositories component), a user should be able to enter text into a field in order to search for repositories on github.

  - These results should automatically populate (wihtout requiring a button press or enter keypress), however the request should only be sent when there's a lull in typing (rather than on every keystroke)
  - The results should be displayed as cards or a list, containing at least the following info:
    - Full name | description | Stargazers Count | Open issues Count | match score
  - Clicking the list or card of the item should change to a page /repositories/:id

- The page /repositories/:id should show extra detail about a specific repository

  - This page should show the info from the card, as well as
    - link to the Repos Issues
    - link to the Repos Pull Requests
    - Display the license, if there is one, with it's name, spdx_id and url (if exists)

- The app should strive to have high levels of accessibility, please take steps to enable where possible

- Write `production` level code while completing this task. Please be sure to handle potential errors where necessary, remove any unncessary logs/debugger statements, etc

### Limitations

`styled-components` and `react-router-dom` are both added as dependencies already. No other packages should be added.

Any http requests should be handled using `fetch`.

Styles should be added using only styled-components.

### Time

You should not take more than 3 hours of time on this, even if you feel incomplete, that's fine. Your time is important, too! We'd rather see what you can accomplish in that timeframe, rather than what you can do in unlimited time

## Question

Please, answer the following questions in this readme, underneath the question

1. Name a newer feature of javascript that you believe is extra useful, and discuss how you have used it in this project, or how you would use it if needed.

Object destructuring is relatively new and I personally think one of unsung heroes of post ES6 JS. Being able to pull out a variety of variables from any given object, complete with defaults and aliasing, is a very convenient and powerful tool for code readability, not to mention making new features like hooks way more user clean and user friendly.

2. What are 3 things you think `React` does very poorly? What tools do this better, if any?

This is an interesting question, because I feel that React is best thought of as a useful foundation on which other technologies are usually placed. It also updates at such a rapid pace - a couple years ago, my major complaints lay in features that hooks mostly added, things like better data management (now we have context). 

One thing React does poorly is error handling - when the app encounters a an error from, say, a variable that is in the wrong format, the whole app crashes rather than localizing the error around the component. This can be prepared for with due diligence, but I'd love to see the React team give us a Component that at least is what is shown if an error happens instead of the crash screen.

React also doesn't have any built-in functionality for websockets, so you have to build a whole separate websocket handling mini-app, and then have it connect with React in whichever way you want. I will say that it is less of a pain now with custom hooks, but real-time data consumption still seems like a prevalent enough issue to warrant an official hook or other integration.

This isn't quite a coding thing per se, but as a third thing I'd say React doesn't do a great job of teaching its best practices. Whether it be new features like hooks, deprecations like componentWillMount, the movement to functional components...it strikes me sometimes that when I Google React questions, invariably I wind up at stack overflow or blog posts rather than the official documentation. And when those new features come out, I usually find myself glancing through the technical documentation and release notes, getting confused, and having to go off and read elsewhere for a better explanation. And I've been using React almost daily for 3 years. Back several years ago when I worked with Angular a bit, I was pleasantly surprised that their documentation seemed actually designed for the average human.

## Submissions

When submitting, please send a link to your fork of this repository to `matt@brace.ai`.

### Questions

Please, feel free to reach out directly with any questions you have about this project, or Brace in general, to `matt@brace.ai`.
