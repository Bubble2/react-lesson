<template>
	<div class="header">
		<div class="top">
			<div class="inner">
				<label>ToDoList</label>
				<input type="text" placeholder="添加ToDo" @keydown.enter = keydown()>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations(["push"]),
    keydown: function() {
      let el = document.querySelector(".inner input"),
        val = el.value;
      if (val == "") {
        el.classList.add("placeholderRed");
        el.setAttribute("placeholder", "请输入ToDo");
      } else {
        this.push({ state: "doing", value: val });
        // this.$store.commit('push',{st:'doing',value:val});
        el.value = "";
        el.classList.remove("placeholderRed");
        el.setAttribute("placeholder", "添加ToDo");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top {
  height: 50px;
  line-height: 50px;
  background: rgba(47, 47, 47, 0.98);
}
.inner {
  margin: 0 auto;
  width: 600px;
  display: flex;
  justify-content: space-between;
}
.inner label {
  color: #ddd;
  font-size: 24px;
}
.inner input {
  font-size: 13px;
  width: 60%;
  height: 24px;
  margin-top: 12px;
  text-indent: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
    0 1px 6px rgba(0, 0, 0, 0.45) inset;
  background: #fff;
  border: none;
  outline: none;
}
.inner input.placeholderRed::placeholder {
  color: #e05c47;
  font-weight: bold;
}
</style>