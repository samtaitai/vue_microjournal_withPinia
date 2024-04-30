<template>
    <div class="notes">
        <AddEditNote
        v-model="newNote"
        placeholder="Add a new note"
        ref="addEditNoteRef">
            <template v-slot:buttons>
                <button 
                    @click="addNote"
                    :disabled="!newNote"
                    class="button is-link has-background-success-dark">Add New Note</button>
            </template>
        </AddEditNote>
        <Note
            v-for="note in storeNotes.notes" 
            :key="note.id"
            :note="note"
        ></Note>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Note from '../components/Notes/Note.vue'
import AddEditNote from '../components/Notes/AddEditNote.vue'
import {useStoreNotes} from '../stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

//store
const storeNotes = useStoreNotes()

//notes
const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
}

//watch
useWatchCharacters(newNote)

</script>