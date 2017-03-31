<template lang='jade'>
  .am-selected.am-dropdown(ref='selected', :class='selectedClasses')
    button.am-selected-btn.am-btn.am-dropdown-toggle.am-btn-default(ref='toggle', type='button', @click='OnClickToggle')
      span.am-selected-placeholder.am-fl(v-if='showPlaceholder') {{placeholder}}
      span.am-selected-status.am-fl(v-else)
        span(v-if='!multiple') {{options[value]}}
        span.am-selected-status-pill(v-else-if='showStatusPill', v-for='val in value')
          | {{options[val]}}
          a.am-selected-close.am-close-spin(@click='OnClickClose(val, $event)') &times;
      i.am-selected-icon.am-icon-caret-down
    .am-selected-content.am-dropdown-content(:style='{"max-height": maxHeight}', ref='content')
      ul.am-selected-list
        slot
</template>

<script>
import $ from './utils/extendHtmlElement'

export default {
  props: {
    value: [Array, String, Number, Boolean],
    placeholder: String,
    type: {
      type: String,
      default: 'default'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    maxHeight: String
  },
  data () {
    return {
      show: false,
      options: {}
    }
  },
  watch: {
    show (newVal) {
      if (newVal) {
        this.open()
        this.$emit('open')
      } else {
        this.close()
        this.$emit('close')
      }
    }
  },
  created () {
    this._select = true
    this.$on('select', this.OnSelect)
  },
  mounted () {
    this._selected = new $(this.$refs.selected)
    this._content = new $(this.$refs.content)
    this._body = new $(document)
  },
  computed: {
    selectedClasses () {
      let classes = [`am-selected-${this.type}`]
      classes.push(this.multiple ? 'am-selected-multiple' : 'am-selected-single')
      return classes
    },
    showStatusPill () {
      return Array.isArray(this.value)
    },
    showPlaceholder () {
      return (!Array.isArray(this.value) || !this.value.some(v => this.options.hasOwnProperty(v))) && !this.options.hasOwnProperty(this.value)
    }
  },
  methods: {
    open () {
      let selected = this._selected
      let content = this._content
      let body = this._body
      selected.addClass('am-active')
      content.addClass('am-animation-slide-top-fixed').css('min-width', selected.element.clientWidth + 'px')
      this._windowResize = () => {
        content.css('min-width', selected.element.clientWidth + 'px')
      }
      window.addEventListener('resize', this._windowResize)
      this._bodyClick = e => {
        if ((!this.multiple || (!content.element.contains(e.target) && e.target !== content.element)) && this._active) {
          this.show = false
          body.off('click', this._bodyClick)
          content.off('transitionend animationend')
        }
      }
      body.on('click', this._bodyClick)
      content.on('transitionend animationend', () => {
        content.off('transitionend animationend')
          .removeClass('am-animation-slide-top-fixed')
        this._active = true
      })
    },
    close () {
      let selected = this._selected
      let content = this._content
      let body = this._body
      this._active = false
      body.off('click', this._bodyClick)
      window.removeEventListener('resize', this._windowResize)
      content.addClass('am-dropdown-animation')
        .on('transitionend animationend', () => {
          content.off('transitionend animationend')
            .removeClass('am-dropdown-animation')
          selected.removeClass('am-active')
        })
    },
    OnSelect (val) {
      if (this.multiple) {
        let value = Array.isArray(this.value) ? this.value.slice() : []
        let index = value.indexOf(val)
        if (index !== -1) {
          value.splice(index, 1)
        } else {
          value.push(val)
        }
        this.$emit('input', value)
      } else {
        this.$emit('input', val)
      }
    },
    OnClickToggle (e) {
      let target = new $(e.target)
      if (!target.hasClass('am-selected-close')) {
        this.show = !this.show
      }
    },
    OnClickClose (val) {
      this.$emit('select', val)
    }
  }
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

.am-selected-content {
  overflow-x: hidden;
  overflow-y: scroll;
}

</style>
