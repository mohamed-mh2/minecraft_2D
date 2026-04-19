const exitbtn = document.querySelector(".exitbtn");
const resetbtn = document.querySelector(".resetbtn");
const pickaxe = document.querySelector(".picaxe");
const axe = document.querySelector(".axe");
const shovel = document.querySelector(".shovel");
const sowrd = document.querySelector(".sword");
const storage = document.querySelector(".storage");
const gmaeworld = document.querySelector(".gamemap");
const removesound = document.getElementById("removesound");
const clickedsound = document.getElementById("clickedsound");
const buttonsound = document.getElementById("buttonsound");
const bag = document.querySelector(".bag");
const glasssound = document.getElementById("glasssound");
const orebreak = document.getElementById("orebreak");
const blocksound = document.getElementById("blocksound");
const swordsound = document.getElementById("swordsound");
const mobstorage = document.querySelector(".mobstorag");
const mobbag = document.querySelector(".mobbag");
const inventory = document.querySelector(".inventory");
const arrow =  document.querySelector(".lookdown");


const COLS = 31;
const ROWS = 18;

function calcTileSize() {
    const sidebarW = document.querySelector(".inventory").offsetWidth;
    const availW = window.innerWidth - sidebarW;
    const availH = window.innerHeight;
    const tileW = Math.floor(availW / COLS);
    const tileH = Math.floor(availH / ROWS);
    return Math.max(tileW, tileH);
}

function applyTileSize() {
    const size = calcTileSize();
    document.documentElement.style.setProperty("--tile-size", size + "px");
    gmaeworld.style.gridTemplateColumns = `repeat(${COLS}, ${size}px)`;
    gmaeworld.style.gridTemplateRows    = `repeat(${ROWS}, ${size}px)`;
}

window.addEventListener("resize", applyTileSize);
document.addEventListener("DOMContentLoaded", applyTileSize);

exitbtn.addEventListener("click", () => {
    buttonsound.currentTime = 0;
    buttonsound.play();

    setTimeout(() =>{
        window.location.href = 'minecraft.html';
    },300);
    
});

resetbtn.addEventListener("click", () => {
    buttonsound.currentTime = 0;
    buttonsound.play();

    setTimeout(() =>{
        location.reload();
    },500);
});



let selectedtool = null;

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    let toolSelected = false;

    if (key === 'f') {
        if (selectedtool === 'pickaxe') {
            selectedtool = null;
            pickaxe.classList.add("unselected");
            pickaxe.classList.remove("selected");
        } else {
            selectedtool = 'pickaxe';
            pickaxe.classList.remove("unselected");
            pickaxe.classList.add("selected");
            axe.classList.remove("selected");
            shovel.classList.remove("selected");
            sowrd.classList.remove("selected");
            axe.classList.add("unselected");
            shovel.classList.add("unselected");
            sowrd.classList.add("unselected");
            clickedsound.currentTime = 0;
            clickedsound.play();
        }
        toolSelected = true;
    } else if (key === 'a') {
        if (selectedtool === 'axe') {
            selectedtool = null;
            axe.classList.add("unselected");
            axe.classList.remove("selected");
        } else {
            selectedtool = 'axe';
            axe.classList.remove("unselected");
            axe.classList.add("selected");
            pickaxe.classList.remove("selected");
            shovel.classList.remove("selected");
            sowrd.classList.remove("selected");
            pickaxe.classList.add("unselected");
            shovel.classList.add("unselected");
            sowrd.classList.add("unselected");
            clickedsound.currentTime = 0;
            clickedsound.play();
        }
        toolSelected = true;
    } else if (key === 's') {
        if (selectedtool === 'shovel') {
            selectedtool = null;
            shovel.classList.add("unselected");
            shovel.classList.remove("selected");
        } else {
            selectedtool = 'shovel';
            shovel.classList.remove("unselected");
            shovel.classList.add("selected");
            pickaxe.classList.remove("selected");
            axe.classList.remove("selected");
            sowrd.classList.remove("selected");
            pickaxe.classList.add("unselected");
            axe.classList.add("unselected");
            sowrd.classList.add("unselected");
            clickedsound.currentTime = 0;
            clickedsound.play();
        }
        toolSelected = true;
    } else if (key === 'd') {
        if (selectedtool === 'sword') {
            selectedtool = null;
            sowrd.classList.add("unselected");
            sowrd.classList.remove("selected");
        } else {
            selectedtool = 'sword';
            sowrd.classList.remove("unselected");
            sowrd.classList.add("selected");
            pickaxe.classList.remove("selected");
            axe.classList.remove("selected");
            shovel.classList.remove("selected");
            pickaxe.classList.add("unselected");
            axe.classList.add("unselected");
            shovel.classList.add("unselected");
            clickedsound.currentTime = 0;
            clickedsound.play();
        }
        toolSelected = true;
    }

    if (toolSelected) {
        e.preventDefault(); 
    }
});

