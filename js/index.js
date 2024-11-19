const members = [
    {
      name: "PrestonFighter",
      pfp: "https://cdn.discordapp.com/avatars/1060773947030913054/008cbab7479a2caeff58f4aa4459b2a3.png", // Replace with actual image URL
      social: {
        youtube: "https://youtube.com/@prestonfighter",
        twitch: "https://twitch.tv",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Lightning_exe",
      pfp: "https://cdn.discordapp.com/avatars/853736449346109471/be04714e0aed0c86dd0db7ef0a360a35.png",
      social: {
        youtube: "https://www.youtube.com/@Lightning_exe",
        twitch: "https://twitch.tv",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Kurtinal",
      pfp: "https://cdn.discordapp.com/avatars/1282353944017895445/a962dea994e2d431d1926f22802c8c87.png",
      social: {
        youtube: "https://www.youtube.com/@Kurtinalmc",
        twitch: "https://twitch.tv",
        twitter: "https://twitter.com"
      }
    }
];
  
const memberList = document.getElementById("member-list");
  members.forEach(member => {
  const memberCard = document.createElement("div");
  memberCard.className = "member-card";
  // Create the HTML structure for the member card
  memberCard.innerHTML = `
      <img src="${member.pfp}" alt="${member.name}'s profile picture">
      <h3>${member.name}</h3>
      <div class="social-links">
      ${member.twitter ? `<a href="${member.twitter}" target="_blank"><img src="twitter-icon.png" alt="Twitter"></a>` : ""}
      ${member.twitch ? `<a href="${member.twitch}" target="_blank"><img src="twitch-icon.png" alt="Twitch"></a>` : ""}
      </div>
  `;
  // Append the member card to the member list
  memberList.appendChild(memberCard);
  });

const developers = [
    {
      name: "IDoTheHax",
      pfp: "https://cdn.discordapp.com/avatars/987323487343493191/a_8cd21cbf9d485e283f20dc98308990e1.gif", // Replace with actual image URL
      role: "Lead Developer"
    },
    {
      name: "Mesren",
      pfp: "https://cdn.discordapp.com/avatars/821825265339596830/70147ec0fbe4812af8617006a40aa817.png", // Replace with actual image URL
      role: "Main Developer"
    },
    {
      name: "DroopThusSnoot",
      pfp: "https://cdn.discordapp.com/avatars/1213119704110211084/a39351184ecad555a2b9e36b211726e5.png", // Replace with actual image URL
      role: "Main Developer"
    }
];
  
const developerList = document.getElementById("developer-list");

developers.forEach(dev => {
  const developerCard = document.createElement("div");
  developerCard.className = "developer-card";

  developerCard.innerHTML = `
    <img src="${dev.pfp}" alt="${dev.name}'s profile picture">
    <h3>${dev.name}</h3>
    <p>${dev.role}</p>
  `;

  developerList.appendChild(developerCard);
});

const projects = [
  {
    name: "RaRays",
    description: "Orbital Strike Cannons, Inspired by TheCymaera's SkyTorch",
    repo: "https://github.com/IDoTheHax/RaRays",
    modrinth: "https://modrinth.com/mod/RaRays",
    video: "https://www.youtube.com/watch?v=4iZvyrFI8CA"
  }
];

function displayProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.repo}" target="_blank" class="github-link">
          <img src="images/github-icon.png" alt="GitHub" class="project-icon">
        </a>
        <a href="${project.modrinth}" target="_blank" class="modrinth-link">
          <img src="images/modrinth-icon.png" alt="Modrinth" class="project-icon">
        </a>
        ${project.video ? `<a href="${project.video}" target="_blank" class="youtube-link">
          <img src="images/youtube-icon.png" alt="YouTube" class="project-icon">
        </a>` : ""}
      </div>
    `;

    projectList.appendChild(projectCard);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  displayProjects();
});