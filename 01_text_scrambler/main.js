/**
 * Copied from https://stackoverflow.com/a/69690687/914332
 * @param original_text {string}
 * @param shift {int}
 * @returns {string}
 */
function scamble(original_text, shift=33324){

    let result = "";
    for(let i = 0; i < original_text.length; i++){
        result += String.fromCharCode(original_text.charCodeAt(i) + shift)
    }
    return result
}

new Vue({
    el: "#app",
    data () {
        return {
            btn_label: 'Hide Secret',
            scrambled_text: 'HI',
            scrambled_style: 'display: hidden'
        }
    }
})