pickaxe.addEventListener("click", () => {
        if (pickaxe.classList.contains("unselected")) {
        axe.classList.remove("selected");
        shovel.classList.remove("selected");
        sowrd.classList.remove("selected");
        sowrd.classList.add("unselected");
        pickaxe.classList.remove("unselected");
        pickaxe.classList.add("selected");
        selectedtool = "pickaxe";
        clickedsound.currentTime = 0;
        clickedsound.play();
    }else {
        pickaxe.classList.add("unselected");
        pickaxe.classList.remove("selected");
        shovel.classList.remove("selected");
        axe.classList.remove("selected");
        sowrd.classList.remove("selected");
        sowrd.classList.add("unselected");
        selectedtool = null;
    }
});

axe.addEventListener("click", () => {
    if (axe.classList.contains("unselected")) {
        pickaxe.classList.remove("selected");
        shovel.classList.remove("selected");
        sowrd.classList.remove("selected");
        sowrd.classList.add("unselected");
        axe.classList.remove("unselected");
        axe.classList.add("selected");
         selectedtool = "axe";
         clickedsound.currentTime = 0;
        clickedsound.play();
    }else {
        axe.classList.add("unselected");
        pickaxe.classList.remove("selected");
        shovel.classList.remove("selected");
        axe.classList.remove("selected");
        sowrd.classList.remove("selected");
        sowrd.classList.add("unselected");
        selectedtool = null;
    }

}); 

shovel.addEventListener("click", () => {
        if (shovel.classList.contains("unselected")) {
        pickaxe.classList.remove("selected");
        axe.classList.remove("selected");
        sowrd.classList.remove("selected");
        sowrd.classList.add("unselected");
        shovel.classList.remove("unselected");
        shovel.classList.add("selected");
        selectedtool = "shovel";
        clickedsound.currentTime = 0;
        clickedsound.play();
    }else {
        shovel.classList.add("unselected");
        pickaxe.classList.remove("selected");
        shovel.classList.remove("selected");
        axe.classList.remove("selected");
        sowrd.classList.remove("selected");
        sowrd.classList.add("unselected");
        selectedtool = null;
    }
});


sowrd.addEventListener("click", () => {
    if (sowrd.classList.contains("unselected")) {
        pickaxe.classList.remove("selected");
        axe.classList.remove("selected");
        shovel.classList.remove("selected");
        sowrd.classList.remove("unselected");
        sowrd.classList.add("selected");
        selectedtool = "sword";
        clickedsound.currentTime = 0;
        clickedsound.play();
    } else {
        sowrd.classList.add("unselected");
        sowrd.classList.remove("selected");
        pickaxe.classList.remove("selected");
        axe.classList.remove("selected");
        shovel.classList.remove("selected");
        selectedtool = null;
    }
});

