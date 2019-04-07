// if (localStorage.getItem("allAccounts")){
// 	var accounts = JSON.parse(localStorage.getItem('allAccounts'));
// }else{
 	var accounts = [
 	{
 		firstName: "Ilija",
		lastName: "Zikic",
		deposit: 1000,
		card: "Visa",
		birt: "08.03.1984",
		state: "Srbija",
		city: "Bor",
		personalId: 112233,
		credit:true,
		numberId(){
			return Math.floor(Math.random()*10000);
		},
		getFullName(){
		return this.firstName + " " + this.lastName;
		}
 	},
 	{
 		firstName: "Ivana",
		lastName: "Milovanovic",
		deposit: 2000,
		card: "Visa",
		birt: "09.30.1989",
		state: "Srbija",
		city: "Bor",
		personalId: 445566,
		credit:false,
		numberId(){
			return Math.floor(Math.random()*10000);
		},
		getFullName(){
		return this.firstName + " " + this.lastName;
		}
 	},
 	{
 		firstName: "Dragan",
		lastName: "Dragic",
		deposit: 2000,
		card: "Visa",
		birt: "09.30.1989",
		state: "Srbija",
		city: "Beograd",
		personalId: 778899,
		credit:false,
		numberId(){
			return Math.floor(Math.random()*10000);
		},
		getFullName(){
		return this.firstName + " " + this.lastName;	
		}
 	},
 	{

 		firstName: "Milos",
		lastName: "Zikic",
		deposit: 2000,
		card: "Visa",
		birt: "09.30.1989",
		state: "Srbija",
		city: "Beograd",
		personalId: 778899,
		credit:false,
		numberId(){
			return Math.floor(Math.random()*10000);
		},
		getFullName(){
		return this.firstName + " " + this.lastName;	
 		}
 	}
 	];
// }
var tBody = document.getElementById("tBody");
var myModal = document.getElementById("myModal");
var mainRow = document.getElementById("mainRow");
var addAccountRow = document.getElementById("addAccountRow");
var editAccountRow = document.getElementById("editAccountRow");
var acountsBtn = document.getElementById("acountsBtn");
var addAccountBtn = document.getElementById("addAccountBtn");
var editAccountBtn = document.getElementById("editAccountBtn");
var topEditBtn = 0;
var topWiewBtn = 0;
var addAccountToAccountSbtn = document.getElementById("addAccountToAccountSbtn");
var searchBtn = document.getElementById("searchBtn");
var numbers = [];

acountsBtn.addEventListener("click", displayAccounts);
addAccountBtn.addEventListener("click", addAccountFn);
editAccountBtn.addEventListener("click", editAccountFn);
addAccountToAccountSbtn.addEventListener("click", addAccountToAccountSfn);
searchBtn.addEventListener("click", searchFn);

class Account{
	constructor(firstName, lastName, deposit, card, birt, state, city, personalId, credit){
			
		this.firstName = firstName;
		this.lastName = lastName;
		this.deposit = deposit;
		this.card = card;
		this.birt = birt;
		this.state = state;
		this.city = city;
		this.personalId = personalId;
		this.credit = credit;
	}
	numberId(){
		return Math.floor(Math.random()*10000);
	}
	getFullName(){
		return this.firstName + " " + this.lastName;
	}
}

displayAccounts();

