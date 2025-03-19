document.getElementById("productRequestForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const productType = document.getElementById("productType").value;

    const response = await fetch("http://localhost:5000/api/product-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, productType })
    });

    const result = await response.json();
    alert(result.message);
});
