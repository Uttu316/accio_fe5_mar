import { api } from "./api.js";
import debounce from "./debounce.js";
import { timeAgo } from "./time.js";
/**
 * Fetches jobs from the API and displays them on the page.
 * @returns {Promise<void>}
 */

const getJobs = async () => {
  try {
    const data = await api();
    if (data && data.data && data.data.length) {
      let jobs = data.data;
      showJobs(jobs);
      handleLocationFilter(jobs);
      handleFavFilter(jobs);
      searchFilter(jobs);
    } else {
      //no jobs available
    }
  } catch (e) {
    // handle api errors
  }
};

/**
 * Displays the job cards on the page.
 * @param {Array} jobs - The array of job items to display.
 */

function showJobs(jobs) {
  const jobsContainer = $("#jobs");
  const jobCards = jobs.map((item) => createJobCard(item));
  jobsContainer.append(jobCards);
}

/**
 * Creates a job card element for a given job item.
 * @param {Object} jobItem - The job item containing details to display.
 * @returns {jQuery} - The jQuery object representing the job card.
 */

function createJobCard(jobItem) {
  const {
    title,
    job_types,
    description,
    tags,
    company_name,
    location,
    created_at,
  } = jobItem;

  let companyLoago = company_name.includes(".com")
    ? company_name
    : company_name + ".com";

  let time = timeAgo(created_at);

  const jobCard = $(`<div class="job-card">
    <div class="job_logo">
      <img
        class="job_logo_img"
        src="https://img.logo.dev/${companyLoago}?token=pk_TLRk9T8ASV2UmMY8qXNNmQ"
        alt="${company_name}"
      />
    </div>
    <div class="job_content">
      <p class="job-title">
        <span class="job-company">${company_name} | </span>
        <span class="job-profile">${title}</span>
      </p>
      <p class="job_location">
        <i class="fa-solid fa-location-dot"></i>Job Available in ${location}
      </p>
      <p class="job_salary">80k-100k USD</p>
      <p class="job_desc">
       ${description.substr(0, 200)}...
      </p>
      <p class="job_published">${time}</p>
      <div class="job_tags">
        ${job_types.map((i) => `<span class="job_tag">${i}</span>`).join("")}
       ${tags.map((i) => ` <span class="job_tag">${i}</span>`).join("")}
      </div>
    </div>
    <div class="job_actions">
      <button class="job_view_btn">
        View <i class="fa-solid fa-eye"></i>
      </button>
      <div class="job_like_actions">
        <button title="Not intrested" class="job_unlike_btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <button title="Intrested" class="job_like_btn ${
          jobItem.isLike ? "job_liked_btn" : ""
        }">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  </div>`);

  const imgEl = jobCard.find(".job_logo_img");
  imgEl[0].onerror = loadDefaultImg;

  const unlikneBtn = jobCard.find(".job_unlike_btn");
  handleUnlike(unlikneBtn, jobCard, jobItem);

  const likeBtn = jobCard.find(".job_like_btn");
  handleLikeBtn(likeBtn, jobItem);

  const viewBtn = jobCard.find(".job_view_btn");
  handleViewBtn(viewBtn, jobItem);

  return jobCard;
}

/**
 * Loads a default image if the job logo fails to load.
 */

function loadDefaultImg() {
  this.src = "https://img.logo.dev/x.com?token=pk_TLRk9T8ASV2UmMY8qXNNmQ";
}

/**
 * Handles the click event for the unlike button.
 * Removes the job card from the display when clicked.
 * @param {jQuery} unlikneBtn - The jQuery object representing the unlike button.
 * @param {jQuery} jobCard - The jQuery object representing the job card to remove.
 */
function handleUnlike(unlikneBtn, jobCard, jobItem) {
  unlikneBtn.on("click", function () {
    jobCard.remove();
    jobItem.isLike = false;
  });
}

/**
 * Handles the click event for the like button.
 * Toggles the liked state of the job item and updates the like count.
 * @param {jQuery} likeBtn - The jQuery object representing the like button.
 * @param {Object} jobItem - The job item to update the liked state for.
 */
function handleLikeBtn(likeBtn, jobItem) {
  likeBtn.on("click", function () {
    const countEl = $("#nav_fav");

    let currCount = countEl.data("count") || 0;

    let isAlreadyLiked = likeBtn.hasClass("job_liked_btn");

    if (isAlreadyLiked) {
      likeBtn.removeClass("job_liked_btn");
      currCount -= 1;
    } else {
      likeBtn.addClass("job_liked_btn");
      currCount += 1;
      jobItem.isLike = true;
    }

    countEl.data("count", currCount);
    countEl.html(currCount);
  });
}
function cleanJobs() {
  $("#jobs").empty();
}
function handleLocationFilter(jobs) {
  const locations = getLocations(jobs);

  const options = locations.map((i) => $(`<option value="${i}">${i}</option>`));
  const geoFilter = $("#geo-filter");
  geoFilter.append(options);

  geoFilter.on("change", function (e) {
    const { value } = e.target;

    let filteredJobs;
    if (value === "") {
      filteredJobs = jobs;
    } else {
      filteredJobs = jobs.filter((i) => i.location === value);
    }
    cleanJobs();
    showJobs(filteredJobs);
  });
}

function getLocations(jobs) {
  const locations = jobs.map((i) => i.location);
  let uniques = new Set(locations);

  return [...uniques].slice(0, 5);
}

function handleFavFilter(jobs) {
  const favFilter = $("#fav-filter");

  favFilter.on("change", function (e) {
    const { value } = e.target;

    let filteredJobs;
    if (value === "") {
      filteredJobs = jobs;
    } else {
      filteredJobs = jobs.filter((i) => String(i.isLike) === value);
    }
    cleanJobs();
    showJobs(filteredJobs);
  });
}

function searchFilter(jobs) {
  const searchBox = $("#job_search");

  const debounceSearch = debounce(searchJobFilter);
  searchBox.on("input", function (e) {
    debounceSearch(e, jobs);
  });
}

function searchJobFilter(e, jobs) {
  const { value } = e.target;

  let filteredJobs;
  if (value == "") {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs.filter(
      (i) =>
        i.title.toLowerCase().includes(value.toLowerCase()) ||
        i.company_name.toLowerCase().includes(value.toLowerCase())
    );
  }
  cleanJobs();
  showJobs(filteredJobs);
}

function handleViewBtn(viewBtn, jobItem) {
  viewBtn.on("click", function () {
    const dialog = $("#view_job");
    document.body.style.overflow = "hidden";

    $("#view_job_title").html(jobItem.title);
    $("#view_job_company").html(jobItem.company_name);
    $("#view_job_dec").html(jobItem.description);
    dialog.show();
  });
}

getJobs();
