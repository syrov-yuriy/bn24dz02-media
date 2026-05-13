import Airtable from "airtable";

const token = 'patzgawpx6WuJ6v5u.94ff76b605d466b67c3b751d85eaed234f6b684a8b55f485640be4e09fbec26b';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});

let base = Airtable.base('appOSA7ZUZYFvY4wT');

function getPostTeasers() {
    return new Promise((resolve, reject) => {
        const content = [];
        base('articles')
            .select({maxRecords: 100})
            .firstPage().then((result) => {
                result.forEach(record => {
                    content.push({
                        id: record.id,
                        title: record.fields['Name'],
                        description: record.fields['Description'],
                        link: record.fields['Link'],
                        image: record.fields['Image'],
                        time: record.fields['Reading time'],
                    })
                });
                resolve(content);
            })
    })
}

export {getPostTeasers}