window.addEventListener('DOMContentLoaded', () => {
    show();
})

const data_url = 'http://127.0.0.1:5500/javascript/13.asyncronuos/employee.json';

const getJson = async () => {
    let response = await fetch(data_url);
    return response.json();
}

const show = async () => {
    let jsonData = await getJson();
    console.log('jsonData =>', jsonData, typeof jsonData);
    
    let output = `
        <h2>${jsonData.title}</h2>
        <table border=1>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Dep</th>
            </tr>
            ${
                jsonData.list.map((employee, idx) => 
                    `<tr>
                        <td>${idx+1}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.department}</td>
                    </tr>`
                ).join("")
            }
        </table>
    `;

    document.querySelector('#content').innerHTML = output;
}