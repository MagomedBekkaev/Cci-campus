const container = document.querySelector(".container")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(responce){
//     return responce.json()
// })

// .then(function(data){
//     const user = data[0]
 

//     const html = `
//     <div>
//         <p>${user.name}</p>
//         <p>${user.username}</p>
//         <p>${user.email}</p>
//     </div>
// `

//     container.insertAdjacentHTML("beforeend", html)
//     console.log(data)
// })

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(responce){
    return responce.json()
})

.then(function(data){
    const post = data[0]

    const html = `
    <div>
        <p>${post.title}</p>
        <p>${post.body}</p>
    </div>
`
    container.insertAdjacentHTML("beforeend", html)
    console.log(data)
})