<script src="./ShopItemM.js"></script>
<style src='./styles.sass' lang='sass'></style>
<template>
  <div id="shop-item">
    <div class="avatar">
      <img
        :src="shop.avatar"
        alt="avatar"
      >
    </div>
    <div class="content">
      <h5 class="title my-2">{{ shop.name }} </h5>
      <p class="des">{{shop.description}}</p>
    </div>
    <router-link :to="{ path: `/shop-details/${shop.id}`, params: { shopId: shop.id }}">View Detail</router-link>
  </div>
</template>
