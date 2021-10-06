const links = [
{
	label: "WhatsApp",
	link: "https://wa.me/6287826963824",
},
{
	label: "Instagram",
	link: "https://instagram.com/prsnandaa",
},
{
	label: "Linkedin",
	link: "https://www.linkedin.com/mwlite/in/ananda-prasetya-262911215",
},
{
	label: "GitHub",
	link: "https://github.com/ananda948/",
},
];

const btnContainer = document.getElementById("btn-container");
for (let i = 0; i < links.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn-link");
    btn.innerHTML = links[i].label;
    btn.addEventListener("click", () => clickLink(links[i].link));
    btnContainer.append(btn);
}

function clickLink(url) {
    window.open(url, "_blank");
}

