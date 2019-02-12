const cast = db => async ({ size, page }) => {
    const castList = await db.shows.cast({ size, page });

    castList.forEach(show => {
        show.cast = show.cast.map(({ person }) => person);
        show.cast.sort(({ birthday: a }, { birthday: b }) => {
            return (a || '') >= (b || '') ? -1 : 1;
        });
    });

    return castList;
};

module.exports = { cast };
