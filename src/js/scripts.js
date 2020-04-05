$(document).ready(function () {

    $("#topnav .toggle").on("click", function () {
        if (!$("#sidenav").hasClass("sidenav-show")) {
            $("#sidenav").addClass("sidenav-show");
        }
    });

    $("#shadow").on("click", function () {
        $("#sidenav").removeClass("sidenav-show");
    });

    // back to top
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });

    // menu
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find(".link");
            links.on(
                "click",
                { el: this.el, multiple: this.multiple },
                this.dropdown
            );
        };

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            ($this = $(this)), ($next = $this.next());

            $next.slideToggle();
            $this.parent().toggleClass("active");

            if (!e.data.multiple) {
                $el.find(".submenu").not($next).slideUp().parent().removeClass("active");
            }
        };

        var accordion = new Accordion($("#sidenav-collapse ul"), true);
        var accordion = new Accordion($("#user-profile-collapse ul"), true);
    });
});
