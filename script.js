const body = document.querySelector("body");

const head = document.createElement("div");
body.appendChild(head);
const header_1 = document.createElement("nav");
header_1.className = "header-1";

const image1 = document.createElement("img");
image1.className = "user-image";
image1.setAttribute("src", "./assets/image/avatar.jpeg");
header_1.appendChild(image1);

const header_2 = document.createElement("nav");
header_2.className = "header-2";

head.append(header_1, header_2);

const Name_ = document.createElement("button");
Name_.className = "button-primary";
Name_.innerText = "BRIAN DUDEY";
header_2.appendChild(Name_);

const p_1 = document.createElement("p");
p_1.innerText =
  " N. Damen Avenue, Chicago, 99999 | 999-999-9999 | hello@kickresume.com | www.ickeresume.com";
p_1.className = "p_1";
body.appendChild(p_1);

const hr = document.createElement("hr");
body.appendChild(hr);
const br = document.createElement("br");
body.appendChild(br);
const br_clone = br.cloneNode(true);

//  ----------------------- vertical --------------------------- //

const vertical_ = document.createElement("div");
vertical_.className = "vertical";
body.appendChild(vertical_);

const left = document.createElement("div");
left.className = "left";
body.appendChild(left);

//  ----------------------- Title Profile --------------------------- //

const logo_u = document.createElement("div");
logo_u.className = "logo_outer";
left.appendChild(logo_u);

const logo_ = document.createElement("div");
logo_.className = "logo";
logo_u.appendChild(logo_);

const icon_ = document.createElement("i");
icon_.className = "fas fa-user-tie fa-2x";
logo_.appendChild(icon_);

const h1_1 = document.createElement("h1");
h1_1.innerHTML = "Profile";
logo_.appendChild(h1_1);

const container_ = document.createElement("div");
container_.className = "container";
left.appendChild(container_);

const p_container_1 = document.createElement("p");
p_container_1.innerText =
  "Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer.I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.";
p_container_1.className = "content";
container_.appendChild(p_container_1);

container_.appendChild(br_clone);

//  ----------------------- Title Skill --------------------------- //

const logo_outer_2 = document.createElement("div");
logo_outer_2.className = "logo_outer";
left.appendChild(logo_outer_2);

const logo_o_2 = document.createElement("div");
logo_o_2.className = "logo";
logo_outer_2.appendChild(logo_o_2);

const icon_1 = document.createElement("i");
icon_1.className = "fas fa-flask";
logo_o_2.appendChild(icon_1);

const h1_2 = document.createElement("h1");
h1_2.innerText = "Skills";
logo_o_2.appendChild(h1_2);

//  ----------------------- content - 2 > "skills" &  table --------------------------- //

var array1 = [
  {
    e_: "JavaScript",
    value: "78"
  },
  {
    e_: "CSS",
    value: "80"
  },
  {
    e_: "HTML",
    value: "60"
  },
  {
    e_: "React",
    value: "92"
  },
  {
    e_: "Redux",
    value: "74"
  },
  {
    e_: "Mango DB",
    value: "80"
  },
  {
    e_: "Deployment",
    value: "86"
  }
];

var array2 = [
  {
    e_: "Project Management",
    value: "81"
  },
  {
    e_: "Recuirtment",
    value: "70"
  },
  {
    e_: "Business Development",
    value: "85"
  },
  {
    e_: "Editing",
    value: "76"
  },
  {
    e_: "Project Management",
    value: "99"
  }
];

for (let i = 1; i <= 2; i++) {
  //  -------------- title ---------------//

  const strong = document.createElement("strong");
  strong.className = "strong-tittle";

  let arr = array1;

  i == 1
    ? (strong.innerHTML = "Technical Skills")
    : ((strong.innerHTML = "Additional Skills"), (arr = array2));
  left.appendChild(strong);

  container_.appendChild(br_clone);

  //  -------------- table ---------------//

  var table1 = document.createElement("table");
  table1.className = "table-" + i;
  left.appendChild(table1);

  arr.forEach(item => {
    const tr = document.createElement("tr");

    const td = document.createElement("td");
    td.innerHTML = `${item.e_}`;

    const td2 = document.createElement("td");

    const input = document.createElement("input");
    Object.assign(input, { type: "range", value: `${item.value}` });
    input.disabled = "true";

    td2.appendChild(input);

    tr.append(td, td2);
    table1.appendChild(tr);
  });
}

//  ----------------------- content - 3 > "Work Experience"  --------------------------- //

const container_3 = document.createElement("div");
container_3.className = "container";
left.append(container_3);

const c3_logo_u = document.createElement("div");
c3_logo_u.className = "logo_outer";
const c3_logo_r = document.createElement("div");
c3_logo_r.className = "logo";

c3_logo_u.append(c3_logo_r);

