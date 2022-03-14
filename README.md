# UIBSURVEY | Survey Web-App

Implementation of a Seminar project for *Understanding Information Behaviour*, at the University of Regensburg.

## Basics

The project is build with next.js, react.js and uses eslint.
The survey results are stored in a Firestore Database, from Firebase.
Afterwards these will be export with the use of Google-Cloud and analyzed and tidied with Python.
Hosting is provided by netlify.

#### [View deployed site](https://understandinginformationsurvey.netlify.app/)
#### [View data analysis](https://github.com/JohannesWittmann9/py-pd-data-analysis)

## Survey

This survey is used to determine changes in credibility rankings, based on search engine result pages.
More in detail, it should hand results, captured with likert scales, which show the difference between
only looking at Snippets (The URL, Title, description ...) and looking at the content of pages itself.

Therefore the survey uses 2 Conditions and 4 different Tasks.
Each condition is done with 2 random Tasks.

The images below do only show the main part of the survey.
In fact, it consists of many more pages, like demographice, pre and post task ...

![Condition 0](https://github.com/JohannesWittmann9/nextjs-survey-app/blob/main/gitpic/Condition0.png)

As you can see, participants are able to rate results, based on snippets in Condition 0.

![Condition 1](https://github.com/JohannesWittmann9/nextjs-survey-app/blob/main/gitpic/Condition1.png)

And in Condition 1, they are able to click on those.

![Condition 1 Content Top](https://github.com/JohannesWittmann9/nextjs-survey-app/blob/main/gitpic/Condition1ContentTop.png)

And participants are able to place their ratings afterwards.

![Condition 1 Content Top](https://github.com/JohannesWittmann9/nextjs-survey-app/blob/main/gitpic/Condition1ContentBottom.png)





