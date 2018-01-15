$(function() {


    /* TOP NAVIGATION */
    $(".nav__link").click(function() {
        $(".nav__link").removeClass("active");
        $(this).addClass("active");
    });

    /* MOBILE NAVIGATION */
    $(".navBar__btn").click(function() {
        $(".navBar__nav").addClass("slide");
    });
    $(".navBar__close").click(function() {
        $(".navBar__nav").removeClass("slide");
    });
    $(".nav__link").click(function() {
        $(".navBar__nav").removeClass("slide");
    });





    /* SMALL NAV1 */
    $(".small-nav1__item").click(function() {
        $(".small-nav1__item").removeClass("active");
        $(this).addClass("active");

        $(".speakers-content").removeClass("show");
        if (this.id === "speakers-mainLink") {
            $("#speakers-main").addClass("show");
        } else if (this.id === "speakers-areaLink") {
            $("#speakers-area").addClass("show");
        }
    });

    /* SMALL NAV2 */
    $(".small-nav2__item").click(function() {
        $(".small-nav2__item").removeClass("active");
        $(this).addClass("active");

        $(".agenda-content1").removeClass("show");
        if (this.id === "day1-mainLink") {
            $("#day1-main").addClass("show");
        } else if (this.id === "day1-areaLink") {
            $("#day1-area").addClass("show");
        }
    });

    /* SMALL NAV3 */
    $(".small-nav3__item").click(function() {
        $(".small-nav3__item").removeClass("active");
        $(this).addClass("active");

        $(".agenda-content2").removeClass("show");
        if (this.id === "day2-mainLink") {
            $("#day2-main").addClass("show");
        } else if (this.id === "day2-areaLink") {
            $("#day2-area").addClass("show");
        }
    });



    /* SPEAKER MORE */
    $(".speaker__more-btn").click(function() {
        $("#sm" + $(this).attr('target')).toggle("show");
    });



    /* SLIDESHOW */
    $(".pn-item").click(function() {
        $(".pn-item").removeClass("active");
        $(this).addClass("active");
        
        $(".slideshow").removeClass("show");
        console.log(this.id);
        if (this.id === "pn-item2017") {
            $("#slideshow2017").addClass("show");
        } else if (this.id === "pn-item2016") {
            $("#slideshow2016").addClass("show");
        } else if (this.id === "pn-item2015") {
            $("#slideshow2015").addClass("show");
        } else if (this.id === "pn-item2014") {
            $("#slideshow2014").addClass("show");
        } else if (this.id === "pn-item-all") {
            $("#slideshowAll").addClass("show");
        }
    });




    /* Trade link */
    $("#trade-link").click(function() {
        $("#wallet-overlay").removeClass("show");
        $("#wallet-overlay").removeClass("fadeIn");
        $(".wallet").removeClass("slideIn");
    });

    /* Wallet link */
    $("#wallets-link").click(function() {
        $("#wallet-overlay").addClass("show");
        $("#wallet-overlay").addClass("fadeIn");
        $(".wallet").addClass("slideIn");
    });

    /* Settings link */
    $("#settings-link").click(function() {
        $("#wallet-overlay").removeClass("show");
        $("#wallet-overlay").removeClass("fadeIn");
        $(".wallet").removeClass("slideIn");
    });

    /* Logout link */
    $("#logout-link").click(function() {
        $("#wallet-overlay").removeClass("show");
        $("#wallet-overlay").removeClass("fadeIn");
        $(".wallet").removeClass("slideIn");
    });




    /* WALLET LINKS ********/
    /* Wallets Cards */
    $(".wallet-select__item").click(function() {
        $(".wallet-select__item").removeClass("active");
        $(this).addClass("active");

        $(".wallet-result").removeClass("slideIn");
        if (this.id === "ws-iop") {
            $(".wr-iop").addClass("slideIn");
        } else if (this.id === "ws-hyd") {
            $(".wr-hyd").addClass("slideIn");
        }
    });


});