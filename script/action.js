$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height() - $(window).height();
    var scrollRatio = docHeight > 0 ? scrollTop / docHeight : 0;

    var configs = [
        { selector: '.ship0 svg',   start: -106, end: -1106 },
        { selector: '.ship1 svg',   start: -106, end: -1106 },
        { selector: '.ship2 svg',   start: -106, end: -1106 },
        { selector: '.ship2-1 svg',   start: -105, end: -1105 },
        { selector: '.ship2-2 svg',   start: -106, end: -1106 },
        { selector: '.ship2-3 svg',   start: -113, end: -1113 },
        { selector: '.ship3 svg',   start: -113, end: -1113 },
        { selector: '.ship3-2 svg',   start: -115, end: -1115 },
        { selector: '.ship4 svg',   start: -120, end: -1120 },
        { selector: '.ship4-2 svg',   start: -120, end: -1120 },
        { selector: '.ship5 svg',   start: -123, end: -1123 },
        { selector: '.ship5-2 svg',   start: -125, end: -1125 },
        { selector: '.ship6 svg',   start: -110, end: -1110 },
        { selector: '.ship7 svg',   start: -120, end: -1120 },
        { selector: '.ship8 svg',   start: -92, end: -1092 },
        { selector: '.ship9 svg',   start: -172, end: -1172 },
    ];

    configs.forEach(function(cfg) {
        var $svg = $(cfg.selector);
        if ($svg.length) {
            var offset = cfg.start + (cfg.end - cfg.start) * scrollRatio * 8.5;
            $svg.css('stroke-dashoffset', offset + 'px');
        }
    });
});
