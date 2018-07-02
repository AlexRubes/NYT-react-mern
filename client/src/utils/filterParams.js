//takes in param object and returns object with null keys removed (specific to NYT)
export default params => 
    Object.keys(params)
    .filter(key => params[key])
    .reduce((acc, curr) => {
        acc[curr] = params[curr];
        return acc;
    }, {});