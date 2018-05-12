const data = [
    {
        id: 1,
        title: 'Microsoft Surface Pro',
        detail: 'The tablet that can replace your laptop',
        image_uri: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Ikjx?ver=f9d2&q=90&m=6&h=423&w=752&b=%23FFFFFFFF&f=jpg&o=f&aim=true',
        url: '#',
        votes: generateVoteCount(),
        submitter_username: 'eaglecheow1997',
    },
    {
        id: 2,
        title: 'Microsoft Surface Book 2',
        detail: 'The ultimate laptop, now a power house',
        image_uri: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1FU5k?ver=e2c0&q=90&m=6&h=423&w=752&b=%23FFFFFFFF&f=jpg&o=f&aim=true',
        url: '#',
        votes: generateVoteCount(),
        submitter_username: "satya_nadella233"
    },
    {
        id: 3,
        title: 'Microsoft Surface Studio',
        detail: 'Redefines an All-in-One',
        image_uri: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1uE1b?ver=4176&q=90&m=6&h=423&w=752&b=%23FFFFFFFF&f=jpg&o=f&aim=true',
        url: '#',
        votes: generateVoteCount(),
        submitter_username: 'steveloveMS',
    },
]

function generateVoteCount() {
    return Math.floor(Math.random() * 100);
}

export default data;