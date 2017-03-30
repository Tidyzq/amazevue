<template lang='jade'>
ul.am-pagination(:class='paginationClasses')
  template(v-for='component in layout')
    template(v-if='component === "total"')
      li.am-pagination-total 共 {{ total }} 条
    template(v-else-if='component === "sizes"')
      li.am-pagination-sizes
        am-select.am-pagination-sizes-select(v-model='size')
          am-option(v-for='sizePerPage in pageSizes', :value='sizePerPage', :label='`${sizePerPage} 条/页`', :key='sizePerPage')
    template(v-else-if='component === "jumper"')
      li.am-pagination-jumper(@keydown.enter='OnInputPage')
        | 前往
        am-input.am-pagination-jumper-input(v-model.number='inputPage')
        | 页
    template(v-else-if='component === "prev"')
      li(:class='{"am-disabled": !decreaseable}', @click='page-=1')
        a &lsaquo;
    template(v-else-if='component === "next"')
      li(:class='{"am-disabled": !increaseable}', @click='page+=1')
        a &rsaquo;
    template(v-else-if='component === "pager"')
      li(:class='{"am-active": page === 1}', @click='page=1')
        a 1
      li.am-disabled(v-if='omitLeft')
        a ...
      template(v-for='index in showPages', :key='index')
        li(:class='{"am-active": page === index}', @click='page=index')
          a {{ index }}
      li.am-disabled(v-if='omitRight')
        a ...
      li(v-if='pageCount>1', :class='{"am-active": page === pageCount}', @click='page=pageCount')
        a {{ pageCount }}
</template>

<script>
import AmSelect from './Select'
import AmOption from './Option'
import AmInput from './Input'

export default {
  props: {
    placement: {
      type: String,
      default: 'center'
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () {
        return [5, 10, 15, 20]
      }
    },
    total: {
      type: Number,
      default: 1
    },
    keep: {
      type: Number,
      default: 5
    },
    layout: {
      type: Array,
      default () {
        return ['prev', 'pager', 'next']
      }
    }
  },
  data () {
    return {
      page: this.currentPage,
      size: this.pageSize,
      inputPage: this.currentPage
    }
  },
  watch: {
    pageSize (newVal) {
      this.size = newVal
    },
    size (newVal) {
      this.$emit('size-change', newVal)
    },
    pageCount (newVal) {
      let page = Math.max(1, Math.min(this.page, newVal))
      this.page = page
    },
    currentPage (newVal) {
      let page = Math.max(1, Math.min(this.pageCount, newVal))
      this.page = page
    },
    page (newVal) {
      this.inputPage = newVal
      this.$emit('current-change', newVal)
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.total / this.size)
    },
    paginationClasses () {
      return {
        'am-pagination-left': this.placement === 'left',
        'am-pagination-centered': this.placement === 'center',
        'am-pagination-right': this.placement === 'right'
      }
    },
    decreaseable () {
      return this.page !== 1
    },
    increaseable () {
      return this.page !== this.pageCount
    },
    omitLeft () {
      return this.showStart > 2
    },
    omitRight () {
      return this.showEnd < this.pageCount
    },
    showStart () {
      let start = Math.ceil(this.page - (this.keep / 2))
      return Math.max(2, Math.min(start, this.pageCount - this.keep))
    },
    showEnd () {
      let end = this.showStart + this.keep
      return Math.min(end, this.pageCount)
    },
    showPages () {
      let start = this.showStart
      let end = this.showEnd
      let pages = new Array(Math.max(0, end - start))
      for (let i = 0; i < pages.length; ++i) {
        pages[i] = start + i
      }
      return pages
    }
  },
  methods: {
    OnInputPage () {
      let page = Math.max(1, Math.min(this.pageCount, this.inputPage))
      this.page = page
    }
  },
  components: {
    AmSelect,
    AmOption,
    AmInput
  }
}

</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-pagination {
  & > li > a {
    cursor: pointer;
  }
  & > li.am-disabled > a {
    cursor: not-allowed;
  }
}

.am-pagination-total,
.am-pagination-sizes,
.am-pagination-jumper {
  margin-left: @global-spacing-xs;
  margin-right: @global-spacing-xs;
}

.am-pagination-sizes-select {
  position: relative;
  display: block;
  text-decoration: none;
  line-height: 1.2;
  border: 1px solid #ddd;
}

.am-pagination-jumper-input {
  display: inline-block;
  vertical-align: initial !important;
  border: 1px solid #ddd;
  width: 4rem;
}

</style>

<style lang='less'>
.am-pagination-sizes-select > .am-selected-btn {
  border: none;
  vertical-align: initial;
}
</style>
