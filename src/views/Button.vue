<template lang='jade'>
  .button-page.am-container
    h1 Buttons
    h2 Default
    .buttons
      am-button(type='default') default
      am-button(type='primary') primary
      am-button(type='secondary') secondary
      am-button(type='success') success
      am-button(type='warning') warning
      am-button(type='danger') danger
    pre
      | am-button(type='default') default
      | am-button(type='primary') primary
      | am-button(type='secondary') secondary
      | am-button(type='success') success
      | am-button(type='warning') warning
      | am-button(type='danger') danger
    h2 Radius
    .buttons
      am-button(type='default', shape='radius') default
      am-button(type='primary', shape='radius') primary
      am-button(type='secondary', shape='radius') secondary
      am-button(type='success', shape='radius') success
      am-button(type='warning', shape='radius') warning
      am-button(type='danger', shape='radius') danger
    pre
      | am-button(type='default', shape='radius') default
      | am-button(type='primary', shape='radius') primary
      | am-button(type='secondary', shape='radius') secondary
      | am-button(type='success', shape='radius') success
      | am-button(type='warning', shape='radius') warning
      | am-button(type='danger', shape='radius') danger
    h2 Round
    .buttons
      am-button(type='default', shape='round') default
      am-button(type='primary', shape='round') primary
      am-button(type='secondary', shape='round') secondary
      am-button(type='success', shape='round') success
      am-button(type='warning', shape='round') warning
      am-button(type='danger', shape='round') danger
    pre
      | am-button(type='default', shape='round') default
      | am-button(type='primary', shape='round') primary
      | am-button(type='secondary', shape='round') secondary
      | am-button(type='success', shape='round') success
      | am-button(type='warning', shape='round') warning
      | am-button(type='danger', shape='round') danger
    h2 Active
    .buttons
      am-button(type='default', active) default
      am-button(type='primary', active) primary
      am-button(type='secondary', active) secondary
      am-button(type='success', active) success
      am-button(type='warning', active) warning
      am-button(type='danger', active) danger
    pre
      | am-button(type='default', active) default
      | am-button(type='primary', active) primary
      | am-button(type='secondary', active) secondary
      | am-button(type='success', active) success
      | am-button(type='warning', active) warning
      | am-button(type='danger', active) danger
    h2 Disabled
    .buttons
      am-button(type='default', disabled) default
      am-button(type='primary', disabled) primary
      am-button(type='secondary', disabled) secondary
      am-button(type='success', disabled) success
      am-button(type='warning', disabled) warning
      am-button(type='danger', disabled) danger
    pre
      | am-button(type='default', disabled) default
      | am-button(type='primary', disabled) primary
      | am-button(type='secondary', disabled) secondary
      | am-button(type='success', disabled) success
      | am-button(type='warning', disabled) warning
      | am-button(type='danger', disabled) danger
    h2 Size
    .buttons
      am-button(type='default', size='xl') default-xl
      am-button(type='default', size='lg') default-lg
      am-button(type='default', size='md') default-md
      am-button(type='default', size='sm') default-sm
      am-button(type='default', size='xs') default-xs
    .buttons
      am-button(type='primary', size='xl') primary-xl
      am-button(type='primary', size='lg') primary-lg
      am-button(type='primary', size='md') primary-md
      am-button(type='primary', size='sm') primary-sm
      am-button(type='primary', size='xs') primary-xs
    pre
      | .buttons
      |   am-button(type='default', size='xl') default-xl
      |   am-button(type='default', size='lg') default-lg
      |   am-button(type='default', size='md') default-md
      |   am-button(type='default', size='sm') default-sm
      |   am-button(type='default', size='xs') default-xs
      | .buttons
      |   am-button(type='primary', size='xl') primary-xl
      |   am-button(type='primary', size='lg') primary-lg
      |   am-button(type='primary', size='md') primary-md
      |   am-button(type='primary', size='sm') primary-sm
      |   am-button(type='primary', size='xs') primary-xs
    h2 Icon
    .buttons
      am-button(type='default', icon='cog')  Setting
      am-button(type='warning', icon='shopping-cart')  Purchase
      am-button(type='default')
        i.am-icon-spinner.am-icon-spin
        |  Loading
    pre
      | am-button(type='default', icon='cog')  Setting
      | am-button(type='warning', icon='shopping-cart')  Purchase
      | am-button(type='default')
      |   i.am-icon-spinner.am-icon-spin
      |   |  Loading
</template>

<script>
import AmButton from '@/components/Button'

export default {
  data () {
    return {
    }
  },
  components: {
    AmButton
  }
}
</script>

<style lang='less' scoped>

.buttons {
  text-align: center;
}

.am-btn {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
