<template>
    <nav 
        class="navbar is-success" 
        role="navigation" 
        aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Noteballs
                </div>
                <a 
                class="navbar-burger" 
                role="button" 
                @click.prevent="showMobileNav = !showMobileNav"
                :class="{'is-active' : showMobileNav}"
                aria-label="menu" 
                aria-expanded="false" 
                data-target="navbarBasicExample"
                ref="navbarBurgerRef"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div 
            id="navbarBasicExample" 
            class="navbar-menu" 
            :class="{'is-active' : showMobileNav}"
            ref="navbarMenuRef"
            >
                <div class="navbar-end">
                    <RouterLink 
                    @click="showMobileNav = false"
                    to="/" class="navbar-item" active-class="is-active">
                        Notes
                    </RouterLink>
                    <RouterLink 
                    @click="showMobileNav = false"
                    to="/stats" class="navbar-item" active-class="is-active">
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>
        
    </nav>
</template>

<script setup>
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core";

/* mobile nav */
const showMobileNav = ref(false)

//click outside
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)
onClickOutside(navbarMenuRef, (event) => {
    showMobileNav.value = false
}, {
    ignore: [navbarBurgerRef]
})

</script>