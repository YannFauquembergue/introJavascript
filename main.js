var N = prompt("Entre un nombre je vais calculer son factoriel", 10);
var factoriel = 0;

for (var i = 1; i <= N; i++)
{
    factoriel += i;
}

alert("Le calcul fait " + factoriel);