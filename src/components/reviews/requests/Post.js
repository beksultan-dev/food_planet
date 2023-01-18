export const handle = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const elements = form.elements;

    const dateFull = new Date();
    const dateCurr =
        dateFull.getDate() +
        '.' +
        (dateFull.getMonth() + 1) +
        '.' +
        dateFull.getFullYear();
    const data = {dateCurr};

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type !== 'submit') {
            data[elements[i].id] = elements[i].value;
        }
    }
    postData(data);
};

export const postData = async (value) => {
    const url = 'http://localhost:3001/reviews';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
    };

    const result = await fetch(url, options);
    if (result.ok) {
        alert('added');
        return await result.json();
    } else {
        alert('some error');
    }
};
