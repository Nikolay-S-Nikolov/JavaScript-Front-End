function solve() {
    let inputArr = JSON.parse(document.querySelector('textarea').value);
    let restaurants = {};

    for (let restaurantInfo of inputArr) {
        let [restaurantName, worokersInfo] = restaurantInfo.split(' - ');

        if (!(restaurantName in restaurants)) {
            restaurants[restaurantName] = [];
        }

        for (let worker of worokersInfo.split(', ')) {
            let [name, salary] = worker.split(' ');
            restaurants[restaurantName].push({ name, salary: Number(salary) });
        }
    }

    restaurants = Object.entries(restaurants).map(([restaurantName, restaurantWorkers]) => ({
        restaurantName,
        restaurantWorkers,
        averageSalary: (restaurantWorkers.reduce((sum, currentWorker) => sum + currentWorker.salary, 0)) / (restaurantWorkers.length)
    }));

    let bestRestaurant = restaurants.sort((x, y) => y.averageSalary - x.averageSalary)[0];

    let workersData = bestRestaurant.restaurantWorkers.sort((a, b) => b.salary - a.salary);

    let bestSalary = workersData[0].salary.toFixed(2);


    document.querySelector('#bestRestaurant > p').textContent =
        `Name: ${bestRestaurant.restaurantName} Average Salary: ${(bestRestaurant.averageSalary).toFixed(2)} Best Salary: ${bestSalary}`;

    document.querySelector('#workers > p').textContent = workersData.map((w)=>`Name: ${w.name} With Salary: ${w.salary}`).join(' ');
}
