//password 
function validate(){
    var staffpassword = document.getElementById('password').value;
    var checkpassword =/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,}$/;
    // checkpassword.test
    if(checkpassword.test(staffpassword)){
        // alert("valid");
        document.getElementById("valid").style.display="block";
        document.getElementById("invalid").style.display="none";
        }
        else {
        // alert("invalid");
        document.getElementById("invalid").style.display="block";
        document.getElementById("valid").style.display="none";
}
}

// get users
// get btn and create funtion
document.getElementById('myBtn').addEventListener('click',getData);

function getData() {
    
    // console.log('test');
    
    
        // get API
        fetch('https://randomuser.me/api/?results=5')
        .then(res =>res.json())
        .then(data =>{
            let author = data.results;
           
            // GET DATA value
            let output="<h2><center>Get userS</center></h2>";
            
            //get data loop through
            author.forEach(function(lists){

                output +=  `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Numver: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">PostCode: ${lists.location.postcode}</li>  
                        </ul>
                    </div>
                </div>
                `;
            });
            //show all data on screen
            document.getElementById('output').innerHTML = output;
        });
       
}


//  menu total bill
document.getElementById('calculator').addEventListener('click',calculateTotalBill);
var total_items =12;
function calculateTotalBill(){
    var total=0;
    for (let i = 1; i <= total_items; i++) {

        itemID = document.getElementById("qty" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    
    }
    document.getElementById('ItemsTotal').innerHTML = "	€" + total;
}
// document.querySelectorAll('[id^="qty"]').forEach(item =>{
//     item.addEventListener('keyup',calculateTotalBill);
// });





