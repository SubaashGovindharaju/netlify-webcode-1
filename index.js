////Html element

var container = document.createElement("div");
container.className = "container-fluid";
var row = document.createElement("div");
row.className = "row";
container.append(row);

row.innerHTML=
    `<div class="col-xl-12">
                <div class="firstBox">

                    <!-- header is created -->
                    <h1 class="firstTitle">Brewery</h1>

                    <!-- To get content is created -->
                    <div class="get">To get </div>
                    <div class="get">
                        <span> into amazing experiences</span>
                    </div>
                    <!-- Slogan is created -->
                    <h5 class="slogan">In the heart of our brewery lies a dedication to excellence that is as timeless
                        as the craft itself. We meticulously hand-select the finest ingredients, pouring our passion and
                        expertise into every step of the brewing process. From the crackle of malt to the dance of
                        bubbles, our beers are an embodiment of the art and science of brewing. Join us in the pursuit
                        of liquid perfection, as we raise our glasses and toast to the boundless possibilities that flow
                        from the taps of our brewery</h5>
                </div>

                <!-- Serch bar is creater -->
                <div class="search-box">
                    <button class="btn-search"><i class="fa fa-search" onclick="get()"></i> </button>
                    <input type="text" id="input-search" class="input-search" placeholder="Type eg:micro,nano,large...">


                </div>

            </div>`;


            document.body.append(container);









/// JS function





var container = document.createElement("div");
container.className = "container-fluid";
var row = document.createElement("div");
row.className = "row";
container.append(row);


let search;


// Function for the search bar
function get() {
    let input = document.getElementById("input-search").value;
    switch (input) {

        case 'micro':

            search = `https://api.openbrewerydb.org/v1/breweries?by_type=micro`;

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
    //function for fetching data from api
    var data = await fetch(search);
    var data1 = await data.json();
    row.innerHTML = "";
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



// function forthe data when the screen is opened

window.onload = function () {

    //function for fetching data from api
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



