// fetch()
// the classic
// syntax -->  fetch(url) .then().catch()
const res = fetch('https://catfact.ninja/fact')
.then((res) => {return res.json()})
.then((data) => {console.log(data)})

// let's look at async/ await

const getCatFact = async () => {
    const resp = await fetch('https://catfact.ninja/fact');
    const dat = await resp.json();
    console.log("\nASYNC/AWAIT with fetch example", dat)
}
getCatFact();

// an imperfect example of a POST request FOR YOUR REFERENCE:

// const getCatFactPOSTEXAMPLE = async () => {
//     const resp = await fetch('https://catfact.ninja/fact',{
//         method : 'POST',
//         body : {},
//         headers : {}
//     });
//     const dat = await resp.json();
//     console.log("this would be a response", dat)
// }

let getData = async () => {
    const response = await axios.get('https://catfact.ninja/fact');
    console.log("AXIOS with ansync syntax:", response.data);
    return response.data
}
getData()



rowCount = 0;

let loadData =  async () => {
    let catData = await getData();
    console.log(catData);
    rowCount ++;
    let newRow = `<tr>
    <th scope="row">${rowCount}
    </th>
    <td>${catData.fact}</td>
</tr>`;
    document.getElementById('catFactTable').insertAdjacentHTML('beforeend', newRow);
}

const clearData = () => {
    document.getElementById('catFactTable').innerHTML = '';
    rowCount = 0;
}
