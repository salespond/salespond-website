<template>
  <div class="flex flex-col">
    <input
      :id="id"
      :type="type"
      :placeholder="placeholderText"
      :disabled="disabled"
      :name="inputName"
      :required="required"
      @input="updateValue($event);"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus: ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
    <div v-if="hasError" class="flex flex-row items-center mt-1 gap-x-1 pl-1">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.663 1.67065C7.26851 0.509525 8.7311 0.509524 9.33661 1.67065L14.9752 12.4833C15.5987 13.6788 14.8502 15.1998 13.6384 15.1998H2.36118C1.1494 15.1998 0.400923 13.6788 1.02438 12.4833L6.663 1.67065ZM7.1998 9.1998V5.1998H8.7998V9.1998H7.1998ZM7.9998 12.7998C7.33706 12.7998 6.7998 12.2625 6.7998 11.5998C6.7998 10.9371 7.33706 10.3998 7.9998 10.3998C8.66255 10.3998 9.1998 10.9371 9.1998 11.5998C9.1998 12.2625 8.66255 12.7998 7.9998 12.7998Z" fill="#EB5757"/>
      </svg>
      <p class="error-message text-xs text-red-500 leading-none">{{ errorMessage }}</p>
    </div>
  </div>
</template>
<script lang="ts">
const updateInput = 'update:modelValue'
export default {
  props: {
    id: {
      type: String,
      default: 'ID'
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: true
    },
    placeholderText: {
      type: String,
      default: 'Label'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inputName: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: 'Please Enter valid entry'
    },
  },
  emits: [updateInput],
  setup(props: any, { emit }: any) {
    const updateValue = (event: any) => {
      const target = event.target as HTMLInputElement
      emit(updateInput, target.value)
    }

    return {
      updateValue
    }
  }
}
</script>
