<template>
  <div class="nav">
    <el-menu
      class="menu"
      router
      :defaultActive="$route.path"
      textColor="#FFFFFF"
      activeTextColor="#FFFFFF"
      :uniqueOpened="true"
      :collapseTransition="true"
    >
      <template v-for="(route, index) in $router.options.routes">
        <el-submenu
          v-if="route.children && route.children.length >= 0"
          :key="index"
          :index="route.path"
        >
          <template slot="title">
            <img :src="route.meta.icon" class="icon" />
            <span slot="title" class="text-title">
              {{ route.meta.title }}
            </span>
          </template>

          <template
            v-for="child in route.children"
          >
            <el-submenu
              v-if="child.children"
              :key="child.name"
              :index="route.path + '/' + child.path"
            >
              <template slot="title">
                <span slot="title" class="text-title">
                  {{ child.meta.title }}
                </span>
              </template>

              <el-menu-item
                v-for="subchild in child.children"
                :key="subchild.name"
                :index="route.path + '/' + child.path + '/' + subchild.path"
              >
                <span slot="title" class="child-item text-title">
                  {{ subchild.meta.title }}
                </span>
              </el-menu-item>
            </el-submenu>

            <el-menu-item
              v-else
              :key="route.path + '/' + child.path"
              :index="route.path + '/' + child.path"
            >
              <template slot="title">
                <span slot="title" class="child-item text-title">
                  {{ child.meta.title }}
                </span>
              </template>
            </el-menu-item>
          </template>
        </el-submenu>

        <el-menu-item
          v-else
          :key="route.path"
          :index="route.path"
        >
          <img :src="route.meta.icon" class="icon" />
          <span slot="title" class="text-title">
            {{ route.meta.title }}
          </span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  mounted () {
    console.log(this.$router)
  }
}
</script>

<style scoped lang="scss">
.menu {
  border: none;
  margin-bottom: 0;
  position: relative;
  background-color: #68667A;
  height: 100vh;
}
.menu::v-deep.el-menu:not(.el-menu--collapse) {
  min-width: 270px;
}
.child-item {
  font-size: 12px;
}
.profile {
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 20px;
  bottom: 32px;
&__info {
   display: flex;
   flex-direction: column;
   color: white;
   font-size: 12px;
   margin-left: 8px;
 }
}
.icon {
  width: 18px;
  height: 18px;
  margin-left: 2px;
}
.text-title {
  margin-left: 20px;
}
.menu::v-deep > .el-menu-item > .text-title ,
.menu::v-deep > .el-submenu > .el-submenu__title > .text-title  {
  font-size: 16px;
  line-height: 24px;
}
::v-deep .el-submenu .el-menu-item,
::v-deep .el-menu.el-menu--inline .el-submenu__title {
  height: auto;
  font-size: 12px;
  line-height: 16px;
  padding: 4px 45px;
  margin-top: 8px;
}
.menu::v-deep > .el-submenu > .el-menu.el-menu--inline {
  padding-bottom: 14px;
}
::v-deep .el-menu-item:hover,
::v-deep .el-submenu.is-opened .el-menu-item:hover,
::v-deep .el-submenu__title:hover,
.menu::v-deep > .el-submenu.is-active.is-opened > .el-submenu__title {
  background-color: #7F7D91;
}
::v-deep .el-menu.el-menu--inline {
  background-color: #58566A;
}
::v-deep .el-menu-item.is-active,
::v-deep .el-submenu.is-opened .el-menu-item.is-active,
.menu::v-deep > .el-submenu.is-active > .el-submenu__title {
  background-color: #9284FA;
}
::v-deep .el-submenu__title i {
  color: #ffffff;
}
.menu-collapse-enter-active,
.menu-collapse-leave-active {
  transition: transform 0.3s ease;
}
.menu-collapse-enter,
.menu-collapse-leave-to {
  transform: translateX(-100%);
  transition: all 1s ease-in 0s
}
</style>
