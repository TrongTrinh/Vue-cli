<script src='./ShopListsM'></script>
<style src='./Styles.sass' lang='sass'></style>

<template>
  <div class="container">
    <h3 class="my-5  text-uppercase text-center">List products</h3>
    <div class="row">
      <div class="col-md-4 mb-5" v-for="shop in renderShops" :key="shop.id">
        <ShopItem :shop="shop" />
      </div>
    </div>
    <template>
      <div>
        <b-pagination
          size="md"
          :total-rows="shoplists.totalResult"
          :per-page="shoplists.totalPage"
          v-model="pageNo"
        >
        </b-pagination>
        {{pageNo}}
        <br>
      </div>
    </template>
  </div>
</template>
