

    
        $(document).on("pageinit", "#home", function () {
            var $ele = $("#gk-1223hLo0"),
                url = $ele.attr("service");
            if (url) {
                $.getJSON(url).complete(function (data) {
                    $("#gk-1223hLo0").gk("model", $.parseJSON(data.responseText));

                    $('#gk-1223hLo0 a').on('click', function (e) {
                        var g1 = $(this).attr('s1');
                        var g2 = $(this).attr('s2');
                        var g3 = $(this).attr('s3');
                        var g4 = $(this).attr('s4');
                        var g5 = $(this).attr('s5');
                        //var g6 = $(this).attr('s6');
                        $('.d1').text(g1);
                        $('.d2').text(g2);
                        $('.d3').text(g3);
                        $('.d4').text(g4);
                        $('.d5').text(g5);
                        //$('.d6').text(g6);
                        //$('#map1').gk('address', g3);
                        $('#img').attr('src', g5);
                    });



                });
            }
        });
