<template>
  <div>
    <div class="bg-img">
      <form class="form-container">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required placeholder="username">

        <label for="password">Password</label>
        <input type="text" id="password" v-model="password" required placeholder="password">

        <router-link class="btn" to="/about">Login</router-link>
      </form>
    </div>
    
  </div>


</template>
<style>
.bg-img{
  background-image: url("../assets/images/blood2.webp");
  min-height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.form-container {
  position: absolute;
  right: 38%;
  margin-top: 10%;
  /*margin: 20px;*/
  max-width: 300px;
  padding: 16px;
  font-weight: bold;
  color: white;
  /*background-color: white;*/
}
input[type=text], input[type=password] {
  width: 94%;
  padding: 13px;
  margin: 5px 0 22px 0;
  border: none;
  /*background: #f1f1f1;*/
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit button */
.btn {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
  text-decoration: none;
}

.btn:hover {
  opacity: 1;
}


</style>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
