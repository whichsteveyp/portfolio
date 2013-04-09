
/*
 * Static / Simple Routes
 */

// var titlePrefix = 'Stephen Rivas JR | ';

exports.about = function(req, res) {
	res.render('about', { title: 'About', active: '/about' });
};

// this will move eventually to its own class for dynamic content
exports.blog = function(req, res) {
	res.render('blog', { title: 'Blog', active: '/blog' });
};

exports.contact = function(req, res) {
	res.render('contact', { title: 'Contact', active: '/contact' });
};

exports.index = function(req, res) {
	res.render('index', { title: 'Home', active: '/' });
};

exports.resume = function(req, res) {
	res.render('resume', { title: 'Résumé', active: '/resume' });
};

exports.work = function(req, res) {
	res.render('resume', { title: 'Work', active: '/work' });
};