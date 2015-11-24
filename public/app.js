
Stamplay.init('sdkqueryobject');

function queryObject(){
 	var cars = document.getElementById("cars");
 	var selectedCar = cars.options[cars.selectedIndex].value;

	var objectCollection = new Stamplay.Cobject('object').Collection;
	objectCollection.equalTo("brand", selectedCar).fetch().then(function(res) {
		alert(objectCollection.instance[0].instance.brand);
	});
}
