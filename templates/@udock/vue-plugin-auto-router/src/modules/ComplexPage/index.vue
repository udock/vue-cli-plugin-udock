<template>
  <div>
    complex page
    <div>
      <router-link to="/ComplexPage/">Index</router-link> |
      <router-link to="/ComplexPage/SubPage1">SubPage1</router-link> |
      <router-link to="/ComplexPage/SubPage2">SubPage2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
