var mongoose 			= require("mongoose"),
 	Campground 			= require("./models/campground"),
 	Comment 			= require("./models/comment");

var data = [
	{
		name: "Salmon Creek",
		image: "https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142__340.jpg",
		description: "blah blah blah blah"
	},
	{
		name: "Granite Hill",
		image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402__340.jpg",
		description: "blah blah blah blah"
	},
	{
		name: "Mountain Goat's Rest",
		image: "https://cdn.pixabay.com/photo/2015/07/12/19/06/fire-842311__340.jpg",
		description: "blah blah blah blah"
	},
	{
		name: "Salmon Creek",
		image: "https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092__340.jpg",
		description: "blah blah blah blah"
	},
	{
		name: "Granite Hill",
		image: "https://cdn.pixabay.com/photo/2016/03/09/12/06/night-sky-1246279__340.jpg",
		description: "blah blah blah blah"
	},
	{
		name: "Mountain Goat's Rest",
		image: "https://cdn.pixabay.com/photo/2017/04/05/01/11/bridge-2203661__340.jpg",
		description: "blah blah blah blah"
	},
	{
		name: "Salmon Creek",
	 	image: "https://cdn.pixabay.com/photo/2016/02/16/13/06/auroras-1203289__340.jpg",
		description: "blah blah blah blah"
	},
	{
		name: "Granite Hill",
		image: "https://cdn.pixabay.com/photo/2015/12/08/00/45/starry-night-1081993__340.jpg",
		description: "blah blah blah blah"
	},
	{
		name: "Mountain Goat's Rest",
		image: "https://cdn.pixabay.com/photo/2016/03/09/09/15/peak-1245693__340.jpg",
		description: "blah blah blah blah"
	}
]

function seedDB() {
	// Remove all campgrounds
	Campground.remove({}, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("remove campgrounds!");
			
			// Add a few campgrounds
			data.forEach((seed) => {
				Campground.create(seed, (err, data) => {
					if (err) {
						console.log(err);
					} else {
						console.log("Added a campground");
						
						// Add a few comments
						Comment.create(
							{
								text: "This place is greate, but I wish there was internet!",
								author: "Homer"
							}, (err, comment) => {
								if (err) {
									console.log(err);
								} else {
									data.comments.push(comment);
									data.save();
									console.log("Created new comment");
								}
							}
						);
					}
				});
			});
		}
	});
}

module.exports = seedDB;