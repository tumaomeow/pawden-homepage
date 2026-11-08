// 项目入口修改区：修改名称、简介、网址、域名和 Logo 路径即可。
const projects = [
  {
    number: "01",
    name: "AI Chat 网页对话",
    description: "设置你的apikey即可对话，数据保留在本地",
    url: "https://dog.pawden.cn/",
    domain: "dog.pawden.cn",
    logo: "./images/project-01.svg",
  },
  {
    number: "02",
    name: "一个测试网页",
    description: "托管在GitHub",
    url: "https://test.pawden.cn/",
    domain: "test.pawden.cn",
    logo: "./images/project-02.svg",
  },
  {
    number: "03",
    name: "另一个一个测试网页",
    description: "部署在私有服务器",
    url: "https://cat.pawden.cn/",
    domain: "cat.pawden.cn",
    logo: "./images/project-03.svg",
  },
  {
    number: "04",
    name: "项目入口 04",
    description: "在此填写项目简介或关键词",
    url: "https://example.com/04",
    domain: "example.com",
    logo: "./images/project-04.svg",
  },
  {
    number: "05",
    name: "项目入口 05",
    description: "在此填写项目简介或关键词",
    url: "https://example.com/05",
    domain: "example.com",
    logo: "./images/project-05.svg",
  },
  {
    number: "06",
    name: "项目入口 06",
    description: "在此填写项目简介或关键词",
    url: "https://example.com/06",
    domain: "example.com",
    logo: "./images/project-06.svg",
  },
  {
    number: "07",
    name: "项目入口 07",
    description: "在此填写项目简介或关键词",
    url: "https://example.com/07",
    domain: "example.com",
    logo: "./images/project-07.svg",
  },
  {
    number: "08",
    name: "项目入口 08",
    description: "在此填写项目简介或关键词",
    url: "https://example.com/08",
    domain: "example.com",
    logo: "./images/project-08.svg",
  },
];

const projectList = document.getElementById("project-list");
const projectTemplate = document.getElementById("project-card-template");

projects.forEach((project) => {
  const card = projectTemplate.content.firstElementChild.cloneNode(true);
  const image = card.querySelector(".project-logo img");

  card.href = project.url;
  card.setAttribute("aria-label", `打开${project.name}`);
  image.src = project.logo;
  image.alt = `${project.name} Logo`;
  card.querySelector(".project-number").textContent = project.number;
  card.querySelector(".project-title").textContent = project.name;
  card.querySelector(".project-description").textContent = project.description;
  card.querySelector(".project-domain").textContent = project.domain;

  projectList.append(card);
});
