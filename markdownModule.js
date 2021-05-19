// module.exports = {markdownModule : (data)=>{
//     return `     
    
//     # ${data.title}
    
//     ##Description
//     ${data.description}
    
//     ##Overview
//     ${data.overview}

//     ##Usage
//     ${data.usage}

//     ##Authors
//     ${data.authors}

//     ##Contributors
//     ${data.contributors}

    
//     `;} 

// }


function markdownModule(data){
    return `     
    
# ${data.title}
    
## Description
${data.description}
    
## Overview
${data.overview}

## Usage
${data.usage}

## Authors
${data.authors}

## Contributors
${data.contributors}
   `;
}


module.exports = {markdownModule}