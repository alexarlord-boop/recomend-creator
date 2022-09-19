<template>
  <div id="about" class="col-md-12">
    <div class="profile profile-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <span v-show="loading">Сейчас перейдем на новую страницу</span>
      <span v-show="!loading">Введите данные</span>
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="user.username"

            type="text"
            class="form-control"
            name="username"
          />
          <!-- <div
            v-if="errors.has('username')"
            class="alert alert-danger"
            role="alert"
          >Username is required!</div> -->
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="user.password"

            type="password"
            class="form-control"
            name="password"
          />
          <!-- <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >Password is required!</div> -->

        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import User from '../models/user'

export default {
  name: 'LoginView',
  data () {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push('/login') // redirect for logged in users
    }
  },
  methods: {
    handleLogin () {
      this.loading = true
      // validation required
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then( // sign in user
          () => {
            setTimeout(() => this.$router.push('/about'), 3000)
          },
          error => {
            this.loading = false
            this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
          }
        )
      }

      // this.$validator.validateAll().then(isValid => {
      //   if (!isValid) {
      //     this.loading = false
      //     return
      //   }

      //   if (this.user.username && this.user.password) {
      //     this.$store.dispatch('auth/login', this.user).then(
      //       () => {
      //         this.$router.push('/profile')
      //       },
      //       error => {
      //         this.loading = false
      //         this.message =
      //           (error.response && error.response.data) ||
      //           error.message ||
      //           error.toString()
      //       }
      //     )
      //   }
      // })
    }
  }
}
</script>

<style scoped>

  #about {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    height: auto;
  }
label {
  display: block;
  margin-top: 10px;
}

.profile-container.card {
  max-width: 350px;
  padding: 20px;
}

.profile {
  background-color: #f7f7f7;
  padding: 10px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

form {
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
