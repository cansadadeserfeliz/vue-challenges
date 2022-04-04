const number_constraints = {
    number: {
        presence: true,
        format: {
            pattern: /^(34|37|4|5[1-5]).*$/,
            message: function (value, attribute, validatorOptions, attributes, globalOptions) {
                return validate.format("^%{num} is not a valid credit card number", {
                    num: value
                });
            }
        },
        length: function (value, attributes, attributeName, options, constraints) {
            if (value) {
                // Amex
                if ((/^(34|37).*$/).test(value)) return {is: 15};
                // Visa, Mastercard
                if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
            }
            // Unknown card, don't validate length
            return false;
        }
    },
};

new Vue({
    el: "#app",
    data: {
        number: '',
        card_holder_name: '',
        expiration_month: '01',
        expiration_year: null,
        ccv: '',
        transformed: false,
        errors: {
            number: null,
        }
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
        },
        validateNumber: function () {
            if (this.number) {
                let results = validate({number: this.number}, number_constraints);
                if (results) {
                    this.errors.number = results.number
                } else {
                    this.errors.number = null
                }
            }
        }
    }
})
