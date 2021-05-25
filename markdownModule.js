
function markdownModule(data){
  let screenshots = '';
	if (data.imageURL) {
		// for (let i = 0; i < data.imageURL.split(',').length; i++) {
		// 	 screenshots += `<kbd>![screenshot-${i + 1}](${data.imageURL.split(',')[i].trim()})</kbd>`;
		// }
    for(let i=0;i< data.imageURL.split(',').length; i++){
      screenshots += `<img src = "${data.imageURL.split(',')[i].trim()}" width=100% >\n`;
    }

	}

    return `     

![ACM-HEADER](https://user-images.githubusercontent.com/14032427/92643737-e6252e00-f2ff-11ea-8a51-1f1b69caba9f.png)

<h1 align="center"> 
${data.title} 
</h1>

<p align="center"> 
${data.description}
</p>

<p>
  <a href="https://acmvit.in/" target="_blank">
    <img alt="made-by-acm" src="https://img.shields.io/badge/MADE%20BY-ACM%20VIT-blue?style=for-the-badge" />
  </a>
</p>

---

## Overview
${data.overview}


## Screenshots
${screenshots}

---

## Usage
\`\`\`
${data.usage}
\`\`\`

---
## Authors

${data.authors}




## Contributors
${data.contributors}
   `;
}


module.exports = {markdownModule}
