import UsersStorage from "../storages/usersStorage.js";
import { body, validationResult, matchedData } from "express-validator";

const alphaError = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
    body("firstName").trim()
        .isAlpha().withMessage(`First name ${alphaError}`)
        .isLength({min: 1, max: 10}).withMessage(`First name ${lengthErr}`),
    body("lastName").trim()
        .isAlpha().withMessage(`Last name ${alphaError}`)
        .isLength({min: 1, max: 10}).withMessage(`Last name ${lengthErr}`),
]

export function usersListGet(req, res) {
    res.render("index", {
        title: "User List",
        users: UsersStorage.getUsers(),
    });
};

export function usersCreateGet(req, res) {
    res.render("createUser", {
        title: "Create User",
    });
};

export const usersCreatePost = [
    validateUser,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("createUser", {
                title: "Create User",
                errors: errors.array(),
            });
        }
        const { firstName, lastName } = matchedData(req);
        UsersStorage.addUser({ firstName, lastName });
        res.redirect("/");
    }
]

export function usersUpdateGet(req, res) {
    const user = UsersStorage.getUser(req.params.id);
    res.render("updateUser", {
        title: "Update user",
        user: user,
    });
};

export const usersUpdatePost = [
    validateUser,
    (req, res) => {
        const user = UsersStorage.getUser(req.params.id);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("updateUser", {
                title: "Update User",
                user: user,
                errors: errors.array(),
            });
        };
        const { firstName, lastName } = matchedData(req);
        UsersStorage.updateUser(req.params.id, { firstName, lastName });
        res.redirect("/");
    }
]

export function usersDeletePost(req, res) {
    UsersStorage.deleteUser(req.params.id);
    res.redirect("/");
}

// export function usersCreatePost(req, res) {
//     const { firstName, lastName } = req.body;
//     UsersStorage.addUser({ firstName, lastName });
//     res.redirect("/");
// };