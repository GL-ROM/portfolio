import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('5dhZlimTSHcPfasHIsDhDV');
    return data;
}

// Getting the homepage and sections

export const getContentfulHomepage = async () => {
    const data = await contentfulClient.getEntry({entryId: '2p3haaXgocIJ4GYkr2hwZS', include: 3})
    return data;
}