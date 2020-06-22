import React from 'react';
import ReactDOM from 'react-dom';

const predictions = [
    {
        title: "You will find your lovee",
        src: "https://cdn.shopify.com/s/files/1/0630/8509/products/flat2550lovrs_large.jpg?v=1469723799"
    },
    {
        title: "Oh nooo, you will make mistake, please be prepared",
        src: "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2017/02/the-fool-tarot-card-021317.jpg"
    },
    {
        title: "You will get support in your current struggle",
        src: "https://theangelcardreaderdotorg.files.wordpress.com/2016/05/08-strength.jpg"
    }
];

// New component class starts here:
class FortuneTeller extends React.Component{
    render(){
        //make a variable n that will be assigned random number from 0 to 2
        const n = Math.floor(Math.random() * Math.floor(3));
        const prediction = predictions[n];
        const src = prediction['src'];
        return (
            <div>
                <h1>{prediction['title']}</h1>
                {/*change to src = get from predicition src*/}
                <img src={prediction['src']}/>
            </div>
        );
    }
}

ReactDOM.render(
    <FortuneTeller />,
    document.getElementById('root')
);