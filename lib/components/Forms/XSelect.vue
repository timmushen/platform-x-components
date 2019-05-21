<template>
  <div class="mt-8 max-w-md">
    <label class="block uppercase tracking-wider text-gray-700 text-xs mb-2" :for="name">
      {{label}}
      <sup class="text-red" v-show="required != ''">*</sup>
    </label>
    <div class="relative">
      <select
        class="block appearance-none w-full bg-white border border-grey text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
        :id="name"
        @input="$emit('input', $event.target.value)"
        :name="name"
        v-model="form.value"
        v-validate="required"
        :data-vv-as="error_name"
        v-tooltip="{
        content: errors.first(name),
        placement: 'top-end',
        trigger: 'manual',
        show: errors.first(name)
      }"
      >
        <option></option>
        <option>New Mexico</option>
        <option>Missouri</option>
        <option>Texas</option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      default: "text"
    },
    required: {
      default: ""
    },
    error_name: {
      type: String,
      default: ""
    },
    value: {}
  },
  data() {
    return {
      required_msg: false,
      form: {
        value: ""
      }
    };
  },
  created() {
    this.form.value = this.value;
  }
};
</script>