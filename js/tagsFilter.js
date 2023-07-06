const tags = document.querySelectorAll('[data-tag]');
const projects = document.querySelectorAll('[data-relatedtags]');

const highlightProject = (project) =>
  project.classList.add('higlightedProject');

const unselectTags = () => {
  const selectedTags = document.querySelectorAll('.selectedTag');
  selectedTags.forEach((tag) => tag.classList.remove('selectedTag'));
};

const filterByTag = (tag) => {
  unselectTags();
  tag.classList.contains('selectedTag')
    ? tag.classList.remove('selectedTag')
    : tag.classList.add('selectedTag');

  const tagValue = tag.dataset.tag;
  return projects.forEach((project) => {
    project.classList.remove('higlightedProject');
    const relatedTags = project.dataset.relatedtags
      ? JSON.parse(project.dataset.relatedtags)
      : [];

    // TODO: rename highlightProject function
    relatedTags?.includes(tagValue) ? highlightProject(project) : null;
  });
};

const removeFilter = (tag) => {
  tag.classList.remove('selectedTag');
  const selectedProjects = document.querySelectorAll('.higlightedProject');
  console.log(selectedProjects);
  selectedProjects.forEach((project) =>
    project.classList.remove('higlightedProject')
  );
};

tags.forEach((tag) => {
  tag.addEventListener('click', () =>
    tag.classList.contains('selectedTag') ? removeFilter(tag) : filterByTag(tag)
  );
});
