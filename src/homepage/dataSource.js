// function _instanceof(left, right) { 
const dataInstanceOf = (right, symbol) => {
    // if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { 
    // que es lo mismo que
    if(right, symbol){
        // return !!right[Symbol.hasInstance](left); 
        return 1
    } 
    else { 
        // return left instanceof right; 

        return 0;
    } 
}

const functions = {
    dataInstanceOf
};

module.exports = functions;
