fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const list = document.getElementById("postList");

    posts.sort((a, b) => (a.date < b.date ? 1 : -1));

    list.innerHTML = posts
      .map(p => `
        <li>
          <a href="${p.url}">${p.title}</a>
          <small>${p.date}</small>
        </li>
      `)
      .join("");
  })
  .catch(() => {
    document.getElementById("postList").innerHTML =
      "<li>Failed to load posts</li>";
  });