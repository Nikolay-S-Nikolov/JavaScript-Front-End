function vacation(num, type, day) {
    let price;
    let discount = 1;
    if (type == "Students") {
        if (num >= 30) {
            discount = 0.85;
        };
        if (day == "Friday") {
            price = 8.45;
        } else if (day == "Saturday") {
            price = 9.8;
        } else if (day == "Sunday") {
            price = 10.46;
        };
    } else if (type == "Business") {
        if (num >= 100) {
            num -= 10;
        };
        if (day == "Friday") {
            price = 10.90;
        } else if (day == "Saturday") {
            price = 15.60;
        } else if (day == "Sunday") {
            price = 16;
        };
    } if (type == "Regular") {
        if (num >= 10 && num <= 20) {
            discount = 0.95;
        };
        if (day == "Friday") {
            price = 15;
        } else if (day == "Saturday") {
            price = 20;
        } else if (day == "Sunday") {
            price = 22.5;
        };
    };
    totalPrice = price * num * discount
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
};

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday"); 