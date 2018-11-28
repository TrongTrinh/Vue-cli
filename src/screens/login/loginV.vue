<script src='./loginVM.js'></script>
<style src='./login.sass' lang="sass">
  
</style>
<template>
  <div
    id="loginForm"
    class="d-flex flex-column align-items-center"
  >
    <div class="wrap">
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
          <span>Name *</span>
          <input
            v-model="model.name"
            required
            name="name"
            placeholder="Name"
          />

        </validate>

        <validate
          tag="label"
          class="d-block"
        >
          <span>Email</span>
          <input
            v-model="model.email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />

        </validate>

        <button class="mt-3" type="submit">Submit</button>
      </vue-form>
      <div class="mt-4" v-if="message">{{ message }}</div>
    </div>

  </div>
</template>
