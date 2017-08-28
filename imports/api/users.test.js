import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { validateNewUser } from './users';

if (Meteor.isServer) {
  describe('users', function() {

    it('Should allow valid email', function() {
      const testUser = {
        emails: [
          {
            address: 'Test@example.com'
          }
        ]
      };

      const res = validateNewUser(testUser);

      expect(res).toBe(true);
    });


    it('Should reject invalid email', function () {

      const testUser = {
        emails: [
          {
            address: 'Testxample.com'
          }
        ]
      };

      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });
  });
}










// const add = (a, b) => a + b;
// const add = (a, b) => {
//   if (typeof b !== 'number') {
//     return a + a;
//   }
//   return a + b;
// }
//
// const square = (a) => a * a;
//
//
//
//
//
// describe('add', function() {
//   it('should add two numbers', function () {
//     const res = add(11, 9);
//
//     expect(res).toBe(20);
//
//     if (res !== 20) {
//         throw new Error('Sum was not equal to expected value')
//     }
//   });
//
//   it('should double a single number', function() {
//     const res = add(44);
//
//     expect(res).toBe(88);
//   })
// });
// describe('square', function() {
//   it('Should square a number', function() {
//     const res = square(2)
//
//     expect(res).toBe(4);
//   })
// });
