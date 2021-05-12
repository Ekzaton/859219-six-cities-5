export const capitalize = (title: string): string => title[0].toUpperCase() + title.slice(1);

export const formatReviewDate = (date: string): string => new Date(date).toLocaleString(`en-US`, {month: `long`, year: `numeric`});

export const getRatingStars = (rating: number): string => `${rating * 20}%`;


