<template>
  <div class="card p-4">
    <h1>Employee List</h1>
    <table class="table table-bordered table-stripped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>ID</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.username }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.userid }}</td>
          <td>{{ employee.gender }}</td>
          <td>
            <button class="btn btn-outline-primary me-3 btn-sm btn-custom" @click="viewPressed(employee.id)">View</button>
            <button class="btn btn-outline-secondary me-3 btn-sm btn-custom" @click="editPressed(employee.id)">Edit</button>
            <button class="btn btn-outline-danger me-3 btn-sm btn-custom" @click="deletePressed(employee.id)">Delete</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default{
  data(){
    return{
      employees : []
    }
  },
  mounted() {
    console.log("component is added to the page/DOM")
    //WE CALL API HERE
    fetch("http://localhost:5000/users")
    .then(response => response.json())
    .then(data => this.employees = data)
    .then(console.log(this.employees))
    .catch(err => `Fetch error ${err}`)

  },
  methods: {
    viewPressed(id){
      this.$router.push(`/detail/${id}`)
      //alert(`View for ${username} is pressed`)
    },
    editPressed(){
      alert(`Edit for ${id} is pressed`)
    },
    deletePressed(){
      alert(`Delete for ${id} is pressed`)
    }
  }
}
</script>


<style>
/* .btn-custom{
  font-size: .75rem;
  padding: 10px;
  text-align: center;
} */
.btn-custom {
  width: 80px; /* Set a fixed width for all buttons */
  text-align: center;
}

</style>
