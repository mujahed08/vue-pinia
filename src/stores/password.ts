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

