# kalite-mapping

I used this to create a placement test, where I could find out which exercises the student was able to solve. There are three parts:
* the webpage that is served to the student, which contains an iframe with the KA Lite exercise
* an userscript that runs on the iframe, literally reads the results that are displayed (x or v's) and notifies the script in the parent page of changes
* an algorithm that communicates with the webpage, and tells it which exercise to load in the iframe 

It's been written quick and dirty, and currently I have some pieces missing. But it gives an idea how it worked.
