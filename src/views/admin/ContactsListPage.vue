<template>
    <div class="page">
        <div class="button">
            <el-button type="success" @click="dialogVisible = !dialogVisible">Add Contact</el-button>
        </div>
        <el-dialog class="dialog" title="Add New Contact" :visible.sync="dialogVisible">
            <el-input class="input-field" placeholder="Input FirstName" v-model="inputFirsName"></el-input>
            <el-input class="input-field" placeholder="Input SecondName" v-model="inputSecondName"></el-input>
            <el-select class="input-field" v-model="inputSelectCategory" placeholder="Choose Category">
                <el-option
                v-for="item in categoriesData"
                :key="item.name"
                :label="item.name"
                :value="item.name">
                </el-option>
            </el-select>

            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="addContact()">Add</el-button>
            </div>
        </el-dialog>


        <el-dialog class="dialog" title="Add New Contact" :visible.sync="dialogDate">


            <el-date-picker
                v-model="changeDateOfLastCommunication"
                type="date"
                placeholder="Pick a day of your last Communication">
            </el-date-picker>

            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogDate = false">Cancel</el-button>
            <el-button type="primary" @click="changeDate()">Change Date</el-button>
            </div>
        </el-dialog>
        <div class="table">
            <el-table
                :data="contactsData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                prop="firstName"
                label="First Name"
                >
                </el-table-column>
                <el-table-column
                prop="secondName"
                label="Second Name"
                >
                </el-table-column>
                <el-table-column
                prop="category"
                label="Category"
                >
                </el-table-column>
                <el-table-column prop="lastCommunication" label="Last Communication">
                    <template slot-scope="scope">
                    <span>
                        {{ getDaysSinceLastCommunication(scope.row.lastCommunication) }} days
                    </span>
                    </template>
                </el-table-column>
                <el-table-column label="Actions">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" @click="removeRow(scope.$index)">Remove</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="Change Date">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="openCalendar(scope.$index)">Change</el-button>
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
        categoriesData: [],
        dialogVisible: false,
        inputFirsName: '',
        inputSecondName: '',
        inputSelectCategory: '',
        contactsData: [],
        dialogDate: false,
        changeDateOfLastCommunication: '',
        indexForChange: null,
    }
},
methods: {
    // Color of Row consist of Last Communication
    tableRowClassName({row, rowIndex}) {

        console.log(row)
        if (this.getDaysSinceLastCommunication(row.lastCommunication) > 60) {
          return 'state-5-row';
        } else if (this.getDaysSinceLastCommunication(row.lastCommunication) > 45) {
          return 'state-4-row';
        } else if (this.getDaysSinceLastCommunication(row.lastCommunication) > 28) {
          return 'state-3-row';
        } else if (this.getDaysSinceLastCommunication(row.lastCommunication) > 14) {
          return 'state-2-row';
        } else if (this.getDaysSinceLastCommunication(row.lastCommunication) > 7) {
          return 'state-1-row';
        }
        return 'state-0-row';
      },
      // Change Date of Last Communication
    changeDate() {
        if (this.changeDateOfLastCommunication) {
            this.contactsData[this.indexForChange].lastCommunication = this.changeDateOfLastCommunication;
            this.dialogDate = !this.dialogDate
        } else {
            console.log(123123123)
        }
    },
    // Add new Contact
    addContact() {
      this.contactsData.push({firstName: this.inputFirsName, secondName: this.inputSecondName, category: this.inputSelectCategory, lastCommunication: new Date()});
      this.saveData();
      this.dialogVisible = !this.dialogVisible
    },
    // Remove the Row from table
    removeRow(index) {
        this.contactsData.splice(index, 1);
        this.saveData();
    },
    // save Data to LokalStorage
    saveData() {
      localStorage.setItem('contactsData', JSON.stringify(this.contactsData));
    },
    // Calculate number of days between today and Last Communication
    getDaysSinceLastCommunication(date) {
      const lastCommunicationDate = new Date(date);
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - lastCommunicationDate.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
      return daysDifference;
    },
    // Open Dialog
    openCalendar(index) {
        console.log(index);
        this.indexForChange = index;
        this.dialogDate = !this.dialogDate
    }

},
mounted() {
    let savedData = localStorage.getItem('categoriesCommunicationsData');
    
    // If there are no data, I add them for better visibility.

    if (!savedData || savedData == []) {
      this.categoriesData.push({ name: "Family" });
      this.categoriesData.push({ name: "Friend" });
      localStorage.setItem('categoriesCommunicationsData', JSON.stringify(this.categoriesData));
    } else {
      // We parse the JSON string into an array and assign it to the tableData property.
      this.categoriesData = JSON.parse(savedData);
    }


    let contactSavedData = localStorage.getItem('contactsData');
    contactSavedData = JSON.parse(contactSavedData);
    const currentDate = new Date();
    // If there is no data, we add some default values to make it visible.
    if (!contactSavedData || contactSavedData.length == 0) {
      this.contactsData.push({ firstName: "Mike", secondName: 'John', category: "Friend", lastCommunication: currentDate.setDate(currentDate.getDate() - 50)});
      this.contactsData.push({ firstName: "Peter", secondName: 'Parker', category: "Work", lastCommunication: currentDate.setDate(currentDate.getDate() + 10)});
      this.contactsData.push({ firstName: "Mike", secondName: 'John', category: "Friend", lastCommunication: currentDate.setDate(currentDate.getDate() + 5)});
      this.contactsData.push({ firstName: "Peter", secondName: 'Parker', category: "Work", lastCommunication: currentDate.setDate(currentDate.getDate() + 4)});
      this.contactsData.push({ firstName: "Mike", secondName: 'John', category: "Friend", lastCommunication: currentDate.setDate(currentDate.getDate() + 5)});
      this.contactsData.push({ firstName: "Peter", secondName: 'Parker', category: "Work", lastCommunication: currentDate.setDate(currentDate.getDate() + 4)});
      this.contactsData.push({ firstName: "Mike", secondName: 'John', category: "Friend", lastCommunication: currentDate.setDate(currentDate.getDate() + 20)});
      this.contactsData.push({ firstName: "Peter", secondName: 'Parker', category: "Work", lastCommunication: currentDate.setDate(currentDate.getDate() - 20)});
      
      
      this.saveData();
    } else {
      // We parse the JSON string into an array and assign it to the property contactsData.
      this.contactsData = JSON.parse(JSON.stringify(contactSavedData));
      console.log(this.contactsData)
    }
}
}
</script>

<style scoped>
.page {
    margin: 20px;
}

.page .dialog .input-field {
    margin: 8px 0 ;
}

.el-table .red-row {
  background: red;
}

.yellow-row {
  background-color: yellow;
}

.green-row {
  background-color: green;
}

</style>

<style>
.el-table .state-0-row {
  background: rgba(60, 179, 113, 0.2); /* Зеленый с прозрачностью 70% */
}

.el-table .state-1-row {
  background: rgba(0, 191, 255, 0.2); /* Светло-голубой с прозрачностью 70% */
}

.el-table .state-2-row {
  background: rgba(255, 215, 0, 0.2); /* Золотистый с прозрачностью 70% */
}

.el-table .state-3-row {
  background: rgba(255, 165, 0, 0.2); /* Оранжевый с прозрачностью 70% */
}

.el-table .state-4-row {
  background: rgba(255, 99, 71, 0.2); /* Темно-лососевый с прозрачностью 70% */
}

.el-table .state-5-row {
  background: rgba(255, 0, 0, 0.2); /* Красный с прозрачностью 70% */
}
</style>
  