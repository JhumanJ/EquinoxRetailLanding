<template>
    <div class="d-flex flex-column px-4 py-3">
        <div class="card shadow-sm">
            <div class="card-body text-right text-color-gray">{{testimony}}</div>
        </div>
        <img :src="`img/landing/${imagePath}`" alt="portrait"/>
        <p class="mt-6 mb-1 font-size-18 font-weight-bold text-color-primary text-center">{{name}}</p>
        <p class="text-color-gray text-center">{{job}}</p>
    </div>
</template>

<script>
    export default {
        name: "EntrepreneurCard",
        props: {
            testimony: {
                type: String,
                required: true
            },
            imagePath:  {
                type: String,
                required: true
            },
            name:  {
                type: String,
                required: true
            },
            job:  {
                type: String,
                required: true
            },
        }
    }
</script>

<style scoped lang="scss">
    .d-flex {
        position: relative;
    }

    .card {
        height: 260px;
    }

    img {
        height: 62px;
        width: 62px;
        position: absolute;
        top: 239px;
        left: calc(50% - 31px);
    }

</style>
