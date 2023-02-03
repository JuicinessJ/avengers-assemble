function addCard(employeeList) {
    //create for loop
for (let i = 0; i < employeeList.length; i++) {
    switch(employeeList[i].getRole()) {
        case 'Engineer':
            //create engineer card
            return `<div class="col mb-4">
                        <div class="card h-100">
                            <div class="card-header">Engineer</div>
                            <p id='name'>Name</p>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID</li>
                                    <li class="list-group-item">Email</li>
                                    <li class="list-group-item">GitHub</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
            break;
        case 'Intern':
            //create intern card
            return `<div class="col mb-4">
                        <div class="card h-100">
                            <div class="card-header">Intern</div>
                            <p id='name'>Name</p>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID</li>
                                    <li class="list-group-item">Email</li>
                                    <li class="list-group-item">School</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
            break;
        case 'Manager':
            //create manager card
            return `<div class="col mb-4">
                        <div class="card h-100">
                            <div class="card-header">Manager</div>
                            <p id='name'>Name</p>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID</li>
                                    <li class="list-group-item">Email</li>
                                    <li class="list-group-item">OfficeNumber</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
            break;
    }
    }
}


function generateHTML(team) {
    // console.log(employee)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>Document</title>
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