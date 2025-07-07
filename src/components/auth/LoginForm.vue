<script setup>
import { ref } from 'vue'
// import { useAuthStore } from '@/stores/auth';
// import { Form } from 'vee-validate';

// /*Social icons*/
// import google from '@/assets/images/svgs/google-icon.svg';
// import facebook from '@/assets/images/svgs/icon-facebook.svg';

const checkbox = ref(false)
const valid = ref(false)
const show1 = ref(false)
const password = ref('admin123')
const username = ref('info@wrappixel.com')
const passwordRules = ref([
  (v) => !!v || 'Password is required',
  (v) => (v && v.length <= 10) || 'Password must be less than 10 characters',
])
const emailRules = ref([
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
])

function validate(values, { setErrors }) {
  const authStore = useAuthStore()
  return authStore
    .login(username.value, password.value)
    .catch((error) => setErrors({ apiError: error }))
}
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="6" sm="6">
      <v-btn
        variant="outlined"
        size="large"
        class="text-subtitle-1 text-gray200 font-weight-semibold border"
        block
      >
        <img :src="google" height="16" class="mr-2" alt="google" />
        <span class="d-sm-flex d-none mr-1">Sign in with</span>Google
      </v-btn>
    </v-col>
    <v-col cols="6" sm="6">
      <v-btn
        variant="outlined"
        size="large"
        class="text-subtitle-1 text-gray200 font-weight-semibold border"
        block
      >
        <img :src="facebook" width="25" height="25" class="mr-1" alt="facebook" />
        <span class="d-sm-flex d-none mr-1">Sign in with</span>FB
      </v-btn>
    </v-col>
  </v-row>
  <div class="d-flex align-center mb-6 text-center">
    <div class="text-h6 w-100 font-weight-regular auth-divider position-relative px-5">
      <span class="bg-surface position-relative text-subtitle-1 text-grey100 px-5 py-3"
        >or sign in with</span
      >
    </div>
  </div>
  <Form @submit="validate" v-slot="{ errors, isSubmitting }" class="mt-5">
    <v-label class="text-subtitle-1 font-weight-semibold text-grey200 pb-2">Username</v-label>
    <VTextField
      v-model="username"
      :rules="emailRules"
      class="mb-8"
      required
      hide-details="auto"
    ></VTextField>
    <v-label class="text-subtitle-1 font-weight-semibold text-grey200 pb-2">Password</v-label>
    <VTextField
      v-model="password"
      :rules="passwordRules"
      required
      hide-details="auto"
      type="password"
      class="pwdInput"
    ></VTextField>
    <div class="d-flex align-center ml-n2 my-3 flex-wrap">
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        required
        hide-details
        color="primary"
      >
        <template v-slot:label class="">Remeber this Device</template>
      </v-checkbox>
      <div class="ml-sm-auto">
        <RouterLink
          to=""
          class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
          >Forgot Password ?</RouterLink
        >
      </div>
    </div>
    <v-btn
      size="large"
      rounded="pill"
      :loading="isSubmitting"
      color="primary"
      :disabled="valid"
      block
      type="submit"
      flat
      >Sign In</v-btn
    >
    <div v-if="errors.apiError" class="mt-2">
      <v-alert color="error">{{ errors.apiError }}</v-alert>
    </div>
  </Form>
</template>
