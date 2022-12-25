export const getAvailableWords = async (word: string) => {
    console.log(word)
    return await fetch("http://localhost:5000").then(res => res.json())
}