<template>
    <!-- <section class="container section-top follow">
        <div class="text-center">
            <h1>Follow Me On Instagram</h1>
            <h5>_z3b0</h5>
        </div>
    </section> -->
    <footer class="container">
        <div class="row my-4">
            <div class="col-12 col-md-4 ">
               Copyright &copy; {{ year.getFullYear() }} &dash; JPenn. All Rights Reserved
            </div>
            <div class="col-12 col-md-4 text-center">
                <a href="mailto:justuspenn@gmail.com">justuspenn@gmail.com</a>
            </div>
            <div class="col-12 col-md-4">
                <ul class="d-block text-center text-md-end social-links">
                    <li class="icon facebook"><fa-icon :icon="['fab', 'facebook']"/></li>
                    <li class="icon linkedin"><fa-icon :icon="['fab', 'linkedin-in']"/></li>
                    <li class="icon github"><fa-icon :icon="['fab', 'github']"/></li>
                    <li class="icon whatsapp"><fa-icon :icon="['fab', 'whatsapp']"/></li>
                    <li class="icon instagram"><fa-icon :icon="['fab', 'instagram']"/></li>
                </ul>
            </div>
        </div>
    </footer>
  
</template>

<script>
export default {
    data: ()=>({
        year: new Date(),
    })
}
</script>

<style>

</style>