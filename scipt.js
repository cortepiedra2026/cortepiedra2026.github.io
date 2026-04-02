function showSection(sectionId) {
  const sections = document.querySelectorAll('.menu-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}
