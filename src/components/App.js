import React from 'react'
import unsplash from '../api/unplash'

import SearchBar from './SearchBar'
import ImageList from './imageList'

class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
        const resp = await unsplash.get(`/search/photos`, {
            params: { query: term }
        })

        this.setState({ images: resp.data.results })
    }

    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App