async function hello() {
    const res = await fetch('http://localhost:3001/hello');
    const data = await res.json();
    return data.message;
}

export default hello;