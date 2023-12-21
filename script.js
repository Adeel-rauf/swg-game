"use strict";
let user = prompt('Enter your choice among snake,water and gun');
let randomizer = Math.round(Math.random() * 2);
let cpu = ['snake', 'water', 'gun'][randomizer];
const match = (user, cpu) => {
    if (user === cpu) {
        return 'nobody, both are killed';
    }
    else if (user === 'snake' && cpu === 'water') {
        return "user";
    }
    else if (user === 'water' && cpu === 'gun') {
        return "user";
    }
    else if (user === 'gun' && cpu === 'snake') {
        return "user";
    }
    else if (user === 'snake' && cpu === 'gun') {
        return "cpu";
    }
    else if (user === 'gun' && cpu === 'water') {
        return "cpu";
    }
    else if (user === 'water' && cpu === 'snake') {
        return "cpu";
    }
};
let result = match(user, cpu);
document.write(`user with ${user} & cpu with ${cpu} battled and the winner is  ${result.toUpperCase()}`);
