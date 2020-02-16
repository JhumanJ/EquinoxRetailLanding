<template>
    <div id="subscribe">

        <div class="space-bottom-2 content">
            <div class="container space-top-2 space-top-md-3">
                <!-- Title -->
                <div class="text-center w-md-60 mx-auto mb-7">
                    <h2 class="text-purple">Souscrivez à Equinox dès aujourd'hui</h2>
                </div>
                <!-- End Title -->

                <!-- Subscribe Form -->
                <div class="w-md-50 w-lg-40 mx-auto">
                    <form class="js-validate js-form-message" novalidate="novalidate">
                        <label class="sr-only" for="subscribeSrEmail">Enter your email address</label>
                        <div class="input-group input-group-lg input-group-borderless input-group-pill shadow-sm">
                            <input type="email" class="form-control" name="email" id="subscribeSrEmail" placeholder="Entrez votre adresse email" aria-label="Enter your email address" aria-describedby="subscribeButton" required="">
                            <div class="input-group-append">
                                <button class="btn btn-white text-purple" type="submit" id="subscribeButton">
                                    <span class="fas fa-paper-plane"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- End Subscribe Form -->
            </div>
        </div>

        <div id="SVGirregularShape2Bottom" class="bottom-svg-shape" style="">
            <figure class="ie-irregular-shape-2-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 323" enable-background="new 0 0 1920 323" xml:space="preserve" class="injected-svg js-svg-injector" data-parent="#SVGirregularShape2Bottom">
                  <polygon class="irregular-shape-3-0 fill-primary" opacity=".225" points="0,323 1920,323 1920,0 "></polygon>
                  <polygon class="irregular-shape-3-0 fill-primary" opacity=".125" points="-0.5,322.5 -0.5,131.5 658.3,212.3 "></polygon>
                </svg>
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Subscribe',
        props: {},
        data() {
            return {
            }
        }
    };
</script>

<style lang="scss">
    #subscribe {
        position: relative;
        background-color: $gray-200;
        z-index: 0;

        .irregular-shape-3-0, .fill-primary {
            fill: $blue-darker !important;
        }

        .content {
            z-index: 1;
        }

        .bottom-svg-shape {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            z-index: -1;
        }
    }
</style>
