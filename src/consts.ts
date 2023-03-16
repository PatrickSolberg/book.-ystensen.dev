// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Book.Øystensen.dev';
export const SITE_DESCRIPTION = 'Welcome to my bookshelf. Here you can find all the books I have read and rated.';
export const HOMEPAGE_URL = 'https://book.oystensen.dev';

export const getReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const noOfWords = text.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
};