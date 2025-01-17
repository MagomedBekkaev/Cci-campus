const product = {
    "name": "Chaussure",
    "size": "45"
}

fetch("http://localhost:4000/demo", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
})

.then(res => res.json())
.then(data => console.log(data));