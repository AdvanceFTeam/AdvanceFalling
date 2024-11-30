window.onscroll = function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

document.querySelector('.btn-primary').addEventListener('click', function (e) {
    window.location.href = "https://discord.com/invite/d2446gBjfq"; // button "Get Script"  link goes to this discord link :p
});


document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', function () {
        const faqItem = this.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove('open');
                item.querySelector('.faq-answer').style.maxHeight = null;
                item.querySelector('.faq-answer').style.paddingTop = '0';
                item.querySelector('.faq-answer').style.paddingBottom = '0';
            }
        });

        faqItem.classList.toggle('open');

        if (faqItem.classList.contains('open')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            faqAnswer.style.paddingTop = '10px';
            faqAnswer.style.paddingBottom = '10px';
        } else {
            faqAnswer.style.maxHeight = null;
            faqAnswer.style.paddingTop = '0';
            faqAnswer.style.paddingBottom = '0';
            faqAnswer.style.contains = "0";
        }
    });
});



// Developer info
const developers = {
    dev1: {
        name: "YellowGreg",
        role: "Owner",
        description: "Owner of AdvanceFalling Team"
    },
    dev2: {
        name: "Wspboy12",
        role: "Web Designer & Developer",
        description: "2nd Oldest Developer for AdvanceFalling Team"
    },
    dev3: {
        name: "MMSVon",
        role: "Head Developer",
        description: "3rd Oldest Developer for AdvanceFalling Team"
    },
    dev4: {
        name: "ShadowClark",
        role: "Web Developer",
        description: "Helps creates the websites."
    },
    dev5: {
        name: "Frostbite",
        role: "Head Developer",
        description: "I love Elaina"
    },
    dev6: {
        name: "Objectfigure",
        role: "Developer",
        description: "Checks if theres any security flaws in our website (rare case)."
    },
    dev7: {
        name: "Buffer",
        role: "Developer",
        description: "Random Developer we hired."
    },
    dev8: {
        name: "Fernishb",
        role: "Developer",
        description: "Random Developer we hired but he's chill."
    },
};

function Dev_Details(devId) {
    const dev = developers[devId];
    const modalContent = `
        <h2>${dev.name}</h2>
        <p><strong>Role:</strong> ${dev.role}</p>
        <p>${dev.description}</p>
    `;
    document.getElementById("developer-details").innerHTML = modalContent;
    document.getElementById("developerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("developerModal").style.display = "none";
}
