<template lang='jade'>
  .am-selected(ref='selected', :class='selectedClasses')
    am-button.am-selected-btn.am-dropdown-toggle(:active='show', @click='OnClickToggle')
      span.am-selected-placeholder.am-fl(v-if='showPlaceholder') {{ placeholder }}
      span.am-selected-status.am-fl(v-else)
        span(v-if='!multiple') {{ options[value] }}
        span.am-selected-status-pill(v-else-if='showStatusPill', v-for='val in value')
          | {{ options[val] }}
          a.am-selected-close.am-close-spin(ref='pillCloseBtns') &times;
      i.am-selected-icon.am-icon-caret-down
    am-dropdown(v-model='show', content-class='am-dropdown-content am-selected-content')
      ul.am-selected-list(:style='listStyle')
        slot
</template>

<script>
import AmButton from './Button'
import AmDropdown from './Dropdown'

export default {
  name: 'AmSelect',
  props: {
    value: [ Array, String, Number, Boolean ],
    placeholder: String,
    type: {
      type: String,
      default: 'default',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: String,
      default: '40rem',
    },
  },
  components: {
    AmButton,
    AmDropdown,
  },
  data () {
    return {
      show: false,
      options: {},
    }
  },
  watch: {
    show (newVal) {
      if (newVal) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    },
  },
  created () {
    this._select = true
    this.$on('select', this.OnSelect)
  },
  computed: {
    selectedClasses () {
      return {
        ['am-selected-' + this.type]: true,
        'am-selected-multiple': this.multiple,
        'am-selected-single': !this.multiple,
      }
    },
    toggleClasses () {
      return {
        'am-active': this.show,
      }
    },
    listStyle () {
      return {
        'max-height': this.maxHeight,
      }
    },
    showStatusPill () {
      return Array.isArray(this.value)
    },
    showPlaceholder () {
      return (!Array.isArray(this.value) || !this.value.some(v => this.options.hasOwnProperty(v))) && !this.options.hasOwnProperty(this.value)
    },
  },
  methods: {
    OnSelect (val) {
      if (this.multiple) {
        const value = Array.isArray(this.value) ? this.value.slice() : []
        const index = value.indexOf(val)
        if (index !== -1) {
          value.splice(index, 1)
        } else {
          value.push(val)
        }
        this.$emit('input', value)
      } else {
        this.show = false
        this.$emit('input', val)
      }
    },
    OnClickToggle (e) {
      if (this.$refs.pillCloseBtns) {
        const index = this.$refs.pillCloseBtns.indexOf(e.target)
        if (index !== -1) {
          this.OnClickClose(this.value[index])
          return
        }
      }
      this.show = !this.show
    },
    OnClickClose (val) {
      this.$emit('select', val)
    },
  },
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

@selected-status-pill-fontsize: 16px;
@selected-status-pill-spacing: .625em;

.am-selected {
  width: 100%;
}

.am-selected-status {
  width: auto;
  white-space: normal;
}

.am-selected-status-pill {
  display: inline-block;
  line-height: @selected-status-pill-fontsize;
  font-size: @selected-status-pill-fontsize;
  padding-left: @selected-status-pill-spacing;
  border-radius: 0;
  margin-right: @selected-status-pill-spacing;
  border: 1px solid @btn-default-border;
}

.selected-variant(@type, @color, @bg-color, @border-color) {
  .am-selected-@{type} .am-selected-status-pill,
  .am-selected-@{type}.am-selected-single .am-selected-btn {
    color: @color;
    background: @bg-color;
    border-color: @border-color;
  }
  .am-selected-@{type}.am-selected-multiple .am-selected-btn {
    border-color: @border-color;
  }
  .am-selected-@{type}.am-selected-multiple .am-selected-icon {
    color: @border-color;
  }
}

.am-selected-default .am-selected-btn {
  background: white;
  border-color: @input-group-label-border-color;
}

.am-selected-default .am-selected-status-pill {
  color: @btn-default-color;
  background: @btn-default-bg;
  border-color: @btn-default-border;
}

.selected-variant(primary, @btn-primary-color, @btn-primary-bg, @btn-primary-border);
.selected-variant(secondary, @btn-secondary-color, @btn-secondary-bg, @btn-secondary-border);
.selected-variant(success, @btn-success-color, @btn-success-bg, @btn-success-border);
.selected-variant(warning, @btn-warning-color, @btn-warning-bg, @btn-warning-border);
.selected-variant(danger, @btn-danger-color, @btn-danger-bg, @btn-danger-border);

.am-selected-close {
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

.am-selected-list {
  overflow-x: hidden;
  overflow-y: scroll;
}

</style>

<style lang='less'>

.am-selected-content {
  width: 100%;
  display: block;
}

</style>
