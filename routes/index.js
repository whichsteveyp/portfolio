
/*
 * Static / Simple Routes
 */

// var titlePrefix = 'Stephen Rivas JR | ';

exports.about = function(req, res) {
	res.render('about', { title: 'About', active: '/about' });
};

// this will move eventually to its own class for dynamic content
exports.blog = function(req, res) {
	res.redirect('http://medium.com/@sprjrx');
};

exports.contact = function(req, res) {
	res.render('contact', { title: 'Contact', active: '/contact' });
};

exports.download = function(req, res) {
	var fileType = req.params.fileType || 'pdf';

	res.download('public/files/resume/stephen-rivas-jr-resume.'+fileType, 'stephen-rivas-jr-resume.'+fileType);
};

exports.index = function(req, res) {
	var headers = [ "Hi. I'm Stephen.", "I &hearts; Javascript.", "And my girlfriend.", "I love making things." ];
	res.render('index', { title: 'Home', active: '/', headers: headers });
};

exports.life = function(req,res){
	res.render('about/life', { title: 'Life', active: '/about'});
};

exports.resume = function(req, res) {
	res.render('resume', { title: 'Résumé', active: '/resume' });
};

exports.site = function(req, res) {
	res.render('about/site', { title: 'About This Site', active: '/about'});
};

exports.work = function(req, res) {
	res.render('work', { title: 'Work', active: '/work' });
};