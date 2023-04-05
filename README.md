# Angular Frontend Project

This offline task was invented to get a picture of your coding skills. Besides coding, we're interested in your ability to implement a basic design without wireframes or other input.

## Required
```
node: v18.10.0
yarn: 1.22.19
```

## Run Commands
```
"start": "ng serve",
"build": "ng build",
"watch": "ng build --watch --configuration development",
"test": "ng test",
"e2e": "ng e2e",

Steps
1. yarn
2. yarn start
3. yarn e2e
```

## General 

* Focus on a working solution rather than the most beautiful or complex
* However, if you're not that strong in fancy frontends, keep your focus on the Angular part and make it work.
* You may want to create a `develop` branch for your tasks.
* All features shall start from the `develop` branch and you should create a branch for your tasks, e.g., `01-listuser`
* You are allowed to merge between task/feature branches. 
* When you are done with a task, optionally create a merge/pull request to branch `develop` or merge back.
* When you finished all tasks please create a pull (merge) request back to `master` and assign it to @expertsieve.
* If you can not finish a task or have an issue during implementation try to explain it in the pull request description and/or `README` file
* Leave some documentation about how to built your solution, built.sh and start.sh scripts are welcome. Otherwise we'll just try `npm` or `ng`
* If you have any questions during your test task, please visit https://expertsieve.freshdesk.com or write an email[^7]
* Place the code in the root of this repo as you would normally do. Thus, do not create dedicated a sub-dir `Assignment`. This makes it harder to review everything.

## Task 1

Create an Angular[^2] application that lists all users and their addresses provided by the users API of JSONPlaceholder[^1].

## Task 2

Add at least one unit test for each of the components that you created, e.g., by using karma[^5].

## Task 3

Add the possibility to view the albums and photos of a selected user.

## Task 4

Add the possibility to create new albums. 
As there is not design available for it, feel free on the implementation details.

## Task 5

Add at least one end-to-end test for your application using cypress[^5].

## Optional

Any pagination, sorting, filtering, and drag-and-drop are a plus.

## Expectations

- Document your coding process with Git[^3] and publish your result to the given Gitlab[^4] repository.   
- We'll clone this repo run your code locally on our machines.
- The result in Gitlab should be a git history of your development process (a single commit with the complete application is not acceptable.
- We want to see multiple commits showing your progress), a README document on how to install and start your application, and a `package.json` with scripts to build and serve your application.
- Any fancy styling of your HTML is not necessary. But it shall be usable from a UX perspective.
- Simple is better than complicated. 
- Consider your application a proof-of-concept, quicker development using tools to achieve the result is better than handcrafting every line but taking 5x as long. 
- You can use whatever resources/libraries/open-source also (but not as a replacement) of the libraries previously mentioned. 
- If you can use a CLI that writes 98% of your code, fine! 

If you have any questions, do not hesitate to contact us[^7].

## Resources

[^1]:  http://jsonplaceholder.typicode.com
[^2]:  https://angular.io
[^3]:  https://git-scm.com
[^4]:  https://gitlab.com
[^5]:  https://cypress.io/
[^7]:  support@fyltura.de
