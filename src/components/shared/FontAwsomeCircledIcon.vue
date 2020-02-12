<template>
    <span class="fa-stack fa-2x">
        <i class="fas fa-stack-2x fa-circle text-color-soft-primary"></i>
        <i class="fas fa-stack-1x fa-inverse text-color-primary" :class="`fa-${iconClass}`"></i>
    </span>
</template>

<script>
    export default {
        name: "FontAwsomeCircledIcon",
        props: {
            iconClass: {type: String},
        }
    }
</script>

<style scoped lang="scss">
    .fa-stack {
        cursor: pointer;
    }

    .fa-stack:hover {
        .fa-stack-2x {
            color: $primary;
        }

        .fa-stack-1x {
            color: $white;
        }
    }
</style>
