'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ResumeCtrl', function () {

  	// Example of resume
    this.resume = {
    	firstName: 'Mykola',
    	lastName: 'Zhad`ko',
    	birthday: '20.12.1997',
    	email: 'borntodievych@gmail.com',
    	phoneNumber: '+380930977735',
    	skills: [
    		'HTML', 'CSS', 'Angular', 'NodeJS', 'JavaScript'
    	],
    	education: {
    		edStart: 'September 2015',
    		edEnd: 'Present',
    		edPlace: 'University named after Ivan Franko, Lviv',
    		edDepartment: 'Applied Mathematics and Computer Science'
    	},
    	workExp: {
    		expStart: 'February 2016',
    		expEnd: 'Present',
    		position: 'Freelancer',
    		exps: ['Design and develop pages', 'Cross-Browser developing'],
    	},
    	summary: 'I can work under pressure and to tigho deadlines, study new technologies fast. I am highly motivated, energetic and imaginative person.'
    };

    this.newResume = {};

    this.ResuMake = function() {
    	console.log(this.newResume.skills);
    	var skillsArr = this.newResume.skills.split(',');
    	console.log(skillsArr);
    	this.resume = this.newResume;
    	this.resume.skills = [];
    	this.resume.skills = skillsArr;
    };
  });
