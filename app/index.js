import {Person, SuperPerson} from './person';

const bob = new Person('Walter');

console.log(bob.speak('I am the one who knocks!'));

const superSarah = new SuperPerson('Sarah', 'Tip toe real quiet');

superSarah.speak('Hi I\'m super Sarah');

superSarah.saySuperpower();
