const dropdown = document.querySelector(".custom-dropdown");
const selectedOption = document.querySelector(".selected-option");
const options = document.querySelectorAll(".options li");

dropdown.addEventListener("click", function () {
  dropdown.classList.toggle("open");
});

options.forEach((option) => {
  option.addEventListener("click", function () {
    selectedOption.textContent = this.textContent;
  });
});

const Coursedropdown = document.querySelector(".course-dropdown");
const selectedCourse = document.querySelector(".selected-course");
const courseOptions = document.querySelectorAll(".course-options li");

Coursedropdown.addEventListener("click", function () {
  Coursedropdown.classList.toggle("open");
});

courseOptions.forEach((option) => {
  option.addEventListener("click", function () {
    selectedCourse.textContent = this.textContent;
  });
});

// Array of countries
const countries = [
  "Select Your Country",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "North Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const dropdownCountry = document.querySelector(".dropdown-country");
const selectedCountryOption = document.querySelector(
  ".dropdown-country-selected"
);
const countryOptionsList = document.querySelector(".dropdown-country-options");

function loadCountries() {
  countryOptionsList.innerHTML = ""; // Clear existing options

  countries.forEach((country) => {
    const li = document.createElement("li");
    li.textContent = country;
    countryOptionsList.appendChild(li);

    // Add click event listener to each country option
    li.addEventListener("click", () => {
      selectedCountryOption.textContent = country; // Update selected option
      // dropdownCountry.classList.remove('open');
    });
  });
}

// Toggle dropdown visibility on click
dropdownCountry.addEventListener("click", () => {
  dropdownCountry.classList.toggle("open");
});

// Call the function to load the countries
loadCountries();

const States = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Abuja",
];

// Selecting elements
const dropdownState = document.querySelector(".dropdown-state");
const selectedStateOption = document.querySelector(".dropdown-state-selected");
const stateOptionsList = document.querySelector(".dropdown-state-options");

function loadStates() {
  stateOptionsList.innerHTML = ""; // Clear existing options

  // Loop through states and create list items
  States.forEach((state) => {
    const li = document.createElement("li");
    li.textContent = state;
    stateOptionsList.appendChild(li);

    // Add click event listener to each state option
    li.addEventListener("click", () => {
      selectedStateOption.textContent = state; // Set the selected state
      //   dropdownState.classList.remove("open");
    });
  });
}

// Toggle dropdown visibility when clicked
dropdownState.addEventListener("click", () => {
  dropdownState.classList.toggle("open");
});

// Load states when the page is ready
loadStates();

const regBtn = document.querySelector(".registerBtn");

const success = document.querySelector(".success");

const form = document.querySelector(".regForm");


