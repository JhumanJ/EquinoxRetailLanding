<template>
    <footer class="container space-top-2 space-top-md-3">
        <div class="border-bottom">
            <div class="row mb-7">
                <div class="col-lg-3 mb-7 mb-lg-0">
                    <div class="d-inline-flex align-self-start flex-column h-100">
                        <!-- Logo -->
                        <a class="logo d-flex align-items-center mb-3"  aria-label="Equinox">
                            Equinox
                        </a>
                        <!-- End Logo -->

                        <!-- Country -->
                        <div class="position-relative">
                            <a id="footerCountryInvoker" class="dropdown-nav-link" href="javascript:;" role="button" aria-controls="footer-country" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-unfold-event="click" data-unfold-target="#footer-country" data-unfold-type="css-animation" data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                                <span>Paris - France</span>
                            </a>
                        </div>
                        <!-- End Country -->
                    </div>
                </div>

                <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 mb-md-0">
                    <h4 class="h6 font-weight-semi-bold">Private Equity</h4>

                    <!-- List Group -->
                    <ul class="list-group list-group-flush list-group-borderless mb-0">
                        <li><a class="list-group-item list-group-item-action" href="../account/dashboard.html">Définition</a></li>
                        <li><a class="list-group-item list-group-item-action" href="../account/my-tasks.html">Risques</a></li>
                        <li><a class="list-group-item list-group-item-action" href="../account/projects.html">Fiscalité</a></li>
                        <li><a class="list-group-item list-group-item-action" href="../account/invite-friends.html">Liquidité</a></li>
                    </ul>
                    <!-- End List Group -->
                </div>

                <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 mb-md-0">
                    <h4 class="h6 font-weight-semi-bold">Equinox</h4>

                    <!-- List Group -->
                    <ul class="list-group list-group-flush list-group-borderless mb-0">
                        <li><a class="list-group-item list-group-item-action" href="../pages/about-agency.html">L'histoire</a></li>
                        <li><a class="list-group-item list-group-item-action" href="../pages/services-agency.html">L'équipe</a></li>
                        <li><a class="list-group-item list-group-item-action" href="../pages/careers.html">Partenaires</a></li>
                        <li><a class="list-group-item list-group-item-action" href="../blog/grid-right-sidebar.html">Contact</a></li>
                    </ul>
                    <!-- End List Group -->
                </div>

                <div class="col-sm-4 col-md-3 col-lg-2 mb-4 mb-md-0">
                    <h4 class="h6 font-weight-semi-bold">Resources</h4>

                    <!-- List Group -->
                    <ul class="list-group list-group-flush list-group-borderless mb-0">
                        <li><a class="list-group-item list-group-item-action" href="../pages/contacts-agency.html">Presse</a></li>
                        <li><a class="list-group-item list-group-item-action" href="../pages/faq.html">Souscrire</a></li>
                        <li><a class="list-group-item list-group-item-action" href="../pages/terms.html">CGU</a></li>
                    </ul>
                    <!-- End List Group -->
                </div>

                <div class="col-md-3 col-lg-2">
                    <h4 class="h6 font-weight-semi-bold">Contact</h4>

                    <!-- Address -->
                    <address>
                        <ul class="list-group list-group-flush list-group-borderless mb-0">
                            <li class="list-group-item">+33 6 32 32 12 32</li>
                            <li class="list-group-item">
                                <a class="text-blue" href="mailto:support@htmlstream.com">contact@equinox.com</a>
                            </li>
                            <li class="list-group-item">Paris, France</li>
                        </ul>
                    </address>
                    <!-- End Address -->
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center py-7">
            <!-- Copyright -->
            <p class="small text-muted mb-0">© Equinox. 2020</p>
            <!-- End Copyright -->

            <!-- Social Networks -->
            <ul class="list-inline mb-0">
                <li class="list-inline-item">
                    <a class="btn btn-sm btn-icon btn-soft-primary btn-bg-transparent" href="#">
                        <span class="fab fa-facebook-f btn-icon__inner"></span>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn btn-sm btn-icon btn-soft-primary btn-bg-transparent" href="#">
                        <span class="fab fa-google btn-icon__inner"></span>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn btn-sm btn-icon btn-soft-primary btn-bg-transparent" href="#">
                        <span class="fab fa-twitter btn-icon__inner"></span>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn btn-sm btn-icon btn-soft-primary btn-bg-transparent" href="#">
                        <span class="fab fa-github btn-icon__inner"></span>
                    </a>
                </li>
            </ul>
            <!-- End Social Networks -->
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        props: {},
        data() {
            return {
            }
        }
    };
</script>

<style lang="scss">
    footer {

    }
</style>
