const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports= function validateLoginInput(data) {

    let errors = {};

    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";

    if (Validator.isEmpty(data.email)) {

        errors.email = "Oe bg Faut mettre un Email LA"
    } else if (!Validator.isEmail(data.email)) {

        errors.email = "Bah nan ducoup tu t'es trompé bg";
    }
}