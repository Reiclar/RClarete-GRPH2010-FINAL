console.log("Connected!")



setTimeout(function() {
    $('.title-card').fadeOut('slow');
}, 10000); // ms


var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);

/*/
$(function(){
    $("#dragtarget1").draggable();
})

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragEnter(event) {
    if ( event.target.className == "droptarget1" ) {
      document.getElementById("demo").innerHTML = "ho <br> ho";
    }
  }
  
  function dragLeave(event) {
    if ( event.target.className == "droptarget1" ) {
      event.target.style.border = "";
    }
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }





  $(function(){
    $("#dragtarget2").draggable();
})


  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragEnter(event) {
    if ( event.target.className == "droptarget2" ) {
      document.getElementById("demo").innerHTML = "";
    }
  }
  
  function dragLeave(event) {
    if ( event.target.className == "droptarget2" ) {
      event.target.style.border = "";
    }
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }



  $(function(){
    $("#dragtarget3").draggable();
})


  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragEnter(event) {
    if ( event.target.className == "droptarget3" ) {
      document.getElementById("demo").innerHTML = "";
    }
  }
  
  function dragLeave(event) {
    if ( event.target.className == "droptarget3" ) {
      event.target.style.border = "";
    }
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
/*/


setTimeout(function() {
  $('.container').fadeOut('fast');
}, 34900); // ms

setTimeout(function() {
  $('.backbutton').fadeIn('fast');
}, 34900); // ms

$(".backbutton").fadeIn(fast);


 $( function() {
    $( "#dragtarget1" ).draggable();
    $( ".droptarget1" ).droppable({
      drop: function( event, ui ) {
        console.log("dropped")
        $("<div><h3><b>Dr. Maria-Carolina Cambre</b></h3> <br> <h4>Lecture: Contesting the colonial eye: “Burning the Mona Lisa”<br><mark> 9:00am EST, Virtual (Teams)</mark> <br><br>  </h4>Cambre is an Argentine/Canadian scholar who explores vernacular visual expression asking: How do people produce and direct the visual space. How is the image a doing? What are the social and cultural work/ings of images? – Ideas explored in her latest article, “The Atopic Image” (Visual Studies June 2023: 38:2, 199-202). Lately, her research focuses on visual processes of legitimation, representation of online sharing, the visual politics of identity, <br> and polymedia literacies. <br><br> This workshop/discussion will present ideas to work through and think about everyday resistant or subversive interactions to the colonial difference taking into consideration the affordances of international collaboration. Contesting the coloniality of how our subjectivities are being produced through capitalistic culture, I follow Argentine feminist scholar Maria Lugones in looking at “the liberation, as both adaptive and tension between subjectification and active subjectivity, that minimal sense of agency of the modern subject” (Lugones 2003). </div>")
        .addClass("popup-div")
        .appendTo(this);
        $( this )
      }
    });
  } );


  $( function() {
    $( "#dragtarget2" ).draggable();
    $( ".droptarget2" ).droppable({
      drop: function( event, ui ) {
        console.log("dropped!")
        $("<div><h3><b>Dr. Isabel Machado</b></h3> <br> <h4>Lecture: Fostering Inclusive Communities in <br>the Classroom through Project-Driven Courses.<br> <mark>1:00pm EST, Virtual (Teams)</mark> </h4><br> Isabel Machado is a Brazilian cultural historian whose work often crosses national and disciplinary boundaries. She specializes in the fields of Gender and Sexuality Studies and Celebration Studies, serves as co-editor-in-chief for the Journal of Festival Studies, is a host for the New Books Network Podcast and is a Lecturer at the University of British Columbia’s Institute for Gender, Race, Sexuality and Social Justice.  Machado will discuss the challenges and positive results of building inclusive classroom communities through public-facing collaborative projects, applying her research methodology to her course design. “Co-documenting” is the process of establishing partnerships and collaborations so that the research is relevant and accessible to the people involved. It is also an attempt to dismantle epistemic hierarchies and the separation between research and academic “communities.” An important element of this process is thinking about how different people can produce and share knowledges together, even from diverse backgrounds and delicate subjects. Building a project together fosters collaboration and helps the students realize that everyone can make valuable contributions to our learning community(ies) while making theory more tangible, translatable, and shareable. Yet, this is not always a smooth experience as it also involves finding together ways to deal with fears and discomfort.</div>")
        .addClass("popup-div2")
        .appendTo(this);
      }
    });
  } );


  $( function() {
    $( "#dragtarget3" ).draggable();
    $( ".droptarget3" ).droppable({
      drop: function( event, ui ) {
        console.log("dropped!!")
        $("<div><h3><b>Daniel Wildberger</b></h3> <br> <h4>Lecture: Branches: Weaving Stories in Design and Education <br><mark> 12:00pm EST, Virtual (Teams) </mark> </h4><br> Born in Brazil, Daniel Wildberger is a multi-disciplinary designer and educator with a focus on dynamic media, interactive design, motion graphics, experience design, and visual communication. He holds a B.A. in Communication Design and Advertising from Universidade Católica do Salvador, as well as an MA and MFA from the University of Iowa, USA. This presentation is a collaboration between Daniel Wildberger and Erik Páez, sparked by a central question: How might a former student and teacher co-design a talk that weaves their histories in design and education together? To visualize their intertwined journeys, Daniel and Erik investigate the shifting dynamics of teacher-student collaborations, exploring these narratives through multiple lenses: over time (spanning eight years), across different spaces (Mexico, USA, Brazil, and Canada), and through evolving roles. Through the creation of this metapresent-<br>ation, they aim to foster a space for mutual reflection, where their individual contributions coalesce into the fabric of a collective knowledge.</div>")
        .addClass("popup-div3")
        .appendTo(this);
      }
    });
  } );


  $( function() {
    $( "#dragtarget4" ).draggable();
    $( ".droptarget4" ).droppable({
      drop: function( event, ui ) {
        console.log("dropped!!")
        $("<div><h3><b>Dr. Shima Rezaei Rashnoodi</b></h3> <br> <h4>Lecture: Being There: A Virtual Reality <br> Museum of Migrant Women <br><mark> 9:00am EST, Virtual (Teams) </mark> </h4><br> Shima Rezaei Rashnoodi is a senior researcher and lecturer at Breda University of Applied Sciences in the Netherlands, specializing in immersive media particularly spatial experiences in Virtual Reality (VR) and empathy. With a background in architecture and par-<br>ticipatory research, she has worked on projects around home in displacement and inclusive design. <br><br> This presentation introduces Being There, a virtual reality museum that highlights the stories of migrant women from Latin America, created through a COIL project. Students from BUas (The Nether-<br>lands) and UDEM (Mexico) worked together in a multidisciplinary effort to design an immersive VR experience, partnering with the Lamentos Escuchados Migration Center in Monterrey, Mexico. The project brings to life the personal journeys of migrant women as they travel through Mexico toward the United States, focusing on their challenges, aspirations, and their concept of “home.” By digitally portraying a mother and child, the VR museum aims to foster empathy and raise awareness about the realities migrant women face. The presentation will explore the international collaboration, creative process, challenges encountered, and the project’s broader goal of building understanding and empathy for migrant women.</div>")
        .addClass("popup-div4")
        .appendTo(this);
      }
    });
  } );


