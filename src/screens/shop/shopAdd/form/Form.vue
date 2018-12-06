<script src='./FormM'></script>
<style src='./Styles.sass' lang='sass'></style>

  
</style>
<template>
  <div id='ShopForm'>
    <vue-form :state="formstate" @submit.prevent="onSubmit">

      <validate auto-label class="form-group required-field">
        <label>Name</label>
        <input type="text" name="name" class="form-control" :class="fieldClassName(formstate.name)" required v-model.lazy="model.name">

        <field-messages name="name" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Name is a required field</div>
        </field-messages>

      </validate>

       <validate auto-label class="form-group">
        <label>Description</label>
        <textarea name="description" class="form-control" maxlength="50" v-model.lazy="model.description" required :class="fieldClassName(formstate.description)"></textarea>
        <small class="form-text text-muted">Enter no more than 50 characters.</small>
        <field-messages name="description" show="$touched || $submitted" class="invalid-feedback">
          <div slot="maxlength">Description must be less than 50 characters</div>
        </field-messages>
      </validate>

      <validate auto-label class="form-group required-field">
        <label>Address</label>
        <input type="text" name="address" class="form-control" :class="fieldClassName(formstate.address)" required v-model.lazy="model.address">

        <field-messages name="address" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Address is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field">
        <label>Email</label>
        <input type="email" name="email" class="form-control" :class="fieldClassName(formstate.email)" required v-model.lazy="model.email">

        <field-messages auto-label name="email" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Email is a required field</div>
          <div slot="email">Email is invalid</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field" >
        <label>Phone number (format: xxxx-xxx-xxxx)</label>
        <input type="tel" name="phone" class="form-control" :class="fieldClassName(formstate.phone)" required pattern="^\d{4}-\d{3}-\d{4}$" v-model.lazy="model.phone">

        <field-messages name="phone" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Phone number is a required field</div>
          <div slot="pattern">Phone number is invalid</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.categoryId)">
        <label>Category</label>

        <select class="form-control" name="categoryId" required v-model.lazy="model.categoryId">
          <option :value="null" selected>Choose...</option>
          <option value="1">AAA</option>
          <option value="2">BBB</option>
          <option value="3">CCC</option>
        </select>

        <field-messages name="categoryId" show="$touched || $dirty || $submitted" class="invalid-feedback">
          <div slot="required">Category is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field">
        <label>Close Time</label>
        <input type="text" name="closeTime" class="form-control" :class="fieldClassName(formstate.closeTime)" required v-model.lazy="model.closeTime">

        <field-messages name="closeTime" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Close Time is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field">
        <label>Open Time</label>
        <input type="text" name="openTime" class="form-control" :class="fieldClassName(formstate.openTime)" required v-model.lazy="model.openTime">

        <field-messages name="openTime" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Open Time is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field">
        <label>Avatar</label>
        <input type="text" name="avatar" class="form-control" :class="fieldClassName(formstate.avatar)" required v-model.lazy="model.avatar">

        <field-messages name="avatar" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Avatar is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field">
        <label>Latitude</label>
        <input type="text" name="latitude" class="form-control" :class="fieldClassName(formstate.latitude)" required v-model.lazy="model.latitude">

        <field-messages name="latitude" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Latitude is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field">
        <label>Longitude</label>
        <input type="text" name="longitude" class="form-control" :class="fieldClassName(formstate.longitude)" required v-model.lazy="model.longitude">

        <field-messages name="longitude" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Longitude is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field">
        <label>Post Code</label>
        <input type="text" name="postCode" class="form-control" :class="fieldClassName(formstate.postCode)" required v-model.lazy="model.postCode">

        <field-messages name="postCode" show="$touched || $submitted" class="invalid-feedback">
          <div slot="required">Post Code is a required field</div>
        </field-messages>

      </validate>

      <div class="py-2 text-center">
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </vue-form>
    <!-- <vue-form
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
          v-model="model.name"
          required
          name="name"
          placeholder="User Name"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Description</span>
        <input
          v-model="model.description"
          required
          name="description"
          placeholder="User Description"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>A ddress</span>
        <input
          v-model="model.address"
          required
          name="address"
          placeholder="Address"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Email</span>
        <input
          v-model="model.email"
          required
          name="email"
          placeholder="Email"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Phone</span>
        <input
          v-model="model.phone"
          required
          name="phone"
          placeholder="Phone"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Category</span>
        <input
          v-model="model.categoryId"
          required
          name="categoryId"
          placeholder="Category"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Close Time</span>
        <input
          v-model="model.closeTime"
          required
          name="closeTime"
          placeholder="Close Time"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Open Time</span>
        <input
          v-model="model.openTime"
          required
          name="openTime"
          placeholder="Open Time"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Avatar</span>
        <input
          v-model="model.avatar"
          required
          name="avatar"
          placeholder="Avatar"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Latitude</span>
        <input
          v-model="model.latitude"
          required
          name="latitude"
          placeholder="Latitude"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Longitude</span>
        <input
          v-model="model.longitude"
          required
          name="longitude"
          placeholder="Longitude"
        />
      </validate>
      <validate
        tag="label"
        class="d-block"
      >
        <span>Post code</span>
        <input
          v-model="model.postCode"
          required
          name="postCode"
          placeholder="Post code"
        />
      </validate>
      <button class="mt-3" type="submit">Submit</button>
    </vue-form> -->
  </div>
</template>
