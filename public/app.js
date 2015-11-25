
Stamplay.init('yourAppId');

function queryObject(){
 	var cars = document.getElementById("cars");
 	var selectedCar = cars.options[cars.selectedIndex].value;

	var objectCollection = new Stamplay.Cobject('objectModel').Collection;
	objectCollection.equalTo("property", selectedCar).fetch().then(function(res) {
		alert(objectCollection.instance[0].instance.brand);
	});
}
