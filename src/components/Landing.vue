<template>
    <div class="main-container" id="page-top">
        <!--Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">Kyasa</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#about">Nosotros</a></li>
                        <li class="nav-item"><a class="nav-link" href="#services">Servicios</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Vacantes</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Your Favorite Place for Free Bootstrap Themes</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                        <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
        <!-- About-->
        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 class="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 class="subheading">An Agency is Born</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 class="subheading">Transition to Full Service</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 class="subheading">Phase Two Expansion</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: "LandingPage",

    created: function () {
        window.addEventListener('DOMContentLoaded', () => {

            // Navbar shrink function
            var navbarShrink = function () {
                const navbarCollapsible = document.body.querySelector('#mainNav');
                if (!navbarCollapsible) {
                    return;
                }
                if (window.scrollY === 0) {
                    navbarCollapsible.classList.remove('navbar-shrink')
                } else {
                    navbarCollapsible.classList.add('navbar-shrink')
                }

            };

            // Shrink the navbar 
            navbarShrink();

            // Shrink the navbar when page is scrolled
            document.addEventListener('scroll', navbarShrink);            

            // Collapse responsive navbar when toggler is visible
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            const responsiveNavItems = [].slice.call(
                document.querySelectorAll('#navbarResponsive .nav-link')
            );
            responsiveNavItems.map(function (responsiveNavItem) {
                responsiveNavItem.addEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                });
            });

        });
    }
}
</script>
<style scoped>
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

#mainNav {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  transition: background-color 0.2s ease;
}
#mainNav .navbar-brand {
  font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #212529;
}
#mainNav .navbar-nav .nav-item .nav-link {
  color: #6c757d;
  font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.75rem 0;
}
#mainNav .navbar-nav .nav-item .nav-link:hover, #mainNav .navbar-nav .nav-item .nav-link:active {
  color: #f4623a;
}
#mainNav .navbar-nav .nav-item .nav-link.active {
  color: #f4623a;
}
@media (min-width: 992px) {
  #mainNav {
    box-shadow: none;
    background-color: transparent;
  }
  #mainNav .navbar-brand {
    color: rgba(255, 255, 255, 0.7);
  }
  #mainNav .navbar-brand:hover {
    color: #fff;
  }
  #mainNav .navbar-nav .nav-item .nav-link {
    color: rgba(255, 255, 255, 0.7);
    padding: 0 1rem;
  }
  #mainNav .navbar-nav .nav-item .nav-link:hover {
    color: #fff;
  }
  #mainNav .navbar-nav .nav-item:last-child .nav-link {
    padding-right: 0;
  }
  #mainNav.navbar-shrink {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    background-color: #fff;
  }
  #mainNav.navbar-shrink .navbar-brand {
    color: #212529;
  }
  #mainNav.navbar-shrink .navbar-brand:hover {
    color: #f4623a;
  }
  #mainNav.navbar-shrink .navbar-nav .nav-item .nav-link {
    color: #212529;
  }
  #mainNav.navbar-shrink .navbar-nav .nav-item .nav-link:hover {
    color: #f4623a;
  }
}

header.masthead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
header.masthead h1, header.masthead .h1 {
  font-size: 2.25rem;
}
@media (min-width: 992px) {
  header.masthead {
    height: 100vh;
    min-height: 40rem;
    padding-top: 4.5rem;
    padding-bottom: 0;
  }
  header.masthead p {
    font-size: 1.15rem;
  }
  header.masthead h1, header.masthead .h1 {
    font-size: 3rem;
  }
}
@media (min-width: 1200px) {
  header.masthead h1, header.masthead .h1 {
    font-size: 3.5rem;
  }
}

.page-section {
  padding: 8rem 0;
}

</style>