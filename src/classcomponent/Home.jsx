import react, { Component } from 'react'
import Newsitems from './Newsitems'



export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            totalResult: 0,
            articles: []
        }
    }
    async getAPIData(q) {
        var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&Language=${this.props.language}&sortBy=publishedAt&apiKey=c2238f8265484928b90ec1f0abfd32a6`)
        response = await response.json()
        this.setState({
            totalResult: response.totalResult,
            articles: response.articles
        })
    }

    componentDidMount() {
        this.getAPIData(this.props.q)
    }

    componentDidUpdate(oldprops) {
        if (this.props !== oldprops) {
            if (this.props.search && this.props.search !== oldprops.search)
                this.getAPIData(this.props.search)
            else
                this.getAPIData(this.props.q)
        } 
    }
    render() {
        return (
            <>
                <div className="container-fluid my-2">
                    <h4 className="bg-secondary text-light text-center py-2">{this.props.q} News Items</h4>

                </div>
                <div className="row">
                    {
                        this.state.articles.map((item, index) => {
                            return <Newsitems
                                key={index}
                                title={item.title}
                                description={item.description}
                                source={item.source.name}
                                url={item.url}
                                pic={item.urlToImage}
                                date={(new Date(item.publishedAt).toLocaleDateString())}

                            />
                        })
                    }
                </div>
            </>
        )
    }
}