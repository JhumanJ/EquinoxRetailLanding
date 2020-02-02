<template>
    <div class="card card-roi border-0 shadow-sm">
        <header id="SVGwave1BottomShapeID1"
                class="card-header border-0 position-relative bg-purple text-white p-5 pb-11"
                style="">
            <h3 class="h4 mb-1 text-center font-weight-bold">{{Title}}</h3>
            <div class="position-absolute right-0 bottom-0 left-0">
                <figure class="ie-wave-1-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 300 100" style="enable-background:new 0 0 300 100;" xml:space="preserve" class="injected-svg js-svg-injector" data-parent="#SVGwave1BottomShapeID1">
                                        <g>
                                            <defs>
                                                <rect id="waveBottom1ID1" width="300" height="100"></rect>
                                            </defs>
                                            <clipPath id="waveBottom1ID2">
                                                <use xlink:href="#waveBottom1ID1" style="overflow:visible;"></use>
                                            </clipPath>
                                            <path class="wave-bottom-1-0 fill-white" opacity=".4" d="M10.9,63.9c0,0,42.9-34.5,87.5-14.2c77.3,35.1,113.3-2,146.6-4.7C293.7,41,315,61.2,315,61.2v54.4H10.9V63.9z"></path>
                                            <path class="wave-bottom-1-0 fill-white" opacity=".4" d="M-55.7,64.6c0,0,42.9-34.5,87.5-14.2c77.3,35.1,113.3-2,146.6-4.7c48.7-4.1,69.9,16.2,69.9,16.2v54.4H-55.7   V64.6z"></path>
                                            <path class="wave-bottom-1-1 fill-white" opacity=".4" d="M23.4,118.3c0,0,48.3-68.9,109.1-68.9c65.9,0,98,67.9,98,67.9v3.7H22.4L23.4,118.3z"></path>
                                            <path class="wave-bottom-1-2 fill-white" d="M-54.7,83c0,0,56-45.7,120.3-27.8c81.8,22.7,111.4,6.2,146.6-4.7c53.1-16.4,104,36.9,104,36.9l1.3,36.7l-372-3   L-54.7,83z"></path>
                                        </g>
                                        </svg>
                </figure>
            </div>
        </header>

        <!-- Content -->
        <div class="card-body pt-0 px-5 pb-5">
            <div class="tag text-center">
                <button v-if="Multiplier" type="button"
                        class="btn btn-pill btn-sm btn-soft-success">
                    <i class="fas fa-caret-up"></i> {{Multiplier}}
                </button>
            </div>
            <div class="return text-center">
                <h4 class="h3 mb-0 font-weight-bold">{{Percentage}}</h4>
                <p>Retours futurs nets</p>
            </div>
            <div class="more-details text-center">
                <button type="button"
                        class="btn btn-pill btn-sm btn-soft-primary">
                    <i class="fas fa-sync-alt"></i>
                </button>
            </div>
        </div>
        <!-- End Content -->
    </div>
</template>

<script>
    export default {
        name: 'RoiCard',
        props: {
            Percentage: {type: String, required: true},
            Title: {type: String, required: true},
            Multiplier: {type: String, required: false}

        },
        data() {
            return {}
        }
    };
</script>

<style lang="scss">

    .card-roi {
        width: 340px;

        .card-body {
            margin-top: -22px;
            z-index: 1;

            .tag {
                height: 39px;
            }
        }

    }

</style>
