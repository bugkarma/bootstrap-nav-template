requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
        bootstrap: "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"
    },
    shim: {
        bootstrap: [ "jquery" ]
    }
});

requirejs([ "app/main" ]);