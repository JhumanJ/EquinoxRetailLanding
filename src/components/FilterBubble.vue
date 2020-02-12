<template>
    <svg width="59" height="57" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(.5)" fill="none" fill-rule="evenodd" v-on:click="$emit('clicked')">
            <circle :fill="enabledPrimary" cx="25.5" cy="31.5" r="25.5"/>
            <path d="M25.3793103 21c-1.8370819 0-11 .1549225-11 3.2083893v3.0413818c0 .8185883.3612061 1.5886688.9899597 2.1130219l7.2600403 6.0463409v6.6742554c0 .3474426.1962128.664505.506897.8204346.129242.0641174.270401.0961761.4097138.0961761.1953735 0 .3887329-.0622711.5500335-.1832886l3.2990265-2.47406c.4593964-.3447571.7343292-.8929444.7343292-1.4676514v-3.4658661l7.2600403-6.0463409c.6287537-.5243531.9899597-1.2944336.9899597-2.1130219v-3.0413818c0-3.0534668-9.1629181-3.2083893-11-3.2083893zm0 1.8333893c5.1231843 0 8.2060242.8313446 9.0227662 1.375-.816742.5434875-3.8995819 1.375-9.0227662 1.375-5.1231842 0-8.2060241-.8315125-9.0227661-1.375.816742-.5436554 3.8995819-1.375 9.0227661-1.375z" fill="#FFF" fill-rule="nonzero"/>
            <g transform="translate(35)">
                <circle fill="#FFFFFF" cx="11.5" cy="11.5" r="11.5"/>
                <text font-family="Poppins-SemiBold, Poppins" font-size="15" font-weight="500" :fill="enabledPrimary">
                    <tspan x="9.525" y="17">{{filterNumber}}</tspan>
                </text>
            </g>
        </g>
    </svg>
</template>

<script>
    export default {
        name: "FilterBubble",
        props: {
            filterNumber: {
                type: Number,
                required: true
            },
            enabled: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            enabledPrimary() {
                return this.enabled ? "#367BFF" : "#B2BEC3"
            },
        }
    }
</script>

<style scoped lang="scss">
    g {
        cursor: pointer;
    }
</style>
