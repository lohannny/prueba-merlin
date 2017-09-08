'use strict';

app.factory('HomeFactory', function($http){

	var url = 'http://www.reddit.com/reddits.json';

	var HomeFactory = {

		getUsers: function(){
			return $http.get(url).success(function(data){
				return data;
			///	console.log(data.data);
			})
			.error(function(err){
				console.log(err);
			})
		},
    getChildrens: function(){
      return $http.get(url).success(function(data){
        return data.data;
      })
        .error(function(err){
          console.log(err);
        })
    },



	};

	return HomeFactory

});
