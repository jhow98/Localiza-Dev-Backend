module.exports = function pasreStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());

}