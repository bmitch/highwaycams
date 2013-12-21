var cams = {

	"Nanaimo Airport - N" 	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/476.jpg",
	"Nanaimo Airport - S" 	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/479.jpg",
	"Ladysmith"				: "http://images.drivebc.ca/bchighwaycam/pub/cameras/430.jpg",
	"Chemainus"				: "http://images.drivebc.ca/bchighwaycam/pub/cameras/480.jpg",
	"Duncan - N"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/399.jpg",
	"Duncan - E"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/398.jpg",
	"Duncan - S"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/400.jpg",
	"Cobble Hill Rd"		: "http://images.drivebc.ca/bchighwaycam/pub/cameras/343.jpg",
	"Mill Bay - N"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/395.jpg",
	"Mill Bay - W"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/397.jpg",
	"Mill Bay - S"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/396.jpg",
	"Butterfield Rd - N"	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/425.jpg",
	"Butterfield Rd - S"	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/428.jpg",
	"Bamberton"				: "http://images.drivebc.ca/bchighwaycam/pub/cameras/137.jpg",
	"Malahat Summit - N"	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/424.jpg",
	"Malahat Summit - S"	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/427.jpg",
	"Malahat"				: "http://images.drivebc.ca/bchighwaycam/pub/cameras/8.jpg",
	"Goldstream"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/138.jpg",
	"Spencer Rd - N"		: "http://images.drivebc.ca/bchighwaycam/pub/cameras/432.jpg",
	"Spencer Rd - S"		: "http://images.drivebc.ca/bchighwaycam/pub/cameras/433.jpg",
	"Colwood - W"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/423.jpg",
	"Colwood - E"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/429.jpg",
	"Helmcken - N"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/344.jpg",
	"Helmcken - W"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/347.jpg",
	"Helmcken - E"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/346.jpg",
	"Helmcken - S"			: "http://images.drivebc.ca/bchighwaycam/pub/cameras/345.jpg",
	"Admirals-McKenzie - N"	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/349.jpg",
	"Admirals-McKenzie - W"	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/351.jpg",
	"Admirals-McKenzie - E"	: "http://images.drivebc.ca/bchighwaycam/pub/cameras/352.jpg",
	""	: ""


}
var htmlToInsert = '<h1 id="title">Cams</h1>';
$( document ).ready(function() {
  
	i = 0;
	for (var key in cams) {

		html = "";
		if (i % 3 == 0 || i == 0)
		{
			html = '<div class="row-fluid">\n';
		}
		if (cams.hasOwnProperty(key)) {
			//alert(key + " -> " + cams[key]);
			html += '\t<div class="span4"><p>' + key + '</p>\n';
			html += '\t\t<img src="' + cams[key] + '"/>\n';
			html += '\t</div>\n';
			
		}

		if (i % 3 == 2)
		{
			html += '</div>\n\n';
		}

		htmlToInsert += html;
			
		i++;

	}

$( htmlToInsert ).prependTo( ".container" );
console.log(htmlToInsert);

});