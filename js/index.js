// Data for members, developers, and projects
const members = [
  {
    name: "IDoTheHax",
    pfp: "https://cdn.discordapp.com/avatars/987323487343493191/a_8cd21cbf9d485e283f20dc98308990e1.gif",
    social: {
      youtube: "https://www.youtube.com/@IDoTheHax"
    },
    description: "The one doing the hax."
  },
  {
    name: "PrestonFighter",
    pfp: "https://cdn.discordapp.com/avatars/1060773947030913054/008cbab7479a2caeff58f4aa4459b2a3.png",
    social: {
      youtube: "https://youtube.com/@prestonfighter",
      twitch: "https://twitch.tv/prestonfight",
    }
  },
  {
    name: "Lightning_exe",
    pfp: "https://cdn.discordapp.com/avatars/853736449346109471/be04714e0aed0c86dd0db7ef0a360a35.png",
    social: {
      youtube: "https://www.youtube.com/@Lightning_exe",
    }
  },
  {
    name: "Kurtinal",
    pfp: "https://cdn.discordapp.com/avatars/1282353944017895445/a962dea994e2d431d1926f22802c8c87.png",
    social: {
      youtube: "https://www.youtube.com/@Kurtinalmc",
    }
  },
  {
    name: "glplaays5",
    pfp: "https://cdn.discordapp.com/avatars/781324988128034876/1c7fb500cef6c8b6c12c6502e1348b22.png",
    social: {
      youtube: "https://www.youtube.com/@glplaays5",
      twitter: "https://x.com/glplaays5"
    },
    description: "He/Him Small SMP cc https://t.co/n5N98nTj3D first vid out soon!"
  },
  {
    name: "YoZachStar",
    pfp: "https://cdn.discordapp.com/avatars/787521720373870622/3d2f0860f48d15d5454a0baf75253a82.png",
    social: {
      youtube: "https://www.youtube.com/@YoZachStarr"
    },
    description: "In God We Trust"
  },
  {
    name: "Qubimium",
    pfp: "https://cdn.discordapp.com/avatars/675759745465843741/7148dba952ce8627979c85b5e46f32f8.png",
    social: {
      youtube: "https://www.youtube.com/@ItsQubi"
    },
    description: "The NEW qubimium channel after the old one is going to get deleted"
  },
  {
    name: "VIPER GG",
    pfp: "https://cdn.discordapp.com/avatars/876747604078239795/9ca2f02ca1498648c290f63a109b2f01.png",
    social: {
      youtube: "https://youtube.com/@vipercmidk?si=fzhDdRW4nHwAQSq2"
    },
    description: "VIPER: on a big break"
  },
  {
    name: "Savageelclappel",
    pfp: "https://cdn.discordapp.com/avatars/590589484354240535/c291546298ba1d5b6e6d6543889cce2c.png",
    social: {
      twitch: "https://www.twitch.tv/savageelclappel"
    },
    description: "Kaotikusak vagyunk. Ha bírod gyere be!"
  },
  {
    name: "Sparklinbro",
    pfp: "https://cdn.discordapp.com/attachments/1305106068036128888/1308396433388601394/Q6XhlsNzlF37-uju12SPjvn3pKcTUheJ10JpephAK7ZB22UeUESk9u7T7XnPgc7KtAzcgh9eUgs900-c-k-c0x00ffffff-no-rj.webp?ex=673dcaa2&is=673c7922&hm=f77aea2842ffffa431b0675abefbad65798f371e1e90866d409d112f9f99c1f1&",
    social: {
      youtube: "https://www.youtube.com/@Sparklinbro"
    },
    description: "i do minekraft video!"
  },
];

const developers = [
  { name: "IDoTheHax", pfp: "https://cdn.discordapp.com/avatars/987323487343493191/a_8cd21cbf9d485e283f20dc98308990e1.gif", role: "Lead Developer" },
  { name: "Mesren", pfp: "https://cdn.discordapp.com/avatars/821825265339596830/70147ec0fbe4812af8617006a40aa817.png", role: "Main Developer" },
  { name: "DroopThusSnoot", pfp: "https://cdn.discordapp.com/avatars/1213119704110211084/a39351184ecad555a2b9e36b211726e5.png", role: "Main Developer" }
];

const projects = [
  {
    name: "RaRays",
    description: "Orbital Strike Cannons, Inspired by TheCymaera's SkyTorch",
    repo: "https://github.com/IDoTheHax/RaRays",
    modrinth: "https://modrinth.com/mod/RaRays",
    video: "https://www.youtube.com/watch?v=4iZvyrFI8CA"
  }
];

// Helper function to generate social media links for members
const generateSocialLinks = (social) => {
  const platforms = { twitter: "twitter", twitch: "twitch", youtube: "youtube" };
  // Filter out empty social media links and generate only the available ones
  const availablePlatforms = Object.keys(platforms).filter(platform => social[platform]);

  return availablePlatforms.map(platform => {
    return `<a href="${social[platform]}" target="_blank"><img src="images/${platform}-icon.png" alt="${platform.charAt(0).toUpperCase() + platform.slice(1)}" class="social-icon"></a>`;
  }).join('');
};

// Display members dynamically
const memberList = document.getElementById("member-list");
members.forEach(member => {
  const memberCard = document.createElement("div");
  memberCard.className = "member-card";
  memberCard.innerHTML = `
    <img src="${member.pfp}" alt="${member.name}'s profile picture">
    <h3>${member.name}</h3>
    <div class="social-links">${generateSocialLinks(member.social)}</div>
  `;
  memberList.appendChild(memberCard);
});

// Display developers dynamically
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

// Display projects dynamically
const displayProjects = () => {
  const projectList = document.getElementById("project-list");
  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.repo}" target="_blank" class="github-link"><img src="images/github-icon.png" alt="GitHub" class="project-icon"></a>
        <a href="${project.modrinth}" target="_blank" class="modrinth-link"><img src="images/modrinth-icon.png" alt="Modrinth" class="project-icon"></a>
        ${project.video ? `<a href="${project.video}" target="_blank" class="youtube-link"><img src="images/youtube-icon.png" alt="YouTube" class="project-icon"></a>` : ""}
      </div>
    `;
    projectList.appendChild(projectCard);
  });
};

document.addEventListener("DOMContentLoaded", displayProjects);
