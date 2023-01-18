export const deleteData = async (id) => {
    const url = 'http://localhost:3001/reviews/' + id;

    const options = {
        method: 'DELETE',
    };

    const result = await fetch(url, options);
    if (result.ok) {
        alert('deleted');
        return await result.json();
    } else {
        alert('some error');
    }
};