c3_logo_r.innerHTML =
  "<i class='fas fa-briefcase' ></i>" +
  "<h1 style='width:max-content' >Work Experience</h1>";

container_3.append(c3_logo_u);
left.append(container_3);

const c3_p = document.createElement("p");
container_3.appendChild(c3_p);

const c3_title =
  "<strong>Event Manager</strong>" +
  "&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;" +
  "03/2014 - 02/2017" +
  "<br>" +
  "C3 Presents, whasington DC";

c3_p.innerHTML = c3_title;

//  -------------------- //

container_3.appendChild(br_clone);

const c3_div = document.createElement("div");
c3_div.className = "list";
container_3.append(c3_div);

c3_para = [
  {
    para:
      "Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and onsite facilitation."
  },
  {
    para:
      "Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women"
  },
  {
    para:
      "Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations."
  }
];

c3_para.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `${item.para}`;
  c3_div.appendChild(li);
});

//  ----------------------- content - 4 > "Work Experience"  --------------------------- //

const right = document.createElement("div");
right.className = "right";

const container_4 = document.createElement("div");
container_4.className = "logo_outer";
const c4_logo_r = document.createElement("div");
c4_logo_r.className = "logo-right";

container_4.append(c4_logo_r);

c4_logo_r.innerHTML =
  "<i class='fas fa-briefcase' ></i>" +
  "<h1 style='width:max-content' >Work Experience</h1>";

right.append(container_4);
head.append(right);

//  ------------------------- //

const c4_para = document.createElement("div");
c4_para.className = "para-1";
right.appendChild(c4_para);

const c4_p = document.createElement("p");

const c4_title =
  "<strong>Cummunity Relations</strong>" +
  "&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;" +
  "06/2011 - 01/2024" +
  "<br>" +
  "<strong>Manager</strong>" +
  "<p>Gay & Lesbian Elder Housing, Los Angeles</p>";

c4_p.innerHTML = c4_title;

c4_para.append(br_clone, c4_p);

const c4_list = document.createElement("div");
c4_list.className = "para-2";
c4_para.appendChild(c4_list);

var c4_para_v = [
  {
    para: "Arranging presentations and pitch deck"
  },
  {
    para: "Designing a PR plan and establishing important focus points."
  },
  {
    para:
      "Designing, creating and managing content across multiple communication platforms."
  },
  {
    para: "Building relationships with key media players"
  }
];

c4_para_v.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `${item.para}`;
  c4_list.appendChild(li);
});
right.appendChild(br_clone);

//  ----------------------- content - 5 > "Education"  --------------------------- //

const container_5 = document.createElement("div");
container_5.className = "logo_outer";
right.appendChild(container_5);

const c5_logo = document.createElement("div");
c5_logo.className = "logo-right";
container_5.appendChild(c5_logo);

const c5_title = "<i class='fas fa-briefcase' ></i>" + "<h1>Education</h1>";

c5_logo.innerHTML = c5_title;

const c5_para_1 = document.createElement("div");
c5_para_1.className = "para-1";
right.appendChild(c5_para_1);

const c5_p_ =
  "<strong>Engineering Immersion</strong>" +
  " &emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;" +
  "11/2018 - 06/2018" +
  "<br>" +
  "<strong>Program</strong>" +
  "<p>Thinkful, Chicago, IL</p>" +
  "<br>" +
  " <p>Project-focused intensive program with emphasis  on Mongo, Express, React, and JavaScript (MERN)technical stack</p>";

const c5_p = document.createElement("p");
c5_p.innerHTML = c5_p_;
c5_para_1.append(c5_p);

const c5_list = document.createElement("div");

//  ------------------------//

c5_para_1.appendChild(br_clone);

const c5_div_list = document.createElement("div");
c5_div_list.className = "list2";
c5_para_1.append(c5_div_list);

c5_para = [
  {
    para:
      "Developed a fulkstack web application, RenewU, using React that allows users to explore various aspects of meditation. Users progress is stored on a backend created using Node and MongobB."
  },
  {
    para:
      "Developed a language learning app, 'Foodie Phonetics' using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data."
  },
  {
    para:
      "Developed a concierge app, 'Pley’, for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes realtime chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well developed RESTful API, Geospatial searching, and user authentication with JWT."
  }
];

c5_para.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `${item.para}`;
  c5_div_list.appendChild(li);
});

c5_div_list.appendChild(br_clone);

const c5_p_last =
  "<strong>BA, English  </strong>" +
  " &emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;" +
  " 09/2001 - 09/2005" +
  "<br>" +
  "<p>University of California, Los Angles  </p>";

const c5_p_last_ = document.createElement("p");
c5_p_last_.innerHTML = c5_p_last;

c5_div_list.appendChild(c5_p_last_);

const bottom = document.createElement("div");
bottom.style.height = "50px";
bottom.style.width = "100%";

right.appendChild(bottom);
