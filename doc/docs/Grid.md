# Grid

## Basic

:::demo
```html
<am-row>
  <am-col :span="12" class="grid-content bg-purple"></am-col>
</am-row>
<am-row>
  <am-col :span="6" class="grid-content bg-purple"></am-col>
  <am-col :span="6" class="grid-content bg-purple-light"></am-col>
</am-row>
<am-row>
  <am-col :span="4" class="grid-content bg-purple-light"></am-col>
  <am-col :span="4" class="grid-content bg-purple"></am-col>
  <am-col :span="4" class="grid-content bg-purple-light"></am-col>
</am-row>
<am-row>
  <am-col :span="3" class="grid-content bg-purple"></am-col>
  <am-col :span="3" class="grid-content bg-purple-light"></am-col>
  <am-col :span="3" class="grid-content bg-purple"></am-col>
  <am-col :span="3" class="grid-content bg-purple-light"></am-col>
</am-row>
```

:::

## Gutter

:::demo
```html
<am-row gutter="sm">
  <am-col :span="8"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="4"><div class="grid-content bg-purple"></div></am-col>
</am-row>
<am-row gutter="sm">
  <am-col :span="4"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="4"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="2"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="2"><div class="grid-content bg-purple"></div></am-col>
</am-row>
<am-row gutter="sm">
  <am-col :span="2"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="8"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="2"><div class="grid-content bg-purple"></div></am-col>
</am-row>
```
:::

## Offset

:::demo
```html
<am-row gutter="sm">
  <am-col :span="3"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="3" :offset="3"><div class="grid-content bg-purple"></div></am-col>
</am-row>
<am-row gutter="sm">
  <am-col :span="3" :offset="3"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="3" :offset="3"><div class="grid-content bg-purple"></div></am-col>
</am-row>
<am-row gutter="sm">
  <am-col :span="6" :offset="3"><div class="grid-content bg-purple"></div></am-col>
</am-row>
```
:::

## Reactive

:::demo
```html
<am-row gutter="sm">
  <am-col :span="{ sm:'3', md:'2', lg:'1'}"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="{ sm:'3', md:'4', lg:'5'}"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="{ sm:'3', md:'4', lg:'5'}"><div class="grid-content bg-purple"></div></am-col>
  <am-col :span="{ sm:'3', md:'2', lg:'1'}"><div class="grid-content bg-purple"></div></am-col>
</am-row>
```
:::

<style>
.am-row {
  margin-bottom: 1rem;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 3rem;
}
</style>
