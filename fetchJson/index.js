

document.getElementById('getAPI').addEventListener('click', getAPI);
function getAPI()
{
    fetch(`data.json`)
    .then((res) => res.json())
    .then((data) =>{
        let output =`<h2>Users</h2>`;
        data.matches.forEach((post) =>{
            output +=`
            <div>
            <h3>${post}</h3>
            <p>${post}</p>
            </div>`
        })
        document.getElementById('output').innerHTML = output;
    })
    
}

