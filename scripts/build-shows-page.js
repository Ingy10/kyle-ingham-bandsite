const showSection = document.querySelector(".main1");

const API_KEY = "57aa9ce8-eecb-4663-b0eb-5800a58b2572";
let commentApi = new BandSiteApi(API_KEY);

// Main section content
let section1; // declared in global scope so this variable can be used in multiple functions

// Function for non-repeated top section of main content
function createStataicElements() {
  const title = document.createElement("h2");
  section1 = document.createElement("section");
  const subtitleContainers = document.createElement("div");
  const subtitleContainer1 = document.createElement("div");
  const subtitleContainer2 = document.createElement("div");
  const subtitleContainer3 = document.createElement("div");
  const subtitleContainer4 = document.createElement("div");
  const textTitleTablet1 = document.createElement("p");
  const textTitleTablet2 = document.createElement("p");
  const textTitleTablet3 = document.createElement("p");

  // fixed value assignments
  title.textContent = "Shows";
  textTitleTablet1.textContent = "DATE";
  textTitleTablet2.textContent = "VENUE";
  textTitleTablet3.textContent = "LOCATION";

  // Assignment of parent-child relationships
  showSection.appendChild(title);
  showSection.appendChild(section1);
  section1.appendChild(subtitleContainers);
  subtitleContainers.appendChild(subtitleContainer1);
  subtitleContainers.appendChild(subtitleContainer2);
  subtitleContainers.appendChild(subtitleContainer3);
  subtitleContainers.appendChild(subtitleContainer4);
  subtitleContainer1.appendChild(textTitleTablet1);
  subtitleContainer2.appendChild(textTitleTablet2);
  subtitleContainer3.appendChild(textTitleTablet3);

  // Assignment of classes
  title.classList.add("main1__title", "subheader-title");
  section1.classList.add("main1__section-1");
  subtitleContainers.classList.add("main1__subtitle-containers");
  subtitleContainer1.classList.add("main1__subtitle-container");
  subtitleContainer2.classList.add("main1__subtitle-container");
  subtitleContainer3.classList.add("main1__subtitle-container");
  subtitleContainer4.classList.add("main1__subtitle-container");
  textTitleTablet1.classList.add(
    "main1__text",
    "main1__text-title",
    "main1__text-title-tablet"
  );
  textTitleTablet2.classList.add(
    "main1__text",
    "main1__text-title",
    "main1__text-title-tablet"
  );
  textTitleTablet3.classList.add(
    "main1__text",
    "main1__text-title",
    "main1__text-title-tablet"
  );
}

// Show content to be added via show array
function inputShows(show) {
  const contentContainer = document.createElement("div");
  const divs = document.createElement("div");
  const div1 = document.createElement("div");
  const textContentDate = document.createElement("p");
  const div2 = document.createElement("div");
  const textContentVenue = document.createElement("p");
  const div3 = document.createElement("div");
  const textContentLocation = document.createElement("p");
  const div4 = document.createElement("div");
  const button = document.createElement("button");
  const textTitleMobile1 = document.createElement("p");
  const textTitleMobile2 = document.createElement("p");
  const textTitleMobile3 = document.createElement("p");

  button.textContent = "BUY TICKETS";

  section1.appendChild(contentContainer);
  contentContainer.appendChild(divs);
  divs.appendChild(textTitleMobile1);
  divs.appendChild(div1);
  div1.appendChild(textContentDate);
  divs.appendChild(textTitleMobile2);
  divs.appendChild(div2);
  div2.appendChild(textContentVenue);
  divs.appendChild(textTitleMobile3);
  divs.appendChild(div3);
  div3.appendChild(textContentLocation);
  divs.appendChild(div4);
  div4.appendChild(button);

  contentContainer.classList.add("main1__content-container");
  divs.classList.add("main1__divs");
  div1.classList.add("main1__div");
  div2.classList.add("main1__div");
  div3.classList.add("main1__div");
  div4.classList.add("main1__div", "main1__div-button");
  textContentDate.classList.add(
    "main1__text",
    "main1__text-content",
    "main1__text-content-1"
  );
  textContentVenue.classList.add(
    "main1__text",
    "main1__text-content",
    "main1__text-content-2"
  );
  textContentLocation.classList.add(
    "main1__text",
    "main1__text-content",
    "main1__text-content-3"
  );
  button.classList.add("main1__button", "submit-button");
  textTitleMobile1.classList.add(
    "main1__text",
    "main1__text-title",
    "main1__text-title-mobile"
  );
  textTitleMobile2.classList.add(
    "main1__text",
    "main1__text-title",
    "main1__text-title-mobile"
  );
  textTitleMobile3.classList.add(
    "main1__text",
    "main1__text-title",
    "main1__text-title-mobile"
  );

  textTitleMobile1.textContent = "DATE";
  textTitleMobile2.textContent = "VENUE";
  textTitleMobile3.textContent = "LOCATION";
  textContentDate.textContent = new Date(show.date).toDateString();
  textContentVenue.textContent = show.place;
  textContentLocation.textContent = show.location;
}

// loop through shows array to add each show with related structure
async function addShow() {
  async function getShows() {
    // Method to get shows data in array form
    try {
      const showList = await commentApi.getShows();
      const showListArray = showList.data;
      return showListArray;
    } catch (error) {
      console.error(error);
    }
  }
  const shows = await getShows();
  for (const show of shows) {
    inputShows(show);
  }
  activeElementSelector();
}

// dynamic active element selector for specific styling to any show that is clicked
function activeElementSelector() {
  const showItem = document.querySelectorAll(".main1__content-container");

  showItem.forEach((item) => {
    item.addEventListener("click", () => {
      showItem.forEach((highlight) => {
        highlight.classList.remove("main1__content-container-selected");
      });
      item.classList.add("main1__content-container-selected");
    });
  });
}

createStataicElements(); // call function to create static portion of main section
addShow(); // call the function to iterate through the shows array
