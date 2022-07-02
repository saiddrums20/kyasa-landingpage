<template>
    <div>
        <!-- Navbar-->
        <b-navbar toggleable="lg" :class="alternateNavbar()" fixed="top">
            <div class="container">
                <b-navbar-brand href="#homepage" class="align-middle">
                    <div :class="alternateLogo()"></div>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#services"><span :class="alternateNavbar()" >Servicios</span></b-nav-item>
                    <b-nav-item href="#services"><span :class="alternateNavbar()" >Clientes</span></b-nav-item>
                    <b-nav-item href="/"><span :class="alternateNavbar()" >Vacantes</span></b-nav-item>
                    <b-nav-item href="#contact"><span :class="alternateNavbar()" >Contacto</span></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>

        <!-- Home Section-->
        <div id="homepage" class="full-height">
            <div class="container hero-container home-section">
                <b-row align-v="center">
                    <b-col class="hero-title">
                        <h1 class="mx-2">Líder en integración de productos y servicios</h1>
                        <p class="my-4 mx-2">Se parte de la nueva era de integración de sistemas electrónicos</p>
                        <b-button class="mt-2" squared variant="primary">Contáctanos</b-button>
                    </b-col>
                </b-row>
            </div>
        </div>


         <!--Mision-->
        <div id="mision">
            <b-row>
                <b-col class="bg-dark" md>
                </b-col>
                <b-col class="bg-light" md>
                    <b-container class="text-left mission">
                        <h1>La tecnología a tu alcance</h1>
                        <p class="mt-4">Ofrecemos solución en el suministro, proyecto e integración de sistemas electrónicos bajo la filosofía Kaizen; con precios justos y competitivos para la satisfacción de nuestros clientes.</p>
                        <b-button class="mt-4" squared variant="primary">Conoce nuestro clientes</b-button>
                    </b-container>
                </b-col>
            </b-row>            
        </div>

        <!--Solutions Title-->
        <div id="solutions" class="vertical-center">
            <b-row md>
                    <b-container class="text-center solutions-title">
                        <h1>Soluciones integrales con éxito garantizado.</h1>
                    </b-container>
            </b-row>            
        </div>

        <!-- Servicios -->
       <div id="services">
            <b-row md no-gutters>
                <b-col md class="services-cards">
                    <b-row class="services-img"><b-img src="https://picsum.photos/300/150/?image=41" alt="Fluid image"></b-img></b-row>
                    <b-row align-v="center">
                        <b-container class="text-left services-container">
                            <h3 class="mt-4">Alarmas de Intrusión</h3>
                            <p class="mt-4">Su tranquilidad es importante para nosotros, por eso le ofrecemos lo mejor en alarmas de este tipo.</p>
                        </b-container>
                    </b-row>
                </b-col>
                <b-col md class="services-cards-alt">
                    <b-row class="services-img"><b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img></b-row>
                    <b-row  align-v="center">
                        <b-container class="text-left services-container-alt">
                            <h3 class="mt-4">Alarma de incendio</h3>
                            <p class="mt-4">Sistemas de detección temprana de incendio con integración a la medida apegados a normas establecidas.</p>
                        </b-container>
                    </b-row>
                </b-col>
                <b-col md class="services-cards">
                    <div class="services-img"><b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img></div>
                    <b-row  align-v="center">
                        <b-container class="text-left services-container">
                            <h3 class="mt-4">Sistema de CCTV</h3>
                            <p class="mt-4">Solución profesional de video vigilancia en sitio o remotamente con la facilidad de creación de salas de videomonitoreo.</p>
                        </b-container>
                    </b-row>
                </b-col>
                <b-col md class="services-cards-alt">
                    <div class="services-img"><b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img></div>
                    <b-row align-v="center">
                        <b-container class="text-left services-container-alt">
                            <h3 class="mt-4">Control de acceso</h3>
                            <p class="mt-4">Control peatonal y vehicular de accesos administrables.</p>
                        </b-container>
                    </b-row>
                </b-col>
            </b-row>
            <b-row md no-gutters>
                <b-col md class="services-cards">
                    <div class="services-img"><b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img></div>
                    <b-row md align-v="center">
                        <b-container class="text-left services-container">
                            <h3 class="mt-4">Redes de datos</h3>
                            <p class="mt-4">Arquitectura en IT, en redes de datos, desde LAN hasta WLAN, la conectividad óptima.</p>
                        </b-container>
                    </b-row>
                </b-col>
                <b-col md class="services-cards-alt">
                    <div class="services-img"><b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img></div>
                    <b-row md align-v="center">
                        <b-container class="text-left services-container-alt">
                            <h3 class="mt-4">Redes de voz</h3>
                            <p class="mt-4">Tu comunicación por medio de voz, telefonía convencional o ingresa a la nueva era de comunicación por IP y/o VoIP.</p>
                        </b-container>
                    </b-row>
                </b-col>
                <b-col md class="services-cards">
                    <div class="services-img"><b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img></div>
                    <b-row md align-v="center">
                        <b-container class="text-left services-container">
                            <h3 class="mt-4">CATV</h3>
                            <p class="mt-4">Disfruta de tu señal de TV en redes locales.</p>
                        </b-container>
                    </b-row>
                </b-col>
                <b-col md class="services-cards-alt">
                    <div class="services-img"><b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img></div>
                    <b-row md align-v="center">
                        <b-container class="text-left services-container-alt">
                            <h3 class="mt-4">Video/Audio</h3>
                            <p class="mt-4">Las mejores experiencias en video y audio.</p>
                        </b-container>
                    </b-row>
                </b-col>
            </b-row>
        </div>

        <!-- Clientess -->
        <div id="clientes" class="bg-light vertical-center clientes">
            <b-row md>
                <b-container>
                <h2 class="clientes-h2">Empresas y clientes que confían en nosotros</h2>
                <p class="mb-4">Ofreciendo nuestros servicios desde 2004.</p>
                <b-row class="mt-4">
                    <b-col>
                        <b-img :src="require('../assets/img/timsa.png')" height="120" width="120" fluid></b-img>
                    </b-col>
                    <b-col>
                        <b-img :src="require('../assets/img/timsa.png')" height="120" width="120" fluid></b-img>
                    </b-col>
                    <b-col>
                        <b-img :src="require('../assets/img/timsa.png')" height="120" width="120" fluid></b-img>
                    </b-col>
                </b-row>
                <b-row >
                    <b-col>
                        <b-img :src="require('../assets/img/timsa.png')" height="120" width="120" fluid></b-img>
                    </b-col>
                    <b-col>
                        <b-img :src="require('../assets/img/timsa.png')" height="120" width="120" fluid></b-img>
                    </b-col>
                    <b-col>
                        <b-img :src="require('../assets/img/timsa.png')" height="120" width="120" fluid></b-img>
                    </b-col>
                </b-row>
            </b-container>
            </b-row>
        </div>

        <!-- Vacantes 
        <div id="vacantes" class="bg-info">
            <h1> Vacantes </h1>
            <b-row>
                <b-col md>
                    <h5>Vacante 1</h5>
                </b-col>
                <b-col md>
                     <h5>Vacante 2</h5>
                </b-col>
            </b-row>            
        </div>-->

        <!-- footer -->
        <div id="footer">
            <div class="container">
                <p class="mb-0">©Kyasa 2022. All Rights Reserved.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomePage",

    data(){
        return {
            scrollPosition: null,
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },

        alternateNavbar() {
            return this.scrollPosition > 40 ? "change_color" : "change_color2";
        },

        alternateLogo() {
            return this.scrollPosition > 40 ? "logoKyasaAlt" : "logoKyasa";
        }
    }

}
</script>
<style scoped lang="scss">

