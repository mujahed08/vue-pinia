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

