const fs = require("fs");

const signup = (user) => {
    let listUser = JSON.parse(fs.readFileSync("./data/user.json"));
    listUser.push(user);
    fs.writeFileSync("./data/user.json", JSON.stringify(listUser));
    return user;
}

const login = (email, password) => {
    let listUser = JSON.parse(fs.readFileSync("./data/user.json"));
    let user = listUser.find(u => u.email == email);
    if (!user) {
        throw new Error("Utilisateur non trouvé");
    }
    if (user.password != password) {
        throw new Error("mot de passe invalide");
    }
    return user;
}

const getAll = () => {
    let listUser = JSON.parse(fs.readFileSync("./data/user.json"));
    return listUser;
}

const update = (email, password) => {
    let listUser = JSON.parse(fs.readFileSync("./data/user.json"));
    let user = listUser.find(u => u.email == email);
    if (!user) {
        throw new Error("Utilisateur non trouvé");
    }
    user.password = password;
    fs.writeFileSync("./data/user.json", JSON.stringify(listUser));
}

module.exports = { signup, login, getAll, update };