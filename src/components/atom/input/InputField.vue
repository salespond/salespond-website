<template>
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
    }
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
