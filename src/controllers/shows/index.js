const deflt = {
    size: 10,
    maxSize: 100,
    page: 0
};

const cast = (db, models) => async (req, res, next) => {
    let size = Number(req.query.size) || deflt.size;
    const page = Number(req.query.page) || deflt.page;

    if (size > deflt.maxSize) {
        size = deflt.maxSize;
    }

    try {
        const shows = await models.shows.cast(db)({ size, page });
        if (!shows.length) res.status(404).json(shows);

        res.status(200).json(shows);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    cast
};
