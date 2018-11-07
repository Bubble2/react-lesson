<template>
	<div class="Footer">
		王健 ToDoList
		<button @click = 'clear()'>清除所有记录</button>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Footer",
  methods: {
    ...mapMutations(["clear"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Footer {
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
button {
  background: #e05c47;
  color: #fff;
  border-radius: 5px;
  outline: none;
}
</style>