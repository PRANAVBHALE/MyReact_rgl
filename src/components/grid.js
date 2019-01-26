import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import _ from 'lodash'


class MyFirstGrid extends Component {

    state = {
        layout: [
            { i: 'Card 1', x: 0, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
            { i: 'Card 2', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'Card 3', x: 4, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
            { i: 'Card 4', x: 0, y: 1, w: 1, h: 2, minW: 2, maxW: 4 },
            { i: 'Card 5', x: 1, y: 1, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'Card 6', x: 4, y: 1, w: 1, h: 2, minW: 2, maxW: 4 }
        ],
        clearSaveBtn: false
    }

    componentDidMount() {

        const userSettings = localStorage.getItem('UserSettings')

        this.setState({
            layout: userSettings
        })
    }
    saveSettings() {
        const userSettings = this.state.layout

    //    const a = localStorage.setItem('UserSettings', userSettings)
        localStorage.setItem('UserSettings', JSON.stringify(userSettings));

        this.setState({
            clearSaveBtn: false
        })

        console.log(userSettings);
    //    console.log(a);
        
    }

    // loadUserSettings() {
    //     alert('clicked')
    //     debugger
    //     const userSettings = localStorage.getItem('UserSettings')

    //     this.setState({
    //         layout: userSettings,
    //         clearSaveBtn: false
    //     })
    // }

    x() {
     //   alert('clicked')
      //  debugger
        const userSettings = JSON.parse(localStorage.getItem('UserSettings'));
        
        const a = this.state.layout

        const result = _.isEqual(userSettings,a)
        console.log(result);
        

        this.setState({
            layout: userSettings,
            clearSaveBtn: false
        })
    }

    onLayoutChange(newLayout) {
        const b4 = this.state.layout

        this.setState({
            layout: newLayout,
            clearSaveBtn: true
        })

        const after = this.state.layout

        const result1 = _.isEqual(b4, newLayout)
        const result2 = _.isEqual(after, newLayout)
        console.log(result1, result2);

    }

    render() {
        // layout is an array of objects, see the demo for more complete usage

        return (<div>
            <button style={{ display: this.state.clearSaveBtn ? null : 'none' }} onClick={() => this.saveSettings()}>Save</button>

            {/* <button style={{ display: this.state.clearSaveBtn ? null : 'none' }} onCLick={() => this.x()}>Clear</button> */}

            <button style={{ display: this.state.clearSaveBtn ? null : 'none' }} onClick={() => this.x()}>Clear</button>
            <GridLayout
                style={styles.box}
                className="layout" layout={this.state.layout}
                cols={12} rowHeight={30} width={1200}
                onLayoutChange={(newLayout) => this.onLayoutChange(newLayout)}
            >
                <div key="Card 1">Card 1</div>
                <div key="Card 2">Card 2</div>
                <div key="Card 3">Card 3</div>
                <div key="Card 4">Card 4</div>
                <div key="Card 5">Card 5</div>
                <div key="Card 6">Card 6</div>
            </GridLayout>
        </div >

        )
    }
}



const styles = {
    box: {
        borderColor: 'black'
    }
}
export default MyFirstGrid