import { getCredentials_fake } from '@/api'
import { defineStore } from 'pinia'
import * as CryptoJS from 'crypto-js';

export interface KeyValue {
    key: string
    value: string
}
export interface Credential {
    name : string
    list : KeyValue[]
}
export interface PasswordState{
    privateKey: string
    cipher: string
    credentials: Credential[]
}

export const getState_localStorage = ():PasswordState => {

  /*let privateKey = localStorage.getItem('privateKey');
  let cipher = localStorage.getItem('cipher');
  if(null != privateKey && null != cipher) {
    const json = CryptoJS.AES.decrypt(cipher, privateKey).toString(CryptoJS.enc.Utf8);
    const state:PasswordState = {
      privateKey : privateKey,
      cipher : cipher,
      credentials : JSON.parse(json) as Credential[]
    };
    return state;
  }*/
  let privateKey = localStorage.getItem('privateKey');

  return {
    privateKey: privateKey,
    cipher: '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',
    credentials: [] as Credential[],
  } as PasswordState;
}
// main is the name of the store. It is unique across your application
// and will appear in devtools
const usePasswordStore = defineStore('password', {
  // a function that returns a fresh state
  state: () => getState_localStorage(),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    getPrivateKey:  (state) => state.privateKey,
    // use getters in other getters
    getPublicKey(): string {
        let publicKey: string;
        publicKey = this.privateKey + 'private'
        return publicKey;
    },
    getCredentials: (state) => state.credentials,
  },
  // optional actions
  actions: {
    reset() {
      this.privateKey = ''
      this.credentials.splice(0)
    },
    async callGetCredentialsAPI() {
        try {
            const data:Credential[] = await getCredentials_fake()
            console.log(data)
            this.credentials.splice(0)
            this.credentials.push(...data)
        } catch (error) {
            console.log(error)
        }
    },
    saveWithCrypto() {
        try {
            //console.log(data)
            localStorage.setItem('privateKey', this.privateKey)
            localStorage.setItem('cipher', this.cipher)
            let json:string = CryptoJS.AES.decrypt(this.cipher, this.privateKey).toString(CryptoJS.enc.Utf8)
            const data:Credential[] = JSON.parse(json) as Credential[];
            this.credentials.splice(0)
            this.credentials.push(...data)
        } catch (error) {
            console.log(error)
        }
    }
  },
})

export default usePasswordStore;

