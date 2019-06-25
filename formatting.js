
const removeWhitespace = input => {
    //trim space of the ends
    input = 'thing with more words';
    let result = input.trim();

    //collaps duplicate spaces
    result = result.replace(/\s+/g, ' ');

    console.log(result);
}

