$(document).ready(function () {
    $(".btn-ver").click(function () {
        if (this.id == "n1") {
            val = $("#nivel1").val()
            nivel= 1
        }
        if (this.id == "n2") {
            val = $("#nivel2").val()
            nivel= 2
        }
        if (this.id == "n3") {
            val = $("#nivel3").val()
            nivel= 3
        }
        if (this.id == "n4") {
            val = $("#nivel4").val()
            nivel= 4
        }
        url = "/ResumenIndustria/"+ val+"/"+ 12 + "/"+nivel
        location.href = url ;
    });

    $("#nivel1").change(function () {
        $('#nivel2').children().remove();
        $.ajax({
            url: '/niveles' + "/" + $("#nivel1").val() + "/2",
            success: function (respuesta) {
                $("#nivel2").append('<option value="sopciom">seleccione opción...</option>');
                for (let i in respuesta) {

                    $("#nivel2").append('<option value="' + respuesta[i].sector + '">' + respuesta[i].desc_actividad_entidad + '</option>');

                }

            },
            error: function () {
            }
        });
    });
    $("#nivel2").change(function () {
        $('#nivel3').children().remove();
        $.ajax({
            url: '/niveles' + "/" + $("#nivel2").val() + "/3",
            success: function (respuesta) {
                $("#nivel3").append('<option value="sopciom">seleccione opción...</option>');
                for (let i in respuesta) {

                    $("#nivel3").append('<option value="' + respuesta[i].sector + '">' + respuesta[i].desc_actividad_entidad + '</option>');

                }

            },
            error: function () {
            }
        });
    });
    $("#nivel3").change(function () {
        $('#nivel4').children().remove();
        $.ajax({
            url: '/niveles' + "/" + $("#nivel3").val() + "/4",
            success: function (respuesta) {
                $("#nivel4").append('<option value="sopciom">seleccione opción...</option>');
                for (let i in respuesta) {

                    $("#nivel4").append('<option value="' + respuesta[i].sector + '">' + respuesta[i].desc_actividad_entidad + '</option>');

                }

            },
            error: function () {
            }
        });
    });

});