$(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 20) {
            $(".navBar").addClass("scroll");
        } else {
            $(".navBar").removeClass("scroll");
        }
    });

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
        } else if (this.id === "pn-item2013") {
            $("#slideshow2013").addClass("show");
        } else if (this.id === "pn-item2012") {
            $("#slideshow2012").addClass("show");
        } else if (this.id === "pn-item-all") {
            $("#slideshowAll").addClass("show");
        }
    });


    /* AGENDA MOBILE NAV */
    $(".agenda-nav__btn").click(function() {
        $(".agenda").removeClass("show");
        var x = $(this).attr('target');
        if (x === "an-left") {
            $("#day1").addClass("show");
        } else {
            $("#day2").addClass("show");
        }
    });




    /* CODE OF CONDUCT OPEN/CLOSE */
    $("#codeOfConduct__link").click(function() {
        $("#codeOfconduct").addClass("show");
    });
    $("#codeOfconduct__close").click(function() {
        $("#codeOfconduct").removeClass("show");
    });

    var currentAttendeePage = 1;

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    $("#attendees__link").click(function() {
      $("#attendees").addClass("show");
    });
    $("#attendees__close").click(function() {
        $("#attendees").removeClass("show");
    });

    $.get( "https://www.eventbriteapi.com/v3/events/35075304179/attendees/?token=", function( data ) {
      var attendees = data.attendees.map(function(attendee) {
        return capitalizeFirstLetter(attendee.profile.first_name) + ' ' + capitalizeFirstLetter(attendee.profile.last_name);
      });

      var list = "";

      for(i=0; i < attendees.length; i++){
        list +="<div style='font-size: 18px; font-weight: 600; margin-bottom: 15px;'>" + attendees[i] + "</div>";
      }

      $("#attendee__list").append(list);
      
      currentAttendeePage++;
    });

    $("#attendees__more").click(function() {
      console.log('test');
      $.get( "https://www.eventbriteapi.com/v3/events/35075304179/attendees/?token=&page=" + currentAttendeePage, function( data ) {
        var attendees = data.attendees.map(function(attendee) {
          return capitalizeFirstLetter(attendee.profile.first_name) + ' ' + capitalizeFirstLetter(attendee.profile.last_name);
        });

        var list = "";

        for(i=0; i < attendees.length; i++){
          list +="<div style='font-size: 18px; font-weight: 600; margin-bottom: 15px;'>" + attendees[i] + "</div>";
        }

        $("#attendee__list").append(list);
        
        currentAttendeePage++;
      }).fail(function() {
        $("#attendees__more").remove();
      });
    });


});