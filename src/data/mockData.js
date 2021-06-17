/* eslint-disable jsx-a11y/anchor-has-content */
import catchs from "./../assets/projects/catch.jpg";
import notetaker from "./../assets/projects/notetaker.jpg";
import reschedule from "./../assets/projects/reschedule.jpg";
import scheduler from "./../assets/projects/scheduler.jpg";
import budgetary from "./../assets/projects/budgetary.jpg";
import fitness from "./../assets/projects/fitness.jpg";
import bookle from "./../assets/projects/bookle.jpg";


 const projectData = [
       {
           "src": catchs,
            "caption":<a href = "https://chelle77322.github.io/Catch-Source-Style/">Catch Style Source: A style selection tool</a> 
        },
        {
            "src":notetaker,
            "caption": <a href ="https://polar-tor-09641.herokuapp.com/" >NoteTaker: A useful note taking web app</a>
        },
        {
            "src":scheduler,
            "caption": < a href = "https://chelle77322.github.io/weekly_organiser/"> Scheduler: An online daily planner for the work day</a>
        },
        {
            "src":budgetary,
            "caption":< a href = "https://glacial-shore-08840.herokuapp.com/" >Budgetary: A little budget app</a> 
        },
        {
            "src":reschedule,
            "caption": <a href = "http://reschedule-app.herokuapp.com/"> RESchedule: An employment workforce app</a>
        },
        {
           "src":fitness,    
            "caption":<a href = "https://powerful-island-01473.herokuapp.com/">Keeping Fit: A little fitness tracker</a>  
        },
        {
            "src":bookle,
            "caption":<a href = "https://novelseeker.herokuapp.com">Bookle: A React Search App</a>
        }

    ]
    console.log(projectData);

export default projectData;