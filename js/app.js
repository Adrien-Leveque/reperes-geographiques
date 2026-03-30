function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function go_to_flashcard(){
  document.location.href="flashcards.html";
}

function go_to_quiz(){
  document.location.href="quiz menu.html";
}

countries=["Maroc","Algerie","Tunisie", "Mali","République démocratique du Congo","Afrique du Sud", "Madagascar", "Egypte",
  "Syrie", "Irak","Iran","Israel", "Arabie saoudite", "Afghanistan", "Turquie", "Ukraine","Russie","Inde","Chine","Vietnam","Japon","Corée du Nord","Corée du Sud","Australie",
  "Etats-Unis","Canada","Mexique","Brésil","Chili","Argentine"];

function get_countries(){
  return countries;
}






