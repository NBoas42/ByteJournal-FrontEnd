import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router';

const BACKEND_URL = import.meta.env.VITE_API_BYTE_JOURNAL_BACKEND;

export const AuthStore = defineStore('counter', () => {

  const email = ref('');
  const password = ref('');
  const token = ref(undefined);
  const loginAttempted = ref(false);

  const login = async ()=> {

    const response = await fetch(`${BACKEND_URL}/v0/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const data = await response.json();

    loginAttempted.value = true;
    password.value = '';

    if(response.status === 200) {
      email.value = '';
      token.value = data;
      router.push('/dashboard');
    }
    
  }

  return { 
    email, 
    password,
    token,
    loginAttempted,
    login 
  }
})
