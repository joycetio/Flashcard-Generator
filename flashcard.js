function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}; 

var harryPotter = new BasicCard("Who played Harry Potter in the Harry Potter movie series?", "Daniel Radcliffe"); 

BasicCard.prototype.printInfo = function() {
	var userCommand = process.argv[2]; 

	switch(userCommand){
		case "front": 
		console.log(this.front);
		break;

		case "back":
		console.log(this.back);
		break;
	};
};

harryPotter.printInfo();