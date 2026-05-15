import { ref } from 'vue'
import { defineStore } from 'pinia'

export const AccountStore = defineStore('counter', () => {

  const email = ref('');
  const password = ref('');

  const login = async ()=> {
    console.log(email.value, password.value);
    password.value = '';
  }

  return { 
    email, 
    password,
    login 
  }
})
