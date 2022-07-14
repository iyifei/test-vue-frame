<template>
  <div class="about">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="allAlign = 'left'">居左</vxe-button>
        <vxe-button @click="allAlign = 'center'">居中</vxe-button>
        <vxe-button @click="allAlign = 'right'">居右</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
        border
        :column-config="{isCurrent: true, isHover: true}"
        :row-config="{isCurrent: true, isHover: true}"
        :align="allAlign"
        height="600"
        @checkbox-all="selectAllEvent"
        @checkbox-change="selectChangeEvent"
        :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="addr"></vxe-column>
    </vxe-table>
    <vxe-pager
        perfect
        :current-page.sync="page6.currentPage"
        :page-size.sync="page6.pageSize"
        :total="page6.totalResult"
        :page-sizes="[10, 20, 100, {label: '大量数据', value: 1000}, {label: '全量数据', value: -1}]"
        :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
      <template #left>
        <vxe-button size="small">
          <template #default>更多操作</template>
          <template #dropdowns>
            <vxe-button type="text">批量修改</vxe-button>
            <vxe-button type="text">批量管理</vxe-button>
            <vxe-button type="text">批量删除</vxe-button>
          </template>
        </vxe-button>
      </template>
      <template #right>
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
      </template>
    </vxe-pager>
  </div>
</template>
<script>
import VXETable from 'vxe-table'

export default {
  data() {
    return {
      allAlign: null,
      page6: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 300
      },
      tableData: [
        {id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc'},
        {id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou'},
        {id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai'},
        {id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai'},
        {id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou'},
        {id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai'},
        {id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai'},
        {id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou'},
        {id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai'},
        {id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai'},
        {id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou'},
        {
          id: 10003,
          name: 'Test3',
          role: 'PM',
          sex: 'Man',
          age: 32,
          address: '虚拟滚动启用后需要等行高，可以通过 row-config.height 修改行的高度虚拟滚动启用后需要等行高，可以通过 row-config.height 修改行的高度虚拟滚动启用后需要等行高，可以通过 row-config.height 修改行的高度'
        },
        {id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai'},
        {id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou'},
        {id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai'},
        {id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai'},
        {id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou'},
        {id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai'},
        {id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai'}
      ]
    }
  },
  methods: {
    selectAllEvent({checked}) {
      const records = this.$refs.xTable1.getCheckboxRecords()
      console.log(checked ? '所有勾选事件' : '所有取消事件', records)
    },
    selectChangeEvent({checked}) {
      const records = this.$refs.xTable1.getCheckboxRecords()
      console.log(checked ? '勾选事件' : '取消事件', records)
    },
    getSelectEvent() {
      let selectRecords = this.$refs.xTable1.getCheckboxRecords()
      VXETable.modal.alert(selectRecords.length)
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  text-align: center;
}
</style>
