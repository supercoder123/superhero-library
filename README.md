# superhero-name-library

### Installation
```npm i superhero-name-library ```

### Usage
``` const sh = require('superhero-name-library') ```

### API
1.  ```sh.random()```
	returns a random superhero name
	
2. ```sh.allNames()```
	returns an array containing all names 
	
3. ```sh.allNames(n)```
	returns an array containing first 'n' names 

4.  ```sh.rawList ```
	  returns entire json
	  
5.  ```sh.getByInitialLetter(char)```
	returns an array containing all superhero names starting from char
	**Eg:**   sh.getByInitialLetter("x")  ===> [ 'X-23', 'X-Man' ]

6. ```sh.getSuperHeroById(id)```
	returns a superhero with matching id     (id should be a number between 1 - 731) 