// DISPLAY Account function
function displayAccounts(){
	tBody.innerHTML = "";
	topWiewBtn = 0;
	mainRow.style.display = "block";
	addAccountRow.style.display = "none";;
	editAccountRow.style.display = "none";;
	
	accounts.forEach(function(e, i){
		tBody.innerHTML +=
		`
		<tr>
			<td>${e.numberId()}</td>
			<td>${e.firstName}</td>
			<td>${e.lastName}</td>
			<td>${e.deposit}</td>
			<td>${e.card}</td>
			<td>
				<button 'type='button' class='btn btn-warning rounded-0 profileBtn' data-toggle='modal' data-target='#wievModal' id=${i}>Wiew</button>
			</td>
		<tr>
		`
	})

	var profileBtn = document.getElementsByClassName("profileBtn");
	for ( let i=0; i<profileBtn.length; i++ ){
		profileBtn[i].addEventListener("click", modalProfileFn)
	};
}
// See full profile on button Wiev
function modalProfileFn(){
	myModal.innerHTML = "";
	myModal.innerHTML +=

	 `
	<div class="modal fade" id="wievModal" tabindex="-1" role="dialog" aria-labelledby="wiewModal" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-centered" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="wiewModal">Account: <span>${accounts[this.id].getFullName()}</span></h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	 
			<table class="table myModalTable">
				<thead>
					<tr>
						<th>ID</th>
						<td>${accounts[this.id].numberId()}</td>
					</tr>
					<tr>
						<th>FIRST NAME</th>
						<td>${accounts[this.id].firstName}</td>
					</tr>
					<tr>
						<th>LAST NAME</th>
						<td>${accounts[this.id].lastName}</td>
					</tr>	
					<tr>
						<th>DEPOSIT</th>
						<td>${accounts[this.id].deposit}</td>
					</tr>	
					<tr>
						<th>CREDIT CARD</th>
						<td>${accounts[this.id].card}</td>
					</tr>	
					<tr>
						<th>BIRTH</th>
						<td>${accounts[this.id].birt}</td>
					</tr>	
					<tr>
						<th>STATE</th>
						<td>${accounts[this.id].state}</td>
					</tr>	
					<tr>
						<th>CITY</th>
						<td>${accounts[this.id].city}</td>
					</tr>	
					<tr>
						<th>PERSONAL ID</th>
						<td>${accounts[this.id].personalId}</td>
					</tr>	
					<tr>
						<th>CREDIT</th>
						<td>${accounts[this.id].credit}</td>
					</tr>	

				</thead>
			</table>

	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-warning rounded-0 modalClose" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
	`
}
// ADD Account to acounts
function addAccountFn(){

	mainRow.style.display = "none";
	addAccountRow.style.display = "block";

	var iFirstName = document.getElementById("iFirstName");
	var iLastName = document.getElementById("iLastName");
	var iDeposit = document.getElementById("iDeposit");
	var iCard = document.getElementById("iCard");
	var iBirth = document.getElementById("iBirth");
	var iState = document.getElementById("iState");
	var iCity = document.getElementById("iCity");
	var iPersonalId = document.getElementById("iPersonalId");
	var iCredit = document.getElementById("iCredit");

	iFirstName.value = "";
	iLastName.value = "";
	iDeposit.value = "";
	iCard.value = "Visa";
	iBirth.value = "";
	iState.value = "";
	iCity.value = "";
	iPersonalId.value = "";
	iCredit.value = "";
	
}
function addAccountToAccountSfn(){
	var account = new Account(iFirstName.value, iLastName.value, iDeposit.value, iCard.value, iBirth.value, iState.value, iCity.value, iPersonalId.value, iCredit.value);
	accounts.push(account);
	localStorage.setItem("allAccounts", JSON.stringify(accounts));
	displayAccounts();
}
// EDIT Account an DELETE Account
function editAccountFn(){
	topEditBtn = 0;
	mainRow.style.display = "block";
	addAccountRow.style.display = "none";
	tBody.innerHTML = "";
	let editBtnYellow;
	let deleteBtnRed;
	accounts.forEach(function(e, i){
		tBody.innerHTML +=
		`
		<tr>
			<td>${e.numberId()}</td>
			<td>${e.firstName}</td>
			<td>${e.lastName}</td>
			<td>${e.deposit}</td>
			<td>${e.card}</td>
			<td>
				<button class='btn btn-warning rounded-0 d-block editBtnYellow' id=${i} data-toggle='modal' data-target='#editModal'>Edit</button>
			</td>
			<td>
				<button class='btn btn-danger rounded-0 d-block deleteBtnRed' id=${i} data-toggle='modal' data-target='#deleteModal'>Delete</button>
			</td>
		<tr>
		`
		editBtnYellow = document.getElementsByClassName("editBtnYellow");
		deleteBtnRed = document.getElementsByClassName("deleteBtnRed");
		
		editBtnYellow[i].style.top += (134 + topEditBtn + "px");
		editBtnYellow[i].style.right = "15px";

		deleteBtnRed[i].style.top += (134 + topEditBtn + "px");
		deleteBtnRed[i].style.right = "-70px";
		topEditBtn = topEditBtn + 49;
	})
	if (editBtnYellow){
		for ( let i=0; i<editBtnYellow.length; i++ ){
			editBtnYellow[i].addEventListener("click", editSingleAccountFn);
			deleteBtnRed[i].addEventListener("click", deleteSingleAccountFn);
		};
	};
	
	
}
function editSingleAccountFn(){
	self = this;
	myModal.innerHTML = "";
	myModal.innerHTML +=

	 `
	<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModal" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-centered" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="editModal">Account: <span>${accounts[this.id].getFullName()}</span></h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	 
			<table class="table myModalTable">
				<thead>
					<tr>
						<th>FIRST NAME</th>
						<td><input type="text" class="form-control" value='${accounts[this.id].firstName}' id="eFirstName"></td>
					</tr>
					<tr>
						<th>LAST NAME</th>
						<td><input type="text" class="form-control" value='${accounts[this.id].lastName}' id="eLastName"></td>
					</tr>	
					<tr>
						<th>DEPOSIT</th>
						<td><input type="number" class="form-control" value='${accounts[this.id].deposit}' id="eDeposit"></td>
					</tr>	
					<tr>
						<th>CREDIT CARD</th>
						<td>
						<select class="custom-select" id="eCard">
						    <option value="Visa">Visa</option>
						    <option value="Master">Master</option>
						    <option value="Dina">Dina</option>
  						</select>
  						</td>
						
					</tr>	
					<tr>
						<th>BIRTH</th>
						<td><input type="date" class="form-control" value='${accounts[this.id].birt}' id="eBirth"></td>
					</tr>	
					<tr>
						<th>STATE</th>
						<td><input type="text" class="form-control" value='${accounts[this.id].state}' id="eState"></td>
					</tr>	
					<tr>
						<th>CITY</th>
						<td><input type="text" class="form-control" value='${accounts[this.id].city}' id="eCity"></td>
					</tr>	
					<tr>
						<th>PERSONAL ID</th>
						<td><input type="text" class="form-control" value='${accounts[this.id].personalId}' id="ePersonalId"></td>
					</tr>	
					<tr>
						<th>CREDIT</th>
						<td><input type="text" class="form-control" value='${accounts[this.id].credit}' id="eCredit"></td>
					</tr>	

				</thead>
			</table>

	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-warning rounded-0 modalClose" data-dismiss="modal" id="modalEditBtn">Edit</button>
	      </div>
	    </div>
	  </div>
	</div>
	`
	var eFirstName = document.getElementById("eFirstName");
	var eLastName = document.getElementById("eLastName");
	var eDeposit = document.getElementById("eDeposit");
	var eCard = document.getElementById("eCard");
	var eBirth = document.getElementById("eBirth");
	var eState = document.getElementById("eState");
	var eCity = document.getElementById("eCity");
	var ePersonalId = document.getElementById("ePersonalId");
	var eCredit = document.getElementById("eCredit");

	eFirstName.value = accounts[this.id].firstName;
	eLastName.value = accounts[this.id].lastName;
	eDeposit.value = accounts[this.id].deposit;
	eCard.value = accounts[this.id].card;
	eBirth.value = accounts[this.id].birth;
	eState.value = accounts[this.id].state;
	eCity.value = accounts[this.id].city;
	ePersonalId.value = accounts[this.id].personalId;
	eCredit.value = accounts[this.id].credit;

	var modalEditBtn = document.getElementById("modalEditBtn");
	modalEditBtn.addEventListener("click", function(){
		var account = new Account(eFirstName.value, eLastName.value, eDeposit.value, eCard.value, eBirth.value, eState.value, eCity.value, ePersonalId.value, eCredit.value);
		accounts[self.id] = account;
		// localStorage.setItem("allAccounts", JSON.stringify(accounts));
		displayAccounts();
	});
}
function deleteSingleAccountFn(){
	self = this;
	myModal.innerHTML = "";
	myModal.innerHTML +=
	`
	<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModal" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="deleteModal">Delete account</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        Do you really want to delete account <span>${accounts[this.id].getFullName()}</span> ?
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-warning  rounded-0" data-dismiss="modal">NE</button>
	        <button type="button" class="btn btn-danger confirmDelete rounded-0" data-dismiss="modal">DA</button>
	      </div>
	    </div>
	  </div>
	</div>
	`
	var confirmDelete = document.getElementsByClassName("confirmDelete")[0];
	confirmDelete.addEventListener("click", function(){
		accounts.splice(self.id, 1);
		// localStorage.setItem("allAccounts", JSON.stringify(accounts));
		displayAccounts();
	})
}
// SEARCH
function searchFn(){

	tBody.innerHTML = "";
	var inputSearch = document.getElementById("inputSearch");

	accounts.forEach(function(e, i){
		if ( inputSearch.value.toUpperCase() == accounts[i].firstName.toUpperCase() || inputSearch.value.toUpperCase() == accounts[i].lastName.toUpperCase() ){
			tBody.innerHTML +=
			`
			<tr>
				<td>${e.numberId()}</td>
				<td>${e.firstName}</td>
				<td>${e.lastName}</td>
				<td>${e.deposit}</td>
				<td>${e.card}</td>
				<td>
					<button 'type='button' class='btn btn-warning rounded-0 profileBtn' data-toggle='modal' data-target='#wievModal' id=${i}>Wiew</button>
				</td>
				<td>
					<button class='btn btn-warning rounded-0 d-block editBtnYellow' id=${i} data-toggle='modal' data-target='#editModal'>Edit</button>
				</td>
				<td>
					<button class='btn btn-danger rounded-0 d-block deleteBtnRed' id=${i} data-toggle='modal' data-target='#deleteModal'>Delete</button>
				</td>
			<tr>
			`
		}else{
			console.log("ne")
		};
	});

	var profileBtn = document.getElementsByClassName("profileBtn");
	var editBtnYellow = document.getElementsByClassName("editBtnYellow");
	var deleteBtnRed = document.getElementsByClassName("deleteBtnRed");

	for ( let i=0; i<profileBtn.length; i++ ){
		profileBtn[i].addEventListener("click", modalProfileFn);
		editBtnYellow[i].addEventListener("click", editSingleAccountFn);
		deleteBtnRed[i].addEventListener("click", deleteSingleAccountFn);
	};

	inputSearch.focus();
	inputSearch.value = "";
}