storage.addEventListener("click", () => {
    
    if (mobstorage.classList.contains("open")) {
        mobstorage.classList.remove("open");
        mobstorage.classList.add("closed");
        mobstorage.innerHTML = '<img src="./mainpageimg/mobchest.png" alt="closed">';
        mobbag.classList.remove("open2");
        mobbag.classList.add("closed2");
        mobbag.innerHTML = "";
    }

    if (storage.classList.contains("closed")) {
        arrow.style.display= "block";
        storage.classList.remove("closed");
        storage.classList.add("open");
        storage.innerHTML = '<img src="materialimg/openedbox.webp" alt="opened">';
        clickedsound.currentTime = 0;
        clickedsound.play();
        bag.innerHTML = `
            <div class="dirt"      data-type="dirt">      <p>${counter.dirt}</p></div>
            <div class="grass"     data-type="grass">     <p>${counter.grass}</p></div>
            <div class="grassdirt" data-type="grassdirt"> <p>${counter.grassdirt}</p></div>
            <div class="sand"      data-type="sand">      <p>${counter.sand}</p></div>
            <div class="wrapdirt"  data-type="wrapdirt">  <p>${counter.wrapdirt}</p></div>
            <div class="white"     data-type="white">     <p>${counter.white}</p></div>
            <div class="redwart"   data-type="redwart">   <p>${counter.redwart}</p></div>
            <div class="gold"      data-type="gold">      <p>${counter.gold}</p></div>
            <div class="magma"     data-type="magma">     <p>${counter.magma}</p></div>
            <div class="glowstone" data-type="glowstone"> <p>${counter.glowstone}</p></div>
            <div class="stone"     data-type="stone">     <p>${counter.stone}</p></div>
            <div class="brick"     data-type="brick">     <p>${counter.brick}</p></div>
            <div class="rare"      data-type="rare">      <p>${counter.rare}</p></div>
            <div class="lavabucket"      data-type="lava">      <p>${counter.lava}</p></div>
        `;
        bag.classList.remove("closed2");
        bag.classList.add("open2");
    } else {
        arrow.style.display= "none";
        storage.classList.remove("open");
        storage.classList.add("closed");
        storage.innerHTML = '<img src="materialimg/inventorybox.webp" alt="closed">';
        clickedsound.currentTime = 0;
        clickedsound.play();
        bag.classList.remove("open2");
        bag.classList.add("closed2");
        bag.innerHTML = "";
    }
});


mobstorage.addEventListener("click", () => {
    
    if (storage.classList.contains("open")) {
        storage.classList.remove("open");
        storage.classList.add("closed");
        storage.innerHTML = '<img src="materialimg/inventorybox.webp" alt="closed">';
        bag.classList.remove("open2");
        bag.classList.add("closed2");
        bag.innerHTML = "";
    }

    if (mobstorage.classList.contains("closed")) {
        mobstorage.classList.remove("closed");
        mobstorage.classList.add("open");
        arrow.style.display= "block";
        mobstorage.innerHTML = '<img src="./mainpageimg/mobchest_open.png" alt="opened">';
        clickedsound.currentTime = 0;
        clickedsound.play();
        mobbag.innerHTML = `
            <div class="smallpig"           data-type="smallpig">           <p>${counter.smallpig}</p></div>
            <div class="smallpig_left"      data-type="smallpig_left">      <p>${counter.smallpig_left}</p></div>
            <div class="whiteenemy"         data-type="whiteenemy">         <p>${counter.whiteenemy}</p></div>
            <div class="whiteenemy_left"    data-type="whiteenemy_left">    <p>${counter.whiteenemy_left}</p></div>
            <div class="enemy"              data-type="enemy">              <p>${counter.enemy}</p></div>
            <div class="enemy_left"         data-type="enemy_left">         <p>${counter.enemy_left}</p></div>
            <div class="fly"                data-type="fly">                <p>${counter.fly}</p></div>
            <div class="fly_left"           data-type="fly_left">           <p>${counter.fly_left}</p></div>
            <div class="balckskeleton"      data-type="balckskeleton">      <p>${counter.balckskeleton}</p></div>
            <div class="balckskeleton_left" data-type="balckskeleton_left"> <p>${counter.balckskeleton_left}</p></div>
            <div class="pigilin"            data-type="pigilin">            <p>${counter.pigilin}</p></div>
            <div class="pigilin_left"       data-type="pigilin_left">       <p>${counter.pigilin_left}</p></div>
            <div class="skeleton"           data-type="skeleton">           <p>${counter.skeleton}</p></div>
            <div class="skeleton_left"      data-type="skeleton_left">      <p>${counter.skeleton_left}</p></div>
        `;
        mobbag.classList.remove("closed2");
        mobbag.classList.add("open2");
    } else {
        arrow.style.display= "none";
        mobstorage.classList.remove("open");
        mobstorage.classList.add("closed");
        mobstorage.innerHTML = '<img src="./mainpageimg/mobchest.png" alt="closed">';
        clickedsound.currentTime = 0;
        clickedsound.play();
        mobbag.classList.remove("open2");
        mobbag.classList.add("closed2");
        mobbag.innerHTML = "";
    }
});



