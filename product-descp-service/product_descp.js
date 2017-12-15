module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //To DO: Add the patterns and their corresponding functions
     

    //To DO: add the pattern functions and describe the logic inside the function
	this.add('role:product_url,cmd:get_prod_url',getProductURL);
	this.add('role:product_name,cmd:get_prod_name',getProductName);
	
    function getProductURL(msg, respond){
		id = msg.productId;
		res = "I got the values of "+msg+" "+msg.id;
		if(msg){
			for(i = 0; i < mockdata.length;i++){
				if(mockData[i].product_id === id){
					res = mockData[i].product_url;
				}
			}
		}
		respond(null, { result: 'Service Accessed'});
	}
	
	function getProductName(msg, respond){
		id = msg.productId;
		res = "I got the values of "+msg+" "+msg.id;
		if(msg){
			for(i = 0; i < mockdata.length;i++){
				if(mockData[i].product_id === id){
					res = mockData[i].product_name;
				}
			}
		}
		respond(null, { result: 'Service Accessed'});
	}
}