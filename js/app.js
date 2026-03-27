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
  document.location.href="quiz.html";
}

let card_index
let inverted=false


function init_flashcards(){

  inverted=document.getElementById("inverted").checked
  document.getElementById("inversion-form").classList.add("hidden")


  const flashcards=["Maroc","Algerie","Tunisie", "Mali","République démocratique du Congo","Afrique du Sud", "Madagascar", "Egypte",
  "Syrie", "Irak","Iran","Israel", "Arabie saoudite", "Afghanistan", "Turquie", "Ukraine","Russie","Inde","Chine","Vietnam","Japon","Corée du Nord","Corée du Sud","Australie",
  "Etats-Unis","Canada","Mexique","Brésil","Chili","Argentine"];

  shuffle(flashcards);
  const container=document.getElementById("flashcard_container");


  flashcards.forEach((card, index)=> {
    const card_div =document.createElement("div")
    card_div.classList.add("card","hidden");

    card_div.id=index.toString()

    if (inverted) {
      card_div.innerHTML =
        '<div class="card-inner">' +
        '<div class="card_back"> <img class="card_img" alt="" src="img/' + card + '.png"></div>' +
        '<div class="card_front"><p class="text_wrapper">' + card + '</p></div>' +
        '</div>';
    }else{
      card_div.innerHTML =
        '<div class="card-inner">' +
        '<div class="card_front"> <img class="card_img" alt="" src="img/' + card + '.png"></div>' +
        '<div class="card_back"><p class="text_wrapper">' + card + '</p></div>' +
        '</div>';
    }
    card_div.addEventListener("click", () => {
      card_div.classList.toggle("flipped");
    });

    container.appendChild(card_div);
  })

  card_index=0
  document.getElementById("0").classList.toggle('hidden');

  const start_button = document.getElementById("start-button");
  document.getElementsByClassName("button_top")[0].innerText="Carte Suivante";
  start_button.onclick=next_flashcard;
}

function end_flashcard(){
  const start_button = document.getElementById("start-button");
  document.getElementsByClassName("button_top")[0].innerText="Recomencer";
  start_button.onclick=go_to_flashcard;
}

function next_flashcard(){
  document.getElementById(card_index.toString()).classList.toggle('hidden')
  card_index += 1
  if (card_index === 30){
    end_flashcard()
  }else {
    document.getElementById(card_index.toString()).classList.toggle('hidden');
  }
}








