<template>
    <div class="login-container" :class="{ 'slide-out': navigateToHome }">
      <form @submit.prevent="login">
        <div>
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <p v-if="emailError" class="error">{{ emailError }}</p>
        </div>
  
        <div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </div>
  
  
        <div class="controls">
          <button class="control-btn" type="submit" @click="navigateToHome = true">Login</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        navigateToHome: false,
      };
    },
    methods: {
      login() {
        this.emailError = this.validateEmail(this.email);
        this.passwordError = this.validatePassword(this.password);
  
        if (!this.emailError && !this.passwordError) {
          setTimeout(() => {
            console.log("Redirect to home page here");
            this.$router.push("/documentation");
          }, 2000); // Wait 2 seconds for animation
  
          // Animation
          this.navigateToHome = true;
        }
      },
      validateEmail(email) {
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(email) ? "" : "Please enter a valid email address.";
      },
      validatePassword(password) {
        if (password.length < 8) {
          return "Password must be at least 8 characters long.";
        } else if (!/\d/.test(password)) {
          return "Password must contain at least one number.";
        } else if (!/[A-Za-z]/.test(password)) {
          return "Password must contain at least one letter.";
        } else {
          return "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: transform 2s;
  }
  
  .slide-out {
    transform: translateX(100%);
  }
  
  .input-group {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  .controls {
    text-align: center;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .control-btn {
    padding: 10px 20px;
    background-color: #4CAF50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 12px;
  }
  
  .control-btn:hover {
    background-color: #45a049;
  }
  
  .error {
    color: red;
  }
  </style>
  