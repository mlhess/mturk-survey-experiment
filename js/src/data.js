/* DATA OPTIONS FOR DIFFERENT TEMPLATES */  
// intro for templates
var contextIntro = {
    header: 'Overview of tasks',

    desc: [
        'This is a study in decision making that has three parts.  You will earn a 50 cent base pay for completing the study.',
        'In the first part, we will ask you to tell us what you think about various images.',
        'In the second part, you will have a chance to earn a bonus.  Your earnings for the second part will be in tokens, which will be converted to money.  Every 10 tokens you earn is worth $1 to you.  Your earnings will depend on the decisions you make and on the decisions that the other worker you are paired with will make.',
        'In the final third part, we will ask you to tell us about yourself.',
        'You will be paid the base plus the bonus within 3 days after you complete this task.',
        '<h2 class="error display heavy">Note: If you are using Internet Explorer you will not be able to complete the survey. Please try using Safari, Firefox, or Chrome.</h2>'
    ]
}

// politician intro
var contextPolIntro = {
    header: 'Tell us what you think',

    desc: [
        'You will now be shown several pairs of pictures of politicians.  Please indicate which politician in each pair you find more attractive.'
    ]
}

// politician data
var contextPol = {
    question: 'Please indicate which politician in each pair you find more attractive',

    errorText: 'Please select one of the politicians above',

photos: [
        {
            images: [
                {
                    src: '/images/male1.png',
                    alt: 'male photo',
                    id: 'male1',
                    label: 'I think this person is more attractive',
                    name: 'ex-presidents',
                    value: '0'
                },
                {
                    src: '/images/male2.png',
                    alt: 'male Photo',
                    id: 'male2',
                    label: 'I think this person is more attractive',
                    name: 'ex-presidents',
                    value: '1'
                }
            ]
        },
        {
            images: [
                {
                    src: '/images/male3.png',
                    alt: 'male photo',
                    id: 'male3',
                    label: 'I think this person is more attractive',
                    name: 'senators',
                    value: '1'
                },
                {
                    src: '/images/male4.png',
                    alt: 'Male Photo',
                    id: 'male4',
                    label: 'I think this person is more attractive',
                    name: 'senators',
                    value: '0'
                }
            ]
        },
        {
            images: [
                {
                    src: '/images/female1.png',
                    alt: 'female photo',
                    id: 'female1',
                    label: 'I think this person is more attractive',
                    name: 'governors',
                    value: '1'
                },
                {
                    src: '/images/female2.png',
                    alt: 'female Photo',
                    id: 'female2',
                    label: 'I think this person is more attractive',
                    name: 'governors',
                    value: '0'
                }
            ]
        },
        {
            images: [
                {
                    src: '/images/female3.png',
                    alt: 'female photo',
                    id: 'female3',
                    label: 'I think this person is more attractive',
                    name: 'house-reps',
                    value: '1'
                },
                {
                    src: '/images/female4.png',
                    alt: 'female Photo',
                    id: 'female4',
                    label: 'I think this person is more attractive',
                    name: 'house-reps',
                    value: '0'
                }
            ]
        },
        {
            images: [
                {
                    src: '/images/male5.png',
                    alt: 'male photo',
                    id: 'male5',
                    label: 'I think this person is more attractive',
                    name: 'vice-presidents',
                    value: '0'
                },
                {
                    src: '/images/male6.png',
                    alt: 'male Photo',
                    id: 'male6',
                    label: 'I think this person is more attractive',
                    name: 'vice-presidents',
                    value: '1'
                }
            ]
        }
    ]
}

// voting line intro
var contextVotingLineIntro = {
    header: 'Tell us what you think',

    desc: [
        'On the next screen you will see two images of voting lines.  Please indicate which voting line you think is the longest.'
    ]
}

// voting line data
var contextVotingLine = {
    validateType: 'radio',

    question: 'Please indicate which voting line you think is longest.',

    errorText: 'Please select one of the voting lines above',

    photos: [
        {
            images: [
                {
                    src: '/images/line1.png',
                    alt: 'Voting line photo',
                    id: 'voting-line-1',
                    label: 'I think this line is longest',
                    name: 'voting-line',
                    value: 0
                },
                {
                    src: '/images/line2.png',
                    alt: 'Voting Line Photo',
                    id: 'voting-line-2',
                    label: 'I think this line is longest',
                    name: 'voting-line',
                    value: 1
                }
            ]
        }
    ]
}

// state questions intro
var contextStatesIntro = {
    header: 'Tell us what you think',

    desc: [
        'You will now be shown several states.  For each state, please answer the following question: Which presidential candidate, Barack Obama or Mitt Romney, won this state’s electoral votes in the 2012 presidential election?',
    ]
}

// states data intro
var contextStatesIntro = {
    header: 'Tell us what you think',

    desc: [
        'You will now be shown several states.  For each state, please answer the following question: What was the state’s average temperature in 2013?',
    ]
}

