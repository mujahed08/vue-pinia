import { getNotes_fake } from '@/api'
import { defineStore } from 'pinia'

export interface Note {
    title: string
    content: string
}

export interface NoteState{
    notes: Note[]
}

const getState = ():NoteState => {
  
    return {
        notes: [] as Note[],
    } as NoteState;
}

const useNoteStore = defineStore('note', {
  // a function that returns a fresh state
  state: () => getState(),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    getCredentials: (state) => state.notes,
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
  },
})

export default useNoteStore;

