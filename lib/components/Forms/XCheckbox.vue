<template>
  <div class="mt-8 max-w-md">
    <label class="block uppercase tracking-wider text-gray-700 text-xs mb-2" :for="name">
      {{label}}
      <sup class="text-red" v-show="required != ''">*</sup>
    </label>
    <input
      class
      :id="name"
      :name="name"
      type="checkbox"
      v-validate="required"
      :data-vv-as="error_name"
      @input="$emit('form.value', $event.target.value)"
      v-model="form.value"
      :checked="form.value"
      true-value="1"
      false-value="0"
      v-tooltip="{
        content: errors.first(name),
        placement: 'top-end',
        trigger: 'manual',
        show: errors.first(name)
      }"
    >
  </div>
</template>
<style>
</style>
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

