<template>
    <div class="page">
        <div class="button">
            <el-button type="success" @click="dialogVisible = !dialogVisible">Add Category</el-button>
        </div>
        <el-dialog title="Add New Category" :visible.sync="dialogVisible">
            <el-input placeholder="Input your new Category" v-model="input"></el-input>

            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="addCategory()">Add</el-button>
            </div>
        </el-dialog>
        <div class="table">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                prop="name"
                label="Categories of Communications"
                >
                </el-table-column>
                <el-table-column label="Actions">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" @click="removeRow(scope.$index)">Remove</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      input: '',
      dialogVisible: false,
      tableData: []
    };
  },
  methods: {
    addCategory() {
      this.tableData.push({name: this.input});
      this.saveData();
      this.dialogVisible = !this.dialogVisible
    },
    saveData() {
      localStorage.setItem('categoriesCommunicationsData', JSON.stringify(this.tableData));
    },
    removeRow(index) {
        this.tableData.splice(index, 1);
        this.saveData();
    },
  },
  mounted() {
    // Получаем сохраненные данные из localStorage
    let savedData = localStorage.getItem('categoriesCommunicationsData');
    savedData = JSON.parse(savedData);
    
    // Если данных нет, то добавляю, чтобы для наглядности было видно
    if (!savedData || savedData.length == 0) {
      this.tableData.push({ name: "Family" });
      this.tableData.push({ name: "Friend" });
      this.saveData();
    } else {
      // Преобразуем строку JSON в массив и присваиваем его свойству tableData
      this.tableData = JSON.parse(JSON.stringify(savedData));
    }
  }
};
</script>

<style scoped>
.page {
    margin: 20px;
}
</style>
  