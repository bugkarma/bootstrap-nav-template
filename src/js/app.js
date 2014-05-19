requirejs.config({
    "baseUrl": "js",
    "paths": {
      "jquery":     "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
      "bootstrap":  "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"
    },
    "shim": {
        "bootstrap": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
