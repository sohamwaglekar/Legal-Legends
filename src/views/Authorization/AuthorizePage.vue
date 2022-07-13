<template>
    <div class="blackbg h-screen my-auto">
        <div class="flex justify-around my-auto pt-12 px-16">
            <div class="w-1/2">
            <LoginPage />
            </div>
            <div class="rightborder-on-signup"></div>
            <div class="w-1/2">
            <RegisterPage />
            </div>
        </div>
    </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/SignUpPage.vue";
export default {
    components:{
        LoginPage,
        RegisterPage
    }
}
</script>