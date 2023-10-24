new Vue({
  el: '#app',
  data: {
    username: '',
    password: '',
  },
  methods: {
    login() {

      if (this.username === '' && this.password === '') {

        window.location.href ="C:\Users\Lenovo\Desktop\site\profil.html";
      } else {

        alert('Parola sau username incorect');
      }
    },
  },
});
