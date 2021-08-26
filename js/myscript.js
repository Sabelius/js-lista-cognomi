var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

console.log("I cognomi presenti in lista sono:", listaCognomi);



var nuovoCognome = prompt("Inserisci il cognome");
listaCognomi.push(nuovoCognome);

console.log("La lista aggiornata con il nuovo cognome è:", listaCognomi);



listaCognomi.sort();

console.log("La lista ordinata alfabeticamente è:", listaCognomi);



var posizione = listaCognomi.indexOf(nuovoCognome);

console.log("Il nuovo cognome inserito si trova in posizione:", posizione + 1);






