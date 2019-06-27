<template>
  <div>
    <div>表单验证</div>
    <br/>
    <!-- 使用组件 -->
     <formCur>
        <formitem>
          <inputCur placeholder = "username"></inputCur>
        </formitem>
     </formCur>
  </div>
</template>

<script>
import formCur from "@/components/form/formCur"; //引入
import formitem from "@/components/form/formitem";
import inputCur from "@/components/form/inputCur";
export default {
  name: "Input",
  // 注册
  components: {
    formCur,
    formitem,
    inputCur
  }
};
</script>


<style scoped>
</style>
