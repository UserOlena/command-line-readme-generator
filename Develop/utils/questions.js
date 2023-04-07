// function validates to ensure that all required fields are completed and not left blank.
function mandatoryInputValidation(value) {
    if (!value) {
      return 'Please enter a valid input.';
    } else {
      return true;
    }
}


// an array of prompt questions for user input
const questions = [
    {
        name: 'title',
        message: 'Kindly provide the project TITLE by typing it in.',
        type: 'input',
        validate: mandatoryInputValidation,
    },
    {
        name: 'description',
        message: 'Could you please provide a brief DESCRIPTION of your project?',
        type: 'input',
        validate: mandatoryInputValidation,
    },
    {
        name: 'isLiveDemo',
        message: 'Whould you like to include LIVE DEMO link to your readme?',
        type: 'confirm',
    },
    {
        name: 'liveDemoLink',
        message: 'Please provide a link to your project live preview.',
        type: 'input',
        when: (answers) => answers.isLiveDemo === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isGeneralInfo',
        message: 'Whould you like to include GENERAL INFO section into your readme?',
        type: 'confirm',
    },
    {
        name: 'generalInfo',
        message: 'Explain what your project is about in general terms.',
        type: 'input',
        when: (answers) => answers.isGeneralInfo === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isPreview',
        message: 'Whould you like to include PREVIEW section into your readme?',
        type: 'confirm',
    },
    {
        name: 'preview',
        message: 'Please provide a path to your preview image/gif file within your repository or URL.',
        type: 'input',
        when: (answers) => answers.isPreview === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isTechnologiesUsed',
        message: 'Are you interested in creating a section for your readme that specifies the technologies utilized in your project',
        type: 'confirm',
    },
    {
        name: 'technologiesUsed',
        message: 'Please provide a list of the technologies used in your project, separated by commas.',
        type: 'input',
        when: (answers) => answers.isTechnologiesUsed === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'installation',
        message: 'Please provide instructions for installing the software.',
        type: 'input',
        validate: mandatoryInputValidation,
    },
    {
        name: 'usage',
        message: 'Provide instructions on how to utilize your application.',
        type: 'input',
        validate: mandatoryInputValidation,
    },
    {
        name: 'isFeatures',
        message: 'Whould you like to include APPLICATION\'S FEATURES section into your readme?',
        type: 'confirm',
    },
    {
        name: 'features',
        message: 'Please provide a description of you application\'s features?',
        type: 'input',
        when: (answers) => answers.isFeatures === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isCredits',
        message: 'Whould you like to include CREDITS section into your readme?',
        type: 'confirm',
    },
    {
        name: 'credits',
        message: 'Please provide details of the person or organization to whom you would like to attribute credit for your project.',
        type: 'input',
        when: (answers) => answers.isCredits === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isContributing',
        message: 'Whould you like to include CONTRIBUTING section into your readme?',
        type: 'confirm',
    },
    {
        name: 'contributing',
        message: 'Please provide information on how to contribute to your project.',
        type: 'input',
        when: (answers) => answers.isContributing === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isTests',
        message: 'Whould you like to include TESTS section into your readme?',
        type: 'confirm',
    },
    {
        name: 'tests',
        message: 'Please include information in your project\'s README file regarding how to run tests for your project?',
        type: 'input',
        when: (answers) => answers.isTests === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isQuestions',
        message: 'Whould you like to include QUESTIONS section into your readme?',
        type: 'confirm',
    },
    {
        name: 'gitHubUserName',
        message: 'Please provide your Git-Hub account user name.',
        type: 'input',
        when: (answers) => answers.isQuestions === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'email',
        message: 'Please provide your email address.',
        type: 'input',
        when: (answers) => answers.isQuestions === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'questions',
        message: 'Please provide additional details on how individuals can contact you if they have any questions or concerns.',
        type: 'input',
        when: (answers) => answers.isQuestions === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isProjectStatus',
        message: 'Whould you like to include PROJECT STATUS section into your readme?',
        type: 'confirm',
    },
    {
        name: 'projectStatus',
        message: 'Choose your project status:',
        type: 'list',
        choices: [
            'complete', 
            'in development', 
            'abandoned'
        ],
        when: (answers) => answers.isProjectStatus === true,
    },
    {
        name: 'isUserStory',
        message: 'Whould you like to include USER STORY section into your readme?',
        type: 'confirm',
    },
    {
        name: 'userStory',
        message: 'Please provide user story for your project.',
        type: 'input',
        when: (answers) => answers.isUserStory === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isAcceptanceCriteria',
        message: 'Whould you like to include ACCEPTANCE CRITERIA section into your readme?',
        type: 'confirm',
    },
    {
        name: 'acceptanceCriteria',
        message: 'Please provide acceptance criteria for your project.',
        type: 'input',
        when: (answers) => answers.isAcceptanceCriteria === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'isContact',
        message: 'Whould you like to include CONTACT section into your readme?',
        type: 'confirm',
    },
    {
        name: 'contact',
        message: 'Kindly provide your contact information, with each type of contact separated by commas.',
        type: 'input',
        when: (answers) => answers.isContact === true,
        validate: mandatoryInputValidation,
    },
    {
        name: 'license',
        message: 'Please choose the license for your project:',
        type: 'list',
        choices: [
            'MIT', 
            'GPLv2', 
            'Apache 2.0',
            'GPLv3',
            'BSD 3-clause',
            'Unlicense'
        ],
    },
]


module.exports = questions;