//PÁGINA FICHA DE ABORDAGEM

$(document).ready( function() {
    habilitarSimTextInput();
});

function habilitarSimTextInput(){
    if (document.getElementById("flexRadioDefault2").checked){
        $("#fieldsetDisabled").prop("disabled",false);
    }else{
        $("#fieldsetDisabled").prop("disabled",true);
    }
}

$(document).ready( function() {
    habilitarSimQuandoTextInput();
});

function habilitarSimQuandoTextInput(){
    if (document.getElementById("flexRadioDefault2.0").checked){
        $("#fieldsetDisabled2").prop("disabled",false);
    }else{
        $("#fieldsetDisabled2").prop("disabled",true);
    }
}

function habilitarSimTextInput3(){
    if (document.getElementById("flexRadioDefault3").checked){
        $("#fieldsetDisabled3").prop("disabled",false);
    }else{
        $("#fieldsetDisabled3").prop("disabled",true);
    }
}

function habilitarSimTextInput4(){
    if (document.getElementById("inlineCheckbox1").checked){
        $("#fieldsetDisabled4").prop("disabled",false);
    }else{
        $("#fieldsetDisabled4").prop("disabled",true);
    }
}

function habilitarSimTextInput5(){
    if (document.getElementById("inlineCheckbox2").checked){
        $("#fieldsetDisabled5").prop("disabled",false);
    }else{
        $("#fieldsetDisabled5").prop("disabled",true);
    }
}

function habilitarSimTextInput6(){
    if (document.getElementById("inlineCheckbox3").checked){
        $("#fieldsetDisabled6").prop("disabled",false);
    }else{
        $("#fieldsetDisabled6").prop("disabled",true);
    }
}

function habilitarSimTextInput7(){
    if (document.getElementById("inlineCheckbox4").checked){
        $("#fieldsetDisabled7").prop("disabled",false);
    }else{
        $("#fieldsetDisabled7").prop("disabled",true);
    }
}

function habilitarSimTextInput8(){
    if (document.getElementById("inlineCheckbox5").checked){
        $("#fieldsetDisabled8").prop("disabled",false);
    }else{
        $("#fieldsetDisabled8").prop("disabled",true);
    }
}

function habilitarSimTextInput9(){
    if (document.getElementById("inlineCheckbox6").checked){
        $("#fieldsetDisabled9").prop("disabled",false);
    }else{
        $("#fieldsetDisabled9").prop("disabled",true);
    }
}

function habilitarSimTextInput10(){
    if (document.getElementById("inlineCheckbox7").checked){
        $("#fieldsetDisabled10").prop("disabled",false);
    }else{
        $("#fieldsetDisabled10").prop("disabled",true);
    }
}

function habilitarSimTextInput11(){
    if (document.getElementById("inlineCheckbox8").checked){
        $("#fieldsetDisabled11").prop("disabled",false);
    }else{
        $("#fieldsetDisabled11").prop("disabled",true);
    }
}

function habilitarSimTextInput12(){
    if (document.getElementById("inlineCheckbox9").checked){
        $("#fieldsetDisabled12").prop("disabled",false);
    }else{
        $("#fieldsetDisabled12").prop("disabled",true);
    }
}

function habilitarSimTextInput13(){
    if (document.getElementById("inlineCheckbox13").checked){
        $("#fieldsetDisabled13").prop("disabled",false);
    }else{
        $("#fieldsetDisabled13").prop("disabled",true);
    }
}

function habilitarSimTextInput14(){
    if (document.getElementById("inlineCheckbox14").checked){
        $("#fieldsetDisabled14").prop("disabled",false);
    }else{
        $("#fieldsetDisabled14").prop("disabled",true);
    }
}

function habilitarSimTextInput15(){
    if (document.getElementById("inlineCheckbox15").checked){
        $("#fieldsetDisabled15").prop("disabled",false);
    }else{
        $("#fieldsetDisabled15").prop("disabled",true);
    }
}

function habilitarSimTextInput16(){
    if (document.getElementById("inlineCheckbox16").checked){
        $("#fieldsetDisabled16").prop("disabled",false);
        $("#fieldsetDisabled17").prop("disabled",false);
    }else{
        $("#fieldsetDisabled16").prop("disabled",true);
        $("#fieldsetDisabled17").prop("disabled",true);
    }
}

function habilitarSimTextInput18(){
    if (document.getElementById("inlineCheckbox18").checked){
        $("#fieldsetDisabled18").prop("disabled",false);
    }else{
        $("#fieldsetDisabled18").prop("disabled",true);
    }
}

function habilitarSimTextInput19(){
    if (document.getElementById("flexRadioDefault19").checked){
        $("#fieldsetDisabled19").prop("disabled",true);
    }else{
        $("#fieldsetDisabled19").prop("disabled",false);
    }
}


window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