#homepage{
    background: /*rgb(0, 50, 106)*/ url('../assets/img/black.jpg') no-repeat center center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    text-align: center;
}


#clientes{
    height: 60vh;
}

#solutions {
    height: 30vh;
}

#vacantes{
    height: 60vh;
}

#footer{
    min-height: 10vh;
    background: #383838;
    font-size: 15px;
    margin: 0;
    color: #fff;
    letter-spacing: 1.7px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.home-container{
    height: 100vh;
}

.navbar-brand .logoKyasa {
  background: url('../assets/img/kyasa_logo_white.png');
  height: 75px;
  background-size: cover;
  width: 240px;
}

.navbar-brand .logoKyasaAlt {
  background: url('../assets/img/kyasa_logo.png');
  height: 50px;
  background-size: cover;
  width: 180px;
}

.hero-title h1{
    color: white;
    font-size: 50px;
    font-weight: 600;
}
.solutions-title h1{
    color: black;
    font-size: 40px;
    font-weight: 600;
}

.hero-title p{
    color: white;
    font-size: 20px;
}

.change_color {
    background-color:white;
    color: #555555;
    transition: 0.5s;
}

.change_color2 {
    background-color: transparent;
    color: white;
    transition: 0.5s;
}

.navbar-light .navbar-nav .nav-link {
    color: #ffffff;
    margin-right: 1rem;
    font-weight: 400;
}

.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-section .row{
    height: 100vh;
    margin-right: 0;
}
.row {
    //++height: 100%;
    margin-right: 0;
    margin-left: 0;
}
.card-body {
    min-height: 15rem;
}

.card {
    border-radius: 0;
    background-color: #1b1b1b;
    border-right: 10px;
    border-color: #555555;
}

h4 {
    margin: 1.33em 0;
    font-size: 24px;
    font-weight: 700;
}

.logoCloud .col {
    background-color: #f3f2f2;
    margin: 1.5px;
}

.logoCloud .col .img-fluid {
   height: 100px;
   width: 1000px;
}

.mission h1 {
    font-size: 24px;
    font-weight: 700;
    color: #1b1b1b;
}

.services-container h3{
    font-size: 28px;
    font-weight: 700;
}
.services-container-alt h3{
    font-size: 28px;
    font-weight: 700;
}
.services-cards{
    background-color: #1b1b1b;
    color: white;
    height: 400px
}
.services-cards-alt{
    background-color: white;
    color: back;
    height: 400px
}

.mission {
    height: 100%;
    padding: 15%;
    padding-top: 25%;
}
.services-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
}
.col {
    margin: 30px;
}
.clientes-h2{
    font-size: 32px;
    font-weight: 700;
}

</style>