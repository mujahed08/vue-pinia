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

