//  Work JSON
var work = {
    "jobs":[
        {
            "employer":"Professoinal Gamers Inc.",
            "title":"Mid Laner",
            "location":"Boise, Idaho",
            "dates":[
                "2013 - Present"
             ],
            "description":"Mid lane Player for Some Team."
        },

        {
            "employer":"Fisher Price",
            "title":"Professional Fisherman",
            "location":"Spokane,Idaho",
            "dates":[
                "2014 - Present"
            ],
            "description":"Catching fish all day!"
        }
    ]
};

//  Work Functions
work.displayWork=function(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle +formattedLocation + formattedDates + formattedDescription);
    }
}

// Bio JSON
var bio = {
    "name" : "Some Guy",
    "role" : "Some Enthusiast",
    "contacts" : {
        "email" : "me@gmail.com",
        "mobile" : "xxx.xxx.xxxx",
        "github" : "me@github",
        "twitter" : "me@twitter",
        "blog" : "me@blog",
        "location" : "Indiana"
    },
    "welcomeMsg" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nisi elementum, euismod nisi ac, euismod massa. In in eleifend leo. Proin neque erat, pretium a ornare vitae, laoreet blandit magna.",
    "skills" : ["Catching Fish", "Playing Games"],
    "bioPic" : "images/fry.jpg"
};

// Bio Functions
bio.displayBio = function() {
        var formattedName=HTMLheaderName.replace("%data%", bio.name);
        var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
        var formattedPic=HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
        $(formattedName + formattedRole).insertBefore("#toggleHeader");
        $("#toggleHeader").append(formattedPic);
        $("#toggleHeader").append(formattedWelcomeMsg);
        var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
        var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
        var formattedGithub =HTMLgithub.replace("%data%",bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        var formattedBlog =HTMLblog.replace("%data%",bio.contacts.blog);
        $("#topContacts").append(formattedEmail + formattedMobile + formattedGithub + formattedTwitter + formattedBlog);
        $("#footerContacts").append(formattedEmail + formattedMobile + formattedGithub + formattedTwitter + formattedBlog);
        if (bio.skills.length > 0) {
            $("#toggleHeader").append(HTMLskillsStart);
          for(skill in bio.skills){
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkill);
          }
        }
}

//  Project JSON
var projects = {
    "project":[
        {
        "title": "P1: Mockup to Website",
        "dates":"2015",
        "description":"First Project for Udacity Front-End Nanodegree.  Replicate a design from PDF into html and css.  Develop a responsive website for my portfolio.",
        "images":["images/p1.png"]
        },

        {
        "title": "P2: Interactive Resume",
        "dates":"2015",
        "description":"Second Project for Udacity Front-End Nanodegree.  Demonstrate mastery of language syntax through a series of challenges. ",
        "images":["images/p2.png"]
        },

        {
        "title": "P3: Classic Arcade Game Clone",
        "dates":"2015",
        "description":"Third Project for Udacity Front-End Nanodegree.  Work on a classic arcade game called Frogger! ",
        "images":["images/frog.jpg"]
        },

        {
        "title": "P4: Website Optimization",
        "dates":"2015",
        "description":"Fourth Project for Udacity Front-End Nanodegree.  Optimize a provided website with a number of optimization and performance related issues. ",
        "images":["images/frog.jpg"]
        },

        {
        "title": "P5: Neighborhood Map Project",
        "dates":"2015",
        "description":"Fifth Project for Udacity Front-End Nanodegree.  Create a single-page application featuring a map of your neighborhood or place you would like to visit. ",
        "images":["images/frog.jpg"]
        },

        {
        "title": "P6: Feed Reader Testing",
        "dates":"2015",
        "description":"Sixth Project for Udacity Front-End Nanodegree.  Learn to test with Javascript by using a practice known as test-driven development.",
        "images":["images/frog.jpg"]
        }
    ]
};

// Project Functions
projects.displayProjects = function() {
    $("#projects").append(HTMLprojectStart);
    for (pro in projects.project) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[pro].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[pro].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[pro].description);
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.project[pro].images);
        $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages);
    }
}

