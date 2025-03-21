<template>
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                Featured
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
               <router-link to="/">Home</router-link></li>
            <li class="list-group-item">
                <router-link to="/about">About</router-link>
            </li>
            <li class="list-group-item">
                <router-link to="/add">Add</router-link>
            </li>
            <li class="list-group-item">
                <router-link to="/contactUs">Contact Us</router-link>
            </li>
            </ul>
        </div>
  </template>
  
  
  <script>
  export default{
  
  }
  </script>
  
  <style>
  a{
    text-decoration: none;
    color: #aaa;
    text-decoration: uppercase;
  }
  
  a:hover{
    text-decoration: underline;
    cursor: pointer;
  }

  a:active{
    color: #bbb
  }
  </style>