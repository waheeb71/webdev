document.addEventListener("DOMContentLoaded", function() {
    const pdfList = document.getElementById("pdf-list");

    // Fetch the list of PDF files from the API
    fetch("https://fastapi-wt2k.onrender.com/pdfs/")
        .then(response => response.json())
        .then(data => {
            const pdfFiles = data.pdf_files;
            pdfFiles.forEach(file => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = `https://fastapi-wt2k.onrender.com/pdfs/${file}`;
                link.textContent = file;
                listItem.appendChild(link);
                pdfList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching PDF files:", error);
        });
});