//  Education JSON
var education = {
    "schools":[
        {
            "name":"Eagle High School",
            "degree": "n/a",
            "major" : "n/a",
            "location" : "Eagle, Idaho",
            "date" : 2000
        }
    ],
    "online":[
        {
            "school":"Udemy",
            "title":"Web Development",
            "url":"http://www.udemy.com",
            "major":"Web Developer",
            "classes":[
                     "HTML",
                     "CSS",
                     "JAVASCRIPT",
                     "PHP",
                     "MYSQL",
                     "PHPMYADMIN"
                     ],
            "date":"2014"
        },
        {
            "school":"Udacity",
            "url":"http://www.udacity.com",
            "date":"2015",
            "title":"Web Development",
            "major":"Front-End Developer",
            "classes":[
                "HTML",
                "CSS",
                "JAVASCRIPT"
            ]
        }
    ]
};

// Education Functions
education.displayEducation = function() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        var formattedSchoolName=HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
        var formattedSChoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSChoolLocation + formattedSchoolMajor);
    }
    for(i in education.online){
        var formattedOnlineSchool=HTMLschoolName.replace("%data%", education.online[i].school);
        var formattedOnlineDegree = HTMLschoolDegree.replace("%data%", education.online[i].major);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[i].date);
        var formattedOnlineURL = HTMLschoolLocation.replace("%data%", education.online[i].url);
        $(".education-entry:last").append(formattedOnlineSchool + formattedOnlineDegree + formattedOnlineDates + formattedOnlineURL);
        if (education.online[i].classes.length > 0) {
            var formattedClasses = HTMLonlineCourses.replace("%data%", education.online[i].classes);
            $(".education-entry:last").append(formattedClasses);
        }
     }
}

// Initialize Functions
bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEducation();

// Google Map
$("#mapDiv").append(googleMap);
function locationizer(work_obj) {
    var locations=[];
    for(job in work.jobs){
        locations.push(work.jobs[job].location);
    }
    return locations;
}
function inName(some_name) {
    some_name = bio.name;
    nameArray = some_name.split(" ");
    var firstName = nameArray[0].toLowerCase();
    var lastName = nameArray[1].toUpperCase();
    var firstLetter = firstName[0].toUpperCase();
    firstName = firstLetter + firstName.slice(1);
    var internationalFullName = firstName + " " + lastName;
    return internationalFullName;
}

// Additional Functionality
$(document).ready(function(){

    // HIDE CONTENT ON PAGE LOAD
    $("#toggleHeader").hide();
    $("#workExperience").children().hide();
    $("#projects").children().hide();
    $("#education").children().hide();
    $("#toggleMap").children().hide();

    /// TOGGLE HEADER
    $("#plusGlyph").click(function(){
        $("#toggleHeader").slideToggle();
   });

    // Internationalize name
    $("#globe").click(function() {
       var iName = inName();
        if ($("#name").text() == bio.name) {
             $("#name").html(iName);
        }else{
            $("#name").html(bio.name);
        }
    });

   /// TOGGLE WORK
    $("#toggleWork").find(".glyphIcon").click(function() {
        $("#workExperience").children().slideToggle("fast");
        $("#workExperience").toggleClass("well");
   });

    /// TOGGLE PROJECTS
    $("#toggleProjects").find(".glyphIcon").click(function() {
        $("#projects").children().slideToggle();
        $("#projects").toggleClass("well");
    });

    /// TOGGLE EDUCATION
    $("#toggleEducation").find(".glyphIcon").click(function() {
        $("#education").children().slideToggle();
        $("#education").toggleClass("well");
    });

    /// TOGGLE MAP
    $("#mapToggle").find(".glyphIcon").click(function() {

       $("#toggleMap").children().toggle();
       google.maps.event.trigger(map, "resize");
    });
});

//theme
$("#themeOne").click(function(){
    $("body").css("background-image", "url(images/bg2.jpg)");
});
$("#themeTwo").click(function(){
    $("body").css("background-image", "url(images/bg4.jpg)");
});