const mapgame = [];


for (let row = 0; row<18; row++){
    const curow = [];
    for (let col = 0; col < 31; col++) {
        if(row === 0 && col >7 && col <18){
            curow.push("redwart")
        }else if (row<12) {
            curow.push("sky");
        }
        else if(row === 12){
            curow.push("grassdirt")
        }else if(row === 13){
            curow.push("dirt")
        }
        else if(row >13 && row < 15 && col <10 ){
            curow.push("sand")
        }
         else if(row >13 && row < 15 && col >= 20 ){
            curow.push("lava")
        }else if(row >14 && row < 16 && col >= 20){
            curow.push("magma")
        }else if(row === 16){
           curow.push("gold") 
        }else if(row ===17 && col <7){
            curow.push("stone")
        }else if(row === 17){
           curow.push("rare") 
        }
        else{
            curow.push("white");
        } 
    }
    mapgame.push(curow);
}



//second tree
mapgame[11][20] ="wrapdirt";
mapgame[10][20] ="wrapdirt";
mapgame[9][20] ="wrapdirt";
mapgame[8][20] ="wrapdirt";
mapgame[11][3] ="wrapdirt";
mapgame[10][3] ="wrapdirt";
mapgame[10][4] ="wrapdirt";
mapgame[10][5] ="wrapdirt";
mapgame[10][6] ="wrapdirt";
mapgame[10][7] ="wrapdirt";
mapgame[10][8] ="wrapdirt";
mapgame[11][8] ="wrapdirt";

//nabat and foqo
mapgame[11][10] ="nabat1";
mapgame[11][30] ="nabat2";
mapgame[11][2] ="nabat3";
mapgame[11][25] ="foqo";
mapgame[11][0] ="foqo";
mapgame[11][13] ="foqo";
mapgame[11][14] ="foqo";
mapgame[11][15] ="foqo";

//"smallpig", "whiteenemy", "enemy", "fly", "balckskeleton", "pigilin", "skeleton","smallpig_left", "whiteenemy_left", "enemy_left", "fly_left", 
//   "balckskeleton_left", "pigilin_left", "skeleton_left"

//enemy
mapgame[11][22]="smallpig";
mapgame[11][24]="smallpig_left";
mapgame[6][22]="pigilin";
mapgame[6][18]="balckskeleton_left";
mapgame[3][1]="fly_left";
mapgame[2][28]="fly";
mapgame[5][10]="enemy_left";
mapgame[3][19]="enemy";
mapgame[7][1]="whiteenemy_left";
mapgame[7][13]="whiteenemy";
mapgame[11][28]="skeleton";
mapgame[11][11]="skeleton_left";


// flames
mapgame[9][3] ="redflame";
mapgame[9][4] ="redflame";
mapgame[9][6] ="redflame";
mapgame[9][7] ="redflame";
mapgame[9][8] ="redflame";
mapgame[11][4]= "blueflame";
mapgame[11][5]= "blueflame";
mapgame[11][6]= "blueflame";
mapgame[11][7]= "blueflame";



//decoration
mapgame[9][5] ="lava";
mapgame[8][5] ="lava";
mapgame[7][5] ="lava";
mapgame[6][5] ="lava";
mapgame[5][5] ="lava";
mapgame[4][5] ="lava";
mapgame[3][5] ="lava";
mapgame[2][5] ="lava";
mapgame[1][5] ="lava";
mapgame[0][5] ="lava";
mapgame[15][28]="lava";
mapgame[15][27]="lava";
mapgame[16][28]="magma";
mapgame[16][27]="magma";
mapgame[16][26]="magma";
mapgame[16][29]="magma";
mapgame[0][23]= "glowstone";
mapgame[1][23]= "glowstone";
mapgame[2][23]= "glowstone";
mapgame[2][22]= "glowstone";
mapgame[0][0]= "glowstone";
mapgame[0][1]= "glowstone";
mapgame[1][0]= "glowstone";
mapgame[0][18]= "glowstone";
mapgame[0][19]= "glowstone";
mapgame[0][20]= "glowstone";
mapgame[0][21]= "glowstone";
mapgame[1][21]= "glowstone";
mapgame[2][21]= "glowstone";
mapgame[0][22]= "redwart";
mapgame[1][22]= "redwart";
mapgame[0][24]= "redwart";
mapgame[1][24]= "redwart";
mapgame[11][19] ="grass";
mapgame[10][19] ="grass";
mapgame[9][19] ="grass";
mapgame[8][19] ="grass";
mapgame[11][18] ="grass";
mapgame[11][17] ="grass";
mapgame[1][9]="grass";
mapgame[1][10]="grass";
mapgame[1][11]="grass";
mapgame[1][12]="grass";
mapgame[1][13]="grass";
mapgame[1][14]="grass";
mapgame[1][15]="grass";
mapgame[2][12]="grass";
mapgame[2][11]="grass";



