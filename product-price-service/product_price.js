module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product_price,cmd:get_prod_price',getProductPrice);
    function getProductPrice(msg, respond){
		id = msg.id;
		res = "I got the values of "+msg+" "+msg.id;
		if(id){
			for(i = 0; i < mockdata.length;i++){
				if(mockData[i].product_id === id){
					res = mockData[i].product_price;
				}
			}
		}
		respond(null, { result:res});
	}
    //To DO: add the pattern functions and describe the logic inside the function
  
}