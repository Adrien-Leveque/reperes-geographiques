const map=document.getElementById("map");

const MIN_ZOOM = 200;
const MAX_ZOOM = 2000;



const vb = map.viewBox.baseVal;

let viewBox = {
  x: vb.x,
  y: vb.y,
  width: vb.width,
  height: vb.height
};

function updateViewBox() {
  map.setAttribute(
    "viewBox",
    `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`
  );
}

function zoom(factor,x=-1,y=-1){



  const newWidth = viewBox.width * factor;
  const newHeight = viewBox.height * factor;

  if (newWidth < MIN_ZOOM || newWidth > MAX_ZOOM) return;


  const rect = map.getBoundingClientRect();

  const svgX = viewBox.x + (x / rect.width) * viewBox.width;
  const svgY = viewBox.y + (y / rect.height) * viewBox.height;

  if (x===-1){
    viewBox.x +=(viewBox.width-newWidth)/2;
    viewBox.y +=(viewBox.height-newHeight)/2;
  }else {
    viewBox.x = svgX - (x / rect.width) * newWidth;
    viewBox.y = svgY - (y / rect.height) * newHeight;
  }
  viewBox.width = newWidth;
  viewBox.height = newHeight;


  updateViewBox();
}

map.addEventListener("wheel", (e) => {
  e.preventDefault();

  const scale = e.deltaY > 0 ? 1.1 : 0.9;
  zoom(scale,e.x,e.y);
});



let isPanning = false;
let start = { x: 0, y: 0 };

map.addEventListener("mousedown", (e) => {
  isPanning = true;
  start = { x: e.clientX, y: e.clientY };
});

map.addEventListener("mousemove", (e) => {
  if (!isPanning) return;

  const dx = (e.clientX - start.x) * (viewBox.width / map.clientWidth);
  const dy = (e.clientY - start.y) * (viewBox.height / map.clientHeight);

  viewBox.x -= dx;
  viewBox.y -= dy;

  start = { x: e.clientX, y: e.clientY };

  updateViewBox();
});

map.addEventListener("mouseup", () => isPanning = false);
map.addEventListener("mouseleave", () => isPanning = false);



country_codes={
  "AF": "Afghanistan",
  "AL": "Albania",
  "DZ": "Algeria",
  "AI": "Anguilla",
  "AM": "Armenia",
  "AW": "Aruba",
  "AT": "Austria",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BA": "Bosnia and Herzegovina",
  "BW": "Botswana",
  "BR": "Brazil",
  "VG": "British Virgin Islands",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CO": "Colombia",
  "CR": "Costa Rica",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Curaçao",
  "CZ": "Czech Republic",
  "CI": "Côte d'Ivoire",
  "KP": "Dem. Rep. Korea",
  "CD": "Democratic Republic of the Congo",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FI": "Finland",
  "GF": "French Guiana",
  "GA": "Gabon",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GL": "Greenland",
  "GD": "Grenada",
  "GU": "Guam",
  "GT": "Guatemala",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HN": "Honduras",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "IR": "Iran",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IL": "Israel",
  "JM": "Jamaica",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "XK": "Kosovo",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao PDR",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libya",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MV": "Maldives",
  "ML": "Mali",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "YT": "Mayotte",
  "MX": "Mexico",
  "MD": "Moldova",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "BQBO": "Netherlands",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestine",
  "PA": "Panama",
  "PY": "Paraguay",
  "PE": "Peru",
  "PL": "Poland",
  "PT": "Portugal",
  "QA": "Qatar",
  "CG": "Republic of Congo",
  "KR": "Republic of Korea",
  "RE": "Reunion",
  "RO": "Romania",
  "RW": "Rwanda",
  "BQSA": "Saba (Netherlands)",
  "LC": "Saint Lucia",
  "VC": "Saint Vincent and the Grenadines",
  "BL": "Saint-Barthélemy",
  "MF": "Saint-Martin",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SL": "Sierra Leone",
  "SX": "Sint Maarten",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SO": "Somalia",
  "ZA": "South Africa",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "BQSE": "St. Eustatius (Netherlands)",
  "SD": "Sudan",
  "SR": "Suriname",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syria",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "GM": "The Gambia",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TN": "Tunisia",
  "TM": "Turkmenistan",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VE": "Venezuela",
  "VN": "Vietnam",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
}

