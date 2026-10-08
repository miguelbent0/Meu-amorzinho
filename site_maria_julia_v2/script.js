const declarations = {

    snoopy: {
        img: "imagens/snoppy.png",
        name: "Snoopy",
        emoji: "🐶",
        title: "Meu cantinho favorito",
        text: "Amor, se eu pudesse escolher um lugar para ficar todos os dias, seria pertinho de você. Você consegue deixar até os dias comuns com cara de coisa especial."
    },

    kitty: {
        img: "imagens/helokity.png",
        name: "Hello Kitty",
        emoji: "🎀",
        title: "Minha bbzinha linda",
        text: "Você é uma das coisas mais bonitas que aconteceram na minha vida. Eu amo seu jeitinho, seu sorriso e aquelas pequenas coisas suas que talvez você nem perceba."
    },

    bear: {
        img: "imagens/ursin.png",
        name: "Ursinho",
        emoji: "🧸",
        title: "Um abraço em forma de declaração",
        text: "Se eu pudesse transformar meu carinho em alguma coisa, ele seria um ursinho enorme só para te abraçar nos dias bons, nos dias difíceis e em todos os dias."
    },

    capy: {
        img: "imagens/capivara.png",
        name: "Capivara",
        emoji: "🦫",
        title: "Você me traz paz",
        text: "Com você eu sinto aquela paz gostosa de estar exatamente onde deveria estar. Obrigado por ser minha companhia, meu conforto e uma das minhas partes favoritas do dia."
    },

    teddy: {
        img: "imagens/gatin.png",
        name: "Ursinho fofo",
        emoji: "🐻",
        title: "Eu escolheria você de novo",
        text: "Entre tantas pessoas, histórias e caminhos, eu escolheria encontrar você de novo. E se pudesse voltar no tempo, escolheria você ainda mais cedo."
    },

    heart: {
        img: "imagens/coracao.png",
        name: "Meu coração",
        emoji: "💗",
        title: "Uma coisa que eu quero que você saiba",
        text: "Eu te amo, Meu amor. Não só pelos momentos bonitos, mas por tudo que construímos, pelas risadas, pelas conversas e por cada lembrança que ainda vamos criar."
    }
};


function goToLove() {

    document
        .getElementById("love")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function openLetter(character) {

    const data = declarations[character];

    document.getElementById("modalCharacter").innerHTML =
        '<img src="' + data.img + '" alt="">';

    document.getElementById("modalName").textContent =
        data.name;

    document.getElementById("modalTitle").textContent =
        data.title;

    document.getElementById("modalText").textContent =
        data.text;

    document
        .getElementById("letterModal")
        .classList.add("active");

    createHeartBurst();

}


function closeLetter() {

    document
        .getElementById("letterModal")
        .classList.remove("active");

}


function openSurprise() {

    document
        .getElementById("surpriseModal")
        .classList.add("active");

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            createHeartBurst();

        }, i * 100);

    }

}


function closeSurprise() {

    document
        .getElementById("surpriseModal")
        .classList.remove("active");

}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLetter();
        closeSurprise();

    }

});


function createHeartBurst() {

    const heart = document.createElement("span");

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "💗"
    ];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.className = "burst-heart";

    heart.style.left =
        (35 + Math.random() * 30) + "%";

    heart.style.top =
        (45 + Math.random() * 15) + "%";

    heart.style.fontSize =
        (16 + Math.random() * 25) + "px";

    heart.style.color =
        Math.random() > .5 ? "#e878a1" : "#f3a4be";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.classList.add("fly");

    }, 30);

    setTimeout(() => {

        heart.remove();

    }, 1500);

}


/* pequenos corações aparecendo no fundo */

setInterval(function() {

    const heart = document.createElement("span");

    heart.textContent =
        Math.random() > .4 ? "♡" : "✦";

    heart.className =
        "background-heart";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (10 + Math.random() * 16) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}, 1000);
