const tags = document.querySelectorAll('[data-tag]');
const projects = document.querySelectorAll('[data-relatedtags]');
const highlightProject = (project) => project.classList.add('higlightedProject');

const unselectTags = () => {
  const selectedTags = document.querySelectorAll('.selectedTag');
  selectedTags.forEach((tag) => tag.classList.remove('selectedTag'));
};

const filterByTag = (tag) => {
  unselectTags();
  tag.classList.add('selectedTag');
  const tagValue = tag.dataset.tag;
  return projects.forEach((project) => {
    project.classList.remove('higlightedProject');
    const relatedTags = project.dataset.relatedtags
      ? JSON.parse(project.dataset.relatedtags)
      : [];
    relatedTags?.includes(tagValue) ? highlightProject(project) : null;
  });
};

tags.forEach((tag) => {
  tag.addEventListener('click', () => filterByTag(tag));
});
