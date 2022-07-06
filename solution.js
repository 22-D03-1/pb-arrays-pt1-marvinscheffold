// 1
const euroCities = ["Paris", "London", "Valletta", "Prag", "Rom"];

const secondCity = euroCities[1];

// 2
euroCities[0] = "Berlin";

// 3
console.log(euroCities.length);

// 4
euroCities.pop();
console.log(euroCities);

// 5
euroCities.push("Budapest");
console.log("euroCities", euroCities);

// 6
const asianCities = ["Kyoto", "Delhi", "Wuhan", "Shanghai", "Osaka"];
//console.log(asianCities);

// 7
const worldCities = euroCities.concat(asianCities);
//console.log(worldCities);

// 8
worldCities.reverse();
//sconsole.log(worldCities);

/**
 * BONUS!
 */

// 9
/**
 * splice(wo soll etwas passieren, wieviele sollen gelöscht werden)
 *
 * splice verändert das Ursprungsarray
 */

euroCities.splice(2, 1);
console.log("euroCities", euroCities);

// 10
/**
 * slice(von wo, bis wo)
 * slice verändert das Ursprungsarray nicht
 */
const newAsianCities = asianCities.slice(1, 4);

// 11

// Option 1:
// worldCities[2] = "Toronto"
// Option 2:
worldCities.splice(2, 1, "Toronto");

// 12

console.log(worldCities);
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// 13
console.log(worldCities.join(" + "));

// ZUSATZ

const greeting = "Hello World";
const reverse = greeting.split("").reverse().join("");
console.log(reverse);

const figuren = ["Iron Man"];
const parents = ["Anja", "Christian"];
const zusammen = figuren.concat(parents);
zusammen.push("Medo", "Otto");
zusammen.reverse();
zusammen[2] = "TEST";
console.log(zusammen);