country_names={
  "Afghanistan":"Afghanistan",
  "Algeria":"Algérie",
  "Argentina":"Argentine",
  "Australia":"Australie",
  "Brazil":"Brésil",
  "Canada":"Canada",
  "Chile":"Chili",
  "China":"Chine",
  "Dem. Rep. Korea":"Corée du Nord",
  "Democratic Republic of the Congo":"République démocratique du Congo",
  "Egypt":"Egypte",
  "Iran":"Iran",
  "Iraq":"Irak",
  "India":"Inde",
  "Israel":"Israel",
  "Japan":"Japon",
  "Mali":"Mali",
  "Madagascar":"Madagascar",
  "Mexico":"Mexique",
  "Morocco":"Maroc",
  "Republic of Korea":"Corée du Sud",
  "Russian":"Russie",
  "South Africa":"Afrique du Sud",
  "Syria":"Syrie",
  "Tunisia":"Tunisie",
  "Turkey":"Turquie",
  "Ukraine":"Ukraine",
  "United":"Etats-Unis",
  "Saudi Arabia":"Arabie saoudite",
  "Vietnam":"Vietnam"

}

const countries_element=document.querySelectorAll("path")

countries_element.forEach(country => {
  country.addEventListener("click", (e) => {
    countries_element.forEach(country_ => {
      country_.classList.remove("selected");
    })
    country.classList.add("selected");

  })
})


let question_index=0
let questions
let score=0

function start_quiz(countries){
  shuffle(countries)
  questions=countries;

  const question_element=document.getElementsByClassName("question")[0];
  question_element.innerText=questions[0]

  const submit_button=document.getElementById("submit-button");
  submit_button.addEventListener("click", verify_answer)

}

function get_selected(){
  const countries_element=document.querySelectorAll("path")
  let name="no country selected"
  countries_element.forEach(country => {
    if (country.classList.contains("selected")){
      console.log(country)
      if (country.classList.length>1) {
        name= country_names[ country.classList[0]];

      }else{
        name= country_names[country_codes[country.id]];
      }
    }
  })
  return name
}

function verify_answer(){
  const result_container=document.getElementById("result");
  const quiz_container=document.getElementsByClassName("quiz")[0];

  const answer=get_selected();

  if (answer.toUpperCase()===questions[question_index].toUpperCase()){
    result_container.innerText="Bonne réponse";
    quiz_container.style.backgroundColor="#abff4a";
    score+=1
    console.log(score)
  }else{
    result_container.innerText="Mauvaise réponse : "+answer;
    quiz_container.style.backgroundColor="#ff3636";
  }

  const submit_button=document.getElementById("submit-button");

  submit_button.removeEventListener("click",verify_answer);
  submit_button.addEventListener("click",next_question);


  const submit_button_top=submit_button.getElementsByClassName("button_top")[0];
  submit_button_top.innerText="Question suivante";

}

function next_question(){
  question_index+=1;
  if (question_index===30){
    end_quiz();
  }else{

    const question_element=document.getElementsByClassName("question")[0];
    question_element.innerText=questions[question_index];

    const quiz_container=document.getElementsByClassName("quiz")[0];
    quiz_container.style.backgroundColor="#d1d1d1";

    const submit_button=document.getElementById("submit-button");

    const submit_button_top=submit_button.getElementsByClassName("button_top")[0];
    submit_button_top.innerText="Vérifier";

    submit_button.removeEventListener("click",next_question);
    submit_button.addEventListener("click",verify_answer);

  }
}

function end_quiz(){
  const quiz_menu = document.getElementsByClassName("quiz")[0];
  const end_menu=document.getElementById("end-menu");
  quiz_menu.classList.add("hidden");
  end_menu.classList.remove("hidden");
  const score_container=document.getElementsByClassName("score")[0];
  score_container.innerText="score : "+score+"/30";
}
