import type { Note } from "@/stores/note";
import type { Credential } from "@/stores/password"
import { noteStateMock, passwordStateMock } from "./data";

export const getCredentials_fake = ():Promise<Credential[]> => {
    return new Promise<Credential[]>((resolve, reject) => {
        setTimeout(()=>{
            resolve(passwordStateMock.credentials)
        }, 1000)
        console.log('Timeout started to mock backend API')
    });
}


export const getNotes_fake = ():Promise<Note[]> => {
    return new Promise<Note[]>((resolve, reject) => {
        setTimeout(()=>{
            resolve(noteStateMock.notes)
        }, 1000)
        console.log('Timeout started to mock backend API')
    });
}