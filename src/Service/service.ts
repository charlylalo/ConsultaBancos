export const getBanks = async (url: string) => {
  try {
    const res = await fetch(url, {headers:{
    'content-type': 'application/json;charset=UTF-8',
  }})
  const data = await res.json()
  return data
  } catch (error) {
    return error
  }
}