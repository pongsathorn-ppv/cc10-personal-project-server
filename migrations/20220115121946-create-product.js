"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			price: {
				type: Sequelize.DECIMAL,
			},
			quantity: {
				type: Sequelize.INTEGER,
			},
			sold: {
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.TEXT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			subCategoryId: {
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
						tableName: "sub_categories",
					},
					key: "id",
				},
				allowNull: false,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Products");
	},
};
