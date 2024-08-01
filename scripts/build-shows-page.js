const showSection = document.querySelector(".main1__section1");

const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function displayShows(show) {
  const title = showSection.createElement("h1");
  const showContainer = showSection.createElement("div");
}

const showItem = document.querySelectorAll(".main1__content-container");

showItem.forEach((item) => {
  item.addEventListener("click", () => {
    showItem.forEach((highlight) => {
      highlight.classList.remove("main1__content-container-selected");
    });
    if (
      item.classList.contains("main1__content-container-selected") === false
    ) {
      item.classList.add("main1__content-container-selected");
    }
  });
});

/* <main class="main1">
  <h1 class="main1__title subheader-title">Shows</h1>
  <section class="main1__section-1">
    <div class="main1__subtitle-containers">
      <div class="main1__subtitle-container">
        <p class="main1__text main1__text-title main1__text-title-tablet main1__text-title-tablet-1">
          DATE
        </p>
      </div>
      <div class="main1__subtitle-container">
        <p class="main1__text main1__text-title main1__text-title-tablet main1__text-title-tablet-2">
          VENUE
        </p>
      </div>
      <div class="main1__subtitle-container">
        <p class="main1__text main1__text-title main1__text-title-tablet main1__text-title-tablet-3">
          LOCATION
        </p>
      </div>
      <div class="main1__subtitle-container"></div>
    </div>
    <div class="main1__content-container">
      <div class="main1__divs">
        <p class="main1__text main1__text-title main1__text-title-mobile main1__text-title-1">
          DATE
        </p>
        <div class="main1__div">
          <p class="main1__text main1__text-content main1__text-content-1">
            Mon Sept 09 2024
          </p>
        </div>
        <p class="main1__text main1__text-title main1__text-title-mobile main1__text-title-2">
          VENUE
        </p>
        <div class="main1__div">
          <p class="main1__text main1__text-content main1__text-content-2">
            Ronald Lane
          </p>
        </div>
        <p class="main1__text main1__text-title main1__text-title-mobile main1__text-title-3">
          LOCATION
        </p>
        <div class="main1__div">
          <p class="main1__text main1__text-content main1__text-content-3">
            San Francisco, CA
          </p>
        </div>
        <div class="main1__div">
          <button class="main1__button submit-button">BUY TICKETS</button>
        </div>
      </div>
    </div>
  </section>
</main>; */
