import React, { Component } from "react"

export default class extends Component {
    state = {
        year: 0,
        month : 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
    }

    componentDidMount() {
        this.timer = setInterval(() => this.queryCountDown(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    queryCountDown = () => {
        const timestampOf2020 = 1577836800;
        const now = Math.floor(Date.now() / 1000);
        const gap = timestampOf2020 - now;
        this.setState({
            year: Math.floor(gap / (3600 * 24 * 365)),
            month: Math.floor(gap % (3600 * 24 * 365) / (3600 * 24 * 30)),
            day: Math.floor(gap % (3600 * 24 * 30) / (3600 * 24)),
            hour: Math.floor(gap % (3600 * 24) / 3600),
            minute: Math.floor(gap % 3600 / 60),
            second: Math.floor(gap % 60),
        });
    }

    render() {
        return (
            <div
                style={{
                    border: `1px solid #ccc`,
                    width: `90%`,
                    height: `100px`,
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `space-around`,
                }}
            >
                <GapSection name="Years" count={this.state.year} />
                <GapSection name="Months" count={this.state.month} />
                <GapSection name="Days" count={this.state.day} />
                <GapSection name="Hours" count={this.state.hour} />
                <GapSection name="Minutes" count={this.state.minute} />
                <GapSection name="Seconds" count={this.state.second} />
            </div>
        );
    }
};

const GapSection = ({ name, count }) => (
    <span>
        <div
            style={{
                marginTop: `1rem`,
                marginBottom: `1rem`,
                fontSize: `300%`,
                textAlign: `center`,
            }}
        >
            {count}
        </div>
        <div
            style={{
                fontSize: `100%`,
                textAlign: `center`,
            }}
        >
            {name}
        </div>
    </span>
);
