$(function () {
    $("#ratemirador").rateYo({rating: 3.25, readOnly: true});
    $(".rate1mirador").rateYo({rating: 5,starWidth: "20px", readOnly: true});
    $(".rate2mirador").rateYo({rating: 4,starWidth: "20px", readOnly: true});
    $(".rate3mirador").rateYo({rating: 3,starWidth: "20px", readOnly: true});
    $(".rate4mirador").rateYo({rating: 1,starWidth: "20px", readOnly: true});

    $("#ratemuseo").rateYo({rating: 4.5, readOnly: true});
    $(".rate1museo").rateYo({rating: 5,starWidth: "20px", readOnly: true});
    $(".rate2museo").rateYo({rating: 4,starWidth: "20px", readOnly: true});

    $("#ratecasa").rateYo({rating: 3, readOnly: true});
    $(".rate1casa").rateYo({rating: 4,starWidth: "20px", readOnly: true});
    $(".rate2casa").rateYo({rating: 3,starWidth: "20px", readOnly: true});
    $(".rate3casa").rateYo({rating: 2,starWidth: "20px", readOnly: true});

    $("#rateEntroido").rateYo({rating: 4.5, readOnly: true});
    $(".rate1entroido").rateYo({rating: 4,starWidth: "20px",marginLeft:0, readOnly: true});
    $(".rate2entroido").rateYo({rating: 5,starWidth: "20px",marginLeft:0, readOnly: true});

    $("#rateTour").rateYo({rating: 4, readOnly: true});
    $(".rate1tour").rateYo({rating: 5,starWidth: "20px",marginLeft:0, readOnly: true});
    $(".rate2tour").rateYo({rating: 3,starWidth: "20px",marginLeft:0, readOnly: true});

    $("#ratesurf").rateYo({rating: 5, readOnly: true});
    $(".rate1surf").rateYo({rating: 5,starWidth: "20px",marginLeft:0, readOnly: true});
});

function changeText() {
    var boton = document.getElementById(("btnValoracion"));
    if (boton.value === "Ver valoraciones") {
        boton.value = "Ocultar valoraciones";
    } else {
        boton.value = "Ver valoraciones";
    }
}
