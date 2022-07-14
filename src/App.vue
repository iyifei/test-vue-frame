<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="top">
          <div class="top-left">
            <div class="logo">测试框架</div>
            <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                router
                background-color="#34495E"
                text-color="#fff"
                active-text-color="#40B180"
            >
              <el-menu-item index="/">首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">北京业务</template>
                <el-menu-item title="收款订单" index="/about">收款订单</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" >消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
          </div>
          <div class="top-right">
            <el-link style="margin-right: 10px; color: white;"
            ><i class="fa fa-sign-in"></i>登录
            </el-link
            >
            <el-link style="color: white;"><i class="fa fa-user"></i>个人中心</el-link>
            <el-link style="margin:0 10px; color: white;"
            ><i class="fa fa-sign-out"></i>退出
            </el-link
            >
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
body {
  margin: 0;
}

.el-header {
  padding: 0 !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  font-weight: bold;
}
</style>
<style lang="scss" scoped>
.avatar {
  cursor: pointer;
}

.top {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #34495E;
  position: fixed;
  top: 0;
  z-index: 15001;

  .top-left {
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .top-right {
    padding-right: 10px;
    color: white;
  }

  .logo {
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 4px;
    margin-right: 20px;
  }
}
</style>
