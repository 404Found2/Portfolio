import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
function Activity(urlI, header, des, classes, link) {
  this.url = urlI;
  this.title = header;
  this.desc = des;
  this.classes = classes;
  this.link = link;
}

var activities = [new Activity("/Portfolio/todo.png", "To-Do List", "This is a simple react app that allows users to add and delete tasks, saving changes by storing data via local starage.", ["React", "HTML & CSS"], "https://github.com/404Found2/react-todo-list"), 
                  new Activity("/Portfolio/simplifood.png", "Recipe Web App","This is a react web app that allows users to search up and read recipes from the open source database TheMealDB.", ["React", "HTML & CSS", "APIs"], "https://github.com/404Found2/SimpliFood"), 
                  new Activity("/Portfolio/investify.png", "Investing Web App","Investify is a Financial application empowering financial literacy.", ["HTML & CSS", "EJS & Node.js", "Databases(mySQL)", "APIs"], "https://github.com/404Found2/investify"), 
                  new Activity("/Portfolio/habits.png", "Habit Tracker", "A simple, acessible, and secure habit tracker powered by Google Sheets and Google Apps Script.", ["HTML & CSS", "Google App Script"], "https://github.com/404Found2/habits-gas"),
                  new Activity("/Portfolio/connections.png", "Interview Web App", "This web application acts as a personal career coach.", ["HTML & CSS", "EJS & Node.js", "Databases(mySQL)"], "https://github.com/404Found2/Connections"),
                  new Activity("/Portfolio/budget.png", "Budgeting Sheet", "An automated personal finance and expense-tracking system powered by Google Sheets and Google Apps Script.", ["HTML & CSS", "Google App Script"], "https://github.com/404Found2/budgeting-gas")//,
                  //new Activity("/Portfolio/budget.png", "GlucoGuide", "Provides suggestions for people with Type II Diabetes in important categories: diet, exercise, monitoring, emergency", ["HTML & CSS", "Python"], "https://github.com/skeswani29/MHacks")
                 ]

export default function Project() {
    return (
    <div class="main">
    <div class="activity-flex" id="activity-list">
      {activities.map((it) => <a class="activity" style={{ 
        backgroundImage: `url(${it.url})`, 
        backgroundSize: 'cover',
        height: '100vh' 
      }} id={it.title} href={it.link} target="_blank"><span class="text"><h3 class="title">{it.title}</h3><p>{it.desc}</p></span></a>)}
    </div>
  </div>
    )
}