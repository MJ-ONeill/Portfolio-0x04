function toggleReadMore(index) {
    const readMoreContent = document.getElementById(`read-more-${index}`);
    const readMoreLink = document.getElementById(`read-more-link-${index}`);

    if (readMoreContent.classList.contains("show")) {
      readMoreContent.classList.remove("show");
      readMoreLink.textContent = "Read More";
    } else {
      readMoreContent.classList.add("show");
      readMoreLink.textContent = "Read Less";
    }
  }