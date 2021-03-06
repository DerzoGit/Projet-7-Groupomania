const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.signup = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.create ({
                name: req.body.name,
                firstname: req.body.firstname,
                email: req.body.email,
                password: hash
            })
            .then(() => res.status(201).json({ message: "Utilisateur créé "}))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));

};

exports.login = (req, res, next) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if (!user) {{
            return res.status(401).json({ message: "Utilisateur non trouvé "});
        }}
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ message: "Mot de passe incorrect "});
            }
            res.status(200).json({ 
                userId = user.id,
                token: jwt.sign({
                    userId: user.id
                },
                "RANDOM_TOKEN", {expiresIn: "24h"}
                )
            });
        })
    })
    .catch(error => res.status(500).json({ error }));
};