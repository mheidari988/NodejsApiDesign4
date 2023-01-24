import prisma from "../modules/db";

const getUpdateById = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({
        data: update
    });
}

const getUpdates = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    });

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, []);

    res.status(200).json({
        data: updates
    });
}

const createUpdate = async (req, res) => {
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.productId
        }
    });

    if (!product) {
        return res.status(404).json({
            message: "Product not exist"
        });
    }

    const update = await prisma.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            updatedAt: new Date(),
            product: {
                connect: {
                    id: req.body.productId
                }
            }
        }
    });

    res.status(200).json({ data: update });
}

const updateUpdate = (req, res) => {

}
const deleteUpdate = (req, res) => {

}

export const updatesHandler = { getUpdateById, getUpdates, createUpdate, updateUpdate, deleteUpdate };
