
function writeCards(names, holiday) {
  const messages = [];

  for (let i = 0; i < names.length; i++ ) {
  messages.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
  }
return messages;
}

function countDown() {
 let countDown = 10;

 while ( countDown >= 0) {
  console.log(countDown--);
 }
}
