var MaDiv = document.getElementById("MaDiveNum1");
    
MaDiv.addEventListener("click", UneProcedureQuiChangeLetext);

function UneProcedureQuiChangeLetext(evenement)
{
    evenement.target.innerHTML = "On m'a cliqué dessus";
}