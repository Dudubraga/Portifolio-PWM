document.addEventListener("DOMContentLoaded", () => {
    const secretCode = generateSecretCode();
    const attemptsList = document.getElementById("attempts-list");
    const guessInput = document.getElementById("guess-input");
    const submitGuessButton = document.getElementById("submit-guess");
    const revealCodeButton = document.getElementById("reveal-code");

    revealCodeButton.addEventListener("click", () => {
        alert(`A senha secreta é: ${secretCode}`);
    });

    submitGuessButton.addEventListener("click", () => {
        const guess = guessInput.value.trim();
        if (guess.length !== 4 || isNaN(guess)) {
            alert("Por favor, insira um número de 4 dígitos.");
            return;
        }
        const result = checkGuess(guess, secretCode);
        addAttemptToList(guess, result);
        guessInput.value = "";
    });

    function generateSecretCode() {
        let code = "";
        while (code.length < 4) {
            const digit = Math.floor(Math.random() * 10);
            if (!code.includes(digit)) {
                code += digit;
            }
        }
        return code;
    }

    function checkGuess(guess, code) {
        let bulls = 0; // Dígitos corretos na posição correta
        let cows = 0; // Dígitos corretos na posição errada
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === code[i]) {
                bulls++;
            } else if (code.includes(guess[i])) {
                cows++;
            }
        }
        return { bulls, cows };
    }

    function addAttemptToList(guess, result) {
        // Limite de tentativas -> 10 (o container fica grande demais)
        // Não está funcionando ainda
        // if (attemptsList.children.length >= 10) {
        //     attemptsList.removeChild(attemptsList.lastChild); 
        // }

        const listItem = document.createElement("li");
        listItem.textContent = `Tentativa: ${guess} | Bulls: ${result.bulls}, Cows: ${result.cows}`;
        attemptsList.insertBefore(listItem, attemptsList.firstChild);
    }
});