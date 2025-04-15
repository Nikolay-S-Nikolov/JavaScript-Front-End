function spaceExploration(inputArr) {
    let num = Number(inputArr.shift());
    let spaceCrew = {};
    const commandMapper = {
        'Perform': perform,
        'Transfer': transfer,
        'Learn Skill': learnSkill
    };

    for (let i = 0; i < num; i++) {
        let [astronautName, craftSection, skills] = inputArr.shift().split(' ');
        spaceCrew[astronautName] = { craftSection: craftSection, skills: skills.split(',') };
    }

    for (let commandInfo of inputArr) {
        let [command, ...arg] = commandInfo.split(' / ');
        if (command == 'End') break;

        commandMapper[command](...arg);
    }

    Object.keys(spaceCrew).forEach(printAstronautInfo);

    function perform(astronaut, section, skill) {
        const { craftSection, skills } = spaceCrew[astronaut];
        const canPerform = craftSection == section && skills.includes(skill);

        let result = canPerform ? 'has successfully performed' : 'cannot perform';
        console.log(`${astronaut} ${result} the skill: ${skill}${canPerform ? '!' : '.'}`);
    }

    function transfer(astronaut, newSection) {
        spaceCrew[astronaut].craftSection = newSection;
        console.log(`${astronaut} has been transferred to: ${newSection}`);
    }

    function learnSkill(astronaut, newSkill) {
        const condition = spaceCrew[astronaut].skills.includes(newSkill);
        if (!condition) spaceCrew[astronaut].skills.push(newSkill);

        let result = condition ? 'already knows the' : 'has learned a new';
        console.log(`${astronaut} ${result} skill: ${newSkill}.`);
    }

    function printAstronautInfo(astronaut) {
        let { craftSection, skills } = spaceCrew[astronaut];
        skills.sort((a, b) => a.localeCompare(b));
        console.log(`Astronaut: ${astronaut}, Section: ${craftSection}, Skills: ${skills.join(', ')}`);
    }
}

spaceExploration([
    "3",
    "Tom engineering_bay construction,maintenance",
    "Sara research_lab analysis,sampling",
    "Chris command_module piloting,communications",
    "Perform / Tom / engineering_bay / construction",
    "Learn Skill / Sara / robotics",
    "Perform / Sara / research_lab / robotics",
    "Transfer / Chris / research_lab",
    "Perform / Chris / research_lab / piloting",
    "Learn Skill / Tom / diagnostics",
    "Perform / Tom / engineering_bay / diagnostics",
    "End"
]
)