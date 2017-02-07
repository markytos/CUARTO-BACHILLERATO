var contacts = {
    "info": [
        "<img src='images/email.png' alt='email icon' class='icon-box'>",
        "<img src='images/twitter.png' alt='twitter icon' class='icon-box'>",
        "<img src='images/github.png' alt='github icon' class='icon-box'>",
        "<br />",
        "<img src='images/facebook.png' alt='facebook icon' class='icon-box'>",
        "<img src='images/linkedin.png' alt='linkedin icon' class='icon-box'>",
        "<img src='images/googleplus.png' alt='google plus icon' class='icon-box'>"
    ],
    displayContacts: function() {
        $("#contact-info").append('<h2 class="title"><img src="images/blog.png" class="icon" alt="contact us">socialize with us</h2>');
        for (var i = 0; i < this.info.length; i++) {
            $("#contact-info").append('<span class="social">' + this.info[i] + "</span>");
        }
    }
}
contacts.displayContacts();
var casestudies = {
	"study": [{
        'description': 'A leading bank in South Africa needed to offer its clients comprehensive financial services while ensuring the utmost in privacy and security. This case study details the involvement of CodeGarden Certified Scrum Masters, from requirements elicitation to deploying and supporting the system. The result not only led to a highly successful product for the Pretoria based customer but also informed the development of the CodeGarden Secure APP that is revolutionizing development of certifiably secure systems.',
		'wiki': 'Public Wiki([Connie Korinski][It\'s like Guiloini\'s Caligula  crossed with a Hockey wrestling match.][4 July 21 at 8:35pm]([Lauren Greene][Such a hail storm of delusion.][4 July 21 at 10:36pm]([Chris Christy][But they\'re telling the plain truth.][2 July 21 at 10:57pm])))([Kevin Sausage][You know what they say about the plain and simple truth.][1 July 21 at 11:11pm])'
	},{
        'description': 'Proper training leads to well prepared professionals The Social Responsibility division of CodeGarden recently completed its first "1 employee - 10 trained developers" initiative with the Software Institute of Software Valle This study tells the story of the highly successful efforts of CodeGarden\'s Karl Crash Course working with community leaders on site. 1,000 people trained and certified are going into the software workforce. CodeGarden made good on its promise to train 10 professionals for each of the 100 developers working at the local CodeGarden facility.',
		'wiki': 'Public Wiki([Majestic Smith][It\'s like Starbucks\'s helping the coffee workers farm sustainably.][4 July 22 at 8:35pm]([Lauren Greene][I don\'t think it is really working like they say.][4 July 22 at 10:36pm]([Jodie Morris][But they\'re at least trying to help.][2 July 21 at 10:57pm])))([Saul Allinski][You know more about trying than truth.][12 July 24 at 11:11pm])'
	}]
}

var products = {
	"item": [{
        "name": "My 3D Print",
        "description": "Three dimensional print design and control is available to the rest of us with this user friendly point and click user interface and ability to learn what you mean as you refine your designs. My 3D Print is operational on all leading 3D printers and takes you from concept to commodity quicker than lubricated lightening.",
		"teamLead": "Team leader - Philip Farkas",
		"wiki": "Public Wiki ([Zuzu Tango][Alas, these printers will put even more people out of work.][Yesterday at 9:13am]([Robert Macormac][I suspect dozens of talented machinists are working overtime to complete the machines that will replace them.][22 hrs]([Mount Rushbaugh] [That'd be a piece of cake, Mac; these guys want to eliminate the workforce, so they build the automata, nothing short of the destruction of the USA.] [14 hrs] ([Jerome Bechtel] [Why wouldn't we believe that this is just progress? Are you suggesting eliminating boring, unnecessary work is bad? Are you seriously blaming Farkas for the blatant corruption of NIKE and Starbucks?] [5 hrs] ([Mount Rushbaugh] [I don't like Farkas; he is a Putin puppet for Trump.][4 hrs] ([Jerome Bechtel] [I don't like Clinton; she is a Wallstreet puppet for World Destruction.][2 hrs]))))"
    }, {
        "name": "Secure APP",
        "description": "The CodeGarden platform for building software and software intensive systems that are free from from exploitable vulnerabilities is now available C, C++ and Java developers can now build software for financial services, systems control and any other sector that must have its systems hardened against malicious intrusion.",
		"teamLead": "",
		"wiki": ""
    }]
}

