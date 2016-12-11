<template>
  <div class="command">
    <p>
      {{description}}
      <code>@disbott {{command}}</code>
    </p>
  </div>
</template>

<script>
export default {
  name: 'command',
  props: [
    'description',
    'command',
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
code {
  background: #333;
  color: #fff;
  border-radius: 5px;
  font-size: .75rem;
  padding: 5px;
}
</style>
