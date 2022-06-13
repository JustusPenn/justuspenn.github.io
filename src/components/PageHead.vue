<template>
    <div class="container">
        <header class="d-block d-md-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <ul class="nav mb-2 justify-content-center mb-md-0">
                <li><router-link to="/portfolio" class="nav-link px-2">Portfolio</router-link></li>
                <li><router-link to="/contact" class="nav-link px-2">Contact</router-link></li>
            </ul>

            <routerLink to="/" class="d-flex align-items-center justify-content-center mb-2 mb-md-0 text-dark text-decoration-none mx-auto text-center">
                <img :src="logo" alt="" class="logo">
            </routerLink>

            <ul class="d-block text-center text-md-end social-links">
                <li class="icon facebook"><fa-icon :icon="['fab', 'facebook']"/></li>
                <li class="icon linkedin"><fa-icon :icon="['fab', 'linkedin-in']"/></li>
                <li class="icon github"><fa-icon :icon="['fab', 'github']"/></li>
                <li class="icon whatsapp"><fa-icon :icon="['fab', 'whatsapp']"/></li>
                <li class="icon instagram"><fa-icon :icon="['fab', 'instagram']"/></li>
            </ul>
        </header>
    </div>        
</template>

<script>
import image from '../assets/logo.png'
export default {
    data(){
        return{
            logo: image,
        }
    }
}
</script>

<style>

</style>