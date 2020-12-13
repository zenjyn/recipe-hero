![Recipe Hero example](recipe-hero.jpg)

## Setup

* Requires node and Docker / Docker Compose
* Run `npm start`. You can access your running client on `http://localhost:8090` and the API for this app at `http://localhost:8091`.

## Instructions

Refactor the HTML and CSS in `frontend/App.vue` to use components and dynamically filter data.

* Your solution should have over 7 components
* Replace all hard-coded data with data from the `http://localhost:8091/recipes` API endpoint.
* The ingredients should be generated dynamically
* As ingredients are added from the list, the list of available recipes should filter in real time
* Recipe step navigation should be functional
* There should be a default message displayed if no recipes match the selected ingredients
