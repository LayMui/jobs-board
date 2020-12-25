# job-boards

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## How to get started ##
This is a project to create SPA using Vue

vue create job-boards

to generate a project called job-boards

Basic concepts covered:
Intro to Vue
```
Vue is a Single Page Application
One of the top Javascript framework
It's built on top of Virtual DOM
Fast
```

Setup and Tooling
```
npm install -g @vue/cli
vue ui - ui to add the dependencies

Dependency: 
install tailwindcss plugin

Use for debugging
Vue.js devtools
```

Vue syntax
```
v-model
2 way data binding

methods
trigger a function

computed:
simplify way to display your state

watch:
monitor or listen for anything changes
```

Props and Events
```
Props:
pass the data from parent to child

Events:
Pass the data from child to parent
```

Slots
```
render any elements inside specific area
```

Deploy
```
npm run build
```
It compile the HTML, CSS and JS and generate one index.html

Hosting
https://vercel.com


# Session 2 Intermediate
 Implement Vue Router
 ```
 1. / - list of remote jobs
 2. /add - add remote job
```
 Form Validations
 ```
 1. Disable the submit button if the form input is not complete or invalid
```

Vue Filter
```
1. Apply formatting to Date form input 
reference https://momentjs.com
2. Apply formatting to Date list jobs
```
Store the job in the local storage
```
1. Whenever user submit the job form, store it inside the local storage

2. Use the data from local storage and display it in the front page
```

# Build a docker image for the app

Delivering our Vue.js app as a Docker image helps reducing, 
if not removing entirely, the difference between running the service on a developer’s laptop, the production environment or any environment we may think of.

So creating a Docker image for our Vue.js app is a good choice here because that would represent our final build artifact, the same artifact that would be verified against our continuous delivery pipeline and that could potentially be released to production with confidence.

Create the Dockerfile
```
docker build -t laymui/dockerize-job-board-app .
```
Run the app in the docker container:
```
docker run -it -p 8080:8080 --rm --name dockerize-job-board-app laymui/dockerize-job-board-app 
```
The app is accessible at
http://127.0.0.1:8080