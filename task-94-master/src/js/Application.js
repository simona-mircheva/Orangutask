// import EventEmitter from "eventemitter3";

// export default class Application extends EventEmitter {
//   static get events() {
//     return {
//       READY: "ready",
//     };
//   }

//   constructor() {
//     super();
//     this.emojis = [];
//     this.banana = "🍌";
//     this.emit(Application.events.READY);
//   }
//   setEmojis(emojis) {
//     this.emojis = emojis;
//     console.log(emojis);
//     let emojiDiv = document.getElementById("emojis");
//     emojiDiv.innerHTML = "🍌";
//     }
  
//   addBananas() {
//     let monkeyBanana = emojis.map(monkey => monkey + this.banana)
//     console.log(monkeyBanana}
//     monkeyBanana.forEach(emoji => {
//       let div = document.getElementById("emojis");
//       let paragraph = document.createElement("p");
//       paragraph.textContent = monkeyBanana;
//       div.appendChild(paragraph);
//       return monkeyBanana;
// }
