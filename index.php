<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>slik :: Digital Creative Studio</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <script src="http://code.createjs.com/easeljs-0.7.1.min.js"></script>
    <script src="http://code.createjs.com/tweenjs-0.5.1.min.js"></script>
    <script src="http://code.createjs.com/movieclip-0.7.1.min.js"></script>
    <script src="//use.typekit.net/sbg2fbx.js"></script>
    <script>
        try {
            Typekit.load();
        } catch (e) {}
    </script>

    <script>
        var canvas, stage, exportRoot;

        function init() {
            canvas = document.getElementById("canvas");
            exportRoot = new lib.logo();

            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }
    </script>

    <link rel="stylesheet" href="css/styles.css?v=1.0">

    <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body onload="init();">
    <div class="logo">
        <img src="img/logo.svg" alt="logo" />
    </div>

    <div class="contact">
        <span>Suite 5, office 18, 20a Danks st</span>
        <span>Waterloo, NSW, 2017</span>
        <a href="mailto:hello@slik.com.au">hello@slik.com.au</a>
        <a href="tel:0422313908">0422 313 908</a>
    </div>
    <!--<canvas id="canvas"width="400" height="400"></canvas>-->
    <div class="coming">website coming soon</div>
    <div id="particles-js"></div>
    <script src="js/lib/particles.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/logo.js"></script>
</body>

</html>