app.directive('myCustomElement', function myCustomElement(){
	return{
		restrict: 'E',
		replace:true,
		scope:"=",
		template:[
			"<div>",
			"<h1> My Custom Element's Heading </h1>",
			"<p> Some content here!</p>",
			"<pre> {{ ctrl.expression | json}}</pre>"
			"</div>"
		]join(""),
		controllerAs: 'ctrl';
		controller: function($scope){
			this.expression = {
				property: "example"
			}
		},
		link: function (scope,element,attrs){}
	}
});