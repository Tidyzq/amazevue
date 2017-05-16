# Grid

## Basic

::: demo
```jade
am-row.am-margin-bottom-sm
  am-col(:span='12'): .grid-content.bg-purple
am-row.am-margin-bottom-sm
  am-col(:span='6'): .grid-content.bg-purple
  am-col(:span='6'): .grid-content.bg-purple-light
am-row.am-margin-bottom-sm
  am-col(:span='4'): .grid-content.bg-purple-light
  am-col(:span='4'): .grid-content.bg-purple
  am-col(:span='4'): .grid-content.bg-purple-light
am-row.am-margin-bottom-sm
  am-col(:span='3'): .grid-content.bg-purple
  am-col(:span='3'): .grid-content.bg-purple-light
  am-col(:span='3'): .grid-content.bg-purple
  am-col(:span='3'): .grid-content.bg-purple-light
```
:::

## Gutter

::: demo
```jade
am-row.am-margin-bottom-sm(gutter='sm')
  am-col(:span='8'): .grid-content.bg-purple
  am-col(:span='4'): .grid-content.bg-purple
am-row.am-margin-bottom-sm(gutter='sm')
  am-col(:span='4'): .grid-content.bg-purple
  am-col(:span='4'): .grid-content.bg-purple
  am-col(:span='2'): .grid-content.bg-purple
  am-col(:span='2'): .grid-content.bg-purple
am-row.am-margin-bottom-sm(gutter='sm')
  am-col(:span='2'): .grid-content.bg-purple
  am-col(:span='8'): .grid-content.bg-purple
  am-col(:span='2'): .grid-content.bg-purple
```
:::

## Offset

::: demo
```jade
am-row.am-margin-bottom-sm(gutter='sm')
  am-col(:span='3'): .grid-content.bg-purple
  am-col(:span='3', :offset='3'): .grid-content.bg-purple
am-row.am-margin-bottom-sm(gutter='sm')
  am-col(:span='3', :offset='3'): .grid-content.bg-purple
  am-col(:span='3', :offset='3'): .grid-content.bg-purple
am-row.am-margin-bottom-sm(gutter='sm')
  am-col(:span='6', :offset='3'): .grid-content.bg-purple
```
:::

## Reactive

::: demo
```jade
am-row.am-margin-bottom-sm(gutter='sm')
  am-col(:span=`{ sm:'3', md:'2', lg:'1'}`): .grid-content.bg-purple
  am-col(:span=`{ sm:'3', md:'4', lg:'5'}`): .grid-content.bg-purple
  am-col(:span=`{ sm:'3', md:'4', lg:'5'}`): .grid-content.bg-purple
  am-col(:span=`{ sm:'3', md:'2', lg:'1'}`): .grid-content.bg-purple
```
:::

<script>
export default {
  data () {
    return {
    }
  },
}
</script>

<style>
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
