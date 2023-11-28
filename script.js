/*Vytvořte funkci salary se třemi parametry:
- wage - hrubá mzda v korunách za hodinu
- hours - kolik hodin denně průměrně pracujete
- days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.*/

const salary = (wage, hours, days) => {
    const hrubaMzda = wage * hours * days
    return Math.round(hrubaMzda)
}

const taxed = (castka, procentoZdaneni) => {
    const dan = (castka * procentoZdaneni) / 100
    return Math.round(dan)
}

const mesicniHrubaMzda = salary(180, 8, 21)
const vypocitanaDan = taxed(mesicniHrubaMzda, 15)
const zdanenaCastka = mesicniHrubaMzda - vypocitanaDan

document.body.innerHTML = `Měsíční mzda po zdanění dělá ${zdanenaCastka} Kč.`

document.title = "Vyhlídalová - Úkol 5"