


let accountStatus = "bomj"
let username = "Vasya"
let cashbackPercentage = 10

switch (accountStatus) {
    case "extended":
        cashbackPercentage += 5
        break;
    case "premium":
        cashbackPercentage += 10
        break;
    case "vip":
        cashbackPercentage += 20
    default:
        break;
}

document.write(`${username} | (${accountStatus}) аккаунт`)
document.write(`<br>`)
document.write(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт`)

