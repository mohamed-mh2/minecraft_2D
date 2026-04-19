const exitbtn = document.querySelector(".exitbtn");
const resetbtn = document.querySelector(".resetbtn");
const pickaxe = document.querySelector(".picaxe");
const axe = document.querySelector(".axe");
const shovel = document.querySelector(".shovel");
const storage = document.querySelector(".storage");
const gmaeworld = document.querySelector(".gamemap");
const removesound = document.getElementById("removesound");
const clickedsound = document.getElementById("clickedsound");
const buttonsound = document.getElementById("buttonsound");
const bag = document.querySelector(".bag");
const glasssound = document.getElementById("glasssound");
const orebreak = document.getElementById("orebreak");
const blocksound = document.getElementById("blocksound");

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

    if (key === 'p') {
        if (selectedtool === 'pickaxe') {
            selectedtool = null;
            pickaxe.classList.add("unselected");
            pickaxe.classList.remove("selected");
            shovel.classList.remove("selected");
            axe.classList.remove("selected");
        } else {
            selectedtool = 'pickaxe';
            pickaxe.classList.remove("unselected");
            pickaxe.classList.add("selected");
            axe.classList.remove("selected");
            shovel.classList.remove("selected");
            axe.classList.add("unselected");
            shovel.classList.add("unselected");
            clickedsound.currentTime = 0;
            clickedsound.play();
        }
        toolSelected = true;
    } else if (key === 'a') {
        if (selectedtool === 'axe') {
            selectedtool = null;
            axe.classList.add("unselected");
            axe.classList.remove("selected");
            pickaxe.classList.remove("selected");
            shovel.classList.remove("selected");
        } else {
            selectedtool = 'axe';
            axe.classList.remove("unselected");
            axe.classList.add("selected");
            pickaxe.classList.remove("selected");
            shovel.classList.remove("selected");
            pickaxe.classList.add("unselected");
            shovel.classList.add("unselected");
            clickedsound.currentTime = 0;
            clickedsound.play();
        }
        toolSelected = true;
    } else if (key === 's') {
        if (selectedtool === 'shovel') {
            selectedtool = null;
            shovel.classList.add("unselected");
            shovel.classList.remove("selected");
            pickaxe.classList.remove("selected");
            axe.classList.remove("selected");
        } else {
            selectedtool = 'shovel';
            shovel.classList.remove("unselected");
            shovel.classList.add("selected");
            pickaxe.classList.remove("selected");
            axe.classList.remove("selected");
            pickaxe.classList.add("unselected");
            axe.classList.add("unselected");
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
        selectedtool = null;
    }
});

axe.addEventListener("click", () => {
    if (axe.classList.contains("unselected")) {
        pickaxe.classList.remove("selected");
        shovel.classList.remove("selected");
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
        selectedtool = null;
    }

}); 

shovel.addEventListener("click", () => {
        if (shovel.classList.contains("unselected")) {
        pickaxe.classList.remove("selected");
        axe.classList.remove("selected");
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
        selectedtool = null;
    }
});

storage.addEventListener("click", () => {
    storage.classList.toggle("open");
    bag.classList.toggle("open2");

    if (storage.classList.contains("closed")) {
        storage.classList.remove("closed");
        storage.classList.add("open");
        storage.innerHTML =' <img src="materialimg/openedbox.webp" alt="opened"> ';
        clickedsound.currentTime = 0;
        clickedsound.play();
        bag.innerHTML =`
        
        <div class="goldbag unselected" data-type="gold_ore">
            <p>${counter.gold_ore}</p>
        </div>
        <div class="coalbag unselected" data-type="coal_ore"> 
            <p>${counter.coal_ore}</p>
        </div>
        <div class="daimondbag unselected" data-type="daimond_ore"> 
            <p>${counter.daimond_ore}</p>
        </div>
        <div class="redbag unselected" data-type="red_ore"> 
            <p>${counter.red_ore}</p>
        </div>
        <div class="grasdirtbag unselected" data-type="grassblock"> 
            <p>${counter.grassblock}</p>
        </div>
        <div class="dirtbag unselected" data-type="dirt"> 
            <p>${counter.dirt}</p>
        </div>
        <div class="grassbag unselected" data-type="grassblock2"> 
            <p>${counter.grassblock2 + counter.grass}</p>
        </div>
        <div class="woodbag unselected" data-type="woodlog"> 
            <p>${counter.woodlog}</p>
        </div>
        <div class="stonebag unselected" data-type="stoneblock"> 
            <p>${counter.stoneblock}</p>
        </div>
        
        <div class="blank unselected" data-type="blank"> 
            <p>${counter.blank}</p>
        </div>
        
        <div class="darkwood unselected" data-type="darkwood"> 
            <p>${counter.darkwood}</p>
        </div>

        <div class="glass unselected" data-type="glass"> 
            <p>${counter.glass}</p>
        </div>
        `
        bag.classList.remove("closed2");
        bag.classList.add("open2");
    } else {
        storage.classList.remove("open");
        storage.classList.add("closed");
        storage.innerHTML =' <img src="materialimg/inventorybox.webp" alt="closed"> ';
        clickedsound.currentTime = 0;
        clickedsound.play();
        bag.classList.remove("open2");
        bag.classList.add("closed2");
        bag.innerHTML="";
    }
}); 




