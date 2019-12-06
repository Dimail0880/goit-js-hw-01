let userChoice = prompt(
    "Введите название Вашей страны для оформления доставки выбранного Вами товара"
);
const china = "Китай";
const chinaPrice = 100;
const chile = "Чили";
const chilePrice = 250;
const australia = "Австралия";
const australiaPrice = 170;
const india = "Индия";
const indiaPrice = 80;
const jamaica = "Ямайка";
const jamaicaPrice = 120;

if (userChoice === null) {
    alert("Узнайте своё местоположение, и обращайтесь к нам снова!");
} else {
    userChoice = userChoice.toLowerCase();
    switch (userChoice) {
        case "китай":
            alert(`Доставка в ${china} будет стоить ${chinaPrice} кредитов`);
            break;

        case "чили":
            alert(`Доставка в ${chile} будет стоить ${chilePrice} кредитов`);
            break;

        case "австралия":
            alert(`Доставка в ${australia} будет стоить ${australiaPrice} кредитов`);
            break;

        case "индия":
            alert(`Доставка в ${india} будет стоить ${indiaPrice} кредитов`);
            break;

        case "ямайка":
            alert(`Доставка в ${jamaica} будет стоить ${jamaicaPrice} кредитов`);
            break;


        default:
            alert("В Вашей стране доставка не доступна!");
            break;
    }
}