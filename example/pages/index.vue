<template>
  <div>
    <!-- <nuxt-blurhash
      :hash="'LdHfL}oJR$WBKnfi%3ofT0kCM{ay'"
      :width="'340'"
      :height="'320'"
      :punch="punch"
    /> -->
    <nuxt-blur-image
      width="400"
      height="300"
      hash="LdHfL}oJR$WBKnfi%3ofT0kCM{ay"
      src="https://images.unsplash.com/photo-1545910684-8e7c081be9b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
      alt="green lawn grass during daytime"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      punch: 1
    }
  }
}
</script>
