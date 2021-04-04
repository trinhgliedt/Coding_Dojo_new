import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/ProjectStyles.css";
import djangoVideo from '../videos/_1_Django_Ecommerce.mp4';
import reactVideo from '../videos/_2_AQIMap.mp4';
import springBootVideo from '../videos/_3_Let_Meet.mp4';

function Projects() {


return (
    <div id="projectWrap" className="pt-4 overflow-auto" style={{ position: 'relative', zIndex: '2'}}>
        {/* First project */}
        <div id="project1" className="col-9 ml-5 mr-3 px-4 projectCard mb-0" >
            <h5 className="mt-3 mb-0 text-center projectHeader">Sunflowers - Clothes shopping made easy</h5>
            <a style={{marginLeft:'45%'}} class="mb-4 text-center" href="http://18.191.91.140/" target="_blank" rel="noreferrer">Deployed site</a>
            <video width="100%"  controls>
                <source src={djangoVideo} type="video/mp4"/>
            </video>
            <p className="card-text small mt-2 text-center">Python, Django MVC, Javascript, HTML, CSS, Bootstrap, SQLite, Bcrypt, Email RegEx, Git version control, GitHub </p>
            <div className="card-body pb-0">
                
                <h6 className="card-title">Inspiration: </h6>
                <p className="card-text">I love the convenience of being able to browse and shop for clothes from the comfort of your home, and I also think eCommerce sites are widely needed by many businesses. Both of those reasons had me want to try building this site for our Python stack coding bootcamp project.  We used Python, HTML, CSS for front-end and Django framework for back-end. We also utilized Django Admin function to upload product photos and product details. </p>
                <h6 className="card-title">Challenges: </h6>
                <p className="card-text"> One of the biggest challenges was figuring out the best relationship structure between different objects so that information will be reflected properly. We have documented our thought process in the relevant files to make it easy for code viewer to understand. </p>
                
                <h6 className="card-title">Next step: </h6>
                <p className="card-text mb-3"> More functionalities can be added so that owner of the shop can add and update inventory, add cash to the business and view a simple set of the financial operation reports. For sales tax, an API call can be made so that the sales tax rate can be updated automatically based on the customer's address. </p>
                
            </div>
            <div className="card-body pt-0">
            <p className="card-text"> Collaborators: <a href="https://www.linkedin.com/in/howard-shin/">Howard Shin</a>, <a href="https://www.linkedin.com/in/madhuri-ravuri/">Madhuri Ravuri</a> | <a href="https://github.com/trinhgliedt/Ecommerce_Django_Project" className="card-link">GitHub Link</a> </p>
            </div>
        </div>
        {/* Second project */}
        <div id="project2" className="col-9 ml-5 px-4 mr-3 projectCard mb-4">
            <h5 className="mt-3 mb-4 text-center projectHeader">AQI Maps - A single page application displaying real time Air Quality Index on Google Maps</h5>
            <video width="100%"  controls>
                <source src={reactVideo} type="video/mp4"/>
            </video>
            <p className="card-text small mt-2 text-center">Javascript, React, Express, API, HTML, CSS, Git version control, GitHub </p>
            <div className="card-body pb-0">
                
                <h6 className="card-title">Inspiration: </h6>
                <p className="card-text">With the recent wildfires in the West Coast, we wanted to build an app so that user can have easy access to real time air quality index (AQI) which can help them arrange their outdoor activity accordingly. This application could detect user's current location and, upon their consent, display the maps for their location. Users could also search to view the AQI for a specific location, or for the whole U.S. and filter to the relevant AQI value that they want to see. </p>
                <h6 className="card-title">Challenges: </h6>
                <p className="card-text"> One of our challenges was to integrate the two layers of API, one from World Air Quality Index API and one from GoogleMaps API, to ensure the information is displayed correctly. </p>
                
                <h6 className="card-title">Next step: </h6>
                <p className="card-text mb-3"> More API calls could be made from World Air Quality Index for the forecast air quality index value. </p>
                
            </div>
            <div className="card-body pt-0">
            <p className="card-text"> Collaborators: <a href="https://www.linkedin.com/in/howard-shin/">Howard Shin</a>  | <a href="https://github.com/SHJoon/AQI-Maps" className="card-link">GitHub Link</a> </p>
            </div>
        </div>
        {/* Third project */}
        <div id="project3" className="col-9 ml-5 px-4 mr-3 projectCard mb-4">
            <h5 className="mt-3 mb-4 text-center projectHeader">Let's Meet - A event organization tool that helps connect people with mutual interests</h5>
            <video width="100%"  controls>
                <source src={springBootVideo} type="video/mp4"/>
            </video>
            <p className="card-text small mt-2 text-center">Java, SpringBoot,MAMP, MySQL, HTML, CSS, Git version control, GitHub  </p>
            <div className="card-body pb-0">
                
                <h6 className="card-title">Inspiration: </h6>
                <p className="card-text"> I have enjoyed utilizing event organizer apps such as Meetup.com and Facebook Groups, and wanted to rebuild a similar tool to enable people with multure interests to connect. </p>
                <h6 className="card-title">Challenges: </h6>
                <p className="card-text"> We were lucky to be smooth sailing with the project. Implementing Spring Authorization took a bit to figured out, and we were able to set clear control on which pages a user can access if they didn't log in. </p>
                
                <h6 className="card-title">Next step: </h6>
                <p className="card-text mb-3"> It would be great to have Web Socket implemented on the comment page so that the users do not need to refresh the page to see new comments.</p>
                
            </div>
            <div className="card-body pt-0">
            <p className="card-text"> Collaborators: <a href="https://www.linkedin.com/in/howard-shin/">Howard Shin</a>, <a href="https://www.linkedin.com/in/madhuri-ravuri/">Madhuri Ravuri</a> | <a href="https://github.com/trinhgliedt/Let_s_Meet_Java_Project" className="card-link">GitHub Link</a> </p>
            </div>
        </div>
    </div>


  );
}

export default Projects;
