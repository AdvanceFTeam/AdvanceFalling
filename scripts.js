document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelector('.btn-primary').addEventListener('click', function (e) {
    e.preventDefault();
    window.open("https://discord.com/invite/d2446gBjfq", '_blank');
});
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', function () {
        const faqItem = this.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const isOpen = faqItem.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== faqItem && item.classList.contains('open')) {
                item.classList.remove('open');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = '0';
            }
        });

        if (isOpen) {
            faqItem.classList.remove('open');
            faqAnswer.style.maxHeight = '0';
        } else {
            faqItem.classList.add('open');
            faqAnswer.style.maxHeight = (faqAnswer.scrollHeight + 20) + 'px';
        }
    });
});

const developers = {
    dev1: {
        name: "YellowGreg",
        role: "Founder & Owner",
        description: "The Owner of AdvanceFalling",
        skills: ["Full-Stack Developer","React", "TypeScript", "JavaScript", "Python", "SQL", "Luau/Lua"],
        joinDate: "2022"
    },
    dev2: {
        name: "Wspboy12",
        role: "Web Designer & Developer",
        description: "1st Oldest Developer of AdvanceFalling.",
        skills: ["UI/UX Designer", "React", "NextJS", "Figma"],
        joinDate: "2022"
    },
    dev3: {
        name: "MMSVon",
        role: "Head Developer",
        description: "2nd Oldest Developer for AdvanceFalling.",
        skills: ["Full-Stack Developer", "React", "JavaScript", "TypeScript", "Luau/Lua", "Python"],
        joinDate: "2022"
    },
    dev4: {
        name: "ShadowClark",
        role: "Web Developer",
        description: "3rd Oldest Developer of AdvanceFalling, & Helps creates the websites.",
        skills: ["Full-Stack Developer", "React", "NextJS", "JavaScript", "TypeScript"],
        joinDate: "2023"
    },
    dev5: {
        name: "Frostbite",
        role: "Head Developer",
        description: "I love Elaina and I am the Head & 4th Oldest Developer of AdvanceFalling.",
        skills: ["Python", "C++", "Rust", "JavaScript", "SQL", "TypeScript"],
        joinDate: "2023"
    },
    dev6: {
        name: "Objectfigure",
        role: "Security Developer",
        description: "Checks if theres any security flaws in our website (rare case).",
        skills: ["Security Analysis"],
        joinDate: "2023"
    },
    dev7: {
        name: "Buffer",
        role: "Developer",
        description: "Random Developer we hired.",
        skills: ["Rust"],
        joinDate: "2024"
    },
    dev8: {
        name: "Fernishb",
        role: "Developer",
        description: "Laid-back developer who helps with scripts, websites, & draws in his free time.",
        skills: ["React", "NextJS", "TypeScript", "JavaScript", "Luau/Lua"],
        joinDate: "2024"
    },
};
function showDeveloperDetails(devId) {
    const dev = developers[devId];
    const skillsHtml = dev.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
    const discordId = getDiscordId(devId);
    
    const modalContent = `
        <div class="developer-modal-header">
            <img src="https://avatar-cyan.vercel.app/api/pfp/${discordId}/image" 
                 alt="${dev.name}" 
                 class="modal-developer-photo"
                 onclick="showProfilePicture('${discordId}', '${dev.name}')">
            <h2>${dev.name}</h2>
            <p class="modal-role">${dev.role}</p>
        </div>
        <div class="developer-modal-body">
            <p class="developer-description">${dev.description}</p>
            <div class="developer-skills">
                <h4>Skills & Expertise</h4>
                <div class="skills-container">${skillsHtml}</div>
            </div>
            <div class="developer-meta">
                <p><strong>Joined:</strong> ${dev.joinDate}</p>
            </div>
        </div>
    `;
    
    document.getElementById("developer-details").innerHTML = modalContent;
    document.getElementById("developerModal").style.display = "flex";
}

function showProfilePicture(discordId, name) {
    const pfpUrl = `https://avatar-cyan.vercel.app/api/pfp/${discordId}/image`;
    
    let pfpModal = document.getElementById('pfpModal');
    if (!pfpModal) {
        pfpModal = document.createElement('div');
        pfpModal.id = 'pfpModal';
        pfpModal.className = 'pfp-modal';
        pfpModal.innerHTML = `
            <div class="pfp-modal-content">
                <span class="pfp-close-btn" onclick="closePfpModal()">&times;</span>
                <img id="pfpImage" src="" alt="">
                <div class="pfp-modal-controls">
                    <a id="downloadBtn" class="pfp-btn" download>
                        <i class="fas fa-download"></i> Download
                    </a>
                    <a id="openBtn" class="pfp-btn" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Open in New Tab
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(pfpModal);
        
        pfpModal.addEventListener('click', function(e) {
            if (e.target === pfpModal) {
                closePfpModal();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && pfpModal.style.display === 'flex') {
                closePfpModal();
            }
        });
    }
    document.getElementById('pfpImage').src = pfpUrl;
    document.getElementById('pfpImage').alt = `${name}'s Profile Picture`;
    document.getElementById('downloadBtn').href = pfpUrl;
    document.getElementById('downloadBtn').download = `${name.toLowerCase()}_pfp.png`;
    document.getElementById('openBtn').href = pfpUrl;
    
    // Show modal
    pfpModal.style.display = 'flex';
}

function closePfpModal() {
    const pfpModal = document.getElementById('pfpModal');
    if (pfpModal) {
        pfpModal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.developer-photo').forEach((photo, index) => {
        photo.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the card click
            const devId = `dev${index + 1}`;
            const discordId = getDiscordId(devId);
            const devName = developers[devId].name;
            showProfilePicture(discordId, devName);
        });
    });
});

function getDiscordId(devId) {
    const ids = {
        'dev1': '773952016036790272',
        'dev2': '804955810820128798',
        'dev3': '804953768814313482',
        'dev4': '935758592445939752',
        'dev5': '1213792784541024296',
        'dev6': '1064254794111393802',
        'dev7': '795928925654089760',
        'dev8': '1249660180422070273'
    };
    return ids[devId];
}

function closeModal() {
    const modal = document.getElementById("developerModal");
    modal.style.display = "none";
}

document.getElementById("developerModal").addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const developerModal = document.getElementById("developerModal");
        const pfpModal = document.getElementById('pfpModal');
        
        if (developerModal && developerModal.style.display === "flex") {
            closeModal();
        }
        if (pfpModal && pfpModal.style.display === 'flex') {
            closePfpModal();
        }
    }
});

let flip = true;
let currentString = "";
let position = 0;
let invert = false;

const textLeft = "UwU Meow Club";
const textRight = "AdvanceFalling";

function animateTitle() {
    const target = flip ? textRight : textLeft;

    if (position > target.length) {
        invert = true;
    } else if (position < 0) {
        if (invert) {
            flip = !flip;
            position = 0;
        }
        invert = false;
    }

    currentString = target.substring(0, position);
    position += (invert ? -1 : 1);

    if (currentString.length === 0) {
        currentString = "a";
    }

    document.title = currentString;
}

setInterval(animateTitle, 300);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .developer-card, .faq-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

document.querySelectorAll('.feature-card, .developer-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});