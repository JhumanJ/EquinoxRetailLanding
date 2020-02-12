<template>
    <div class="col-12 my-4">
        <span class="to-know-more-headline text-uppercase font-weight-bold">En savoir plus</span>
        <div v-for="element of elements"
             :key="element.name"
             class="mt-3">
            <span class="align-middle">{{ title }} <i class="fas fa-angle-right align-middle mx-2 text-color-primary"></i></span>
            <router-link :to="element.link" class="btn btn-pill btn-soft-primary">{{element.name}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToKnowMore",
        props: {
            title: {
                type: String,
                required: true
            },
            elements: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .to-know-more-headline {
        font-size: 20px;
        color: $gray-400;
    }
</style>
