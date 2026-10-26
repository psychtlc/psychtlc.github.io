(() => {
  const postList = document.getElementById('blogPostList');
  const postCount = document.getElementById('postCount');
  const emptyState = document.getElementById('emptyState');
  const categoryFilters = [...document.querySelectorAll('.category-filter')];

  if (!postList || !postCount || !emptyState || categoryFilters.length === 0) return;

  const posts = [...postList.querySelectorAll('.blog-post-card')];
  let selectedCategory = 'all';

  function updatePosts() {
    let visibleCount = 0;

    posts.forEach((post) => {
      const matchesCategory = selectedCategory === 'all' ||
        post.dataset.categories.split(', ').includes(selectedCategory);
      post.hidden = !matchesCategory;
      visibleCount += Number(matchesCategory);
    });

    postCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'post' : 'posts'}`;
    emptyState.hidden = visibleCount !== 0;
  }

  categoryFilters.forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      categoryFilters.forEach((filter) => {
        const isSelected = filter === button;
        filter.classList.toggle('is-active', isSelected);
        filter.setAttribute('aria-pressed', String(isSelected));
      });
      updatePosts();
    });
  });

  updatePosts();
})();
