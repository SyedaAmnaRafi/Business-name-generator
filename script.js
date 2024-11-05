document.getElementById("generateButton").addEventListener("click", function() {
    const keywords = document.getElementById("keywords").value.split(",");
    const industry = document.getElementById("industry").value;

    const nameSuggestions = generateBusinessNames(keywords, industry);
    const randomName = nameSuggestions[Math.floor(Math.random() * nameSuggestions.length)];

    const generatedNameField = document.getElementById("generatedName");
    generatedNameField.value = randomName;
    generatedNameField.style.display = "block";
    document.querySelector("label[for='generatedName']").style.display = "block";
});

function generateBusinessNames(keywords, industry) {
    const suffixes = {
        technology: [" Solutions", " Innovations", " Labs", " Ventures"],
        health: [" Wellness", " Health", " Care", " Solutions"],
        food: [" Bistro", " Kitchen", " Delights", " Eats"],
        finance: [" Capital", " Financial", " Holdings", " Partners"]
    };

    return keywords.map(keyword => keyword.trim() + suffixes[industry][Math.floor(Math.random() * suffixes[industry].length)]);
}
