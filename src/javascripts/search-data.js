import Airtable from "airtable";

const token = '';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});

let base = Airtable.base('');

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