# 2D Minecraft — No.1 Edition

A simple 2D browser-based game inspired by Minecraft, built entirely from scratch using HTML, CSS, and JavaScript — no game engine, no external libraries. The game features two fully playable worlds, a responsive tile grid, an inventory system, mob combat, and sound effects.

---

## 🎮 How to Play

1. Open `minecraft.html` to reach the main menu
2. Press **Start the game** to choose your world
3. Select a tool from the sidebar by clicking it or using keyboard shortcuts
4. Click on blocks to break them with the correct tool
5. Open the chest to view collected items and place them back on the map
6. In the Nether, use the sword to defeat enemies

---

## 🗺️ Maps

### 🌿 The Overworld
The classic green Minecraft world. Features a surface layer of grass, dirt, trees, and flowers, with underground layers of stone and ores including coal, gold, diamond, and redstone. Players use three tools — pickaxe, axe, and shovel — each matched to specific block types.

### 🔥 The Nether
A dark and dangerous underworld dimension with a deep red atmosphere. Contains soul sand, netherrack, nether quartz, gold ore, magma, glowstone, nether brick, and the extremely rare ancient debris. Seven types of hostile mobs roam the world — piglin, zombie pigman, skeleton, wither skeleton, blaze, ghast, and hoglin. A fourth tool, the sword, is introduced here as the only weapon capable of defeating enemies. Two separate inventory chests store blocks and defeated mobs independently.

---

## 🛠️ Tools

| Tool | Key | Used For |
|------|-----|----------|
| Pickaxe | F | Stone, ores, brick, glowstone |
| Axe | A | Wood, leaves, grass variants |
| Shovel | S | Dirt, sand, soul sand, plants |
| Sword | D | Enemies (Nether only) |

Using the wrong tool on a block flashes a red warning outline. No damage is dealt and no block is removed.

---

## 🎒 Inventory System

- Click the **block chest** to open the block inventory
- Click the **mob chest** (Nether only) to open the mob inventory
- Opening one chest automatically closes the other
- Click any item in the chest to select it (green border = selected)
- Click any empty sky tile on the map to place it back
- Items with a count of 0 cannot be selected (red border flash)

---

## 🔊 Sound Effects

- Each tool has a break sound
- Glowstone has a unique glass-break sound
- Each mob has an individual death sound and a hit sound when touched with the wrong tool
- Button clicks, chest open/close, and block placement all have sound feedback
- Background lobby music plays on the main menu and map selection screen
- A villager sound plays during the loading transition between pages

---

## 📁 Project Structure

```
/
├── minecraft.html          # Main menu
├── minecraft.css           # Main menu styles
├── minecraft.js            # Main menu logic + map selection
├── map.html                # Overworld map
├── map.css                 # Overworld styles
├── map.js                  # Overworld logic
├── netherM.html            # Nether map
├── nether.css              # Nether styles
├── nether.js               # Nether logic
├── mainpageimg/            # UI images, logos, buttons
├── materialimg/            # Overworld block textures
├── materialnether/         # Nether block textures and mob sprites
├── sounds/                 # UI and block sound effects
├── mobsounds/              # Mob death and hit sounds
└── minecraft-font/         # Minecraft pixel font
```

---

## ⚙️ Technical Details

- **Responsive grid** — tile sizes are calculated dynamically based on screen dimensions using `Math.max(tileW, tileH)` so the map always fills the screen without gaps
- **CSS pseudo-elements** — mob sprites use `::after` to render larger than their tile without breaking the grid layout, with `scaleX(-1)` for directional facing
- **No game engine** — the entire game loop, rendering, input handling, inventory, and audio are managed with vanilla JavaScript
- **Keyboard shortcuts** — tools can be selected with F, A, S, D keys in addition to clicking
- **CSS variables** — tile size is set as a CSS custom property (`--tile-size`) and updated on window resize

---

## 🚀 Live Demo

[Play the game](https://agent-69e4140ed08ec58a94683323--2d-minecraftno1.netlify.app/minecraft.html)

---

## 👨‍💻 Built With

- HTML5
- CSS3 (Flexbox, Grid, clamp, CSS variables, pseudo-elements)
- Vanilla JavaScript (DOM manipulation, event listeners, dynamic rendering)
- Minecraft font and textures for visual authenticity
