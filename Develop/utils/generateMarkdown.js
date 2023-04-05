// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  > ${data.description}

  ## Table of Contents
  * [General Info](#general-information)
  * [Technologies Used](#technologies-used)
  * [Preview](#preview)
  * [Setup](#setup)
  * [Usage](#usage)
  * [Features](#features)
  * [Credits](#credits)
  * [Project Status](#project-status)
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Contact](#contact)
  * [License](#license)
  
  ## General Information
  ${data.generalInformation}

  ## Technologies Used
  ${data.technologiesUsed}

  ## Preview

  ## Setup
  ${data.setup}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## Credits
  ${data.credits}

  ## Project Status
  Project is: _${data.projectStatus}_ 

  ## User Story

  \```md
  ${data.userStory}
  \```

  ## Acceptance Criteria

  \```md
  ${data.acceptanceCriteria}
  \```

  ## Contact
  ${data.contact}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;

