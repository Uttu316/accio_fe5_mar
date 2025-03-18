/**
 * Makes an API call to the job board and returns the data.
 * @param {Object} config - Configuration for the API call.
 * @returns {Promise<Object>} - The data returned from the API.
 */

const api = async (config) => {
  const { endpoint, method = "GET" } = config || {};
  let url = "https://www.arbeitnow.com/api/job-board-api";
  try {
    const res = await fetch(url, {
      method,
    });
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    throw res;
  } catch (e) {
    console.log(e, url);
    throw new Error("API FAILED", { cause: e });
  }
};

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
 * Calculates how long ago a date was from the current time.
 * @param {string} dateString - The date string to convert.
 * @returns {string} - A string representing how long ago the date was.
 */

function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(seconds / 86400);
  const weeks = Math.floor(seconds / 604800);

  if (weeks > 0) {
    if (weeks > 8) {
      return `more than 2 months`;
    }
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
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
  handleUnlike(unlikneBtn, jobCard);

  const likeBtn = jobCard.find(".job_like_btn");
  handleLikeBtn(likeBtn, jobItem);

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
function handleUnlike(unlikneBtn, jobCard) {
  unlikneBtn.on("click", function () {
    jobCard.remove();
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

    console.log(countEl.html());
    let isAlreadyLiked = likeBtn.hasClass("job_liked_btn");

    if (isAlreadyLiked) {
      likeBtn.removeClass("job_liked_btn");
      currCount -= 1;
      jobItem.isLike = false;
    } else {
      likeBtn.addClass("job_liked_btn");
      currCount += 1;
      jobItem.isLike = true;
    }

    countEl.data("count", currCount);
    countEl.html(currCount);
  });
}

getJobs();
