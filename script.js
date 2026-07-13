document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const question = document.getElementById("question").value;

  fetch("https://script.google.com/macros/s/AKfycbw49B_UEzZsAF4BNKQ2lHLqI4eGXt9WVQ6NOKAgRoE-B4nrew7LisJIhjlrhNKEXy39/exec", {
    method: "POST",
    body: JSON.stringify({
      question: question
    })
  })
  .then(() => {
    document.getElementById("message").innerHTML =
      "✅ Merci ! Votre question a été envoyée.";
    document.getElementById("form").reset();
  })
  .catch(() => {
    document.getElementById("message").innerHTML =
      "❌ Erreur lors de l'envoi.";
  });
});