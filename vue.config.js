/* eslint-disable indent */
module.exports = {
    lintOnSave: false,
}

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/theme.scss";
                    @import "@/styles/_variables.scss";
                    @import "@/styles/general.scss";
                    @import "@/../node_modules/bootstrap/scss/_mixins.scss";
                `,
            },
        },
    },
}
