'use strict';

eventsApp.controller('EventController',
function EventController($scope) {

   // $scope.snippet = '<span style="color:red">hi there</span>';
    $scope.boolValue = true;
    $scope.mystyle = {color:'red'};
    $scope.myclass = "blue";

    $scope.event = {
        name: 'Angular Boot Camp',
        date: '22/03/16',
        time: '11:25 AM',
        location: {
            address: '4-6 Upper Crescent',
            city: 'Belfast',
            county: 'Co. Antrim'
        },
        imageUrl:'/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass',
                creatorName: 'Tomasz Janecko',
                duration: '1 Hour',
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and otus of directives!',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'Will Hamill',
                duration: '30 Minutes',
                level: 'Introductory',
                abstract: 'This session will take a closer look at scopes. learn what they do, how they do it and how to get them to do it for you.',
                upVoteCount: 0
            },
            {
                name: 'Well Behaved Controllers',
                creatorName: 'Enda McCormack',
                duration: '2 Hours',
                level: 'Intermdiate',
                abstract: 'Controllers are the beginning of everything AngularJS does.',
                upVoteCount: 0
            }
        ]
        }
    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }



    }
);