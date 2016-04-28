exports.up = function(knex, Promise) {
    return knex.schema.createTable('archer', function(table) {
        table.increments();
        table.integer('season');
        table.integer('espisode');
        table.string('synopsis');
        table.integer('upvotes');
        table.integer('downvotes');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('archer');
};
