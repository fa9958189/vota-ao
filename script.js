// script.js

document.getElementById('voteButton').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Lança confetes
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Redireciona para o link após um curto atraso
    setTimeout(function() {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfAUZrAzgh3GV6PJWGgZvHAiU-ZK1_ZHbmbzmARlAStOQgqAg/viewform';
    }, 500); // 500ms de atraso
});