const mapgame = [];


for (let row = 0; row<18; row++){
    const curow = [];
    for (let col = 0; col < 31; col++) {
        if (row<10) {
            curow.push("sky");
        }else if(row === 10){
            curow.push("grassblock")
        }else if(row === 11){
            curow.push("dirt")
        }
        else if(row >12 && row < 14 && col <20){
            curow.push("gold_ore")
        }
         else if(row >12 && row < 14 && col >= 20 ){
            curow.push("coal_ore")
        }else if(row >13 && row < 15 && col >= 20){
            curow.push("coal_ore")
        }else if(row === 17){
           curow.push("red_ore") 
        }else if(row === 16){
           curow.push("daimond_ore") 
        }
        else{
            curow.push("stoneblock");
        } 
    }
    mapgame.push(curow);
}

//left tree
mapgame[9][1] ="woodlog";
mapgame[8][1] ="woodlog";
mapgame[7][1] ="woodlog";
mapgame[6][1] ="grass";
mapgame[6][0] ="grass";
mapgame[6][2] ="grass";
mapgame[5][1] ="grass";

//second tree
mapgame[9][20] ="woodlog";
mapgame[8][20] ="woodlog";
mapgame[7][20] ="woodlog";
mapgame[6][20] ="grassblock2";
mapgame[6][19] ="grassblock2";
mapgame[6][21] ="grassblock2";
mapgame[5][20] ="grassblock2";

//flowers
mapgame[9][10] ="flower1";
mapgame[9][30] ="flower1";
mapgame[9][2] ="flower2";
mapgame[9][25] ="flower3";
mapgame[9][0] ="potato";
mapgame[9][13] ="potato";
mapgame[9][14] ="potato";
mapgame[9][15] ="potato";

//more ore
mapgame[15][20]="gold_ore";
mapgame[15][2]="gold_ore";
mapgame[15][10]="gold_ore";
mapgame[15][11]="gold_ore";
mapgame[15][0]="coal_ore";
mapgame[15][1]="coal_ore";
mapgame[12][0]="coal_ore";
mapgame[15][6]="daimond_ore";
mapgame[15][30]="daimond_ore";


// clouds
mapgame[0][0]="cloud";
mapgame[0][1]="cloud";
mapgame[0][2]="cloud";
mapgame[0][3]="cloud";
mapgame[1][1]="cloud";
mapgame[1][2]="cloud";

mapgame[1][20]="cloud";
mapgame[2][20]="cloud";
mapgame[2][21]="cloud";
mapgame[2][19]="cloud";
mapgame[2][18]="cloud";
mapgame[1][19]="cloud";

mapgame[0][29]="cloud";
mapgame[1][29]="cloud";
mapgame[1][30]="cloud";
mapgame[0][30]="cloud";
mapgame[1][28]="cloud";
mapgame[1][27]="cloud";
mapgame[0][28]="cloud";

mapgame[1][9]="cloud";
mapgame[2][9]="cloud";
mapgame[2][10]="cloud";
mapgame[2][8]="cloud";
mapgame[2][7]="cloud";
mapgame[1][8]="cloud";


//decoration
mapgame[9][4]="darkwood";
mapgame[8][4]="darkwood";
mapgame[7][4]="darkwood";
mapgame[6][4]="blank";
mapgame[6][5]="blank";
mapgame[5][5]="blank";
mapgame[5][6]="blank";
mapgame[6][6]="blank";
mapgame[6][7]="blank";
mapgame[6][8]="blank";
mapgame[5][7]="blank";
mapgame[4][6]="blank";
mapgame[9][8]="darkwood";
mapgame[8][8]="darkwood";
mapgame[7][8]="darkwood";
mapgame[9][7]="darkwood";
mapgame[9][6]="darkwood";
mapgame[9][5]="darkwood";  
mapgame[8][5]="glass";
mapgame[8][6]="glass";
mapgame[8][7]="glass";
mapgame[7][5]="glass";
mapgame[7][6]="glass";
mapgame[7][7]="glass";
mapgame[9][28]="woodlog";
mapgame[9][29]="grassblock2";
mapgame[9][27]="grassblock2";
mapgame[8][28]="woodlog";
mapgame[8][29]="grassblock2";
mapgame[8][27]="grassblock2";
mapgame[7][28]="grassblock2";
mapgame[7][29]="grassblock2";
mapgame[7][27]="grassblock2"; 






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
    stoneblock:"pickaxe",
    coal_ore:"pickaxe",
    daimond_ore:"pickaxe",
    red_ore:"pickaxe",
    gold_ore:"pickaxe",
    glass:"pickaxe",

    dirt:"shovel",
    grassblock:"shovel",
    potato:"shovel",
    flower1:"shovel",
    flower2:"shovel",
    flower3:"shovel",

    woodlog:"axe",
    bambo:"axe",
    grass:"axe",
    grassblock2:"axe",
    graycrass:"axe",
    blank:"axe",
    darkwood:"axe",
    

    cloud:"null",
    sky:"null",


}

