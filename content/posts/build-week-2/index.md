---
title: Lambda School Build Week 2
date: 2019-10-02T06:00:00.000+00:00
featured_image: irsr-login.jpg
---

For my second Build Week at Lambda School I chose to build an app for managing small schools.  

The app will have two types of users: School Staff Members and Board Members. School Staff users can post issues at their school on the dashboard. Board Members can then read the issues and comment on them or change the status.

### Day One 9-20-2019  

I met my team. We have one Web Developer, four React Developers, and one Back End Developer.  

We did not have a UX Designer or any designs to start with so I made some simple wire frames with pen and paper. The group liked my designs.

![Sketch of a web site](https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/blogposts/rural-school-wireframe.jpg)  


After creating the wire frame sketch I made  a flow chart  to try to determine what pages our app would need and how users would navigate between them. I used Google Draw to make the flow chart. My team liked the flow chart so that was what we went with.  

![Flow chart describing web application](https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/blogposts/rural-school-flowchart-02.jpg)

### Day Two 9-21-2019  

On Saturday I started making a prototype in Adobe XD.  The Minimum Viable Product(MVP) guidelines for our project described  an array of cards laid out in a grid. Each issue in the database would be represented by a single card. When a user clicked on a card they would be directed to a different page to view the issue. This seemed like a poor way to display the data.  

Using Google Sheets and Microsoft Excel as inspiration I created a design that allowed users to browse, filter, and edit issues all on one screen. This would provide a more efficient and intuitive user interface.  

### Day Three 9-21-2019  

Sunday I completed my prototype by making designs for every screen a user would see on mobile and desktop views.  

![Mobile design protoype](https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/blogposts/rural-school-prototype_002.jpg)  

![Desktop design prototype](https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/blogposts/rural-sstaff-desktop.jpg)  

### Day Four 9-22-2019  

Let's do this!  Early Monday morning I began building out components for the dashboard. Our team was scattered across the globe so we had a group meeting around noon US Eastern time. There were two other developers building the React part of the application with me. We each worked on a different part. I made the dashboard, Victor made the onboarding components, and Min created the Redux actions and reducers.   

We used Visual Studio Code's Live Share feature so that we could all work on the same file simultaneously. It turned out to very beneficial as the project moved forward.  

### Day Five 9-23-2019  

On Tuesday I was still working on the dashboard. Our Back-End developer Mariam had completed the routes for authentication. Victor had completed most of the Onboarding  components. Min had successfully implemented Redux in the app and was adding routes to the back end.  

I felt like I was falling behind. To build a single dashboard for multiple usertypes that displayed different data for each type and utilized different form submission routes required some very complex logic. I had a hard time explaining it to my team. Despite working until 3 o'clock in the morning my part of the project, the dashboard, was nowhere near completion and I felt like a failure. Victor finished his tasks, Min was done with redux, so they were waiting on me to get the dashboard ready to start displaying data. I was really disappointed with myself.  I didn't think we would meet MVP by 2 PM Lambda time on Thursday.  

### Day Six 9-24-2019  

Wednesday. I woke up at 7 AM and went back to work. Min and Victor had started making pages that differed from the design because they had finished their portions of the project and probably didn't think I was going to do my part.  

Around 5 pm in the afternoon I had completed all of the components for the dashboard and had some basic functionality using local test data.  I shared it with my team and then they understood the logic behind the dashboard and we all worked on implementing full functionality.  

I deployed the app on Netlify.  Mariam did a great job building the backend. All of the routes were working so now we had to make the app utilize them.

We were behind so I stayed up late again figuring out how to pass props and state around to the various components in our app. Min also stayed up late help me get things working. Victor lives in Africa and had to sleep.   

At 1:30 AM I went to sleep. Our app was fully functional and met all of the MVP goals.   

### Day Seven 9-25-2019  

Thursday morning I woke up early again. 5 AM. The app worked but it had quite a few bugs and needed some CSS polish. I worked until 2 PM Lambda time, at which point were to submit out projects for review.  

When we shared our  final product with the rest of the team they really liked it. Two people in the group suggested that we present it on Demo Day.  

### Demo Day 9-26-2019  

Demo Day is the Friday after we submit our projects. I presented our project to my class. I received great feedback from the school staff members and classmates.

This is what the completed dashboard looks like:  

![School Staff member dashboard view](https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/blogposts/dashboard.jpg)  

The app is available to use at : <a href='https://internationalrsr.netlify.com' target='_blank' rel='noreferrer' title='internationalrsr.netlify.com'>International Rural School</a>  

### Things I Learned   

Although I am proud of myself for taking initiative and designing the app, I think it was a mistake to make it unnecessarily complex. English is a second language for both Victor and Min. I was unable to clearly communicate the logic behind the dashboard at the start of the project. It was not until Wednesday when all of the components had been built that they could see how it worked. We would have completed the project sooner if I had followed the initial design described in the project requirements.
