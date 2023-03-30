<template>
  <header>
    <div id="app">
      <nav>
        
        <h1>Blood Management System</h1>
        

        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>

      </nav>
      <router-view/>
    </div>
  </header>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: rgb(231, 54, 54);
  position: flex-start;
}

nav a {
  font-weight: bold;
  color: black;
  align-items: right;
  font-size: 16px;
}

nav a.router-link-exact-active {
  color: #fff;
}
#app h1{
  color: white;
}
</style>
