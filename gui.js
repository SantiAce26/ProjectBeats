(function () {
    var files = [
        "songsGenerated/generated/2020-10-10_180813_01.mp3",
        "songsGenerated/generated/2020-10-10_174934_01.mp3",
        "songsGenerated/generated/2020-10-10_175358_01.mp3",
        "songsGenerated/generated/2020-10-10_175358_02.mp3",
        "songsGenerated/generated/2020-10-10_180813_01.mp3",
        "songsGenerated/generated/2020-10-10_180813_02.mp3",
        "songsGenerated/generated/2020-10-10_201413_1.mp3",
        "songsGenerated/generated/2020-10-10_201413_2.mp3",
        "songsGenerated/generated/2020-10-10_201616_1.mp3",
        "songsGenerated/generated/2020-10-10_201616_2.mp3",
        "songsGenerated/generated/2020-10-10_223234_1.mp3",
        "songsGenerated/generated/2020-10-10_223234_2.mp3"
    ];
    var i = 0;

    var music_player =document.querySelector("#music audio");

    function next(){

        if (i=== files.length -1){
            i = 0;
        } else{
            i++;
        }

        music_player.src = files[i];
    }

    

    if(music_player === null){
        throw "playlist does not exits...";
    } else {
        music_player.src= files[i];

        music_player.addEventListener('ended',next,false)
    }

})();
