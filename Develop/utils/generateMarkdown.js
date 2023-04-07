// function generates a license badge and a corresponding link depending on the selection made by the user.
function renderLicenseBadge( { license } ) {
  let licenseBadge = '';
  const url = 'https://img.shields.io/badge/';

  if (license === 'MIT') {
    licenseBadge = `[![License: MIT license](${url}license-MIT_license-success)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GPLv2') {
    licenseBadge = `[![License: GPL v2](${url}License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === 'Apache 2.0') {
    licenseBadge = `[![License](${url}License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPLv3') {
    licenseBadge = `[![License: GPL v3](${url}License-GPL_v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'BSD 3-clause') {
    licenseBadge = `[![License](${url}License-BSD__3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'Unlicense') {
    licenseBadge = `[![License: Unlicense](${url}license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    licenseBadge = '';
  }

  return licenseBadge;
}


// function generates license link based on user's choice
function renderLicenseLink( { license } ) {
  let licenseLink = '';

  if (license === 'MIT') {
    licenseLink = `[${license}](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GPLv2') {
    licenseLink = `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === 'Apache 2.0') {
    licenseLink = `[${license}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPLv3') {
    licenseLink = `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'BSD 3-clause') {
    licenseLink = `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'Unlicense') {
    licenseLink = `[${license}](http://unlicense.org/)`;
  } else {
    licenseLink = '';
  }

  return licenseLink;
}


// function generates a project status badge depending on the user's preference.
function renderProjectStatusBadge( {isProjectStatus, projectStatus} ) {
  let projectStatusBadge = '';
  const url = 'https://img.shields.io/badge/';

  if (isProjectStatus) {
    if (projectStatus === 'complete') {
      projectStatusBadge = `## Project Status \n![Project status](${url}Status-Complete-success)\n\n---\n`;
    } else if (projectStatus === 'in development') {
      projectStatusBadge = `## Project Status \n![Project status](${url}Status-In_Development-blue)\n\n---\n`;
    } else if (projectStatus === 'abandoned') {
      projectStatusBadge = `## Project Status \n![Project status](${url}Status-Abandoned-inactive)\n\n---\n`;
    } 
  } else {
    projectStatusBadge = '';
  }

  return projectStatusBadge;
}


// function produces a live demo section based on the user's input.
function liveDemo( { isLiveDemo, liveDemoLink } ) {
  if (isLiveDemo) {
    return `> Live demo [_here_](${liveDemoLink})`;
  } else {
    return '';
  }
}


// function generates readme table of content based on user's choices
function tableOfContent(boolean, string) {
  if (boolean) {
    return string;
  } else {
    return '';
  }
}


// function creates README sections according to the user's preference of whether to include specific sections or not.
function readmeSection(boolean, dataValue) {
  if (boolean) {
    return `${dataValue} \n\n---\n` ;
  } else {
    return '';
  }
}


// function produces README sections that contain an unordered list with bullet points.
function unorderedListSection(boolean, dataValue) {
  if (boolean) {
    const userValuesArray = dataValue.split(',');
    const styledUserValues = [`${userValuesArray[0]}`];

    for (let i = 1; i < userValuesArray.length; i++) {
      styledUserValues.push(`- ${userValuesArray[i]}`);
    };

    styledUserValues.push('\n---\n')

    return styledUserValues.join('\n');
  } else {
    return '';
  }
}


// function generates Questions section content based on user choice
function renderQuestionsSection( { isQuestions, gitHubUserName, email, questions } ) {
  if (isQuestions) {
    return `## Questions \n> ${questions} \n- [${gitHubUserName}](https://github.com/${gitHubUserName}) \n- ${email} \n---`;
  } else {
    return '';
  }
}


// function generates Markdown content for a README file.
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data);

  return `
# ${data.title} \n
${licenseBadge} \n
> ${data.description} \n
${liveDemo(data)}
---

## Table of Contents
${tableOfContent(data.isGeneralInfo, '* [General Information](#general-information)')}
${tableOfContent(data.isPreview, '* [Preview](#preview)')}
${tableOfContent(data.isTechnologiesUsed, '* [Technologies Used](#technologies-used)')}
* [Installation](#installation)
* [Usage](#usage)
${tableOfContent(data.isFeatures, '* [Features](#features)')}
${tableOfContent(data.isCredits, '* [Credits](#credits)')}
${tableOfContent(data.isContributing, '* [Contributing](#contributing)')}
${tableOfContent(data.isTests, '* [Tests](#tests)')}
${tableOfContent(data.isQuestions, '* [Questions](#questions)')}
${tableOfContent(data.isProjectStatus, '* [Project Status](#project-status)')}
${tableOfContent(data.isUserStory, '* [User Story](#user-story)')}
${tableOfContent(data.isAcceptanceCriteria, '* [Acceptance Criteria](#acceptance-criteria)')}
${tableOfContent(data.isContact, '* [Contact](#contact)')}
* [License](#license)
---

${readmeSection(data.isGeneralInfo, `## General Information \n${data.generalInfo}`)}
${readmeSection(data.isPreview, `## Preview \n![Preview](${data.preview})`)}
${unorderedListSection(data.isTechnologiesUsed, `## Technologies Used, ${data.technologiesUsed}`)}
## Installation
${data.installation}
---
## Usage
${data.usage}
---
${readmeSection(data.isFeatures, `## Features \n${data.features}`)}
${readmeSection(data.isCredits, `## Credits \n${data.credits}`)}
${readmeSection(data.isContributing, `## Contributing \n${data.contributing}`)}
${readmeSection(data.isTests, `## Tests \n${data.tests}`)}
${renderQuestionsSection(data)}
${renderProjectStatusBadge(data)}
${readmeSection(data.isUserStory, `## User Story
\`\`\`md
${data.userStory}
\`\`\` `)}
${readmeSection(data.isAcceptanceCriteria, `## Acceptance Criteria
\`\`\`md
${data.acceptanceCriteria}
\`\`\` `)}
${unorderedListSection(data.isContact, `## Contact, ${data.contact}`)}
## License
${renderLicenseLink(data)}
`.split(/\r?\n/).filter(line => line.trim() !== '').join('\n').replaceAll('---', '\n---');
}


module.exports = generateMarkdown;