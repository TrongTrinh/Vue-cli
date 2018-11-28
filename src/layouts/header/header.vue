<style src='./header.sass' lang='sass'></style>

<template>
  <div id='header' class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6"><img src="@/assets/images/logo.png"></div>
        <div class="col-md-6 d-flex align-items-center text-right">
          <router-link to="/">Home</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
