const breakPoints = {
  1: {
    width: 500,
    items: 1,
  },
  2: {
    width: 700,
    items: 3,
  },
  3: {
    width: 1000,
    items: 5,
  },
  active: null,
};

const state = {
  curPage: 1,
  totalPages: 0,
  thumbnailData: [],
};

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async () => {
  const searchInput = document.getElementById("search-input");
  state.curPage = 1;
  state.totalPages = 0;
  state.thumbnailData = [];

  const { searchVideos, getStatistics } = service;
  const videosList = await searchVideos(searchInput.value);
  const videosIdList = videosList.map((videoItem) => videoItem.id.videoId);
  const statisticsList = await getStatistics(videosIdList);
  state.thumbnailData = getThumbnailData(videosList, statisticsList);

  const thumnailSlider = document.querySelector(".thumbnail-slider");
  thumnailSlider.innerHTML = "";
  thumnailSlider.appendChild(
    addVideoElements(
      thumnailSlider.clientWidth,
      state.thumbnailData,
      breakPoints.active.items
    )
  );
  thumnailSlider.style.transition = "transform 0.4s ease-in-out";
  thumnailSlider.style.transform = "translateX(0px)";

  const pageContainer = document.querySelector(".pagination-container");
  pageContainer.innerHTML = "<a>left</a>";
  const pages = addPagination(
    state.thumbnailData,
    breakPoints.active.items,
    state.totalPages
  );
  pageContainer.appendChild(pages);
  pageContainer.innerHTML += "<a>right</a>";
  state.totalPages += state.thumbnailData.length / breakPoints.active.items;

  pageContainer.removeEventListener("click", paginate);
  pageContainer.addEventListener("click", paginate);
});

window.onload = () => {
  if (window.innerWidth > breakPoints[3].width) {
    breakPoints.active = breakPoints[3];
  } else if (window.innerWidth > breakPoints[2].width) {
    breakPoints.active = breakPoints[2];
  } else {
    breakPoints.active = breakPoints[1];
  }
};
