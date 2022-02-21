const findTheOldest = function(peopleArr) {
  return peopleArr.reduce((person1, person2) => {
  	let person1Age = 0;
    let person2Age = 0;
  
  	if(Object.hasOwn(person1, 'yearOfDeath')) {
			person1Age = person1.yearOfDeath - person1.yearOfBirth;
		} else {
    	const today = new Date();
      const year = today.getFullYear();
    	person1Age = year - person1.yearOfBirth;
    };
    
    if(Object.hasOwn(person2, 'yearOfDeath')) {
			person2Age = person2.yearOfDeath - person2.yearOfBirth;
		} else {
    	const today = new Date();
      const year = today.getFullYear();
    	person2Age = year - person2.yearOfBirth;
    };
    
    return (person1Age > person2Age ? person1 : person2);
  });
};

// Do not edit below this line
module.exports = findTheOldest;
