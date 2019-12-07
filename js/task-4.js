const credits = 23580;
const pricePerDroid = 3000;
const userOrder = prompt(
    "Введите количество дроидов, которые вы хотите купить:"
);
let totalPrice = pricePerDroid * userOrder;

if (userOrder === null) {
    console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
} else {
    console.log(
        `Вы купили ${userOrder} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`
    );
}