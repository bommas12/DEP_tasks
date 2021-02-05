function addPagination(items, itemsPerPage, totalPages) {
  const fragment = document.createDocumentFragment();
  const eleToCreate = Math.ceil(items.length / itemsPerPage);
  new Array(eleToCreate).fill(0).map((_, i) => {
    const aRef = document.createElement("a");
    aRef.textContent = `${totalPages + i + 1}`;
    fragment.appendChild(aRef);
  });
  fragment.querySelector("a").className = "active";
  return fragment;
}
