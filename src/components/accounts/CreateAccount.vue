<template>
  <form action="">
    <div class="container px-3">
      <h3>Create new account</h3>
      
        <label for="userid">User-Id </label>
     <div class="divider"/>
        <input class="userid" type="text" />
    
      <br><br>
        
          <label for="dropdown">Type of account </label>
         
          <div class="divider"/>
          <select>
            <option selected>Select account type</option>
            <option value="1">Current</option>
            <option value="2">Saving</option>
          </select>
         
          <br><br>
          
          <button type="button" margin-right="10px" class="btn btn-success">Create</button>
          <div class="divider"/>
          <button type="button" class="btn btn-danger" @click="this.$router.push('/');">Cancel</button>
          
      </div>
  
  </form>
</template>

<script>
export default {};
</script>

<style>
.divider{
    width:8px;
    height:auto;
    display:inline-block;
}
</style>