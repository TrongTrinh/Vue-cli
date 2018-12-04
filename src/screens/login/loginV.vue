<script src='./loginVM.js'></script>
<style src='./login.sass' lang="sass">
</style>
<template>
  <div
    id="loginForm"
    class="d-flex flex-column align-items-center"
  > 
  {{appLogin}}
    <div class="wrap" v-if="!appLogin">
      <h3>Login</h3>
      <vue-form
        :state="formstate"
        @submit.prevent="onSubmit"
        class="login-form my-4"
      >
        <validate
          tag="label"
          class="d-block"
        >
          <span>User Name *</span>
          <input
            v-model="model.username"
            required
            name="username"
            placeholder="User Name"
          />
        </validate>
        <validate
          tag="label"
          class="d-block"
        >
          <span>Password</span>
          <input
            v-model="model.password"
            name="password"
            type="text"
            placeholder="Password"
            required
          />
        </validate>
        <button class="mt-3" type="submit">Submit</button>
      </vue-form>
      <div class="mt-4" v-if="message">{{ message }}</div>
    </div>
    <div v-else >
      <h1>Logged</h1>
    </div>

  </div>
</template>
