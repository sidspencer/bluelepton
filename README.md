# bluelepton
An HTML5/TypeScript/LitElement application using and abusing the AudioContext API for messing with music files more than a regular EQ would allow, encouraging you to find your own unique way to re-format the recording into exacly the art you wish it to be. Yeah, I'm philosophical about it, even though I mainly just crank the RPMs so it's "Meet The Beatles" playing at 45, not 33, with chipmunk vocals, as short as Ramones tracks! The plan was to distribute it as a Hybrid App through Cordova (may still happen for Android), a PWA on supporting OSes (which grow in rich support every day), and a slightly enhanced version as a browser extension/add-on so you could have your Dirty Deeds Done Dirt Cheap on web audio sources and not just your own music files. (Who even has mp3s anymore, right?)


# v0.0.5
This will be our inaugaral release, probably as some sort of PWA, or a ChromeApp-like Browser Extension that takes its own tab and does not interact with other tabs. It will require the "upload" of an mp3 or aac file, and then will allow you to chop and screw that sucka -- and also allow an export so you can share your atrocities. bluelepton builds upon sidspencer/music-shifter and aims to deliver the dream that music-shifter had, now that all the technologies are in alignment. By using Lit -- cross-platform, native Web Components -- I can avoid the picky bloat and shackling pseudostandards of modern front-end frameworks without rolling my own front-end machniations. I'm going to try to write this in TypeScript from the beginning, though I do loathe that damn transpilation... but it's a lot more succinct in TS than in JS. 


# building
`npm i; npm run build; npm run srv;`. After that first build, you can use `npm run up`.