//brige
mapgame[7][30] ="brick";
mapgame[7][29] ="brick";
mapgame[7][28] ="brick";
mapgame[7][27] ="brick";
mapgame[7][26] ="brick";
mapgame[7][25] ="brick";
mapgame[7][24] ="brick";
mapgame[7][23] ="brick";
mapgame[7][22] ="brick";
mapgame[7][21] ="brick";
mapgame[7][20] ="brick";
mapgame[7][19] ="brick";
mapgame[7][18] ="brick";
mapgame[8][25] ="brick";
mapgame[9][25] ="brick";
mapgame[10][25] ="brick";
mapgame[11][25] ="brick";
mapgame[4][0]="brick";
mapgame[4][1]="brick";
mapgame[4][2]="brick";
mapgame[3][30]="brick";
mapgame[3][29]="brick";
mapgame[3][28]="brick";
mapgame[3][27]="brick";








function rendermap(){
gmaeworld.innerHTML="";
    
mapgame.forEach((row, rowIndex) => {
    row.forEach((tiletype, colIndex) => {
        const tile = document.createElement("div");
        tile.classList.add("tile", tiletype);
        tile.dataset.type = tiletype;
        tile.dataset.row = rowIndex;
        tile.dataset.col = colIndex;

        gmaeworld.appendChild(tile);
    });
});
}

const righttool = {
    stone: "pickaxe",
    gold: "pickaxe",
    white: "pickaxe",
    magma: "pickaxe",
    glowstone: "pickaxe",
    brick:"pickaxe",
    rare:"pickaxe",

    sand: "shovel",
    redwart: "shovel",
    grassdirt: "shovel",
    dirt: "shovel",
    nabat1: "shovel",
    nabat2: "shovel",
    nabat3: "shovel",
    foqo: "shovel",
    

    wrapdirt: "axe",
    lava: "axe",
    grass: "axe",
    redflame:"axe",
    blueflame:"axe",
    

    sky:"null",


    smallpig:      "sword",
    whiteenemy:    "sword",
    enemy:         "sword",
    fly:           "sword",
    balckskeleton: "sword",
    pigilin:       "sword",
    skeleton:      "sword",
    smallpig_left:      "sword",
    whiteenemy_left:    "sword",
    enemy_left:         "sword",
    fly_left:           "sword",
    balckskeleton_left: "sword",
    pigilin_left:       "sword",
    skeleton_left:      "sword",
}

const bagToOre = {};

const oreToBag = {
    dirt: "dirt",
    grass: "grass",
    grassdirt: "grassdirt",
    sand: "sand",
    wrapdirt: "wrapdirt",
    white: "white",
    redwart: "redwart",
    gold: "gold",
    magma: "magma",
    glowstone: "glowstone",
    stone: "stone",
    brick: "brick",
    rare: "rare",
    lava: "lava",
};

let counter = {
    lava:0,
    dirt:0,
    grass:0,
    grassdirt:0,
    sand:0,
    wrapdirt:0,
    white:0,
    redwart:0,
    gold:0,
    magma:0,
    glowstone:0,
    stone:0,
    brick:0,
    rare:0,
    smallpig:3,
    whiteenemy:3,
    enemy:3,
    fly:3,
    balckskeleton:3,
    pigilin:3,
    skeleton:3,
    smallpig_left:3,
    whiteenemy_left:3,
    enemy_left:3,
    fly_left:3,
    balckskeleton_left:3,
    pigilin_left:3,
    skeleton_left:3,
}


