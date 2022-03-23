/**
 * Copied from https://stackoverflow.com/a/69690687/914332
 * @param original_text {string}
 * @param shift {int}
 * @returns {string}
 */
function scramble(original_text, shift=33324){
    let result = '';
    for(let i = 0; i < original_text.length; i++){
        result += String.fromCharCode(original_text.charCodeAt(i) + shift)
    }
    return result
}

new Vue({
    el: "#app",
    data: {
        original_text: '',
        scrambled_text: '',
        is_hidden: true,
    },
    methods: {
        scramble: function () {
            this.scrambled_text = scramble(this.original_text)
        },
    },
})