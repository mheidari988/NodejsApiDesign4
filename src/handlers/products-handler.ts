import prisma from "../modules/db";

const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    });

    res.status(200).json({
        data: user.products
    });
}

const getProductById = async (req, res) => {
    const product = await prisma.product.findFirst({
        where: {
            id: req.params.id,
            belongsToId: req.user.id
        }
    })

    res.status(200).json({
        data: product
    });
}

const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    });

    res.status(200).json({ data: product });
}

const updateProduct = async (req, res) => {
    const product = await prisma.product.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name
        }
    });

    res.status(200).json({ data: product });
}

const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({
        data: deleted
    });
}

export const productsHandler = { getProducts, getProductById, createProduct, updateProduct, deleteProduct }