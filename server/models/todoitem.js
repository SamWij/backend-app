'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING,
        allowNull: false,
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    });

  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.Todo, {
        foreignKey: 'todoId',
        onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};
