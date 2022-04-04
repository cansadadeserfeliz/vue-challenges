new Vue({
    el: "#app",
    data: {
        number: '',
        card_holder_name: '',
        expiration_month: '01',
        expiration_year: null,
        ccv: '',
        transformed: false,
    },
    computed: {
        numberDisplay: function () {
            let number = 'XXXXXXXXXXXXXXXX';
            if (this.number) {
                number = this.number;
            }
            // Split into segments of 4 characters
            return number.match(/.{1,4}/g).join(" ");
        },
        cardHolderNameDisplay: function () {
            let card_holder_name = 'XXXXXXX XXXXXXXXXX';
            if (this.card_holder_name) {
                card_holder_name = this.card_holder_name;
            }
            return card_holder_name;
        },
        expirationMonthDisplay : function () {
            return this.expiration_month;
        },
        expirationYearDisplay : function () {
            return this.expiration_year || 'XX';
        },
        ccvDisplay : function () {
            return this.ccv || 'XXX';
        }
    },
    methods: {
        transform: function () {
            this.transformed = !this.transformed;
        }
    }
})
