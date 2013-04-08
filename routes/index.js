
/*
 * Static / Simple Routes
 */

var titlePrefix = 'Stephen Rivas JR | ';


exports.about = function(req, res) {
	res.render('about', { title: titlePrefix + 'About' });
};

// this will move eventually to its own class for dynamic content
exports.blog = function(req, res) {
	res.render('blog', { title: titlePrefix + 'Blog' });
};

exports.contact = function(req, res) {
	res.render('contact', { title: titlePrefix + 'Contact' });
};

exports.index = function(req, res) {
	res.render('index', { title: titlePrefix + 'Home' });
};

exports.resume = function(req, res) {
	res.render('resume', { title: titlePrefix + 'Résumé' });
};

exports.work = function(req, res) {
	res.render('resume', { title: titlePrefix + 'Work' });
};