<template>
  <div id="app">
   <div class="max-w-xl mx-auto py-16">
    <div id="nav">
      <router-link data-qa="listOfJobs" to="/">List of Jobs</router-link> |
      <router-link data-qa="addJob" to="/add">Add Job</router-link>
    </div>  
    <router-view/>
    
  </div>
  </div>
</template>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