var contextStates = {
    validateType: 'radio',

    question: 'What was the state’s average temperature in 2013?',

    errorText: 'Please select one of the temperatures above',

    states: [
        {
            src: '/images/NorthCarolina.png',
            alt: 'North Carolina photo',
            name: 'north-carolina',
            state: 'North Carolina'
        },
        {
            src: '/images/Georgia.png',
            alt: 'Georgia photo',
            name: 'georgia',
            state: 'Georgia'
        },
        {
            src: '/images/Florida.png',
            alt: 'Florida photo',
            name: 'florida',
            state: 'Florida'
        },
        {
            src: '/images/Ohio.png',
            alt: 'Ohio photo',
            name: 'ohio',
            state: 'Ohio'
        }
    ],

    statesTemp: {
        'north-carolina': [
            {
                name: 'north-carolina',
                text: '59.77',
                value: '1',
                id: 'avg'
            },
            {
                name: 'north-carolina',
                std: 0.73,
                value: 0,
                avg: 59.77,
                id: 'std'
            }
        ],
        'georgia': [
            {
                name: 'georgia',
                text: '63.99',
                value: '1',
                id: 'avg'
            },
            {
                name: 'georgia',
                std: 0.88,
                value: 0,
                avg: 63.99,
                id: 'std'
            }
        ],
        'florida': [
            {
                name: 'florida',
                text: '71.04',
                value: '1',
                id: 'avg'
            },
            {
                name: 'florida',
                std: 0.77,
                value: 0,
                avg: 71.04,
                id: 'std'
            }
        ],
        'ohio': [
            {
                name: 'ohio',
                text: '51.85',
                value: '1',
                id: 'avg'
            },
            {
                name: 'ohio',
                std: 1.12,
                value: 0,
                avg: 51.85,
                id: 'std'
            }
        ]
    }
}

// token intro
var contextTokenIntro = {
    header: "Bonus Task",

    descAll: [
        [
            'For the following task, you will be randomly paired with another person, whom we will call your match.  The match will be randomly selected from the other workers.',
        ],
        [
            'In our economy one way the government uses taxes is to generate revenue from its citizens’ earnings to redistribute wealth. The government’s role in redistributing this wealth can be large or small.  Sometimes people have a lot of wealth in our economy and sometimes people have little wealth in our economy.',
            'You have the opportunity to tell the government if it should get involved in wealth redistribution between you and your match and, if so, how large or small the redistribution should be.  If your decision is selected for payment, it will determine how many tokens each person gets paid in this task.'
        ],
        [
            'When you and your match have entered all of your decisions, we will then randomly pick one of the decisions from the set that you and your match made.  The selected decision will determine the final token split between you and your match and will be paid out to you as a bonus for this task.'
        ]
    ]
}

// potential order of tokens
var contextTokens = [
    [10,9,8,7,6,5,4,3,2,1,0],
    [0,1,2,3,4,5,6,7,8,9,10],
    [5,10,9,8,7,6,4,3,2,1,0],
    [5,0,1,2,3,4,6,7,8,9,10]
];

// survey intro
var contextSurveyIntro = {
    header: 'Tell us about yourself',

    desc: [
        'Please complete the following demographic survey.  Your responses will not be connected to your worker ID.' 
    ]
}

// survey data
var contextSurvey = {
    politics: {
        question: 'In politics, as of today, do you consider yourself:',
        name: 'pol-classification',
        error: 'political classifications',
        inputs: [
            {
                id: 'republican',
                label: 'a Republican'
            },
            {
                id: 'democrat',
                label: 'a Democrat'
            },
            {
                id: 'democratish',
                label: 'leaning more towards the Democratic party'
            },
            {
                id: 'republicanish',
                label: 'leaning more towards the Republican party'
            }
        ]
    },

    age: {
        error: 'age'
    },

    gender: {
        question: 'What is your gender?',
        name: 'gender',
        inputs: [
            {
                id: 'male',
                label: 'male'
            },
            {
                id: 'female',
                label: 'female'
            }
        ],
        error: 'genders'
    },

    race: {
        question: 'Which of the following best describes your racial or ethnic background?',
        name: 'race',
        inputs: [
            {
                id: 'asian',
                label: 'Asian/Pacific Islander'
            },
            {
                id: 'black',
                label: 'Black'
            },
            {
                id: 'latino',
                label: 'Hispanic/Latino'
            },
            {
                id: 'white',
                label: 'white'
            }
        ],
        other: {
            id: 'other',
            label: 'other',
            use: {},
            idText: 'other-text'
        },
        error: 'ethnicities'
    },

    voted: {
        question: 'Have you ever voted in a government election?',
        name: 'voted',
        inputs: [
            {
                id: 'yes',
                label: 'yes'
            },
            {
                id: 'no',
                label: 'no'
            }
        ],
        error: 'selections'
    }
}

var contextThankYou = {
    header: 'Thank You',

    desc: [
        'Thank you for participating in our study.' 
    ]
}