var locations = {
	"site": [{
        "location": "Pittsburgh, Pennsylvania, US",
        "year": 2013,
        "pic": "([images/Pittsburgh_Skyline.jpg][images/Pittsburgh_Skyline_thumbnail.jpg][Pittsburgh Skyline]([images/Carnegie_Mellon_University_as_seen_from_the_Cathedral_of_Learning.JPG][images/Carnegie_Mellon_University_as_seen_from_the_Cathedral_of_Learning_thumbnail.JPG][Carnegie Mellon University]([images/Carnegie_Mellon_University_College_of_Fine_Arts.jpg][images/Carnegie_Mellon_University_College_of_Fine_Arts_thumbnail.jpg][Carnegie Mellon University College of Fine Arts]([images/Interior_of_Carnegie_Mellon_College_of_Fine_Arts.jpg][images/Interior_of_Carnegie_Mellon_College_of_Fine_Arts_thumbnail.jpg][Carnegie Mellon University College of Fine Arts Interior]([images/Kresge_Recital_Hall_CMU.jpg][images/Kresge_Recital_Hall_CMU_thumbnail.jpg][Carnegie Mellon University Kresge Recital Hall])))([images/SkywaytoGHC.jpg][images/SkywaytoGHC_thumbnail.jpg][The Randy Pausch Bridge from the Carnegie Mellon University Purnell Center for the Arts to the Gates Hillman Center Complex])))"
    }, {
        "location": "Boston, Massachusetts, US",
        "year": 2014,
        "pic": "([images/Boston_Public_Garden_panorama.jpg][images/Boston_Public_Garden_panorama_thumbnail.jpg][Boston Public Gardens])"
    }, {
        "location": "Cuernavaca, Morelos, Mexico",
        "year": 2015,
        "pic": "([images/InsideChapitelCV.jpg][images/InsideChapitelCV_thumbnail.jpg][Chapitel del Calvario, Cuernavaca])"
    }]
}

var news = {
	"item": [{
        "date": "8 Jan 16",
        "story": "CodeGarden CTO, Polly Purebred, Addresses Global Healthcare Summit on security in mobile-web healthcare delivery.",
		"related": "Related ([http://www.mobilehealthsummit.ca/program/n][13th Annual Summit on Mobile Healthcare])([http://clickmedix.com/][Click Medix]([http://www.cartierwomensinitiative.com/mediacenter/video/ting-shih-2012-laureate-north-america/][Cartier Women\'s Initiative Laureate, North America])([http://www.vroomgirls.com/mothers-of-invention/][Toyota Mothers of Invention 2015]))"
	}, {
        "date": "5 Jan 2016",
        "story": 'Luís Yu, Executive Vice President of Very Large Software Corporation, announced a VLSC partnership with CodeGarden, citing "the unparalleled innovation of the CodeGarden digital medical technologies team".',
		"related": ""
	}, {
        "date": "28 Dec 2015",
        "story": 'CodeGarden completes acquisition of Flaco Atrás Software Sistemas a Culiacán based company specializing in embedded systems for self navigating vehicles".',
		"related": ""
    }]
}

var careers = {
	"job": [{
        "title": "Quality Assurance Analyst",
        "duties": "Test software written by offshore developers. (Create automated tests (unit tests) (integration tests (end to end tests)(regression tests)))(Generate and manage change requests(Work with development team leader (Create additional unit tests as needed)))(Integration test sign-off responsibility)(Generate test reports(Distribute to teams for continuous improvement)(Distribute to management))"
    }, {
        "title": "Senior Full Stack Software Engineer ",
        "duties": "You will work on a small development team and need to be able to solve a variety of problems. (Architect, oversee and help build full stack customer solutions. (Microsoft related skills - mandatory skills (C#  .ASP .NET SQL))(JavaScript development(HTML5)(CSS3(media queries))(JavaScript(JSON)(jQuery)(node.js))(Bootstrap(templates)(components)))"
    }, {
        "title": "Software Sales Manager",
        "duties": "You will be responsible for generating revenue though sales of CodeGarden products and services. (Reporting to you will be a team of 6 sales representatives.(Proven ability to motivate and lead sales teams.)(Experience in managing to sales objectives.))   (Communication of the CodeGarden products (Good technical understanding of the product line.) (Demonstrated ability to learn new products.) (Superior oral communication skills.)) (Unambiguous respect for  (CodeGarden products)  (CodeGarden customers) (Communicating the whole truth))"
    }]
}

var contacts2 = {
	"content": [
      "([Meeting][Joseph McGrath][Carol Vasquez][11 Oct 16]([Meeting][Carol Vasquez][Joseph McGrath][12 Oct 16]))([Meeting Postponed][Joseph McGrath][Carol Vasquez][14 Oct 16])([Olympic Tickets][Carmeron Camerata][Employee List][22 Oct 16]([Olympic Tickets][Carol Vasquez][Joseph McGrath][23 Oct 16]([Meeting][Carol Vasquez][Joseph McGrath][13 Oct 16])))([Olympic Tickets][Joseph McGrath][Carol Vasquez][23 Oct 16])"
    ]
}
