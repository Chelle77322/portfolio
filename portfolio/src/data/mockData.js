import catchs from "../assets/projects/catch.jpg";
import notetaker from "../assets/projects/notetaker.jpg";
import reschedule from "../assets/projects/reschedule.jpg";
import scheduler from "../assets/projects/scheduler.jpg";
import budgetary from "../assets/projects/budgetary.jpg";
import fitness from "../assets/projects/fitness.jpg";
import bookle from "../assets/projects/bookle.jpg";


 const projectData = [
       {
           "src":<img src={require(`${catchs}`)} alt = "catch source style"/>,
            "link": "https://chelle77322.github.io/Catch-Source-Style/",
            "caption": "Catch Style Source; A style selection tool"
        },
        {
            "src":<img src={require(`${notetaker}`)} alt = "notetaker"/>,
            "link":"https://polar-tor-09641.herokuapp.com/",
            "caption": "NoteTaker: A useful note taking web app"
        },
        {
            "src": <img src={require(`${scheduler}`)} alt = "daily scheduler"/>,
            "link":"https://chelle77322.github.io/weekly_organiser/",
            "caption": "Scheduler: An online daily planner for the work day"
        },
        {
            "src":<img src={require(`${budgetary}`)} alt = "budget app"/>,
            "link":"https://glacial-shore-08840.herokuapp.com/",
            "caption": "Budgetary: A little budget app"
        },
        {
            "src":<img src={require(`${reschedule}`)} alt = "work schedule app"/>,
            "link":"http://reschedule-app.herokuapp.com/",
            "caption": "RESchedule: An employment workforce app"
        },
        {
            "src": <img src={require(`${fitness}`)} alt = "fitness app"/>,
            "link":"https://powerful-island-01473.herokuapp.com/",
            "caption": "Keeping Fit: A little fitness tracker"
        },
        {
            "src":<img src={require(`${bookle}`)} alt = "fitness app"/>,
            "link":"https://novelseeker.herokuapp.com/",
            "caption":"Bookle: A React Search App"
        }

    ]

export default projectData;