import type { Note, NoteState } from '@/stores/note';
import type { PasswordState, KeyValue, Credential }  from '@/stores/password';

export const noteStateMock:NoteState = {
    notes: [{
        'title' : 'Gmail login', 
        'content' : 'abcdef@gmail.com'
    }]

} as NoteState

export const passwordStateMock:PasswordState = {
    privateKey: 'ddd',
    credentials: [{
        'name' : 'SBI My Passwords', 
        list : [
            {
                'key' : 'Username',
                'value' : 'mujahed08'
            } as KeyValue, 
            {
                'key' : 'Password',
                'value' : 'sudihfboewnd'
            } as KeyValue, 
            {
                'key' : 'Profile Password',
                'value' : 'sjdhbewjowq'
            } as KeyValue
        ]
    } as Credential,]

} as PasswordState