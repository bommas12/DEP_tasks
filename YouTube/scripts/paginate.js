async function paginate(event) {
  const current = document.querySelector(".active");
  current.className = current.className.replace("active", "");
  const pageContainer = document.querySelector(".pagination-container");
  const thumbnailSlider = document.querySelector(".thumbnail-slider");
  if (event.target.innerText == "right" && state.curPage < state.totalPages) {
    state.curPage++;
  } else if (
    event.target.innerText == "right" &&
    state.curPage == state.totalPages
  ) {
    state.curPage++;
    const videosList = await service.getNextPage();
    const videosIdList = videosList.map((videoItem) => videoItem.id.videoId);
    const statisticsList = await service.getStatistics(videosIdList);
    let results = getThumbnailData(videosList, statisticsList);
    thumbnailSlider.appendChild(
      addVideoElements(
        thumbnailSlider.clientWidth,
        results,
        breakPoints.active.items
      )
    );

    const ele = pageContainer.lastChild;
    pageContainer.removeChild(ele);
    pageContainer.appendChild(
      addPagination(results, breakPoints.active.items, state.totalPages)
    );
    pageContainer.appendChild(ele);

    state.thumbnailData = [...state.thumbnailData, ...results];
    state.totalPages = state.thumbnailData.length / breakPoints.active.items;
  } else if (event.target.innerText == "left" && state.curPage > 1) {
    state.curPage--;
  } else if (!isNaN(+event.target.innerText)) {
    state.curPage = event.target.innerText;
  }

  pageContainer.children[state.curPage].className = "active";

  const thumbnailWidth = document.querySelector(".video-container").clientWidth;
  const slider = document.querySelector(".thumbnail-slider");
  slider.style.transition = "transform 0.4s ease-in-out";
  slider.style.transform =
    "translateX(" +
    -((state.curPage - 1) * breakPoints.active.items * thumbnailWidth) +
    "px)";
}
