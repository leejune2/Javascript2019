 const chatbot = {
    qs :[
      ["how are you", "getting better"],
      ["what is your name", "HAL"],
      ["why are you here", "sorry...that question needs pondering"],
      ["how old are you", "i am 5 years old"]
     ], 

    checkAnswer: function(q) {
     // logic
     for (let o of this.qs) {
      if (o[0] == q) {
       return o[1];
      }
  	}

      if (q.match("how") && q.match("you") || q.match("what's up")){
        return this.qs[0][1];
      }
    
      if (q.match("what's") && q.match("name") || q.match("who are you")){
        return this.qs[1][1];
      }

      if (q.match("why") && q.match("here") || q.match("what are you doing")){
        return this.qs[2][1];
      }

      if (q.match("how") && q.match("old") || q.match("how old r u")){
        return this.qs[3][1];
      }

     } 

    }


//var question = prompt('Ask your question');

let question = "what is your name";
let ans = chatbot.checkAnswer(question);
console.log(ans);

question = "how you";
ans = chatbot.checkAnswer(question);
console.log(ans);

question = "what's up";
ans = chatbot.checkAnswer(question);
console.log(ans);

//etc


