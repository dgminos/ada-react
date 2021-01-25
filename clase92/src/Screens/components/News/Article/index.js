



const Article = () => {
    const article = {
        title: 'articulo 1',
        date: '23 Enero 2021',
        author: 'Gabi',
        text: 'David Keith Lynch, más conocido como David Lynch, es un director de cine, actor, productor de música electrónica y guionista estadounidense. Su actividad artística se extiende asimismo al terreno de la pintura, la música, la publicidad, la fotografía, e incluso el diseño de mobiliario.',
        comments: '5 comments'
    }

    return (
        <>
            <h1>{article.title}</h1>
            <h5>{article.date}</h5>
            <h4>{article.author}</h4>
            <p>{article.text}</p>
            <p>{article.coments}</p>
        </>
    )
}
export default Article