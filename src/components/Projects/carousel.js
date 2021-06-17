//import React, {useState, useEffect, Component} from "react";
//const slideWidth = 30;

//const _items = [
 //   {
   //     project: {
     //       title: "Catch Style Source",
       //     desc: 'A style selection website for the beginner web developer',
         //   image: "assets/projects/catch.jpg",
            
     //   },
       
   // },
   // {
    //    project: {
     //       title: "NoteTaker",
      //      desc: "A useful note taking web app",
       //     image: <img src = "../assets/projects/notetaker.jpg" alt = "Catch Style Source"></img>,
       // },
  //  },
  //  {
   //     project: {
   //         title: "Scheduler",
   //         desc: " An online daily planner for the work day",
   //         image: "../assets/projects/scheduler.jpg",
   //     },
   // },
   // {
   //     project: {
   //         title: 'Budgetary',
   //         desc: 'Track your daily monetary transactions with this useful budget app',
   //         image: ".../assets/projects/budgetary.jpg",
   //     },
   // },
   // {
   //     project: {
   //         title: 'RESchedule',
   //         desc: "An employment shift scheduling app for managers of casual and contract workers",
   //         image: "../assets/projects/reschedule.jpg",
   //     },
  //  },
//];

//const length = _items.length;
//_items.push(..._items);

// eslint-disable-next-line no-unused-vars
//const sleep = (ms = 0) => {
 //   return new Promise((resolve) => setTimeout(resolve, ms));
//};

//const createItem = (position, idx) => {
  //  const item = {
    //    styles: {
      //      transform: `translateX(${position * slideWidth}rem)`,
        //},
        //player: _items[idx].player,
    //};

   // switch (position) {
     //   case length - 1:
       // case length + 1:
         //   item.styles = {...item.styles, filter: 'grayscale(1)'};
           // break;
        //case length:
          //  break;
        //default:
          //  item.styles = {...item.styles, opacity: 0};
            //break;
    //}

    //return item;
//};

//const CarouselSlideItem = ({pos, idx, activeIdx}) => {
  //  const item = createItem(pos, idx, activeIdx);

    //return (
      //  <li className="carousel__slide-item" style={item.styles}>
        //    <div className="carousel__slide-item-img-link">
          //      <img src={item.player.image} alt={item.player.title} />
            //</div>
            //<div className="carousel-slide-item__body">
              //  <h4>{item.player.title}</h4>
               // <p>{item.player.desc}</p>
            //</div>
        //</li>
    //);
//};

//const keys = Array.from(Array(_items.length).keys());

//class Carousel extends Component{
  //  componentDidMount() {
    //    console.log("Components successfully mounted");
        
   // }
    

//}
//export default Carousel;