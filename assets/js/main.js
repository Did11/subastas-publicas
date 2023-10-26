function loadHomePage() {
    $.get("/partials/home.html", function (homeData) {
        $.get("/partials/en_curso.html", function (enCursoData) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(homeData);
                $("#auctionsArea").html(enCursoData);

                $(this).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea, #auctionsArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });
}

$(document).ready(function () {

    // Cargar el contenido principal al inicio
    loadHomePage();

    $("#homeLink").click(function (event) {
        event.preventDefault();
        loadHomePage();
    });

    $("#categoriesLink").click(function (event) {
        event.preventDefault();

        $.get("/partials/categories.html", function (data) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(data).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#contentArea").on("click", "#enCursoLink", function (event) {
        event.preventDefault();

        $.get("/partials/en_curso.html", function (data) {
            var $auctionsArea = $("#auctionsArea");

            $auctionsArea.addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $auctionsArea.html(data).removeClass('animate__animated animate__bounceOutLeft');

                $auctionsArea.addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#contentArea").on("click", "#finalizadasLink", function (event) {
        event.preventDefault();

        $.get("/partials/finalizadas.html", function (data) {
            var $auctionsArea = $("#auctionsArea");

            $auctionsArea.addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $auctionsArea.html(data).removeClass('animate__animated animate__bounceOutLeft');

                $auctionsArea.addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#contentArea").on("click", "#canceladasLink", function (event) {
        event.preventDefault();

        $.get("/partials/canceladas.html", function (data) {
            var $auctionsArea = $("#auctionsArea");

            $auctionsArea.addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $auctionsArea.html(data).removeClass('animate__animated animate__bounceOutLeft');

                $auctionsArea.addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#contactLink").click(function (event) {
        event.preventDefault();

        $.get("/partials/contacto.html", function (data) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(data).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });


});
