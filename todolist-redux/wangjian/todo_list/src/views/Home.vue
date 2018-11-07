<template>
  <div class="home">
    <Header />
	<div class="ToDoList">
		<div class="ToDoList_part">
			<div class="listHead">
				<h3>正在进行</h3>
				<span class="doNum">{{doing.length}}</span>
			</div>
			<ul class="list">
				<li class="item" v-for="(item,index) in doing" :key="item.id">
					<div>
						<input type="checkbox" :checked = false @click = 'remove({state:"doing",index:index});push({state:"done",value:item})'>
						<span>{{item}}</span>
					</div>
					<div class="removeItem" @click = 'remove({state:"doing",index:index})'>X</div>
				</li>
			</ul>
		</div>

		<div class="ToDoList_part">
			<div class="listHead">
				<h3>已经完成</h3>
				<span class="doNum">{{done.length}}</span>
			</div>
			<ul class="list opcity_50">
				<li class="item" v-for="(item,index) in done" :key="item.id">
					<div>
						<input type="checkbox" :checked = true @click = 'remove({state:"done",index:index});push({state:"doing",value:item})'>
						<span>{{item}}</span>
					</div>
					<div class="removeItem" @click = 'remove({state:"done",index:index})'>X</div>
				</li>
			</ul>
		</div>
	</div>
	<Footer />
  </div>
</template>

<script>
import Header from "@/components/_header.vue";
import Footer from "@/components/_footer.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
		
	};
  },
  computed: {
    ...mapState(["doing", "done"])
  },
  methods: {
    ...mapMutations(["remove", "push"])
  }
};
</script>

<style>
@import "../assets/css/reset.css";

h3 {
  color: #000;
  font-size: 25px;
}
.ToDoList {
  width: 600px;
  margin: 0 auto;
}
.ToDoList_part {
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(170, 170, 170);
}
.doNum {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  padding: 0 6px;
  margin-right: 5px;
  border-radius: 20px;
  background: #e6e6fa;
  text-align: center;
  color: #666;
  font-size: 14px;
}
.listHead {
  display: flex;
  justify-content: space-between;
}
.item {
  display: flex;
  justify-content: space-between;
  height: 32px;
  line-height: 32px;
  background: #fff;
  margin-top: 10px;
  padding: 0 20px;
  border-radius: 3px;
  border-left: 5px solid #629a9c;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);

  vertical-align: bottom;
}
.item input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
}
.removeItem {
  font-weight: bold;
  color: #e05c47;
  width: 20px;
  height: 20px;
  line-height: 22px;
  border-radius: 20px;
  border: 1px solid #e05c47;
  cursor: pointer;
  margin-top: 5px;
}
.opcity_50 {
  opacity: 0.5;
}
</style>

