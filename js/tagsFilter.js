const tags = document.querySelectorAll('[data-tag]');
const titles = document.querySelectorAll('[data-relatedtags]');
const highlightElement = (title) => title.classList.add('higlightedProject');

const unselectButttons = () => {
  const selectedButtons = document.querySelectorAll('.selectedTag');
  selectedButtons.forEach((button) => button.classList.remove('selectedTag'));
};

const filterByTag = (tag) => {
  unselectButttons();
  tag.classList.add('selectedTag');
  const tagValue = tag.dataset.tag;
  return titles.forEach((title) => {
    title.classList.remove('higlightedProject');
    const relatedTags = title.dataset.relatedtags
      ? JSON.parse(title.dataset.relatedtags)
      : [];
    relatedTags?.includes(tagValue) ? highlightElement(title) : null;
  });
};

tags.forEach((tag) => {
  tag.addEventListener('click', () => filterByTag(tag));
});
