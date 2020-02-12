<template>
    <div>
        <div class="text-center">
            <button class="btn btn-soft-primary btn-pill my-4">
                Découvrir
            </button>
        </div>
        <h3 class="text-center" id="innovating-text">L'approche innovante d'Equinox</h3>
        <h1 class="text-center">{{ headerText }}</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BestManagersPageHeader",
        props: {
            headerText: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    #innovating-text {
        color: $gray-700;
    }
</style>
