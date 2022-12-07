'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Genres', [
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Romantic Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Suspense',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Science Fiction',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Documentary',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nature',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Biography',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chemistry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
