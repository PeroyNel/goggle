Goggle Search Engine (Google Clone)

This application has the ability to search for up-to-date results, news,
images and videos. It also features a modern UI and dark mode. The Front
End is built with React components while the styling is done with
TailwindCSS. The data used to populate the components are fetched by
using the Google Search API from RapidAPI.

Some problems I ran into while doing this project including the solutions I chose to fix them.

Error 1:

The first error I encountered that needed attention was an issue relating to ‘craco’ or Create React App Configuration Override which is simply a configuration layer for ‘create-react-app’. 

The error message I received was: 

"'craco is not recognized as an internal or external command, operable program or batch file." 

This seems to be a tailwindCSS specific error when working with react applications as the create-react-app command does not let you override the PostCSS configuration natively.

The solution I implemented:

To solve the error I manually installed craco in my root directory by using either "npm install @craco/craco --save" or alternatively "npm install @craco/craco", which allowed me to update the necessary configuration files in order to solve the error message.


Error 2:

The second error message I received was relating to the import of a react-router-dom component, namely “Switch” and “Navigate”.

The error message I received was:

Attempted import error: 'Switch' is not exported from 'react-router-dom' and attempted import error: 'Navigate' is not exported from 'react-router-dom'
 
The solution I implemented:
 
It seems that the nature of this problem is due to the component updates in version 6 of react router. I had the option to either use a legacy version such as version 4 and keep the components the same as they have always been or to adopt the version 6 conventions and change the components. In the case of using version 4 instead of the latest version,  “Routes” then changes to “Switch” while “Redirect” has changes to “Navigate”. To achieve this results I first used:

"npm uninstall react-router-dom” in the root directory followed by “npm install react-router-dom@4.2.2”
 
 
Error 3:
 
The error message was: 
 
A further version error relating to “react-router-dom” was discovered and I used npm install react-router-dom@5.2.0 as a solution.
 
 
Error 4:
 
TypeError: Cannot destructure property 'results' of 'Object(...)(...)' as it is undefined.
 
In order to fix it we need to make sure that the data we are returning with “const data = await response.json();” in ResultContextProvider.js must be undefined as well. On further inspection it was determined that the error lies with the fact that the entire application has not been wrapped inside of a ResultsContextProvider component within the index.js file.
 
 
Error 5:
This is an interesting error as I had used ?. in my queries and they serve to avoid exactly these kind of errors. 
 
{results?.results?.map(({ link, title}, index) => (
)
 
TypeError: _results$entries.map is not a function
 
Solution:
The solution was to destructure the results
 
const { results, isLoading, getResults, searchTerm } = useResultsContext();
 
To
 
const { results: { results, image_results, entries: news }, isLoading, getResults, searchTerm } = useResultsContext();

