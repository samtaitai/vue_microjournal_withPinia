<template>
            <teleport to=".modals-container">
            <div
                v-if="modelValue"
                class="modal">
                <h1>{{ props.title }}</h1>
                <slot></slot>
                <button @click="handleButtonClick">Hide modal</button>
                <div>Username is: {{userData.username}}</div>
            </div>
        </teleport>

</template>

<script setup>
import {inject} from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title specified'
    },
})

const emit = defineEmits([
    'update:modelValue'
])

const userData = inject('userData')

const handleButtonClick = () => {
    emit('update:modelValue', false)
}

</script>

<style>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>