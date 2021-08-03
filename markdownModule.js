const mit = '![AUR license](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)';
const apache = '![AUR license](https://img.shields.io/static/v1?label=License&message=Apache&color=blue)';
const gnu2 = '![AUR license](https://img.shields.io/static/v1?label=License&message=GNU-2.0&color=blue)';
const gnu3 = '![AUR license](https://img.shields.io/static/v1?label=License&message=GNU-3.0&color=blue)';
const none = '![AUR license](https://img.shields.io/static/v1?label=License&message=none&color=red)';

function markdownModule(data){
  let usage = '';
  if(data.usage)
  {
    for(let i=0;i<data.usage.split(',').length;i++)
    {
      usage += `${data.usage.split(',')[i].trim()}\n`
    }
  }

  if(data.License === 'MIT'){
    licenseLogo = mit
}else if (data.License === 'GNU 2.0'){
    licenseLogo = gnu2
}else if(data.License === 'GNU 3.0'){
    licenseLogo = gnu3
}else if(data.License === 'Apache 2.0'){
    licenseLogo = apache
}else{
    licenseLogo = none
}
    return `     

![ACM-HEADER](https://user-images.githubusercontent.com/14032427/92643737-e6252e00-f2ff-11ea-8a51-1f1b69caba9f.png)

<h1 align="center"> 
${data.title} 
</h1>

<p>
  <a href="https://acmvit.in/" target="_blank">
    <img alt="made-by-acm" src="https://img.shields.io/badge/MADE%20BY-ACM%20VIT-blue?style=for-the-badge" />
  </a>
</p>

<p align="center"> 
${data.description}
</p>

---

## Overview
${data.overview}


## Screenshots
![Screenshot](assets/${data.imageURL})\n

---

## Usage
\`\`\`
${usage}
\`\`\`

---
## Authors

${data.authors}

## Contributors
${data.contributors}


${licenseLogo}

   `;
}


module.exports = {markdownModule}
