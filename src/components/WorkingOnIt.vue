<template>
    <div class="main-container">
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <header class="masthead mt-auto">
                <div class="inner">
                    <b-img :src="require('../assets/img/kyasa_logo_white.png')" height="100px" width="320px"></b-img>
                </div>
            </header>
            <main role="main" class="inner cover social-icons">
                <h1 class="cover-heading">Próximamente</h1>
                <p class="lead">Nuestro sitio web está bajo construcción, pero nosotros estamos listos para atenderte.</p>
                <p class="lead">
                    <a class="btn btn-dark m-3" href="mailto:contacto@kyasa.mx"><b-icon icon="envelope-fill"></b-icon></a>
                    <a class="btn btn-dark m-3" href="https://www.facebook.com/Kyasa-100993649354907"><b-icon icon="facebook"></b-icon></a>
                </p>
            </main>
            <footer class="mastfoot mt-auto">
                <div class="inner">
                    <p>
                        ©Kyasa 2022. All Rights Reserved
                    </p>
                </div>
            </footer>   
        </div>
    </div>
</template>
<script>

export default {
    name: "WorkingOnIt",
    
}
</script>
<style scoped lang="scss">
/* Links */
a,
a:focus,
a:hover {
  color: #fff ;
}

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: .05rem solid #fff;
}


/*
 * Base structure
 */

.main-container {
  height: 100vh !important;
  background: url('../assets/img/bg-workingonit.jpg') no-repeat center center !important;
  color: #fff !important;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5) !important;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5) !important;
  justify-content: center !important;
  -ms-flex-pack: center !important;
  -webkit-box-pack: center !important;
  display: -ms-flexbox !important;
  display: -webkit-box !important;
  display: flex !important;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 42em;
}


/*
 * Header
 */
.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
  color: #fff;
}

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}


/*
 * Cover
 */
.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: .75rem 1.25rem;
  font-weight: 700;
}


/*
 * Footer
 */
.mastfoot {
  color: rgba(255, 255, 255, .5);
}

.social-icons .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 4rem;
    width: 4rem;
    border-radius: 100rem;
}

.btn-dark {
    color: #000 !important;
    background-color: #fff !important;
    border-color: #fff !important;
}
</style>