requirejs.config({
    baseUrl: 'js',
    paths: {
      jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'
    }
});

// Load the main app module to start the app
requirejs(['js/app/main']);