class DbServices {

  getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} status: ${res.status}`);
    }

    return await res.json();
  }

  getAllGoods = async () => {
    return await this.getResourse('http://localhost:3000/data')
  }
}

export default DbServices;