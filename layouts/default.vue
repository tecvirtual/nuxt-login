<script setup lang="ts">
const { status, signOut } = useAuth()

const loggedIn = computed( () => status.value === 'authenticated')

</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container">
        <!-- Navbar brand -->
        <a class="navbar-brand me-2" to="/">
          <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="16" alt="MDB Logo"
            loading="lazy" style="margin-top: -1px;" />
        </a>

        <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
          </ul>
          <!-- Left links -->

          <div class="d-flex align-items-center">

           

            <button type="button" class="btn btn-primary me-3">
              Sign up for free
            </button>



            <button v-if="loggedIn"
              class="block py-2 pl-3 pr-4 md:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
              @click="signOut()"
            >
              Sign out
            </button>

            <NuxtLink v-else to="/login" class="btn btn-link px-3 me-2">Login</NuxtLink>

          </div>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
    <slot />
  </div>
</template>