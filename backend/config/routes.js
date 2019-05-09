module.exports = app => {
    // urls públicas
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    // urls com acesso após logado no sistema
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/products')
        .get(app.api.products.get)
        .post(app.api.products.save)

    app.route('/products/:id')
        .get(app.api.products.getById)
        .put(app.api.products.save)
        .delete(app.api.products.remove)

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)

    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)
}