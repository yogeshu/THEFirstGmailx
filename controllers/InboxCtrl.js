app.controller('InboxCtrl', function ($scope, InboxFactory) {
	InboxFactory.getMessages()
	.success(function(jsonData, statuscode){
		console.log('the req was successful!', statuscode, jsonData);
		$scope.emails= jsonData;
	});
});
		
	$scope.title = 'the title xx of the xx ';
});