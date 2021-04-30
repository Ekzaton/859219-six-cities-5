export const capitalize = (title: string) => title[0].toUpperCase() + title.slice(1);

export const getRatingStars = (rating: number) => ({width: `${rating * 20}%`});


