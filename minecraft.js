const startbtn = document.querySelector(".start-game");
const info = document.querySelector(".how-to-play");
const lobymusic = document.getElementById("lobymusic")
const musicbtn = document.querySelector(".music-btn")
const buttonsound = document.getElementById("buttonsound");
const body = document.querySelector("body");


info.addEventListener("click", (e) => {
    e.preventDefault();
    buttonsound.currentTime = 0;
    buttonsound.play();

    const div = document.createElement("div");
    div.className = "info";
    
    div.innerHTML = `
        <h1>How to play</h1>
        <p>Welcome to 2D simple Minecraft!</p>
        <p>In this game, you will be exploring minecraft in 2D world! and you will start with 3 main tools with the additional tool thate you will find on the Nether map.</p>
        <p>Tool number 1 is the pickaxe, you can use it to mine rocks.</p>
        <img src="mainpageimg/pickaxe2.png" alt="Pickaxe">
        <p>Tool number 2 is the axe, you can use it to cut trees.</p>
        <img src="mainpageimg/axe.webp" alt="Axe">
        <p>Tool number 3 is the shovel, you can use it to dig sand and dirt.</p>
        <img src="mainpageimg/shovel.webp" alt="Shovel">
        <p>To use the tools, simply click on the block you want to interact with while having the corresponding tool selected.</p>
        <p>In addition you can use your keyboar keys (A,S,D,F) to switch between tools</p>
        <p>Have fun exploring and building in your 2D Minecraft world!</p>

        </div>
    `
    document.body.appendChild(div);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.className = "close-btn";
    div.appendChild(closeBtn);


    closeBtn.addEventListener("click", () => {
        buttonsound.currentTime = 0;
        buttonsound.play();
        document.body.removeChild(div);
});});


startbtn.addEventListener("click", () => {
    buttonsound.currentTime = 0;
    buttonsound.play();
    setTimeout(() => {
    // window.location.href = 'choosing.html';
    body.innerHTML=` 

    <section class="choosing">
        
        <h1 class="h1map">
        Choose your world and start your adventure!
        </h1>
       
       
        <div class="choose">
        <div class="map map1">
            <img src="./mainpageimg/map1.jpg" alt="">
            <p>🌿 The Overworld
The classic Minecraft experience. A green surface world filled with grass, trees, flowers, and underground ores like coal, gold, diamond, and redstone. You start with three tools — a pickaxe, axe, and shovel — each designed for specific blocks. Mine, collect, and build your way through the world. </p>
        </div>

        <div class="map nether">
            <img src="./mainpageimg/netherpage.png" alt="">
            <p>🔥 The Nether
A dangerous and dark underworld dimension. The skies are blood red, the ground burns with lava and flames, and hostile mobs roam the world. A fourth tool is introduced here — the sword — the only weapon capable of defeating enemies. Two separate chests store your blocks and defeated mobs. Only the brave enter the Nether.</p>
        </div>
       </div>
    </section>



    <audio id="lobymusic" loop>
    <source src="./sounds/lobysound.mp3" type="audio/mpeg">
    </audio>


    <audio id="buttonsound">
    <source src="./sounds/button1.mp3" type="audio/mpeg">
    </audio>


    <audio id="villegar">
    <source src="./sounds/Villager_accept2.ogg" type="audio/mpeg">
    </audio>

    <button class="music-btn">🔊</button>
`;


    const nether = document.querySelector(".nether");
    const map1 = document.querySelector(".map1");
    const newMusic = document.createElement("audio");
    newMusic.src = "./sounds/lobysound.mp3";
    newMusic.loop = true;
    newMusic.id = "lobymusic";
    document.body.appendChild(newMusic);
    newMusic.play().catch(e => console.log(e));
    
    
    map1.addEventListener("click", () => {
        buttonsound.currentTime = 0;
        buttonsound.play();

            setTimeout(() => {
            body.style.backgroundImage = "url(mainpageimg/map1load.webp)";
            body.innerHTML = "";
            const newAudio = document.createElement("audio");
            newAudio.src = "./sounds/Villager_accept2.ogg";
            document.body.appendChild(newAudio);
            newAudio.play();
            }, 50);

        setTimeout(() => {
        window.location.href = 'map.html';
        }, 1200);
        });



    nether.addEventListener("click", () => {
        buttonsound.currentTime = 0;
        buttonsound.play();

            setTimeout(() => {
            body.style.backgroundImage = "url(mainpageimg/nerthload.png)";
            body.innerHTML = "";
            const newAudio = document.createElement("audio");
            newAudio.src = "./sounds/Villager_accept2.ogg";
            document.body.appendChild(newAudio);
            newAudio.play();
            }, 50);

        setTimeout(() => {
        window.location.href = 'netherM.html';
        }, 1200);
        });
    },0);

        const newMusicBtn = document.querySelector(".music-btn");
    newMusicBtn.addEventListener("click", () => {
        if (newMusic.muted) {
            newMusic.muted = false;
            newMusicBtn.textContent = "🔊";
        } else {
            newMusic.muted = true;
            newMusicBtn.textContent = "🔇";
        }
    });

    const map1 = document.querySelector(".map1");
    const nether = document.querySelector(".nether");

});

document.addEventListener("click", () => {
    lobymusic.play().catch((error) => console.log(error));
    
}, {once: true});


musicbtn.addEventListener("click",() =>{
    if (lobymusic.muted){
        lobymusic.muted=false;
        musicbtn.textContent="🔊";
    }else{
        lobymusic.muted=true;
        musicbtn.textContent="🔇";
    }
})

