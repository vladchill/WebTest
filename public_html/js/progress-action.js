function rer() {
 tempPr = document.getElementById('pr');
 tempDt = document.getElementById('dt');
}
function minus() {
    rer();    
    var temp=+tempPr.getAttribute('value') - 1;        
    tempPr.setAttribute('value', temp);
    tempDt.setAttribute('value',temp);
}
function plus() {
    rer();  
    var temp=+tempPr.getAttribute('value') + 1;        
    tempPr.setAttribute('value', temp);
    tempDt.setAttribute('value',temp);
}