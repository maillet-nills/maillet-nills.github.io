const projectsContainer = document.getElementById("projects-container");
async function fetchProjects() {
  const { data, error } = await supabaseClient
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  let projectsHTML = "";

  data.forEach((project) => {
    techList = project.tech.split(",");
    projectsHTML += `
        <section class="py-5">
            <div class="container project-card">
                <div class="row align-items-center">
                    <div class="col-md">
                        <div class="mb-4">
                            <h2 class="project-title">${project.name}</h2>
                        </div>
                        <div class="d-flex justify-content-center mb-4">
                            <img src="${project.image}" alt="${project.name}" class="img-fluid project-image" />
                        </div>
                        <div class="mb-4">
                            <p class="justify">${project.description}</p>
                        </div>
                        <div class="row g-4">
                            <p class="skills-category"><strong>Used technologies</strong></p>
                            ${techList
                              .map(
                                (tech) => `
                                <div class="col-6 col-md-4">
                                    <div class="tech-card">
                                        <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg"
                                        alt="${tech}"
                                        class="tech-icon" />
                                        <span class="tech-name">${tech}</span>
                                    </div>
                                </div>
                                `,
                              )
                              .join("")}
                        </div>
                        <div class="mt-4 d-flex justify-content-center">
                            <a href="${project.github_link}" target="_blank" class="btn btn-outline-hero px-5 py-3">View the GitHub Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
  });
  projectsContainer.innerHTML = projectsHTML;
}

fetchProjects();
