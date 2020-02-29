<template>
  <div>
    <br />
    <el-button type="primary" size="small" @click="flag = !flag"
      >button
    </el-button>
    <div v-if="flag" @click="handleClick" :class="{ red: isRed, border: true }">
      test ele
    </div>
    <div :class="classObject">test two</div>
    <div :class="['red', 'border']">test three</div>
  </div>
</template>
<script>
// import { stripScript } from "@/util/validate.js";

export default {
  name: "login",
  components: {},
  data() {
    return {
      flag: true,
      isRed: true,
      hasBorder: true,
      classObject: {
        red: true,
        border: true,
        "font-size18": true
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleClick: function() {
      alert("haha");
    }
  }
};
</script>
<style scoped>
.red {
  color: red;
}

.border {
  width: 100px;
  border: 1px solid gold;
}

.font-size18 {
  font-size: 18px;
}
</style>
