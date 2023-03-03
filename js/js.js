const generateNumbers = (amount, minValue, maxValue) => {
    const numbers = [];
    for(index = 0; index < amount; index++){
    const max = maxValue - minValue
    const randomNumber = minValue + Math.random()*max;
    const roundedRandomNumber = Math.round(randomNumber);
    numbers.push(roundedRandomNumber);
    };
    return numbers;
};