const bagToOre = {
    goldbag: "gold_ore",
    coalbag: "coal_ore",
    daimondbag: "daimond_ore",
    redbag: "red_ore",
    grasdirtbag: "grassblock" ,
    dirtbag: "dirt",
    grassbag: "grassblock2" ,
    woodbag: "woodlog",
    stonebag: "stoneblock",
    glass: "glass",
    darkwood: "darkwood",
    blank: "blank",
};

const oreToBag = {
    gold_ore: "goldbag",
    coal_ore: "coalbag",
    daimond_ore: "daimondbag",
    red_ore: "redbag",
    grassblock: "grasdirtbag",
    dirt: "dirtbag",
    grassblock2: "grassbag" ,
    woodlog: "woodbag",
    stoneblock: "stonebag",
    glass: "glass",
    darkwood: "darkwood",
    blank: "blank",
    
};

let counter = {
    stoneblock:0,
    coal_ore:0,
    daimond_ore:0,
    red_ore:0,
    gold_ore:0,

    dirt:0,
    grassblock:0,
    blank:5,
    woodlog:5,
    bambo:0,
    grass:0,
    grassblock2:5,
    graycrass:0,
    darkwood:5,
    glass:7,
}

gmaeworld.addEventListener("click", (e) => {
    const clitile = e.target;

   if (!clitile.classList.contains("tile")) return;

  const tileType = clitile.dataset.type;
  if (tileType === "sky") return;

  const effectiveType = bagToOre[tileType] || tileType;
  const correctTool = righttool[effectiveType];

  const row = Number(clitile.dataset.row);
  const col = Number(clitile.dataset.col);
  

  if (selectedtool === correctTool && clitile.dataset.type !== "glass" && !clitile.dataset.type.includes("ore")) {
    removesound.currentTime = 0;
    removesound.play();
    counter[effectiveType]++;
    mapgame[row][col] = "sky";

    
    const bagItem = bag.querySelector(`div[data-type="${effectiveType}"] p`);
    if (bagItem) bagItem.textContent = counter[effectiveType];

    rendermap();
  }else if (correctTool === selectedtool && clitile.dataset.type === "glass") {
    glasssound.currentTime = 0;
    glasssound.play();
    counter[effectiveType]++;
    mapgame[row][col] = "sky";
    rendermap();
    }else if (correctTool === selectedtool && clitile.dataset.type.includes("ore")) {
    orebreak.currentTime = 0;
    orebreak.play();
    counter[effectiveType]++;
    mapgame[row][col] = "sky";
    rendermap();
  } else {
    clitile.classList.add("wrong_tool");

    setTimeout(() => {
      clitile.classList.remove("wrong_tool");
    }, 700);
  }
});

rendermap();

let ckey= null;
let selectedItem = null;

bag.addEventListener("click", (e) => {
    const bagtile = e.target.closest(".bag > div");
    if (!bagtile) return;

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

gmaeworld.addEventListener("click", (e) => {
    const clitile = e.target;
    if (!clitile.classList.contains("tile")) return;

    if (selectedItem !== null && clitile.dataset.type === "sky") {
        const row = Number(clitile.dataset.row);
        const col = Number(clitile.dataset.col);
        const placedItem = selectedItem;

        mapgame[row][col] = oreToBag[placedItem];
        blocksound.currentTime = 0;
        blocksound.play();

        counter[ckey]--;

        
        const bagItem = bag.querySelector(`div[data-type="${ckey}"] p`);
        if (bagItem) bagItem.textContent = counter[ckey];

        if (counter[ckey] <= 0) {
            bag.querySelectorAll(`div[data-type="${ckey}"]`).forEach((item) => {
                item.classList.remove("selected");
                item.classList.add("unselected");
                item.style.border = "";
            });
            selectedItem = null;
            ckey = null;
        }

        rendermap();
    }
});

applyTileSize();

