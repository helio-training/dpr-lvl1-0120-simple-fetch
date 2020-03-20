console.log('Hello from the Script')

const name = document.getElementById('name');
const button = document.getElementById('submit');
const URL = 'http://localhost:4000/users'

const fetchData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => console.log('Fetch', data))
}
const createEntry = () => {
    console.log('CLICKED')
    const data = { 'name': name.value };
    name.value = ''
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => fetchData())
}

fetchData();
button.addEventListener('click', createEntry)

