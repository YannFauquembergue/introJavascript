var MaDiv = document.getElementById("MaDiveNum1");
    
MaDiv.addEventListener("click", UneProcedureQuiChangeLetext);
MaDiv.addEventListener("mouseover", UneProcedureQuiSurvole);
MaDiv.addEventListener("mouseout", UneProcedureQuiSurvolePlus);

function UneProcedureQuiChangeLetext(evenement)
{
    evenement.target.innerHTML = "On m'a cliqué dessus";
    evenement.target.setAttribute("class", "MaDivModifiee");
}

function UneProcedureQuiSurvole(evenement)
{
    evenement.target.style.display = "block";
}
function UneProcedureQuiSurvolePlus(evenement)
{
    evenement.target.style.display = "none";
}