var container = document.createElement("div");
container.className = "container-fluid";
var row = document.createElement("div");
row.className = "row";
container.append(row);
let search;

function get(){
let input = document.getElementById("input-search").value;
switch (input) {
    
    case 'micro':
       
    search= `https://api.openbrewerydb.org/v1/breweries?by_type=micro`;
        
        fetchData();
        break;
    case 'nano':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=nano`;
        fetchData();
        break;
    case 'regional':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=regional`;
        fetchData();
        break;
    case 'brewpub':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=brewpub`;
        fetchData();
        break;
    case 'large':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=large`;
        fetchData();
        break;
    case 'planning':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=planning`;
        fetchData();
        break;
    case 'bar':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=bar`;
        fetchData();
        break;
    case 'contract':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=contract`;
        fetchData();
        break;
    case 'proprietor':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=proprietor`;
        fetchData();
        break;
    case 'closed':
        search = `https://api.openbrewerydb.org/v1/breweries?by_type=closed`;
        fetchData();
        break;
        default:    
       
         console.log(`Sorry, we are out of .`);
}

}


async function fetchData() {
    

    var data = await fetch(search);
    var data1 = await data.json();
    row.innerHTML="";
    for (var i = 0; i < data1.length; i++) {
        row.innerHTML += `<div class=" content col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-header">${data1[i].name}</h5>
            <div class="text-box">
            <p class="card-text"> Type: ${data1[i].brewery_type}</p>
            <p class="card-text">Address: ${data1[i].address_1},${data1[i].city},${data1[i].state},${data1[i].country}
            </p>
            <p class="card-text">Phone no: ${data1[i].phone}</p>
            </div>
            <div class="text-button">
            <a href="${data1[i].website_url}" class="btn btn-primary">Click to Website</a>
            </div>
          </div>
        </div>
        </div>`;

        document.body.append(container);


    }

}




window.onload = function() {
 
    async function fetchData() {

       
    
        var data = await fetch(`https://api.openbrewerydb.org/v1/breweries`);
        var data1 = await data.json();
        console.log(data1);
        for (var i = 0; i < data1.length; i++) {
    
            row.innerHTML += `<div class=" content col-sm-6 col-md-4 col-lg-4 col-xl-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-header">${data1[i].name}</h5>
        <div class="text-box">
        <p class="card-text"> Type: ${data1[i].brewery_type}</p>
        <p class="card-text">Address: ${data1[i].address_1},${data1[i].city},${data1[i].state},${data1[i].country}
        </p>
        <p class="card-text">Phone no: ${data1[i].phone}</p>
        </div>
        <div class="text-button">
        <a href="${data1[i].website_url}" class="btn btn-primary">Click to Website</a>
        </div>
      </div>
    </div>
    </div>`;
    
            document.body.append(container);
    
    
        }
    
    }
    fetchData();

};



