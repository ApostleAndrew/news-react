import React from 'react'

import './main.css'

const News = () => {
    return(
        <article>
			<div className="headline"><h2>Politics</h2></div>
			<div className="news-post">
				<div className="news-photo">
					<img src="img/politics/1.jpg" alt=""/>
				</div>
				<div className="news-name">
					<a href="#"><h2>Deal or no deal: How could Brexit play out?</h2></a>
				</div>
				<div className="news-description">
					<p>
					Alan McGuinness, political reporter
					As the clock ticks towards exit day, Theresa May is battling to agree a Brexit deal with the European Union and steer it through parliament in time.
					British politics is in uncharted territory, so predicting with a high degree of certainty how the next few months will pan out is risky.
					Think of it like a chaotic game of chess. One move in either direction could throw the entire board into turmoil and completely alter what follows.
					There are a myriad of outcomes, but here's a broad overview of how things could go between now and Brexit day in March.
					</p>
				</div>
			</div>
			<div className="news-post">
				<div className="news-photo">
					<img src="img/politics/2.jpg" alt=""/>
				</div>
				<div className="news-name">
					<a href="#"><h2>Alex Salmond denies misconduct at Edinburgh Airport</h2></a>
				</div>
				<div className="news-description">
					<p>
					Sky News understands that female employees expressed concerns to airport managers about what they regarded as inappropriate behaviour by Mr Salmond a decade ago.
					As first minister, he regularly passed through the airport terminal.
					A spokesperson for Edinburgh Airport said: "We can confirm we are assisting Police Scotland with their enquiries.
					"We cannot comment further at this time."
					While no formal complaint was made, airport officials related their concerns to the then-SNP MP Angus Robertson to advise him of the women's concerns.
					</p>
				</div>
			</div>
			<div className="news-post">
				<div className="news-photo">
					<img src="img/politics/3.jpg" alt=""/>
				</div>
				<div className="news-name">
					<a href="#"><h2>'Brexit can be stopped': Starmer contradicts Corbyn</h2></a>
				</div>
				<div className="news-description">
					<p>
					Labour's Sir Keir Starmer has told Sky News that Brexit "can be stopped" - directly contradicting recent comments by party leader Jeremy Corbyn.
					In an interview with German magazine Der Spiegel published last week, Mr Corbyn claimed Labour "can't stop" Brexit as he urged his party to "recognise the reasons why people voted Leave".
					However, speaking to Sky News this morning, Sir Keir directly countered the stance of his party leader.
					"Brexit can be stopped," the shadow Brexit secretary said. "But the real question is, what are the decisions we're going to face over the next few weeks and months?
					</p>
				</div>
			</div>
			<div className="news-post">
				<div className="news-photo">
					<img src="img/politics/4.jpg" alt=""/>
				</div>
				<div className="news-name">
					<a href="#"><h2>Brexit deal: What the UK and EU are yet to agree on</h2></a>
				</div>
				<div className="news-description">
					<p>Alan McGuinness, political reporter
						As the clock ticks towards exit day, Theresa May is battling to agree a Brexit deal with the European Union and steer it through parliament in time.
						British politics is in uncharted territory, so predicting with a high degree of certainty how the next few months will pan out is risky.
						Think of it like a chaotic game of chess. One move in either direction could throw the entire board into turmoil and completely alter what follows.
						There are a myriad of outcomes, but here's a broad overview of how things could go between now and Brexit day in March.
					</p>
				</div>
			</div>
		</article>

    )
}

export default News