let question_index=0;
let score=0;

let country_array;

function go_to_map(){
  document.location.href="quiz map.html";
}



function start_quiz(countries){
  const menu_div=document.getElementsByClassName("menu")[0];
  menu_div.classList.add("hidden");

  const quiz_div=document.getElementsByClassName("quiz")[0];
  quiz_div.classList.remove("hidden");

  country_array=countries;
  shuffle(country_array);

  const img=document.getElementsByClassName("quiz_img")[0];
  img.src="img/"+country_array[0]+".png"
}

function verify_answer(){
  const answer_input=document.getElementById("answer_input");
  const answer=answer_input.value.toUpperCase();

  const result_container=document.getElementById("result");
  const quiz_container=document.getElementsByClassName("quiz")[0];

  if (answer === country_array[question_index].toUpperCase()){
    result_container.innerText="Bonne réponse";
    quiz_container.style.backgroundColor="#abff4a";
    score+=1
  }else{
    result_container.innerText="Mauvaise réponse : "+country_array[question_index];
    quiz_container.style.backgroundColor="#ff3636";
  }
  const submit_button=document.getElementById("submit-button");
  submit_button.onclick=next_question;

  const submit_button_top=submit_button.getElementsByClassName("button_top")[0];
  submit_button_top.innerText="Question suivante"

}

function next_question(){
  question_index+=1
  if (question_index===30){
    end_quiz()
  }else {

    const answer_input=document.getElementById("answer_input");
    answer_input.value="";

    const result_container = document.getElementById("result");
    const quiz_container = document.getElementsByClassName("quiz")[0];

    result_container.innerText = "";
    quiz_container.style.backgroundColor = "#d1d1d1";

    const submit_button = document.getElementById("submit-button");
    submit_button.onclick = verify_answer;

    const submit_button_top = submit_button.getElementsByClassName("button_top")[0];
    submit_button_top.innerText = "Vérifier"


    const img = document.getElementsByClassName("quiz_img")[0];
    img.src = "img/" + country_array[question_index] + ".png"
  }
}

function end_quiz(){
  const quiz_container = document.getElementsByClassName("quiz")[0];
  quiz_container.classList.add("hidden");

  const end_menu=document.getElementById("end-menu");
  end_menu.classList.remove("hidden");
  const score_p=document.getElementsByClassName("score")[0];
  score_p.innerText=score.toString()+"/30"
}
