Foxhole War Map
===============

http://foxholeglobal.com/map

![Foxhole War Map](https://i.imgur.com/g3QaBO2.png)

### Why a fork ?

This fork was made to implement the second Foxhole servers (and can easily be extended), as well as a new format for data storing. The data is stored in the `/public/data` directory, following this hierarchy :

```tree
./data
├── war1
│   ├── dynamic.json
│   └── static.json
└── war2
    ├── dynamic.json
    └── static.json
```

The server selector is crude due to my lack of design sense, time, and react knowledge, but works in 2 methods :

- The dropdown on the top left corner
- The URL hash. `/map/#1` shows the first server's map, and `/map/#2` shows the second's.

The data fetching and file updating is delegated to the brother project https://github.com/Seblor/foxhole-data-aggregator.

### Overview
The Foxhole War Map, also known as the Foxhole Interactive Map, is a community project developed for the game [Foxhole](https://store.steampowered.com/app/505460/Foxhole/). The War Map displays information about the state of the war. This project is developed using the [LeafletJS library](https://leafletjs.com/).

Foxhole is a cooperative sandbox massively-multiplayer action-strategy video game being developed and published by Canadian video game company Clapfoot. The data is taken from the official Foxhole WarAPI, which can be found at https://github.com/clapfoot/warapi.

### Instructions
Download the repository and run `npm install` in the root directory to install node dependencies, and then `npm start` to run the app.

### Special Thanks
The Foxhole War Map Project would not be a reality without the help of various people:
- Kastow
- BladeRikWir
- TauZeph
- Mulon
- Sethfire for providing the original repository

As well as the Foxhole game developers for their invaluable help and assistance:
- KrazyFlyinChicken
- Casey
- Nooba

### Contact
Discord server - https://discord.gg/DJuAkTk
