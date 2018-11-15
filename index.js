function shout(string) {
  return string.toUpperCase();
}

function whisper(s) {
  return s.toLowerCase();
}

function logShout(s) {
  console.log(s.toUpperCase());
}


function logWhisper(s) {
  console.log(s.toLowerCase());
}

function sayHiToGrandma(s) {
  var lowerCase = s.toLowerCase();
  if(s === lowerCase) return "I can't hear you!";
}