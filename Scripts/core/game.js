// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018
//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoard;
    var Manifest = [
        { id: "startButton", src: "/Assets/images/playButton.png" },
        { id: "settingButton", src: "/Assets/images/settingButton.png" },
        { id: "returnButton", src: "/Assets/images/returnButton.png" },
        { id: "infoButton", src: "/Assets/images/aboutButton.png" },
        { id: "quitButton", src: "/Assets/images/quitButton.png" },
        { id: "background", src: "/Assets/images/background.png" },
        { id: "boat", src: "/Assets/images/boat.png" },
        { id: "silver_star", src: "/Assets/images/silver_star.png" },
        { id: "wheel", src: "/Assets/images/wheel.png" },
        { id: "gold_star", src: "/Assets/images/gold_star.png" },
        { id: "shooting_star", src: "/Assets/images/shooting_star.png" },
        { id: "bonus_star", src: "/Assets/images/bonus_star.png" },
        {
            id: "crash",
            src: "/Assets/audio/67617__qubodup__metal-crash-collision.flac"
        },
        { id: "button", src: "/Assets/audio/button.wav" },
        { id: "main_sound", src: "/Assets/audio/435364__tim-kahn__spence.wav" },
        {
            id: "game_sound",
            src: "/Assets/audio/264287__tyops__lost-universe-sci-fi.wav"
        },
        { id: "star", src: "/Assets/audio/162483__kastenfrosch__mysterious.mp3" },
        {
            id: "bonus_sound",
            src: "/Assets/audio/351810__plasterbrain__shooting-star-4.ogg"
        }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        ScoreBoard = new managers.ScoreBoard();
        managers.Game.ScoreBoard = ScoreBoard;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
            case config.Scene.SETTING:
                CurrentScene = new scenes.Setting();
                break;
            case config.Scene.INFORMATION:
                CurrentScene = new scenes.Information();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map