<script setup lang="ts">
const { data: providers } = await useFetch('/api/auth/providers')
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
      
            <LoginForm />

            <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
                    role="button">
                    <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                </a>
                
<GithubLogin />

        </div>
    </div>
</div>
</section>


</template>