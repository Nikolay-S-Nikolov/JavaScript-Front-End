function splitter(text){
    text = text.match(/[A-Z]{1}[a-z]*/g);
    console.log(text.join(', '));
};

splitter('SplitMeIfYouCanHaHaYouCantOrYouCanIIII')