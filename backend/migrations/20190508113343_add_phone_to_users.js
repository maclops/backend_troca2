/*
exports.up = function (knex, Promise) {
    return knex.schema.table('users', table => {
        table.string('phone').notNull().defaultTo('(34)9999-9999')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('products', table => {
        table.dropColumn('quantity');
    })
};
*/