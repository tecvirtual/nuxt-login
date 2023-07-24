<script setup >

definePageMeta({
    layout: "auth",
});


import { ref } from 'vue';


const username = ref('');
const password = ref('');



// Genera el token "Bearer" dinámicamente y asígnalo a runtimeConfig.apiParty.endpoints.jsonPlaceholder.token
//const generatedBearerToken = 'mi_token_generado_dinamicamente';
//runtimeConfig.apiParty.endpoints.jsonPlaceholder.token = generatedBearerToken;

const login = async () => {
    try {
        const response = await useJsonPlaceholderData('auth/login', {
            method: 'POST',
            body: {
                username: username.value,
                password: password.value,
            },
        });



        console.log(response)
        console.log(response.data.value)
        // Aquí puedes manejar la respuesta de la API, por ejemplo, guardar el token en el localStorage.
        if (response) {
            localStorage.setItem('auth-token', response.data.value.token);
        }
    } catch (error) {
        // Manejar errores de la petición aquí
        console.error('Error al iniciar sesión:', error);
    }
};

</script>

<template>
    <section class="vh-100">

   


        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        class="img-fluid" alt="Phone image">
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input type="text" id="form1Example13" class="form-control form-control-lg"
                                v-model="username" />
                            <label class="form-label" for="form1Example13">Username</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <input type="password" id="form1Example23" class="form-control form-control-lg"
                                v-model="password" />
                            <label class="form-label" for="form1Example23">Password</label>
                        </div>

                        <div class="d-flex justify-content-around align-items-center mb-4">
                            <!-- Checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                <label class="form-check-label" for="form1Example3"> Remember me </label>
                            </div>
                            <a href="#!">Forgot password?</a>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary btn-lg btn-block" @click.prevent="login">Sign
                            in</button>

                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>

                        <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
                            role="button">
                            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                        </a>
                        <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
                            role="button">
                            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.divider:after,
.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}
</style>