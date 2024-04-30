<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input v-model="showDarkModals" 
                type="checkbox" />
            </label>
        </div>
        <button @click="showModal=true">Show modal</button>
        <component 
        v-model="showModal"
        :is="showDarkModals ? ModalDark : Modal"
        title="My modal title (via prop)">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat qui accusamus reprehenderit beatae dolor corrupti quas, 
                in, natus delectus soluta nesciunt itaque eligendi porro sed similique, vel mollitia est nemo.</p>
        </component>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'


const showDarkModals = ref(false)
const showModal = ref(false)


</script>

