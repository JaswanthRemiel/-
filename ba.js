$("document").ready(function() {

    function getWrappers(amount) {
        let wrappers = [];
        for (i = 0; i <= amount; i++) {
            wrappers[i] = document.createElement("div");
            wrappers[i].setAttribute("class", "wrapper");
        }
        return wrappers;
    }

    function getLanguageLevel(sliderValue) {
        switch (sliderValue) {
            case "1":
                return "A1";
                break;

            case "2":
                return "A2";
                break;

            case "3":
                return "B1";
                break;

            case "4":
                return "B2";
                break;

            case "5":
                return "C1";
                break;

            case "6":
                return "C2";
                break;

            case "7":
                return "Native";
                break;


        }
    }

    function getSkillLevel(sliderValue) {
        switch (sliderValue) {
            case "1":
                return "Novice";
                break;

            case "2":
                return "Beginner";
                break;

            case "3":
                return "Skilled";
                break;

            case "4":
                return "Advanced";
                break;

            case "5":
                return "Expert";
                break;
        }

    }
  

    $(".common-fields").click(function() {
        let buttonId = this.id;

        let htmlItems = {
            titleOrSchool: document.createElement("input"),
            employerOrDegree: document.createElement("input"),
            city: document.createElement("input"),
            startDate: document.createElement("input"),
            endDate: document.createElement("input"),
            description: document.createElement("textarea"),

            titleOrSchoolLabel: document.createElement("label"),
            employerOrDegreeLabel: document.createElement("label"),
            cityLabel: document.createElement("label"),
            startDateLabel: document.createElement("label"),
            endDateLabel: document.createElement("label"),
            descriptionLabel: document.createElement("label"),

            checkBox: document.createElement("input"),
            checkBoxLabel: document.createElement("label")
        };

        htmlItems.titleOrSchool.setAttribute("type", "text");
        htmlItems.employerOrDegree.setAttribute("type", "text");
        htmlItems.city.setAttribute("type", "text");
        htmlItems.startDate.setAttribute("type", "text");
        htmlItems.endDate.setAttribute("type", "text");
        htmlItems.description.setAttribute("class", buttonId == "add-education" ? "education-description" : "job-description");

        htmlItems.titleOrSchoolLabel.innerText = buttonId == "add-education" ? "School" : "Job Title";
        htmlItems.employerOrDegreeLabel.innerText = buttonId == "add-education" ? "Degree" : "Employer";
        htmlItems.cityLabel.innerText = "City";
        htmlItems.startDateLabel.innerText = "Start date";
        htmlItems.endDateLabel.innerText = "End date";
        htmlItems.descriptionLabel.innerText = "Description";

        htmlItems.checkBox.setAttribute("type", "checkbox");
        htmlItems.checkBoxLabel.innerText = "Currently " + (buttonId == "add-education" ? " study " : " work ") + "here";

        htmlItems.titleOrSchool.setAttribute("class",buttonId == "add-education" ? "school" : "job-title");
        htmlItems.employerOrDegree.setAttribute("class",buttonId == "add-education" ? "degree" : "employer");
        htmlItems.city.setAttribute("class",buttonId == "add-education" ? "school-city" : "job-city");
        htmlItems.startDate.setAttribute("class", buttonId == "add-education" ? "start-date-education date" : "start-date-job date");
        htmlItems.endDate.setAttribute("class", buttonId == "add-education" ? "end-date-education end-date date" : "end-date-job end-date date");
        htmlItems.checkBox.setAttribute("class",buttonId == "add-education" ? "currently-study" : "currently-work");
        htmlItems.checkBox.setAttribute("class", "current-checkbox");

        let wrappers = getWrappers(7);
        let groupWrapper = document.createElement("div");
        groupWrapper.setAttribute("class", "group-wrapper");
        let selectedWrapper =
            buttonId == "add-education" ?
            "#education-wrapper" :
            "#employment-wrapper";
          
          let closeIcon = document.createElement("i");
          closeIcon.setAttribute("class", "far fa-times-circle job-education-close-icon");
 
        for (let i = 0; i < wrappers.length; i++) {
            groupWrapper.append(wrappers[i]);
        }
        
        wrappers[0].setAttribute("class", "close-icon-wrapper");
        wrappers[0].append(closeIcon);
        wrappers[0].append(document.createElement("br"));
        wrappers[1].append(htmlItems.titleOrSchoolLabel);
        wrappers[1].append(document.createElement("br"));
        wrappers[1].append(htmlItems.titleOrSchool);
        wrappers[2].append(htmlItems.employerOrDegreeLabel);
        wrappers[2].append(document.createElement("br"));
        wrappers[2].append(htmlItems.employerOrDegree);
        wrappers[3].append(htmlItems.cityLabel);
        wrappers[3].append(document.createElement("br"));
        wrappers[3].append(htmlItems.city);
        wrappers[4].append(htmlItems.startDateLabel);
        wrappers[4].append(document.createElement("br"));
        wrappers[4].append(htmlItems.startDate);
        wrappers[5].append(htmlItems.endDateLabel);
        wrappers[5].append(document.createElement("br"));
        wrappers[5].append(htmlItems.endDate);
        wrappers[6].append(htmlItems.checkBoxLabel);
        wrappers[6].append(htmlItems.checkBox);
        wrappers[7].append(htmlItems.descriptionLabel);
        wrappers[7].append(document.createElement("br"));
        wrappers[7].append(htmlItems.description);
        
        $(selectedWrapper).append(groupWrapper);

    });

    $(".skills-languages").click(function() {
      
        let input = document.createElement("input");
        let slider = document.createElement("input");
        let buttonId = this.id;
        let itemWrapper = document.createElement("div");
        itemWrapper.setAttribute("class", buttonId == "add-skill" ? "skills-item-wrapper" : "language-item-wrapper");
        let selectedWrapper = buttonId == "add-skill" ? "#skills-wrapper" : "#languages-wrapper";
        let levelParagraph = document.createElement("p");
        input.setAttribute("type", "text");
        slider.setAttribute("type", "range");
        slider.setAttribute("min", "1");
        slider.setAttribute("max", buttonId == "add-skill" ? "5" : "7");
        slider.setAttribute("value", "1");
        slider.setAttribute("class", buttonId == "add-skill" ? "skill-slider slider" : "language-slider slider");
        input.setAttribute("class", buttonId == "add-skill" ? "skill-name" : "language-name");  
        levelParagraph.setAttribute("class",  buttonId == "add-skill" ? "skill-level level-paragraph" : "language-level level-paragraph");
        
         let closeIcon = document.createElement("i");
          closeIcon.setAttribute("class", "far fa-times-circle " 
                                 + "close-" + ( buttonId == "add-skill" ? "skill" : "language")
                                + " close-sl");
          itemWrapper.append(closeIcon);
      
        itemWrapper.append((document.createElement("label").innerText = buttonId == "add-skill" ? "Skill" : "Language"));
        itemWrapper.append(document.createElement("br"));
        itemWrapper.append(input);
        itemWrapper.append(document.createElement("br"));
        itemWrapper.append((document.createElement("label").innerText = "Level"));
        itemWrapper.append(document.createElement("br"));
        itemWrapper.append(slider);
        itemWrapper.append(document.createElement("br"));
        itemWrapper.append(levelParagraph);
        $(selectedWrapper).append(itemWrapper);

        
            slider.className.includes("language") ?
            slider.parentNode.getElementsByClassName("level-paragraph")[0].innerText = getLanguageLevel(slider.value) :
            slider.parentNode.getElementsByClassName("level-paragraph")[0].innerText = getSkillLevel(slider.value);

      
    });

    $("#add-link").click(function() {
        let linksItemWrapper = document.createElement("div");
        linksItemWrapper.setAttribute("class", "links-item-wrapper");

        let linkInput = document.createElement("input");
        let linkTitle = document.createElement("input");

        linkInput.setAttribute("type", "text");
        let closeIcon = document.createElement("i");
        closeIcon.setAttribute("class", "far fa-times-circle link-close-icon");
        linksItemWrapper.append(closeIcon);
        linkInput.setAttribute("class", "link-input");
        linkTitle.setAttribute("type", "text")
        linkTitle.setAttribute("class", "link-title");
      
        
        linksItemWrapper.append((document.createElement("label").innerText = "Title"));
        linksItemWrapper.append(document.createElement("br"));
        linksItemWrapper.append(linkInput);
        linksItemWrapper.append(document.createElement("br"));
        linksItemWrapper.append((document.createElement("label").innerText = "Link"));
        linksItemWrapper.append(document.createElement("br"));
        linksItemWrapper.append(linkTitle);
        $("#links-wrapper").append(linksItemWrapper);
      
      
    });



  let img = document.getElementById('resume-img');
  let closeIconVisibility = false;
    $("#image-upload").on("change", function(){
          
             let errorParagraph = document.createElement("p");
              errorParagraph.setAttribute("id", "error-paragraph");
              $("#error-paragraph").remove();
          
          if(this.files && this.files[0] && this.files[0]["type"].includes("image")){
            
          let varImg = new Image();
          varImg.onload = function(){
          
          }
          
            img.src = "";
          let url = URL.createObjectURL(this.files[0]);
           
          varImg.src = url;
            
          varImg.onload = function(){
           
            if(varImg.height <= 1200 && varImg.width <= 800){
              let removeImage = document.createElement("i");
              removeImage.setAttribute("class", "far fa-times-circle remove-img");
               closeIconVisibility?"":$("#img-wrapper").prepend(removeImage);
              closeIconVisibility = true;
               img.src = url;
              if(varImg.height>=700 || varImg.width >=500){
              img.style.width = varImg.width/4 + "px";
              img.style.height = varImg.heigth/4 + "px";
                }
              URL.revokeObjectURL(img.src);
              }else{
                
                URL.revokeObjectURL(img.src);
               $(".remove-img").remove();
                closeIconVisibility = false;
                $("#img-wrapper").append(errorParagraph);
                errorParagraph.innerText = "The image is too large or currupted. Please, try with another image.";
                
              }
            
          }
            
          }else{
                $("#img-wrapper").append(errorParagraph);
                errorParagraph.innerText = "Wrong file type. Please, use image files only.";
          }
    });
  
      
   $("#main").on("click", ".year-change", function(){
         
         switch(this.id){
        case"minus-ten-years" :
             currentYear-=10;
             break;
        case"year-down" :
             currentYear--;
             break;
           case "year-up" :
             currentYear++;
             break;
        case"plus-ten-years" :
             currentYear+=10;

         }
        
          $("#year").text(currentYear);

        });  
  
  
    let datePopup = document.getElementById("date-popup");
    let datePopupDisplayed = false;
    let currentYear = new Date().getFullYear();
      function openDatePopUp(webElement){
        datePopupDisplayed = true;
        datePopup.style.display = "block";
        webElement.parentNode.append(datePopup);
        $("#year").text(currentYear);

      }
    
        let selectedDateField;
             
        $("#main").on("click", ".date", function(){
        datePopup.style.display =  "none";
          currentYear =  new Date().getFullYear();
          try{selectedDateField.removeAttribute("id");}
          catch(e){
          }
        openDatePopUp(this);
        selectedDateField = this;
        selectedDateField.id = "selected-field";

      });
  
      $("#main").on("click", ".slider", function() {
            let sliderType = this.class;
              if (this.className.includes("language")) {
                  this.parentNode.getElementsByClassName("level-paragraph")[0].innerText = getLanguageLevel(this.value);
              } else {
                  this.parentNode.getElementsByClassName("level-paragraph")[0].innerText = getSkillLevel(this.value);
              }

        });
  
       $("#main").on("click", ".close-sl", function(){
         
   
         this.parentNode.remove();
        });
      
        $("#main").on("click", ".date-close-icon", function(){
        this.parentNode.parentNode.remove();
        });
   
        $("#main").on("click", ".job-education-close-icon", function(){
        this.parentNode.parentNode.remove();
        });
  
        $("#main").on("click", ".link-close-icon", function(){
        this.parentNode.remove()
        });
  
       $("#main").on("click", "#months > tbody > tr > th", function(){
         
          $("#date-popup").css("display", "none");
          $("#" + selectedDateField.id).val(this.innerText + ", " + currentYear);
          selectedDateField.removeAttribute("id");
        });
  
  
          $("#main").on("click", ".current-checkbox", function() {
            if (this.checked) {
                this.parentNode.parentNode
                    .getElementsByClassName("end-date")[0]
                    .disabled = true;
            } else {
                this.parentNode.parentNode
                    .getElementsByClassName("end-date")[0]
                    .disabled = false;
            }
        });
  
      $("#main").on("click", ".remove-img", function(){
       img.src = "";
        $(".remove-img").remove();
        closeIconVisibility = false;
      });
  
  let personalData, workExerience, education, skills, languages, links;
  
  function getFieldsArray(fieldsSelector){
    let result = [];
      for(let i = 0; i < fieldsSelector.length; i++){
          if(fieldsSelector[i].disabled){
          result[i] = "present"  ;
          }else{
          result[i] = fieldsSelector[i].className.includes("paragraph")?fieldsSelector[i].innerText: fieldsSelector[i].value;
            
          }
      }

    return result;
  }
        
  function collectData(){
    let personalInformationInputs = document.getElementById("personal-information-wrapper").getElementsByTagName("input");
    personalData = {
      image: document.getElementById("resume-img"),
      firstName: personalInformationInputs[1].value,
      lastName: personalInformationInputs[2].value,
      phone: personalInformationInputs[3].value,
      email: personalInformationInputs[4].value,
      country: personalInformationInputs[5].value,
      dateOfBirth: personalInformationInputs[6].value,
      address: personalInformationInputs[7].value,
      postalCode: personalInformationInputs[8].value
  };
    
    workExerience = {
        jobTitles: getFieldsArray(document.getElementsByClassName("job-title")),
        employers: getFieldsArray(document.getElementsByClassName("employer")),
        cities: getFieldsArray(document.getElementsByClassName("job-city")),
        startDates: getFieldsArray(document.getElementsByClassName("start-date-job")),
        endDates: getFieldsArray(document.getElementsByClassName("end-date-job")),
        descriptions:getFieldsArray(document.getElementsByClassName("job-description"))

      };
    
     education  = {
      schools:getFieldsArray(document.getElementsByClassName("school")),
      degrees:getFieldsArray(document.getElementsByClassName("degree")),
      cities:getFieldsArray(document.getElementsByClassName("school-city")),
      startDates:getFieldsArray(document.getElementsByClassName("start-date-education")),
      endDates:getFieldsArray(document.getElementsByClassName("end-date-education")),
      descriptions: getFieldsArray(document.getElementsByClassName("education-description"))

    };
    
    skills = {
      skills:getFieldsArray(document.getElementsByClassName("skill-name")),
      levels:getFieldsArray(document.getElementsByClassName("skill-level"))
    };
    
     languages = {
      languages:getFieldsArray(document.getElementsByClassName("language-name")),
      levels:getFieldsArray(document.getElementsByClassName("language-level"))
    };
    
   links = {
      links:getFieldsArray(document.getElementsByClassName("link-input")),
      titles:getFieldsArray(document.getElementsByClassName("link-title"))
    };
    
  }
  
      function getNumericSkillLevel(levelName) {
        switch (levelName) {
            case "Novice":
                return 1;
                break;

            case "Beginner":
                return 2;
                break;

            case "Skilled":
                return 3;
                break;

            case "Advanced":
                return 4;
                break;

            case "Expert":
                return 5;
                break;
        }
    }

      function buildSkills(skill, level){
      let skillLevelPreviewWrapper = document.createElement("div");
        skillLevelPreviewWrapper.setAttribute("class", "skill-preview-wrapper");
      let skillNamePreview = document.createElement("p");
        skillNamePreview.setAttribute("class", "skill-name-preview");
        skillNamePreview.innerText = skill;
      let skillLevelPreview = document.createElement("div");
        skillLevelPreview.setAttribute("class", "skill-level-preview");

        skillLevelPreviewWrapper.append(skillNamePreview);
        skillLevelPreviewWrapper.append(skillLevelPreview);

        $("#skills-preview").append(skillLevelPreviewWrapper);

        for(let i = 1; i<=5; i++){
          let levelPoint = document.createElement("div");

          if(i<=level){
            levelPoint.setAttribute("class", "level-point filled");
          }else{
            levelPoint.setAttribute("class", "level-point");
          }
          skillLevelPreview.append(levelPoint);
        }
      }
  
      function buildLanguages(language, level){
      let languagePreviewWrapper = document.createElement("div");
        languagePreviewWrapper.setAttribute("class", "language-preview-wrapper");
      let languageNamePreview = document.createElement("p");
        languageNamePreview.setAttribute("class", "language-name-preview");
        languageNamePreview.innerText = language;
      let languageLevelPreview = document.createElement("div");
        languageLevelPreview.setAttribute("class", "language-level-preview");
        languageLevelPreview.innerText = level;
        $("#languages-preview").append(languagePreviewWrapper);
        languagePreviewWrapper.append(languageNamePreview);
        languagePreviewWrapper.append(languageLevelPreview);


      }
  
  

      function buildJobsAndEducation(isJob){
        let jobsSchools = isJob ? workExerience.jobTitles : education.schools;
        let employersDegrees = isJob ? workExerience.employers : education.degrees;
        let cities = isJob ? workExerience.cities : education.cities;
        let startDates = isJob ? workExerience.startDates : education.startDates;
        let endDates = isJob ? workExerience.endDates : education.endDates;
        let descriptions = isJob ? workExerience.descriptions : education.descriptions;
        let size =  isJob ? workExerience.jobTitles.length: education.schools.length

        for(let i = 0; i < size; i++){

        let wrapper = document.createElement("div");
          wrapper.setAttribute("class", isJob?"job-wrapper-preview":"education-wrapper-preview");
        let schoolTitlePreview = document.createElement("p");
          schoolTitlePreview.setAttribute("class", isJob?"job-title-preview":"education-title-preview");
        let employerDegree = document.createElement("p");
          employerDegree.setAttribute("class", isJob?"employer-preview":"degree-preview");
        let cityPreview = document.createElement("p");
          cityPreview.setAttribute("class", isJob?"job-city-preview":"education-city-preview");
        let timePreview = document.createElement("p");
          timePreview.setAttribute("class", isJob?"job-time-preview":"education-time-preview");
        let descriptionPreview = document.createElement("p");
          descriptionPreview.setAttribute("class", isJob?"job-desctiption-preview":"education-desctiption-preview");


          schoolTitlePreview.innerText = isJob ? jobsSchools[i] + " at  ": employersDegrees[i] + " at ";
          employerDegree.innerText = isJob ? employersDegrees[i]  + ", ": " " + jobsSchools[i] + ", ";
          cityPreview.innerText =  cities[i];
          timePreview.innerText = startDates[i] + "-" + endDates[i];
          descriptionPreview.innerText = descriptions[i];

          wrapper.append(schoolTitlePreview);
          wrapper.append(employerDegree);
          wrapper.append(cityPreview);
          wrapper.append(timePreview);
          wrapper.append(descriptionPreview);

        let header = document.createElement("h2");
        header.innerText =isJob? "Work experience" : "Education";
        let selector = isJob?"#jobs-preview":"#education-preview";
        
          $(selector).append(header);
          $(selector).append(wrapper);
          
        }

      }
  
 
      function buildLinks(){
            let header = document.createElement("h2");
            header.innerText = "Links";
            
          for(let i = 0; i < links.links.length; i++){
              if(i==0)$("#links-preview").append(header);
            let link = document.createElement("a");
            link.setAttribute("href", links.links[i]);
            link.innerText = links.titles[i];
            $("#links-preview").append(link);
          }

      }
        let previewDisplayed = false;
        
      $("#preview-and-download").click(function() {
          
        if(previewDisplayed)return;
        
        previewDisplayed = true;
         collectData();
          
        let addressIcon = document.createElement("i");
        addressIcon.setAttribute("class", "fas fa-map-marker-alt");
        let phoneIcon = document.createElement("i");
        phoneIcon.setAttribute("class", "fas fa-mobile-alt");
        let emailIcon = document.createElement("i");
        emailIcon.setAttribute("class", "fas fa-at")
          
          let namesPreview = document.createElement("h2");
          namesPreview.setAttribute("id", "names-preview");
          namesPreview.innerText = personalData.firstName + " " + personalData.lastName;
          let addressPreview = document.createElement("p");
          addressPreview.setAttribute("id", "address-preview");
          addressPreview.innerText = (personalData.address + ", " + personalData.postalCode + ", " + personalData.country);
           addressPreview.prepend(addressIcon);
          let phonePreview = document.createElement("p");
          phonePreview.setAttribute("id", "phone-preview");
          phonePreview.innerText = personalData.phone;
          phonePreview.prepend(phoneIcon);
          let emailPreview = document.createElement("p");
          emailPreview.setAttribute("id", "email-preview");
          let emailLink = document.createElement("a");
          emailLink.setAttribute("href", ("mailto:" + personalData.email));
          emailLink.innerText = personalData.email;
          emailPreview.append(emailIcon)
          emailPreview.prepend(emailLink);
          let dateOfBirthPreview = document.createElement("p");
            dateOfBirthPreview.setAttribute("id", "date-of-birth-preview")
          dateOfBirthPreview.innerText = personalData.dateOfBirth;


       
        $("#preview").css("display", "block");
        $("#preview").prepend(personalData.image);
        $("#personal-data-preview").append(namesPreview);
          $("#personal-data-preview").append(addressPreview);
          $("#personal-data-preview").append(phonePreview);
          $("#personal-data-preview").append(emailPreview);
          $("#personal-data-preview").append(dateOfBirthPreview);
        
        let skillsHeader = document.createElement("h2");
        skillsHeader.innerText = "Skills";
        
        for(let i = 0; i< skills.skills.length; i++){
            if(i==0)$("#skills-preview").append(skillsHeader);
          buildSkills(skills.skills[i], getNumericSkillLevel(skills.levels[i]))
        }
        
      let languagesHeader = document.createElement("h2");
        languagesHeader.innerText = "Languages";
        
        for(let i = 0; i < languages.languages.length; i++){
            if(i==0)$("#languages-preview").append(languagesHeader);
          buildLanguages(languages.languages[i], languages.levels[i]);
        }
        
         buildJobsAndEducation(true);
         buildJobsAndEducation(false);
         buildLinks();
        let downloadButton = document.createElement("button");
        downloadButton.setAttribute("id", "download-button");
        downloadButton.innerText = "Download";
        $("#preview").append(downloadButton);
        
    });

  $("#preview-close-icon").click(function(){
      
    previewDisplayed = false;
    
      $("#personal-data-preview").empty();
      $("#links-preview").empty();
      $("#skills-preview").empty();
      $("#languages-preview").empty();
      $("#jobs-preview").empty();
      $("#education-preview").empty();
      $("#download-button").remove();
    
    $("#preview").css("display", "none");
    
    
  });
     let element = document.getElementById("preview");
     let closePreviewIcon = document.getElementById("preview-close-icon");
     let doc = new jsPDF();
   $("#main").on("click", "#download-button", function(){


    });
  
});
