// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "Boost Software License 1.0") {
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
    } else if(license == "BSD 3-Clause License") {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
    } else if(license == "Eclipse Public License 1.0") {
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
    } else if(license == "GNU GPL v3") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if(license == "The Hippocratic License 2.1") {
      return `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]`
    } else if (license == "IBM Public License Version 1.0") {
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
    } else if(license == "ISC") {
      return `[![License](https://img.shields.io/badge/License-ISC-blueviolet.svg)]`
    } else if(license == "MIT") {
      return `[![License](https://img.shields.io/badge/License-MIT-blueviolet.svg)]`
    } else if(license == "None") {
      return ""
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Boost Software License 1.0") {
      return `(https://www.boost.org/LICENSE_1_0.txt)`
    } else if (license == "BSD 3-Clause License") {
      return `(https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license == "Eclipse Public License 1.0") {
      return `(https://opensource.org/licenses/EPL-1.0)`
    } else if (license == "GNU GPL v3") {
      return `(https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == "The Hippocratic License 2.1") {
      return `(https://firstdonoharm.dev)`
    } else if (license == "IBM Public License Version 1.0") {
      return `(https://opensource.org/licenses/IPL-1.0)`
    } else if (license == "ISC") {
      return `(https://opensource.org/licenses/ISC)`
    } else if (license == "MIT") {
      return `(https://opensource.org/licenses/MIT)`
    } else if (license == "None") {
      return ""
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}


## Description
${data.description}

# Table of Contents
- [DESCRIPTION](#description)
  
- [USAGE](#usage)
  
- [INSTALLATION](#installation)
  
- [LICENSE](#license)
  
- [CREDITS/CONTRIBUTING](#contributing)
  
- [CONTACT/QUESTIONS](#contactGH)

## Usage
${data.usage}

## Installation
${data.installation}
  
## License
${renderLicenseBadge(data.license)}

${renderLicenseLink()}
  
## Credits/contributors:
${data.contribution}

## Questions

contact me at,[Email]${data.email}) or contact me via [Github](${data.gbcontact})`;
}

module.exports = generateMarkdown;
