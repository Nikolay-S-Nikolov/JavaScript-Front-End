function catCreator(catArr) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let info of catArr){
        let[name,age] = info.split(' ');
        cats.push(new Cat(name,age));
    }

    for (currentCat of cats){
        currentCat.meow();
    }
}

// catCreator(['Mellow 2', 'Tom 5']);
// catCreator(['Candy 1', 'Poppy 3', 'Nyx 2']);