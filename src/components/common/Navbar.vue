<template>
  <div>
    <b-navbar toggeable="lg" type="light" variant="light" fixed="top">
        <div class="container">
            <b-navbar-brand to="/">
                <img src="@/assets/img/kyasa_logo.png"/>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" />

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#about">Nosotros</b-nav-item>
                    <b-nav-item href="#services">Servicios</b-nav-item>
                    <b-nav-item href="/">Vacantes</b-nav-item>
                    <b-nav-item href="#contact">Contacto</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: "NavbarCommon"
}
</script>

<style scoped lang="scss">
.navbar .navbar-brand img {
  height: 50px;
}

.navbar.scrolled {
  background-color: rgb(193, 68, 68) !important;
  transition: background-color 200ms linear;
}

</style>