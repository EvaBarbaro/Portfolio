function Utils() {}
        Utils.prototype = {
            constructor: Utils,
            isElementInView: function (element, fullyInView) {
                var pageTop = $(window).scrollTop();
                var pageBottom = pageTop + $(window).height();
                var elementTop = $(element).offset().top;
                var elementBottom = elementTop + $(element).height();

                if (fullyInView === true) {
                    return ((pageTop < elementTop) && (pageBottom > elementBottom));
                } else {
                    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                }
            }
        };

        var Utils = new Utils();
        $(window).on('load', addFadeIn());
        
        $(window).scroll(function() {
            addFadeIn(true);
        });

function addFadeIn(repeat) {
            var classToFadeIn = ".will-fade-in";
            
            $(classToFadeIn).each(function( index ) {
                var isElementInView = Utils.isElementInView($(this), false);
                if (isElementInView) {
                    if(!($(this).hasClass('fade-in-right')) && !($(this).hasClass('fade-in-left'))) {
                        if(index % 2 == 0) $(this).addClass('fade-in-right');
                        else $(this).addClass('fade-in-left');
                    }
                } else if(repeat) {
                    $(this).removeClass('fade-in-right');
                    $(this).removeClass('fade-in-left');
                }
            });

            // $(".fade-in-right, .fade-in-left").each(function() {
            //     if ($(this).visible(true)) {
            //         $(this).addClass("already-visible");
            //     }
            // });
        }