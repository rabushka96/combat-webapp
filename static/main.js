window.onload = () => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const usernameEl = document.getElementById("username");
    if (tg.initDataUnsafe.user) {
        usernameEl.innerText = `Привет, ${tg.initDataUnsafe.user.first_name}`;
    }

    const fightBtn = document.getElementById("fightBtn");
    const resultDiv = document.getElementById("result");

    fightBtn.onclick = async () => {
        const res = await fetch("/fight", {
            method: "POST"
        });
        const data = await res.json();
        resultDiv.innerHTML = `
            <p>Вы нанесли: <b>${data.player_damage}</b> урона</p>
            <p>Бот нанес: <b>${data.bot_damage}</b> урона</p>
            <h3>Победил: ${data.winner === "player" ? "Вы!" : "Бот"}</h3>
        `;
    };
};
