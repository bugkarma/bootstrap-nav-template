requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min"
    }
});

requirejs([ "js/app/main" ]);