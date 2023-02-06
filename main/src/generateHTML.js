function addCard(employeeList) {
    let x = [];
    for (let i = 0; i < employeeList.length; i++) {
        switch(employeeList[i].getRole()) {
            case 'Engineer':
                //create engineer card
                x.push(`<div class="col mb-4">
                            <div class="card h-100">
                                <div class="card-header">Engineer</div>
                                <p class ='text-center' id='name'>${employeeList[i].name}</p>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${employeeList[i].id}</li>
                                        <li class="list-group-item">Email: ${employeeList[i].email}</li>
                                        <li class="list-group-item">GitHub: ${employeeList[i].github}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`);
                break;
            case 'Intern':
                //create intern card
                x.push(`<div class="col mb-4">
                            <div class="card h-100">
                                <div class="card-header">Intern</div>
                                <p class ='text-center' id='name'>${employeeList[i].name}</p>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${employeeList[i].id}</li>
                                        <li class="list-group-item">Email: ${employeeList[i].email}</li>
                                        <li class="list-group-item">School: ${employeeList[i].school}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`);
                break;
            case 'Manager':
                //create manager card
                x.push(`<div class="col mb-4">
                            <div class="card h-100">
                                <div class="card-header">Manager</div>
                                <p class ='text-center' id='name'>${employeeList[i].name}</p>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">ID: ${employeeList[i].id}</li>
                                        <li class="list-group-item">Email: ${employeeList[i].email}</li>
                                        <li class="list-group-item">OfficeNumber: ${employeeList[i].officeNumber}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`);
                break;
        }
    }
    return x.join('');
}


function generateHTML(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>The Team</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col text-center"><h1>The Team</h1></div>
            </div>
        </div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 justify-content-center">
                ${addCard(team)}
            </div>
        </div>
    </body>
    </html>`;
}


module.exports = generateHTML;