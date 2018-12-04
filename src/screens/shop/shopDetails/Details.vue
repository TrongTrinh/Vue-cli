<script src='./DetailsM'> </script>

<template>
  <div id="shop-details">
    <div class="container">
      <h3 class="my-5">{{getShopDetail.name}}</h3>
      <p><img :src= getShopDetail.avatar alt="avatar"></p>
      <p>address: {{getShopDetail.address}}</p>
      <p>email: {{getShopDetail.email}}</p>
      <p>phone: {{getShopDetail.phone}}</p>
      <p>close_time: {{getShopDetail.close_time}}</p>
      <p>open_time: {{getShopDetail.open_time}}</p>
      <p>latitude: {{getShopDetail.latitude}}</p>
      <p>longitude: {{getShopDetail.longitude}}</p>
      <p>post_code: {{getShopDetail.post_code}}</p>
    </div>
  </div>
</template>
