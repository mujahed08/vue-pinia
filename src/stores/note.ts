import { getNotes_fake } from '@/api'
import { defineStore } from 'pinia'
import * as CryptoJS from 'crypto-js';

export interface Note {
    title: string
    content: string
}

export interface NoteState{
    notes: Note[]
    privateKey: string
    cipher: string
}
const privateKey = localStorage.getItem('privateKey');

const getState = ():NoteState => {
  
    return {
        notes: [] as Note[],
        privateKey: privateKey,
        cipher: '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'
    } as NoteState;
}

const useNoteStore = defineStore('note', {
  // a function that returns a fresh state
  state: () => getState(),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    getNotes: (state) => state.notes,
  },
  // optional actions
  actions: {
    reset() {
      this.notes.splice(0)
    },
    async callGetNotesAPI() {
        try {
            const data:Note[] = await getNotes_fake()
            console.log(data)
            this.notes.splice(0)
            this.notes.push(...data)
        } catch (error) {
            console.log(error)
        }
    },
    getNotesFromCipher() {
      try {
        let json:string = CryptoJS.AES.decrypt(this.cipher, this.privateKey).toString(CryptoJS.enc.Utf8)
        const data:Note[] = JSON.parse(json) as Note[];
        this.notes.splice(0)
        this.notes.push(...data)
    } catch (error) {
        console.log(error)
    }
    }
  },
})

export default useNoteStore;

