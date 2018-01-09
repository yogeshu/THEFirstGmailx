app.factory('InboxFactory' , function InboxFactory ($http) {
	var exports= {};
	exports.getMessages = function(){
		return $http.get('json/emails.json')
	.error(function(data){
		console.log('there was an error!',data);
	});
};
return exporta;
});