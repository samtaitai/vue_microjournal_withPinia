<template>
    <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div 
    class="modal-card"
    ref="modalCardRef">
        <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
        Are you sure you want to delete this note?
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
            <button 
            @click="closeModal"
            class="button">Cancel</button>
            <button 
            @click="storeNotes.deleteNote(noteId)"
            class="button is-danger">Delete</button>
        </div>
        </footer>
    </div>
    </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import {ref, onMounted, onUnmounted} from 'vue'
import {useStoreNotes} from '../../stores/storeNotes.js'

//props
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId: {
        type: String,
        required: true
    }
})

//emit
const emit = defineEmits(['update:modelValue'])

//store
const storeNotes = useStoreNotes()

//close modal
const closeModal = () => {
    emit('update:modelValue', false)
}

//click outside
const modalCardRef = ref(null)
onClickOutside(modalCardRef, closeModal)

//keyboard control
const handleKeyboard = e => {
    if (e.key == 'Escape') closeModal()
}
onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
})
onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
})
</script>