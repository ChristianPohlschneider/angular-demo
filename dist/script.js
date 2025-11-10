greet('Junus');
// Zu Variablen den Typ hinterschreiben um Fehler zu vermeiden
// für async funktionen: tsc script.ts --target es2017; Es gibt mehrere Versionen...
async function greet(name) {
    return 'Hello ' + name;
}
