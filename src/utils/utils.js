import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
  SHORTS_MOVIES_DURATION,
 } from '../constants/constants';

export const convertDuration = (duration) => {
  const hours = Math.trunc(duration / 60);
  const munutes = duration % 60;
  const resultTime = [];

  if (hours) resultTime.push(`${hours}ч`);
  if (munutes) resultTime.push(`${munutes}м`);

  return resultTime.join(' ');
}

export const apiRequestEmulation = (isFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFail) reject(new Error('ошибка'));
      resolve('успех');
    }, 500)
  })
}

export const getCards = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= SCREEN_SM) {
    return SCREEN_XXL;
  } else if (screenWidth <= SCREEN_MD) {
    return SCREEN_XL;
  }

  return SCREEN_LG;
}

const checkMovieDuration = (movieDuration, isShortsIncluded, shortsDurationCriteria = SHORTS_MOVIES_DURATION) => {
  return (isShortsIncluded && (movieDuration <= shortsDurationCriteria)) || (!isShortsIncluded && (movieDuration > shortsDurationCriteria));
}

const filterMovieByQuerry = (movie, searchQuerry) => {
  const lowerQuerry = searchQuerry.toLowerCase();
  return movie.nameRU.toLowerCase().includes(lowerQuerry);
}

export const movieFilter = (movie, { querry, includeShorts }) => {
  return checkMovieDuration(movie.duration, includeShorts) && filterMovieByQuerry(movie, querry);
}