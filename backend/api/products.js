// const queries = require('./queries')

module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const product = { ...req.body }
        if (req.params.id) product.id = req.params.id

        try {
            existsOrError(product.name, 'Nome não informado.')
            existsOrError(product.description, 'Descrição não informada.')
            // existsOrError(product.categoryId, 'Categoria não informada.')
            existsOrError(product.userId, 'Dono não informado.')
            existsOrError(product.content, 'Conteúdo não informado.')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (product.id) {
            app.db('products')
                .update(product)
                .where({ id: product.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('products')
                .insert(product)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }
/*
    const remove = async (req, res) => {
        try {
            existsOrErro(req.params.id, 'Código do Produto não informado.')

            const rowsDeleted = await appp.db('products')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Produto não foi encontrado!')

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('products')
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('products')
            .where({ id: req.params.id })
            .first()
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))
    }
*/
    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('products')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Produto não foi encontrado.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }
    
    const limit = 10
    const get = async (req, res) => {
        const page = req.params.page || 1

        const result = await app.db('products').count('id').first()
        const count = parseInt(result.count)

        app.db('products')
            .select('id', 'name', 'description', 'userId')
            .limit(limit).offset(page * limit - limit)
            .then(products => res.json({ data: products, count, limit }))
            .catch(err => res.status(500).send(err))
    }

        const getById = (req, res) => {
            app.db('products')
                .where({ id: req.params.id })
                .first()
                .then(product => {
                    product.content = product.content.toString()
                    return res.json(product)
                })
                .catch(err => res.status(500).send(err))
        }
    /*
        const getByUser = async (req, res) => {
            const userId = req.params.id
            const page = req.query.page || 1
            const users = await app.db.raw(queries.userWithChildren, userId)
            const ids = users.rows.map(u => u.id)
    
            app.db({p: 'products', u: 'users'})
                .select('p.id', 'p.name', 'p.description', 'p.imageUrl', { username: 'u.name' })
                .limit(limit).offset(page * limit - limit)
                .whereRaw('?? = ??', ['u.id', 'p.userId'])
                .whereIn('userId', ids)
                .orderBy('p.id', 'desc')
                .then(products => res.json(products))
                .catch(err => res.status(500).send(err))
        }
    */

    return { save, remove, get, getById }
    // return { save, remove, get, getById, getByUser }
}