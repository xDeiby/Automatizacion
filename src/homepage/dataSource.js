// function _instanceof(left, right) { 
const dataInstanceOf = (right, symbol) => {

    if(right && symbol){
        return 1
    } 
    else { 

        return 0;
    } 
}

const functions = {
    dataInstanceOf
};

module.exports = functions;
