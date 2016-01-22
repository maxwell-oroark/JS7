
// Problem One

function capitalize(string){

  var stringArray = string.split(" ");
  var newArray = [];

  for(var i = 0 ; i < stringArray.length ; i++ ){

    var FirstLetter = stringArray[i].charAt(0).toUpperCase();
    var restOfWord = stringArray[i].slice(1);

    newArray[i] = FirstLetter + restOfWord;

  }

    return newArray.join(' ');

}

capitalize('today is going to be a good day')

// Problem Two

function wordCount(string){
	var stringArray = string.split('');
	var wordNumber = stringArray.length;
	return wordNumber;
}

wordCount('today is going to be a good day')