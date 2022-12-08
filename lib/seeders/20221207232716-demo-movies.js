'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Die Hard',
        description: 'A Christmas movie',
        image: 'http://placekitten.com/200/300',
        releaseYear: 1987,
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Milo and Otis',
        description: 'Nature documentary',
        image: 'http://placekitten.com/200/300',
        releaseYear: 1992,
        genre_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'What About Love',
        description: 'Chemistry documentary',
        image: 'http://placekitten.com/200/300',
        releaseYear: 2018,
        genre_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
