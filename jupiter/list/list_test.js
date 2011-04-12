steal.plugins('funcunit').then(function(){

module("Jupiter.List", { 
	setup: function(){
		S.open("//jupiter/list/list.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Jupiter.List Demo","demo text");
});


});