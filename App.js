messages = document.getElementById('messages')
input = document.getElementById('input')
botblock = document.getElementById('botblock')
userblock = document.getElementById('userblock')

msgno = 0

data = [
	{
		title:"provident fund",
		itemData:[
	{title:"Applicability", link:"https://www.google.com"},
	{title:"Contribution rates", link:"https://www.google.com"},
	{title:"Interest rates", link:"https://www.google.com"},
	{title:"Advances", link:"https://www.google.com"},
	{title:"Withdrawals", link:"https://www.google.com"},
	{title:"Passbook (know your current balance)", link:"https://www.google.com"},

	]
}
	,
	{
		title:"pension",
		itemData:[
	{title:"Applicability", link:"https://www.google.com"},
	{title:"Contribution rates", link:"https://www.google.com"},
	{title:"Nomination", link:"https://www.google.com"},
	{title:"Types of Pension", link:"https://www.google.com"},
	{title:"Lump Sum withdrawl", link:"https://www.google.com"},
	{title:"Pension Disbursing Banks", link:"https://www.google.com"},
	{title:"Pension Calculator", link:"https://www.google.com"},

	]
}
	,
	{
		title:"esi",
		itemData:[
	{title:"Coverage of employer", link:"https://www.google.com"},
	{title:"Coverage of employee", link:"https://www.google.com"},
	{title:"Contribution rates", link:"https://www.google.com"},
	{title:"Types of benefits", link:"https://www.google.com"},
	{title:"Quantum of benefits", link:"https://www.google.com"},
	
	]
}
	,
	
	{
		title:"gratuity",
		itemData:[
	{title:"Applicability", link:"https://www.google.com"},
	{title:"Eligibility", link:"https://www.google.com"},
	{title:"Gratuity Calculator", link:"https://www.google.com"},
	{title:"Pension", link:"https://www.google.com"},
	{title:"Gratuity", link:"https://www.google.com"},
	
	]
}
	,
	{
		title:"bonus",
		itemData:[
	{title:"Applicability", link:"https://www.google.com"},
	{title:"Eligibility", link:"https://www.google.com"},
	{title:"Quantum of Benefits", link:"https://www.google.com"},
	{title:"Disbursement", link:"https://www.google.com"},
	
	]
}
	,
	
	{
		title:"posh",
		itemData:[
		{title:"Applicability", link:"https://www.google.com"},
		{title:"Annual Returns", link:"https://www.google.com"},
		{title:"IC/LC", link:"https://www.google.com"},
		{title:"Complaint Filing", link:"https://www.google.com"},
		{title:"Eligible Complaints", link:"https://www.google.com"},
		{title:"Training/Policies", link:"https://www.google.com"},
	]
}
	,
	{
		title:"termination benefit",
		itemData:[
		{title:"Leave encashment", link:"https://www.google.com"},
		{title:"Severance", link:"https://www.google.com"},		
		{title:"Gratuity", link:"https://www.google.com"},
		{title:"PF", link:"https://www.google.com"},
		{title:"Pension", link:"https://www.google.com"},
	
	]
}
	,
	{
		title:"maternity",
		itemData:[
		{title:"Applicability", link:"https://www.google.com"},
		{title:"Eligibility", link:"https://www.google.com"},
		{title:"Quantum of benefit", link:"https://www.google.com"},
		{title:"Creche facility", link:"https://www.google.com"},	
	]
}
	,
	
	

]


dataitems = {
"provident fund":{amount:12000},
"maternity benefit":{amount:3000},
"esi":{amount:6000},
"pension":{amount:50000},
"termination benefit":{amount:25000},
"gratuity":{amount:35000},
"bonus":{amount:35000},
"posh":{amount:15000},
}


function taketheinput(event) {
	
	if(event.key === "Enter" &&input.value!=""){
// create a user message block
		messages.innerHTML += userblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//changing its text
		messages.lastChild.childNodes[1].textContent = input.value
		// process the input 
		processinput(input.value.toLowerCase())
		input.value = ""

	}
	
}

function processinput(inputval){

	if(inputval!=""){
		messages.innerHTML += botblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = reply(inputval)	
	}

}



function reply(inputval) {
	result = inputval.match(/(how)|(\w+)/g)

	if(result.includes("how")){
		return "Good 😊"
	}
	if(result.includes("amount")){
		return recentproduct.amount
	}
	if(result.includes("hello")){
		return "Hi there"
	}
	
	a=null;
	result.forEach(function(data){
		if(dataitems.hasOwnProperty(data)){
			a = "What would you like to know about " + data+ " ?"
			recentproduct = dataitems[data]
		}
	})
	if(a){
		return a;
	}


	return "Sorry! I don't understand " 
	
}

function getNextData(title){
	
	let newContainer = document.createElement("div")
	// newContainer.classList.add("btn-container")
	
	data.map((e)=>{
		
		if(e.title=== title){
		  
			let msg=document.createElement("botmessage")
			msg.innerHTML="What would you like to know about "+title+" ?"
			msg.classList.add("botmessage")
			newContainer.appendChild(msg);

			e.itemData.map((itemD)=>{

				let newItem = document.createElement("button")
				
				newItem.classList.add("btn")
				newItem.classList.add("btn-outline-primary")
				newItem.classList.add("btn-rounded")
				newItem.innerHTML=itemD.title

				newContainer.appendChild(newItem)

			})

		}
	})


	document.getElementById("botblock_id").appendChild(newContainer)


		// process the input 
		





}