const enemySounds = {
    smallpig:      document.getElementById("smallpigDeath"),
    pigilin:       document.getElementById("zombipigDeath"),
    skeleton:      document.getElementById("skeletonDeath"),
    balckskeleton: document.getElementById("skeletonDeath"),
    enemy:         document.getElementById("yellowDeath"),
    fly:           document.getElementById("redDeath"),
    whiteenemy:    document.getElementById("whiteDeath"),
    pigilin_left:       document.getElementById("zombipigDeath"),   
    smallpig_left:      document.getElementById("smallpigDeath"),
    skeleton_left:      document.getElementById("skeletonDeath"),
    balckskeleton_left: document.getElementById("skeletonDeath"),
    enemy_left:         document.getElementById("yellowDeath"),
    fly_left:           document.getElementById("redDeath"),
    whiteenemy_left:    document.getElementById("whiteDeath"),
};


const enemyTouchSounds = {
    smallpig:      document.getElementById("smallpigTouch"),
    pigilin:       document.getElementById("zombipigTouch"),
    skeleton:      document.getElementById("skeletonTouch"),
    balckskeleton: document.getElementById("skeletonTouch"),
    enemy:         document.getElementById("yellowTouch"),
    fly:           document.getElementById("redTouch"),
    whiteenemy:    document.getElementById("whiteTouch"),
    pigilin_left:       document.getElementById("zombipigTouch"),  
    smallpig_left:      document.getElementById("smallpigTouch"),
    skeleton_left:      document.getElementById("skeletonTouch"),
    balckskeleton_left: document.getElementById("skeletonTouch"),
    enemy_left:         document.getElementById("yellowTouch"),
    fly_left:           document.getElementById("redTouch"),
    whiteenemy_left:    document.getElementById("whiteTouch"),
};





gmaeworld.addEventListener("click", (e) => {
    const clitile = e.target;
    if (!clitile.classList.contains("tile")) return;

    const tileType = clitile.dataset.type;
    const row      = Number(clitile.dataset.row);
    const col      = Number(clitile.dataset.col);

    const enemies = [
        "smallpig","whiteenemy","enemy","fly","balckskeleton","pigilin","skeleton",
        "smallpig_left","whiteenemy_left","enemy_left","fly_left",
        "balckskeleton_left","pigilin_left","skeleton_left"
    ];
    const pickaxeBlocks = ["stone","gold","white","magma","glowstone","brick","rare"];
    const noTool        = ["sky"];

    
    if (selectedItem !== null && tileType === "sky") {
        mapgame[row][col] = oreToBag[selectedItem] || selectedItem;
        blocksound.currentTime = 0;
        blocksound.play();
        counter[ckey]--;
        const bagItem = bag.querySelector(`div[data-type="${ckey}"] p`);
        if (bagItem) bagItem.textContent = counter[ckey];
        if (counter[ckey] <= 0) {
            bag.querySelectorAll(`div[data-type="${ckey}"]`).forEach(i => {
                i.classList.remove("selected"); i.classList.add("unselected"); i.style.border = "";
            });
            selectedItem = null; ckey = null;
        }
        rendermap();
        return;
    }

    
    if (selectedMob !== null && tileType === "sky") {
        mapgame[row][col] = selectedMob;
        blocksound.currentTime = 0;
        blocksound.play();
        counter[mobckey]--;
        const mobItem = mobbag.querySelector(`div[data-type="${mobckey}"] p`);
        if (mobItem) mobItem.textContent = counter[mobckey];
        if (counter[mobckey] <= 0) {
            mobbag.querySelectorAll(`div[data-type="${mobckey}"]`).forEach(i => {
                i.classList.remove("selected"); i.classList.add("unselected"); i.style.border = "";
            });
            selectedMob = null; mobckey = null;
        }
        rendermap();
        return;
    }

    
    if (tileType === "sky") return;

    const effectiveType = bagToOre[tileType] || tileType;
    const correctTool   = righttool[effectiveType];

    if (selectedtool === correctTool) {
        if (enemies.includes(tileType)) {
            const sound = enemySounds[tileType];
            if (sound) { sound.currentTime = 0; sound.play(); }
            counter[tileType] = (counter[tileType] || 0) + 1;
            mapgame[row][col] = "sky";
            rendermap();

        } else if (tileType === "glowstone") {
            glasssound.currentTime = 0; glasssound.play();
            counter[effectiveType] = (counter[effectiveType] || 0) + 1;
            mapgame[row][col] = "sky";
            const bagItem = bag.querySelector(`div[data-type="${effectiveType}"] p`);
            if (bagItem) bagItem.textContent = counter[effectiveType];
            rendermap();

        } else if (pickaxeBlocks.includes(tileType)) {
            orebreak.currentTime = 0; orebreak.play();
            counter[effectiveType] = (counter[effectiveType] || 0) + 1;
            mapgame[row][col] = "sky";
            const bagItem = bag.querySelector(`div[data-type="${effectiveType}"] p`);
            if (bagItem) bagItem.textContent = counter[effectiveType];
            rendermap();

        } else if (!noTool.includes(tileType)) {
            removesound.currentTime = 0; removesound.play();
            counter[effectiveType] = (counter[effectiveType] || 0) + 1;
            mapgame[row][col] = "sky";
            const bagItem = bag.querySelector(`div[data-type="${effectiveType}"] p`);
            if (bagItem) bagItem.textContent = counter[effectiveType];
            rendermap();
        }

    } else {
        clitile.classList.add("wrong_tool");
        setTimeout(() => clitile.classList.remove("wrong_tool"), 700);
        if (enemies.includes(tileType)) {
            const touchSound = enemyTouchSounds[tileType];
            if (touchSound) { touchSound.currentTime = 0; touchSound.play(); }
        }
    }
});




