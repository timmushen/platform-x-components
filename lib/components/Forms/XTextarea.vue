<template>
  <div class="mt-8 max-w-md">
    <label class="block uppercase tracking-wide text-grey-darker text-xs mb-2" :for="name">
      {{label}}
      <sup class="text-red" v-show="required != ''">*</sup>
    </label>
    <resizable-textarea>
      <textarea
        class="appearance-none block w-full text-grey-darker border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white v-grow"
        :id="name"
        :name="name"
        :type="type"
        v-validate="required"
        :data-vv-as="error_name"
        v-model="form.value"
        v-tooltip="{
        content: errors.first(name),
        placement: 'top-end',
        trigger: 'manual',
        show: errors.first(name)
      }"
      ></textarea>
    </resizable-textarea>
  </div>
</template>
<style>
.v-grow {
  height: auto;
}
</style>

<script>
import { ValidationProvider } from "vee-validate";
import ResizableTextarea from "@/components/Forms/ResizableTextarea.vue";
export default {
  components: {
    ValidationProvider,
    ResizableTextarea
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

