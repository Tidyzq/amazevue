<template lang='jade'>
.am-input.am-input-group(v-if='this.$slots.prepend || this.$slots.append', :class='groupClasses')
  span(v-if='this.$slots.prepend', :class='prependClasses')
    slot(name='prepend')
  textarea.am-form-field(v-if='nativeType === "textarea"', :class='fieldClasses', v-model='model', :rows='rows', :placeholder='placeholder', :disabled='disabled')
  input.am-form-field(v-else-if='nativeType === "text"', :class='fieldClasses', type='text', v-model='model', :placeholder='placeholder', :disabled='disabled')
  input.am-form-field(v-else-if='nativeType === "number"', :class='fieldClasses', type='number', v-model.number='model', :placeholder='placeholder', :disabled='disabled')
  input.am-form-field(v-else-if='nativeType === "password"', :class='fieldClasses', type='password', v-model='model', :placeholder='placeholder', :disabled='disabled')
  span(v-if='this.$slots.append', :class='appendClasses')
    slot(name='append')
textarea.am-input.am-form-field(v-else-if='nativeType === "textarea"', :class='fieldClasses', v-model='model', :rows='rows', :placeholder='placeholder', :disabled='disabled')
input.am-input.am-form-field(v-else-if='nativeType === "text"', :class='fieldClasses', type='text', v-model='model', :placeholder='placeholder', :disabled='disabled')
input.am-input.am-form-field(v-else-if='nativeType === "number"', :class='fieldClasses', type='number', v-model.number='model', :placeholder='placeholder', :disabled='disabled')
input.am-input.am-form-field(v-else-if='nativeType === "password"', :class='fieldClasses', type='password', v-model='model', :placeholder='placeholder', :disabled='disabled')
</template>

<script>
export default {
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'text'
    },
    rows: {
      type: Number,
      default: 3
    },
    resize: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'md'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    prependBtn: Boolean,
    appendBtn: Boolean
  },
  data () {
    return {

    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    },
    groupClasses () {
      return {
        'am-input-group-sm': this.size === 'sm',
        'am-input-group-lg': this.size === 'lg',
        'am-input-group-primary': this.type === 'primary',
        'am-input-group-secondary': this.type === 'secondary',
        'am-input-group-success': this.type === 'success',
        'am-input-group-warning': this.type === 'warning',
        'am-input-group-danger': this.type === 'danger'
      }
    },
    fieldClasses () {
      return {
        'am-resize-off': !this.resize,
        'am-form-field-sm': this.size === 'sm',
        'am-form-field-lg': this.size === 'lg',
        'am-form-field-primary': this.type === 'primary',
        'am-form-field-secondary': this.type === 'secondary',
        'am-form-field-success': this.type === 'success',
        'am-form-field-warning': this.type === 'warning',
        'am-form-field-danger': this.type === 'danger'
      }
    },
    prependClasses () {
      return this.prependBtn ? 'am-input-group-btn' : 'am-input-group-label'
    },
    appendClasses () {
      return this.appendBtn ? 'am-input-group-btn' : 'am-input-group-label'
    }
  }
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

@lg-height: unit(ceil(unit(@form-font-size-lg * 1.2 + 0.5*2*@form-font-size-lg + 0.2) * 10), px);
@sm-height: unit(ceil(unit(@form-font-size-sm * 1.2 + 0.5*2*@form-font-size-sm + 0.2) * 10), px);

textarea.am-resize-off {
  resize: none;
}

.am-form-field-primary {
  border-color: @global-primary;
}

.am-form-field-secondary {
  border-color: @global-secondary;
}

.am-form-field-success {
  border-color: @global-success;
}

.am-form-field-warning {
  border-color: @global-warning;
}

.am-form-field-danger {
  border-color: @global-danger;
}

.am-form-field-lg {
  height: @lg-height;
  font-size: @form-font-size-lg !important;
}

.am-form-field-sm {
  height: @sm-height;
  font-size: @form-font-size-sm !important;
}

</style>