rendermap();

let ckey= null;
let selectedItem = null;

bag.addEventListener("click", (e) => {
    const bagtile = e.target.closest(".bag > div");
    if (!bagtile) return;

    selectedMob = null; mobckey = null;
    mobbag.querySelectorAll("div.selected").forEach(i => {
        i.classList.remove("selected"); i.classList.add("unselected"); i.style.border = "";
    });


    ckey = bagtile.dataset.type;
    const itemType = bagtile.dataset.type;
    const itemCount = counter[itemType] ?? 0;

    if (bagtile.classList.contains("selected")) {
        bagtile.classList.remove("selected");
        bagtile.classList.add("unselected");
        bagtile.style.border = "";
        selectedItem = null;
        ckey = null;
        return;
    }

    if (itemCount > 0) {
        bag.querySelectorAll("div.selected").forEach((item) => {
            item.classList.remove("selected");
            item.classList.add("unselected");
            item.style.border = "";
        });

        bagtile.classList.remove("unselected");
        bagtile.classList.add("selected");
        bagtile.style.border = "2px solid green";
        selectedItem = itemType;
    } else {
        bagtile.style.border = "2px solid red";

        setTimeout(() => {
            bagtile.style.border = "";
        }, 700);
    }
});





let mobckey = null;
let selectedMob = null;

mobbag.addEventListener("click", (e) => {
    const mobtile = e.target.closest(".mobbag > div");
    if (!mobtile) return;

    
    selectedItem = null; ckey = null;
    bag.querySelectorAll("div.selected").forEach(i => {
        i.classList.remove("selected"); i.classList.add("unselected"); i.style.border = "";
    });

    mobckey = mobtile.dataset.type;
    const mobCount = counter[mobckey] ?? 0;

    if (mobtile.classList.contains("selected")) {
        mobtile.classList.remove("selected"); mobtile.classList.add("unselected");
        mobtile.style.border = ""; selectedMob = null; mobckey = null;
        return;
    }

    if (mobCount > 0) {
        mobbag.querySelectorAll("div.selected").forEach(i => {
            i.classList.remove("selected"); i.classList.add("unselected"); i.style.border = "";
        });
        mobtile.classList.remove("unselected"); mobtile.classList.add("selected");
        mobtile.style.border = "2px solid green";
        selectedMob = mobckey;
    } else {
        mobtile.style.border = "2px solid red";
        setTimeout(() => { mobtile.style.border = ""; }, 700);
    }
});




rendermap();
applyTileSize();
