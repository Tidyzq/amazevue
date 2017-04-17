<template lang='jade'>
  .am-input-multiple(ref='main', :class='mainClasses')
    button.am-input-multiple-btn.am-btn.am-btn-default(ref='toggle', type='button', @click.prevent='OnClickButton', :disabled='disabled')
      span.am-input-multiple-placeholder.am-fl(v-if='showPlaceholder') {{placeholder}}
      span.am-input-multiple-status.am-fl(v-else)
        span.am-input-multiple-status-pill(v-for='val in value')
          | {{val}}
          a.am-input-multiple-close.am-close-spin(ref='pillCloseBtns') &times;
      input.am-input-multiple-input.am-fl(type='text', ref='input', v-model='inputing', @keydown.enter='OnEnter')
</template>

<script>
export default {
  name: 'AmInputMultiple',
  props: {
    value: Array,
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
  },
  data () {
    return {
      inputing: '',
    }
  },
  computed: {
    mainClasses () {
      return `am-input-multiple-${this.type}`
    },
    showPlaceholder () {
      return (!Array.isArray(this.value) || !this.value.length) && !this.inputing
    },
  },
  watch: {
    inputing (newVal) {
      const input = this.$refs.input
      input.style.width = ((newVal.length + 1) * 1) + 'em'
    },
  },
  mounted () {
    const input = this.$refs.input
    input.addEventListener('focusout', () => {
      if (this.inputing) {
        this.OnEnter()
      }
    })
  },
  methods: {
    OnClickButton (e) {
      if (this.$refs.pillCloseBtns) {
        const index = this.$refs.pillCloseBtns.indexOf(e.target)
        if (index !== -1) {
          this.OnClickClose(this.value[index])
          return
        }
      }
      this.$refs.input.focus()
    },
    OnEnter () {
      this.add(this.inputing)
      this.inputing = ''
    },
    OnClickClose (val) {
      this.remove(val)
    },
    add (val) {
      const index = this.value.indexOf(val)
      if (index === -1) {
        const v = this.value.slice()
        v.push(val)
        this.$emit('input', v)
      }
    },
    remove (val) {
      const index = this.value.indexOf(val)
      if (index !== -1) {
        const v = this.value.slice()
        v.splice(index, 1)
        this.$emit('input', v)
      }
    },
  },
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

@input-multiple-status-pill-fontsize: 16px;
@input-multiple-status-pill-spacing: .625em;

.am-input-multiple {
  width: 100%;
  position: relative;
  display: inline-block;
}
.am-input-multiple-btn {
  cursor: text;
  background: white;
  width: 100%;
  padding-left: 10px;
  text-align: right;
}
.am-input-multiple-status {
  width: auto;
  white-space: normal;
  text-align: left;
  display: block;
  word-wrap: normal;
  text-overflow: ellipsis;
  overflow: hidden;
}
.am-input-multiple-status-pill {
  cursor: auto;
  display: inline-block;
  line-height: @input-multiple-status-pill-fontsize;
  font-size: @input-multiple-status-pill-fontsize;
  padding-left: @input-multiple-status-pill-spacing;
  border-radius: 0;
  margin-right: @input-multiple-status-pill-spacing;
  border: 1px solid @btn-default-border;
}
.am-input-multiple-close {
  display: inline-block;
  text-align: center;
  width: 19px;
  font-size: 16px;
  font-weight: bold;
  color: @close-color;
  text-shadow: @close-text-shadow;
  opacity: .2;
  transition: all .3s;
}
.am-input-multiple .am-input-multiple-input {
  padding: 0;
  height: 19px;
  display: block;
  line-height: @input-multiple-status-pill-fontsize;
  font-size: @input-multiple-status-pill-fontsize;
  border: none;
  outline: 0;
  box-shadow: none !important;
  width: 1rem;
}

.input-multiple-variant(@type, @color, @bg-color, @border-color) {
  .am-input-multiple-@{type} .am-input-multiple-status-pill {
    color: @color;
    background: @bg-color;
    border-color: @border-color;
  }
  .am-input-multiple-@{type} .am-input-multiple-btn {
    border-color: @border-color;
  }
}

.am-input-multiple-default .am-input-multiple-btn {
  background: white;
  border-color: @input-group-label-border-color;
}

.am-input-multiple-default .am-input-multiple-status-pill {
  color: @btn-default-color;
  background: @btn-default-bg;
  border-color: @btn-default-border;
}

.input-multiple-variant(primary, @btn-primary-color, @btn-primary-bg, @btn-primary-border);
.input-multiple-variant(secondary, @btn-secondary-color, @btn-secondary-bg, @btn-secondary-border);
.input-multiple-variant(success, @btn-success-color, @btn-success-bg, @btn-success-border);
.input-multiple-variant(warning, @btn-warning-color, @btn-warning-bg, @btn-warning-border);
.input-multiple-variant(danger, @btn-danger-color, @btn-danger-bg, @btn-danger-border);

.am-input-multiple-placeholder {
  width: 0;
  opacity: .65;
}

</style>
