<template>
      <div v-if="showSucess()" class="alert alert-success" role="alert">
            Record Added!!
          </div>
          <div v-if="showError()" class="alert alert-danger" role="alert">
            Something is wrong, Please verify your form
      </div>
    <div class="card">
      <form class="p-4" @submit.prevent="addUsers">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="userloginid" class="form-label">User Login ID</label>
            <input type="text" class="form-control" id="userloginid" v-model="formData.userloginid" placeholder="Enter User Login ID">
          </div>
          <div class="col-md-6 mb-3">
            <label for="username" class="form-label">User Full Name</label>
            <input type="text" class="form-control" id="username" v-model="formData.username" placeholder="Enter User Full Name">
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="userid" class="form-label">User Identification No</label>
            <input type="text" class="form-control" id="userid" v-model="formData.userid" placeholder="Enter User Identification No">
          </div>
          <div class="col-md-6 mb-3">
            <label for="usergroup" class="form-label">User Group Name</label>
            <input type="text" class="form-control" id="usergroup" v-model="formData.usergroup" placeholder="Enter User Group Name">
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="location" class="form-label">User Location</label>
            <input type="text" class="form-control" id="location" v-model="formData.location" placeholder="Enter User Location">
          </div>
          <div class="col-md-6 mb-3">
            <label for="branch" class="form-label">Own Branch Code</label>
            <input type="text" class="form-control" id="branch" v-model="formData.branch" placeholder="Enter Own Branch Code">
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="startdate" class="form-label">Profile Start Date</label>
            <input type="date" class="form-control" id="startdate" v-model="formData.startdate">
          </div>
          <div class="col-md-6 mb-3">
            <label for="status" class="form-label">Status</label>
            <input type="text" class="form-control" id="status" v-model="formData.status" placeholder="Enter Status">
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="lastlogindate" class="form-label">Last Login Date</label>
            <input type="date" class="form-control" id="lastlogindate" v-model="formData.lastlogindate">
          </div>
          <div class="col-md-6 mb-3">
            <label for="accountlocked" class="form-label">Account Locked</label>
            <select class="form-select" id="accountlocked" v-model="formData.accountlocked">
              <option disabled selected>Select Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="formData.email" placeholder="Enter Email">
          </div>
          <div class="col-md-6 mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select class="form-select" id="gender" v-model="formData.gender">
              <option disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="regbranch" class="form-label">Regional Branch Code</label>
            <input type="text" class="form-control" id="regbranch" v-model="formData.regbranch" placeholder="Enter Regional Branch Code">
          </div>
          <div class="col-md-6 mb-3">
            <label for="enddate" class="form-label">Profile End Date</label>
            <input type="date" class="form-control" id="enddate" v-model="formData.enddate">
          </div>
        </div>
        
        <div class="text-center mt-4">
          <button type="submit" class="btn btn-primary me-2" @click="addUser">
            <i class="fas fa-save"></i> Save
          </button>
          <button type="reset" class="btn btn-secondary" @click="resetForm">
            <i class="fas fa-times"></i> Cancel
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      users: [],
      formData: {
        userloginid: "",
        username: "",
        userid: "",
        usergroup: "",
        location: "",
        branch: "",
        startdate: "",
        status: "",
        lastlogindate: "",
        accountlocked: "no",
        email: "",
        gender: "male",
        regbranch: "",
        enddate: "",
      },
      loading:false,
      showSucess:false,
      showError:false
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch("http://localhost:5000/users");
        this.users = await response.json();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async addUser() {
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.formData),
    });

    if (!response.ok) {
      throw new Error("Failed to add user");
    }

    const newUser = await response.json(); // Wait for JSON response
    this.users.push(newUser); // Update local users array
    //alert("User added successfully!");
    setTimeout(() => {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }, 2000);
  } catch (error) {
    console.error("Error adding user:", error);
    //alert(`Error: ${error.message}`);
    this.showError = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }
  },
  },

  mounted() {
    this.fetchUsers();
  },
};
</script>