var qoutes = [
   {
      wise: "A poor man is like a foreigner in his own country.",
      speaker: "-- Ali Ibn Abi Talib"
   },
   {
      wise: "Too much silence generates prestige",
      speaker: "-- Ali Ibn Abi Talib"
   },
   {
      wise: "Whoever is arrogant towards people will be humiliated",
      speaker: "-- Ali Ibn Abi Talib"
   },
   {
      wise: "If poverty were a man, I would have slain him.",
      speaker: "-- Ali Ibn Abi Talib"
   },
   {
      wise: "Close your eyes to this world and turn your heart away from it, and beware of it destroys you as it destroyed those before you",
      speaker: "-- Omar Ibn Al Khattab"
   },
   {
      wise: "No amount of guilt can change the past and no amount of worrying can change the future",
      speaker: "-- Omar Ibn Al Khattab"
   },
   {
      wise: "Sometimes the people with the worst past, create the best future.",
      speaker: "-- Omar Ibn Al Khattab"
   },
   {
      wise: "May Allah bless the man who says less and does more",
      speaker: "-- Omar Ibn Al Khattab"
   },
   {
      wise: "acquire knowledge and learn tranquility and dignity",
      speaker: "-- Omar Ibn Al Khattab"
   },
   {
      wise: "Satisfaction is an infinite money",
      speaker: "-- Ali Ibn Abi Talib"
   },
   {
      wise: "The tears did not dry except because of the hardness of the hearts, and the hearts did not become hardened except because of the abundance of sins",
      speaker: "-- Abu Bakr Al Siddiq"
   },
   {
      wise: "The greatest truth is honesty, and the greatest falsehood is dishonesty.",
      speaker: "-- Abu Bakr Al Siddiq"
   },
   {
      wise: "beware of lying for lying is contrary of faith",
      speaker: "-- Abu Bakr Al Siddiq"
   },
   {
      wise: "it is difficult to be patient but to waste the rewards of patience is worse",
      speaker: "-- Abu Bakr Al Siddiq"
   },
   {
      wise: "THERE IS NO WORSE DISEASE THAN MISERLINESS",
      speaker: "-- Abu Bakr Al Siddiq"
   }
]


var wise = document.getElementById("qoute"),
   whoSay = document.getElementById("whoSayIt"),
   change = document.getElementById("do")

var newI;


var random = () => {
   let i = Math.floor(Math.random() * qoutes.length);
   while (i === newI) {
      i = Math.floor(Math.random() * qoutes.length);
   }
   newI = i;
   return newI;
};

change.addEventListener("click", function () {
   let copy = random();
   wise.innerHTML = qoutes[copy].wise;
   whoSay.innerHTML = qoutes[copy].speaker;
   console.log(copy);
});









