const NewsArray = [
    {
        id:1,
        name: 'Deal or no deal: How could Brexit play out?',
        description: 'Alan McGuinness, political reporter As the clock ticks towards exit day, Theresa May is battling to agree a Brexit deal with the European Union and steer it through parliament in time. British politics is in uncharted territory, so predicting with a high degree of certainty how the next few months will pan out is risky. Think of it like a chaotic game of chess. One move in either direction could throw the entire board into turmoil and completely alter what follows. There are a myriad of outcomes',
        image:"/img/money/1.jpg",
    },
    {
        id:2,
        name: 'May facing resignations of ministerial aides over fixed-odds',
        description: 'Sky News understands that female employees expressed concerns to airport managers about what they regarded as inappropriate behaviour by Mr Salmond a decade ago. As first minister, he regularly passed through the airport terminal. A spokesperson for Edinburgh Airport said: "We can confirm we are assisting Police Scotland with their enquiries. "We cannot comment further at this time." While no formal complaint was made, airport officials related their concerns to the then-SNP MP Angus Robertson',
        image:"/img/money/2.jpg",
    },
    {
        id:3,
        name: 'Brexit can be stopped: Starmer contradicts Corbyn',
        description: 'Alan McGuinness, political reporter As the clock ticks towards exit day, Theresa May is battling to agree a Brexit deal with the European Union and steer it through parliament in time. British politics is in uncharted territory, so predicting with a high degree of certainty how the next few months will pan out is risky. Think of it like a chaotic game of chess. One move in either direction could throw the entire board into turmoil and completely alter what follows. There are a myriad of outcomes',
        image:"/img/money/3.jpg",
    },
    {
        id:4,
        name: 'Brexit deal: What the UK and EU are yet to agree on',
        description: 'Alan McGuinness, political reporter As the clock ticks towards exit day, Theresa May is battling to agree a Brexit deal with the European Union and steer it through parliament in time. British politics is in uncharted territory, so predicting with a high degree of certainty how the next few months will pan out is risky. Think of it like a chaotic game of chess. One move in either direction could throw the entire board into turmoil and completely alter what follows. There are a myriad of outcomes',
        image:"/img/money/4.jpg",
    },
    
   
]
export const getNewsMap = (array) => {
    return array.reduce((map,news)=>({
        ...map,
        [news.id]:news,
}),{})
}

export default NewsArray