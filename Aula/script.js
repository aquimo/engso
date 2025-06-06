document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const mensagemDiv = document.querySelector("#mensagem-enviada");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real

        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const mensagem = document.querySelector("#mensagem").value;

        mensagemDiv.innerHTML = `Obrigado, <strong>${nome}</strong>! Recebemos sua mensagem:<br>"${mensagem}"<br>Responderemos em breve no email: <em>${email}</em>`;
        
        form.reset(); // Limpa os campos do formulário
    });
});
