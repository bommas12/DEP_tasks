const template = document.querySelector("#list-item");
function addVideoElements(totalWidth, videoArray, itemsPerPage) {
  const fragment = document.createDocumentFragment();
  videoArray.forEach((videoItem) => {
    const clone = template.content.cloneNode(true);

    const item = createVideoElement(
      videoItem,
      clone,
      totalWidth / itemsPerPage
    );
    fragment.appendChild(item);
  });

  return fragment;
}
